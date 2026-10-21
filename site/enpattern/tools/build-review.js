#!/usr/bin/env node
/* 콘텐츠 검토 페이지 만들기
   세션 데이터를 사람이 읽기 좋은 한 장짜리 HTML로 펼친다. (제작 → 점검 → 확정/수정 사이클의 '점검'용)

   실행 (저장소 루트에서):  node site/enpattern/tools/build-review.js 결과.html [세션번호 ...]
   예:  node site/enpattern/tools/build-review.js /tmp/review.html 2 3 4
   세션 번호를 주지 않으면 js/data/ 안의 세션을 모두 넣는다. */
"use strict";

var fs = require("fs"), path = require("path"), vm = require("vm");
var ROOT = path.resolve(__dirname, "..");
var out = process.argv[2], want = process.argv.slice(3).map(Number);
if (!out) { console.log("사용법: node build-review.js 결과.html [세션번호 ...]"); process.exit(1); }

function load(file) {
  var ctx = { console: console }; ctx.window = ctx; vm.createContext(ctx);
  ["js/config.js", "js/data/" + file].forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f }); });
  var EP = ctx.EP;
  if (EP.sessions) return Object.keys(EP.sessions).map(function (k) { return EP.sessions[k]; });
  return EP.data && EP.data.session ? [EP.data.session] : [];
}

var sessions = [];
fs.readdirSync(path.join(ROOT, "js/data")).filter(function (f) { return /^pattern\d+\.js$/.test(f); }).forEach(function (f) {
  load(f).forEach(function (S) { if (!want.length || want.indexOf(S.no) >= 0) sessions.push(S); });
});
sessions.sort(function (a, b) { return a.no - b.no; });
if (!sessions.length) { console.log("세션이 없습니다."); process.exit(1); }

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function tail(a) { return /^[.?!]$/.test(a) ? a : " " + a; }
/* 대표 정답 문장. 빈칸 문제는 빈칸 자리를 표시하고, 문장 문제는 핵심 부분을 표시 */
function answerLine(it, S) {
  if (it.type === "blank") return (it.before ? esc(it.before) + " " : "") + '<b class="hit">' + esc(it.answers[0]) + "</b>" + esc(tail(it.after));
  var a = esc(it.answers[0]), stem = esc(S.stem), i = a.toLowerCase().indexOf(stem.toLowerCase());
  return i < 0 ? a : a.slice(0, i) + '<b class="hit">' + a.slice(i, i + stem.length) + "</b>" + a.slice(i + stem.length);
}
function list(lab, arr, cls) {
  if (!arr || !arr.length) return "";
  return '<div class="row"><span class="lab">' + lab + '</span><ul class="' + (cls || "") + '">' + arr.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>";
}

var body = sessions.map(function (S) {
  var intro = S.intro;
  var blocks = intro.blocks.map(function (b) { return '<span class="blk"><span class="en">' + esc(b[0]) + "</span><span>" + esc(b[1]) + "</span></span>"; }).join("");
  var items = S.items.map(function (it, n) {
    var q = "";
    if (it.ctx) q += '<div class="ctx"><span class="lab">바꿀 문장</span>' + esc(it.ctx.lead) + ' <span class="en">' + esc(it.ctx.en) + "</span></div>";
    if (it.dialog) q += '<div class="ctx"><span class="lab">A</span><span class="en">' + esc(it.dialog.a) + "</span> " + esc(it.dialog.aKo) + "</div>";
    if (it.type === "blank") q += '<div class="blank en">' + (it.before ? esc(it.before) + " " : "") + '<span class="slot">?</span>' + esc(tail(it.after)) + "</div>";
    var more = it.answers.slice(1).map(function (a) { return '<span class="en">' + esc(a) + "</span>"; });
    var alts = (it.alts || []).map(function (a) { return '<span class="en">' + esc(a) + "</span>"; });
    var wrong = Object.keys(it.wrong || {}).map(function (k) { return '<span class="en bad">' + esc(k) + "</span> → " + esc(it.wrong[k]); });
    return '<li class="item" id="s' + S.no + "-" + it.id + '"><div class="ihead"><span class="num">' + (n + 1) + '</span><span class="kind">' + esc(it.kind) + '</span><span class="iid">' + esc(it.id) + "</span></div>" +
      '<p class="ko">' + esc(it.ko) + "</p>" + q +
      '<div class="row"><span class="lab">정답</span><span class="en ans">' + answerLine(it, S) + "</span></div>" +
      list("다른 정답", more) + list("다른 표현", alts) + list("예상 오답", wrong, "wrong") +
      (it.tip ? '<div class="row"><span class="lab">이렇게도</span><span><span class="en">' + esc(it.tip.en) + '</span><span class="why">' + esc(it.tip.why) + "</span></span></div>" : "") +
      "</li>";
  }).join("");
  return '<section class="session" id="s' + S.no + '"><header class="shead"><span class="sno">세션 ' + S.no + '</span><h2 class="en">' + esc(S.form) + "</h2>" +
    '<p class="meaning">' + esc(S.meaning) + '</p><div class="meta"><span class="chip">' + esc(S.hint) + '</span><span>핵심 부분 <b class="en">' + esc(S.stem) + "</b></span></div></header>" +
    '<div class="intro"><h3>문법 이해</h3><div class="blocks">' + blocks + "</div><ul>" + intro.lines.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul>" +
    '<div class="ex">' + intro.examples.map(function (x) { return '<p><span class="en">' + esc(x.en) + "</span> " + esc(x.ko) + "</p>"; }).join("") + "</div></div>" +
    '<ol class="items">' + items + "</ol></section>";
}).join("");

var nums = sessions.map(function (S) { return S.no; });
var range = nums.length > 1 ? nums[0] + "–" + nums[nums.length - 1] : String(nums[0]);
var nav = sessions.map(function (S) { return '<a href="#s' + S.no + '"><b>' + S.no + "</b> " + esc(S.form) + "</a>"; }).join("");

var html = '<title>영어패턴 세션 ' + range + ' 검토</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+KR:wght@400;500;700&display=swap">\n' +
"<style>\n" + fs.readFileSync(path.join(__dirname, "review.css"), "utf8") + "</style>\n" +
'<div class="wrap"><header class="top"><p class="eyebrow">영어패턴 · 콘텐츠 점검</p><h1>세션 ' + range + "</h1>" +
'<p class="lead">문제 화면에 나오는 순서대로 펼쳤어요. <b class="hit">초록 글자</b>는 핵심 부분(빈칸 문제는 빈칸 자리)이에요. 예상 오답은 정규화된 형태(소문자, 문장부호 없음, 축약형 풀어 씀)로 적혀 있어요.</p>' +
'<nav class="toc">' + nav + "</nav></header>" + body + "</div>\n";

fs.writeFileSync(out, html);
console.log("만들었어요: " + out + " (세션 " + nums.join(", ") + ")");
