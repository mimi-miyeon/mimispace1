# 음성 파일 만들기 (Kokoro)

> 진행 상황과 남은 일은 [STATUS.md](STATUS.md).

영어패턴의 단어·문장 음성을 Kokoro(오픈소스 AI 음성, Apache-2.0)로 **미리 mp3로 만들어** 별도 저장소에 올린다.
앱은 실행 중에 AI를 부르지 않고, 만들어 둔 파일만 재생한다 (빠르고, 비용·키 없음, 오래된 기기도 됨).

## 정해진 것

| 항목 | 값 |
|---|---|
| 목소리 4종 | `af_sarah`(미국 여), `am_michael`(미국 남), `bf_emma`(영국 여), `bm_lewis`(영국 남) — Kokoro 영어 목소리 28종을 들어 보고 골랐다 |
| 대상 | 단어 약 1,300개 + 문장 약 6,900개 (`list.json`) |
| 형식 | mp3, 24 kHz 모노, 32 kbps, 앞뒤 빈 소리 잘라 냄, 소리 크기 맞춤 |
| 저장 위치 | **별도 저장소** `enpattern-audio` (GitHub Pages로 공개). 이 저장소에는 넣지 않는다 |
| 예상 용량 | 4종 합계 약 200 MB |

## 순서

```bash
# 0) 이 저장소 최신으로
git pull

# 1) 목록 만들기 (세션 내용이 바뀌면 다시 실행. 새로 생긴 항목만 따로 만들어진다)
node site/enpattern/tools/voice/build-list.js

# 2) 파이썬 가상환경 + 설치 (Windows PowerShell 예시, 처음 한 번)
cd site/enpattern/tools/voice
python -m venv .venv
.venv\Scripts\activate
pip install torch --index-url https://download.pytorch.org/whl/cpu   # CPU용 (용량 작음)
pip install -r requirements.txt
#   처음 실행할 때 Kokoro 모델(약 300 MB)과 영어 발음 사전이 자동으로 내려받아진다.

# 3) 샘플 만들고 들어 보기 → <out>/sample.html 을 브라우저로 연다
python gen.py --out <enpattern-audio 폴더> --sample

# 4) 전체 만들기 (몇 시간 걸림. 멈췄다 다시 실행하면 이어서 만든다)
python gen.py --out <enpattern-audio 폴더>

# 5) enpattern-audio 저장소에 커밋, 푸시
```

- `.venv/`는 커밋하지 않는다 (`.gitignore`에 있음).
- 폴더 경로에 한글이 있으면 espeak-ng가 발음 데이터를 못 읽는다. gen.py가 알아서 `~/.cache/enpattern-espeak-data`로 복사해 쓴다.
- 실패한 항목은 `<out>/failed.json`에 남는다. 다시 실행하면 없는 파일만 다시 만든다.
- 특정 문장 소리가 이상하면 그 mp3를 지우고 다시 실행한다.

## 파일 이름 규칙 (앱과 같아야 함)

- 경로: `<목소리>/w/<id>.mp3` (단어), `<목소리>/s/<id>.mp3` (문장)
- `id` = `voiceId(text)`: 따옴표(’)를 '로 바꾸고 공백을 정리한 글자에 FNV-1a 32비트 해시 → 36진수. `build-list.js` 참고.
- 단어는 소문자 키 (`i'm`, `don't` 그대로). TV, AC 같은 약어는 `say` 값으로 읽는다.
- 단어는 혼자 읽히면 어색해서 `speak_word`가 손본다: 끝에 마침표(안 붙이면 끝소리가 뭉개짐, 그래서 `a`는 "에이"), 주 강세가 없으면 넣기(i'm, she, the 등 약 80개), couldn't처럼 약한 모음 ᵊ가 있으면 두 번 읽혀 두 번째만 쓰기(약 60~70개). **그래도 단어 하나만 읽힐 때 어색해서, 단어는 다른 음성 서비스로 만들기로 했다 ([STATUS.md](STATUS.md)).**
- 빈칸 문제의 문장은 앞뒤를 붙인 완성 문장이다.
