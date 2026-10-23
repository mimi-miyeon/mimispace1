/* 시작: 개인 코드 확인 → (배우는 언어의 세션 목록) → 서버 기록 불러오기 → 첫 화면 */
(function (EP) {
  "use strict";

  var store = EP.store, tabs = EP.tabs;

  store.setHooks({ isBusy: EP.session.isActive, onRefresh: tabs.render });

  function boot() {
    var onGithub = /github\.io$/.test(location.hostname);
    if (!store.code && onGithub) return tabs.renderLink(false);   /* 배포 주소는 개인 링크로만 */
    if (!store.remote) return tabs.render();                      /* 로컬 확인용: 이 기기에만 저장 */
    tabs.renderLoading();
    store.pull().then(function (res) {
      if (res === "reload") return;                               /* 배우는 언어가 달라서 새로고침 중 */
      if (res === "invalid") return tabs.renderLink(true);
      tabs.render(); store.drawSync();
      if (res === "offline") EP.view.toast("인터넷 연결을 확인해 주세요. 연결되면 다시 불러올게요");
    });
  }

  /* 영어 세션 목록은 index.html이 미리 불러 둔다. 다른 언어면 그 언어의 목록을 먼저 불러온다 */
  if (EP.lang === "en") boot();
  else EP.content.loadScript(EP.L.dir + "/catalog.js").then(boot, function () {
    EP.view.toast("세션 목록을 불러오지 못했어요. 인터넷 연결을 확인해 주세요");
  });
})(window.EP);
