/* 캐릭터 SVG: 몸통(body) + 아래 두께(lip) + 표정(face)
   여기에는 모양(좌표)만 있다. 색은 CSS 클래스(.ch-body, .ch-lip, .ch-ink, .ch-line, .ch-eye)로 칠하고,
   실제 색은 scss/_tokens.scss 의 --char-{종류}-* 에서 정한다. */
(function (EP) {
  "use strict";

  /* eyes: 눈 중심 좌표, r: 흰자 반지름, p: 눈동자 반지름, mouth: [왼쪽 x, 오른쪽 x, y] */
  var SHAPES = {
    keycap: { vb: "0 0 120 120", eyes: [[36, 44], [84, 44]], r: 18, p: 13.5, mouth: [45, 75, 68],
      body: '<rect class="ch-body" x="0" y="0" width="120" height="110" rx="24"/>',
      lip: '<rect class="ch-lip" x="0" y="10" width="120" height="110" rx="24"/>' },
    a: { vb: "0 0 114 110", eyes: [[28, 40], [72, 40]], r: 16, p: 12, mouth: [36, 64, 61],
      body: '<circle class="ch-body" cx="50" cy="50" r="50"/><rect class="ch-body" x="86" y="0" width="28" height="100" rx="14"/>',
      lip: '<circle class="ch-lip" cx="50" cy="59" r="50"/><rect class="ch-lip" x="86" y="9" width="28" height="100" rx="14"/>' },
    capsule: { vb: "0 0 144 84", eyes: [[49, 30], [95, 30]], r: 16, p: 12, mouth: [59, 85, 51],
      body: '<path class="ch-body" d="M72 0 H107 A37 37 0 0 1 107 74 H72 Z"/><path class="ch-body2" d="M72 0 H37 A37 37 0 0 0 37 74 H72 Z"/>',
      lip: '<path class="ch-lip" d="M72 9 H107 A37 37 0 0 1 107 83 H72 Z"/><path class="ch-lip2" d="M72 9 H37 A37 37 0 0 0 37 83 H72 Z"/>' },
    fan: { vb: "0 0 100 110", eyes: [[31, 60], [71, 60]], r: 16, p: 12, mouth: [38, 64, 81],
      body: '<path class="ch-body" d="M0 100 V0 A100 100 0 0 1 100 100 Z"/>',
      lip: '<path class="ch-lip" d="M0 109 V9 A100 100 0 0 1 100 109 Z"/>' }
  };

  /* expr: base | happy | party | think | oops */
  function face(c, expr) {
    var s = "", e1 = c.eyes[0], e2 = c.eyes[1], m = c.mouth, cx = (m[0] + m[1]) / 2;

    function mouth(x1, x2, y) {
      var rr = (x2 - x1) / 2, mx = (x1 + x2) / 2;
      return '<path class="ch-ink ch-line" d="M' + x1 + " " + y + " H" + x2 + " A" + rr + " " + rr + " 0 0 1 " + x1 + " " + y + ' Z" stroke-width="5" stroke-linejoin="round"/>' +
        '<rect class="ch-eye" x="' + (mx - 6) + '" y="' + (y - 1) + '" width="5.5" height="6" rx="1.5"/>' +
        '<rect class="ch-eye" x="' + (mx + 0.5) + '" y="' + (y - 1) + '" width="5.5" height="6" rx="1.5"/>';
    }
    function happyEye(e) {
      return '<path class="ch-line" d="M' + (e[0] - c.r * 0.62) + " " + (e[1] + 4) + " Q" + e[0] + " " + (e[1] - c.r * 0.8) + " " + (e[0] + c.r * 0.62) + " " + (e[1] + 4) +
        '" fill="none" stroke-width="5" stroke-linecap="round"/>';
    }

    if (expr === "happy" || expr === "party") return happyEye(e1) + happyEye(e2) + mouth(m[0] - 3, m[1] + 3, m[2] - 2);

    var off = expr === "think" ? [-4, -5] : [0, 0], pr = expr === "oops" ? c.p * 0.6 : c.p;
    [e1, e2].forEach(function (e) {
      s += '<circle class="ch-eye" cx="' + e[0] + '" cy="' + e[1] + '" r="' + c.r + '"/><circle class="ch-ink" cx="' + (e[0] + off[0]) + '" cy="' + (e[1] + off[1]) + '" r="' + pr + '"/>';
    });
    if (expr === "think") s += '<path class="ch-line" d="M' + (cx - 8) + " " + (m[2] + 4) + " H" + (cx + 8) + '" stroke-width="5" stroke-linecap="round"/>';
    else if (expr === "oops") s += '<ellipse class="ch-ink" cx="' + cx + '" cy="' + (m[2] + 5) + '" rx="5" ry="6"/>';
    else s += mouth(m[0], m[1], m[2]);
    return s;
  }

  function charSVG(kind, expr, label) {
    var c = SHAPES[kind];
    return '<svg viewBox="' + c.vb + '" role="img" aria-label="' + EP.util.esc(label || "캐릭터") + '">' + c.lip + c.body + face(c, expr || "base") + "</svg>";
  }

  EP.chars = { svg: charSVG };
})(window.EP);
