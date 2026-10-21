/* 공통 유틸 + 콘텐츠 도우미 */
(function (EP) {
  "use strict";

  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }
  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  /* 한국 시간 기준 오늘 날짜 (YYYY-MM-DD) */
  function today() { return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); }

  /* 문장에서 패턴 핵심 부분을 <span class="core">로 감싼다 */
  function withCore(sentence, core) {
    var m = new RegExp("\\b" + escapeRe(core) + "\\b", "i").exec(sentence);
    if (!m) return esc(sentence);
    var i = m.index;
    return esc(sentence.slice(0, i)) + '<span class="core">' + esc(sentence.slice(i, i + core.length)) + "</span>" + esc(sentence.slice(i + core.length));
  }

  /* "I have ~." → ~ 자리에 노란 슬롯 */
  function slotted(form) { return esc(form).replace("~", '<span class="slot">~</span>'); }

  EP.util = { esc: esc, today: today, withCore: withCore, slotted: slotted };

  /* ---- 콘텐츠 도우미 ---- */
  function S() { return EP.data.session; }
  function itemById(id) {
    var items = S().items;
    for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i];
    return null;
  }
  function fullAnswer(it) {
    if (it.type !== "blank") return it.answers[0];
    return it.before + " " + it.answers[0] + (it.after === "." ? "." : " " + it.after);
  }
  function coreOf(it) { return it.type === "blank" ? it.answers[0] : S().stem; }
  /* 예문 + 모든 문제의 정답 문장 */
  function sessionSentences() {
    var out = S().intro.examples.slice();
    S().items.forEach(function (it) { out.push({ en: fullAnswer(it), ko: it.ko }); });
    return out;
  }

  EP.content = { itemById: itemById, fullAnswer: fullAnswer, coreOf: coreOf, sessionSentences: sessionSentences };
})(window.EP);
