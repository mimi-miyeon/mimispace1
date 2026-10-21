# enpattern (영어패턴)

초보자를 위한 하루 10분 영어 패턴 학습 서비스.

- 현재: 패턴 1(I have ~.) 샘플 세션
- 주소: https://mimi-miyeon.github.io/mimispace1/site/enpattern/?c=개인코드
- 진도와 틀린 문제는 개인 코드별로 Firebase(Firestore)에 저장됩니다.
- 접근 규칙(등록 코드 목록 포함)은 이 저장소에 두지 않습니다.

## 스타일 빌드

저장소 루트에서:

```
npm install                 # 처음 한 번
npm run sass:enpattern      # scss → css (압축)
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

문제 하나(`items[]`)에 들어가는 값:

| 키 | 뜻 |
| --- | --- |
| `answers` | 이번 패턴으로 쓴 정답. 첫 번째가 대표 정답 |
| `alts` | 같은 뜻의 다른 표현. 정답으로 인정하고 채점 기준(정규화·작은 실수·오답)을 똑같이 적용. 빈칸 문제에는 쓰지 않음 |
| `tip` | 정답 시트에 보여 줄 다른 표현 1개 `{ en, why }`. 보고 듣기만. 문장 문제는 `tip.en`도 정답으로 인정 |
| `wrong` | 자주 나오는 오답 → 설명. 키는 정규화한 문장(소문자, 문장부호 없음, 축약형 풀기) |

다른 표현으로 맞히면 정답 시트에 "이번 패턴으로는" 줄로 대표 정답을 함께 보여 줍니다.

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
js/data/pattern1.js       EP.data     세션 콘텐츠(문제·오답 설명·팁), 다음 세션 목록
js/util.js                EP.util     esc, today, withCore, slotted
                          EP.content  itemById, fullAnswer, coreOf, sessionSentences
js/store.js               EP.store    localStorage + Firestore 동기화
js/ui/icons.js            EP.icons    선 아이콘, 탭 바 아이콘
js/ui/characters.js       EP.chars    캐릭터 SVG 모양과 표정
js/ui/components.js       EP.ui       공통 UI 마크업
js/grade.js               EP.grade    채점(정규화·오타·오답 이유)
js/view.js                EP.view     루트 DOM, 토스트, 하단 시트
js/speech.js              EP.speech   음성 듣기(TTS)
js/screens/tabs.js        EP.tabs     홈·전체 세션·틀린 문제 탭, 안내 화면
js/screens/session.js     EP.session  학습 세션 진행과 완료 화면
js/screens/follow.js      EP.follow   따라 말하기
js/main.js                시작(개인 코드 확인 → 기록 불러오기)
```
