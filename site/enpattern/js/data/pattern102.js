/* 세션 102. It's not like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[102] = {
    no: 102, form: "It's not like ~.", stem: "It's not like", meaning: "그건 ~인 것 같지 않아요.",
    hint: "It's not like + 명사/형용사",
    intro: {
      blocks: [["It's not like", "~인 것도 아니다"], ["~", "명사 / 주어 + 동사"]],
      lines: [
        "It's not like ~는 ‘~인 것도 아니잖아 / ~하는 것도 아니고’예요.",
        "뒤에 ‘주어 + 동사’를 많이 써요. (It's not like I care: 내가 신경 쓰는 것도 아니고)",
        "It's not like you.는 ‘너답지 않아’라는 뜻이에요."
      ],
      examples: [
        { en: "It's not like you.", ko: "너답지 않아." },
        { en: "It's not like I care.", ko: "내가 신경 쓰는 것도 아니고." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너답지 않아.", before: "It's not like", after: ".", answers: ["you"],
        wrong: { "your": "like 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "That's not you.", why: "‘그건 너 같지 않아’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어려운 것도 아니잖아.", before: "It's not", after: "it's hard.", answers: ["like"],
        wrong: { "likes": "‘~인 것도 아니잖아’는 It's not like예요." },
        tip: { en: "It's easy.", why: "‘쉬워’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 신경 쓰는 것도 아니고.", before: "It's not like I", after: ".", answers: ["care"],
        wrong: { "cares": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Whatever.", why: "‘뭐 어때’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리가 서두르는 것도 아니잖아.", before: "It's not like we're in a", after: ".", answers: ["hurry"],
        wrong: { "hurrying": "‘서두르는 중’은 in a hurry예요." },
        tip: { en: "Take your time.", why: "‘천천히 해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그녀답지 않아.", before: "It's", after: "like her.", answers: ["not"],
        wrong: { "no": "‘~이 아니다’는 not을 써요." },
        tip: { en: "She's not herself.", why: "‘평소 그녀 같지 않아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나랑 상관있는 것도 아니잖아.", answers: ["It's not like it's my business.", "It's not like it's my problem."],
        wrong: { "it is not like it my business": "it 뒤에 is가 필요해요. it's예요.", "it does not like it is my business": "‘~인 것도 아니잖아’는 It's not like예요." },
        tip: { en: "It's none of my business.", why: "none of my business는 ‘내 알 바 아니다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리가 매일 만나는 것도 아니잖아.", answers: ["It's not like we meet every day.", "It's not like we see each other every day."],
        wrong: { "it is not like we meets every day": "we 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "We rarely meet.", why: "rarely는 ‘좀처럼 ~ 않다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그가 늦는 건 그답지 않아.", answers: ["It's not like him to be late."],
        wrong: { "it is not like he to be late": "like 뒤에는 he가 아니라 him을 써요." },
        tip: { en: "He's never late.", why: "‘걔는 절대 안 늦어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내가 부자인 것도 아니잖아.", answers: ["It's not like I'm rich."],
        wrong: { "it is not like i rich": "I 뒤에 am이 필요해요. I'm rich예요." },
        tip: { en: "I can't afford it.", why: "afford는 ‘살 여유가 있다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나답지 않아.", answers: ["It's not like me."],
        ctx: { lead: "you 대신 ‘나(me)’로 바꿔 보세요.", en: "It's not like you." },
        wrong: { "it is not like i": "like 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "That's not who I am.", why: "‘그건 내가 아니야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 일부러 그런 것도 아니잖아.", answers: ["It's not like I did it on purpose.", "It's not like I meant it."],
        dialog: { a: "Why did you break it?", aKo: "왜 그거 깼어?" },
        wrong: { "it is not like i do it on purpose": "지난 일이라 did를 써요." },
        tip: { en: "It was an accident.", why: "accident는 ‘사고, 우연’이에요." } }
    ]
  };
})(window.EP);
