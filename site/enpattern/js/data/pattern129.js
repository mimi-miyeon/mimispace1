/* 세션 129. Look at ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[129] = {
    no: 129, form: "Look at ~.", stem: "Look at", meaning: "~을 보세요.",
    hint: "Look at + 명사",
    intro: {
      blocks: [["Look", "봐"], ["at ~", "~을"]],
      lines: [
        "Look at ~은 ‘~ 좀 봐’예요. 눈길을 끌 때 써요.",
        "look 뒤에 보는 대상을 쓸 때는 at이 꼭 필요해요. (Look the sky ×)",
        "Look at you!는 ‘너 좀 봐! (멋지다/웬일이야)’라는 뜻이에요."
      ],
      examples: [
        { en: "Look at this.", ko: "이것 좀 봐." },
        { en: "Look at the sky.", ko: "하늘 좀 봐." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이것 좀 봐.", before: "Look", after: "this.", answers: ["at"],
        wrong: { "to": "‘~을 보다’는 look at이에요." },
        tip: { en: "Check this out.", why: "check out은 ‘한번 보다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "하늘 좀 봐.", before: "Look at the", after: ".", answers: ["sky"],
        wrong: { "skies": "‘하늘’은 sky예요." },
        tip: { en: "The sky is beautiful.", why: "‘하늘 예쁘다’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 봐.", before: "Look at", after: ".", answers: ["me"],
        wrong: { "my": "at 뒤에는 my가 아니라 me를 써요.", "i": "at 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "Eyes on me.", why: "‘나 봐’를 짧게 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "저 강아지 좀 봐.", before: "", after: "at that puppy.", answers: ["Look"],
        wrong: { "see": "‘~ 좀 봐’는 Look at이에요.", "watch": "‘~ 좀 봐’는 Look at이에요." },
        tip: { en: "How cute!", why: "‘귀엽다!’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "시간 좀 봐.", before: "Look at the", after: ".", answers: ["time"],
        wrong: { "clock": "‘시간 좀 봐’는 Look at the time이에요." },
        tip: { en: "It's so late.", why: "‘너무 늦었다’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 사진 좀 봐.", answers: ["Look at this picture.", "Look at this photo."],
        wrong: { "look this picture": "look 뒤에 at을 붙여요.", "see at this picture": "‘~ 좀 봐’는 Look at이에요." },
        tip: { en: "Check out this photo.", why: "check out은 ‘한번 보다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "저 사람들 좀 봐.", answers: ["Look at those people."],
        wrong: { "look at that people": "여러 사람이라 those를 써요.", "look at those peoples": "‘사람들’은 people이에요. s를 붙이지 않아요." },
        tip: { en: "What are they doing?", why: "‘저 사람들 뭐 해?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 좀 봐! 멋지다!", answers: ["Look at you! You look great!", "Look at you! You look amazing!", "Look at you! You look good!"],
        wrong: { "look at your you look great": "at 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "Wow, you look great!", why: "‘와, 멋지다!’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이 엉망진창 좀 봐.", answers: ["Look at this mess."],
        wrong: { "look at this messy": "‘엉망’은 명사 mess예요." },
        tip: { en: "What a mess!", why: "‘완전 엉망이네!’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "저 차 좀 봐.", answers: ["Look at that car."],
        ctx: { lead: "the sky 대신 ‘저 차(that car)’로 바꿔 보세요.", en: "Look at the sky." },
        wrong: { "look at this car": "멀리 있는 건 that을 써요." },
        tip: { en: "Nice car!", why: "‘차 멋지다!’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "저 눈 좀 봐!", answers: ["Look at the snow!", "Look at all the snow!"],
        dialog: { a: "Why are you so excited?", aKo: "왜 이렇게 신났어?" },
        wrong: { "look the snow": "look 뒤에 at을 붙여요." },
        tip: { en: "It's snowing!", why: "‘눈 온다!’라는 말이에요." } }
    ]
  };
})(window.EP);
