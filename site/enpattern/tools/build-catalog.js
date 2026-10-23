#!/usr/bin/env node
/* 세션 목록 만들기 → js/data/catalog.js (포르투갈어: --lang pt → js/data-pt/catalog.js)
   tools/pattern-list.json(230개 패턴의 이름과 뜻)과 js/data/pattern{번호}.js(만든 세션)를 합친다.
   포르투갈어는 tools/pattern-list-pt.json과 js/data-pt/.
   - 만든 세션은 그 파일의 form, meaning을 쓴다.
   - ready: 1번부터 빠짐없이 만들어진 마지막 세션 번호. 이보다 뒤 세션은 앱에서 '준비 중'으로 보인다.

   세션 파일을 추가하거나 패턴 이름·뜻을 고친 뒤 실행 (저장소 루트에서):
     node site/enpattern/tools/build-catalog.js            (영어)
     node site/enpattern/tools/build-catalog.js --lang pt  (포르투갈어) */
"use strict";

var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.resolve(__dirname, "..");
var li = process.argv.indexOf("--lang"), LANG = li > 0 ? process.argv[li + 1] : "en";
var SUF = LANG === "en" ? "" : "-" + LANG, DATA = "js/data" + SUF;
var list = JSON.parse(fs.readFileSync(path.join(__dirname, "pattern-list" + SUF + ".json"), "utf8"));

var made = {};
fs.readdirSync(path.join(ROOT, DATA)).forEach(function (f) {
  if (!/^pattern\d+\.js$/.test(f)) return;
  var ctx = { console: console }; ctx.window = ctx; ctx.EP = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, DATA, f), "utf8"), ctx, { filename: f });
  for (var k in (ctx.EP.sessions || {})) made[k] = ctx.EP.sessions[k];
});

var ready = 0;
while (made[ready + 1]) ready++;

var rows = list.map(function (p) {
  var S = made[p.no];
  return [S ? S.form : p.form, S ? S.meaning : p.meaning];
});

var out = "/* 세션 목록 (자동 생성: tools/build-catalog.js. 직접 고치지 말 것)\n" +
  "   list[번호 - 1] = [패턴, 뜻],  ready: 1번부터 만들어진 마지막 세션 번호 */\n" +
  "(function (EP) {\n  \"use strict\";\n  EP.catalog = {\n    total: " + rows.length + ",\n    ready: " + ready + ",\n    list: [\n" +
  rows.map(function (r) { return "      " + JSON.stringify(r); }).join(",\n") + "\n    ]\n  };\n})(window.EP);\n";

fs.writeFileSync(path.join(ROOT, DATA, "catalog.js"), out);
console.log(DATA + "/catalog.js: 세션 " + rows.length + "개, 준비된 세션 1–" + ready);
