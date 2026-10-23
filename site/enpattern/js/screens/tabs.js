/* 탭 화면: 학습(홈) · 전체 세션 · 틀린 문제, 그리고 안내/로딩 화면 */
(function (EP) {
  "use strict";

  var V = EP.view, U = EP.util, esc = U.esc, C = EP.content, store = EP.store, st = store.state;
  var ui = EP.ui, ico = EP.icons.ico;
  function cat() { return EP.catalog; }   /* 배우는 언어의 세션 목록 (영어가 아니면 main.js가 나중에 바꿔 넣는다) */
  /* 설정(홈 톱니): 듣기 설정은 모두에게, 운영자 확인용 항목은 주소에 admin이 있을 때만: ?c=코드&admin=1 */
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
  function info(n) { var r = cat().list[n - 1]; return { no: n, form: r[0], meaning: r[1], ready: n <= cat().ready }; }

  function renderHome() {
    var n = store.nextNo();
    $screen.className = "screen home";
    var gear = '<button class="gear" id="gearBtn" aria-label="설정">' + ico("gear", 22) + "</button>";
    if (n > cat().total) {
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
    document.getElementById("gearBtn").onclick = openSettings;
    if (!st.autoplayAsked) askAutoplay();
  }

  /* 자동 듣기 안내: 아직 한 번도 고르지 않은 사용자에게 홈에서 한 번 보여 준다 */
  function askAutoplay() {
    if (V.$app.querySelector(".modal")) return;
    var m = document.createElement("div");
    m.className = "modal";
    m.innerHTML = '<div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="mt"><h2 id="mt">정답 문장을 자동으로 들어 볼까요?</h2>' +
      "<p>문제를 맞히면 정답 문장을 바로 소리 내어 읽어 드려요. 귀로 같이 들으면 더 잘 기억나요.</p>" +
      ui.key("자동 듣기 켜기", "apOn") + ui.link("지금은 끄기", "apOff") +
      '<p class="modal-note">나중에 홈 오른쪽 위 톱니(설정)에서 언제든 바꿀 수 있어요.</p></div>';
    V.$app.appendChild(m);
    function choose(on) {
      st.autoplay = on; st.autoplayAsked = true; store.save(); m.remove();
      V.toast(on ? "정답일 때 자동으로 들려 드릴게요" : "자동 듣기를 꺼 두었어요");
    }
    document.getElementById("apOn").onclick = function () { choose(true); };
    document.getElementById("apOff").onclick = function () { choose(false); };
  }

  /* 다음 세션 시작. 멈춘 기록이 있으면 이어서 할지 묻는다 (홈 [시작하기], 결과 화면 [10분 더])
     시작 전에 잠깐 안내 화면("복습부터 먼저 시작해 봐요")을 보여 준다 */
  function startNext() {
    var splash = true;
    var n = store.nextNo();
    if (n > cat().total) { show("home"); return; }
    if (n > cat().ready) { show("home"); V.toast("세션 " + n + "은 준비 중이에요. 조금만 기다려 주세요"); return; }
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

  /* 고르기 한 줄 (목소리, 느리게 속도). 고른 것은 aria-checked="true" */
  function choices(name, list, cur) {
    return '<div class="choices" role="radiogroup">' + list.map(function (c) {
      return '<button type="button" role="radio" aria-checked="' + (String(c[0]) === String(cur)) + '" data-' + name + '="' + esc(c[0]) + '">' + esc(c[1]) + "</button>";
    }).join("") + "</div>";
  }

  function openSettings() {
    var A = EP.config.audio, sp = EP.speech, sample = EP.L.sample, langs = EP.config.langs;
    var admin = !ADMIN ? "" :
      '<div class="settings-admin">운영자 확인용</div>' +
      '<div class="setting"><div class="setting-lab">배우는 언어 (이 코드에만)</div>' +
      choices("lang", Object.keys(langs).map(function (k) { return [k, langs[k].name]; }), EP.lang) + "</div>" +
      "<label>기록 지우고 처음 상태로" + ui.key("지우기", "optReset", { variant: "plain", sm: true }) + "</label>";
    var meta = !ADMIN ? "" :
      '<p class="settings-meta">' + esc("버전 " + EP.config.version + (store.code ? " · 코드 " + store.codeLabel() : " · 개인 링크 없음") + " · 저장 " + store.statusText()) + "</p>";
    V.openSheet("neutral",
      '<div class="sh-title">듣기 설정</div><div class="settings">' +
      '<div class="setting"><label>정답일 때 자동으로 듣기<input type="checkbox" id="optAuto"' + (st.autoplay ? " checked" : "") + "></label></div>" +
      /* 목소리 고르기는 미리 만든 mp3가 있는 언어만 (포르투갈어는 기기 음성) */
      (EP.L.mp3 ? '<div class="setting"><div class="setting-lab">목소리</div>' + choices("voice", A.voices, sp.voice()) + "</div>" : "") +
      '<div class="setting"><div class="setting-lab">느리게 듣기 속도</div>' +
      choices("rate", A.slowRates.map(function (r) { return [r, r + "배"]; }), sp.slowRate()) + "</div>" +
      '<div class="setting"><div class="setting-lab">들어 보기</div><p class="setting-sample">' + esc(sample) + "</p>" + ui.listen("data-try") + "</div>" +
      admin + "</div>" + meta +
      ui.key("닫기", "optClose", { variant: "dark", gap: true }));

    var $set = V.$sheet.querySelector(".settings");
    function pick(name, val) {
      $set.querySelectorAll("[data-" + name + "]").forEach(function (b) { b.setAttribute("aria-checked", String(b.getAttribute("data-" + name) === String(val))); });
    }
    /* 고르면 바로 그 목소리·속도로 들려 준다 */
    $set.onclick = function (e) {
      var b = e.target.closest("[data-voice], [data-rate], [data-try]");
      if (!b) return;
      if (b.hasAttribute("data-voice")) {
        st.voice = b.getAttribute("data-voice"); store.save(); pick("voice", st.voice);
        sp.speak(sample, false);
      } else if (b.hasAttribute("data-rate")) {
        st.slowRate = parseFloat(b.getAttribute("data-rate")); store.save(); pick("rate", st.slowRate);
        sp.speak(sample, true);
      } else sp.speak(sample, b.getAttribute("data-try") === "s");
    };
    document.getElementById("optAuto").onchange = function (e) { st.autoplay = e.target.checked; st.autoplayAsked = true; store.save(); };
    if (ADMIN) {
      /* 배우는 언어: 이 코드의 서버 기록에 남겨 같은 코드의 모든 기기에 적용하고 새로고침 */
      V.$sheet.querySelectorAll("[data-lang]").forEach(function (b) {
        b.onclick = function () {
          var l = b.getAttribute("data-lang");
          if (l === EP.lang) return;
          V.toast(EP.config.langs[l].name + "로 바꾸는 중…");
          store.setLang(l).then(function (ok) { if (!ok) V.toast("바꾸지 못했어요. 인터넷 연결을 확인해 주세요"); });
        };
      });
      document.getElementById("optReset").onclick = function () { store.reset(); V.closeSheet(); render(); V.toast("처음 상태로 돌렸어요"); };
    }
    document.getElementById("optClose").onclick = function () { sp.stop(); V.closeSheet(); };
  }

  /* ---- 전체 세션: 끝낸 세션은 다시 풀기·따라 말하기, 다음 세션 하나만 열림, 나머지는 잠김 ---- */
  function renderAll() {
    var n = store.nextNo(), h = "";
    h += ui.tabHead("전체 세션", cat().total + "개 중 " + st.done.length + "개 완료", ui.char("a", { size: "xs", label: "소문자 a" })) + '<div class="list">';
    for (var i = 1; i <= cat().total; i++) {
      var r = info(i), done = store.isDone(i), open = i === n;
      if (done) {
        h += '<div class="row"><span class="no">' + i + "</span><b>" + esc(r.form) + '</b><span class="sub">' + esc(r.meaning) + "</span>" +
          '<div class="acts"><button data-act="redo" data-no="' + i + '">다시 풀기</button><button data-act="follow" data-no="' + i + '">따라 말하기</button></div></div>';
      } else if (open) {
        var going = r.ready && st.progress && st.progress.no === i;
        var state = !r.ready ? "준비 중" : going ? "진행 중" : "지금 할 세션";
        var go = !r.ready ? "" : '<button class="go" data-act="' + (going ? "resume" : "start") + '" data-no="' + i + '">' + (going ? "이어서 하기" : "시작하기") + "</button>";
        h += '<div class="row" id="curRow"><span class="no">' + i + "</span><b>" + esc(r.form) + '</b><span class="sub">' + esc(r.meaning) + "</span>" +
          '<div class="acts">' + go + '<span class="state">' + state + "</span></div></div>";
      } else {
        h += '<div class="row locked"><span class="no">' + ico("lock", 16) + "</span><b>" + esc(r.form) + '</b><span class="sub">' + esc(r.meaning) + "</span></div>";
      }
    }
    $screen.innerHTML = h + "</div>";
    $screen.onclick = function (e) {
      var b = e.target.closest("[data-act]"); if (!b) return;
      var no = +b.getAttribute("data-no"), act = b.getAttribute("data-act");
      if (act === "start") startNext();   /* 홈 [시작하기]와 같다 */
      else if (act === "resume") EP.session.start({ no: no, mode: "new", resume: true, splash: true });
      else if (act === "redo") EP.session.start({ no: no, mode: "redo" });
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
