/* 음성 (브라우저 내장 TTS, 미국 영어) */
(function (EP) {
  "use strict";

  var supported = "speechSynthesis" in window, voice = null;

  function pickVoice() {
    var vs = speechSynthesis.getVoices().filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    voice = vs.filter(function (v) { return /Samantha|Google US|Natural|Aria|Jenny/i.test(v.name); })[0] || vs[0] || null;
  }
  if (supported) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

  function speak(text, slow, onend) {
    if (!supported) { EP.view.toast("이 브라우저는 듣기를 지원하지 않아요"); if (onend) onend(); return; }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US"; u.rate = slow ? 0.5 : 0.95;
      if (voice) u.voice = voice;
      if (onend) { u.onend = onend; u.onerror = onend; }
      speechSynthesis.speak(u);
    } catch (e) { if (onend) onend(); }
  }
  function stop() { try { if (supported) speechSynthesis.cancel(); } catch (e) {} }

  EP.speech = { speak: speak, stop: stop };
})(window.EP);
