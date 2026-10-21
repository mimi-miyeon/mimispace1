/* 오래된 사파리(iOS 13.3 이하)용 보조 CSS 붙이기
   clamp()를 모르는 브라우저는 clamp가 들어간 값을 통째로 버린다.
   → 컴파일된 css/style.css 끝에 "@supports not (clamp)" 블록을 붙여
     clamp(최소, 중간, 최대)를 폰에서는 최소값, 600px 이상에서는 최대값으로 바꿔 준다.
   npm run sass:enpattern 이 sass 다음에 자동으로 실행한다. 직접 실행: node site/enpattern/tools/legacy-css.js */
var fs = require("fs"), path = require("path");
var FILE = path.join(__dirname, "../css/style.css");
var MARK = "/*legacy-clamp*/";

var css = fs.readFileSync(FILE, "utf8");
var cut = css.indexOf(MARK);
if (cut >= 0) css = css.slice(0, cut);

/* clamp(a, b, c) 안의 괄호 짝을 맞춰서 a 또는 c로 바꾼다 */
function swap(value, pick) {
  var out = "", i = 0;
  while (i < value.length) {
    var at = value.indexOf("clamp(", i);
    if (at < 0) { out += value.slice(i); break; }
    out += value.slice(i, at);
    var depth = 0, j = at + 5, args = [], start = j + 1;
    for (; j < value.length; j++) {
      var ch = value[j];
      if (ch === "(") depth++;
      else if (ch === ")") { depth--; if (depth === 0) { args.push(value.slice(start, j)); break; } }
      else if (ch === "," && depth === 1) { args.push(value.slice(start, j)); start = j + 1; }
    }
    out += (pick === "max" ? args[2] : args[0]).trim();
    i = j + 1;
  }
  return out;
}

/* 규칙 하나하나를 훑는다 (@media 안쪽 한 단계까지) */
var small = [], large = [];
function scan(text, media) {
  var i = 0;
  while (i < text.length) {
    var open = text.indexOf("{", i);
    if (open < 0) break;
    var head = text.slice(i, open).trim();
    var depth = 1, j = open + 1;
    for (; j < text.length && depth; j++) { if (text[j] === "{") depth++; else if (text[j] === "}") depth--; }
    var body = text.slice(open + 1, j - 1);
    if (head.charAt(0) === "@") {
      if (/^@media/.test(head)) scan(body, head);
    } else if (body.indexOf("clamp(") >= 0) {
      var decls = body.split(";").filter(function (d) { return d.indexOf("clamp(") >= 0; });
      var lo = decls.map(function (d) { return swap(d, "min"); }).join(";");
      var hi = decls.map(function (d) { return swap(d, "max"); }).join(";");
      var wrap = function (rule) { return media ? media + "{" + rule + "}" : rule; };
      small.push(wrap(head + "{" + lo + "}"));
      if (!media && hi !== lo) large.push(head + "{" + hi + "}");
    }
    i = j;
  }
}
scan(css, "");

var extra = MARK + "@supports not (width: clamp(1px, 1px, 1px)){" + small.join("") +
  (large.length ? "@media(min-width: 600px){" + large.join("") + "}" : "") + "}";
fs.writeFileSync(FILE, css + extra);
console.log("legacy-css: clamp 규칙 " + small.length + "개 보조 처리");
