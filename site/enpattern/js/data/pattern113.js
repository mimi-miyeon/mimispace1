/* 세션 113. I'm getting used to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[113] = {
    no: 113, form: "I'm getting used to ~.", stem: "I'm getting used to", meaning: "나는 ~에 익숙해지고 있어요.",
    hint: "I'm getting used to + 명사",
    intro: {
      blocks: [["I'm getting used", "나는 익숙해지는 중이다"], ["to ~", "~에"]],
      lines: [
        "I'm getting used to ~는 ‘~에 점점 익숙해지고 있어’예요.",
        "to 뒤에는 명사나 동사-ing를 써요. (getting used to living alone)",
        "‘익숙해졌어’는 I got used to ~예요."
      ],
      examples: [
        { en: "I'm getting used to it.", ko: "나 그거 점점 익숙해지고 있어." },
        { en: "I'm getting used to the new job.", ko: "새 일에 익숙해지고 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "점점 익숙해지고 있어.", before: "I'm getting used to", after: ".", answers: ["it"],
        wrong: { "this": "‘그것에 익숙해지다’는 used to it이에요." },
        tip: { en: "It's getting easier.", why: "‘점점 쉬워지고 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "새 동네에 익숙해지고 있어.", before: "I'm", after: "used to the new neighborhood.", answers: ["getting"],
        wrong: { "get": "I'm 뒤에는 getting을 써요." },
        tip: { en: "I'm settling in.", why: "settle in은 ‘자리 잡다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "일찍 일어나는 거에 익숙해지고 있어.", before: "I'm getting used to", after: "up early.", answers: ["getting"],
        wrong: { "get": "to 뒤에는 동사에 ing를 붙여요. getting이에요." },
        tip: { en: "Mornings are easier now.", why: "‘아침이 이제 더 쉬워’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "한국 음식에 익숙해지고 있어.", before: "I'm getting", after: "to Korean food.", answers: ["used"],
        wrong: { "use": "‘익숙해지다’는 get used to예요." },
        tip: { en: "I love kimchi now.", why: "‘이젠 김치 좋아해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "새 폰에 익숙해지고 있어.", before: "I'm getting used", after: "my new phone.", answers: ["to"],
        wrong: { "with": "‘~에 익숙해지다’는 used to예요." },
        tip: { en: "I'm figuring it out.", why: "figure out은 ‘알아내다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "새 일에 익숙해지고 있어.", answers: ["I'm getting used to my new job.", "I'm getting used to the new job.", "I'm getting used to my new work."],
        wrong: { "i am get used to my new job": "I'm 뒤에는 getting을 써요.", "i am getting use to my new job": "‘익숙해지다’는 used to예요. d를 붙여요." },
        tip: { en: "I'm learning the ropes.", why: "learn the ropes는 ‘요령을 익히다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "혼자 사는 거에 익숙해지고 있어.", answers: ["I'm getting used to living alone.", "I'm getting used to living by myself."],
        wrong: { "i am getting used to live alone": "to 뒤에는 동사에 ing를 붙여요. living이에요." },
        tip: { en: "I like my own space.", why: "‘내 공간이 좋아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "추위에 익숙해지고 있어.", answers: ["I'm getting used to the cold."],
        wrong: { "i am getting used to the colds": "‘추위’는 the cold예요. s를 붙이지 않아요." },
        tip: { en: "It's not so bad now.", why: "‘이젠 그렇게 나쁘지 않아’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "여기 날씨에 익숙해지고 있어.", answers: ["I'm getting used to the weather here."],
        wrong: { "i am getting used to the weathers here": "weather는 s를 붙이지 않아요." },
        tip: { en: "I'm adjusting to the weather.", why: "adjust to는 ‘적응하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "새 학교에 익숙해지고 있어.", answers: ["I'm getting used to my new school.", "I'm getting used to the new school."],
        ctx: { lead: "the new job 대신 ‘새 학교(my new school)’로 바꿔 보세요.", en: "I'm getting used to the new job." },
        wrong: { "i am getting used to new school": "school 앞에 my나 the를 붙여요." },
        tip: { en: "I made some friends.", why: "‘친구 좀 사귀었어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 점점 익숙해지고 있어.", answers: ["Yes, I'm getting used to it.", "Yeah, I'm getting used to it."],
        dialog: { a: "Is it still hard to work at night?", aKo: "아직 밤에 일하는 거 힘들어?" },
        wrong: { "yes i am get used to it": "I'm 뒤에는 getting을 써요." },
        tip: { en: "Yes, it's getting easier.", why: "‘응, 점점 쉬워지고 있어’라는 말이에요." } }
    ]
  };
})(window.EP);
