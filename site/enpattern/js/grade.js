/* 채점: 입력 정규화 → 정답/알려진 오답/오타 판정 → 틀린 이유와 표시 */
(function (EP) {
  "use strict";

  var esc = EP.util.esc;

  var CONTR = { "i'm": "i am", "you're": "you are", "it's": "it is", "that's": "that is", "don't": "do not", "doesn't": "does not", "didn't": "did not",
    "can't": "cannot", "isn't": "is not", "aren't": "are not", "i've": "i have", "i'd": "i would", "won't": "will not", "what's": "what is", "he's": "he is", "she's": "she is" };
  var NOAPOS = { "im": "i'm", "dont": "don't", "doesnt": "doesn't", "didnt": "didn't", "cant": "can't", "isnt": "isn't", "arent": "aren't", "ive": "i've", "youre": "you're", "thats": "that's", "whats": "what's" };
  var NUM = { "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten" };

  /* 실제 단어 목록: 여기 있는 단어는 오타로 보지 않는다 */
  var DICT = {};
  ("a an the i you he she it we they me him her us them my your his our their this that these those is am are was were be been being have has had having do does did done " +
   "not no yes one two three four five six seven eight nine ten some any many much lot lots of to in on at for with from by and or but so if then than " +
   "want went wants need needs needed get got go goes going make made take took like likes love know think see saw help can cannot will would could should " +
   "car cars cat cats card care core cold colds could cool coat flu plan plans plane planet play time times tie tim today tomorrow question questions " +
   "headache headaches head heads hurt hurts dog dogs dig bog brother brothers bother umbrella homework homeworks home pen pens pan pin one ones once own " +
   "bike meeting free ask something have hive hat hate hove gave save wave cave dave above").split(" ").forEach(function (w) { if (w) DICT[w] = 1; });

  /* 한 단어를 고치면 맞는 경우의 이유 */
  var SUBST = { "has>have": "has는 he, she처럼 다른 한 사람이 주어일 때 써요. I 뒤에는 have예요.", "a>an": "모음 소리로 시작하는 단어 앞에는 an을 써요.",
    "an>a": "자음 소리로 시작하는 단어 앞에는 a를 써요.", "having>have": "‘가지고 있다’를 말할 때는 have 그대로 써요.", "the>a": "처음 말하는 물건 하나에는 the가 아니라 a를 써요." };

  /* 소문자 토큰 배열로. 축약형은 풀고, 아포스트로피 빠진 축약형은 notes에 남긴다 */
  function normalize(s) {
    var notes = [], out = [];
    var t = String(s).replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').toLowerCase();
    t = t.replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
    (t ? t.split(" ") : []).forEach(function (w) {
      w = w.replace(/^'+|'+$/g, "");
      if (!w) return;
      if (NOAPOS[w]) { notes.push({ from: w, to: NOAPOS[w], kind: "apos" }); w = NOAPOS[w]; }
      if (NUM[w]) w = NUM[w];
      if (CONTR[w]) { CONTR[w].split(" ").forEach(function (x) { out.push(x); }); return; }
      out.push(w);
    });
    for (var i = 0; i < out.length - 1; i++) if (out[i] === "can" && out[i + 1] === "not") out.splice(i, 2, "cannot");
    return { toks: out, notes: notes };
  }

  /* 편집 거리 */
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }

  /* u의 각 토큰이 a와의 최장 공통 부분열에 들어가는지 */
  function lcsMask(u, a) {
    var m = u.length, n = a.length, L = [], i, j, k;
    for (i = 0; i <= m; i++) { L[i] = []; for (j = 0; j <= n; j++) L[i][j] = 0; }
    for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--) L[i][j] = u[i] === a[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    var mask = [];
    for (k = 0; k < m; k++) mask[k] = false;
    i = 0; j = 0;
    while (i < m && j < n) { if (u[i] === a[j]) { mask[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    return { mask: mask, len: L[0][0] };
  }

  /* 단어 하나 바꾸기/빼기/넣기로 맞는 경우의 설명 */
  function ruleReason(u, a) {
    var i, t;
    if (u.length === a.length) {
      var diff = [];
      for (i = 0; i < u.length; i++) if (u[i] !== a[i]) diff.push(i);
      if (diff.length === 1 && SUBST[u[diff[0]] + ">" + a[diff[0]]]) return SUBST[u[diff[0]] + ">" + a[diff[0]]];
    }
    if (u.length === a.length + 1) {
      for (i = 0; i < u.length; i++) {
        t = u.slice(0, i).concat(u.slice(i + 1));
        if (t.join(" ") !== a.join(" ")) continue;
        if (/^(am|is|are)$/.test(u[i])) return "have 앞에는 am / is / are를 함께 쓰지 않아요.";
        if (u[i] === "a" || u[i] === "an") return "여기에는 a / an을 붙이지 않아요.";
        return "‘" + u[i] + "’는 빼야 해요.";
      }
    }
    if (u.length + 1 === a.length) {
      for (i = 0; i < a.length; i++) {
        t = a.slice(0, i).concat(a.slice(i + 1));
        if (t.join(" ") !== u.join(" ")) continue;
        if (a[i] === "a" || a[i] === "an") return "셀 수 있는 것 하나를 말할 때는 앞에 a(모음 소리면 an)가 필요해요.";
        if (a[i] === "have") return "‘있다, 가지고 있다’를 말하려면 have가 꼭 필요해요.";
        return "빠진 단어가 하나 있어요.";
      }
    }
    return "";
  }

  /* 정답과 가장 가까운 것을 기준으로, 맞지 않는 단어를 <mark>로 표시 */
  function markUser(u, A) {
    var best = null;
    A.forEach(function (a) {
      var r = lcsMask(u, a); r.missing = a.length - r.len;
      if (!best || r.len - r.missing * 0.1 > best.len - best.missing * 0.1) best = r;
    });
    var html = u.map(function (w, i) { return best.mask[i] ? esc(w) : "<mark>" + esc(w) + "</mark>"; }).join(" ");
    var extra = best.mask.filter(function (x) { return !x; }).length;
    return { html: html, missing: best.missing, extra: extra };
  }

  /* 콘텐츠에 나오는 단어도 실제 단어로 등록한다 (정답·다른 표현·팁·예상 오답) */
  var learned = false;
  function learnWords() {
    if (learned) return; learned = true;
    function add(s) { normalize(s).toks.forEach(function (w) { DICT[w] = 1; }); }
    EP.data.session.items.forEach(function (it) {
      (it.answers || []).concat(it.alts || []).forEach(add);
      if (it.tip) add(it.tip.en);
      for (var k in (it.wrong || {})) add(k);
    });
  }

  /* 정답으로 인정하는 문장들: 패턴 정답 + (문장 문제면) 다른 표현과 팁.
     alt: 다른 표현으로 맞혔는지 */
  function candidates(it, target) {
    if (target) return [{ text: target, alt: false }];
    var out = [], seen = {};
    function push(text, alt) { var k = normalize(text).toks.join(" "); if (seen[k]) return; seen[k] = 1; out.push({ text: text, alt: alt }); }
    it.answers.forEach(function (a) { push(a, false); });
    if (it.type !== "blank") {
      (it.alts || []).forEach(function (a) { push(a, true); });
      if (it.tip) push(it.tip.en, true);
    }
    return out;
  }

  /* 결과 status: correct | minor(오타·아포스트로피) | wrong
     answer: 맞힌 문장, alt: 다른 표현으로 맞혔는지
     target: 정답 따라 입력하기일 때 그 문장 하나만 정답으로 본다 */
  function grade(input, it, target) {
    learnWords();
    var N = normalize(input), u = N.toks, key = u.join(" ");
    var cands = candidates(it, target);
    var answers = cands.map(function (c) { return c.text; });
    var A = answers.map(function (a) { return normalize(a).toks; });
    var coreToks = normalize(EP.content.coreOf(it)).toks;
    var i, j;

    for (i = 0; i < A.length; i++) if (A[i].join(" ") === key) return { status: N.notes.length ? "minor" : "correct", notes: N.notes, answer: answers[i], alt: cands[i].alt };

    if (!target && it.wrong && it.wrong[key]) return { status: "wrong", reason: it.wrong[key], marks: markUser(u, A) };

    /* 오타 판정: 단어 수가 같고, 다른 단어가 실제 단어가 아니며 철자가 가까움 */
    for (i = 0; i < A.length; i++) {
      var a = A[i]; if (a.length !== u.length) continue;
      var notes = N.notes.slice(), ok = true;
      for (j = 0; j < a.length; j++) {
        if (u[j] === a[j]) continue;
        var lim = a[j].length <= 4 ? 1 : 2;
        if (!DICT[u[j]] && lev(u[j], a[j]) <= lim) notes.push({ from: u[j], to: a[j], kind: "typo", core: it.type !== "blank" && coreToks.indexOf(a[j]) >= 0 });
        else { ok = false; break; }
      }
      if (ok) return { status: "minor", notes: notes, answer: answers[i], alt: cands[i].alt };
    }

    var reason = "";
    for (i = 0; i < A.length && !reason; i++) reason = ruleReason(u, A[i]);
    return { status: "wrong", reason: reason, marks: markUser(u, A) };
  }

  EP.grade = grade;
  EP.grade.normalize = normalize;
  EP.grade.candidates = candidates;
})(window.EP);
