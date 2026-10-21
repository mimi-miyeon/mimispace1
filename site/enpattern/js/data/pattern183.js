/* 세션 183. How about ~ing? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[183] = {
    no: 183, form: "How about ~ing?", stem: "How about", meaning: "~하는 건 어때요?",
    hint: "How about + 동사-ing?",
    intro: {
      blocks: [["How about", "~은 어때"], ["~ing?", "~하는 것"]],
      lines: [
        "How about + 동사-ing?는 ‘~하는 거 어때?’예요. 함께 뭔가 하자고 제안해요.",
        "about 뒤에는 동사에 ing를 붙여요. (How about go ×)",
        "Let's ~보다 부드럽게 들려요."
      ],
      examples: [
        { en: "How about going for a walk?", ko: "산책하러 가는 거 어때?" },
        { en: "How about ordering pizza?", ko: "피자 시키는 거 어때?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "산책하는 거 어때?", before: "How about", after: "for a walk?", answers: ["going"],
        wrong: { "go": "about 뒤에는 동사에 ing를 붙여요. going이에요.", "to go": "about 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Let's go for a walk.", why: "‘산책 가자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "피자 시키는 거 어때?", before: "How about", after: "pizza?", answers: ["ordering"],
        wrong: { "order": "about 뒤에는 동사에 ing를 붙여요. ordering이에요." },
        tip: { en: "I'm craving pizza.", why: "crave는 ‘몹시 먹고 싶다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "좀 쉬는 거 어때?", before: "How about", after: "a break?", answers: ["taking"],
        wrong: { "take": "about 뒤에는 동사에 ing를 붙여요. taking이에요." },
        tip: { en: "You look tired.", why: "‘피곤해 보여’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내일 만나는 거 어때?", before: "How", after: "meeting tomorrow?", answers: ["about"],
        wrong: { "for": "‘~하는 거 어때?’는 How about이에요." },
        tip: { en: "Are you free tomorrow?", why: "‘내일 시간 돼?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "다시 해 보는 거 어때?", before: "How about", after: "again?", answers: ["trying"],
        wrong: { "try": "about 뒤에는 동사에 ing를 붙여요. trying이에요." },
        tip: { en: "Give it another shot.", why: "shot은 ‘시도’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "영화 보는 거 어때?", answers: ["How about watching a movie?", "How about seeing a movie?", "How about going to the movies?"],
        wrong: { "how about watch a movie": "about 뒤에는 동사에 ing를 붙여요. watching이에요.", "how about to watch a movie": "about 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Movie night?", why: "‘영화 볼래?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "밖에서 먹는 거 어때?", answers: ["How about eating out?"],
        wrong: { "how about eat out": "about 뒤에는 동사에 ing를 붙여요. eating이에요." },
        tip: { en: "Let's go out to eat.", why: "‘외식하자’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "택시 타는 거 어때?", answers: ["How about taking a taxi?", "How about getting a taxi?", "How about taking a cab?"],
        wrong: { "how about take a taxi": "about 뒤에는 동사에 ing를 붙여요. taking이에요." },
        tip: { en: "It's faster.", why: "‘더 빨라’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그녀에게 물어보는 거 어때?", answers: ["How about asking her?"],
        wrong: { "how about ask her": "about 뒤에는 동사에 ing를 붙여요. asking이에요." },
        tip: { en: "She might know.", why: "‘그녀가 알지도 몰라’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "수영하러 가는 거 어때?", answers: ["How about going swimming?", "How about going for a swim?"],
        ctx: { lead: "going for a walk 대신 ‘수영하러 가기(going swimming)’로 바꿔 보세요.", en: "How about going for a walk?" },
        wrong: { "how about go swimming": "about 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "It's so hot today.", why: "‘오늘 진짜 덥다’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 내일 다시 하는 거 어때?", answers: ["Then how about doing it again tomorrow?", "How about doing it again tomorrow?", "How about trying again tomorrow?", "Then how about trying again tomorrow?"],
        dialog: { a: "I'm too tired to finish this.", aKo: "이거 끝내기엔 너무 피곤해." },
        wrong: { "then how about do it again tomorrow": "about 뒤에는 동사에 ing를 붙여요. doing이에요." },
        tip: { en: "Let's call it a day.", why: "call it a day는 ‘오늘은 그만하다’예요." } }
    ]
  };
})(window.EP);
