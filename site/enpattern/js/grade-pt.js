/* 채점 (유럽 포르투갈어). 흐름은 grade.js와 같고 포르투갈어 규칙을 더한다 (PT-PLAN.md "채점 규칙")
   1. 정답과 같으면 정답. 주어 eu·nós·tu는 빼도 되고, 세션(또는 문제)에 subject가 있으면 그 주어를 넣어도 된다
   2. 적어 둔 예상 오답이면 그 이유
   3. 악센트·하이픈만 다르거나 오타면 작은 실수. 단, 악센트로 뜻이 달라지는 말(é/e, está/esta …)은 오답
   4. 축약을 풀어 씀(de o), 대명사를 동사 앞에 둠(me sento), 브라질식 -ndo 진행형은 오답 + 이유
   5. 단어 하나를 바꾸거나 빼거나 넣으면 맞는 경우의 이유
   EP.lang이 "pt"일 때 EP.grade가 이 채점기를 부른다. */
(function (EP) {
  "use strict";

  var L = EP.grade.lib;

  /* ---- 글자 ---- */
  var BARE = { "á": "a", "à": "a", "â": "a", "ã": "a", "é": "e", "ê": "e", "í": "i", "ó": "o", "ô": "o", "õ": "o", "ú": "u", "ü": "u", "ç": "c" };
  /* 악센트를 뺀 글자 */
  function bare(w) { return w.replace(/[áàâãéêíóôõúüç]/g, function (c) { return BARE[c]; }); }

  /* 악센트 하나로 뜻이 달라지는 말. 고친 말과 정답이 둘 다 여기 있으면 작은 실수가 아니라 오답 */
  var MEAN = {};
  "e é esta está estas estás a à as às da dá de dê tem têm vem vêm nos nós vos vós por pôr pais país pode pôde se sé mas más avó avô"
    .split(" ").forEach(function (w) { MEAN[w] = 1; });
  /* "쓴 말>정답" → 이유. 없으면 공통 설명 */
  var MEAN_WHY = {
    "e>é": "é(~이다)와 e(그리고)는 다른 말이에요. 악센트를 꼭 써요.",
    "esta>está": "está(~에 있다, ~한 상태다)와 esta(이것)는 다른 말이에요. 악센트를 꼭 써요.",
    "estas>estás": "estás(너는 ~하다)와 estas(이것들)는 다른 말이에요. 악센트를 꼭 써요.",
    "a>à": "à는 a + a(관사)가 합쳐진 말이에요. 악센트를 꼭 써요.",
    "à>a": "여기서는 악센트 없는 a예요. à는 a + a(관사)가 합쳐진 말이에요.",
    "tem>têm": "주어가 여럿이면 têm이에요. tem은 하나일 때예요.",
    "nos>nós": "주어 ‘우리는’은 nós예요. nos는 ‘우리를’이에요."
  };
  function meanWhy(x, y) { return MEAN_WHY[x + ">" + y] || "‘" + y + "’, ‘" + x + "’: 악센트 하나로 뜻이 달라지는 말이에요."; }

  /* 포르투갈어 낱말 뒤에 붙는 한국어 조사 (끝 글자가 모음인지로 고른다): tem은, sou는, num으로, do로 */
  function vowelEnd(w) { return /[aeiouáàâãéêíóôõú]$/.test(w); }
  function eun(w) { return w + (vowelEnd(w) ? "는" : "은"); }
  function reul(w) { return w + (vowelEnd(w) ? "를" : "을"); }
  function ro(w) { return w + (vowelEnd(w) || /l$/.test(w) ? "로" : "으로"); }

  /* 소문자 낱말 배열로. 악센트와 하이픈(sentar-me)은 그대로 둔다 */
  function normalize(s) {
    var t = String(s).replace(/[’‘`´]/g, "'").toLowerCase().replace(/[^a-z0-9à-ÿ'\- ]+/g, " "), toks = [];
    t.split(/\s+/).forEach(function (w) {
      w = w.replace(/^['-]+|['-]+$/g, "").replace(/-+/g, "-");
      if (w) toks.push(w);
    });
    return { toks: toks, notes: [] };
  }
  /* 하이픈으로도 나눈 낱말 (sentar-me → sentar, me) */
  function split(toks) { var out = []; toks.forEach(function (w) { w.split("-").forEach(function (x) { out.push(x); }); }); return out; }

  /* ---- 실제 낱말: 여기 있는 낱말은 오타로 보지 않는다 ---- */
  var DICT = {};
  ("a o as os um uma uns umas de do da dos das em no na nos nas num numa ao aos à às pelo pela por para com sem e ou mas que se não sim " +
   "eu tu ele ela nós vós eles elas você vocês me te lhe lhes vos meu minha teu tua seu sua este esta isto esse essa isso aquele aquela aquilo " +
   "aqui ali lá cá é são sou és somos está estão estou estás estamos ser estar ter tenho tem tens temos têm há haver vou vai vais vamos vão ir " +
   "quero quer queres queria posso pode podes gosto gosta gostas muito muita pouco bem mal hoje amanhã ontem agora já ainda também").split(" ")
    .forEach(function (w) { if (w) DICT[w] = 1; });
  /* 콘텐츠에 나오는 낱말도 등록한다 (정답·다른 표현·팁·예상 오답). 세션마다 한 번 */
  var learned = {};
  function learnWords(S) {
    if (!S || learned[S.no]) return; learned[S.no] = true;
    function add(s) { var t = normalize(s).toks; t.concat(split(t)).forEach(function (w) { DICT[w] = 1; }); }
    S.items.forEach(function (it) {
      (it.answers || []).concat(it.alts || []).forEach(add);
      if (it.tip) add(it.tip.en);
      for (var k in (it.wrong || {})) add(k);
    });
  }

  /* ---- 주어 ---- */
  var SUBJ = { eu: 1, "nós": 1, tu: 1 };
  /* 정답 하나로 인정하는 모양들: 그대로, 주어를 뺀 것, 주어를 넣은 것(패턴 동사 앞에, não가 있으면 그 앞에) */
  function variants(it, toks) {
    var out = [toks];
    if (it.type === "blank" || !toks.length) return out;
    if (SUBJ[toks[0]]) { out.push(toks.slice(1)); return out; }
    var S = EP.content.sessionOf(it), sj = it.subject !== undefined ? it.subject : S && S.subject;
    if (!sj) return out;
    var verb = normalize(EP.content.stemFor(S, toks.join(" "))).toks[0], k = toks.indexOf(verb);
    if (k < 0) return out;
    if (k > 0 && toks[k - 1] === "não") k--;
    out.push(toks.slice(0, k).concat([sj], toks.slice(k)));
    return out;
  }

  /* ---- 작은 실수: 악센트, 하이픈, 오타 ----
     같으면 { notes }, 뜻이 달라지는 악센트면 { why }, 아니면 null. core: 패턴 핵심 낱말 */
  function loose(u, a, core) {
    var us = split(u), as = split(a), notes = [], j;
    if (us.length !== as.length) return null;
    for (j = 0; j < as.length; j++) {
      var x = us[j], y = as[j];
      if (x === y) continue;
      if (bare(x) === bare(y)) {
        if (MEAN[x] && MEAN[y]) return { why: meanWhy(x, y) };
        notes.push({ from: x, to: y, kind: "accent", core: !!core[y] });
        continue;
      }
      if (!DICT[x] && L.lev(bare(x), bare(y)) <= (y.length <= 4 ? 1 : 2)) { notes.push({ from: x, to: y, kind: "typo", core: !!core[y] }); continue; }
      return null;
    }
    /* 하이픈만 빠졌거나(sentar me) 잘못 붙였거나 */
    var ub = u.map(bare), ab = a.map(bare);
    a.forEach(function (t) { if (t.indexOf("-") > 0 && ub.indexOf(bare(t)) < 0) notes.push({ from: t.replace(/-/g, " "), to: t, kind: "hyphen", core: !!core[t.split("-")[0]] }); });
    u.forEach(function (t) { if (t.indexOf("-") > 0 && ab.indexOf(bare(t)) < 0) notes.push({ from: t, to: t.replace(/-/g, " "), kind: "hyphen" }); });
    return { notes: notes };
  }
  function same(u, a) { return u.join(" ") === a.join(" ") || !!(loose(u, a, {}) || {}).notes; }

  /* ---- 포르투갈어에서 자주 틀리는 모양 ---- */
  var CONTR = {
    "de o": "do", "de a": "da", "de os": "dos", "de as": "das", "em o": "no", "em a": "na", "em os": "nos", "em as": "nas",
    "a o": "ao", "a os": "aos", "a a": "à", "a as": "às", "por o": "pelo", "por a": "pela", "por os": "pelos", "por as": "pelas",
    "de este": "deste", "de esta": "desta", "de estes": "destes", "de estas": "destas", "de isto": "disto", "de isso": "disso",
    "de aqui": "daqui", "de ele": "dele", "de ela": "dela", "em este": "neste", "em esta": "nesta", "em isto": "nisto", "em isso": "nisso",
    "em um": "num", "em uma": "numa"
  };
  /* 축약을 풀어 쓴 경우 (de o → do) */
  function contraction(u, a) {
    var out = [], used = [], i;
    for (i = 0; i < u.length; i++) {
      var pair = u[i] + " " + u[i + 1];
      if (i + 1 < u.length && CONTR[pair]) { out.push(CONTR[pair]); used.push(pair); i++; } else out.push(u[i]);
    }
    if (!used.length || !same(out, a)) return "";
    return used.map(function (p) { return eun(p.replace(" ", " + ")) + " " + ro(CONTR[p]) + " 줄여 써요."; }).join(" ");
  }
  /* 대명사를 동사 앞에 쓴 경우 (me sento → sento-me). 포르투갈에서는 보통 동사 뒤에 하이픈으로 붙인다 */
  var PRON = { me: 1, te: 1, se: 1, lhe: 1, lhes: 1, nos: 1, vos: 1, o: 1, a: 1, os: 1, as: 1 };
  function proclisis(u, a) {
    for (var i = 0; i < a.length; i++) {
      var p = a[i].split("-");
      if (p.length !== 2 || !PRON[p[1]]) continue;
      for (var k = 0; k + 1 < u.length; k++) {
        if (u[k] !== p[1] || bare(u[k + 1]) !== bare(p[0])) continue;
        if (same(u.slice(0, k).concat([a[i]], u.slice(k + 2)), a)) return "포르투갈에서는 " + reul(p[1]) + " 동사 뒤에 하이픈으로 붙여요: " + a[i] + ". 앞에 쓰는 건 브라질식이에요.";
      }
    }
    return "";
  }
  /* 브라질식 진행형 (estou fazendo → estou a fazer) */
  var INF = { ando: "ar", endo: "er", indo: "ir" };
  function gerund(u, a) {
    for (var k = 0; k < u.length; k++) {
      var m = /^(.*)(ando|endo|indo)$/.exec(u[k]);
      if (!m) continue;
      var inf = m[1] + INF[m[2]];
      if (same(u.slice(0, k).concat(["a", inf], u.slice(k + 1)), a)) return u[k] + "(-ndo)는 브라질식이에요. 포르투갈에서는 a + 동사원형으로 말해요: a " + inf + ".";
    }
    return "";
  }

  /* ---- 단어 하나 바꾸기/빼기/넣기로 맞는 경우의 설명 ---- */
  var SUBST = {
    "a>há": "há(있다)는 h와 악센트까지 써야 해요. a는 다른 말이에요.",
    "tem>há": "포르투갈에서는 ‘~이 있다’를 há로 말해요. tem은 ‘가지고 있다’예요.",
    "sou>estou": "지금의 상태나 있는 곳은 ser(sou)가 아니라 estar(estou)로 말해요.",
    "estou>sou": "이름·국적·직업처럼 잘 바뀌지 않는 것은 estar가 아니라 ser(sou)로 말해요.",
    "é>está": "지금의 상태나 있는 곳은 é가 아니라 está로 말해요.",
    "está>é": "잘 바뀌지 않는 성질은 está가 아니라 é로 말해요.",
    "um>uma": "여성 명사 앞에는 uma를 써요.", "uma>um": "남성 명사 앞에는 um을 써요.",
    "dois>duas": "여성 명사 앞에는 duas를 써요.", "duas>dois": "남성 명사 앞에는 dois를 써요.",
    "do>da": "여성 명사 앞이라 de + a = da예요.", "da>do": "남성 명사 앞이라 de + o = do예요.",
    "no>na": "여성 명사 앞이라 em + a = na예요.", "na>no": "남성 명사 앞이라 em + o = no예요.",
    "ao>à": "여성 명사 앞이라 a + a = à예요.", "à>ao": "남성 명사 앞이라 a + o = ao예요."
  };
  /* ‘나’ 형태 대신 ‘그/그녀’ 형태를 쓴 경우 */
  [["é", "sou"], ["está", "estou"], ["esta", "estou"], ["tem", "tenho"], ["quer", "quero"], ["pode", "posso"], ["vai", "vou"], ["gosta", "gosto"]].forEach(function (p) {
    SUBST[p[0] + ">" + p[1]] = SUBST[p[0] + ">" + p[1]] || "‘나는’은 " + p[1] + "예요. " + (p[0] === "esta" ? "esta(악센트 없음)는 ‘이것’이에요." : eun(p[0]) + " ‘그/그녀는’이에요.");
  });
  var ESTAR = { estou: 1, "está": 1, "estás": 1, estamos: 1, "estão": 1 };
  function ruleReason(u, a) {
    var i, t;
    if (u.length === a.length) {
      var diff = [];
      for (i = 0; i < u.length; i++) if (u[i] !== a[i]) diff.push(i);
      if (diff.length === 1 && SUBST[u[diff[0]] + ">" + a[diff[0]]]) return SUBST[u[diff[0]] + ">" + a[diff[0]]];
      /* 이웃한 두 낱말 자리만 바뀜: quero não → não quero (악센트는 보지 않는다) */
      var ub = u.map(bare), ab = a.map(bare), d = [];
      for (i = 0; i < ub.length; i++) if (ub[i] !== ab[i]) d.push(i);
      if (d.length === 2 && d[1] === d[0] + 1 && ub[d[0]] === ab[d[1]] && ub[d[1]] === ab[d[0]] && ab[d[0]] === "nao") return "não는 동사 앞에 써요.";
    }
    if (u.length === a.length + 1) {
      for (i = 0; i < u.length; i++) {
        t = u.slice(0, i).concat(u.slice(i + 1));
        if (t.join(" ") === a.join(" ")) return "‘" + u[i] + "’" + (vowelEnd(u[i]) ? "는" : "은") + " 빼야 해요.";
      }
    }
    if (u.length + 1 === a.length) {
      for (i = 0; i < a.length; i++) {
        t = a.slice(0, i).concat(a.slice(i + 1));
        if (t.join(" ") !== u.join(" ")) continue;
        if (a[i] === "a" && i > 0 && ESTAR[a[i - 1]]) return "진행형은 estar와 동사원형 사이에 a가 필요해요.";
        if (a[i] === "de") return "여기에는 de가 꼭 필요해요.";
        if (a[i] === "não") return "‘~하지 않아요’는 동사 앞에 não가 필요해요.";
        return "빠진 단어가 하나 있어요.";
      }
    }
    return "";
  }

  /* 결과는 grade.js와 같은 모양: status correct | minor | wrong, notes, answer, alt, reason, marks */
  function grade(input, it, target) {
    learnWords(EP.content.sessionOf(it));
    var u = normalize(input).toks, key = u.join(" "), i, r;
    var V = [];   /* { toks, c }: 정답 모양마다 */
    EP.grade.candidates(it, target).forEach(function (c) {
      var t = normalize(c.text).toks;
      (target ? [t] : variants(it, t)).forEach(function (v) { V.push({ toks: v, c: c }); });
    });
    var core = {};
    if (it.type !== "blank") split(normalize(EP.content.coreOf(it)).toks).forEach(function (w) { core[w] = 1; });
    function wrong(reason) { return { status: "wrong", reason: reason, marks: L.markUser(u, V.map(function (v) { return v.toks; })) }; }

    for (i = 0; i < V.length; i++) if (V[i].toks.join(" ") === key) return { status: "correct", notes: [], answer: V[i].c.text, alt: V[i].c.alt };
    if (!target && it.wrong && it.wrong[key]) return wrong(it.wrong[key]);

    /* 작은 실수로 맞는 정답이 여럿이면 가장 가까운 것 (오타는 악센트·하이픈보다 멀다): timida → tímida (tímido 아님) */
    var why = "", best = null, bestCost = 0;
    for (i = 0; i < V.length; i++) {
      r = loose(u, V[i].toks, core);
      if (r && r.notes) {
        var cost = r.notes.reduce(function (n, x) { return n + (x.kind === "typo" ? 2 : 1); }, 0);
        if (!best || cost < bestCost) { best = { r: r, v: V[i] }; bestCost = cost; }
      }
      if (r && r.why && !why) why = r.why;
    }
    if (best) return { status: best.r.notes.length ? "minor" : "correct", notes: best.r.notes, answer: best.v.c.text, alt: best.v.c.alt };
    if (why) return wrong(why);

    for (i = 0; i < V.length && !why; i++) why = contraction(u, V[i].toks) || proclisis(u, V[i].toks) || gerund(u, V[i].toks);
    for (i = 0; i < V.length && !why; i++) why = ruleReason(u, V[i].toks);
    return wrong(why);
  }

  EP.gradePt = grade;
  EP.gradePt.normalize = normalize;
})(window.EP);
