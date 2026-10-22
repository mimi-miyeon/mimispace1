/* 음성으로 만들 단어·문장 목록 뽑기
   node site/enpattern/tools/voice/build-list.js  →  site/enpattern/tools/voice/list.json

   - 문장: 모든 정답(빈칸은 앞뒤를 붙인 완성 문장)과 다른 표현, 패턴 소개 예문,
           바꿔 만들기 원래 문장, 팁 문장, 대화 상대 말
   - 단어: 위 정답 문장들에 나오는 단어 (소문자, 줄임말 그대로)
   - id: 글자를 정리한 뒤 FNV-1a 해시(36진수). 앱에서도 같은 함수(voiceId)로 파일 이름을 찾는다.
   기존 list.json이 있으면 바뀐 개수만 알려 준다 (새로 만들 것만 생성기가 만든다). */
var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.join(__dirname, "../..");
var OUT = path.join(__dirname, "list.json");

/* 앱과 똑같이 써야 하는 함수 두 개 */
function clean(t) { return String(t).replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim(); }
function voiceId(t) {
  var h = 0x811c9dc5, s = clean(t);
  for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}

var ctx = { console: console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "js/config.js"), "utf8"), ctx);
fs.readdirSync(path.join(ROOT, "js/data")).filter(function (f) { return /^pattern\d+\.js$/.test(f); })
  .forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, "js/data", f), "utf8"), ctx); });

var sentences = {}, words = {};
function addS(t) { t = clean(t); if (t) sentences[t] = 1; }
/* 단어 키는 소문자. TV, AC처럼 대문자 약어는 읽을 때(say) 대문자를 그대로 쓴다 */
var sayAs = {}, plain = {};   /* plain: 소문자로도 나온 단어 (us처럼) → 약어로 읽지 않음 */
function addW(sentence) {
  clean(sentence).replace(/[^A-Za-z0-9' -]/g, " ").split(/[\s-]+/).forEach(function (w) {
    w = w.replace(/^'+|'+$/g, ""); if (!w || !/[a-z]/i.test(w)) return;
    var k = w.toLowerCase(); words[k] = 1;
    if (w.length > 1 && /^[A-Z]+$/.test(w)) sayAs[k] = w; else if (w !== w.toUpperCase() || w.length === 1) plain[k] = 1;
  });
}
function full(it, a) {
  if (it.type !== "blank") return a;
  var after = it.after || "", sp = /^[.,!?]+$/.test(after.trim()) ? "" : " ";
  return clean((it.before ? it.before + " " : "") + a + sp + after);
}

Object.keys(ctx.EP.sessions).forEach(function (k) {
  var S = ctx.EP.sessions[k];
  S.intro.examples.forEach(function (e) { addS(e.en); });
  S.items.forEach(function (it) {
    (it.answers || []).concat(it.alts || []).forEach(function (a) { var s = full(it, a); addS(s); addW(s); });
    if (it.tip && it.tip.en) addS(it.tip.en);
    if (it.ctx && it.ctx.en) addS(it.ctx.en);
    if (it.dialog && it.dialog.a) addS(it.dialog.a);
  });
});

function pack(obj) {
  var seen = {};
  return Object.keys(obj).sort().map(function (t) {
    var id = voiceId(t);
    if (seen[id]) throw new Error("id 충돌: " + t + " / " + seen[id]);
    seen[id] = t; return sayAs[t] && !plain[t] && obj === words ? { id: id, text: t, say: sayAs[t] } : { id: id, text: t };
  });
}
var list = { version: 1, words: pack(words), sentences: pack(sentences) };

var old = null; try { old = JSON.parse(fs.readFileSync(OUT, "utf8")); } catch (e) {}
fs.writeFileSync(OUT, JSON.stringify(list, null, 0).replace(/\},\{/g, "},\n{"));
var chars = list.sentences.reduce(function (n, s) { return n + s.text.length; }, 0);
console.log("단어 " + list.words.length + "개, 문장 " + list.sentences.length + "개 (문장 글자 " + chars + ")");
if (old) {
  var o = {}; old.words.concat(old.sentences).forEach(function (x) { o[x.id] = 1; });
  var add = list.words.concat(list.sentences).filter(function (x) { return !o[x.id]; }).length;
  console.log("지난 목록보다 새로 생긴 항목 " + add + "개");
}
module.exports = { voiceId: voiceId, clean: clean };
