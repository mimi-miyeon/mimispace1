/* 세션 181. How about ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[181] = {
    no: 181, form: "How about ~?", stem: "How about", meaning: "~은 어때요?",
    hint: "How about + 명사/대명사?",
    intro: {
      blocks: [["How about", "~은 어때"], ["~?", "명사"]],
      lines: [
        "How about + 명사?는 ‘~은 어때?’예요. 가볍게 제안할 때 써요.",
        "How about you?는 ‘너는?’이라는 뜻이에요.",
        "시간·장소를 제안할 때도 써요. (How about 7?: 7시 어때?)"
      ],
      examples: [
        { en: "How about pizza?", ko: "피자 어때?" },
        { en: "How about you?", ko: "너는?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "피자 어때?", before: "How", after: "pizza?", answers: ["about"],
        wrong: { "for": "‘~ 어때?’는 How about이에요." },
        tip: { en: "Pizza sounds good.", why: "‘피자 좋다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너는?", before: "How about", after: "?", answers: ["you"],
        wrong: { "your": "about 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "What about you?", why: "What about you?도 같은 뜻이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "토요일 어때?", before: "How about", after: "?", answers: ["Saturday"],
        wrong: { "on saturdays": "하루를 제안할 때는 Saturday예요." },
        tip: { en: "Are you free Saturday?", why: "‘토요일에 시간 돼?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "7시 어때?", before: "How about", after: "o'clock?", answers: ["seven"],
        tip: { en: "Does seven work?", why: "work는 ‘괜찮다’라는 뜻도 있어요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이거 어때?", before: "", after: "about this one?", answers: ["How"],
        wrong: { "what": "여기서는 How about이에요." },
        tip: { en: "Do you like this one?", why: "‘이거 마음에 들어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "커피 어때?", answers: ["How about coffee?", "How about some coffee?", "How about a coffee?"],
        wrong: { "how about a coffees": "coffee는 보통 s를 붙이지 않아요.", "how for coffee": "‘~ 어때?’는 How about이에요." },
        tip: { en: "Coffee break?", why: "‘커피 타임?’이라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내일 어때?", answers: ["How about tomorrow?"],
        wrong: { "how about the tomorrow": "tomorrow 앞에는 the를 붙이지 않아요." },
        tip: { en: "Is tomorrow okay?", why: "‘내일 괜찮아?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "저 식당 어때?", answers: ["How about that restaurant?", "How about that place?"],
        wrong: { "how about this restaurant": "멀리 있는 건 that을 써요." },
        tip: { en: "Let's try that place.", why: "‘저기 가 보자’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "파란 거 어때?", answers: ["How about the blue one?", "How about blue?"],
        wrong: { "how about the blue": "‘파란 거’는 the blue one이에요." },
        tip: { en: "Blue suits you.", why: "suit는 ‘어울리다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "치킨 어때?", answers: ["How about chicken?", "How about some chicken?", "How about fried chicken?"],
        ctx: { lead: "pizza 대신 ‘치킨(chicken)’으로 바꿔 보세요.", en: "How about pizza?" },
        wrong: { "how about a chickens": "음식으로서 chicken은 a도 s도 붙이지 않아요." },
        tip: { en: "Chicken sounds great.", why: "‘치킨 좋다’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아, 너는?", answers: ["Good, how about you?", "I'm good, how about you?", "Fine, how about you?", "Great, how about you?"],
        dialog: { a: "How are you doing?", aKo: "잘 지내?" },
        wrong: { "good how about your": "about 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "Good, and you?", why: "and you?도 ‘너는?’이에요." } }
    ]
  };
})(window.EP);
