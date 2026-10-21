/* 세션 118. I'd better ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[118] = {
    no: 118, form: "I'd better ~.", stem: "I'd better", meaning: "내가 ~하는 게 좋겠어요.",
    hint: "I'd better + 동사",
    intro: {
      blocks: [["I'd better", "나는 ~하는 게 좋겠다"], ["~", "동사"]],
      lines: [
        "I'd better + 동사는 ‘나 ~하는 게 좋겠어 / ~해야겠다’예요.",
        "I'd는 I had를 줄인 말이에요. better 뒤에는 동사 원래 모양을 써요.",
        "‘~하지 않는 게 좋겠어’는 I'd better not + 동사예요."
      ],
      examples: [
        { en: "I'd better go.", ko: "나 가 봐야겠어." },
        { en: "I'd better hurry.", ko: "서둘러야겠다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 가 봐야겠어.", before: "I'd better", after: ".", answers: ["go"],
        wrong: { "going": "better 뒤에는 동사 원래 모양 go를 써요.", "to go": "better 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "I've got to run.", why: "‘얼른 가야 해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "서둘러야겠다.", before: "I'd", after: "hurry.", answers: ["better"],
        wrong: { "rather": "‘~하는 게 좋겠어’는 I'd better예요.", "best": "‘~하는 게 좋겠어’는 I'd better예요." },
        tip: { en: "I'm running late.", why: "run late는 ‘늦어지다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그거 다시 확인해야겠어.", before: "I'd better", after: "it again.", answers: ["check"],
        wrong: { "checking": "better 뒤에는 동사 원래 모양 check를 써요." },
        tip: { en: "Just to be sure.", why: "‘확실히 하려고’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "늦지 않는 게 좋겠어.", before: "I'd better", after: "be late.", answers: ["not"],
        wrong: { "do not": "‘~하지 않는 게 좋겠어’는 better not이에요.", "no": "‘~하지 않는 게 좋겠어’는 better not이에요." },
        tip: { en: "I can't be late again.", why: "‘또 늦으면 안 돼’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "엄마한테 전화해야겠다.", before: "", after: "better call my mom.", answers: ["I'd"],
        wrong: { "i": "‘~하는 게 좋겠어’는 I'd better예요." },
        tip: { en: "Mom's waiting.", why: "‘엄마가 기다려’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 이제 자야겠어.", answers: ["I'd better go to bed now.", "I'd better go to sleep now.", "I'd better sleep now."],
        wrong: { "i would better going to bed now": "better 뒤에는 동사 원래 모양 go를 써요.", "i better go to bed now": "‘~하는 게 좋겠어’는 I'd better예요." },
        tip: { en: "It's getting late.", why: "‘늦었다’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우산 가져가야겠다.", answers: ["I'd better take an umbrella.", "I'd better bring an umbrella."],
        wrong: { "i would better take umbrella": "umbrella 앞에는 an을 붙여요." },
        tip: { en: "It looks like rain.", why: "‘비 올 것 같아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 지금 출발하는 게 좋겠어.", answers: ["I'd better leave now.", "I'd better go now.", "I'd better get going."],
        wrong: { "i would better to leave now": "better 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Traffic will be bad.", why: "traffic은 ‘교통량’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 안 먹는 게 좋겠어.", answers: ["I'd better not eat that.", "I'd better not eat it."],
        wrong: { "i would better do not eat that": "‘~하지 않는 게 좋겠어’는 better not이에요." },
        tip: { en: "I'm on a diet.", why: "‘나 다이어트 중이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 공부해야겠다.", answers: ["I'd better study."],
        ctx: { lead: "go 대신 ‘공부하다(study)’로 바꿔 보세요.", en: "I'd better go." },
        wrong: { "i would better studying": "better 뒤에는 동사 원래 모양 study를 써요." },
        tip: { en: "Exams are coming.", why: "‘시험이 다가와’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 나 지금 가야겠다.", answers: ["Then I'd better go now.", "I'd better go now.", "Then I'd better leave now.", "I'd better leave now."],
        dialog: { a: "The last bus leaves in ten minutes.", aKo: "막차가 10분 뒤에 떠나." },
        wrong: { "then i would better going now": "better 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Oh no, I have to run.", why: "‘이런, 뛰어가야겠다’라는 말이에요." } }
    ]
  };
})(window.EP);
