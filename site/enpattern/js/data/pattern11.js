/* 세션 11. I need ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[11] = {
    no: 11, form: "I need ~.", stem: "I need", meaning: "나는 ~이 필요해요.",
    hint: "I need + 명사",
    intro: {
      blocks: [["I", "나는"], ["need", "필요하다"], ["~", "무엇"]],
      lines: [
        "need는 ‘필요하다’예요. 뒤에 필요한 것을 바로 붙여요.",
        "I 뒤에는 need 그대로 써요. (he, she는 needs)",
        "‘하나 필요해’는 I need a ~, ‘좀 필요해’는 I need some ~예요."
      ],
      examples: [
        { en: "I need coffee.", ko: "나 커피가 필요해." },
        { en: "I need a break.", ko: "나 좀 쉬어야겠어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 도움이 필요해.", before: "I", after: "help.", answers: ["need"],
        wrong: { "needs": "needs는 he, she가 주어일 때 써요. I 뒤에는 need예요.", "am need": "need는 동사라서 앞에 am을 쓰지 않아요.", "want": "want는 ‘원하다’예요. ‘필요하다’는 need예요." },
        tip: { en: "Can you help me?", why: "‘도와줄래?’로 바로 부탁해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 휴식이 필요해.", before: "I", after: "a break.", answers: ["need"],
        wrong: { "needs": "needs는 he, she가 주어일 때 써요. I 뒤에는 need예요.", "need to": "need to 뒤에는 동사가 와요. 휴식 같은 명사 앞에는 need만 써요." },
        tip: { en: "I need to take a break.", why: "take a break는 ‘잠깐 쉬다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 펜 하나 필요해.", before: "I need", after: "pen.", answers: ["a"],
        wrong: { "an": "pen은 자음 소리로 시작해서 an이 아니라 a를 써요." },
        tip: { en: "Do you have a pen?", why: "‘펜 있어?’라고 물어봐도 같은 상황이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 시간이 좀 더 필요해.", before: "I", after: "more time.", answers: ["need"],
        wrong: { "needs": "needs는 he, she가 주어일 때 써요. I 뒤에는 need예요.", "want": "want는 ‘원하다’예요. ‘필요하다’는 need예요." },
        tip: { en: "Give me a little more time.", why: "‘시간 좀 더 줘’라고 부탁하는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 물이 좀 필요해.", before: "I need some", after: ".", answers: ["water"],
        wrong: { "waters": "water는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "Can I get some water?", why: "가게나 식당에서 이렇게 부탁해요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 네 도움이 필요해.", answers: ["I need your help."],
        wrong: { "i need you help": "‘너의 도움’은 you가 아니라 your help예요.", "i needs your help": "needs는 he, she가 주어일 때 써요. I 뒤에는 need예요." },
        tip: { en: "I could use your help.", why: "could use는 ‘있으면 좋겠다’는 부드러운 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 우산 필요해.", answers: ["I need an umbrella."],
        wrong: { "i need a umbrella": "umbrella처럼 모음 소리로 시작하는 단어 앞에는 an을 써요.", "i need umbrella": "umbrella는 셀 수 있는 말이라 an을 붙여요." },
        tip: { en: "I need to borrow an umbrella.", why: "borrow는 ‘빌리다’예요. 빌려 달라는 느낌이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 돈이 좀 필요해.", answers: ["I need some money today.", "Today I need some money.", "I need money today."],
        wrong: { "i need some moneys today": "money는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "I'm a little short on money today.", why: "short on은 ‘~이 좀 모자라다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 잠이 더 필요해.", answers: ["I need more sleep."],
        wrong: { "i need more sleeps": "sleep이 ‘잠’이라는 뜻일 때는 s를 붙이지 않아요." },
        tip: { en: "I didn't get enough sleep.", why: "‘잠을 충분히 못 잤어’로 말해도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 휴가가 필요해.", answers: ["I need a vacation.", "I need a holiday."],
        ctx: { lead: "coffee 대신 ‘휴가(vacation)’를 넣어 보세요.", en: "I need coffee." },
        wrong: { "i need vacation": "vacation은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "I need some time off.", why: "time off는 ‘쉬는 시간, 휴가’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "새 신발이 필요해.", answers: ["I need new shoes.", "I need some new shoes.", "I need a new pair of shoes."],
        dialog: { a: "What do you want for your birthday?", aKo: "생일에 뭐 갖고 싶어?" },
        wrong: { "i need a new shoes": "shoes는 여러 개라 a를 붙이지 않아요.", "i need new shoe": "신발은 보통 한 켤레라 shoes로 써요." },
        tip: { en: "I could use new shoes.", why: "could use는 ‘있으면 좋겠다’는 부드러운 말이에요." } }
    ]
  };
})(window.EP);
