/* 음성: 미리 만든 mp3(enpattern-audio 저장소, GitHub Pages)를 재생한다.
   파일이 없거나 불러오지 못하면 브라우저 내장 TTS(미국 영어)로 읽는다.
   포르투갈어는 mp3 없이 처음부터 브라우저 TTS(pt-PT)로 읽는다. 유럽 포르투갈어 목소리가 없으면 다른 포르투갈어 목소리로 읽힌다.
   파일 이름은 tools/voice/build-list.js의 voiceId와 같은 규칙이어야 한다. */
(function (EP) {
  "use strict";

  var A = EP.config.audio, st = EP.store.state, PT = EP.lang === "pt", LANG = EP.config.langs[PT ? "pt" : "en"].tts;
  var tts = "speechSynthesis" in window, ttsVoice = null;
  var audio = typeof window.Audio === "function" ? new Audio() : null;
  var turn = 0;   /* 새로 읽기 시작하거나 멈출 때마다 늘린다. 지난 재생의 콜백은 무시 */

  /* ---- 파일 이름 (build-list.js와 똑같이) ---- */
  function clean(t) { return String(t).replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim(); }
  function voiceId(t) {
    var h = 0x811c9dc5, s = clean(t);
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(36);
  }

  /* ---- 설정 (store에 저장, 이 기기만) ---- */
  function voice() {
    for (var i = 0; i < A.voices.length; i++) if (A.voices[i][0] === st.voice) return st.voice;
    return A.voices[0][0];
  }
  function slowRate() { return A.slowRates.indexOf(st.slowRate) >= 0 ? st.slowRate : A.slowRate; }

  /* ---- 브라우저 TTS (mp3가 없을 때) ---- */
  function pickVoice() {
    var all = speechSynthesis.getVoices();
    if (PT) {
      var pt = all.filter(function (v) { return /^pt/i.test(v.lang); });
      ttsVoice = pt.filter(function (v) { return /^pt[-_]PT/i.test(v.lang); })[0] || pt[0] || null;
      return;
    }
    var vs = all.filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    ttsVoice = vs.filter(function (v) { return /Samantha|Google US|Natural|Aria|Jenny/i.test(v.name); })[0] || vs[0] || null;
  }
  if (tts) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

  function ttsSpeak(text, slow, done) {
    if (!tts) { EP.view.toast("이 브라우저는 듣기를 지원하지 않아요"); done(); return; }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = LANG; u.rate = slow ? 0.5 : 0.95;
      if (ttsVoice) u.voice = ttsVoice;
      u.onend = done; u.onerror = done;
      speechSynthesis.speak(u);
    } catch (e) { done(); }
  }

  /* opt: { voice, rate } 저장된 설정 말고 다른 값으로 들을 때 (설정 화면 들어 보기) */
  function speak(text, slow, onend, opt) {
    opt = opt || {};
    stop();
    var my = turn, finished = false, fell = false;
    function done() { if (finished || my !== turn) return; finished = true; if (onend) onend(); }
    function fallback() { if (fell || finished || my !== turn) return; fell = true; ttsSpeak(text, slow, done); }
    if (!audio || PT) { fallback(); return; }
    var rate = slow ? (opt.rate || slowRate()) : 1;
    audio.onended = done;
    audio.onerror = fallback;
    audio.src = A.base + (opt.voice || voice()) + "/s/" + voiceId(text) + ".mp3";
    audio.defaultPlaybackRate = rate; audio.playbackRate = rate;
    audio.preservesPitch = audio.mozPreservesPitch = audio.webkitPreservesPitch = true;   /* 느리게 해도 목소리 높이는 그대로 */
    try { var p = audio.play(); if (p && p.catch) p.catch(fallback); } catch (e) { fallback(); }
  }
  function stop() {
    turn++;
    if (audio) { audio.onended = audio.onerror = null; try { audio.pause(); } catch (e) {} }
    try { if (tts) speechSynthesis.cancel(); } catch (e) {}
  }

  EP.speech = { speak: speak, stop: stop, voice: voice, slowRate: slowRate, voiceId: voiceId };
})(window.EP);
