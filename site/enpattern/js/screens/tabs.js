/* 탭 화면: 학습(홈) · 전체 세션 · 틀린 문제, 그리고 안내/로딩 화면 */
(function (EP) {
  "use strict";

  var V = EP.view, U = EP.util, esc = U.esc, C = EP.content, store = EP.store, st = store.state;
  var ui = EP.ui, ico = EP.icons.ico, CAT = EP.catalog;
  /* 운영자 확인용 설정(톱니)은 주소에 admin이 있을 때만: ?c=코드&admin=1 */
  var ADMIN = /[?&]admin=1/.test(location.search);
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
    $screen.scrollTop = 0;
    RENDER[current]();
    /* 전체 세션: 지금 할 세션이 보이게 */
    var cur = current === "all" && document.getElementById("curRow");
    if (cur) cur.scrollIntoView({ block: "center" });
  }
  function show(name) { current = name; render(); }

  /* ---- 홈: 다음 세션과 [시작하기]만 ---- */
  function info(n) { var r = CAT.list[n - 1]; return { no: n, form: r[0], meaning: r[1], ready: n <= CAT.ready }; }

  function renderHome() {
    var n = store.nextNo();
    $screen.className = "screen home";
    var gear = ADMIN ? '<button class="gear" id="gearBtn" aria-label="운영자 설정">' + ico("gear", 22) + "</button>" : "";
    if (n > CAT.total) {
      $screen.innerHTML = gear + ui.message({ world: true, char: ui.char("capsule", { size: "lg", expr: "party", label: "캡슐" }),
        title: "모든 세션을 마쳤어요", text: "전체 세션 탭에서 다시 풀거나 따라 말할 수 있어요." });
    } else {
      var cur = info(n);
      $screen.innerHTML = '<span class="pill">세션 ' + n + "</span>" + gear +
        '<div class="home-stage">' + ui.char("keycap", { size: "hero", label: "키캡" }) +
        '<div class="card"><div class="pattern">' + U.slotted(cur.form) + '</div><p class="meaning">' + esc(cur.meaning) + "</p>" +
        (cur.ready ? ui.key("시작하기", "startBtn") : ui.key("곧 열려요", "startBtn", { variant: "soft" })) + "</div></div>";
      document.getElementById("startBtn").onclick = startNext;
    }
    if (ADMIN) document.getElementById("gearBtn").onclick = openSettings;
  }

  /* 다음 세션 시작. 멈춘 기록이 있으면 이어서 할지 묻는다 (홈 [시작하기], 결과 화면 [10분 더])
     시작 전에 잠깐 안내 화면("복습부터 먼저 시작해 봐요")을 보여 준다 */
  function startNext() {
    var splash = true;
    var n = store.nextNo();
    if (n > CAT.total) { show("home"); return; }
    if (n > CAT.ready) { show("home"); V.toast("세션 " + n + "은 준비 중이에요. 조금만 기다려 주세요"); return; }
    if (st.progress && st.progress.no === n) askResume(n, splash);
    else EP.session.start({ no: n, mode: "new", splash: splash });
  }

  function askResume(n, splash) {
    var p = st.progress;
    var where = /retry/i.test(p.phase) ? "틀린 문제 다시 풀기에서 멈췄어요." : p.phase === "review" ? "복습에서 멈췄어요." :
      p.phase === "intro" ? "문법 이해에서 멈췄어요." : (p.pos + 1) + "번째 문제에서 멈췄어요.";
    var m = document.createElement("div");
    m.className = "modal";
    m.innerHTML = '<div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="mt"><h2 id="mt">멈춘 문제부터 이어서 할까요?</h2><p>지난번에 ' + where + "</p>" +
      ui.key("이어서 하기", "mRes") + ui.link("처음부터 하기", "mNew") + "</div>";
    V.$app.appendChild(m);
    document.getElementById("mRes").onclick = function () { m.remove(); EP.session.start({ no: n, mode: "new", resume: true, splash: splash }); };
    document.getElementById("mNew").onclick = function () { m.remove(); st.progress = null; store.save(); EP.session.start({ no: n, mode: "new", splash: splash }); };
  }

  function openSettings() {
    var meta = "버전 " + EP.config.version + (store.code ? " · 코드 " + store.codeLabel() : " · 개인 링크 없음") + " · 저장 " + store.statusText();
    V.openSheet("neutral",
      '<div class="sh-title">운영자 확인용 설정</div><div class="settings">' +
      '<label>정답일 때 자동으로 듣기<input type="checkbox" id="optAuto"' + (st.autoplay ? " checked" : "") + "></label>" +
      "<label>기록 지우고 처음 상태로" + ui.key("지우기", "optReset", { variant: "plain", sm: true }) + "</label></div>" +
      '<p class="settings-meta">' + esc(meta) + "</p>" +
      ui.key("닫기", "optClose", { variant: "dark", gap: true }));
    document.getElementById("optAuto").onchange = function (e) { st.autoplay = e.target.checked; store.save(); };
    document.getElementById("optReset").onclick = function () { store.reset(); V.closeSheet(); render(); V.toast("처음 상태로 돌렸어요"); };
    document.getElementById("optClose").onclick = V.closeSheet;
  }

  /* ---- 전체 세션: 끝낸 세션은 다시 풀기·따라 말하기, 다음 세션 하나만 열림, 나머지는 잠김 ---- */
  function renderAll() {
    var n = store.nextNo(), h = "";
    h += ui.tabHead("전체 세션", CAT.total + "개 중 " + st.done.length + "개 완료", ui.char("a", { size: "xs", label: "소문자 a" })) + '<div class="list">';
    for (var i = 1; i <= CAT.total; i++) {
      var r = info(i), done = store.isDone(i), open = i === n;
      if (done) {
        h += '<div class="row"><span class="no">' + i + "</span><b>" + esc(r.form) + '</b><span class="sub">' + esc(r.meaning) + "</span>" +
          '<div class="acts"><button data-act="redo" data-no="' + i + '">다시 풀기</button><button data-act="follow" data-no="' + i + '">따라 말하기</button></div></div>';
      } else if (open) {
        var state = !r.ready ? "준비 중" : st.progress && st.progress.no === i ? "진행 중" : "지금 할 세션";
        h += '<div class="row" id="curRow"><span class="no">' + i + "</span><b>" + esc(r.form) + '</b><span class="sub">' + esc(r.meaning) + "</span>" +
          '<div class="acts"><span class="state">' + state + "</span></div></div>";
      } else {
        h += '<div class="row locked"><span class="no">' + ico("lock", 16) + "</span><b>" + esc(r.form) + '</b><span class="sub">' + esc(r.meaning) + "</span></div>";
      }
    }
    $screen.innerHTML = h + "</div>";
    $screen.onclick = function (e) {
      var b = e.target.closest("[data-act]"); if (!b) return;
      var no = +b.getAttribute("data-no");
      if (b.getAttribute("data-act") === "redo") EP.session.start({ no: no, mode: "redo" });
      else C.load(no).then(function (S) { EP.follow.start(C.sessionSentences(S)); }, function () { V.toast("문장을 불러오지 못했어요. 인터넷 연결을 확인해 주세요"); });
    };
  }

  /* ---- 틀린 문제: 세션별로 묶어서 ---- */
  function renderWrong() {
    var keys = Object.keys(st.wrong);
    var head = function (n) {
      return n ? ui.tabHead("틀린 문제", n + "개 남았어요 · 두 번 연속 맞히면 빠져요", ui.char("fan", { size: "xs", label: "부채꼴" })) : ui.tabHead("틀린 문제");
    };
    if (!keys.length) {
      $screen.innerHTML = head(0) + '<div class="empty">' + ui.char("fan", { size: "sm", expr: "party", label: "부채꼴" }) + "<b>틀린 문제가 없어요</b><p>세션에서 틀린 문제가 여기에 모여요</p></div>";
      return;
    }
    $screen.innerHTML = head(keys.length) + '<div class="loading">불러오는 중…</div>';
    C.loadMany(keys.map(C.sessionOfKey)).then(function () {
      if (current !== "wrong" || EP.session.isActive()) return;
      drawWrong(keys, head);
    });
  }
  function drawWrong(keys, head) {
    var groups = {}, nums = [], changed = false;
    keys.forEach(function (k) {
      var no = C.sessionOfKey(k), S = C.session(no), it = C.item(k);
      if (S && !it) { delete st.wrong[k]; changed = true; return; }   /* 콘텐츠에서 없어진 문제 */
      if (!groups[no]) { groups[no] = []; nums.push(no); }
      groups[no].push({ key: k, it: it });
    });
    if (changed) { store.save(); drawBar(true); }
    nums.sort(function (a, b) { return a - b; });
    var total = 0, h = '<div class="list">';
    nums.forEach(function (no) {
      h += '<p class="group">세션 ' + no + " · " + esc(info(no).form) + "</p>";
      groups[no].forEach(function (g) {
        total++;
        var w = st.wrong[g.key], doneToday = w.tabDay === U.today();
        if (!g.it) {   /* 인터넷이 끊겨 세션을 못 불러온 경우 */
          h += '<div class="row locked"><span class="no">' + ico("again", 16) + '</span><b class="ko">불러오지 못했어요</b><span class="sub">세션 ' + no + "</span></div>";
          return;
        }
        h += '<button class="row" data-key="' + g.key + '"><span class="no again">' + ico("again", 16) + '</span><b class="ko">' + esc(g.it.ko) +
          '</b><span class="sub">' + esc(g.it.kind) + ' · <span class="streak"><i class="' + (w.streak > 0 ? "on" : "") + '"></i><i></i></span>' + (doneToday ? " 오늘 풀었어요" : "") + "</span></button>";
      });
    });
    $screen.innerHTML = head(total) + h + "</div>";
    $screen.onclick = function (e) {
      var b = e.target.closest("[data-key]"); if (!b) return;
      var key = b.getAttribute("data-key");
      if (st.wrong[key].tabDay === U.today()) { V.toast("이 문제는 오늘 이미 풀었어요"); return; }
      EP.session.start({ single: key });
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

  EP.tabs = { render: render, show: show, startNext: startNext, hideBar: function () { drawBar(false); }, renderLoading: renderLoading, renderLink: renderLink };
})(window.EP);
