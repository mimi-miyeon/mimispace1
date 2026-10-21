/* 세션 93. It's not about ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[93] = {
    no: 93, form: "It's not about ~.", stem: "It's not about", meaning: "이건 ~하고는 상관없어요.",
    hint: "It's not about + 명사/동사-ing",
    intro: {
      blocks: [["It's not", "그건 아니다"], ["about ~", "~에 관한 것이"]],
      lines: [
        "It's not about ~는 ‘~가 문제가 아니야 / ~에 관한 게 아니야’예요.",
        "about 뒤에는 명사(money)나 동사-ing(winning)를 써요.",
        "뒤에 It's about ~(~가 중요한 거야)를 이어서 자주 말해요."
      ],
      examples: [
        { en: "It's not about money.", ko: "돈이 문제가 아니야." },
        { en: "It's not about winning.", ko: "이기는 게 중요한 게 아니야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너에 관한 게 아니야.", before: "It's not about", after: ".", answers: ["you"],
        wrong: { "your": "about 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "This has nothing to do with you.", why: "have nothing to do with는 ‘~와 상관없다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "시간 문제가 아니야.", before: "It's not", after: "time.", answers: ["about"],
        wrong: { "for": "‘~가 문제가 아니야’는 It's not about이에요." },
        tip: { en: "Time isn't the issue.", why: "issue는 ‘문제’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "외모가 중요한 게 아니야.", before: "It's not about", after: ".", answers: ["looks"],
        wrong: { "look": "‘외모’는 looks예요." },
        tip: { en: "Looks don't matter.", why: "matter는 ‘중요하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "점수가 중요한 게 아니야.", before: "It's not about the", after: ".", answers: ["score", "scores", "grade", "grades"],
        tip: { en: "The score doesn't matter.", why: "matter는 ‘중요하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "돈이 문제가 아니야.", before: "", after: "not about money.", answers: ["It's"],
        wrong: { "i am": "‘~가 문제가 아니야’는 It's not about이에요." },
        tip: { en: "Money isn't the point.", why: "point는 ‘핵심’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나에 관한 얘기가 아니야.", answers: ["It's not about me."],
        wrong: { "it is not about i": "about 뒤에는 I가 아니라 me를 써요.", "it is not about my": "about 뒤에는 my가 아니라 me를 써요." },
        tip: { en: "This isn't about me.", why: "This isn't로 말해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "실수하는 게 문제가 아니야.", answers: ["It's not about making mistakes."],
        wrong: { "it is not about make mistakes": "about 뒤에는 동사에 ing를 붙여요. making이에요." },
        tip: { en: "Mistakes are okay.", why: "‘실수해도 괜찮아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "음식 문제가 아니야.", answers: ["It's not about the food."],
        wrong: { "it is not about the foods": "food는 보통 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "The food isn't the problem.", why: "problem은 ‘문제’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "누가 이기는지가 중요한 게 아니야.", answers: ["It's not about who wins."],
        wrong: { "it is not about who win": "who 뒤에는 동사에 s를 붙여요. wins예요." },
        tip: { en: "Winning isn't everything.", why: "‘이기는 게 전부가 아니야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "일 문제가 아니야.", answers: ["It's not about work."],
        ctx: { lead: "money 대신 ‘일(work)’로 바꿔 보세요.", en: "It's not about money." },
        wrong: { "it is not about the works": "‘일’이라는 뜻의 work는 s를 붙이지 않아요." },
        tip: { en: "Work isn't the problem.", why: "‘일이 문제가 아니야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 돈 문제가 아니야.", answers: ["No, it's not about the money.", "No, it's not about money."],
        dialog: { a: "Is this about the money I owe you?", aKo: "내가 너한테 빌린 돈 때문이야?" },
        wrong: { "no it is not for the money": "‘~가 문제가 아니야’는 It's not about이에요." },
        tip: { en: "No, the money doesn't matter.", why: "matter는 ‘중요하다’예요." } }
    ]
  };
})(window.EP);
