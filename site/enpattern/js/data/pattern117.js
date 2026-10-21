/* 세션 117. I'd rather not ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[117] = {
    no: 117, form: "I'd rather not ~.", stem: "I'd rather not", meaning: "~하고 싶지 않아요.",
    hint: "I'd rather not + 동사",
    intro: {
      blocks: [["I'd rather not", "나는 차라리 안 하겠다"], ["~", "동사"]],
      lines: [
        "I'd rather not + 동사는 ‘~하지 않는 게 좋겠어 / 별로 ~하고 싶지 않아’예요.",
        "I don't want to보다 부드럽게 거절할 때 써요.",
        "not 뒤에는 동사 원래 모양을 써요. I'd rather not.만 말해도 돼요."
      ],
      examples: [
        { en: "I'd rather not say.", ko: "말 안 하는 게 좋겠어." },
        { en: "I'd rather not talk about it.", ko: "그 얘기는 별로 하고 싶지 않아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "말 안 하는 게 좋겠어.", before: "I'd rather not", after: ".", answers: ["say"],
        wrong: { "saying": "not 뒤에는 동사 원래 모양 say를 써요.", "to say": "not 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "It's private.", why: "private은 ‘사적인’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "오늘은 별로 나가고 싶지 않아.", before: "I'd rather", after: "go out today.", answers: ["not"],
        wrong: { "no": "‘~하지 않는 게 좋겠어’는 rather not이에요.", "do not": "‘~하지 않는 게 좋겠어’는 rather not이에요." },
        tip: { en: "I'm staying in.", why: "stay in은 ‘집에 있다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "기다리고 싶지 않아.", before: "I'd rather not", after: ".", answers: ["wait"],
        wrong: { "waiting": "not 뒤에는 동사 원래 모양 wait를 써요." },
        tip: { en: "Let's just go.", why: "‘그냥 가자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 얘기는 안 하고 싶어.", before: "I'd rather not talk", after: "it.", answers: ["about"],
        wrong: { "of": "‘~에 대해 얘기하다’는 talk about이에요." },
        tip: { en: "Can we change the subject?", why: "subject는 ‘주제’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "운전 안 하는 게 좋겠어.", before: "I'd", after: "not drive.", answers: ["rather"],
        wrong: { "better": "‘~하지 않는 게 좋겠어’는 rather not이에요." },
        tip: { en: "I'm too tired to drive.", why: "‘운전하기엔 너무 피곤해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "오늘 밤엔 술 안 마시고 싶어.", answers: ["I'd rather not drink tonight."],
        wrong: { "i would rather not drinking tonight": "not 뒤에는 동사 원래 모양 drink를 써요.", "i would not rather drink tonight": "not은 rather 뒤에 써요. rather not이에요." },
        tip: { en: "I'll skip drinks tonight.", why: "skip은 ‘건너뛰다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "거기 혼자 가고 싶지 않아.", answers: ["I'd rather not go there alone."],
        wrong: { "i would rather not to go there alone": "not 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Will you come with me?", why: "‘같이 가 줄래?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "지금은 결정 안 하는 게 좋겠어.", answers: ["I'd rather not decide now.", "I'd rather not decide right now."],
        wrong: { "i would rather not decision now": "decision은 명사예요. 동사 decide를 써요." },
        tip: { en: "Let me think about it.", why: "‘생각 좀 해 볼게’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그 사람이랑 일하고 싶지 않아.", answers: ["I'd rather not work with him.", "I'd rather not work with her."],
        wrong: { "i would rather not working with him": "not 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "We don't get along.", why: "get along은 ‘사이좋게 지내다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그 얘기는 듣고 싶지 않아.", answers: ["I'd rather not hear about it.", "I'd rather not hear it."],
        ctx: { lead: "say 대신 ‘듣다(hear about it)’로 바꿔 보세요.", en: "I'd rather not say." },
        wrong: { "i would rather not hearing about it": "not 뒤에는 동사 원래 모양 hear를 써요." },
        tip: { en: "Spare me the details.", why: "‘자세한 얘긴 빼 줘’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "음, 별로 안 하고 싶어.", answers: ["Well, I'd rather not.", "I'd rather not."],
        dialog: { a: "Do you want to sing a song?", aKo: "노래 한 곡 할래?" },
        wrong: { "well i would not rather": "not은 rather 뒤에 써요. rather not이에요." },
        tip: { en: "Maybe next time.", why: "‘다음에’라는 말이에요." } }
    ]
  };
})(window.EP);
