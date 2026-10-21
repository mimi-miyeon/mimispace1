/* 세션 225. It depends on ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[225] = {
    no: 225, form: "It depends on ~.", stem: "It depends on/It depends", meaning: "그것은 ~에 달려 있어요.",
    hint: "It depends on + 명사",
    intro: {
      blocks: [["It depends", "그건 달려 있다"], ["on ~", "~에"]],
      lines: [
        "It depends on + 명사는 ‘~에 따라 달라’예요.",
        "depends는 depend에 s가 붙은 모양이에요. It 뒤라서 s를 붙여요.",
        "It depends.만 써도 ‘상황에 따라 달라’예요."
      ],
      examples: [
        { en: "It depends on the weather.", ko: "날씨에 따라 달라." },
        { en: "It depends on you.", ko: "너한테 달렸어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "날씨에 따라 달라.", before: "It depends", after: "the weather.", answers: ["on"],
        wrong: { "of": "‘~에 달려 있다’는 depend on이에요.", "in": "‘~에 달려 있다’는 depend on이에요." },
        tip: { en: "Let's check the forecast.", why: "forecast는 ‘일기 예보’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너한테 달렸어.", before: "It depends on", after: ".", answers: ["you"],
        wrong: { "your": "on 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "It's up to you.", why: "up to you는 ‘너한테 달렸어’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "상황에 따라 달라.", before: "It", after: ".", answers: ["depends"],
        wrong: { "depend": "It 뒤에는 동사에 s를 붙여요. depends예요.", "is depend": "is와 depends를 같이 쓰지 않아요." },
        tip: { en: "Hard to say.", why: "‘말하기 어려워’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "가격에 따라 달라.", before: "It depends on the", after: ".", answers: ["price"],
        wrong: { "prices": "이 가격 하나라 price예요." },
        tip: { en: "How much is it?", why: "‘얼마야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "교통 상황에 따라 달라.", before: "It depends on the", after: ".", answers: ["traffic"],
        wrong: { "traffics": "traffic은 s를 붙이지 않아요." },
        tip: { en: "Rush hour is bad.", why: "rush hour는 ‘출퇴근 시간’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "시간에 따라 달라.", answers: ["It depends on the time."],
        wrong: { "it depend on the time": "It 뒤에는 동사에 s를 붙여요. depends예요.", "it depends of the time": "‘~에 달려 있다’는 depend on이에요." },
        tip: { en: "What time?", why: "‘몇 시?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "기분에 따라 달라.", answers: ["It depends on my mood.", "It depends on the mood."],
        wrong: { "it depends on my moods": "기분 하나라 mood예요." },
        tip: { en: "I'm moody.", why: "moody는 ‘기분이 잘 바뀌는’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그건 그녀에게 달렸어.", answers: ["It depends on her."], alts: ["It's up to her."],
        wrong: { "it depends on she": "on 뒤에는 she가 아니라 her를 써요." },
        tip: { en: "Ask her.", why: "‘그녀에게 물어봐’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "얼마나 바쁜지에 따라 달라.", answers: ["It depends on how busy I am.", "It depends on how busy I'll be."],
        wrong: { "it depends on how i am busy": "‘얼마나 바쁜지’는 how busy I am이에요." },
        tip: { en: "I'll let you know.", why: "‘알려 줄게’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "예산에 따라 달라.", answers: ["It depends on the budget.", "It depends on my budget.", "It depends on our budget."],
        ctx: { lead: "the weather 대신 ‘예산(the budget)’으로 바꿔 보세요.", en: "It depends on the weather." },
        wrong: { "it depends on budget": "budget 앞에 the를 붙여요." },
        tip: { en: "How much can we spend?", why: "‘얼마 쓸 수 있어?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "음, 날씨에 따라 달라.", answers: ["Well, it depends on the weather.", "It depends on the weather.", "Hmm, it depends on the weather."],
        dialog: { a: "Are you going hiking tomorrow?", aKo: "내일 등산 갈 거야?" },
        wrong: { "well it depend on the weather": "It 뒤에는 동사에 s를 붙여요. depends예요." },
        tip: { en: "If it's sunny, yes.", why: "‘맑으면 갈게’라는 말이에요." } }
    ]
  };
})(window.EP);
