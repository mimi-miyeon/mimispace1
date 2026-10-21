/* 세션 88. This/That is for ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[88] = {
    no: 88, form: "This/That is for ~.", stem: "This is for/That is for", meaning: "이것은/저것은 ~을 위한 거예요.",
    hint: "This/That is for + 명사/대명사",
    intro: {
      blocks: [["This / That is", "이것 / 저것은 ~이다"], ["for ~", "~을 위한 것"]],
      lines: [
        "This is for ~는 ‘이건 ~ 거야 / ~을 위한 거야’예요.",
        "for 뒤에는 사람(you, my mom)이나 쓰임(the party)을 써요.",
        "선물을 줄 때 This is for you!라고 자주 말해요."
      ],
      examples: [
        { en: "This is for you.", ko: "이거 너 주는 거야." },
        { en: "That is for the party.", ko: "그건 파티용이야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이거 엄마 드릴 거야.", before: "This is", after: "my mom.", answers: ["for"],
        wrong: { "to": "‘~을 위한 것’은 to가 아니라 for를 써요." },
        tip: { en: "I got this for my mom.", why: "get ~ for는 ‘~에게 주려고 사다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이건 우리 거야.", before: "This is for", after: ".", answers: ["us"],
        wrong: { "we": "for 뒤에는 we가 아니라 us를 써요.", "our": "for 뒤에는 our가 아니라 us를 써요." },
        tip: { en: "This is ours.", why: "ours는 ‘우리 것’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그건 아이들을 위한 거야.", before: "That is for", after: ".", answers: ["kids", "children"],
        wrong: { "kid": "‘아이들’은 여러 명이라 kids예요.", "childs": "child의 여러 명은 children이에요." },
        tip: { en: "It's made for kids.", why: "made for는 ‘~용으로 만든’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이거 너 주는 거야.", before: "", after: "is for you.", answers: ["This"],
        wrong: { "these": "하나는 this예요." },
        tip: { en: "I got you something.", why: "‘너 주려고 뭐 샀어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "저건 비상용이야.", before: "That is for", after: ".", answers: ["emergencies"],
        wrong: { "emergency": "‘비상시’는 보통 emergencies로 써요." },
        tip: { en: "Only use that in an emergency.", why: "in an emergency는 ‘비상시에’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이건 네 생일 선물이야.", answers: ["This is for your birthday."],
        wrong: { "this is for you birthday": "‘너의’는 you가 아니라 your예요.", "this is to your birthday": "‘~을 위한 것’은 to가 아니라 for를 써요." },
        tip: { en: "Happy birthday! Here you go.", why: "Here you go는 ‘자, 여기’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이건 여행 갈 때 쓸 거야.", answers: ["This is for the trip.", "This is for our trip."],
        wrong: { "this is for trip": "trip 앞에는 the나 our를 붙여요." },
        tip: { en: "I'm saving this for the trip.", why: "save는 ‘아껴 두다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이건 두통약이야.", answers: ["This is for headaches.", "This is for a headache."],
        wrong: { "this is for headache": "headache는 셀 수 있는 말이라 a를 붙이거나 headaches로 써요." },
        tip: { en: "Take this for your headache.", why: "‘두통 있을 때 이거 먹어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그건 회사용이야.", answers: ["That is for work."],
        wrong: { "that is for the work": "‘회사 일’은 the 없이 work예요." },
        tip: { en: "I use that for work.", why: "use ~ for는 ‘~용으로 쓰다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이거 우리 아빠 드릴 거야.", answers: ["This is for my dad.", "This is for my father."],
        ctx: { lead: "you 대신 ‘우리 아빠(my dad)’로 바꿔 보세요.", en: "This is for you." },
        wrong: { "this is to my dad": "‘~을 위한 것’은 to가 아니라 for를 써요." },
        tip: { en: "I got this for my dad.", why: "get ~ for는 ‘~에게 주려고 사다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "안 돼! 그건 손님용이야.", answers: ["No! That is for the guests.", "No! That is for our guests.", "No! That is for guests."],
        dialog: { a: "Can I eat this cake?", aKo: "이 케이크 먹어도 돼?" },
        wrong: { "no that is to the guests": "‘~을 위한 것’은 to가 아니라 for를 써요." },
        tip: { en: "Sorry, it's for the guests.", why: "Sorry로 시작해도 돼요." } }
    ]
  };
})(window.EP);
