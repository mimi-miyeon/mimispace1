/* 세션 182. How about ... for ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[182] = {
    no: 182, form: "How about ... for ~?", stem: "How about", meaning: "~로 ...는 어때요?",
    hint: "How about + 명사 + for + 명사?",
    intro: {
      blocks: [["How about ...", "...은 어때"], ["for ~?", "~로"]],
      lines: [
        "How about A for B?는 ‘B로 A 어때?’예요. (How about pasta for dinner?: 저녁으로 파스타 어때?)",
        "for 뒤에는 식사, 선물, 행사 같은 명사를 써요.",
        "for lunch, for dessert, for her birthday처럼 써요."
      ],
      examples: [
        { en: "How about pasta for dinner?", ko: "저녁으로 파스타 어때?" },
        { en: "How about a scarf for her birthday?", ko: "그녀 생일 선물로 스카프 어때?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "저녁으로 파스타 어때?", before: "How about pasta", after: "dinner?", answers: ["for"],
        wrong: { "to": "‘~로’는 for예요.", "at": "‘저녁으로’는 for dinner예요." },
        tip: { en: "Pasta sounds good.", why: "‘파스타 좋다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "디저트로 아이스크림 어때?", before: "How about ice cream for", after: "?", answers: ["dessert"],
        wrong: { "desert": "desert는 ‘사막’이에요. ‘디저트’는 dessert예요." },
        tip: { en: "I'm too full for dessert.", why: "‘디저트 먹기엔 너무 배불러’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "점심으로 샌드위치 어때?", before: "How", after: "sandwiches for lunch?", answers: ["about"],
        wrong: { "for": "‘~ 어때?’는 How about이에요." },
        tip: { en: "Let's grab a sandwich.", why: "grab은 ‘간단히 먹다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그녀 생일 선물로 꽃 어때?", before: "How about flowers for her", after: "?", answers: ["birthday"],
        wrong: { "birth": "‘생일’은 birthday예요." },
        tip: { en: "She loves flowers.", why: "‘그녀는 꽃을 좋아해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "아침으로 토스트 어때?", before: "How about toast for", after: "?", answers: ["breakfast"],
        wrong: { "the breakfast": "‘아침으로’는 the 없이 for breakfast예요." },
        tip: { en: "Toast is quick.", why: "‘토스트는 빨라’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "저녁으로 치킨 어때?", answers: ["How about chicken for dinner?"],
        wrong: { "how about chicken to dinner": "‘저녁으로’는 for dinner예요.", "how about chicken for the dinner": "‘저녁으로’는 the 없이 for dinner예요." },
        tip: { en: "Let's order chicken.", why: "order는 ‘주문하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "아빠 선물로 넥타이 어때?", answers: ["How about a tie for Dad?", "How about a tie for your dad?", "How about a tie for my dad?"],
        wrong: { "how about tie for dad": "tie는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Dad will love it.", why: "‘아빠가 좋아하실 거야’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "점심으로 국수 어때?", answers: ["How about noodles for lunch?"],
        wrong: { "how about noodle for lunch": "국수는 보통 noodles라고 해요." },
        tip: { en: "Something light?", why: "‘가벼운 거?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이름으로 미미 어때?", answers: ["How about Mimi for a name?", "How about Mimi for the name?", "How about Mimi for her name?"],
        wrong: { "how about mimi to a name": "‘이름으로’는 for a name이에요." },
        tip: { en: "That's cute.", why: "‘귀엽다’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "간식으로 과일 어때?", answers: ["How about fruit for a snack?", "How about some fruit for a snack?"],
        ctx: { lead: "pasta for dinner 대신 ‘간식으로 과일(fruit for a snack)’로 바꿔 보세요.", en: "How about pasta for dinner?" },
        wrong: { "how about fruit for snack": "snack은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Fruit is healthy.", why: "healthy는 ‘건강에 좋은’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "저녁으로 스테이크 어때?", answers: ["How about steak for dinner?"],
        dialog: { a: "What should we eat tonight?", aKo: "오늘 저녁 뭐 먹지?" },
        wrong: { "how about steak to dinner": "‘저녁으로’는 for dinner예요." },
        tip: { en: "Steak sounds perfect.", why: "‘스테이크 완벽하다’라는 말이에요." } }
    ]
  };
})(window.EP);
