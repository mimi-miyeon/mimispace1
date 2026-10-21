/* 세션 207. That's what ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[207] = {
    no: 207, form: "That's what ~.", stem: "That's what", meaning: "그게 바로 ~예요.",
    hint: "That's what + 주어 + 동사",
    intro: {
      blocks: [["That's", "그게 바로"], ["what ~", "~한 것이다"]],
      lines: [
        "That's what + 주어 + 동사는 ‘그게 바로 ~한 거야’예요.",
        "what은 ‘~한 것’이에요. (That's what I mean: 내 말이 그거야)",
        "That's what I thought.(나도 그렇게 생각했어)처럼 맞장구칠 때 자주 써요."
      ],
      examples: [
        { en: "That's what I mean.", ko: "내 말이 그거야." },
        { en: "That's what I thought.", ko: "나도 그렇게 생각했어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내 말이 그거야.", before: "That's what I", after: ".", answers: ["mean"],
        wrong: { "meant": "지금 하는 말이라 mean을 써요.", "means": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Exactly.", why: "‘바로 그거야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나도 그렇게 생각했어.", before: "That's", after: "I thought.", answers: ["what"],
        wrong: { "that": "‘~한 것’은 what이에요.", "why": "‘~한 것’은 what이에요." },
        tip: { en: "I thought so too.", why: "‘나도 그렇게 생각했어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그게 내가 원하는 거야.", before: "That's what I", after: ".", answers: ["want"],
        wrong: { "wants": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "That's exactly it.", why: "‘딱 그거야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그게 그녀가 한 말이야.", before: "That's what she", after: ".", answers: ["said"],
        wrong: { "say": "지난 일이라 said를 써요.", "says": "지난 일이라 said를 써요." },
        tip: { en: "Her words, not mine.", why: "‘내 말이 아니라 그녀 말이야’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그게 친구 좋다는 거지.", before: "", after: "what friends are for.", answers: ["That's"],
        wrong: { "it is": "‘그게 바로 ~야’는 That's what이에요." },
        tip: { en: "Anytime.", why: "‘언제든지’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그게 내가 필요한 거야.", answers: ["That's what I need."],
        wrong: { "that is what i needs": "I 뒤에는 동사에 s를 붙이지 않아요.", "that is that i need": "‘~한 것’은 what이에요." },
        tip: { en: "Just what I needed.", why: "‘딱 필요했던 거야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그게 내가 하려던 말이야.", answers: ["That's what I was going to say.", "That's what I wanted to say.", "That's what I was trying to say."],
        wrong: { "that is what i was going to said": "to 뒤에는 동사 원래 모양 say를 써요." },
        tip: { en: "You read my mind.", why: "‘내 마음 읽었네’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그게 내가 좋아하는 거야.", answers: ["That's what I like.", "That's what I love."],
        wrong: { "that is what i likes": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "That's my favorite.", why: "‘그게 제일 좋아’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그게 다들 하는 말이야.", answers: ["That's what everyone says.", "That's what everybody says."],
        wrong: { "that is what everyone say": "everyone 뒤에는 동사에 s를 붙여요. says예요." },
        tip: { en: "Everyone says so.", why: "‘다들 그렇게 말해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그게 내가 들은 거야.", answers: ["That's what I heard."],
        ctx: { lead: "thought 대신 ‘들은(heard)’으로 바꿔 보세요.", en: "That's what I thought." },
        wrong: { "that is what i hear": "지난 일이라 heard를 써요." },
        tip: { en: "That's the rumor.", why: "rumor는 ‘소문’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그러니까, 내 말이 그거야.", answers: ["Right, that's what I mean.", "Exactly, that's what I mean.", "That's what I mean.", "Yes, that's what I mean."],
        dialog: { a: "So you think we should wait?", aKo: "그러니까 우리가 기다려야 한다는 거지?" },
        wrong: { "right that is what i meant": "지금 하는 말이라 mean을 써요." },
        tip: { en: "Exactly!", why: "‘바로 그거야!’라는 말이에요." } }
    ]
  };
})(window.EP);
