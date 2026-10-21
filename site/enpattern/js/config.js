/* 전역 이름공간과 설정값. 모든 스크립트보다 먼저 로드한다. */
var EP = window.EP || {};
window.EP = EP;

EP.config = {
  version: "35",
  storageKey: "mmpattern.sample.v1",
  firebase: { key: "AIzaSyB564JPCQTuethG39piReuvr_flVSTgBKw", project: "enpattern-f5fa3" },
  pushDelay: 600,       /* 저장 후 서버에 보내기까지 기다리는 시간(ms) */
  retryDelay: 15000     /* 오프라인일 때 다시 불러오기 간격(ms) */
};
