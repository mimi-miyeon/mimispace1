# enpattern (영어패턴)

초보자를 위한 하루 10분 영어 패턴 학습 서비스.

- 현재: 230개 패턴 세션 모두 제작 (검토 중). 남은 결정과 할 일은 [TODO.md](TODO.md)
- 주소: https://mimi-miyeon.github.io/mimispace1/site/enpattern/?c=개인코드
- 진도와 틀린 문제는 개인 코드별로 Firebase(Firestore)에 저장됩니다.
- 접근 규칙(등록 코드 목록 포함)은 이 저장소에 두지 않습니다.

## 스타일 빌드

저장소 루트에서:

```
npm install                 # 처음 한 번
npm run sass:enpattern      # scss → css (압축) + 오래된 사파리용 보조 CSS(tools/legacy-css.js). watch로 고친 뒤에도 배포 전에 한 번 실행
npm run watch:enpattern     # 작업 중 자동 컴파일
```

`css/style.css`는 컴파일 결과라 직접 고치지 않습니다. GitHub Pages가 이 파일을 그대로 쓰므로 함께 커밋합니다.

## UI 바꾸는 법

값은 한 곳, 공통 요소도 한 곳에서만 정의합니다. 고친 곳이 모든 화면에 반영됩니다.

| 바꾸고 싶은 것 | 고칠 곳 |
| --- | --- |
| 색 자체 (초록을 다른 초록으로) | `scss/_tokens.scss` 1. 팔레트 `--c-*` |
| 어떤 역할에 어떤 색을 쓸지 (강조색, 카드 배경, 초록 위 글자 등) | `scss/_tokens.scss` 2. 역할 |
| 버튼 종류별 색 | `scss/_tokens.scss` `--key-{primary,dark,soft,plain}-*` |
| 캐릭터 색 | `scss/_tokens.scss` `--char-{keycap,a,capsule,fan}-*` |
| 글자 크기 단계, 글꼴 | `scss/_tokens.scss` `--fs-*`, `--font-*` |
| 앱 최대 폭 (지금 768px = 태블릿) | `scss/_tokens.scss` `--app-width` + `abstracts/_mixins.scss` `$vw-max` |
| 반응형 범위·레이아웃 전환 지점 | `abstracts/_mixins.scss` `$vw-min`, `$vw-max`, `$bp-tablet` |
| 모서리 둥글기, 키캡 두께, 그림자 | `scss/_tokens.scss` `--radius-*`, `--lip-*`, `--shadow-*` |
| 캐릭터 크기 | `scss/_tokens.scss` `--char-{xs,sm,md,lg,hero}` |
| 모든 캐릭터의 공통 모양 | `scss/components/_char.scss` (`.char`) |
| 캐릭터 생김새(좌표, 표정) | `js/ui/characters.js` |
| 버튼·듣기 버튼·메시지 등 공통 요소 모양 | `scss/components/*.scss` |
| 공통 요소 마크업 | `js/ui/components.js` (`EP.ui`) |
| 특정 화면의 배치만 | `scss/screens/*.scss` |

규칙
- 컴포넌트와 화면 scss에는 색·글자 크기 값을 직접 쓰지 않고 토큰 변수만 씁니다.
- JS에는 색을 쓰지 않습니다. 아이콘은 `currentColor`, 캐릭터는 `.ch-*` 클래스로 칠합니다.
- 화면 JS는 버튼·캐릭터 마크업을 직접 쓰지 않고 `EP.ui.key()`, `EP.ui.char()` 등을 부릅니다.
- `index.html`의 `<meta name="theme-color">`(브라우저 상단 색)만은 CSS 변수를 쓸 수 없어서 `--c-green`을 바꾸면 함께 바꿔야 합니다.

### 반응형

모바일 우선이고 앱 최대 폭은 태블릿(768px)입니다. 더 넓은 화면에서는 768px로 가운데에 놓입니다.

- 크기 토큰은 `fluid(모바일 값, 태블릿 값)`으로 씁니다. 화면 폭 360px → 768px 사이에서 비례해 커지고,
  모바일 값이 최솟값이라 320px 같은 작은 폰에서도 글자가 더 작아지지 않습니다.
  - 예: `--fs-sm: fluid(14px, 16px)` → 360px 이하 14px, 768px 이상 16px
- 글자, 아이콘, 캐릭터, 버튼 높이, 좌우 여백, 탭 바, 모달 폭이 이렇게 커집니다.
- 600px 이상(`@include tablet`)에서는 세션·틀린 문제 목록이 2열이 됩니다.
- 화면 scss에서도 `fluid()`와 `@include tablet { }`을 쓸 수 있습니다.

### 공통 컴포넌트

| 컴포넌트 | 클래스 | JS |
| --- | --- | --- |
| 캐릭터 | `.char .char--{종류} .char--{크기}` | `EP.ui.char(kind, { size, expr, label })` |
| 키캡 버튼 | `.key .key--{primary,dark,soft,plain} .key--sm .key--gap` | `EP.ui.key(label, id, { variant, sm, gap, type })` |
| 글자 버튼 | `.link` | `EP.ui.link(label, id)` |
| 닫기 버튼 | `.icon-btn` | `EP.ui.closeBtn(id)` |
| 듣기 버튼 | `.spk` | `EP.ui.speakBtn({ "data-x": i }, size)` |
| 보통/느리게 | `.listen` | `EP.ui.listen(attr, labels)` |
| 탭 머리 | `.tab-head` | `EP.ui.tabHead(title, sub, charHtml)` |
| 가운데 메시지 | `.message .message--world` | `EP.ui.message({ char, title, text, action, world })` |
| 하단 시트 | `.sheet .sheet--{ok,bad,neutral}` | `EP.view.openSheet(type, html, text)` |
| 아이콘 | (svg) | `EP.icons.ico(name, size)` |

## 콘텐츠 형식 (js/data)

세션 하나가 파일 하나입니다: `js/data/pattern{번호}.js` 안에서 `(EP.sessions = EP.sessions || {})[번호] = { ... }`.
앱은 세션 파일을 필요할 때만 불러옵니다 (`EP.content.load(번호)`). 처음에는 세션 목록 `js/data/catalog.js`만 읽습니다.
세션 파일을 추가하면 `node site/enpattern/tools/build-catalog.js`로 목록을 다시 만듭니다. 목록의 `ready`(1번부터 만들어진 마지막 번호)보다 뒤 세션은 홈에서 '곧 열려요'로 보입니다.
문제 키는 `세션번호-문제id`(예: `2-b1`)이고, 틀린 문제 기록도 이 키로 저장됩니다.

홈 오른쪽 위 톱니는 듣기 설정(정답일 때 자동 듣기, 목소리 4종, 느리게 속도)입니다. 이 기기에만 저장되고 서버에는 보내지 않습니다.
자동 듣기는 처음엔 꺼져 있고, 아직 고르지 않은 사용자에게는 홈에서 한 번 켤지 묻는 모달을 보여 줍니다 (`autoplayAsked`).
운영자 확인용 설정(기록 지우기, 버전·저장 상태)은 주소 끝에 `&admin=1`을 붙이면 같은 톱니 화면 아래에 나옵니다.
음성 파일 주소·목소리 목록은 `js/config.js`의 `audio`, 파일 만드는 법은 `tools/voice/README.md`.
빈칸 문제에서 빈칸이 문장 맨 앞이면 `before: ""`, 뒤가 문장부호 하나면 `after: "?"`처럼 씁니다.

문제 하나(`items[]`)에 들어가는 값:

| 키 | 뜻 |
| --- | --- |
| `answers` | 이번 패턴으로 쓴 정답. 첫 번째가 대표 정답 |
| `alts` | 같은 뜻의 다른 표현. 정답으로 인정하고 채점 기준(정규화·작은 실수·오답)을 똑같이 적용. 빈칸 문제에는 쓰지 않음 |
| `tip` | 정답 시트에 보여 줄 다른 표현 1개 `{ en, why }`. 보고 듣기만. 문장 문제는 `tip.en`도 정답으로 인정 |
| `wrong` | 자주 나오는 오답 → 설명. 키는 정규화한 문장(소문자, 문장부호 없음, 축약형 풀기) |

다른 표현으로 맞히면 정답 시트에 "이번 패턴으로는" 줄로 대표 정답을 함께 보여 줍니다.

### 제작 사이클: 제작 → 점검 → 확정 또는 수정

1. 제작: 세션 파일을 만든다.
2. 점검: `npm run check:enpattern` 오류 0개, 그리고 검토 페이지로 사람이 읽어 본다.
   `node site/enpattern/tools/build-review.js 결과.html 2 3 4` (세션 번호를 빼면 전체)
3. 확정 또는 수정: 고칠 곳은 고치고 2번부터 다시.

### 콘텐츠 점검

문장을 추가하거나 고친 뒤 저장소 루트에서 실행합니다.

```
npm run check:enpattern
```

실제 채점 코드로 모든 문제를 풀어 보고 아래를 확인합니다. 오류(✗)가 있으면 고친 뒤 올립니다. 주의(!)는 확인만 권하는 항목입니다.

- 정답·다른 표현·팁을 그대로 넣으면 정답으로 판정되는지
- 예상 오답이 오답으로 판정되고 적어 둔 이유가 나오는지 (오타 허용에 걸려 통과되지 않는지)
- 예상 오답의 키가 정규화 형태인지, 정답과 겹치지 않는지
- `have`↔`has`, `a`↔`an` 같은 흔한 문법 실수가 정답으로 새어 나가지 않는지
- 패턴 정답에 핵심 부분이 있는지, 필수 항목·id 중복·같은 한국어 문장, 팁 설명 길이(40자 이하 권장)

## 파일 구조

빌드 없이 그대로 열리도록 일반 `<script>`로 불러오고, 모든 모듈은 전역 `EP` 하나에 붙습니다.
`index.html`의 스크립트 순서가 곧 의존 순서입니다.

```
index.html                마크업 뼈대 + css/js 불러오기
scss/
  style.scss              진입점 → css/style.css
  _tokens.scss            디자인 토큰 (색·글자·모양·크기·겹침 순서)
  abstracts/_mixins.scss  반복되는 모양 만드는 법 (safe-area, 표면, 키캡 그림자 등)
  base/_base.scss         리셋, 앱 틀
  components/             여러 화면이 같이 쓰는 요소
  screens/                화면별 배치
css/style.css             컴파일 결과 (배포용)
js/config.js              EP 이름공간, 버전·저장 키·Firebase 설정
js/data/catalog.js        EP.catalog  세션 목록 230개 (자동 생성)
js/data/pattern{N}.js     EP.sessions 세션 콘텐츠(문제·오답 설명·팁). 필요할 때 불러옴
js/util.js                EP.util     esc, today, withCore, slotted
                          EP.content  load, item, fullAnswer, coreOf, sessionSentences (세션 불러오기·문제 찾기)
js/store.js               EP.store    localStorage + Firestore 동기화
js/ui/icons.js            EP.icons    선 아이콘, 탭 바 아이콘
js/ui/characters.js       EP.chars    캐릭터 SVG 모양과 표정
js/ui/components.js       EP.ui       공통 UI 마크업
js/grade.js               EP.grade    채점(정규화·오타·오답 이유)
js/view.js                EP.view     루트 DOM, 토스트, 하단 시트
js/speech.js              EP.speech   음성 듣기: mp3(enpattern-audio, 목소리·느리게 속도는 홈 톱니 설정) → 없으면 브라우저 TTS
js/screens/tabs.js        EP.tabs     홈·전체 세션·틀린 문제 탭, 안내 화면
js/screens/session.js     EP.session  학습 세션 진행과 완료 화면
js/screens/follow.js      EP.follow   따라 말하기
js/main.js                시작(개인 코드 확인 → 기록 불러오기)
tools/check-content.js    콘텐츠 점검 (npm run check:enpattern)
tools/build-review.js     검토 페이지 만들기 (review.css 사용)
tools/build-catalog.js    세션 목록 js/data/catalog.js 만들기 (pattern-list.json + 세션 파일)
tools/pattern-list.json   230개 패턴 이름·뜻·핵심 부분·힌트 (제작 기준표)
tools/legacy-css.js       오래된 사파리(clamp 미지원)용 보조 CSS를 css/style.css 끝에 붙임 (sass:enpattern이 실행)
tools/voice/              단어·문장 음성(mp3) 만들기. 방법은 README.md, 진행은 STATUS.md
TODO.md                   남은 결정과 할 일
```
