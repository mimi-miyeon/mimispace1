/* 탭 화면: 학습(홈) · 전체 세션 · 틀린 문제, 그리고 안내/로딩 화면 */
(function (EP) {
  "use strict";

  var V = EP.view, U = EP.util, esc = U.esc, store = EP.store, st = store.state;
  var ui = EP.ui, ico = EP.icons.ico;
  var S = EP.data.session, NEXT = EP.data.next;
  var $screen = V.$screen, $tab = V.$tab;
  var current = "home";

  var TABS = [
    { id: "home", icon: "keycap", label: "학습" },
    { id: "all", icon: "a", label: "전체 세션" },
    { id: "wrong", icon: "fan", label: "틀린 문제" }
  ];
  var RENDER = { home: renderHome, all: renderAll, wrong: renderWrong };

  /* ---- 탭 바 ---- */
  function drawBar(show) {
    $tab.hidden = !show;
    if (!show) return;
    var n = Object.keys(st.wrong).length;
    $tab.innerHTML = TABS.map(function (t) {
      var on = current === t.id;
      return '<button data-tab="' + t.id + '"' + (on ? ' aria-current="page"' : "") + ">" + EP.icons.tab(t.icon, on) + t.label +
        (t.id === "wrong" && n ? '<span class="badge">' + n + "</span>" : "") + "</button>";
    }).join("");
  }
  $tab.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (b) show(b.getAttribute("data-tab"));
  });

  function render() {
    V.closeSheet(); V.setPaper(false); drawBar(true);
    $screen.className = "screen"; $screen.onclick = null;
    RENDER[current]();
    $screen.scrollTop = 0;
  }
  function show(name) { current = name; render(); }

  /* ---- 홈 ---- */
  function renderHome() {
    var cur = st.done ? { label: "세션 2", form: NEXT[0].form, meaning: NEXT[0].meaning } : { label: "세션 1", form: S.form, meaning: S.meaning };
    $screen.className = "screen home";
    $screen.innerHTML =
      '<span class="pill">' + cur.label + "</span>" +
      '<button class="gear" id="gearBtn" aria-label="샘플 설정">' + ico("gear", 22) + "</button>" +
      '<div class="home-stage">' + ui.char("keycap", { size: "hero", label: "키캡" }) +
      '<div class="card"><div class="pattern">' + U.slotted(cur.form) + '</div><p class="meaning">' + esc(cur.meaning) + "</p>" +
      ui.key("시작하기", "startBtn") + "</div></div>";
    document.getElementById("startBtn").onclick = function () {
      if (st.done) { V.toast("샘플에는 세션 1만 있어요"); return; }
      if (st.progress) askResume(); else EP.session.start(false);
    };
    document.getElementById("gearBtn").onclick = openSettings;
  }

  function askResume() {
    var where = /retry/i.test(st.progress.phase) ? "틀린 문제 다시 풀기에서 멈췄어요." : (st.progress.pos + 1) + "번째 문제에서 멈췄어요.";
    var m = document.createElement("div");
    m.className = "modal";
    m.innerHTML = '<div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="mt"><h2 id="mt">멈춘 문제부터 이어서 할까요?</h2><p>지난번에 ' + where + "</p>" +
      ui.key("이어서 하기", "mRes") + ui.link("처음부터 하기", "mNew") + "</div>";
    V.$app.appendChild(m);
    document.getElementById("mRes").onclick = function () { m.remove(); EP.session.start(true); };
    document.getElementById("mNew").onclick = function () { m.remove(); st.progress = null; store.save(); EP.session.start(false); };
  }

  function openSettings() {
    var meta = "버전 " + EP.config.version + (store.code ? " · 코드 " + store.codeLabel() : " · 개인 링크 없음") + " · 저장 " + store.statusText();
    V.openSheet("neutral",
      '<div class="sh-title">샘플 확인용 설정</div><div class="settings">' +
      '<label>정답일 때 자동으로 듣기<input type="checkbox" id="optAuto"' + (st.autoplay ? " checked" : "") + "></label>" +
      "<label>기록 지우고 처음 상태로" + ui.key("지우기", "optReset", { variant: "plain", sm: true }) + "</label></div>" +
      '<p class="settings-meta">' + esc(meta) + "</p>" +
      ui.key("닫기", "optClose", { variant: "dark", gap: true }));
    document.getElementById("optAuto").onchange = function (e) { st.autoplay = e.target.checked; store.save(); };
    document.getElementById("optReset").onclick = function () { store.reset(); V.closeSheet(); render(); V.toast("처음 상태로 돌렸어요"); };
    document.getElementById("optClose").onclick = V.closeSheet;
  }

  /* ---- 전체 세션 ---- */
  function renderAll() {
    var cur = st.done ? 2 : 1;
    var h = ui.tabHead("전체 세션", EP.data.totalSessions + "개 중 " + (st.done ? 1 : 0) + "개 완료", ui.char("a", { size: "xs", label: "소문자 a" })) +
      '<div class="list">';
    h += '<div class="row"><span class="no">1</span><b>' + esc(S.form) + '</b><span class="sub">' + esc(S.meaning) + "</span>" +
      (st.done ? '<div class="acts"><button data-act="redo">다시 풀기</button><button data-act="follow">따라 말하기</button></div>'
               : '<div class="acts"><span class="state">' + (st.progress ? "진행 중" : "지금 할 세션") + "</span></div>") + "</div>";
    NEXT.forEach(function (n) {
      var open = n.no === cur;
      h += '<div class="row' + (open ? "" : " locked") + '"><span class="no">' + (open ? n.no : ico("lock", 16)) + "</span><b>" + esc(n.form) + '</b><span class="sub">' + esc(n.meaning) +
        (open ? " · 다음 세션" : "") + "</span></div>";
    });
    h += '<p class="note">샘플에서는 세션 10까지만 보여요</p></div>';
    $screen.innerHTML = h;
    $screen.onclick = function (e) {
      var b = e.target.closest("[data-act]"); if (!b) return;
      if (b.getAttribute("data-act") === "redo") EP.session.start(false);
      else EP.follow.start(EP.content.sessionSentences());
    };
  }

  /* ---- 틀린 문제 ---- */
  function renderWrong() {
    var ids = Object.keys(st.wrong);
    var h = ids.length ? ui.tabHead("틀린 문제", ids.length + "개 남았어요 · 두 번 연속 맞히면 빠져요", ui.char("fan", { size: "xs", label: "부채꼴" }))
                       : ui.tabHead("틀린 문제");
    if (!ids.length) {
      h += '<div class="empty">' + ui.char("fan", { size: "sm", expr: "party", label: "부채꼴" }) + "<b>틀린 문제가 없어요</b><p>세션에서 틀린 문제가 여기에 모여요</p></div>";
    } else {
      h += '<div class="list">';
      ids.forEach(function (id) {
        var it = EP.content.itemById(id), w = st.wrong[id], doneToday = w.tabDay === U.today();
        h += '<button class="row" data-id="' + id + '"><span class="no again">' + ico("again", 16) + '</span><b class="ko">' + esc(it.ko) +
          '</b><span class="sub">세션 1 · ' + it.kind + ' · <span class="streak"><i class="' + (w.streak > 0 ? "on" : "") + '"></i><i></i></span>' + (doneToday ? " 오늘 풀었어요" : "") + "</span></button>";
      });
      h += "</div>";
    }
    $screen.innerHTML = h;
    $screen.onclick = function (e) {
      var b = e.target.closest("[data-id]"); if (!b) return;
      var id = b.getAttribute("data-id");
      if (st.wrong[id].tabDay === U.today()) { V.toast("이 문제는 오늘 이미 풀었어요"); return; }
      EP.session.start(false, { single: id });
    };
  }

  /* ---- 탭 바 없는 안내 화면 ---- */
  function renderLoading() {
    $tab.hidden = true; $screen.className = "screen";
    $screen.innerHTML = '<div class="loading">불러오는 중…</div>';
  }
  function renderLink(invalid) {
    $tab.hidden = true; $screen.className = "screen"; V.setPaper(false);
    $screen.innerHTML = ui.message({
      world: true,
      char: ui.char("keycap", { size: "lg", expr: "oops", label: "키캡" }),
      title: invalid ? "등록되지 않은 링크예요" : "개인 링크로 들어와 주세요",
      text: invalid ? "받은 링크를 다시 확인하거나 운영자에게 물어봐 주세요." : "운영자에게 받은 나만의 링크로 열면 학습 기록이 저장돼요."
    });
  }

  EP.tabs = { render: render, show: show, hideBar: function () { drawBar(false); }, renderLoading: renderLoading, renderLink: renderLink };
})(window.EP);
