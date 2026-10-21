/* 세션 44. I'm happy to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[44] = {
    no: 44, form: "I'm happy to ~.", stem: "I'm happy to", meaning: "나는 ~해서 기뻐요.",
    hint: "I'm happy to + 동사",
    intro: {
      blocks: [["I'm happy", "나는 기쁘다"], ["to ~", "~하게 돼서"]],
      lines: [
        "I'm happy to + 동사는 ‘~하게 돼서 기뻐’예요. glad to와 뜻이 비슷해요.",
        "‘기꺼이 ~할게’라는 뜻으로도 자주 써요. (I'm happy to help: 기꺼이 도울게)",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "I'm happy to help.", ko: "기꺼이 도울게." },
        { en: "I'm happy to be here.", ko: "여기 와서 기뻐." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "기꺼이 기다릴게.", before: "I'm happy", after: "wait.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "No problem, I can wait.", why: "‘괜찮아, 기다릴 수 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "기꺼이 설명해 줄게.", before: "I'm happy to", after: ".", answers: ["explain"],
        wrong: { "explaining": "to 뒤에는 동사 원래 모양 explain을 써요." },
        tip: { en: "Let me explain.", why: "Let me는 ‘내가 ~할게’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "널 도울 수 있어서 기뻐.", before: "I'm", after: "to help you.", answers: ["happy", "glad"],
        wrong: { "happily": "‘기쁜’은 happily가 아니라 happy예요." },
        tip: { en: "Anytime!", why: "‘언제든지!’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "같이 가 줄 수 있어서 좋아.", before: "I'm happy to", after: "with you.", answers: ["go", "come"],
        wrong: { "going": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I'd love to come along.", why: "come along은 ‘같이 가다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 기꺼이 빌려줄게.", before: "", after: "happy to lend it to you.", answers: ["I'm"],
        wrong: { "i": "‘기뻐’는 I 뒤에 am을 붙여 I'm happy예요." },
        tip: { en: "Sure, take it.", why: "‘그래, 가져가’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "기꺼이 질문에 답해 줄게.", answers: ["I'm happy to answer your questions.", "I'm happy to answer any questions."],
        wrong: { "i am happy to answering your questions": "to 뒤에는 동사 원래 모양 answer를 써요.", "i am happy to answer to your questions": "answer 뒤에는 to 없이 바로 써요." },
        tip: { en: "Feel free to ask.", why: "Feel free to는 ‘편하게 ~해’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 다시 봐서 기뻐.", answers: ["I'm happy to see you again."],
        wrong: { "i am happy to seeing you again": "to 뒤에는 동사 원래 모양 see를 써요.", "i happy to see you again": "‘기뻐’는 I 뒤에 am을 붙여 I'm happy예요." },
        tip: { en: "It's so good to see you again.", why: "‘다시 보니 정말 좋다’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 기꺼이 운전할게.", answers: ["I'm happy to drive."],
        wrong: { "i am happy to driving": "to 뒤에는 동사 원래 모양 drive를 써요." },
        tip: { en: "I'll drive.", why: "‘내가 운전할게’라는 짧은 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "같이 일하게 돼서 기뻐.", answers: ["I'm happy to work with you."],
        wrong: { "i am happy to work you": "‘~와 같이 일하다’는 work with예요." },
        tip: { en: "Looking forward to working together.", why: "‘같이 일하는 게 기대돼’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 기꺼이 낼게.", answers: ["I'm happy to pay."],
        ctx: { lead: "help 대신 ‘돈을 내다(pay)’로 바꿔 보세요.", en: "I'm happy to help." },
        wrong: { "i am happy to paying": "to 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "It's on me.", why: "‘내가 낼게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼, 기꺼이 할게.", answers: ["Sure, I'm happy to.", "Sure, I'm happy to show you around.", "Of course, I'm happy to."],
        dialog: { a: "Can you show me around?", aKo: "나 좀 구경시켜 줄래?" },
        wrong: { "sure i am happy": "‘기꺼이 할게’는 happy 뒤에 to를 붙여 I'm happy to예요." },
        tip: { en: "Sure, I'd love to.", why: "I'd love to는 ‘정말 그러고 싶어’예요." } }
    ]
  };
})(window.EP);
