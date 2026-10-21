/* 세션 206. I'm good at ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[206] = {
    no: 206, form: "I'm good at ~.", stem: "I'm good at/I'm not good at", meaning: "나는 ~을 잘 해요.",
    hint: "I'm good at + 명사/동사-ing",
    intro: {
      blocks: [["I'm good", "나는 잘한다"], ["at ~", "~을"]],
      lines: [
        "I'm good at + 명사/동사-ing는 ‘나 ~ 잘해’예요.",
        "at 뒤에는 명사(math)나 동사-ing(cooking)를 써요.",
        "‘~ 못해’는 I'm not good at ~, ‘~ 진짜 못해’는 I'm bad at ~예요."
      ],
      examples: [
        { en: "I'm good at cooking.", ko: "나 요리 잘해." },
        { en: "I'm not good at math.", ko: "나 수학 못해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 요리 잘해.", before: "I'm good at", after: ".", answers: ["cooking"],
        wrong: { "cook": "at 뒤에는 동사에 ing를 붙여요. cooking이에요.", "to cook": "at 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "I love to cook.", why: "‘요리하는 거 정말 좋아해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 수학 잘해.", before: "I'm good", after: "math.", answers: ["at"],
        wrong: { "in": "‘~을 잘하다’는 good at이에요.", "with": "‘~을 잘하다’는 good at이에요." },
        tip: { en: "Math is my thing.", why: "my thing은 ‘내 분야’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 노래 잘 못해.", before: "I'm not good at", after: ".", answers: ["singing"],
        wrong: { "sing": "at 뒤에는 동사에 ing를 붙여요. singing이에요." },
        tip: { en: "I can't sing.", why: "‘나 노래 못해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 이름 잘 기억해.", before: "I'm good at remembering", after: ".", answers: ["names"],
        wrong: { "name": "여러 사람 이름이라 names예요." },
        tip: { en: "I never forget a face.", why: "‘얼굴은 절대 안 잊어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그런 거 잘 못해.", before: "I'm", after: "good at that.", answers: ["not"],
        wrong: { "no": "‘~ 못해’는 I'm not good at이에요." },
        tip: { en: "That's not my thing.", why: "‘그건 내 분야가 아니야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 운전 잘해.", answers: ["I'm good at driving."],
        wrong: { "i am good at drive": "at 뒤에는 동사에 ing를 붙여요. driving이에요.", "i am good in driving": "‘~을 잘하다’는 good at이에요." },
        tip: { en: "I'm a good driver.", why: "driver는 ‘운전자’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 영어 잘 못해.", answers: ["I'm not good at English."],
        wrong: { "i am not good in english": "‘~을 잘하다’는 good at이에요.", "i do not good at english": "‘잘 못해’는 I'm not good at이에요." },
        tip: { en: "My English isn't great.", why: "‘내 영어 별로야’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그림 잘 그려.", answers: ["I'm good at drawing.", "I'm good at painting."],
        wrong: { "i am good at draw": "at 뒤에는 동사에 ing를 붙여요. drawing이에요." },
        tip: { en: "I love art.", why: "‘미술 좋아해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 거짓말 잘 못해.", answers: ["I'm not good at lying."],
        wrong: { "i am not good at lieing": "lie는 ie를 y로 바꿔 lying이에요." },
        tip: { en: "My face gives it away.", why: "give away는 ‘티 나게 하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 수영 잘해.", answers: ["I'm good at swimming."],
        ctx: { lead: "cooking 대신 ‘수영(swimming)’으로 바꿔 보세요.", en: "I'm good at cooking." },
        wrong: { "i am good at swiming": "swim은 m을 하나 더 붙여 swimming이에요." },
        tip: { en: "I'm a strong swimmer.", why: "swimmer는 ‘수영하는 사람’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 나 방향 감각이 없어.", answers: ["No, I'm not good at directions.", "I'm not good at directions."], alts: ["No, I'm not good with directions."],
        dialog: { a: "Can you find the way?", aKo: "길 찾을 수 있어?" },
        wrong: { "no i am not good in directions": "‘~을 잘하다’는 good at이에요." },
        tip: { en: "No, I get lost easily.", why: "‘아니, 나 길 잘 잃어’라는 말이에요." } }
    ]
  };
})(window.EP);
