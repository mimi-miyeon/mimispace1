/* 세션 213. I was going to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[213] = {
    no: 213, form: "I was going to ~.", stem: "I was going to/I was just going to", meaning: "난 ~하려고 했어요.",
    hint: "I was going to + 동사",
    intro: {
      blocks: [["I was going", "나는 ~하려고 했다"], ["to ~", "~하는 것을"]],
      lines: [
        "I was going to + 동사는 ‘~하려고 했어 (근데 못 했어 / 안 했어)’예요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "말할 때는 I was gonna ~로 들리기도 해요."
      ],
      examples: [
        { en: "I was going to call you.", ko: "너한테 전화하려고 했어." },
        { en: "I was going to tell you.", ko: "너한테 말하려고 했어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너한테 전화하려고 했어.", before: "I was going to", after: "you.", answers: ["call"],
        wrong: { "calling": "to 뒤에는 동사 원래 모양 call을 써요.", "called": "to 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "I forgot to call.", why: "‘전화하는 거 깜빡했어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너한테 말하려고 했어.", before: "I was going to", after: "you.", answers: ["tell"],
        wrong: { "say": "‘~에게 말하다’는 tell you예요." },
        tip: { en: "I didn't get the chance.", why: "‘기회가 없었어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그거 사려고 했어.", before: "I was", after: "to buy it.", answers: ["going"],
        wrong: { "go": "I was 뒤에는 going을 써요." },
        tip: { en: "But it was sold out.", why: "‘근데 매진이었어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 일찍 자려고 했어.", before: "I", after: "going to go to bed early.", answers: ["was"],
        wrong: { "am": "지난 일이라 was를 써요.", "were": "I 뒤에는 was예요." },
        tip: { en: "But I watched TV.", why: "‘근데 TV 봤어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 거기 가려고 했어.", before: "I was going", after: "go there.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I changed my mind.", why: "‘마음 바꿨어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 너 도와주려고 했어.", answers: ["I was going to help you."],
        wrong: { "i was going to helping you": "to 뒤에는 동사 원래 모양 help를 써요.", "i am going to help you": "지난 일이라 was를 써요." },
        tip: { en: "I meant to help.", why: "mean to는 ‘~하려고 하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그거 지금 막 하려고 했어.", answers: ["I was just going to do it.", "I was going to do it now.", "I was just going to do that."],
        wrong: { "i was just going to did it": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Okay, okay, I'm on it.", why: "on it은 ‘하고 있어’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 운동하려고 했어.", answers: ["I was going to work out today.", "I was going to exercise today."],
        wrong: { "i was going to working out today": "to 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Maybe tomorrow.", why: "‘내일 하지 뭐’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 너한테 물어보려고 했어.", answers: ["I was going to ask you."],
        wrong: { "i was going to asking you": "to 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "Good question.", why: "‘좋은 질문이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너한테 문자하려고 했어.", answers: ["I was going to text you."],
        ctx: { lead: "call 대신 ‘문자하다(text)’로 바꿔 보세요.", en: "I was going to call you." },
        wrong: { "i was going to texting you": "to 뒤에는 동사 원래 모양 text를 써요." },
        tip: { en: "My phone died.", why: "‘폰이 꺼졌어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 말하려고 했어.", answers: ["Sorry, I was going to tell you.", "I'm sorry, I was going to tell you.", "Sorry, I was going to tell you about it."],
        dialog: { a: "Why didn't you tell me you were moving?", aKo: "이사 간다고 왜 말 안 했어?" },
        wrong: { "sorry i was going to told you": "to 뒤에는 동사 원래 모양 tell을 써요." },
        tip: { en: "I should have told you.", why: "‘말했어야 했는데’라는 말이에요." } }
    ]
  };
})(window.EP);
