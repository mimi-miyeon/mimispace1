/* 세션 193. What would you like to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[193] = {
    no: 193, form: "What would you like to ~?", stem: "What would you like to", meaning: "무엇을 ~하시겠어요?",
    hint: "What would you like to + 동사?",
    intro: {
      blocks: [["What would you like", "무엇을 원하시나요"], ["to ~?", "~하는 것을"]],
      lines: [
        "What would you like to + 동사?는 ‘뭘 ~하시겠어요? / 뭐 ~할래?’예요.",
        "What do you want to ~?보다 공손해요.",
        "식당에서 What would you like to order?(뭐 주문하시겠어요?)를 자주 들어요."
      ],
      examples: [
        { en: "What would you like to drink?", ko: "뭐 마시겠어요?" },
        { en: "What would you like to do?", ko: "뭐 하고 싶어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "뭐 마시겠어요?", before: "What would you like to", after: "?", answers: ["drink"],
        wrong: { "drinking": "to 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "Anything to drink?", why: "‘마실 거 드릴까요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "뭐 주문하시겠어요?", before: "What would you like to", after: "?", answers: ["order"],
        wrong: { "ordering": "to 뒤에는 동사 원래 모양 order를 써요." },
        tip: { en: "Are you ready to order?", why: "‘주문하시겠어요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭐 하고 싶어요?", before: "What would you", after: "to do?", answers: ["like"],
        wrong: { "want": "would you 뒤에는 like to예요." },
        tip: { en: "Any ideas?", why: "‘좋은 생각 있어요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뭐 먹고 싶어요?", before: "What", after: "you like to eat?", answers: ["would"],
        wrong: { "do": "‘~하시겠어요?’는 What would you like to예요." },
        tip: { en: "What are you in the mood for?", why: "in the mood for는 ‘~이 당기는’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "뭐 보고 싶어요?", before: "What would you like", after: "see?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Your choice.", why: "‘네가 골라’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "뭐 사고 싶어요?", answers: ["What would you like to buy?", "What would you like to get?"],
        wrong: { "what would you like to buying": "to 뒤에는 동사 원래 모양 buy를 써요.", "what you would like to buy": "물을 때는 would를 you 앞에 써요." },
        tip: { en: "Just looking?", why: "‘그냥 구경하세요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "무엇을 알고 싶어요?", answers: ["What would you like to know?"],
        wrong: { "what would you like to knowing": "to 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "Ask me anything.", why: "‘뭐든 물어보세요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "뭐라고 말하고 싶어요?", answers: ["What would you like to say?"],
        wrong: { "what would you like to tell": "뭐라고 ‘말하다’는 say예요." },
        tip: { en: "Go ahead.", why: "‘말씀하세요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "디저트로 뭐 드시겠어요?", answers: ["What would you like to have for dessert?"], alts: ["What would you like for dessert?"],
        wrong: { "what would you like to have for desert": "desert는 ‘사막’이에요. ‘디저트’는 dessert예요." },
        tip: { en: "Any dessert?", why: "‘디저트 드실래요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "뭐 배우고 싶어요?", answers: ["What would you like to learn?"],
        ctx: { lead: "drink 대신 ‘배우다(learn)’로 바꿔 보세요.", en: "What would you like to drink?" },
        wrong: { "what would you like to learning": "to 뒤에는 동사 원래 모양 learn을 써요." },
        tip: { en: "Any new hobbies?", why: "‘새 취미 있어요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 뭐 하고 싶어요?", answers: ["Then what would you like to do?", "What would you like to do?", "So what would you like to do?"],
        dialog: { a: "I don't want to stay home today.", aKo: "오늘은 집에 있기 싫어." },
        wrong: { "then what would you like to doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Let's do something fun.", why: "‘재밌는 거 하자’라는 말이에요." } }
    ]
  };
})(window.EP);
