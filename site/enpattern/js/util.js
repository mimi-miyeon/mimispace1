/* 공통 유틸 + 콘텐츠 도우미 */
(function (EP) {
  "use strict";

  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }

  /* 한국 시간 기준 오늘 날짜 (YYYY-MM-DD) */
  function today() { return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); }

  /* 문장에서 낱말(구) word가 나오는 자리. 앞뒤가 다른 글자에 붙어 있으면 건너뛴다. 없으면 -1
     정규식 \b는 악센트 글자(á, ç…)를 글자로 보지 않아서 직접 확인한다 */
  var LETTER = /[0-9A-Za-z_À-ɏ]/;
  function findWord(sentence, word) {
    var s = String(sentence).toLowerCase(), w = String(word).toLowerCase(), i = s.indexOf(w);
    while (w && i >= 0) {
      var a = s.charAt(i - 1), b = s.charAt(i + w.length);
      if (!(a && LETTER.test(a)) && !(b && LETTER.test(b))) return i;
      i = s.indexOf(w, i + 1);
    }
    return -1;
  }

  /* 문장에서 패턴 핵심 부분을 <span class="core">로 감싼다 */
  function withCore(sentence, core) {
    var i = findWord(sentence, core);
    if (i < 0) return esc(sentence);
    return esc(sentence.slice(0, i)) + '<span class="core">' + esc(sentence.slice(i, i + core.length)) + "</span>" + esc(sentence.slice(i + core.length));
  }

  /* "I have ~." → ~ 자리에 노란 슬롯 */
  function slotted(form) { return esc(form).replace("~", '<span class="slot">~</span>'); }

  EP.util = { esc: esc, today: today, withCore: withCore, slotted: slotted, findWord: findWord };

  /* ---- 콘텐츠 도우미 ----
     세션 데이터는 js/data/pattern{번호}.js (포르투갈어는 js/data-pt/). 필요할 때 load(번호)로 불러온다.
     문장 필드 이름은 언어와 상관없이 en이다 (예문 en, 팁 tip.en: 배우는 언어의 문장).
     문제의 전체 키는 "세션번호-문제id" (예: "2-b1"). 틀린 문제 기록도 이 키를 쓴다. */
  function prepare(S) {
    if (S && !S._ready) {
      S._ready = true;
      S.items.forEach(function (it) { it._s = S; it._key = S.no + "-" + it.id; });
    }
    return S;
  }
  function session(n) { return EP.sessions && EP.sessions[n] ? prepare(EP.sessions[n]) : null; }

  function dataDir() { return EP.config.langs[EP.lang === "pt" ? "pt" : "en"].data; }

  /* 포르투갈어면 세션 목록(js/data-pt/catalog.js)을 불러와 EP.catalog를 바꾼다. 영어 목록은 index.html에서 처음부터 읽는다 → Promise */
  function loadCatalog() {
    if (EP.lang !== "pt") return Promise.resolve();
    return new Promise(function (res, rej) {
      var el = document.createElement("script");
      el.src = dataDir() + "catalog.js?v=" + EP.config.version;
      el.onload = res;
      el.onerror = function () { el.remove(); rej(new Error("세션 목록 불러오기 실패")); };
      document.head.appendChild(el);
    });
  }

  var loading = {};
  /* 세션 파일 하나 불러오기 → Promise(세션) */
  function load(n) {
    if (session(n)) return Promise.resolve(session(n));
    if (!loading[n]) loading[n] = new Promise(function (res, rej) {
      var el = document.createElement("script");
      el.src = dataDir() + "pattern" + n + ".js?v=" + EP.config.version;
      el.onload = function () { if (session(n)) res(session(n)); else { delete loading[n]; rej(new Error("세션 " + n + " 없음")); } };
      el.onerror = function () { delete loading[n]; el.remove(); rej(new Error("세션 " + n + " 불러오기 실패")); };
      document.head.appendChild(el);
    });
    return loading[n];
  }
  /* 여러 세션 불러오기. 실패한 세션은 건너뛴다 → Promise */
  function loadMany(nums) {
    var seen = {}, list = [];
    nums.forEach(function (n) { n = +n; if (n > 0 && !seen[n]) { seen[n] = 1; list.push(n); } });
    return Promise.all(list.map(function (n) { return load(n).catch(function () { return null; }); }));
  }

  function sessionOfKey(key) { return +String(key).split("-")[0]; }
  /* "2-b1" → 문제. 아직 안 불러왔거나 없는 문제면 null */
  function item(key) {
    var p = String(key).split("-"), S = session(+p[0]);
    if (!S) return null;
    for (var i = 0; i < S.items.length; i++) if (S.items[i].id === p[1]) return S.items[i];
    return null;
  }
  /* 빈칸 뒤 문장. 문장부호 하나뿐이면 띄우지 않는다 */
  function tail(after) { return /^[.?!]$/.test(after) ? after : " " + after; }
  /* ans: 빈칸에 넣을 답 (맞힌 답). 없으면 대표 정답 */
  function fullAnswer(it, ans) {
    if (it.type !== "blank") return it.answers[0];
    return (it.before ? it.before + " " : "") + (ans || it.answers[0]) + tail(it.after);
  }
  function sessionOf(it) { return it._s || (EP.data && EP.data.session); }
  /* 핵심 부분. 형태가 둘 이상인 패턴은 stem을 /로 나눠 적는다 ("Can I/Can you").
     문장마다 그 문장에 들어 있는 형태를 고른다 */
  function stemFor(S, sentence) {
    var forms = S.stem.split("/");
    for (var i = 0; i < forms.length; i++) {
      if (findWord(sentence, forms[i].trim()) >= 0) return forms[i].trim();
    }
    return forms[0].trim();
  }
  function coreOf(it) { return it.type === "blank" ? it.answers[0] : stemFor(sessionOf(it), it.answers[0]); }
  /* 예문 + 모든 문제의 정답 문장 */
  function sessionSentences(S) {
    var out = S.intro.examples.slice();
    S.items.forEach(function (it) { out.push({ en: fullAnswer(it), ko: it.ko }); });
    return out;
  }

  EP.content = {
    prepare: prepare, session: session, load: load, loadMany: loadMany, loadCatalog: loadCatalog,
    item: item, stemFor: stemFor, sessionOfKey: sessionOfKey, sessionOf: sessionOf,
    fullAnswer: fullAnswer, tail: tail, coreOf: coreOf, sessionSentences: sessionSentences
  };
})(window.EP);
