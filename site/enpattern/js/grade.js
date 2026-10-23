/* 채점: 입력 정규화 → 정답/알려진 오답/오타 판정 → 틀린 이유와 표시 */
(function (EP) {
  "use strict";

  var esc = EP.util.esc;

  var CONTR = { "i'm": "i am", "you're": "you are", "it's": "it is", "that's": "that is", "don't": "do not", "doesn't": "does not", "didn't": "did not",
    "can't": "cannot", "isn't": "is not", "aren't": "are not", "i've": "i have", "i'd": "i would", "won't": "will not", "what's": "what is", "he's": "he is", "she's": "she is",
    "wasn't": "was not", "weren't": "were not", "haven't": "have not", "hasn't": "has not", "hadn't": "had not", "couldn't": "could not",
    "wouldn't": "would not", "shouldn't": "should not", "mustn't": "must not", "we're": "we are", "they're": "they are", "you've": "you have",
    "we've": "we have", "they've": "they have", "i'll": "i will", "you'll": "you will", "we'll": "we will", "they'll": "they will",
    "it'll": "it will", "there's": "there is", "here's": "here is", "where's": "where is", "who's": "who is", "how's": "how is",
    "must've": "must have", "should've": "should have", "could've": "could have", "would've": "would have",
    "let's": "let us", "you'd": "you would", "we'd": "we would", "they'd": "they would", "he'd": "he would", "she'd": "she would", "gonna": "going to", "wanna": "want to", "gotta": "got to" };
  var NOAPOS = { "im": "i'm", "dont": "don't", "doesnt": "doesn't", "didnt": "didn't", "cant": "can't", "isnt": "isn't", "arent": "aren't", "ive": "i've", "youre": "you're", "thats": "that's", "whats": "what's",
    "wasnt": "wasn't", "werent": "weren't", "havent": "haven't", "hasnt": "hasn't", "hadnt": "hadn't", "couldnt": "couldn't", "wouldnt": "wouldn't",
    "shouldnt": "shouldn't", "mustnt": "mustn't", "theyre": "they're", "youve": "you've", "weve": "we've", "theyve": "they've", "youll": "you'll",
    "theyll": "they'll", "theres": "there's", "wheres": "where's", "whos": "who's", "hows": "how's",
    "mustve": "must've", "lets": "let's", "youd": "you'd", "theyd": "they'd", "shouldve": "should've", "couldve": "could've", "wouldve": "would've" };
  var NUM = { "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten" };

  /* 실제 단어 목록: 여기 있는 단어는 오타로 보지 않는다 */
  var DICT = {};
  ("a an the i you he she it we they me him her us them my your his our their this that these those is am are was were be been being have has had having do does did done " +
   "not no yes one two three four five six seven eight nine ten some any many much lot lots of to in on at for with from by and or but so if then than " +
   "want went wants need needs needed get got go goes going make made take took like likes love know think see saw help can cannot will would could should " +
   "car cars cat cats card care core cold colds could cool coat flu plan plans plane planet play time times tie tim today tomorrow question questions " +
   "headache headaches head heads hurt hurts dog dogs dig bog brother brothers bother umbrella homework homeworks home pen pens pan pin one ones once own " +
   "bike meeting free ask something have hive hat hate hove gave save wave cave dave above").split(" ").forEach(function (w) { if (w) DICT[w] = 1; });

  /* ---- 포르투갈어(유럽) ---- 배우는 언어가 pt일 때만 쓴다 (EP.lang) */
  function isPt() { return EP.lang === "pt"; }
  var DICT_PT = {};
  ("a à o os as às um uma uns umas e é de do da dos das em no na nos nas ao aos por para pelo pela com sem " +
   "eu tu ele ela nós vós eles elas você vocês me te se lhe lhes vos meu minha teu tua seu sua nosso nossa " +
   "sou és somos são estou estás está estamos estão tenho tens tem temos têm vou vais vai vamos vão há " +
   "não sim que quem onde como quando porque muito muita mais menos já ainda também aqui ali lá isto isso aquilo " +
   "este esta estes estas esse essa aquele aquela por pôr pode pôde dá dás dê vem vêm avó avô bem mal").split(" ").forEach(function (w) { if (w) DICT_PT[w] = 1; });
  function dict() { return isPt() ? DICT_PT : DICT; }

  /* 악센트 빼기 (café → cafe) */
  var FOLD_FROM = "àáâãäåèéêëìíîïòóôõöùúûüçñýÿ", FOLD_TO = "aaaaaaeeeeiiiiooooouuuucnyy";
  function fold(w) { var o = ""; for (var i = 0; i < w.length; i++) { var k = FOLD_FROM.indexOf(w[i]); o += k < 0 ? w[i] : FOLD_TO[k]; } return o; }
  /* 하이픈으로 붙은 말을 나눈다 (chamo-me → chamo, me) */
  function splitH(toks) { var o = []; toks.forEach(function (t) { t.split("-").forEach(function (x) { if (x) o.push(x); }); }); return o; }

  /* 악센트 하나로 다른 말이 되는 것: 정답 단어 → 이유 */
  var ACCENT_PT = { "é": "é(~이다)와 e(그리고)는 다른 말이에요.", "e": "e(그리고)와 é(~이다)는 다른 말이에요.",
    "está": "está(~에 있다, ~한 상태다)와 esta(이 ~)는 다른 말이에요.", "esta": "esta(이 ~)와 está(~에 있다)는 다른 말이에요.",
    "estás": "estás(너는 ~에 있다)와 estas(이 ~들)는 다른 말이에요.", "há": "há(~이 있다)는 h와 악센트를 꼭 써요.",
    "à": "à는 a + a(~에, ~로)가 합쳐진 말이에요. 악센트로 구별해요.", "às": "às는 a + as가 합쳐진 말이에요. 악센트로 구별해요.",
    "nós": "nós(우리)와 nos(우리를, ~에)는 다른 말이에요.", "pôr": "pôr(놓다)와 por(~로)는 다른 말이에요.",
    "pôde": "pôde(할 수 있었다)와 pode(할 수 있다)는 다른 말이에요.", "dá": "dá(준다)와 da(de + a)는 다른 말이에요.",
    "têm": "têm(그들이 가지고 있다)과 tem(그/그녀가 가지고 있다)은 다른 말이에요.", "vêm": "vêm(그들이 온다)과 vem(그/그녀가 온다)은 다른 말이에요." };

  /* 풀어 쓰면 틀리는 축약 */
  var CONTRACT_PT = { "de o": "do", "de a": "da", "de os": "dos", "de as": "das", "em o": "no", "em a": "na", "em os": "nos", "em as": "nas",
    "a o": "ao", "a os": "aos", "a a": "à", "a as": "às", "em um": "num", "em uma": "numa", "por o": "pelo", "por a": "pela", "por os": "pelos", "por as": "pelas",
    "de este": "deste", "de esta": "desta", "de esse": "desse", "de essa": "dessa", "em este": "neste", "em esta": "nesta", "em esse": "nesse", "em essa": "nessa",
    "de ele": "dele", "de ela": "dela", "de eles": "deles", "de elas": "delas", "em ele": "nele", "em ela": "nela", "de isso": "disso", "de isto": "disto",
    "de aqui": "daqui", "de ali": "dali", "em isso": "nisso", "em isto": "nisto" };
  /* 동사 뒤에 하이픈으로 붙는 대명사 (유럽식). 앞에 쓰면 브라질식 */
  var CLITIC_PT = { me: 1, te: 1, se: 1, lhe: 1, nos: 1, vos: 1, lhes: 1, o: 1, a: 1, os: 1, as: 1 };
  /* 문장 맨 앞의 주어 (빼거나 넣어도 정답) */
  var PRON_PT = { eu: 1, tu: 1, ele: 1, ela: 1, "nós": 1, "você": 1, "vocês": 1, eles: 1, elas: 1 };
  var SUBST_PT = { "sou>estou": "지금의 상태·기분·있는 곳은 estar(estou)를 써요.", "estou>sou": "이름·국적·직업처럼 그 사람이 무엇인지는 ser(sou)를 써요.",
    "é>está": "지금의 상태·있는 곳은 estar(está)를 써요.", "está>é": "그것이 무엇인지·어떤지는 ser(é)를 써요.",
    "um>uma": "여성 명사 앞에는 uma를 써요.", "uma>um": "남성 명사 앞에는 um을 써요.",
    "o>a": "여성 명사 앞에는 a를 써요.", "a>o": "남성 명사 앞에는 o를 써요.", "os>as": "여성 명사 앞에는 as를 써요.", "as>os": "남성 명사 앞에는 os를 써요." };

  function normalizePt(s) {
    var t = String(s).replace(/[’‘`´]/g, "'").replace(/[“”«»]/g, '"').toLowerCase();
    if (t.normalize) t = t.normalize("NFC");   /* 조합형 악센트(a + ´)를 한 글자로 */
    t = t.replace(/[^a-z0-9à-öø-ÿ'\- ]+/g, " ").replace(/\s+/g, " ").trim();
    var out = [];
    (t ? t.split(" ") : []).forEach(function (w) { w = w.replace(/^['-]+|['-]+$/g, ""); if (w) out.push(w); });
    return { toks: out, notes: [] };
  }

  function same(x, y) { return x.join(" ") === y.join(" "); }
  function ruleReasonPt(u, a) {
    var i, t;
    /* 대명사를 동사 앞에 씀 (me chamo ← chamo-me) */
    for (i = 0; i < a.length; i++) {
      var p = a[i].split("-");
      if (p.length === 2 && CLITIC_PT[p[1]] && same(u, a.slice(0, i).concat([p[1], p[0]], a.slice(i + 1))))
        return "유럽 포르투갈어에서는 " + p[1] + "를 동사 뒤에 붙여 " + a[i] + "로 써요. (" + p[1] + " " + p[0] + "는 브라질식)";
    }
    /* 축약을 풀어 씀 (de o ← do) */
    if (u.length === a.length + 1) for (i = 0; i < u.length - 1; i++) {
      var c = CONTRACT_PT[u[i] + " " + u[i + 1]];
      if (c && same(u.slice(0, i).concat([c], u.slice(i + 2)), a)) return u[i] + " + " + u[i + 1] + "는 " + c + "로 줄여 써요.";
    }
    if (u.length === a.length) {
      var diff = [];
      for (i = 0; i < u.length; i++) if (u[i] !== a[i]) diff.push(i);
      if (diff.length === 1 && SUBST_PT[u[diff[0]] + ">" + a[diff[0]]]) return SUBST_PT[u[diff[0]] + ">" + a[diff[0]]];
    }
    if (u.length === a.length + 1) for (i = 0; i < u.length; i++) {
      t = u.slice(0, i).concat(u.slice(i + 1));
      if (same(t, a)) return "‘" + u[i] + "’는 빼야 해요.";
    }
    if (u.length + 1 === a.length) for (i = 0; i < a.length; i++) {
      t = a.slice(0, i).concat(a.slice(i + 1));
      if (same(t, u)) return "빠진 단어가 하나 있어요.";
    }
    return "";
  }

  /* 악센트·하이픈만 다른지. 악센트로 다른 말이 되면 오답 이유, 아니면 작은 실수 notes. 해당 없으면 null */
  function accentCheckPt(u, a, coreToks, blank) {
    var us = splitH(u), as = splitH(a), j;
    if (us.length !== as.length || us.map(fold).join(" ") !== as.map(fold).join(" ")) return null;
    var notes = [];
    for (j = 0; j < us.length; j++) {
      if (us[j] === as[j]) continue;
      if (DICT_PT[us[j]] || ACCENT_PT[as[j]]) return { reason: ACCENT_PT[as[j]] || "‘" + us[j] + "’와 ‘" + as[j] + "’는 악센트 하나로 다른 말이에요." };
      notes.push({ from: us[j], to: as[j], kind: "accent", core: !blank && coreToks.indexOf(as[j]) >= 0 });
    }
    a.forEach(function (w) { if (w.indexOf("-") > 0 && u.indexOf(w) < 0) notes.push({ from: w.replace(/-/g, " "), to: w, kind: "hyphen" }); });
    return { notes: notes };
  }

  /* 한 단어를 고치면 맞는 경우의 이유 */
  var SUBST = { "has>have": "has는 he, she처럼 다른 한 사람이 주어일 때 써요. I 뒤에는 have예요.", "a>an": "모음 소리로 시작하는 단어 앞에는 an을 써요.",
    "an>a": "자음 소리로 시작하는 단어 앞에는 a를 써요.", "having>have": "‘가지고 있다’를 말할 때는 have 그대로 써요.", "the>a": "처음 말하는 물건 하나에는 the가 아니라 a를 써요." };

  /* 소문자 토큰 배열로. 축약형은 풀고, 아포스트로피 빠진 축약형은 notes에 남긴다 */
  function normalize(s) {
    if (isPt()) return normalizePt(s);
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

  /* 편집 거리 (이웃 글자 자리 바꿈 포함) */
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      /* 이웃한 두 글자가 바뀐 것(cna → can)도 오타 한 번으로 센다 */
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
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
    if (isPt()) return ruleReasonPt(u, a);
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
        if (/^(am|is|are)$/.test(u[i]) && a.indexOf("have") >= 0) return "have 앞에는 am / is / are를 함께 쓰지 않아요.";
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

  /* 콘텐츠에 나오는 단어도 실제 단어로 등록한다 (정답·다른 표현·팁·예상 오답). 세션마다 한 번 */
  var learned = {};
  function learnWords(S) {
    if (!S) return;
    var lk = (EP.lang || "en") + S.no, D = dict();
    if (learned[lk]) return; learned[lk] = true;
    function add(s) { normalize(s).toks.forEach(function (w) { D[w] = 1; splitH([w]).forEach(function (x) { D[x] = 1; }); }); }
    S.items.forEach(function (it) {
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
    /* 포르투갈어 문장 문제: 주어는 빼도, (세션·문제에 pron이 있으면) 넣어도 정답 */
    if (isPt() && it.type !== "blank") {
      var S = EP.content.sessionOf(it), pron = it.pron !== undefined ? it.pron : S && S.pron;
      it.answers.forEach(function (a) {
        var w = a.split(" ");
        if (w.length > 1 && PRON_PT[normalize(w[0]).toks[0]]) push(w[1].charAt(0).toUpperCase() + w.slice(1).join(" ").slice(1), false);
        else if (pron) push(pron.charAt(0).toUpperCase() + pron.slice(1) + " " + a.charAt(0).toLowerCase() + a.slice(1), false);
      });
    }
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
    learnWords(EP.content.sessionOf(it));
    var N = normalize(input), u = N.toks, key = u.join(" ");
    var cands = candidates(it, target);
    var answers = cands.map(function (c) { return c.text; });
    var A = answers.map(function (a) { return normalize(a).toks; });
    var coreToks = normalize(EP.content.coreOf(it)).toks;
    var i, j;

    for (i = 0; i < A.length; i++) if (A[i].join(" ") === key) return { status: N.notes.length ? "minor" : "correct", notes: N.notes, answer: answers[i], alt: cands[i].alt };

    if (!target && it.wrong && it.wrong[key]) return { status: "wrong", reason: it.wrong[key], marks: markUser(u, A) };

    /* 포르투갈어: 악센트·하이픈만 다르면 작은 실수. 단, 악센트로 다른 말이 되면 오답 */
    if (isPt()) for (i = 0; i < A.length; i++) {
      var ac = accentCheckPt(u, A[i], coreToks, it.type === "blank");
      if (!ac) continue;
      if (ac.reason) return { status: "wrong", reason: ac.reason, marks: markUser(u, A) };
      return { status: "minor", notes: ac.notes, answer: answers[i], alt: cands[i].alt };
    }

    /* 오타 판정: 단어 수가 같고, 다른 단어가 실제 단어가 아니며 철자가 가까움 */
    var D = dict();
    for (i = 0; i < A.length; i++) {
      var a = A[i]; if (a.length !== u.length) continue;
      var notes = N.notes.slice(), ok = true;
      for (j = 0; j < a.length; j++) {
        if (u[j] === a[j]) continue;
        var lim = a[j].length <= 4 ? 1 : 2;
        if (!D[u[j]] && lev(u[j], a[j]) <= lim) notes.push({ from: u[j], to: a[j], kind: "typo", core: it.type !== "blank" && coreToks.indexOf(a[j]) >= 0 });
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
