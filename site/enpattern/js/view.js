/* 화면 공통 요소: 루트 DOM, 토스트, 배경, 하단 시트 */
(function (EP) {
  "use strict";

  var $app = document.getElementById("app"), $sheet = document.getElementById("sheet");

  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* 문제 화면은 연한 종이색 배경, 그 외는 초록 */
  function setPaper(on) { document.body.classList.toggle("paper", on); }

  /* type: ok | bad | neutral. text가 있으면 시트 안의 듣기 버튼이 그 문장을 읽는다 */
  function openSheet(type, html, text) {
    $sheet.className = "sheet sheet--" + type;
    $sheet.innerHTML = html;
    if (text !== undefined) $sheet.setAttribute("data-text", text);
    requestAnimationFrame(function () { $sheet.classList.add("open"); });
  }
  function closeSheet() { $sheet.classList.remove("open"); }
  /* 시트 안 듣기 버튼: 시트의 data-text 문장을 읽는다 */
  function listenBtns() { return EP.ui.listen("data-say"); }
  $sheet.addEventListener("click", function (e) {
    var b = e.target.closest("[data-say]");
    if (b) EP.speech.speak($sheet.getAttribute("data-text"), b.getAttribute("data-say") === "s");
  });

  EP.view = {
    $app: $app,
    $screen: document.getElementById("screen"),
    $tab: document.getElementById("tabbar"),
    $sheet: $sheet,
    toast: toast,
    setPaper: setPaper,
    openSheet: openSheet,
    closeSheet: closeSheet,
    listenBtns: listenBtns
  };
})(window.EP);
