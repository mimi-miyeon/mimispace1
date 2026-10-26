/* 전역 이름공간과 설정값. 모든 스크립트보다 먼저 로드한다. */
var EP = window.EP || {};
window.EP = EP;

EP.config = {
  version: "43",
  storageKey: "mmpattern.sample.v1",
  firebase: { key: "AIzaSyB564JPCQTuethG39piReuvr_flVSTgBKw", project: "enpattern-f5fa3" },
  pushDelay: 600,       /* 저장 후 서버에 보내기까지 기다리는 시간(ms) */
  retryDelay: 15000,    /* 오프라인일 때 다시 불러오기 간격(ms) */
  /* 학습 언어. en은 모든 사용자, pt(유럽 포르투갈어)는 운영자 코드만 (PT-PLAN.md)
     data: 세션 파일 폴더, tts: 브라우저 음성 언어, sample: 설정에서 들어 보는 문장 */
  langs: {
    en: { name: "영어", data: "js/data/", tts: "en-US" },
    pt: { name: "포르투갈어", data: "js/data-pt/", tts: "pt-PT", sample: "Muito prazer!" }
  },
  /* 듣기 mp3: <base><목소리>/s/<voiceId>.mp3 (만드는 법: tools/voice/README.md) */
  audio: {
    base: "https://mimi-miyeon.github.io/enpattern-audio/",
    voices: [["af_aoede", "미국 · 여성"], ["am_onyx", "미국 · 남성"], ["bf_emma", "영국 · 여성"], ["bm_daniel", "영국 · 남성"]],
    slowRates: [0.8, 0.7, 0.6],   /* 느리게 듣기 속도 고르기 */
    slowRate: 0.7,                /* 처음 값 */
    sample: "Nice to meet you!"   /* 설정에서 들어 보는 문장 (mp3가 있는 문장) */
  }
};
