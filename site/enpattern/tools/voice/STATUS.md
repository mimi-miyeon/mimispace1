# 음성 만들기 진행 상황 (2026-10-22)

다른 컴퓨터에서 이어 할 때 이 문서부터 읽는다. 만드는 방법은 [README.md](README.md).

## 정해진 것

| 항목 | 결정 |
|---|---|
| 문장 (약 6,900개) | **Kokoro**로 만든다. 목소리 4종 `af_aoede`(미국 여), `am_onyx`(미국 남), `bf_emma`(영국 여), `bm_fable`(영국 남) |
| 단어 (1,308개) | **Kokoro로는 안 만든다.** **Google Cloud TTS**로 만든다 (`gen_google.py`). 목소리는 아직 안 골랐다 |
| 저장 위치 | 이 저장소 옆 폴더 `enpattern-audio` (별도 저장소, GitHub Pages). 아직 GitHub 저장소는 안 만들었다 |
| 파일 경로 | 단어 `<목소리>/w/<id>.mp3`, 문장 `<목소리>/s/<id>.mp3` — 단어를 다른 서비스로 만들어도 같은 폴더 이름(af_aoede 등)에 넣는다. 앱 코드는 안 바꾼다 |

### 목소리를 고른 과정

Kokoro 영어 목소리 28종을 모두 들어 보고 체크해서 골랐다.
- 미국 여: 처음 af_aoede → 단어 발음이 어색해서 af_heart·af_bella·af_sarah를 들어 보고 af_sarah로 바꿨다가, **단어는 Google로 만들기로 한 뒤 문장만 다시 들어 보고 af_aoede로 되돌렸다 (2026-10-23)**
- 미국 남: 처음 am_onyx → 단어 발음 때문에 am_michael로 바꿨다가, 같은 이유로 **am_onyx로 되돌렸다 (2026-10-23)**. 목소리를 바꾼 이유는 모두 단어 때문이었고, 문장은 처음 목소리가 더 좋았다
- 영국 여: **bf_emma** / 영국 남: 처음엔 bm_george였고, 들어 보고 bm_lewis로 정했다가 기계음이 들려서 2026-10-23 bm_george·bm_fable 문장 샘플을 다시 듣고 **bm_fable**로 바꿨다

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
   - 기본으로 100개마다 20초 쉰다 (`--batch 100 --rest 20`). 컴퓨터를 덜 바쁘게 하려면 `--threads 12`처럼 CPU 스레드를 줄인다
   - 2026-10-23 회사 컴퓨터에서 시작: `--batch 100 --rest 20 --threads 12`
2. ~~**Google Cloud 준비**~~ **끝남 (2026-10-22)**. 단어 서비스는 Google로 정했다 (Piper는 어색, Azure는 카드 등록이 필요하고 계정 없이 들어 볼 곳이 없어 안 씀)
   - 프로젝트 `enpattern-tts`, 결제 계정 연결됨 (무료 한도 넘으면 자동 청구)
   - 예산 알림: 월 ₩1, 알림만(Alerts only — 지출 한도로 멈추는 기능은 Text-to-Speech에 안 됨). 1원이라도 나가면 메일이 온다
   - Cloud Text-to-Speech API 켜 둠. API 키 만듦 (이름 `enpattern-tts`, API 제한: Text-to-Speech만, Application restrictions: None)
   - 키는 저장소에 커밋하지 않는다. 키는 직접 따로 보관 중 — 잃어버렸으면 콘솔 **APIs & Services → Credentials**에서 다시 보거나 새로 만든다
3. **새 컴퓨터에서 키 설정** — PowerShell에서 한 번 `setx GOOGLE_TTS_KEY "키"` → VS Code를 완전히 껐다 켠다 (단어 생성은 Kokoro·torch 없이 numpy·lameenc만 있으면 된다)
4. 미국·영국 남녀 후보 목소리 단어 샘플 → 듣고 고르기 → 단어 전체 만들기 (`<목소리>/w/`). `gen_google.py`는 아직 한 번도 실행해 보지 않았다 (키 받기 전에 만듦)
   - 후보(기억에 의존, `--list-voices`로 확인): Chirp 3 HD `en-US-Chirp3-HD-Aoede`·`Kore`(여) / `Charon`·`Puck`(남), `en-GB-Chirp3-HD-…`; Neural2 `en-US-Neural2-F`(여)·`D`(남), `en-GB-Neural2-A`(여)·`B`(남)
   ```bash
   .venv\Scripts\python.exe gen_google.py --list-voices en-US            # 목소리 이름 보기
   .venv\Scripts\python.exe gen_google.py --out ../../../../../enpattern-audio --sample --voices <후보1>,<후보2>,...
   #   → <out>/google-sample/sample.html (단어 그대로 / 끝에 마침표 붙인 것 둘 다)
   .venv\Scripts\python.exe gen_google.py --out ../../../../../enpattern-audio --voices af_aoede=<목소리>,am_onyx=<목소리>,bf_emma=<목소리>,bm_fable=<목소리>
   ```
   - 마침표 붙인 쪽이 나으면 전체 만들 때 `--dot`. 실패분은 `<out>/failed-google.json`
   - **무료 한도 지키기**: 보낸 글자 수를 `google-usage.json`(커밋 안 함)에 달별·등급별로 기록한다. 실행이 끝날 때마다 남은 양을 보여 주고, 이번 실행이 무료 한도를 넘게 되면 **시작 전에 멈춘다** (넘겨도 되면 `--allow-paid`). `gen_google.py --usage`로 언제든 확인. 이 컴퓨터에서 보낸 것만 세므로 정확한 값은 콘솔에서
     - 무료 한도는 자료마다 달라 낮게 잡았다: Standard 400만, WaveNet·Neural2·Chirp 3 HD 100만, Studio 10만 자. 그 밖의 등급은 0(쓰려면 `--allow-paid`)
   - **단어를 다 만들면 API 키를 삭제한다** (콘솔 **APIs & Services → Credentials** → 키 `enpattern-tts` 삭제). Google TTS에는 금액에 닿으면 자동으로 멈추는 간단한 설정이 없어서, 키를 없애는 게 가장 확실한 차단이다. 다시 필요하면 새로 만든다. 환경 변수도 지운다: `[Environment]::SetEnvironmentVariable("GOOGLE_TTS_KEY", $null, "User")`
   - 사용량 확인: 콘솔 **Billing → Reports** (서비스를 Cloud Text-to-Speech로 거르기, 무료 한도 안이면 비용 ₩0), 요청 수는 **APIs & Services → Text-to-Speech API → Metrics**
5. GitHub에 공개 저장소 `enpattern-audio` 만들기(만들기 전에 확인), mp3 올리기, GitHub Pages 켜기. `.venv`·모델 파일·`google-sample/`은 올리지 않는다
6. 앱에 연결하기 (따로 한다)

## 다른 컴퓨터에서 처음 준비

1. **Python 3.12** 설치 (3.13 이상은 Kokoro가 안 됨). 설치할 때 "Add python.exe to PATH" 체크
2. README의 "순서" 2)대로 `.venv` 만들고 CPU용 torch, requirements 설치
3. 저장소 옆에 `enpattern-audio` 폴더 만들기 (지금 컴퓨터에 있는 건 샘플뿐이라 옮길 필요 없음)
4. `python gen.py --out <enpattern-audio> --sample` 로 잘 되는지 확인 → `<out>/sample.html`
   - 처음 실행할 때 Kokoro 모델(약 300 MB)과 영어 사전을 자동으로 내려받는다
   - 폴더 경로에 한글이 있으면 espeak 데이터를 `~/.cache/enpattern-espeak-data`로 복사해서 쓴다 (gen.py가 알아서 함)
