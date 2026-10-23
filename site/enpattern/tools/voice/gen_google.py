"""Google Cloud TTS로 단어 음성(mp3) 만들기 — 문장은 gen.py(Kokoro)

키는 환경 변수 GOOGLE_TTS_KEY 로 넘긴다 (저장소에 커밋하지 않는다).

사용 예 (STATUS.md 참고):
  python gen_google.py --list-voices en-GB                      # 쓸 수 있는 목소리 이름 보기
  python gen_google.py --out ../../../../../enpattern-audio --sample \
      --voices en-US-Chirp3-HD-Aoede,en-US-Chirp3-HD-Charon        # 후보 목소리 샘플 → <out>/google-sample/sample.html
  python gen_google.py --out ../../../../../enpattern-audio \
      --voices af_sarah=en-US-Chirp3-HD-Aoede,am_michael=...       # 전체 (이미 있는 파일은 건너뜀)

--voices 의 "폴더=목소리" 에서 폴더는 앱이 쓰는 이름(af_sarah 등). 결과: <out>/<폴더>/w/<id>.mp3
"""
import argparse, base64, io, json, os, sys, time, urllib.error, urllib.request, wave
import numpy as np
from gen import RATE, SAMPLE_WORDS, trim, to_mp3

API = "https://texttospeech.googleapis.com/v1/"
HERE = os.path.dirname(os.path.abspath(__file__))
USAGE = os.path.join(HERE, "google-usage.json")  # 보낸 글자 수 기록 (커밋하지 않음, .gitignore)

# 등급별 월 무료 글자 수. 자료마다 숫자가 달라서 낮은 쪽으로 잡았다 — https://cloud.google.com/text-to-speech/pricing 에서 확인
FREE = {"standard": 4_000_000, "wavenet": 1_000_000, "neural2": 1_000_000, "chirp3-hd": 1_000_000, "studio": 100_000}


def tier(voice):
    """목소리 이름으로 요금 등급 알아내기 (en-US-Chirp3-HD-Aoede → chirp3-hd). 모르는 등급은 무료 한도 0으로 본다."""
    v = voice.lower()
    for t in ("chirp3-hd", "neural2", "wavenet", "studio", "standard"):
        if t in v:
            return t
    return "other:" + voice


def load_usage():
    try:
        with open(USAGE, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return {}


def save_usage(u):
    with open(USAGE, "w", encoding="utf-8") as f:
        json.dump(u, f, ensure_ascii=False, indent=1)


def usage_lines(month_usage):
    out = []
    for t, n in sorted(month_usage.items()):
        free = FREE.get(t, 0)
        out.append(f"  {t:12} {n:>9,}자 / 무료 {free:>9,}자  → 남은 {max(0, free - n):>9,}자" + ("  ※ 무료 한도 넘음" if n > free else ""))
    return out or ["  (아직 없음)"]


def call(path, key, body=None):
    """API 호출. 요청이 많다고 막히거나(429) 서버 오류면 잠깐 쉬었다 다시 한다."""
    for n in range(6):
        req = urllib.request.Request(API + path + ("&" if "?" in path else "?") + "key=" + key,
                                     data=json.dumps(body).encode() if body else None,
                                     headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            msg = e.read().decode("utf-8", "replace")
            if e.code not in (429, 500, 503) or n == 5:
                raise RuntimeError(f"{e.code} {msg[:300]}")
            time.sleep(2 ** n)


def speak(key, text, voice):
    lang = "-".join(voice.split("-")[:2])  # en-US-Chirp3-HD-Aoede → en-US
    r = call("text:synthesize", key, {
        "input": {"text": text},
        "voice": {"languageCode": lang, "name": voice},
        "audioConfig": {"audioEncoding": "LINEAR16", "sampleRateHertz": RATE},
    })
    with wave.open(io.BytesIO(base64.b64decode(r["audioContent"]))) as w:
        if w.getframerate() != RATE or w.getnchannels() != 1:
            raise RuntimeError(f"형식이 다름: {w.getframerate()} Hz, {w.getnchannels()}ch")
        pcm = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16)
    return pcm.astype(np.float32) / 32768


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", help="음성 저장소(enpattern-audio) 폴더")
    ap.add_argument("--list", default=os.path.join(HERE, "list.json"))
    ap.add_argument("--voices", default="", help="쉼표로 구분. 폴더=목소리 또는 목소리만 (샘플)")
    ap.add_argument("--sample", action="store_true", help="샘플 단어만, <out>/google-sample 에 만든다 (마침표 붙인 것도 같이)")
    ap.add_argument("--dot", action="store_true", help="단어 끝에 마침표를 붙여 읽힌다")
    ap.add_argument("--limit", type=int, default=0, help="앞에서 N개만")
    ap.add_argument("--kbps", type=int, default=32)
    ap.add_argument("--list-voices", metavar="LANG", help="목소리 이름 보기 (예: en-US, en-GB)")
    ap.add_argument("--usage", action="store_true", help="이번 달 보낸 글자 수와 무료 한도까지 남은 양만 보기")
    ap.add_argument("--allow-paid", action="store_true", help="무료 한도를 넘어도 계속한다 (요금이 나갈 수 있음)")
    a = ap.parse_args()

    month = time.strftime("%Y-%m")
    if a.usage:
        print(f"{month} 사용량 (이 컴퓨터에서 gen_google.py로 보낸 것만, 정확한 값은 콘솔 Billing → Reports)")
        print("\n".join(usage_lines(load_usage().get(month, {}))))
        return

    key = os.environ.get("GOOGLE_TTS_KEY")
    if not key:
        sys.exit("환경 변수 GOOGLE_TTS_KEY 에 API 키를 넣어 주세요")

    if a.list_voices:
        vs = call("voices?languageCode=" + a.list_voices, key).get("voices", [])
        for v in sorted(vs, key=lambda v: v["name"]):
            print(f'{v["name"]:36} {v["ssmlGender"]}')
        return
    if not a.out or not a.voices:
        sys.exit("--out 과 --voices 가 필요합니다")

    words = json.load(open(a.list, encoding="utf-8"))["words"]
    out = a.out
    if a.sample:
        words = [w for w in words if w["text"] in SAMPLE_WORDS]
        words += [dict(w, id=w["id"] + "-dot", dot=True) for w in words]
        out = os.path.join(a.out, "google-sample")
    if a.limit:
        words = words[: a.limit]

    pairs = []
    for item in [v.strip() for v in a.voices.split(",") if v.strip()]:
        folder, _, voice = item.rpartition("=")
        pairs.append((folder or voice, voice))

    def text_of(w):
        return (w.get("say") or w["text"]) + ("." if a.dot or w.get("dot") else "")

    def todo_of(folder):
        return [w for w in words if not os.path.exists(os.path.join(out, folder, "w", w["id"] + ".mp3"))]

    # 시작 전에 무료 한도 안인지 확인
    usage = load_usage()
    mu = usage.setdefault(month, {})
    need = {}
    for folder, voice in pairs:
        t = tier(voice)
        need[t] = need.get(t, 0) + sum(len(text_of(w)) for w in todo_of(folder))
    over = [t for t, n in need.items() if mu.get(t, 0) + n > FREE.get(t, 0)]
    print(f"이번에 보낼 글자: " + ", ".join(f"{t} {n:,}자" for t, n in need.items()))
    if over and not a.allow_paid:
        print("\n".join(usage_lines({t: mu.get(t, 0) + need[t] for t in need})))
        sys.exit(f"무료 한도를 넘게 됩니다 ({', '.join(over)}). 요금이 나가도 되면 --allow-paid 를 붙이세요")

    fails = []
    sent = {}
    for folder, voice in pairs:
        os.makedirs(os.path.join(out, folder, "w"), exist_ok=True)
        todo = todo_of(folder)
        print(f"[{folder} ← {voice}] 전체 {len(words)}개 중 새로 만들 것 {len(todo)}개", flush=True)
        t0 = time.time()
        for i, w in enumerate(todo, 1):
            try:
                text = text_of(w)
                audio = speak(key, text, voice)
                t = tier(voice)  # 요청이 성공하면 글자 수가 청구된다
                mu[t] = mu.get(t, 0) + len(text)
                sent[t] = sent.get(t, 0) + len(text)
                to_mp3(trim(audio), os.path.join(out, folder, "w", w["id"] + ".mp3"), a.kbps)
            except Exception as e:  # 하나가 실패해도 나머지는 계속
                fails.append({"voice": folder, "id": w["id"], "text": w["text"], "error": str(e)})
            if i % 50 == 0 or i == len(todo):
                save_usage(usage)  # 중간에 멈춰도 기록이 남게
                el = time.time() - t0
                print(f"  {i}/{len(todo)}  경과 {el/60:.1f}분  남은 시간 약 {el/i*(len(todo)-i)/60:.0f}분", flush=True)
    save_usage(usage)
    print("이번 실행: " + (", ".join(f"{t} {n:,}자" for t, n in sent.items()) or "0자"))
    print(f"{month} 누적 (이 컴퓨터 기준):")
    print("\n".join(usage_lines(mu)))
    if fails:
        with open(os.path.join(out, "failed-google.json"), "w", encoding="utf-8") as f:
            json.dump(fails, f, ensure_ascii=False, indent=1)
        print(f"실패 {len(fails)}개 → failed-google.json (다시 실행하면 그것만 다시 만든다)")
    if a.sample:
        write_sample_page(out, pairs, words)
    print("끝")


def write_sample_page(out, pairs, words):
    """후보 목소리를 나란히 들어 보는 페이지 (out/sample.html)."""
    import html
    rows = []
    for w in words:
        cells = "".join(f'<td><audio controls preload="none" src="{f}/w/{w["id"]}.mp3"></audio></td>' for f, _ in pairs)
        rows.append(f"<tr><th>{html.escape(w['text'] + ('.' if w.get('dot') else ''))}</th>{cells}</tr>")
    head = "".join(f"<th>{html.escape(v)}</th>" for _, v in pairs)
    page = ("<!doctype html><meta charset=utf-8><title>Google 음성 샘플</title>"
            "<style>body{font:15px sans-serif;margin:24px}td,th{padding:6px 8px;text-align:left;border-bottom:1px solid #ddd}"
            "th{font-size:13px}audio{width:150px}</style><h1>Google 음성 샘플 (단어)</h1>"
            "<table><tr><th>단어</th>" + head + "</tr>" + "".join(rows) + "</table>")
    with open(os.path.join(out, "sample.html"), "w", encoding="utf-8") as f:
        f.write(page)
    print("샘플 페이지: " + os.path.join(out, "sample.html"))


if __name__ == "__main__":
    main()
