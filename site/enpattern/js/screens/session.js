/* 학습 세션: 문법 이해 → 문제 → 틀린 문제 다시 → 완료
   phase: intro | main | retryIntro | retry | single(틀린 문제 탭에서 한 문제만) */
(function (EP) {
  "use strict";

  var V = EP.view, U = EP.util, esc = U.esc, C = EP.content, store = EP.store, st = store.state;
  var ui = EP.ui, ico = EP.icons.ico, speak = EP.speech.speak, stopSpeak = EP.speech.stop;
  var S = EP.data.session, $screen = V.$screen;
  var R = null; /* 진행 중인 세션 상태. 없으면 null */

  function start(resume, opt) {
    opt = opt || {};
    stopSpeak(); V.closeSheet(); EP.tabs.hideBar(); V.setPaper(true); $screen.onclick = null;
    var single = opt.single;
    R = { phase: single ? "single" : "intro", queue: single ? [single] : S.items.map(function (x) { return x.id; }), pos: 0,
          retry: [], firstOk: 0, total: S.items.length, attempt: 0, copy: false, single: single, cleared: false };
    var p = st.progress;
    if (resume && p) {
      R.phase = p.phase; R.pos = p.pos; R.retry = p.retry || []; R.firstOk = p.firstOk || 0;
      if (R.phase === "retry") R.queue = R.retry.slice();
    }
    render();
  }
  /* 멈춘 곳 저장 (틀린 문제 한 문제 풀기는 저장하지 않음) */
  function persist() {
    if (R.single) return;
    st.progress = { phase: R.phase, pos: R.pos, retry: R.retry, firstOk: R.firstOk };
    store.save();
  }
  function leave(toTab) { stopSpeak(); R = null; EP.tabs.show(toTab); }

  function render() {
    $screen.className = "screen"; $screen.scrollTop = 0;
    if (R.phase === "intro") return renderIntro();
    if (R.phase === "retryIntro") return renderRetryIntro();
    if (R.pos >= R.queue.length) return finishPhase();
    renderItem();
  }

  /* ---- 상단 바 + 그만하기 ---- */
  function segs() {
    var h = "";
    for (var i = 0; i < R.queue.length; i++) h += "<i" + (i < R.pos ? ' class="on"' : "") + "></i>";
    return '<div class="segs">' + h + "</div>";
  }
  function topBar(right) { return '<div class="s-top">' + ui.closeBtn("quitBtn") + right + "</div>"; }
  function bindQuit() {
    document.getElementById("quitBtn").onclick = function () {
      stopSpeak();
      V.openSheet("neutral", '<div class="sh-title">그만할까요?</div><p class="sh-note">' + (R.single ? "이 문제는 나중에 다시 풀 수 있어요." : "다음에 멈춘 문제부터 이어서 할 수 있어요.") + "</p>" +
        ui.key("계속하기", "qStay") + ui.link("나가기", "qLeave"));
      document.getElementById("qStay").onclick = V.closeSheet;
      document.getElementById("qLeave").onclick = function () {
        if (!R.single && R.phase !== "intro") persist();
        leave(R.single ? "wrong" : "home");
      };
    };
  }

  /* ---- 문법 이해 ---- */
  function renderIntro() {
    var I = S.intro, blocks = "";
    I.blocks.forEach(function (x, i) {
      if (i) blocks += '<span class="plus">+</span>';
      blocks += '<div class="blk' + (x[0] === "~" ? " y" : "") + '"><b>' + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></div>";
    });
    $screen.className = "screen intro";
    $screen.innerHTML = topBar('<div class="kind">문법 이해</div>') +
      '<div class="chip">패턴 ' + S.no + '</div><div class="pattern">' + U.slotted(S.form) + "</div>" +
      '<p class="meaning">' + esc(S.meaning) + "</p>" +
      '<div class="blocks">' + blocks + "</div>" +
      '<ul class="expl">' + I.lines.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul>" +
      I.examples.map(function (x, i) {
        return '<div class="ex"><div><div class="en">' + U.withCore(x.en, S.stem) + '</div><div class="ko">' + esc(x.ko) + "</div></div>" +
          ui.speakBtn({ "data-ex": i }) + "</div>";
      }).join("") +
      '<div class="s-actions">' + ui.key("문제 풀기", "goBtn") + "</div>";
    $screen.querySelectorAll("[data-ex]").forEach(function (b) { b.onclick = function () { speak(I.examples[+b.getAttribute("data-ex")].en); }; });
    document.getElementById("goBtn").onclick = function () { R.phase = "main"; R.pos = 0; persist(); render(); };
    bindQuit();
  }

  function renderRetryIntro() {
    $screen.innerHTML = ui.message({
      char: ui.char("keycap", { size: "md", expr: "think", label: "키캡" }),
      title: "틀린 문제 한 번 더",
      text: "방금 틀린 " + R.retry.length + "문제를 다시 풀어 볼게요.",
      action: ui.key("다시 풀기", "goBtn")
    });
    document.getElementById("goBtn").onclick = function () { R.phase = "retry"; R.queue = R.retry.slice(); R.pos = 0; persist(); render(); };
  }

  /* ---- 문제 ---- */
  function renderItem() {
    var it = C.itemById(R.queue[R.pos]), blank = it.type === "blank";
    var label = R.phase === "retry" ? "틀린 문제 한 번 더" : R.phase === "single" ? "틀린 문제" : it.kind + " " + (R.pos + 1) + " / " + R.queue.length;
    var body = "";
    if (it.ctx) body += '<div class="ctx"><div class="sm">' + esc(it.ctx.lead) + '</div><div class="en">' + esc(it.ctx.en) + "</div></div>";
    if (it.dialog) body += '<div class="ctx"><div><span class="who">A</span><span class="en">' + esc(it.dialog.a) + '</span></div><div class="sm indent">' + esc(it.dialog.aKo) + "</div>" +
      '<div class="reply"><span class="who">B</span><span class="sm">아래 문장을 영어로</span></div></div>';
    body += '<p class="q-ko">' + esc(it.ko) + "</p>";
    if (blank) body += '<p class="blank-line">' + esc(it.before) + ' <span class="bl">?</span>' + (it.after === "." ? "." : " " + esc(it.after)) + "</p>";
    if (R.copy) body += '<div class="copy"><div class="lab">정답을 그대로 따라 입력해 보세요</div><div class="en">' + esc(it.answers[0]) + "</div></div>";

    $screen.innerHTML = topBar(segs()) + '<div class="kind">' + label + '</div><div class="chip">' + esc(S.hint) + "</div>" + body +
      '<form id="ansForm" autocomplete="off"><input class="answer-in" id="ans" type="text" inputmode="text" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="' +
      (blank ? "빈칸에 들어갈 말" : "영어로 입력") + '" aria-label="답 입력"><p class="err" id="err" aria-live="polite"></p>' +
      '<div class="s-actions">' + ui.key("확인", null, { variant: "dark", type: "submit" }) + "</div></form>";
    bindQuit();
    var inp = document.getElementById("ans"), err = document.getElementById("err");
    inp.oninput = function () { err.textContent = ""; };
    document.getElementById("ansForm").onsubmit = function (e) { e.preventDefault(); submit(it, inp.value, err); };
    setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (x) { inp.focus(); } }, 60);
  }

  function submit(it, val, err) {
    if (!val.trim()) { err.textContent = "먼저 답을 입력해 주세요."; return; }
    document.getElementById("ans").blur();
    var g = EP.grade(val, it, R.copy ? it.answers[0] : null);
    var good = g.status === "correct" || g.status === "minor";
    if (R.copy) {
      if (!good) { err.textContent = "정답과 똑같이 입력해 주세요."; return; }
      R.copy = false; showOk(it, g, "잘했어요"); return;
    }
    if (good) {
      if (R.attempt === 0) onFirstTryCorrect(it);
      showOk(it, g, g.status === "minor" ? "거의 맞았어요" : "정답이에요");
      return;
    }
    R.attempt++;
    if (R.attempt === 1) markWrongOnce(it);
    showBad(it, g, R.attempt > 1);
  }

  /* 틀린 문제 탭: 서로 다른 날 두 번 연속 바로 맞히면 목록에서 뺀다 */
  function onFirstTryCorrect(it) {
    if (R.phase === "main") R.firstOk++;
    if (R.phase !== "single") return;
    var w = st.wrong[it.id]; if (!w) return;
    w.tabDay = U.today(); w.streak = (w.streak || 0) + 1;
    if (w.streak >= 2) { delete st.wrong[it.id]; R.cleared = true; }
    store.save();
  }
  function markWrongOnce(it) {
    if (R.phase === "main") {
      if (R.retry.indexOf(it.id) < 0) R.retry.push(it.id);
      st.wrong[it.id] = { streak: 0, tabDay: null }; store.save();
    } else if (R.phase === "single") {
      var w = st.wrong[it.id]; if (w) { w.streak = 0; w.tabDay = U.today(); store.save(); }
    }
  }

  /* ---- 피드백 시트 ---- */
  function showOk(it, g, title) {
    var full = it.type === "blank" ? C.fullAnswer(it) : (g.answer || it.answers[0]);
    var notes = "";
    if (g.notes && g.notes.length) notes = '<p class="sh-note">' + g.notes.map(function (n) {
      return '<span class="fix"><s>' + esc(n.from) + "</s> → " + esc(n.to) + "</span>" + (n.core ? " (패턴 부분이에요. 다음엔 정확히 써 봐요)" : "");
    }).join("<br>") + "</p>";
    var extra = "";
    if (R.phase === "single" && R.attempt === 0) {
      if (R.cleared && !st.wrong[it.id]) extra = '<p class="sh-note">두 번 연속 맞혀서 틀린 문제 목록에서 빠졌어요.</p>';
      else if (st.wrong[it.id]) extra = '<p class="sh-note">한 번 더 맞히면 목록에서 빠져요.</p>';
    }
    V.openSheet("ok", '<div class="sh-title">' + ico("ok", 26) + esc(title) + "</div>" +
      '<div class="sh-ans">' + U.withCore(full, C.coreOf(it)) + '</div><div class="sh-ko">' + esc(it.ko) + "</div>" + notes + extra +
      V.listenBtns() + ui.key("다음", "nextBtn"), full);
    if (st.autoplay) setTimeout(function () { speak(full); }, 250);
    document.getElementById("nextBtn").onclick = next;
  }

  var NO_EXPLAIN = "이 오답은 아직 설명이 없어요. 궁금하면 문장을 검색해 보세요.";
  function badReason(g) {
    if (g.reason) return g.reason;
    if (g.marks && g.marks.missing > 0 && g.marks.extra === 0) return "빠진 단어가 있어요. 이 오답은 아직 자세한 설명이 없어요. 궁금하면 문장을 검색해 보세요.";
    return NO_EXPLAIN;
  }
  /* reveal: 두 번째로 틀렸으면 정답을 보여 주고 따라 입력하게 한다 */
  function showBad(it, g, reveal) {
    var full = C.fullAnswer(it);
    var title = g.status === "other" ? "맞는 영어예요!" : reveal ? "정답을 확인해 보세요" : "다시 한 번 해 볼까요?";
    V.openSheet("bad", '<div class="sh-title">' + ico(g.status === "other" ? "ok" : "bad", 26) + title + "</div>" +
      (g.marks ? '<div class="mine">' + g.marks.html + "</div>" : "") +
      '<p class="sh-note">' + esc(badReason(g)) + "</p>" +
      (reveal ? '<div class="sh-ans">' + U.withCore(full, C.coreOf(it)) + "</div>" + V.listenBtns() + ui.key("따라 입력하기", "badBtn")
              : ui.key("다시 입력", "badBtn")), full);
    document.getElementById("badBtn").onclick = function () {
      V.closeSheet();
      if (reveal) { R.copy = true; renderItem(); }
      else { var inp = document.getElementById("ans"); inp.select(); inp.focus(); }
    };
  }

  function next() {
    stopSpeak(); V.closeSheet();
    R.pos++; R.attempt = 0; R.copy = false; persist();
    setTimeout(render, 180);
  }

  function finishPhase() {
    if (R.phase === "main" && R.retry.length) { R.phase = "retryIntro"; persist(); return render(); }
    if (R.phase === "single") return leave("wrong");
    st.progress = null; st.done = true; store.save();
    renderDone();
  }

  /* ---- 완료 ---- */
  var DONE_CHARS = [["keycap", "키캡"], ["a", "a"], ["capsule", "캡슐"], ["fan", "부채꼴"]];
  function renderDone() {
    V.setPaper(false); EP.tabs.hideBar();
    var made = C.sessionSentences();
    $screen.className = "screen done";
    $screen.innerHTML =
      '<div class="done-chars">' + DONE_CHARS.map(function (c) { return ui.char(c[0], { expr: "party", label: c[1] }); }).join("") + "</div>" +
      "<h1>세션 " + S.no + ' 완료!</h1><p class="score">바로 맞힌 문제 ' + R.firstOk + " / " + R.total + "</p>" +
      '<div class="panel"><h2>이렇게도 말해요</h2>' + S.tips.map(function (t, i) {
        return '<div class="tip"><div class="from">' + esc(t.from) + '</div><div class="to"><span>' + esc(t.to) + "</span>" + ui.speakBtn({ "data-tip": i }) +
          '</div><div class="why">' + esc(t.why) + "</div></div>";
      }).join("") + "</div>" +
      '<div class="panel"><h2>오늘 문장 ' + made.length + "개</h2>" + made.map(function (m, i) {
        return '<div class="sent"><div><div class="en">' + esc(m.en) + '</div><div class="ko">' + esc(m.ko) + "</div></div>" + ui.speakBtn({ "data-m": i }, 20) + "</div>";
      }).join("") + "</div>" +
      ui.key("오늘 문장 따라 말하기", "followBtn", { variant: "soft" }) +
      ui.key("10분 더", "moreBtn", { gap: true }) +
      ui.link("홈으로", "homeBtn");
    $screen.onclick = function (e) {
      var t = e.target.closest("[data-tip]"), m = e.target.closest("[data-m]");
      if (t) speak(S.tips[+t.getAttribute("data-tip")].to);
      if (m) speak(made[+m.getAttribute("data-m")].en);
    };
    document.getElementById("followBtn").onclick = function () { EP.follow.start(made); };
    document.getElementById("moreBtn").onclick = function () { V.toast("샘플에는 세션 1만 있어요"); };
    document.getElementById("homeBtn").onclick = function () { leave("home"); };
  }

  EP.session = { start: start, isActive: function () { return !!R; } };
})(window.EP);
