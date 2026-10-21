/* 세션 134. There is no use ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[134] = {
    no: 134, form: "There is no use ~.", stem: "There's no use/There is no use", meaning: "~해도 소용없어요.",
    hint: "There is no use + 동사-ing",
    intro: {
      blocks: [["There's no use", "소용없다"], ["~ing", "~해도"]],
      lines: [
        "There is no use + 동사-ing는 ‘~해도 소용없어’예요.",
        "use 뒤에는 to가 아니라 동사-ing를 써요. (no use crying)",
        "It's no use ~ing도 같은 뜻이에요."
      ],
      examples: [
        { en: "There's no use crying.", ko: "울어도 소용없어." },
        { en: "There's no use waiting.", ko: "기다려도 소용없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "울어도 소용없어.", before: "There's no use", after: ".", answers: ["crying"],
        wrong: { "cry": "use 뒤에는 동사에 ing를 붙여요. crying이에요.", "to cry": "use 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Tears won't help.", why: "tear는 ‘눈물’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "기다려도 소용없어.", before: "There's no use", after: ".", answers: ["waiting"],
        wrong: { "wait": "use 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "He's not coming.", why: "‘걔 안 와’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "싸워도 소용없어.", before: "There's no", after: "fighting.", answers: ["use"],
        wrong: { "used": "‘소용’은 use예요." },
        tip: { en: "Let's talk instead.", why: "‘대신 얘기하자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "후회해도 소용없어.", before: "There's no use", after: "it.", answers: ["regretting"],
        wrong: { "regret": "use 뒤에는 동사에 ing를 붙여요. regretting이에요." },
        tip: { en: "What's done is done.", why: "‘이미 일어난 일은 어쩔 수 없어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "불평해도 소용없어.", before: "There's", after: "use complaining.", answers: ["no"],
        wrong: { "not": "명사 앞에서는 not이 아니라 no를 써요." },
        tip: { en: "Let's fix it.", why: "‘고치자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그와 말해 봐도 소용없어.", answers: ["There's no use talking to him.", "There's no use talking with him."],
        wrong: { "there is no use to talk to him": "use 뒤에는 to 대신 동사-ing를 써요.", "there is no use talk to him": "use 뒤에는 동사에 ing를 붙여요. talking이에요." },
        tip: { en: "He never listens.", why: "‘걔는 절대 안 들어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "걱정해도 소용없어.", answers: ["There's no use worrying.", "There's no use worrying about it."],
        wrong: { "there is no use worry": "use 뒤에는 동사에 ing를 붙여요. worrying이에요." },
        tip: { en: "It is what it is.", why: "‘어쩔 수 없지’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 고치려 해도 소용없어.", answers: ["There's no use trying to fix it."],
        wrong: { "there is no use try to fix it": "use 뒤에는 동사에 ing를 붙여요. trying이에요." },
        tip: { en: "Just get a new one.", why: "‘그냥 새로 사’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "거짓말해도 소용없어.", answers: ["There's no use lying."],
        wrong: { "there is no use lieing": "lie는 ie를 y로 바꿔 lying이에요.", "there is no use to lie": "use 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "I know the truth.", why: "‘나 진실 알아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "뛰어도 소용없어.", answers: ["There's no use running."],
        ctx: { lead: "crying 대신 ‘뛰다(running)’로 바꿔 보세요.", en: "There's no use crying." },
        wrong: { "there is no use runing": "run은 n을 하나 더 붙여 running이에요." },
        tip: { en: "We already missed it.", why: "‘이미 놓쳤어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 하지만 사과해도 소용없어.", answers: ["Yes, but there's no use apologizing.", "Yeah, but there's no use apologizing."],
        dialog: { a: "Should I say sorry to her?", aKo: "걔한테 미안하다고 할까?" },
        wrong: { "yes but there is no use apologize": "use 뒤에는 동사에 ing를 붙여요. apologizing이에요." },
        tip: { en: "She's still too angry.", why: "‘걔 아직 너무 화나 있어’라는 말이에요." } }
    ]
  };
})(window.EP);
