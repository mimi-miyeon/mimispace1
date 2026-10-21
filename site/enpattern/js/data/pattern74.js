/* 세션 74. I wish you wouldn't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[74] = {
    no: 74, form: "I wish you wouldn't ~.", stem: "I wish you wouldn't", meaning: "당신이 ~하지 않길 바라요.",
    hint: "I wish you wouldn't + 동사",
    intro: {
      blocks: [["I wish", "~했으면 좋겠다"], ["you wouldn't ~", "네가 ~하지 않는다"]],
      lines: [
        "I wish you wouldn't ~는 ‘네가 ~ 안 했으면 좋겠어’예요. 상대의 행동이 불편할 때 부드럽게 말해요.",
        "wouldn't 뒤에는 동사 원래 모양을 써요.",
        "Don't ~보다 덜 직접적인 말이에요."
      ],
      examples: [
        { en: "I wish you wouldn't smoke.", ko: "네가 담배 안 피웠으면 좋겠어." },
        { en: "I wish you wouldn't say that.", ko: "네가 그런 말 안 했으면 좋겠어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네가 늦지 않았으면 좋겠어.", before: "I wish you", after: "be late.", answers: ["wouldn't"],
        wrong: { "do not": "I wish 뒤에는 don't가 아니라 wouldn't를 써요.", "will not": "I wish 뒤에는 won't가 아니라 wouldn't를 써요." },
        tip: { en: "Please be on time.", why: "‘제시간에 와 줘’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 소리 안 질렀으면 좋겠어.", before: "I wish you wouldn't", after: ".", answers: ["yell", "shout"],
        wrong: { "yelling": "wouldn't 뒤에는 동사 원래 모양 yell을 써요." },
        tip: { en: "Please lower your voice.", why: "lower your voice는 ‘목소리를 낮추다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네가 그렇게 걱정 안 했으면 좋겠어.", before: "I wish you wouldn't", after: "so much.", answers: ["worry"],
        wrong: { "worried": "wouldn't 뒤에는 동사 원래 모양 worry를 써요." },
        tip: { en: "Try not to worry.", why: "‘걱정하지 않도록 해 봐’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네가 나 안 놀렸으면 좋겠어.", before: "I", after: "you wouldn't tease me.", answers: ["wish"],
        wrong: { "hope": "‘네가 ~ 안 했으면 좋겠어’는 I wish you wouldn't예요." },
        tip: { en: "Please stop teasing me.", why: "stop ~ing는 ‘~을 그만하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 그거 안 만졌으면 좋겠어.", before: "I wish", after: "wouldn't touch that.", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘네가’는 you예요." },
        tip: { en: "Please don't touch that.", why: "Please don't는 ‘~하지 말아 줘’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네가 그렇게 빨리 운전 안 했으면 좋겠어.", answers: ["I wish you wouldn't drive so fast.", "I wish you wouldn't drive that fast."],
        wrong: { "i wish you would not driving so fast": "wouldn't 뒤에는 동사 원래 모양 drive를 써요.", "i wish you do not drive so fast": "I wish 뒤에는 don't가 아니라 wouldn't를 써요." },
        tip: { en: "Please slow down.", why: "slow down은 ‘속도를 줄이다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네가 밤늦게 전화 안 했으면 좋겠어.", answers: ["I wish you wouldn't call so late.", "I wish you wouldn't call me so late.", "I wish you wouldn't call late at night."],
        wrong: { "i wish you will not call so late": "I wish 뒤에는 won't가 아니라 wouldn't를 써요." },
        tip: { en: "Please don't call after ten.", why: "‘10시 넘어서는 전화하지 말아 줘’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네가 거짓말 안 했으면 좋겠어.", answers: ["I wish you wouldn't lie.", "I wish you wouldn't lie to me."],
        wrong: { "i wish you would not lying": "wouldn't 뒤에는 동사 원래 모양 lie를 써요." },
        tip: { en: "Please be honest with me.", why: "be honest with는 ‘~에게 솔직하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네가 그렇게 많이 안 마셨으면 좋겠어.", answers: ["I wish you wouldn't drink so much.", "I wish you wouldn't drink that much."],
        wrong: { "i wish you would not drink so many": "마시는 양은 many가 아니라 much예요." },
        tip: { en: "You should drink less.", why: "‘덜 마셔야 해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 안 떠났으면 좋겠어.", answers: ["I wish you wouldn't leave.", "I wish you wouldn't go."],
        ctx: { lead: "smoke 대신 ‘떠나다(leave)’로 바꿔 보세요.", en: "I wish you wouldn't smoke." },
        wrong: { "i wish you would not leaving": "wouldn't 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Please stay.", why: "‘있어 줘’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그렇게 서두르지 않았으면 좋겠어.", answers: ["I wish you wouldn't rush.", "I wish you wouldn't rush it.", "I wish you wouldn't be in such a hurry."],
        dialog: { a: "I'm going to quit my job tomorrow.", aKo: "나 내일 회사 그만둘 거야." },
        wrong: { "i wish you do not rush": "I wish 뒤에는 don't가 아니라 wouldn't를 써요." },
        tip: { en: "Maybe think about it more.", why: "‘좀 더 생각해 봐’라는 말이에요." } }
    ]
  };
})(window.EP);
