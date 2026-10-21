/* 세션 227. I'm willing to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[227] = {
    no: 227, form: "I'm willing to ~.", stem: "I'm willing to/I'm not willing to", meaning: "기꺼이 ~할 거예요.",
    hint: "I'm willing to + 동사",
    intro: {
      blocks: [["I'm willing", "나는 기꺼이 ~하겠다"], ["to ~", "~하는 것을"]],
      lines: [
        "I'm willing to + 동사는 ‘기꺼이 ~할 수 있어 / ~할 의향이 있어’예요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "‘~할 생각은 없어’는 I'm not willing to ~예요."
      ],
      examples: [
        { en: "I'm willing to help.", ko: "기꺼이 도울게." },
        { en: "I'm willing to wait.", ko: "기다릴 의향 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "기꺼이 도울게.", before: "I'm willing to", after: ".", answers: ["help"],
        wrong: { "helping": "to 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Count me in.", why: "‘나도 끼워 줘’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "기다릴 의향 있어.", before: "I'm", after: "to wait.", answers: ["willing"],
        wrong: { "will": "‘기꺼이 ~하는’은 willing이에요.", "wiling": "‘기꺼이 ~하는’은 willing이에요. l이 두 개예요." },
        tip: { en: "I'm patient.", why: "patient는 ‘참을성 있는’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 더 낼 의향 있어.", before: "I'm willing to pay", after: ".", answers: ["more"],
        wrong: { "much": "‘더’는 more예요." },
        tip: { en: "Quality matters.", why: "‘품질이 중요해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그건 할 생각 없어.", before: "I'm", after: "willing to do that.", answers: ["not"],
        wrong: { "no": "‘~할 생각 없어’는 I'm not willing to예요." },
        tip: { en: "That's a hard no.", why: "‘절대 안 돼’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "다시 해 볼 의향 있어.", before: "I'm willing", after: "try again.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Let's give it another shot.", why: "shot은 ‘시도’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 이사할 의향 있어.", answers: ["I'm willing to move."],
        wrong: { "i am willing to moving": "to 뒤에는 동사 원래 모양 move를 써요.", "i willing to move": "I 뒤에 am이 필요해요. I'm이에요." },
        tip: { en: "I'm open to it.", why: "be open to는 ‘~에 열려 있다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 배울 의향 있어.", answers: ["I'm willing to learn."],
        wrong: { "i am willing to learning": "to 뒤에는 동사 원래 모양 learn을 써요." },
        tip: { en: "I'm a fast learner.", why: "fast learner는 ‘빨리 배우는 사람’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 주말에도 일할 의향 있어.", answers: ["I'm willing to work on weekends.", "I'm willing to work weekends."],
        wrong: { "i am willing to work in weekends": "‘주말에’는 on weekends예요." },
        tip: { en: "I'm flexible.", why: "flexible은 ‘융통성 있는’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 타협할 의향 있어.", answers: ["I'm willing to compromise."],
        wrong: { "i am willing to compromising": "to 뒤에는 동사 원래 모양 compromise를 써요." },
        tip: { en: "Let's meet halfway.", why: "meet halfway는 ‘서로 양보하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "기꺼이 들을게.", answers: ["I'm willing to listen."],
        ctx: { lead: "help 대신 ‘듣다(listen)’로 바꿔 보세요.", en: "I'm willing to help." },
        wrong: { "i am willing to listening": "to 뒤에는 동사 원래 모양 listen을 써요." },
        tip: { en: "I'm all ears.", why: "‘귀 기울이고 있어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 기꺼이 해 볼게.", answers: ["Yes, I'm willing to try.", "Yeah, I'm willing to try.", "Yes, I'm willing to try it."],
        dialog: { a: "Would you try something new?", aKo: "새로운 거 해 볼래?" },
        wrong: { "yes i am willing to trying": "to 뒤에는 동사 원래 모양 try를 써요." },
        tip: { en: "Sure, why not?", why: "‘그래, 왜 안 돼?’라는 말이에요." } }
    ]
  };
})(window.EP);
