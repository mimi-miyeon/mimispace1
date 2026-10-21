/* 따라 말하기: 문장을 듣고 → 따라 말할 시간을 준 뒤 다음 문장으로 */
(function (EP) {
  "use strict";

  var esc = EP.util.esc, speech = EP.speech;

  function start(list) {
    var f = document.createElement("div"), i = 0, stopped = false, timer = null;
    f.className = "follow";
    EP.view.$app.appendChild(f);

    function draw(phase) {
      f.innerHTML = '<div class="count">' + (i + 1) + " / " + list.length + "</div>" +
        '<div class="mid"><div class="en">' + esc(list[i].en) + '</div><div class="ko">' + esc(list[i].ko) + '</div><div class="phase">' + phase + "</div></div>" +
        EP.ui.listen("data-f", ["다시 듣기", "느리게"]) +
        EP.ui.key("그만하기", "fStop", { variant: "dark" });
      f.querySelector("#fStop").onclick = end;
      f.querySelector('[data-f="n"]').onclick = function () { play(false); };
      f.querySelector('[data-f="s"]').onclick = function () { play(true); };
    }
    /* 따라 말할 시간은 단어 수에 비례 */
    function play(slow) {
      clearTimeout(timer); draw("듣기");
      var words = list[i].en.split(" ").length;
      speech.speak(list[i].en, slow, function () {
        if (stopped) return;
        draw("따라 말해 보세요");
        timer = setTimeout(function () {
          if (stopped) return;
          i++;
          if (i >= list.length) end(); else play(false);
        }, 1200 + words * (slow ? 700 : 450));
      });
    }
    function end() { stopped = true; clearTimeout(timer); speech.stop(); f.remove(); }

    draw(""); play(false);
  }

  EP.follow = { start: start };
})(window.EP);
