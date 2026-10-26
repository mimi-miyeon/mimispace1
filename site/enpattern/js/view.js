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

  /* 키보드가 떠 있을 때(아이폰): 페이지 높이는 그대로라 키보드 뒤 빈 곳까지 스크롤된다.
     → 앱 높이를 보이는 높이에 맞추고, 스크롤할 내용이 없는 곳을 끌면 막는다 */
  function typing() { var a = document.activeElement; return !!a && a.tagName === "INPUT"; }
  var vv = window.visualViewport;
  if (vv) {
    var fit = function () {
      var kb = typing() && vv.height < window.innerHeight - 1;
      document.documentElement.style.height = kb ? vv.height + "px" : "";
      if (kb) window.scrollTo(0, 0);
    };
    vv.addEventListener("resize", fit);
    document.addEventListener("focusout", function () { setTimeout(fit, 100); });
  }
  /* 끌어서 실제로 스크롤되는 곳(내용이 넘치는 .screen, 시트)이 있는지 */
  function canScroll(el) {
    for (; el && el !== document.body; el = el.parentElement) {
      if (el.scrollHeight > el.clientHeight + 1 && /auto|scroll/.test(getComputedStyle(el).overflowY)) return true;
    }
    return false;
  }
  document.addEventListener("touchmove", function (e) {
    if (typing() && e.touches.length === 1 && !canScroll(e.target)) e.preventDefault();
  }, { passive: false });

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
