/* 시작: 개인 코드 확인 → 서버 기록 불러오기 → 첫 화면 */
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
      if (res === "invalid") return tabs.renderLink(true);
      tabs.render(); store.drawSync();
      if (res === "offline") EP.view.toast("인터넷 연결을 확인해 주세요. 연결되면 다시 불러올게요");
    });
  }

  boot();
})(window.EP);
