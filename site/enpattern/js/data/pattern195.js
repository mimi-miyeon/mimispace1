/* 세션 195. I would like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[195] = {
    no: 195, form: "I would like ~.", stem: "I would like/I'd like", meaning: "나는 ~을 원해요.",
    hint: "I would like + 명사",
    intro: {
      blocks: [["I would like", "나는 원해요"], ["~", "명사"]],
      lines: [
        "I would like + 명사는 ‘~ 주세요 / ~을 원해요’예요. I want보다 공손해요.",
        "말할 때는 I'd like로 줄여요.",
        "동사를 쓸 때는 I'd like to + 동사예요. (I'd like to order.)"
      ],
      examples: [
        { en: "I'd like a coffee, please.", ko: "커피 한 잔 주세요." },
        { en: "I'd like a window seat.", ko: "창가 자리로 주세요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "커피 한 잔 주세요.", before: "I'd like a", after: ", please.", answers: ["coffee"],
        wrong: { "coffees": "a 뒤에는 하나만 써요." },
        tip: { en: "Coffee, please.", why: "‘커피 주세요’를 짧게 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "창가 자리로 주세요.", before: "I'd", after: "a window seat.", answers: ["like"],
        wrong: { "want": "공손하게는 I'd like예요.", "likes": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Window, please.", why: "‘창가요’를 짧게 말해요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "영수증 주세요.", before: "I'd like a", after: ", please.", answers: ["receipt"],
        wrong: { "recipe": "recipe는 ‘요리법’이에요. ‘영수증’은 receipt예요." },
        tip: { en: "Can I get a receipt?", why: "‘영수증 받을 수 있어요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "물 좀 주세요.", before: "I would like some", after: ".", answers: ["water"],
        wrong: { "waters": "water는 s를 붙이지 않아요." },
        tip: { en: "Water, please.", why: "‘물 주세요’를 짧게 말해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "방 하나 주세요.", before: "", after: "like a room, please.", answers: ["I'd"],
        wrong: { "i": "‘~ 주세요’는 I'd like예요. would가 필요해요." },
        tip: { en: "Do you have a room?", why: "‘방 있어요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이거 하나 주세요.", answers: ["I'd like this one, please.", "I'd like this one.", "I would like this one."],
        wrong: { "i like this one please": "‘~ 주세요’는 I'd like예요. would가 필요해요.", "i would likes this one": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "This one, please.", why: "‘이거요’를 짧게 말해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "두 사람 테이블 주세요.", answers: ["I'd like a table for two.", "I'd like a table for two, please."],
        wrong: { "i would like a table for two people people": "‘두 사람 테이블’은 a table for two예요." },
        tip: { en: "Table for two, please.", why: "‘두 명이요’를 짧게 말해요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "환불 받고 싶어요.", answers: ["I'd like a refund.", "I'd like a refund, please."],
        wrong: { "i would like refund": "refund는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Can I get my money back?", why: "‘돈 돌려받을 수 있어요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "작은 사이즈로 주세요.", answers: ["I'd like a small, please.", "I'd like a small one.", "I'd like a small size.", "I'd like a small."],
        wrong: { "i would like small": "a를 붙여 a small이에요." },
        tip: { en: "Small, please.", why: "‘작은 거요’를 짧게 말해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "차 한 잔 주세요.", answers: ["I'd like a tea, please.", "I'd like a cup of tea, please.", "I'd like some tea, please.", "I'd like a cup of tea."],
        ctx: { lead: "coffee 대신 ‘차(tea)’로 바꿔 보세요.", en: "I'd like a coffee, please." },
        wrong: { "i would like a teas please": "a 뒤에는 하나만 써요." },
        tip: { en: "Tea, please.", why: "‘차 주세요’를 짧게 말해요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "치즈버거 하나 주세요.", answers: ["I'd like a cheeseburger, please.", "I'd like a cheeseburger.", "I would like a cheeseburger."],
        dialog: { a: "What can I get for you?", aKo: "뭐 드릴까요?" },
        wrong: { "i would like cheeseburger": "cheeseburger는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "A cheeseburger, please.", why: "‘치즈버거 하나요’라는 말이에요." } }
    ]
  };
})(window.EP);
