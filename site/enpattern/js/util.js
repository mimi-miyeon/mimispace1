/* 공통 유틸 + 콘텐츠 도우미 */
(function (EP) {
  "use strict";

  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }

  /* 한국 시간 기준 오늘 날짜 (YYYY-MM-DD) */
  function today() { return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); }

  /* 단어 단위로 찾기: 앞뒤가 글자가 아닌 곳. (\b는 악센트 글자를 글자로 보지 않아 Há, está에서 틀린다) */
  var LETTER = /[0-9A-Za-zÀ-ÖØ-öø-ÿ]/;
  function findWord(sentence, word) {
    var s = String(sentence).toLowerCase(), w = String(word).toLowerCase(), i = s.indexOf(w);
    while (i >= 0) {
      if (!(i > 0 && LETTER.test(s[i - 1])) && !LETTER.test(s[i + w.length] || "")) return i;
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
     세션 데이터는 <언어 폴더>/pattern{번호}.js (영어 js/data, 포르투갈어 js/data-pt). 필요할 때 load(번호)로 불러온다.
     세션 파일의 en은 '배우는 언어의 문장'이다 (포르투갈어 세션에서도 en).
     문제의 전체 키는 "세션번호-문제id" (예: "2-b1"). 틀린 문제 기록도 이 키를 쓴다. */
  function prepare(S) {
    if (S && !S._ready) {
      S._ready = true;
      S.items.forEach(function (it) { it._s = S; it._key = S.no + "-" + it.id; });
    }
    return S;
  }
  function session(n) { return EP.sessions && EP.sessions[n] ? prepare(EP.sessions[n]) : null; }

  /* 스크립트 파일 하나 불러오기 → Promise */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var el = document.createElement("script");
      el.src = src + "?v=" + EP.config.version;
      el.onload = function () { res(); };
      el.onerror = function () { el.remove(); rej(new Error(src + " 불러오기 실패")); };
      document.head.appendChild(el);
    });
  }
  function dir() { return (EP.L || EP.config.langs.en).dir; }

  var loading = {};
  /* 세션 파일 하나 불러오기 → Promise(세션) */
  function load(n) {
    if (session(n)) return Promise.resolve(session(n));
    if (!loading[n]) loading[n] = loadScript(dir() + "/pattern" + n + ".js").then(function () {
      if (session(n)) return session(n);
      delete loading[n]; throw new Error("세션 " + n + " 없음");
    }, function (e) { delete loading[n]; throw e; });
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
  function fullAnswer(it) {
    if (it.type !== "blank") return it.answers[0];
    return (it.before ? it.before + " " : "") + it.answers[0] + tail(it.after);
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
    prepare: prepare, session: session, load: load, loadMany: loadMany, loadScript: loadScript,
    item: item, stemFor: stemFor, sessionOfKey: sessionOfKey, sessionOf: sessionOf,
    fullAnswer: fullAnswer, tail: tail, coreOf: coreOf, sessionSentences: sessionSentences
  };
})(window.EP);
