/* 세션 194. How would you like ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[194] = {
    no: 194, form: "How would you like ~?", stem: "How would you like", meaning: "~을 어떻게 해 드릴까요?",
    hint: "How would you like + 명사/to + 동사?",
    intro: {
      blocks: [["How", "어떻게"], ["would you like ~?", "원하시나요"]],
      lines: [
        "How would you like + 명사?는 ‘~을 어떻게 해 드릴까요?’예요. 방식을 물어요.",
        "스테이크 굽기, 계란 요리, 결제 방법을 물을 때 자주 들어요.",
        "How would you like to + 동사?(어떻게 ~하시겠어요?)도 써요."
      ],
      examples: [
        { en: "How would you like your steak?", ko: "스테이크 어떻게 구워 드릴까요?" },
        { en: "How would you like to pay?", ko: "어떻게 계산하시겠어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "스테이크 어떻게 구워 드릴까요?", before: "How would you like your", after: "?", answers: ["steak"],
        wrong: { "steaks": "스테이크 하나라 steak예요." },
        tip: { en: "Medium, please.", why: "‘미디엄으로 주세요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떻게 계산하시겠어요?", before: "How would you like to", after: "?", answers: ["pay"],
        wrong: { "paying": "to 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "Cash or card?", why: "‘현금이요 카드요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "계란 어떻게 해 드릴까요?", before: "How would you", after: "your eggs?", answers: ["like"],
        wrong: { "want": "공손하게는 would you like예요." },
        tip: { en: "Scrambled, please.", why: "scrambled는 ‘스크램블’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "커피 어떻게 드릴까요?", before: "How", after: "you like your coffee?", answers: ["would"],
        wrong: { "do": "‘어떻게 해 드릴까요?’는 How would you like예요." },
        tip: { en: "Black, please.", why: "black은 ‘블랙’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "머리 어떻게 해 드릴까요?", before: "", after: "would you like your hair?", answers: ["How"],
        wrong: { "what": "방식을 물을 때는 How예요." },
        tip: { en: "Just a trim, please.", why: "trim은 ‘다듬기’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어떻게 보내 드릴까요?", answers: ["How would you like it sent?", "How would you like to send it?", "How would you like us to send it?"],
        wrong: { "how would you like it send": "‘보내지는’은 sent예요.", "how you would like to send it": "물을 때는 would를 you 앞에 써요." },
        tip: { en: "By mail or email?", why: "‘우편이요 이메일이요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이거 어떻게 포장해 드릴까요?", answers: ["How would you like this wrapped?", "How would you like it wrapped?"],
        wrong: { "how would you like this wrap": "‘포장된’은 wrapped예요." },
        tip: { en: "Gift wrap, please.", why: "gift wrap은 ‘선물 포장’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "감자는 어떻게 해 드릴까요?", answers: ["How would you like your potatoes?", "How would you like the potatoes?"],
        wrong: { "how would you like your potatos": "potato의 여러 개는 potatoes예요." },
        tip: { en: "Mashed, please.", why: "mashed는 ‘으깬’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떻게 받으시겠어요?", answers: ["How would you like to receive it?", "How would you like to get it?"],
        wrong: { "how would you like to receiving it": "to 뒤에는 동사 원래 모양 receive를 써요." },
        tip: { en: "Delivery or pickup?", why: "‘배달이요 픽업이요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "차 어떻게 드릴까요?", answers: ["How would you like your tea?"],
        ctx: { lead: "steak 대신 ‘차(tea)’로 바꿔 보세요.", en: "How would you like your steak?" },
        wrong: { "how would you like your teas": "tea는 보통 s를 붙이지 않아요." },
        tip: { en: "With milk, please.", why: "‘우유 넣어 주세요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네. 어떻게 결제하시겠어요?", answers: ["Sure. How would you like to pay?", "Okay. How would you like to pay?", "How would you like to pay?"],
        dialog: { a: "I'll take this one.", aKo: "이걸로 할게요." },
        wrong: { "sure how would you like to paying": "to 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "Cash or card?", why: "‘현금이요 카드요?’라는 말이에요." } }
    ]
  };
})(window.EP);
