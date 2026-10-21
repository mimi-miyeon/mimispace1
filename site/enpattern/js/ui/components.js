/* 공통 UI 마크업. 여러 화면에 나오는 요소는 여기서만 만든다.
   모양을 바꿀 때: 스타일은 scss/components/, 마크업은 이 파일. */
(function (EP) {
  "use strict";

  var esc = EP.util.esc, ico = EP.icons.ico;

  function attrs(o) {
    var s = "";
    for (var k in o) if (o[k] !== undefined && o[k] !== null && o[k] !== false) s += " " + k + '="' + esc(o[k]) + '"';
    return s;
  }

  /* 캐릭터  kind: keycap | a | capsule | fan,  size: xs | sm | md | lg | hero | (없음: 부모 폭)
     → scss/components/_char.scss */
  function char(kind, opt) {
    opt = opt || {};
    var cls = "char char--" + kind + (opt.size ? " char--" + opt.size : "");
    return '<div class="' + cls + '">' + EP.chars.svg(kind, opt.expr, opt.label) + "</div>";
  }

  /* 키캡 버튼  variant: primary | dark | soft | plain,  opt.sm / opt.gap / opt.type
     → scss/components/_buttons.scss */
  function key(label, id, opt) {
    opt = opt || {};
    var cls = "key key--" + (opt.variant || "primary") + (opt.sm ? " key--sm" : "") + (opt.gap ? " key--gap" : "");
    return "<button" + attrs({ "class": cls, id: id, type: opt.type }) + ">" + esc(label) + "</button>";
  }

  function link(label, id) { return "<button" + attrs({ "class": "link", id: id }) + ">" + esc(label) + "</button>"; }

  function closeBtn(id, label) {
    return "<button" + attrs({ "class": "icon-btn", id: id, "aria-label": label || "그만하기" }) + ">" + ico("close", 22) + "</button>";
  }

  /* 듣기 버튼. data: { "data-ex": 0 } 처럼 클릭 처리용 속성 */
  function speakBtn(data, size) {
    var a = { "class": "spk", "aria-label": "듣기" };
    for (var k in data) a[k] = data[k];
    return "<button" + attrs(a) + ">" + ico("speak", size || 22) + "</button>";
  }

  /* 보통 / 느리게 한 쌍. attr: 클릭 구분용 속성 이름 (값 n / s) */
  function listen(attr, labels) {
    labels = labels || ["보통", "느리게"];
    return '<div class="listen"><button ' + attr + '="n">' + ico("speak", 20) + esc(labels[0]) + "</button>" +
      "<button " + attr + '="s">' + ico("slow", 20) + esc(labels[1]) + "</button></div>";
  }

  /* 탭 머리: 제목 + 설명 + 캐릭터  → scss/screens/_tabs.scss */
  function tabHead(title, sub, charHtml) {
    return '<div class="tab-head"><div><h1>' + esc(title) + "</h1><p>" + esc(sub || "") + "</p></div>" + (charHtml || "") + "</div>";
  }

  /* 가운데 메시지: 캐릭터 + 제목 + 설명 (+ 버튼 html)
     opt.world: 초록 배경 위  → scss/components/_message.scss */
  function message(opt) {
    return '<div class="message' + (opt.world ? " message--world" : "") + '">' + (opt.char || "") +
      "<h1>" + esc(opt.title) + "</h1><p>" + esc(opt.text) + "</p>" + (opt.action || "") + "</div>";
  }

  EP.ui = { char: char, key: key, link: link, closeBtn: closeBtn, speakBtn: speakBtn, listen: listen, tabHead: tabHead, message: message };
})(window.EP);
