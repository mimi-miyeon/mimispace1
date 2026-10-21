/* 세션 21. I like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[21] = {
    no: 21, form: "I like ~.", stem: "I like", meaning: "나는 ~을 좋아해요.",
    hint: "I like + 명사/대명사",
    intro: {
      blocks: [["I", "나는"], ["like", "좋아하다"], ["~", "무엇"]],
      lines: [
        "like는 ‘좋아하다’예요. 뒤에 좋아하는 것을 바로 붙여요.",
        "종류 전체를 좋아할 때는 여러 개로 써요. (I like dogs)",
        "I 뒤에는 like 그대로, he·she 뒤에는 likes예요."
      ],
      examples: [
        { en: "I like coffee.", ko: "나 커피 좋아해." },
        { en: "I like your bag.", ko: "네 가방 마음에 들어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 고양이 좋아해.", before: "I", after: "cats.", answers: ["like"],
        wrong: { "likes": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요.", "am like": "like는 동사라서 앞에 am을 쓰지 않아요." },
        tip: { en: "I'm a cat person.", why: "‘나 고양이파야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 강아지 좋아해.", before: "I like", after: ".", answers: ["dogs"],
        wrong: { "dog": "종류 전체를 좋아할 때는 여러 개(dogs)로 써요." },
        tip: { en: "I love dogs.", why: "love는 like보다 더 좋아한다는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 여름 좋아해.", before: "I", after: "summer.", answers: ["like"],
        wrong: { "likes": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요.", "am like": "like는 동사라서 앞에 am을 쓰지 않아요." },
        tip: { en: "Summer is my favorite season.", why: "favorite은 ‘가장 좋아하는’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네 신발 마음에 들어.", before: "I like", after: "shoes.", answers: ["your"],
        wrong: { "you": "‘너의’는 you가 아니라 your예요." },
        tip: { en: "Nice shoes!", why: "짧게 칭찬할 때 이렇게 말해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그 노래 좋아해.", before: "I", after: "that song.", answers: ["like"],
        wrong: { "likes": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요." },
        tip: { en: "That song is so good.", why: "‘그 노래 진짜 좋아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 매운 음식 좋아해.", answers: ["I like spicy food."],
        wrong: { "i like spicy foods": "food는 보통 셀 수 없는 말이라 s를 붙이지 않아요.", "i am like spicy food": "like는 동사라서 앞에 am을 쓰지 않아요." },
        tip: { en: "I'm into spicy food.", why: "be into는 ‘~에 빠져 있다, 좋아하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 이 카페 좋아해.", answers: ["I like this cafe.", "I like this coffee shop."],
        wrong: { "i likes this cafe": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요." },
        tip: { en: "This cafe is my favorite.", why: "favorite은 ‘가장 좋아하는 것’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 공포 영화 좋아해.", answers: ["I like horror movies.", "I like scary movies.", "I like horror films."],
        wrong: { "i like horror movie": "종류 전체를 좋아할 때는 여러 개(movies)로 써요." },
        tip: { en: "I'm a big fan of horror movies.", why: "big fan of는 ‘~을 아주 좋아하는’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네 머리 스타일 마음에 들어.", answers: ["I like your hair.", "I like your hairstyle.", "I like your haircut."],
        wrong: { "i like you hair": "‘너의’는 you가 아니라 your예요.", "i like your hairs": "머리카락 전체는 hair로 써요. s를 붙이지 않아요." },
        tip: { en: "Your hair looks great.", why: "‘머리 잘 어울려’라는 칭찬이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 차 좋아해.", answers: ["I like tea."],
        ctx: { lead: "coffee 대신 ‘차(tea)’를 넣어 보세요.", en: "I like coffee." },
        wrong: { "i like a tea": "tea는 보통 셀 수 없는 말이라 a를 붙이지 않아요." },
        tip: { en: "I'm a tea person.", why: "‘나 차파야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "거기 사람들이 좋아.", answers: ["I like the people there.", "I like the people."],
        dialog: { a: "How's your new job?", aKo: "새 직장 어때?" },
        wrong: { "i like the peoples there": "people은 이미 여러 명이라 s를 붙이지 않아요." },
        tip: { en: "The people there are nice.", why: "‘거기 사람들 좋아’라는 말이에요." } }
    ]
  };
})(window.EP);
