/* 세션 215. I agree ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[215] = {
    no: 215, form: "I agree ~.", stem: "I agree/I don't agree/I totally agree", meaning: "나는 ~에 동의해요.",
    hint: "I agree with + 명사 / I agree that + 주어 + 동사",
    intro: {
      blocks: [["I agree", "나는 동의한다"], ["with ~ / that ~", "~에 / ~라는 데"]],
      lines: [
        "I agree with + 사람/의견은 ‘~에 동의해’예요. I agree that + 주어 + 동사는 ‘~라는 데 동의해’예요.",
        "agree는 동사라 am을 붙이지 않아요. (I'm agree ×)",
        "‘동의 안 해’는 I don't agree / I disagree예요."
      ],
      examples: [
        { en: "I agree with you.", ko: "네 말에 동의해." },
        { en: "I agree that it's too expensive.", ko: "너무 비싸다는 데 동의해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네 말에 동의해.", before: "I agree", after: "you.", answers: ["with"],
        wrong: { "to": "사람에 동의할 때는 agree with예요.", "on": "사람에 동의할 때는 agree with예요." },
        tip: { en: "You're right.", why: "‘네 말이 맞아’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너무 비싸다는 데 동의해.", before: "I agree", after: "it's too expensive.", answers: ["that"],
        wrong: { "what": "‘~라는 데’는 that이에요." },
        tip: { en: "It's way too pricey.", why: "pricey는 ‘비싼’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "완전 동의해.", before: "I totally", after: ".", answers: ["agree"],
        wrong: { "agreed": "지금 동의하니까 agree를 써요.", "agrees": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Absolutely.", why: "‘물론이지’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "난 동의 안 해.", before: "I", after: "agree.", answers: ["don't"],
        wrong: { "am not": "agree는 동사라 don't를 써요.", "not": "‘동의 안 해’는 I don't agree예요." },
        tip: { en: "I see it differently.", why: "‘나는 다르게 봐’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 점에는 동의해.", before: "I agree", after: "that.", answers: ["with"],
        wrong: { "about": "‘~에 동의하다’는 agree with예요." },
        tip: { en: "Fair point.", why: "‘맞는 말이야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그녀 말에 동의해.", answers: ["I agree with her."],
        wrong: { "i am agree with her": "agree는 동사라 am을 붙이지 않아요.", "i agree with she": "with 뒤에는 she가 아니라 her를 써요." },
        tip: { en: "She's right.", why: "‘그녀 말이 맞아’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리가 더 연습해야 한다는 데 동의해.", answers: ["I agree that we need more practice.", "I agree that we need to practice more."],
        wrong: { "i agree that we needs more practice": "we 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Practice makes perfect.", why: "‘연습하면 완벽해져’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 계획에 동의해.", answers: ["I agree with the plan.", "I agree with that plan.", "I agree to the plan."],
        wrong: { "i am agree with the plan": "agree는 동사라 am을 붙이지 않아요." },
        tip: { en: "Let's go with it.", why: "‘그걸로 가자’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네 말에 동의 안 해.", answers: ["I don't agree with you."], alts: ["I disagree with you."],
        wrong: { "i am not agree with you": "agree는 동사라 don't를 써요." },
        tip: { en: "I see your point, but...", why: "‘무슨 말인지 알겠는데…’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네 아이디어에 동의해.", answers: ["I agree with your idea."],
        ctx: { lead: "you 대신 ‘네 아이디어(your idea)’로 바꿔 보세요.", en: "I agree with you." },
        wrong: { "i agree to you idea": "‘너의’는 your예요." },
        tip: { en: "Great idea.", why: "‘좋은 생각이야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나도 동의해. 너무 길어.", answers: ["I agree. It's too long.", "I agree with you. It's too long.", "I totally agree. It's too long."],
        dialog: { a: "I think the meeting was too long.", aKo: "회의가 너무 길었던 것 같아." },
        wrong: { "i am agree it is too long": "agree는 동사라 am을 붙이지 않아요." },
        tip: { en: "Me too. It dragged on.", why: "drag on은 ‘질질 끌다’예요." } }
    ]
  };
})(window.EP);
