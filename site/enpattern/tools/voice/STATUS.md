# 음성 만들기 진행 상황 (2026-10-22)

다른 컴퓨터에서 이어 할 때 이 문서부터 읽는다. 만드는 방법은 [README.md](README.md).

## 정해진 것

| 항목 | 결정 |
|---|---|
| 문장 (약 6,900개) | **Kokoro**로 만든다. 목소리 4종 `af_sarah`(미국 여), `am_michael`(미국 남), `bf_emma`(영국 여), `bm_lewis`(영국 남) |
| 단어 (1,308개) | **Kokoro로는 안 만든다.** 다른 음성 서비스(Azure Speech 또는 Google Cloud TTS)로 만든다 — 아래 "단어" 참고 |
| 저장 위치 | 이 저장소 옆 폴더 `enpattern-audio` (별도 저장소, GitHub Pages). 아직 GitHub 저장소는 안 만들었다 |
| 파일 경로 | 단어 `<목소리>/w/<id>.mp3`, 문장 `<목소리>/s/<id>.mp3` — 단어를 다른 서비스로 만들어도 같은 폴더 이름(af_sarah 등)에 넣는다. 앱 코드는 안 바꾼다 |

### 목소리를 고른 과정

Kokoro 영어 목소리 28종을 모두 들어 보고 체크해서 골랐다.
- 미국 여: af_heart, af_bella, af_sarah 동점 → 단어 위주로 다시 들어 보고 **af_sarah**
- 미국 남: am_fenrir, am_michael, am_puck → **am_michael** (처음 정했던 am_onyx는 품질이 나빠서 뺐다)
- 영국 여: **bf_emma** / 영국 남: **bm_lewis** (기계음이 좀 있지만 Kokoro 영국 남자 목소리가 전부 약한 편이라 유지)

### 단어를 Kokoro로 안 하는 이유

Kokoro는 문장은 자연스럽지만 단어 하나만 읽히면 이상하다. 여러 방법을 들어 보며 시험했지만 다 문제가 남았다.
- 그냥 읽기: 끝소리가 뭉개짐 (TV → "티버")
- 끝에 마침표: 나아지지만 i'm, she, the 같은 말은 약하게 읽혀 흐릿함 ("i'm"이 "Jaim"처럼)
- 강세 넣기(ˌIm → ˈIm): 나아지지만 couldn't, didn't 같은 -n't 말이 이상함. bf_emma는 끝 t가 "te"처럼 들림
- 두 번 읽혀 두 번째만 쓰기: -n't 말은 나아지지만 다른 말은 더 나빠짐
- 느리게(0.85): 더 나빠짐
- 문장 속에서 읽혀 잘라 내기: 소리는 자연스럽지만 너무 짧고 중간에 끊김

`gen.py`의 `speak_word`에는 마지막으로 쓴 방식(마침표 + 강세 + -n't는 두 번 읽기)이 남아 있지만 **단어는 이걸로 만들지 않는다.**

## 남은 일

1. **문장 만들기** (Kokoro, 몇 시간 걸림. 멈추면 다시 실행해서 이어 만든다)
   ```bash
   cd site/enpattern/tools/voice
   .venv\Scripts\python.exe gen.py --out ../../../../../enpattern-audio --kind sentences
   ```
   끝나면 `<out>/failed.json` 확인 → 다시 실행해서 실패분 채우기.
2. **단어 서비스 정하기** — Azure Speech(추천) 또는 Google Cloud TTS
   - Azure: F0(무료) 등급은 신경망 음성 월 50만 자, 넘으면 요금 대신 요청이 막힘. 단어 전체는 4종 합쳐 약 3만 자. 무료 등급은 요청 속도 제한이 있어 4~5시간 걸릴 수 있음. Azure 포털에서 Speech 리소스(가격 등급 Free F0)를 만들고 **키와 지역**을 받는다
   - Google: 무료 한도는 더 크지만 결제 계정 연결이 필수이고 넘으면 자동 청구. 빠름
   - 키는 저장소에 커밋하지 않는다 (환경 변수로 넘긴다)
3. 고른 서비스로 미국·영국 남녀 후보 목소리 단어 샘플 → 한 번 듣고 고르기 → 단어 전체 만들기 (`<목소리>/w/`)
4. GitHub에 공개 저장소 `enpattern-audio` 만들기(만들기 전에 확인), mp3 올리기, GitHub Pages 켜기. `.venv`·모델 파일은 올리지 않는다
5. 앱에 연결하기 (따로 한다)

## 다른 컴퓨터에서 처음 준비

1. **Python 3.12** 설치 (3.13 이상은 Kokoro가 안 됨). 설치할 때 "Add python.exe to PATH" 체크
2. README의 "순서" 2)대로 `.venv` 만들고 CPU용 torch, requirements 설치
3. 저장소 옆에 `enpattern-audio` 폴더 만들기 (지금 컴퓨터에 있는 건 샘플뿐이라 옮길 필요 없음)
4. `python gen.py --out <enpattern-audio> --sample` 로 잘 되는지 확인 → `<out>/sample.html`
   - 처음 실행할 때 Kokoro 모델(약 300 MB)과 영어 사전을 자동으로 내려받는다
   - 폴더 경로에 한글이 있으면 espeak 데이터를 `~/.cache/enpattern-espeak-data`로 복사해서 쓴다 (gen.py가 알아서 함)
