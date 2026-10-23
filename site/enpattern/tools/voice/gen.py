"""Kokoro로 단어·문장 음성(mp3) 만들기

사용 예 (README.md 참고):
  python gen.py --out ../../../../../enpattern-audio --sample        # 목소리별 샘플 몇 개
  python gen.py --out ../../../../../enpattern-audio                 # 전체 (이미 있는 파일은 건너뜀)
  python gen.py --out ... --voices af_aoede --kind words               # 일부만

결과 위치: <out>/<목소리>/w/<id>.mp3 (단어), <out>/<목소리>/s/<id>.mp3 (문장)
id는 list.json에 있다 (build-list.js가 만든다). 앱도 같은 규칙으로 파일을 찾는다.
"""
import argparse, json, os, sys, time
import numpy as np

VOICES = {"af_aoede": "a", "am_onyx": "a", "bf_emma": "b", "bm_fable": "b"}  # a: 미국, b: 영국
RATE = 24000
HERE = os.path.dirname(os.path.abspath(__file__))
SAMPLE_WORDS = ["a", "tv", "ok", "water", "comfortable", "i'm", "she", "the", "her", "it's", "we're", "couldn't", "didn't", "shouldn't", "haven't", "isn't"]
SAMPLE_SENTENCES = 12


def trim(audio, thresh=0.01, pad=0.06):
    """앞뒤 조용한 부분을 잘라 내고 짧은 여백만 남긴다."""
    idx = np.where(np.abs(audio) > thresh)[0]
    if len(idx) == 0:
        return audio
    p = int(pad * RATE)
    return audio[max(0, idx[0] - p): min(len(audio), idx[-1] + p)]


def to_mp3(audio, path, kbps):
    import lameenc
    peak = float(np.max(np.abs(audio))) or 1.0
    pcm = (audio / peak * 0.89 * 32767).astype(np.int16)  # 소리 크기 맞추기 (약 -1 dB)
    enc = lameenc.Encoder()
    enc.set_bit_rate(kbps)
    enc.set_in_sample_rate(RATE)
    enc.set_channels(1)
    enc.set_quality(2)
    data = enc.encode(pcm.tobytes()) + enc.flush()
    tmp = path + ".part"
    with open(tmp, "wb") as f:
        f.write(data)
    os.replace(tmp, path)  # 중간에 멈춰도 깨진 파일이 남지 않게


def speak(pipe, text, voice, speed):
    parts = [np.asarray(r.audio, dtype=np.float32) for r in pipe(text, voice=voice, speed=speed) if r.audio is not None]
    if not parts:
        raise RuntimeError("소리가 만들어지지 않음")
    return np.concatenate(parts)


VOWELS = "AIOQWYaiuæɑɒɔəɛɜɪʊʌɐᵻ"  # misaki 발음 기호의 모음


def stressed(ps):
    """주 강세(ˈ)가 없으면 넣는다. i'm, she, the 같은 말은 문장 속 약한 발음으로 나와서 혼자 들으면 흐릿하다."""
    if "ˈ" in ps:
        return ps
    if "ˌ" in ps:
        return ps.replace("ˌ", "ˈ", 1)
    for i, c in enumerate(ps):
        if c in VOWELS:
            return ps[:i] + "ˈ" + ps[i:]
    return ps


def speak_word(pipe, text, voice, speed):
    """단어 하나 읽기. 강세를 넣고 끝에 마침표를 붙인다 (안 붙이면 TV가 "티버"처럼 끝이 뭉개진다).
    couldn't처럼 약한 모음(ᵊ)이 있는 말은 첫 단어를 서두르는 버릇 때문에 두 번 읽혀 두 번째만 쓴다."""
    g = pipe.g2p(text)
    ps = stressed(g[0] if isinstance(g, tuple) else g)
    one = f"[{text}](/{ps}/)."
    if "ᵊ" not in ps:
        return speak(pipe, one, voice, speed)
    rs = [r for r in pipe(one + " " + one, voice=voice, speed=speed) if r.audio is not None]
    dots = [t for t in (rs[0].tokens if len(rs) == 1 else []) if t.text == "."]
    if not dots or dots[0].end_ts is None:  # 시간 정보가 없으면 한 번 읽기로
        return speak(pipe, one, voice, speed)
    return np.asarray(rs[0].audio, dtype=np.float32)[int(dots[0].end_ts * RATE):]


def fix_espeak_path():
    """espeak-ng는 한글 등 ASCII가 아닌 경로를 못 읽는다. 그럴 땐 발음 데이터를 사용자 폴더 아래로 복사해서 쓴다."""
    import shutil, espeakng_loader
    src = espeakng_loader.get_data_path()
    if src.isascii():
        return
    dst = os.path.join(os.path.expanduser("~"), ".cache", "enpattern-espeak-data")
    if not dst.isascii():
        sys.exit("espeak-ng 데이터를 둘 영문 경로가 없습니다 (사용자 폴더 이름에 한글이 있음)")
    if not os.path.exists(os.path.join(dst, "phontab")):
        shutil.copytree(src, dst, dirs_exist_ok=True)
    espeakng_loader.get_data_path = lambda: dst


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True, help="음성 저장소(enpattern-audio) 폴더")
    ap.add_argument("--list", default=os.path.join(HERE, "list.json"))
    ap.add_argument("--voices", default=",".join(VOICES), help="쉼표로 구분")
    ap.add_argument("--kind", choices=["all", "words", "sentences"], default="all")
    ap.add_argument("--sample", action="store_true", help="목소리별 샘플만 (단어 16 + 문장 12)")
    ap.add_argument("--limit", type=int, default=0, help="종류별 앞에서 N개만")
    ap.add_argument("--kbps", type=int, default=32)
    ap.add_argument("--speed", type=float, default=1.0)
    ap.add_argument("--batch", type=int, default=100, help="N개 만들 때마다 쉬고 진행 상황을 한 줄 남긴다")
    ap.add_argument("--rest", type=float, default=20, help="한 묶음 끝나고 쉬는 초 (CPU 식히기, 0이면 안 쉼)")
    ap.add_argument("--threads", type=int, default=0, help="CPU 스레드 수 (0이면 torch 기본값). 줄이면 느려지지만 컴퓨터가 덜 바쁘다")
    a = ap.parse_args()

    fix_espeak_path()
    from kokoro import KPipeline  # 설치 확인을 늦게 해서 --help는 바로 뜨게
    if a.threads:
        import torch
        torch.set_num_threads(a.threads)

    L = json.load(open(a.list, encoding="utf-8"))
    words, sents = L["words"], L["sentences"]
    if a.sample:
        words = [w for w in words if w["text"] in SAMPLE_WORDS]
        step = max(1, len(sents) // SAMPLE_SENTENCES)
        sents = sents[::step][:SAMPLE_SENTENCES]
    if a.limit:
        words, sents = words[: a.limit], sents[: a.limit]
    jobs = []
    if a.kind in ("all", "words"):
        jobs += [("w", x) for x in words]
    if a.kind in ("all", "sentences"):
        jobs += [("s", x) for x in sents]

    pipes = {}
    fails = []
    for voice in [v.strip() for v in a.voices.split(",") if v.strip()]:
        lang = VOICES.get(voice)
        if not lang:
            sys.exit("모르는 목소리: " + voice)
        if lang not in pipes:
            pipes[lang] = KPipeline(lang_code=lang, repo_id="hexgrad/Kokoro-82M")
        for sub in ("w", "s"):
            os.makedirs(os.path.join(a.out, voice, sub), exist_ok=True)
        todo = [(k, x) for k, x in jobs if not os.path.exists(os.path.join(a.out, voice, k, x["id"] + ".mp3"))]
        print(f"[{voice}] 전체 {len(jobs)}개 중 새로 만들 것 {len(todo)}개", flush=True)
        t0, rested = time.time(), 0.0
        for i, (k, x) in enumerate(todo, 1):
            path = os.path.join(a.out, voice, k, x["id"] + ".mp3")
            try:
                text = x.get("say") or x["text"]
                say = speak_word if k == "w" else speak
                audio = say(pipes[lang], text, voice, a.speed)
                to_mp3(trim(audio), path, a.kbps)
            except Exception as e:  # 하나가 실패해도 나머지는 계속
                fails.append({"voice": voice, "id": x["id"], "text": x["text"], "error": str(e)})
            if i % a.batch == 0 or i == len(todo):
                el = time.time() - t0
                work = el - rested
                batches_left = (len(todo) - i + a.batch - 1) // a.batch
                left = work / i * (len(todo) - i) + batches_left * a.rest
                print(f"  {i}/{len(todo)}  경과 {el/60:.1f}분  남은 시간 약 {left/60:.0f}분", flush=True)
                if a.rest and i < len(todo):
                    time.sleep(a.rest)
                    rested += a.rest
    if fails:
        with open(os.path.join(a.out, "failed.json"), "w", encoding="utf-8") as f:
            json.dump(fails, f, ensure_ascii=False, indent=1)
        print(f"실패 {len(fails)}개 → failed.json (다시 실행하면 그것만 다시 만든다)")
    if a.sample:
        write_sample_page(a.out, [v.strip() for v in a.voices.split(",") if v.strip()], jobs)
    print("끝")


def write_sample_page(out, voices, jobs):
    """샘플을 브라우저로 들어 보는 페이지 (out/sample.html)."""
    import html
    rows = []
    for k, x in jobs:
        cells = "".join(
            f'<td><audio controls preload="none" src="{v}/{k}/{x["id"]}.mp3"></audio></td>' for v in voices)
        rows.append(f"<tr><th>{html.escape(x['text'])}</th>{cells}</tr>")
    head = "".join(f"<th>{v}</th>" for v in voices)
    page = ("<!doctype html><meta charset=utf-8><title>음성 샘플</title>"
            "<style>body{font:15px sans-serif;margin:24px}td,th{padding:6px 8px;text-align:left;border-bottom:1px solid #ddd}"
            "audio{width:160px}</style><h1>음성 샘플</h1><table><tr><th>문장</th>" + head + "</tr>" + "".join(rows) + "</table>")
    with open(os.path.join(out, "sample.html"), "w", encoding="utf-8") as f:
        f.write(page)
    print("샘플 페이지: " + os.path.join(out, "sample.html"))


if __name__ == "__main__":
    main()
