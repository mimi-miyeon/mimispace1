/* 세션 219. I think ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[219] = {
    no: 219, form: "I think ~.", stem: "I think/I don't think", meaning: "난 ~라고 생각해요.",
    hint: "I think (that) + 주어 + 동사",
    intro: {
      blocks: [["I think", "나는 생각한다"], ["(that) ~", "~라고"]],
      lines: [
        "I think (that) + 주어 + 동사는 ‘~인 것 같아 / ~라고 생각해’예요.",
        "말할 때는 that을 거의 빼요.",
        "‘~가 아닌 것 같아’는 I don't think ~예요. (I think he isn't ~보다 자연스러워요)"
      ],
      examples: [
        { en: "I think you're right.", ko: "네 말이 맞는 것 같아." },
        { en: "I don't think it's a good idea.", ko: "좋은 생각은 아닌 것 같아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네 말이 맞는 것 같아.", before: "I", after: "you're right.", answers: ["think"],
        wrong: { "thought": "지금 생각하는 거라 think를 써요.", "thinks": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "You've got a point.", why: "‘일리 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "좋은 생각은 아닌 것 같아.", before: "I", after: "think it's a good idea.", answers: ["don't"],
        wrong: { "am not": "think는 동사라 don't를 써요." },
        tip: { en: "I have my doubts.", why: "‘좀 의심스러워’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "비 올 것 같아.", before: "I think it's going to", after: ".", answers: ["rain"],
        wrong: { "rains": "going to 뒤에는 동사 원래 모양 rain을 써요." },
        tip: { en: "It looks cloudy.", why: "‘흐려 보여’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그녀가 너를 좋아하는 것 같아.", before: "I think she", after: "you.", answers: ["likes"],
        wrong: { "like": "she 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "She's into you.", why: "be into는 ‘~에게 빠져 있다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 길 잃은 것 같아.", before: "I think we're", after: ".", answers: ["lost"],
        wrong: { "lose": "‘길 잃은’은 lost예요." },
        tip: { en: "Let's check the map.", why: "‘지도 보자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그게 맞는 것 같아.", answers: ["I think that's right.", "I think that's correct.", "I think it's right."],
        wrong: { "i am think that is right": "think는 동사라 am을 붙이지 않아요.", "i think that right": "right 앞에 is가 필요해요." },
        tip: { en: "Sounds right.", why: "‘맞는 것 같아’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그가 안 올 것 같아.", answers: ["I don't think he's coming.", "I don't think he'll come.", "I don't think he will come."],
        wrong: { "i am not think he is coming": "think는 동사라 don't를 써요." },
        tip: { en: "He's always late.", why: "‘걔는 맨날 늦어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 감기 걸린 것 같아.", answers: ["I think I have a cold.", "I think I caught a cold.", "I think I've got a cold."],
        wrong: { "i think i have cold": "‘감기’는 a cold예요." },
        tip: { en: "I feel sick.", why: "‘몸이 안 좋아’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이게 더 나은 것 같아.", answers: ["I think this is better.", "I think this one is better."],
        wrong: { "i think this is more better": "better 앞에는 more를 붙이지 않아요." },
        tip: { en: "I prefer this one.", why: "prefer는 ‘더 좋아하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 틀린 것 같아.", answers: ["I think you're wrong."],
        ctx: { lead: "right 대신 ‘틀린(wrong)’으로 바꿔 보세요.", en: "I think you're right." },
        wrong: { "i think you wrong": "wrong 앞에 are가 필요해요. you're wrong이에요." },
        tip: { en: "Let's check again.", why: "‘다시 확인해 보자’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "음, 빨간 게 더 나은 것 같아.", answers: ["Well, I think the red one is better.", "I think the red one is better.", "Hmm, I think the red one is better."],
        dialog: { a: "Which one do you like, red or blue?", aKo: "빨간 거 파란 거 어느 게 좋아?" },
        wrong: { "well i think the red one is more better": "better 앞에는 more를 붙이지 않아요." },
        tip: { en: "Red looks great on you.", why: "‘빨강 잘 어울려’라는 말이에요." } }
    ]
  };
})(window.EP);
