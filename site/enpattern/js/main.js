/* 시작: 개인 코드 확인 → 서버 기록 불러오기 → (포르투갈어면 세션 목록) → 첫 화면 */
(function (EP) {
  "use strict";

  var store = EP.store, tabs = EP.tabs;

  store.setHooks({ isBusy: EP.session.isActive, onRefresh: tabs.render });

  /* 세션 목록을 준비한 뒤 then(). 못 불러오면 잠시 뒤 다시 */
  function withCatalog(then) {
    EP.content.loadCatalog().then(then, function () {
      EP.view.toast("세션 목록을 불러오지 못했어요. 인터넷 연결을 확인해 주세요");
      setTimeout(function () { withCatalog(then); }, 5000);
    });
  }

  function boot() {
    var onGithub = /github\.io$/.test(location.hostname);
    if (!store.code && onGithub) return tabs.renderLink(false);   /* 배포 주소는 개인 링크로만 */
    if (!store.remote) return withCatalog(tabs.render);           /* 로컬 확인용: 이 기기에만 저장 */
    tabs.renderLoading();
    store.pull().then(function (res) {
      if (res === "relang") return location.reload();             /* 다른 기기에서 학습 언어를 바꿨다 */
      if (res === "invalid") return tabs.renderLink(true);
      withCatalog(function () {
        tabs.render(); store.drawSync();
        if (res === "offline") EP.view.toast("인터넷 연결을 확인해 주세요. 연결되면 다시 불러올게요");
      });
    });
  }

  boot();
})(window.EP);
