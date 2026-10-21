#!/usr/bin/env node
/* 채점 자동 점검 도구
   실제 서비스의 채점 코드(js/grade.js)로 모든 문제를 풀어 보고, 콘텐츠 작성 실수를 찾는다.

   실행 (저장소 루트에서):  npm run check:enpattern
                     또는  node site/enpattern/tools/check-content.js [데이터파일 ...]
   데이터 파일을 주지 않으면 js/data/ 안의 pattern*.js 를 모두 검사한다.

   오류(✗)가 하나라도 있으면 종료 코드 1. 주의(!)는 확인만 권하는 항목이다. */
"use strict";

var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.resolve(__dirname, "..");
var WHY_MAX = 40;       /* 팁 설명 권장 최대 글자 수 */

/* ---- 서비스 코드 불러오기 (브라우저 없이) ---- */
function loadEP(dataFile) {
  var ctx = { console: console };
  ctx.window = ctx;
  vm.createContext(ctx);
  ["js/config.js", path.relative(ROOT, dataFile), "js/util.js", "js/grade.js"].forEach(function (f) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  });
  return ctx.EP;
}

function dataFiles(args) {
  if (args.length) return args.map(function (a) { return path.resolve(a); });
  var dir = path.join(ROOT, "js/data");
  return fs.readdirSync(dir).filter(function (f) { return /^pattern\d+\.js$/.test(f); })
    .sort(function (a, b) { return parseInt(a.replace(/\D/g, ""), 10) - parseInt(b.replace(/\D/g, ""), 10); })
    .map(function (f) { return path.join(dir, f); });
}

/* ---- 검사 ---- */
/* 데이터 파일 하나에 든 세션들. 새 형식은 EP.sessions[번호], 예전 샘플은 EP.data.session */
function sessionsOf(EP) {
  if (EP.sessions) return Object.keys(EP.sessions).map(function (k) { return EP.sessions[k]; });
  return EP.data && EP.data.session ? [EP.data.session] : [];
}

function checkSession(EP, S) {
  EP.data = EP.data || {}; EP.data.session = S;   /* 채점 코드는 지금 세션을 EP.data.session에서 읽는다 */
  var grade = EP.grade, norm = function (s) { return grade.normalize(s).toks.join(" "); };
  var errors = [], warns = [], stats = { items: 0, answers: 0, wrongs: 0, tips: 0 };
  function err(where, msg) { errors.push(where + ": " + msg); }
  function warn(where, msg) { warns.push(where + ": " + msg); }

  /* 세션 기본 정보 */
  ["no", "form", "stem", "meaning", "hint"].forEach(function (k) { if (!S[k]) err("세션", k + " 없음"); });
  if (S.form && S.form.indexOf("~") < 0) warn("세션", "form에 ~ 자리가 없음: " + S.form);
  if (!S.intro || !S.intro.blocks || !S.intro.lines || !S.intro.examples) err("세션", "intro(blocks, lines, examples) 빠짐");
  else S.intro.examples.forEach(function (x, i) {
    if (!x.en || !x.ko) err("예문 " + (i + 1), "en/ko 빠짐");
    else if (!new RegExp("\\b" + S.stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i").test(x.en)) warn("예문 " + (i + 1), "패턴(" + S.stem + ")이 들어 있지 않음: " + x.en);
  });
  if (!S.items || !S.items.length) { err("세션", "문제가 없음"); return { errors: errors, warns: warns, stats: stats }; }

  var nb = S.items.filter(function (it) { return it.type === "blank"; }).length;
  if (nb !== 5 || S.items.length - nb !== 6) warn("세션", "문제 수가 기준(빈칸 5, 문장 6)과 다름: 빈칸 " + nb + ", 문장 " + (S.items.length - nb));
  if (!S.items.some(function (it) { return it.ctx; })) warn("세션", "바꿔 만들기(ctx) 문제가 없음");
  if (!S.items.some(function (it) { return it.dialog; })) warn("세션", "대화 완성(dialog) 문제가 없음");

  var ids = {}, kos = {};
  S.items.forEach(function (it, n) {
    var where = "문제 " + (n + 1) + (it.id ? " (" + it.id + ")" : "");
    stats.items++;

    /* 필수 항목 */
    if (!it.id) err(where, "id 없음"); else if (ids[it.id]) err(where, "id 중복: " + it.id); else ids[it.id] = 1;
    if (it.type !== "blank" && it.type !== "sentence") err(where, "type은 blank 또는 sentence: " + it.type);
    if (!it.kind) err(where, "kind 없음");
    if (!it.ko) err(where, "한국어 문장(ko) 없음"); else if (kos[it.ko]) warn(where, "같은 한국어 문장이 또 있음: " + it.ko); else kos[it.ko] = 1;
    if (!it.answers || !it.answers.length) { err(where, "정답(answers) 없음"); return; }
    if (it.type === "blank") {
      if (typeof it.before !== "string" || typeof it.after !== "string") err(where, "빈칸 문제에 before/after 없음");
      if (it.alts && it.alts.length) warn(where, "빈칸 문제의 alts는 채점에 쓰이지 않음");
      it.answers.forEach(function (a) { if (/\s/.test(a.trim())) warn(where, "빈칸 정답이 두 단어 이상: " + a); });
    }
    if (it.tip) {
      stats.tips++;
      if (!it.tip.en || !it.tip.why) err(where, "tip에는 en과 why가 모두 필요");
      else if (it.tip.why.length > WHY_MAX) warn(where, "팁 설명이 깁니다 (" + it.tip.why.length + "자, 권장 " + WHY_MAX + "자 이하)");
    }
    if (it.ctx && (!it.ctx.lead || !it.ctx.en)) err(where, "ctx에는 lead와 en이 필요");
    if (it.dialog && (!it.dialog.a || !it.dialog.aKo)) err(where, "dialog에는 a와 aKo가 필요");

    /* 1. 정답·다른 표현은 그대로 넣으면 '정답'이어야 한다 */
    var cands = grade.candidates(it, null), accepted = {};
    cands.forEach(function (c) {
      stats.answers++;
      accepted[norm(c.text)] = c.text;
      var g = grade(c.text, it, null);
      if (g.status !== "correct") err(where, "정답 '" + c.text + "'이(가) " + g.status + "로 판정됨");
      else if (!!g.alt !== c.alt) err(where, "'" + c.text + "'의 다른 표현 여부가 어긋남");
    });

    /* 2. 패턴 정답에는 핵심 부분이 들어 있어야 한다 (문장 문제) */
    if (it.type === "sentence") it.answers.forEach(function (a) {
      if (!new RegExp("\\b" + S.stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i").test(a)) warn(where, "패턴 정답에 '" + S.stem + "'이(가) 없음: " + a + " (다른 표현이면 alts로 옮기세요)");
    });

    /* 3. 대표 정답은 정답 따라 입력하기에서도 정답이어야 한다 */
    var copyG = grade(it.answers[0], it, it.answers[0]);
    if (copyG.status !== "correct") err(where, "따라 입력하기에서 대표 정답이 정답이 아님");

    /* 4. 예상 오답: 키는 정규화된 형태, 정답과 겹치지 않음, 실제로 오답 + 적어 둔 이유 */
    for (var key in (it.wrong || {})) {
      stats.wrongs++;
      var reason = it.wrong[key];
      if (norm(key) !== key) err(where, "오답 키가 정규화 형태가 아님: '" + key + "' → '" + norm(key) + "'");
      if (accepted[norm(key)]) { err(where, "오답 '" + key + "'이(가) 정답 목록과 같음"); continue; }
      if (!reason) err(where, "오답 '" + key + "'의 설명이 비어 있음");
      var w = grade(key, it, null);
      if (w.status !== "wrong") err(where, "오답 '" + key + "'이(가) " + w.status + "로 판정됨 (오타 허용에 걸렸을 수 있음)");
      else if (w.reason !== reason) err(where, "오답 '" + key + "'의 이유가 다르게 나옴");
    }

    /* 5. 대표 정답에 흔한 실수를 넣었을 때 정답으로 새어 나가지 않는지 (has/have 등) */
    var A = grade.normalize(it.answers[0]).toks, SWAP = { have: "has", has: "have", am: "is", is: "am", are: "is", was: "were", were: "was", a: "an", an: "a", do: "does", does: "do" };
    A.forEach(function (w, i) {
      if (!SWAP[w]) return;
      var t = A.slice(); t[i] = SWAP[w];
      var s = t.join(" ");
      if (accepted[s]) return;
      var g = grade(s, it, null);
      if (g.status === "correct" || g.status === "minor") err(where, "문법 실수 '" + s + "'이(가) " + (g.status === "minor" ? "작은 실수(통과)" : "정답") + "로 판정됨");
    });
  });

  return { errors: errors, warns: warns, stats: stats };
}

/* ---- 실행 ---- */
var files = dataFiles(process.argv.slice(2)), total = { errors: 0, warns: 0 };
if (!files.length) { console.log("검사할 데이터 파일이 없습니다."); process.exit(1); }

files.forEach(function (f) {
  var rel = path.relative(process.cwd(), f), EP, list;
  try { EP = loadEP(f); list = sessionsOf(EP); if (!list.length) throw new Error("세션 데이터가 없음"); }
  catch (e) { console.log("✗ " + rel + "\n    불러오기 실패: " + e.message); total.errors++; return; }
  list.forEach(function (S) { report(rel + (S && S.no ? " · 세션 " + S.no : ""), checkSession(EP, S)); });
});

function report(name, r) {
  var head = (r.errors.length ? "✗ " : "✓ ") + name + "  (문제 " + r.stats.items + ", 정답·다른 표현 " + r.stats.answers + ", 예상 오답 " + r.stats.wrongs + ", 팁 " + r.stats.tips + ")";
  console.log(head);
  r.errors.forEach(function (m) { console.log("    ✗ " + m); });
  r.warns.forEach(function (m) { console.log("    ! " + m); });
  total.errors += r.errors.length; total.warns += r.warns.length;
}

console.log("\n" + (total.errors ? "오류 " + total.errors + "개" : "오류 없음") + (total.warns ? ", 주의 " + total.warns + "개" : ""));
process.exit(total.errors ? 1 : 0);
