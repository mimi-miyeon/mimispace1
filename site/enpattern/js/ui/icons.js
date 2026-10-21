/* 아이콘 (같은 굵기의 둥근 선). 색은 currentColor → 감싼 요소의 CSS color를 따른다. */
(function (EP) {
  "use strict";

  var PATHS = {
    close: '<path d="M5 5 L19 19 M19 5 L5 19"/>',
    speak: '<path d="M3 9 H8 L14 4 V20 L8 15 H3 Z"/><path d="M17 8 Q20 12 17 16"/><path d="M19.5 5 Q25 12 19.5 19"/>',
    slow: '<path d="M3 9 H8 L14 4 V20 L8 15 H3 Z"/><path d="M17.5 12 H24" stroke-dasharray="1.5 3"/>',
    ok: '<circle cx="12" cy="12" r="10"/><path d="M7.5 12 L10.5 15 L16.5 9"/>',
    bad: '<circle cx="12" cy="12" r="10"/><path d="M12 7 V13"/><path d="M12 16.5 V16.6"/>',
    again: '<path d="M19 9 A8 8 0 1 0 20 14"/><path d="M19 4 V9 H14"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11 V8 A4 4 0 0 1 16 8 V11"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5 V5 M12 19 V21.5 M2.5 12 H5 M19 12 H21.5 M5.3 5.3 L7 7 M17 17 L18.7 18.7 M5.3 18.7 L7 17 M17 7 L18.7 5.3"/>'
  };

  /* 크기 단계: 실제 px는 scss 토큰 --icon-{sm,md,lg,xl} (화면 폭에 따라 커짐) */
  var SIZE = { 16: "sm", 20: "md", 22: "lg", 26: "xl" };

  function ico(name, size) {
    size = size || 22;
    return '<svg class="ico ico--' + (SIZE[size] || "lg") + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      PATHS[name] + "</svg>";
  }

  /* 탭 바 아이콘 = 캐릭터를 단순화한 모양.
     선택됨: 캐릭터 색(.char--{kind}의 .ch-*), 선택 안 됨: 선만(.tab-off, 글자색) */
  var TAB = {
    keycap: {
      on: '<rect class="ch-lip" x="2" y="5" width="20" height="17" rx="5"/><rect class="ch-body" x="2" y="2" width="20" height="17" rx="5"/>',
      off: '<rect x="3" y="3" width="18" height="17" rx="5"/>'
    },
    a: {
      on: '<circle class="ch-body" cx="10" cy="13" r="9"/><rect class="ch-body" x="16" y="3" width="6" height="19" rx="3"/>',
      off: '<circle cx="10" cy="13" r="8"/><path d="M20 4 V21"/>'
    },
    fan: {
      on: '<path class="ch-body" d="M2 23 V3 A20 20 0 0 1 22 23 Z"/>',
      off: '<path d="M3 21 V4 A17 17 0 0 1 20 21 Z"/>'
    }
  };
  function tabIcon(kind, on) {
    return on ? '<svg class="char--' + kind + '" viewBox="0 0 24 24" aria-hidden="true">' + TAB[kind].on + "</svg>"
              : '<svg class="tab-off" viewBox="0 0 24 24" aria-hidden="true">' + TAB[kind].off + "</svg>";
  }

  EP.icons = { ico: ico, tab: tabIcon };
})(window.EP);
