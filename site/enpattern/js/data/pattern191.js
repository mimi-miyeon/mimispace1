/* 세션 191. Would you like ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[191] = {
    no: 191, form: "Would you like ~?", stem: "Would you like", meaning: "~ 드릴까요?",
    hint: "Would you like + 명사/대명사?",
    intro: {
      blocks: [["Would you like", "원하시나요"], ["~?", "명사"]],
      lines: [
        "Would you like + 명사?는 ‘~ 드릴까요? / ~ 드실래요?’예요. 공손하게 권해요.",
        "Do you want ~?보다 훨씬 공손해요.",
        "대답은 Yes, please. / No, thank you.예요."
      ],
      examples: [
        { en: "Would you like some coffee?", ko: "커피 좀 드릴까요?" },
        { en: "Would you like a bag?", ko: "봉투 드릴까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "커피 좀 드릴까요?", before: "Would you like some", after: "?", answers: ["coffee"],
        wrong: { "coffees": "coffee는 보통 s를 붙이지 않아요." },
        tip: { en: "Can I get you a coffee?", why: "‘커피 갖다드릴까요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "봉투 드릴까요?", before: "Would you like a", after: "?", answers: ["bag"],
        wrong: { "bags": "a 뒤에는 하나만 써요. bag이에요." },
        tip: { en: "Do you need a bag?", why: "‘봉투 필요하세요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "디저트 드실래요?", before: "Would you", after: "dessert?", answers: ["like"],
        wrong: { "want": "공손하게 권할 때는 Would you like예요.", "likes": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Room for dessert?", why: "‘디저트 들어갈 자리 있어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "영수증 드릴까요?", before: "Would you like a", after: "?", answers: ["receipt"],
        wrong: { "recipe": "recipe는 ‘요리법’이에요. ‘영수증’은 receipt예요." },
        tip: { en: "Do you need a receipt?", why: "‘영수증 필요하세요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "물 좀 드릴까요?", before: "", after: "you like some water?", answers: ["Would"],
        wrong: { "do": "공손하게 권할 때는 Would you like예요." },
        tip: { en: "Can I get you some water?", why: "‘물 갖다드릴까요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "차 한잔 드릴까요?", answers: ["Would you like a cup of tea?", "Would you like some tea?"],
        wrong: { "would you like a cup of teas": "tea는 보통 s를 붙이지 않아요.", "would you likes some tea": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Tea or coffee?", why: "‘차 아니면 커피?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "한 조각 더 드실래요?", answers: ["Would you like another piece?", "Would you like one more piece?"],
        wrong: { "would you like other piece": "‘하나 더’는 another예요." },
        tip: { en: "Help yourself.", why: "‘마음껏 드세요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "메뉴판 드릴까요?", answers: ["Would you like a menu?", "Would you like the menu?"],
        wrong: { "would you like menu": "menu는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Here's the menu.", why: "‘메뉴판 여기 있어요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "도움이 필요하세요?", answers: ["Would you like some help?", "Would you like any help?"],
        wrong: { "would you like some helps": "help는 s를 붙이지 않아요." },
        tip: { en: "Can I help you?", why: "‘도와드릴까요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "주스 좀 드릴까요?", answers: ["Would you like some juice?"],
        ctx: { lead: "coffee 대신 ‘주스(juice)’로 바꿔 보세요.", en: "Would you like some coffee?" },
        wrong: { "would you like some juices": "juice는 보통 s를 붙이지 않아요." },
        tip: { en: "Orange or apple?", why: "‘오렌지 아니면 사과?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "담요 드릴까요?", answers: ["Would you like a blanket?"],
        dialog: { a: "It's a bit cold in here.", aKo: "여기 좀 춥네요." },
        wrong: { "would you like blanket": "blanket은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Let me turn up the heat.", why: "turn up the heat은 ‘난방을 올리다’예요." } }
    ]
  };
})(window.EP);
