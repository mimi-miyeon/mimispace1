/* 세션 147. Where can I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[147] = {
    no: 147, form: "Where can I ~?", stem: "Where can I", meaning: "어디에서 ~할 수 있어요?",
    hint: "Where can I + 동사?",
    intro: {
      blocks: [["Where", "어디에서"], ["can I ~?", "내가 ~할 수 있어?"]],
      lines: [
        "Where can I + 동사?는 ‘어디서 ~할 수 있어요?’예요. 여행 갈 때 정말 많이 써요.",
        "can I 뒤에는 동사 원래 모양을 써요.",
        "Where is ~?(~ 어디 있어요?)와 함께 꼭 알아 두세요."
      ],
      examples: [
        { en: "Where can I buy a ticket?", ko: "표 어디서 살 수 있어요?" },
        { en: "Where can I find the restroom?", ko: "화장실 어디 있어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어디서 표를 살 수 있어요?", before: "Where can I", after: "a ticket?", answers: ["buy", "get"],
        wrong: { "buying": "can I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Where's the ticket office?", why: "ticket office는 ‘매표소’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어디에 주차할 수 있어요?", before: "Where can I", after: "?", answers: ["park"],
        wrong: { "parking": "can I 뒤에는 동사 원래 모양 park를 써요." },
        tip: { en: "Is there a parking lot?", why: "parking lot은 ‘주차장’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "화장실 어디 있어요?", before: "Where can I", after: "the restroom?", answers: ["find"],
        wrong: { "see": "‘어디서 찾을 수 있어요?’는 Where can I find예요." },
        tip: { en: "Where's the restroom?", why: "‘화장실 어디예요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어디서 택시를 탈 수 있어요?", before: "Where can I", after: "a taxi?", answers: ["get", "take", "catch"],
        wrong: { "ride": "‘택시를 타다’는 get a taxi예요." },
        tip: { en: "Is there a taxi stand?", why: "taxi stand는 ‘택시 승강장’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어디 앉으면 돼요?", before: "", after: "can I sit?", answers: ["Where"],
        wrong: { "when": "장소를 물을 때는 Where예요." },
        tip: { en: "Is this seat free?", why: "‘이 자리 비었어요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어디서 돈을 바꿀 수 있어요?", answers: ["Where can I exchange money?", "Where can I change money?"],
        wrong: { "where can i exchanging money": "can I 뒤에는 동사 원래 모양 exchange를 써요.", "where i can exchange money": "물을 때는 can을 I 앞에 써요. Where can I예요." },
        tip: { en: "Is there a bank nearby?", why: "nearby는 ‘근처에’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어디서 와이파이를 쓸 수 있어요?", answers: ["Where can I get Wi-Fi?", "Where can I use Wi-Fi?", "Where can I get wifi?", "Where can I use wifi?"],
        wrong: { "where can i using wifi": "can I 뒤에는 동사 원래 모양 use를 써요." },
        tip: { en: "What's the Wi-Fi password?", why: "‘와이파이 비번이 뭐예요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어디서 갈아탈 수 있어요?", answers: ["Where can I transfer?", "Where can I change trains?"],
        wrong: { "where can i transferring": "can I 뒤에는 동사 원래 모양 transfer를 써요." },
        tip: { en: "Which stop do I change at?", why: "‘어느 역에서 갈아타요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어디서 충전할 수 있어요?", answers: ["Where can I charge my phone?", "Where can I charge this?", "Where can I charge it?"],
        wrong: { "where can i charging my phone": "can I 뒤에는 동사 원래 모양 charge를 써요." },
        tip: { en: "Is there an outlet?", why: "outlet은 ‘콘센트’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어디서 지도를 받을 수 있어요?", answers: ["Where can I get a map?", "Where can I find a map?"],
        ctx: { lead: "buy a ticket 대신 ‘지도를 받다(get a map)’로 바꿔 보세요.", en: "Where can I buy a ticket?" },
        wrong: { "where can i get map": "map은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Do you have a map?", why: "‘지도 있어요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 어디서 탈 수 있어요?", answers: ["Yes, where can I get on?", "Yes, where can I catch it?", "Yes, where can I take it?", "Where can I get on?", "Where can I catch it?"],
        dialog: { a: "This bus goes to the airport.", aKo: "이 버스 공항 가요." },
        wrong: { "yes where can i getting on": "can I 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Which stop is it?", why: "‘어느 정류장이에요?’라는 말이에요." } }
    ]
  };
})(window.EP);
