/* 저장: 브라우저(개인 코드별 localStorage) + 서버(Firestore REST) */
(function (EP) {
  "use strict";

  var C = EP.config;
  var CODE = readCode(), REMOTE = !!CODE;
  var DKEY = C.storageKey + (CODE ? "." + CODE : ""), PKEY = DKEY + ".pending";
  var synced = false, pushing = false, pushTimer = null, retryTimer = null;
  var syncState = REMOTE ? "loading" : "local";
  var hooks = { isBusy: function () { return false; }, onRefresh: function () {} };
  var st = load();

  /* ?c=코드 로 들어오면 기억해 두고, 없으면 기억해 둔 코드를 쓴다 */
  function readCode() {
    var m = /[?&]c=([A-Za-z0-9-]+)/.exec(location.search), c = m ? m[1] : null;
    try { if (c) localStorage.setItem(C.storageKey + ".code", c); else c = localStorage.getItem(C.storageKey + ".code"); } catch (e) {}
    return c ? c.toUpperCase().replace(/[^A-Z0-9]/g, "") : null;
  }

  /* ---- 로컬 ---- */
  /* done: 끝낸 세션 번호 목록
     progress: 새 세션을 하다 멈춘 곳 { no, phase, pos, retry, firstOk, review }
     wrong: 틀린 문제 { "세션-문제id": { streak, tabDay, rev } }  rev: 다음 세션 복습에 넣을지 */
  /* autoplay·voice·slowRate는 설정: 이 기기에만 저장하고 서버에는 보내지 않는다 */
  var SETTINGS = ["autoplay", "voice", "slowRate"];
  function blank() { return { done: [], progress: null, wrong: {}, autoplay: true, voice: "", slowRate: 0, localAt: "" }; }
  function load() {
    var d = blank();
    try { var s = JSON.parse(localStorage.getItem(DKEY)); if (s) for (var k in s) d[k] = s[k]; } catch (e) {}
    return upgrade(d);
  }
  /* 세션 1만 있던 샘플 시절 기록을 지금 형식으로 옮긴다 */
  function upgrade(d) {
    if (!Array.isArray(d.done)) d.done = d.done ? [1] : [];
    d.done = d.done.filter(function (n) { return typeof n === "number" && n > 0; });
    var w = d.wrong || {}, out = {};
    for (var k in w) out[k.indexOf("-") < 0 ? "1-" + k : k] = w[k];
    d.wrong = out;
    if (d.progress && !d.progress.no) {
      d.progress.no = 1;
      d.progress.retry = (d.progress.retry || []).map(function (k) { return k.indexOf("-") < 0 ? "1-" + k : k; });
    }
    return d;
  }
  function writeLocal() { try { localStorage.setItem(DKEY, JSON.stringify(st)); } catch (e) {} }
  function save() { st.localAt = new Date().toISOString(); writeLocal(); schedulePush(); }
  /* 기록을 지우되 설정(자동 듣기, 목소리, 느리게 속도)은 남긴다. st 객체는 그대로 두고 내용만 바꾼다. */
  function reset() {
    var keep = {}, b = blank(), k;
    SETTINGS.forEach(function (s) { keep[s] = st[s]; });
    for (k in st) delete st[k];
    for (k in b) st[k] = b[k];
    for (k in keep) st[k] = keep[k];
    save();
  }

  /* ---- 아직 서버에 못 보낸 변경 표시 ---- */
  function setPending(on) { try { if (on) localStorage.setItem(PKEY, "1"); else localStorage.removeItem(PKEY); } catch (e) {} drawSync(); }
  function isPending() { try { return localStorage.getItem(PKEY) === "1"; } catch (e) { return false; } }
  function drawSync() {
    var el = document.getElementById("sync");
    if (el) el.hidden = !(REMOTE && (isPending() || !synced) && syncState !== "loading");
  }

  /* ---- Firestore 값 변환 ---- */
  function enc(v) {
    if (v === null || v === undefined) return { nullValue: null };
    if (Array.isArray(v)) return { arrayValue: { values: v.map(enc) } };
    if (typeof v === "boolean") return { booleanValue: v };
    if (typeof v === "number") return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
    if (typeof v === "string") return { stringValue: v };
    var f = {}; for (var k in v) if (v.hasOwnProperty(k)) f[k] = enc(v[k]);
    return { mapValue: { fields: f } };
  }
  function dec(x) {
    if (!x || "nullValue" in x) return null;
    if ("integerValue" in x) return parseInt(x.integerValue, 10);
    if ("doubleValue" in x) return x.doubleValue;
    if ("booleanValue" in x) return x.booleanValue;
    if ("stringValue" in x) return x.stringValue;
    if ("timestampValue" in x) return x.timestampValue;
    if ("arrayValue" in x) return (x.arrayValue.values || []).map(dec);
    if ("mapValue" in x) { var o = {}, f = x.mapValue.fields || {}; for (var k in f) o[k] = dec(f[k]); return o; }
    return null;
  }

  /* ---- 서버 ---- */
  function docUrl() {
    return "https://firestore.googleapis.com/v1/projects/" + C.firebase.project + "/databases/(default)/documents/learners/" + CODE + "?key=" + C.firebase.key;
  }
  function schedulePush() {
    if (!REMOTE) return;
    setPending(true);
    if (!synced) return;
    clearTimeout(pushTimer); pushTimer = setTimeout(push, C.pushDelay);
  }
  /* 아주 오래된 브라우저(fetch 없음)는 이 기기에만 저장한다 */
  var CAN_FETCH = typeof window.fetch === "function";
  function push() {
    if (!REMOTE || !synced || pushing || !CAN_FETCH) return;
    pushing = true;
    var fields = enc({ done: st.done, progress: st.progress || null, wrong: st.wrong || {} }).mapValue.fields;
    fields.updatedAt = { timestampValue: st.localAt || new Date().toISOString() };
    fetch(docUrl(), { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fields: fields }), cache: "no-store" })
      .then(function (r) { pushing = false; syncState = r.ok ? "ok" : "error " + r.status; setPending(!r.ok); })
      .catch(function () { pushing = false; syncState = "offline"; setPending(true); });
  }
  /* 서버 기록과 이 기기 기록 중 더 최근 것을 쓰고, 서버를 먼저 읽기 전에는 절대 덮어쓰지 않는다.
     결과: "ok" | "invalid"(등록되지 않은 코드) | "offline" */
  function pull() {
    clearTimeout(retryTimer);
    if (!CAN_FETCH) { syncState = "offline"; drawSync(); return Promise.resolve("offline"); }
    return fetch(docUrl(), { cache: "no-store" }).then(function (r) {
      if (r.status === 403) { syncState = "invalid"; return "invalid"; }
      if (r.status === 404) { synced = true; syncState = "ok"; if (isPending()) push(); return "ok"; }
      if (!r.ok) throw new Error("http " + r.status);
      return r.json().then(function (d) {
        var v = dec({ mapValue: { fields: d.fields || {} } }) || {}, serverAt = v.updatedAt || "";
        synced = true; syncState = "ok";
        if (isPending() && st.localAt && st.localAt > serverAt) { push(); return "ok"; }
        st.done = v.done || [];
        st.progress = v.progress || null;
        st.wrong = v.wrong || {};
        st.localAt = serverAt;
        upgrade(st);
        writeLocal(); setPending(false);
        return "ok";
      });
    }).catch(function () {
      syncState = "offline"; drawSync();
      retryTimer = setTimeout(refresh, C.retryDelay);
      return "offline";
    });
  }
  /* 백그라운드로 다시 불러오고, 학습 중이 아니면 화면을 새로 그린다 */
  function refresh() {
    pull().then(function (res) { if (res === "ok" && !hooks.isBusy()) hooks.onRefresh(); });
  }

  window.addEventListener("online", function () {
    if (REMOTE && !synced) refresh(); else if (isPending()) push();
  });
  document.addEventListener("visibilitychange", function () {
    if (!REMOTE) return;
    if (document.visibilityState === "hidden" && isPending()) push();
    if (document.visibilityState === "visible" && synced && !hooks.isBusy()) refresh();
  });

  /* 설정 화면에 보이는 저장 상태 */
  function statusText() {
    if (!REMOTE) return "이 기기만";
    return isPending() ? "대기 중" : syncState === "ok" ? "완료" : syncState;
  }
  function codeLabel() { return CODE ? CODE.slice(0, 4) + "-" + CODE.slice(4) : ""; }

  /* ---- 진도 ---- */
  function isDone(n) { return st.done.indexOf(n) >= 0; }
  function markDone(n) { if (!isDone(n)) { st.done.push(n); st.done.sort(function (a, b) { return a - b; }); } }
  /* 다음에 할 세션 = 아직 끝내지 않은 가장 앞 번호 (건너뛰기 없음) */
  function nextNo() { var n = 1; while (isDone(n)) n++; return n; }

  EP.store = {
    state: st,
    isDone: isDone,
    markDone: markDone,
    nextNo: nextNo,
    code: CODE,
    remote: REMOTE,
    save: save,
    reset: reset,
    pull: pull,
    drawSync: drawSync,
    statusText: statusText,
    codeLabel: codeLabel,
    /* isBusy: 학습 중인지, onRefresh: 서버 기록이 바뀌었을 때 다시 그리기 */
    setHooks: function (h) { for (var k in h) hooks[k] = h[k]; }
  };
})(window.EP);
