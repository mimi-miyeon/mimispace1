/* 학습 세션: 복습 → 문법 이해 → 문제 → 틀린 문제 다시 → 완료
   phase: review | intro | main | retryIntro | retry | single(틀린 문제 탭에서 한 문제만)
   mode:  new(다음 세션, 진도에 반영·이어하기 저장) | redo(끝낸 세션 다시 풀기, 진도 변화 없음)
   문제는 "세션번호-문제id" 키로 다룬다. 복습 문제는 다른 세션의 문제일 수 있다. */
(function (EP) {
  "use strict";

  var V = EP.view, U = EP.util, esc = U.esc, C = EP.content, store = EP.store, st = store.state;
  var ui = EP.ui, ico = EP.icons.ico, speak = EP.speech.speak, stopSpeak = EP.speech.stop;
  var $screen = V.$screen;
  var R = null; /* 진행 중인 세션 상태. 없으면 null */
  var REVIEW_MAX = 3, REVIEW_WRONG_MAX = 2;

  var SPLASH_MS = 1400;   /* 안내 화면을 보여 주는 최소 시간 */

  /* opt: { no, mode: "new" | "redo", resume, splash } 또는 { single: "세션-문제id" }
     splash: 시작 전에 잠깐 안내 화면 (홈 [시작하기], 결과 화면 [10분 더]) */
  function start(opt) {
    opt = opt || {};
    stopSpeak(); V.closeSheet(); EP.tabs.hideBar(); V.setPaper(true); $screen.onclick = null;
    $screen.className = "screen";
    var t0 = Date.now(), wait = 0;
    if (opt.splash) { wait = SPLASH_MS; renderSplash(opt); }
    else $screen.innerHTML = '<div class="loading">불러오는 중…</div>';
    R = { loading: true };
    var p = opt.resume && st.progress && st.progress.no === opt.no ? st.progress : null;
    var need = [];
    if (opt.single) need.push(C.sessionOfKey(opt.single));
    else {
      need.push(opt.no);
      if (opt.mode !== "redo" && opt.no > 1) {
        need.push(opt.no - 1);
        (p ? p.review || [] : reviewWrongKeys(opt.no)).forEach(function (k) { need.push(C.sessionOfKey(k)); });
      }
    }
    C.loadMany(need).then(function () {
      setTimeout(function () { begin(opt, p); }, Math.max(0, wait - (Date.now() - t0)));
    });
  }

  /* 화면 전환: 안내 화면을 차례로 잠깐씩 보여 준 뒤 done() */
  function transition(steps, done) {
    var mine = R, i = 0;
    (function step() {
      if (R !== mine) return;   /* 그사이 세션을 나갔으면 멈춘다 */
      if (i >= steps.length) return done();
      var x = steps[i++];
      $screen.className = "screen"; $screen.scrollTop = 0;
      $screen.innerHTML = ui.message({ char: ui.char(x.char, { size: "md", expr: x.expr, label: x.label }), title: x.title, text: x.text });
      setTimeout(step, SPLASH_MS);
    })();
  }

  /* 다음 세션으로 넘어갈 때 잠깐 보이는 안내 */
  function renderSplash(opt) {
    var review = !opt.resume && opt.no > 1;
    $screen.innerHTML = ui.message({
      char: ui.char("keycap", { size: "md", expr: "think", label: "키캡" }),
      title: "세션 " + opt.no,
      text: opt.resume ? "멈춘 곳부터 이어서 해 볼게요" : review ? "복습부터 먼저 시작해 봐요" : "시작해 볼게요"
    });
  }

  function begin(opt, p) {
    var single = opt.single, S = single ? null : C.session(opt.no);
    if (single ? !C.item(single) : !S) {
      R = null; V.toast("문제를 불러오지 못했어요. 인터넷 연결을 확인해 주세요");
      return EP.tabs.show(single ? "wrong" : "home");
    }
    R = { S: S, no: opt.no, mode: opt.mode === "redo" ? "redo" : "new", phase: single ? "single" : "intro", pos: 0,
          retry: [], firstOk: 0, total: S ? S.items.length : 1, attempt: 0, copy: false, single: single, cleared: false, review: [] };
    if (single) R.queue = [single];
    else if (p) {
      R.review = (p.review || []).filter(C.item); R.phase = p.phase; R.pos = p.pos; R.retry = (p.retry || []).filter(C.item); R.firstOk = p.firstOk || 0; R.reviewOk = p.reviewOk || 0;
    } else if (R.mode === "new") {
      R.review = buildReview(R.no);
      if (R.review.length) R.phase = "review";
    }
    if (!single) R.queue = queueFor(R.phase);
    render();
  }

  /* 다음 세션 복습에 넣기로 한 틀린 문제 (이번 세션보다 앞 세션 것만) */
  function reviewWrongKeys(no) {
    return Object.keys(st.wrong).filter(function (k) { return st.wrong[k].rev && C.sessionOfKey(k) < no; }).slice(0, REVIEW_WRONG_MAX);
  }
  /* 복습: 틀렸던 문제 먼저, 나머지는 바로 앞 세션의 문장 문제로 채운다 */
  function buildReview(no) {
    var keys = reviewWrongKeys(no).filter(C.item), prev = C.session(no - 1);
    if (prev) {
      var pool = prev.items.filter(function (it) { return it.type === "sentence" && !st.wrong[it._key] && keys.indexOf(it._key) < 0; });
      while (keys.length < REVIEW_MAX && pool.length) keys.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]._key);
    }
    return keys;
  }
  function queueFor(phase) {
    if (phase === "review") return R.review.slice();
    if (phase === "main") return R.S.items.map(function (it) { return it._key; });
    if (phase === "retry") return R.retry.slice();
    return [];
  }

  /* 멈춘 곳 저장. 새 세션만 저장한다 (다시 풀기·틀린 문제 한 문제는 저장하지 않음) */
  function persist() {
    if (R.single || R.mode !== "new") return;
    st.progress = { no: R.no, phase: R.phase, pos: R.pos, retry: R.retry, firstOk: R.firstOk, review: R.review, reviewOk: R.reviewOk || 0 };
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
      var note = R.single ? "이 문제는 나중에 다시 풀 수 있어요." : R.mode === "redo" ? "다시 풀기는 이어서 하기가 없어요. 진도는 그대로예요." : "다음에 멈춘 문제부터 이어서 할 수 있어요.";
      V.openSheet("neutral", '<div class="sh-title">그만할까요?</div><p class="sh-note">' + note + "</p>" +
        ui.key("계속하기", "qStay") + ui.link("나가기", "qLeave"));
      document.getElementById("qStay").onclick = V.closeSheet;
      document.getElementById("qLeave").onclick = function () {
        if (R.phase !== "intro" || R.review.length) persist();
        leave(R.single ? "wrong" : "home");
      };
    };
  }

  /* ---- 문법 이해 ---- */
  function renderIntro() {
    var S = R.S, I = S.intro, blocks = "";
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
        return '<div class="ex"><div><div class="en">' + U.withCore(x.en, C.stemFor(S, x.en)) + '</div><div class="ko">' + esc(x.ko) + "</div></div>" +
          ui.speakBtn({ "data-ex": i }) + "</div>";
      }).join("") +
      '<div class="s-actions">' + ui.key("문제 풀기", "goBtn") + "</div>";
    $screen.querySelectorAll("[data-ex]").forEach(function (b) { b.onclick = function () { speak(I.examples[+b.getAttribute("data-ex")].en); }; });
    document.getElementById("goBtn").onclick = function () { R.phase = "main"; R.queue = queueFor("main"); R.pos = 0; persist(); render(); };
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
    var it = C.item(R.queue[R.pos]), blank = it.type === "blank", from = it._s;
    var label = R.phase === "retry" ? "틀린 문제 한 번 더" : R.phase === "single" ? "틀린 문제 · 세션 " + from.no :
      R.phase === "review" ? "복습 " + (R.pos + 1) + " / " + R.queue.length + " · 세션 " + from.no : it.kind + " " + (R.pos + 1) + " / " + R.queue.length;
    var body = "";
    if (it.ctx) body += '<div class="ctx"><div class="sm">' + esc(it.ctx.lead) + '</div><div class="en">' + esc(it.ctx.en) + "</div></div>";
    if (it.dialog) body += '<div class="ctx"><div><span class="who">A</span><span class="en">' + esc(it.dialog.a) + '</span></div><div class="sm indent">' + esc(it.dialog.aKo) + "</div>" +
      '<div class="reply"><span class="who">B</span><span class="sm">' + esc(EP.L.reply) + '</span></div></div>';
    body += '<p class="q-ko">' + esc(it.ko) + "</p>";
    if (blank) body += '<p class="blank-line">' + (it.before ? esc(it.before) + " " : "") + '<span class="bl">?</span>' + esc(C.tail(it.after)) + "</p>";
    if (R.copy) body += '<div class="copy"><div class="lab">정답을 그대로 따라 입력해 보세요</div><div class="en">' + esc(it.answers[0]) + "</div></div>";

    $screen.innerHTML = topBar(segs()) + '<div class="kind">' + label + '</div><div class="chip">' + esc(from.hint) + "</div>" + body +
      '<form id="ansForm" autocomplete="off"><input class="answer-in" id="ans" type="text" inputmode="text" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="' +
      (blank ? "빈칸에 들어갈 말" : esc(EP.L.input)) + '" aria-label="답 입력"><p class="err" id="err" aria-live="polite"></p>' +
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

  /* 틀린 문제 기록
     - 세션(복습·문제)에서 틀리면 목록에 넣고 다음 세션 복습 대상(rev)으로 표시
     - 두 번 연속 바로 맞히면 목록에서 뺀다. 세션 복습에서 맞힌 것도 1회
     - 틀린 문제 탭은 같은 문제를 하루 한 번 (tabDay) */
  function onFirstTryCorrect(it) {
    if (R.phase === "main") R.firstOk++;
    if (R.phase === "review") R.reviewOk = (R.reviewOk || 0) + 1;
    var w = st.wrong[it._key];
    if (!w || (R.phase !== "single" && R.phase !== "review")) return;
    if (R.phase === "single") w.tabDay = U.today();
    w.rev = false; w.streak = (w.streak || 0) + 1;
    if (w.streak >= 2) { delete st.wrong[it._key]; R.cleared = true; }
    store.save();
  }
  function markWrongOnce(it) {
    var k = it._key, w = st.wrong[k];
    if (R.phase === "main" || R.phase === "review") {
      if (R.retry.indexOf(k) < 0) R.retry.push(k);
      st.wrong[k] = { streak: 0, tabDay: w ? w.tabDay || null : null, rev: true }; store.save();
    } else if (R.phase === "single" && w) {
      w.streak = 0; w.tabDay = U.today(); w.rev = true; store.save();
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
      if (R.cleared && !st.wrong[it._key]) extra = '<p class="sh-note">두 번 연속 맞혀서 틀린 문제 목록에서 빠졌어요.</p>';
      else if (st.wrong[it._key]) extra = '<p class="sh-note">한 번 더 맞히면 목록에서 빠져요.</p>';
    }
    /* 다른 표현으로 맞혔으면 이번 패턴 문장을 한 번 더 보여 준다 */
    var pattern = g.alt ? '<p class="sh-pattern"><span class="sh-pattern__lab">이번 패턴으로는</span>' + U.withCore(C.fullAnswer(it), C.coreOf(it)) + "</p>" : "";
    V.openSheet("ok", '<div class="sh-title">' + ico("ok", 26) + esc(title) + "</div>" +
      '<div class="sh-ans">' + (g.alt ? esc(full) : U.withCore(full, C.coreOf(it))) + '</div><div class="sh-ko">' + esc(it.ko) + "</div>" + notes + pattern + extra +
      V.listenBtns() + tipBox(it, full) + ui.key("다음", "nextBtn"), full);
    if (st.autoplay) setTimeout(function () { speak(full); }, 250);
    document.getElementById("nextBtn").onclick = next;
  }

  /* 다른 표현 팁 (보고 듣기만). 방금 쓴 답이 팁과 같으면 보여 주지 않는다 */
  function tipBox(it, used) {
    if (!it.tip) return "";
    var norm = EP.grade.normalize;
    if (norm(it.tip.en).toks.join(" ") === norm(used).toks.join(" ")) return "";
    return '<div class="sh-tip"><div class="sh-tip__lab">이렇게도 말해요</div><div class="sh-tip__line"><span class="sh-tip__en">' + esc(it.tip.en) + "</span>" +
      ui.speakBtn({ "data-tip-say": it.tip.en }, 20) + '</div><div class="sh-tip__why">' + esc(it.tip.why) + "</div></div>";
  }
  V.$sheet.addEventListener("click", function (e) {
    var b = e.target.closest("[data-tip-say]");
    if (b) speak(b.getAttribute("data-tip-say"));
  });

  var NO_EXPLAIN = "이 오답은 아직 설명이 없어요. 궁금하면 문장을 검색해 보세요.";
  function badReason(g) {
    if (g.reason) return g.reason;
    if (g.marks && g.marks.missing > 0 && g.marks.extra === 0) return "빠진 단어가 있어요. 이 오답은 아직 자세한 설명이 없어요. 궁금하면 문장을 검색해 보세요.";
    return NO_EXPLAIN;
  }
  /* reveal: 두 번째로 틀렸으면 정답을 보여 주고 따라 입력하게 한다 */
  function showBad(it, g, reveal) {
    var full = C.fullAnswer(it);
    var title = reveal ? "정답을 확인해 보세요" : "다시 한 번 해 볼까요?";
    V.openSheet("bad", '<div class="sh-title">' + ico("bad", 26) + title + "</div>" +
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
    if (R.phase === "review") {
      var allOk = (R.reviewOk || 0) >= R.review.length;
      R.phase = "intro"; R.queue = []; R.pos = 0; persist();
      return transition([
        { char: "capsule", expr: "party", label: "캡슐", title: allOk ? "잘했어요!" : "화이팅이에요!",
          text: allOk ? "복습 문제를 모두 바로 맞혔어요" : "복습을 마쳤어요. 틀린 문제는 끝에서 한 번 더 나와요" },
        { char: "keycap", expr: "think", label: "키캡", title: "세션 " + R.no, text: "새로운 세션을 시작할게요" }
      ], render);
    }
    if (R.phase === "main" && R.retry.length) { R.phase = "retryIntro"; persist(); return render(); }
    if (R.phase === "single") return leave("wrong");
    if (R.mode === "new") { store.markDone(R.no); st.progress = null; }
    store.save();
    renderDone();
  }

  /* ---- 완료 ---- */
  var DONE_CHARS = [["keycap", "키캡"], ["a", "a"], ["capsule", "캡슐"], ["fan", "부채꼴"]];
  function renderDone() {
    V.setPaper(false); EP.tabs.hideBar();
    var S = R.S, made = C.sessionSentences(S);
    $screen.className = "screen done";
    $screen.innerHTML =
      '<div class="done-chars">' + DONE_CHARS.map(function (c) { return ui.char(c[0], { expr: "party", label: c[1] }); }).join("") + "</div>" +
      "<h1>세션 " + S.no + (R.mode === "redo" ? " 다시 풀기 완료!" : " 완료!") + '</h1><p class="score">바로 맞힌 문제 ' + R.firstOk + " / " + R.total + "</p>" +
      '<div class="panel"><h2>오늘 문장 ' + made.length + "개</h2>" + made.map(function (m, i) {
        return '<div class="sent"><div><div class="en">' + esc(m.en) + '</div><div class="ko">' + esc(m.ko) + "</div></div>" + ui.speakBtn({ "data-m": i }, 20) + "</div>";
      }).join("") + "</div>" +
      ui.key("오늘 문장 따라 말하기", "followBtn", { variant: "soft" }) +
      ui.key("10분 더", "moreBtn", { gap: true }) +
      ui.link("홈으로", "homeBtn");
    $screen.onclick = function (e) {
      var m = e.target.closest("[data-m]");
      if (m) speak(made[+m.getAttribute("data-m")].en);
    };
    document.getElementById("followBtn").onclick = function () { EP.follow.start(made); };
    document.getElementById("moreBtn").onclick = function () { R = null; EP.tabs.startNext(); };
    document.getElementById("homeBtn").onclick = function () { leave("home"); };
  }

  EP.session = { start: start, isActive: function () { return !!R; } };
})(window.EP);
