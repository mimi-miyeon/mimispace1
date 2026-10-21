/* 세션 92. It's clear to me ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[92] = {
    no: 92, form: "It's clear to me ~.", stem: "It's clear to me", meaning: "~인 것이 분명해요.",
    hint: "It's clear to me (that) + 주어 + 동사",
    intro: {
      blocks: [["It's clear to me", "나한테는 분명하다"], ["(that) ~", "~라는 것이"]],
      lines: [
        "It's clear to me (that) ~는 ‘~라는 게 분명해 보여’예요. 내 판단을 확신 있게 말해요.",
        "that 뒤에는 ‘주어 + 동사’를 써요. 말할 때는 that을 빼기도 해요.",
        "to me를 빼고 It's clear that ~이라고도 해요."
      ],
      examples: [
        { en: "It's clear to me that he's lying.", ko: "걔가 거짓말하는 게 분명해." },
        { en: "It's clear to me that you're tired.", ko: "너 피곤한 게 분명해 보여." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네가 옳은 게 분명해.", before: "It's clear to me", after: "you're right.", answers: ["that"],
        wrong: { "what": "‘~라는 것’은 what이 아니라 that이에요.", "if": "‘~라는 것’은 if가 아니라 that이에요." },
        tip: { en: "You're obviously right.", why: "obviously는 ‘분명히’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "우리가 길을 잃은 게 분명해.", before: "It's clear to me that we're", after: ".", answers: ["lost"],
        wrong: { "lose": "‘길 잃은’은 lost예요." },
        tip: { en: "I think we're lost.", why: "I think로 덜 확신하게 말해요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그녀가 행복한 게 분명해.", before: "It's", after: "to me that she's happy.", answers: ["clear"],
        wrong: { "clearly": "‘분명한’은 clearly가 아니라 clear예요." },
        tip: { en: "She looks so happy.", why: "‘정말 행복해 보여’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "걔가 널 좋아하는 게 분명해.", before: "It's clear to me that he", after: "you.", answers: ["likes"],
        wrong: { "like": "he 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "He obviously likes you.", why: "obviously는 ‘분명히’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이건 효과가 없는 게 분명해.", before: "It's clear to", after: "that this doesn't work.", answers: ["me"],
        wrong: { "my": "‘나에게’는 to me예요.", "i": "to 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "This isn't working.", why: "‘이거 효과 없어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그가 화난 게 분명해.", answers: ["It's clear to me that he's angry.", "It's clear to me that he's upset."], alts: ["It's clear to me he's angry."],
        wrong: { "it is clear to me that he angry": "angry 앞에 is가 필요해요. he's angry예요." },
        tip: { en: "He's obviously angry.", why: "obviously는 ‘분명히’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그건 실수였던 게 분명해.", answers: ["It's clear to me that it was a mistake.", "It's clear to me that that was a mistake."],
        wrong: { "it is clear to me that it was mistake": "mistake는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "That was clearly a mistake.", why: "clearly는 ‘분명히’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 더 연습해야 하는 게 분명해.", answers: ["It's clear to me that we need more practice.", "It's clear to me that we need to practice more."],
        wrong: { "it is clear to me that we needs more practice": "we 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "We obviously need more practice.", why: "obviously는 ‘분명히’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그 사람이 진심인 게 분명해.", answers: ["It's clear to me that he's serious.", "It's clear to me that he means it."],
        wrong: { "it is clear to me that he serious": "serious 앞에 is가 필요해요. he's serious예요." },
        tip: { en: "He really means it.", why: "mean it은 ‘진심이다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그녀가 아픈 게 분명해.", answers: ["It's clear to me that she's sick.", "It's clear to me that she's ill."],
        ctx: { lead: "he's lying 대신 ‘그녀가 아프다(she's sick)’로 바꿔 보세요.", en: "It's clear to me that he's lying." },
        wrong: { "it is clear to me that she sick": "sick 앞에 is가 필요해요. she's sick이에요." },
        tip: { en: "She must be sick.", why: "must be는 ‘분명 ~일 거야’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그녀가 지루했던 게 분명해.", answers: ["It's clear to me that she was bored."],
        dialog: { a: "Why do you think she left early?", aKo: "걔가 왜 일찍 간 것 같아?" },
        wrong: { "it is clear to me that she was boring": "boring은 ‘지루하게 하는’이에요. 지루했으면 bored예요." },
        tip: { en: "She was obviously bored.", why: "obviously는 ‘분명히’예요." } }
    ]
  };
})(window.EP);
