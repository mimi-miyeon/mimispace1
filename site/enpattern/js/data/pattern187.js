/* 세션 187. Why don't we ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[187] = {
    no: 187, form: "Why don't we ~?", stem: "Why don't we", meaning: "우리 ~하는 거 어때요?",
    hint: "Why don't we + 동사?",
    intro: {
      blocks: [["Why don't we", "우리 ~하지 않을래"], ["~?", "동사"]],
      lines: [
        "Why don't we + 동사?는 ‘우리 ~하는 거 어때?’예요. Let's보다 부드러운 제안이에요.",
        "don't we 뒤에는 동사 원래 모양을 써요.",
        "대답은 Sure! / Sounds good!처럼 해요."
      ],
      examples: [
        { en: "Why don't we eat out?", ko: "우리 외식하는 거 어때?" },
        { en: "Why don't we take a taxi?", ko: "우리 택시 타는 거 어때?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "우리 외식하는 거 어때?", before: "Why don't we", after: "out?", answers: ["eat"],
        wrong: { "eating": "don't we 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "Let's eat out.", why: "‘외식하자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "우리 택시 타는 거 어때?", before: "Why don't we", after: "a taxi?", answers: ["take", "get"],
        wrong: { "taking": "don't we 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Let's grab a cab.", why: "cab도 ‘택시’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 좀 쉬는 거 어때?", before: "Why don't", after: "take a break?", answers: ["we"],
        wrong: { "us": "don't 뒤에는 us가 아니라 we를 써요." },
        tip: { en: "Let's take five.", why: "take five는 ‘잠깐 쉬다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 내일 다시 하는 거 어때?", before: "Why", after: "we try again tomorrow?", answers: ["don't"],
        wrong: { "not": "‘~하는 거 어때?’는 Why don't we예요." },
        tip: { en: "Let's sleep on it.", why: "sleep on it은 ‘하룻밤 생각해 보다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 같이 가는 거 어때?", before: "Why don't we go", after: "?", answers: ["together"],
        wrong: { "with": "‘같이’는 together예요." },
        tip: { en: "Let's go together.", why: "‘같이 가자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "우리 영화 보는 거 어때?", answers: ["Why don't we watch a movie?", "Why don't we see a movie?", "Why don't we go to the movies?"],
        wrong: { "why do not we watching a movie": "don't we 뒤에는 동사 원래 모양 watch를 써요.", "why do not us watch a movie": "don't 뒤에는 us가 아니라 we를 써요." },
        tip: { en: "Movie night?", why: "‘영화 볼래?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리 피자 시키는 거 어때?", answers: ["Why don't we order pizza?", "Why don't we get pizza?"],
        wrong: { "why do not we ordering pizza": "don't we 뒤에는 동사 원래 모양 order를 써요." },
        tip: { en: "I'm craving pizza.", why: "crave는 ‘몹시 먹고 싶다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 걸어가는 거 어때?", answers: ["Why don't we walk?", "Why don't we walk there?"],
        wrong: { "why do not we walking": "don't we 뒤에는 동사 원래 모양 walk를 써요." },
        tip: { en: "It's a nice day.", why: "‘날씨 좋다’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "우리 지금 출발하는 거 어때?", answers: ["Why don't we leave now?", "Why don't we go now?"],
        wrong: { "why do not we leaving now": "don't we 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Let's get going.", why: "get going은 ‘출발하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "우리 쇼핑 가는 거 어때?", answers: ["Why don't we go shopping?"],
        ctx: { lead: "eat out 대신 ‘쇼핑 가다(go shopping)’로 바꿔 보세요.", en: "Why don't we eat out?" },
        wrong: { "why do not we go to shopping": "go 뒤에는 to 없이 shopping을 써요." },
        tip: { en: "I need new clothes.", why: "‘새 옷이 필요해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 우리 그 사람한테 물어보는 거 어때?", answers: ["Then why don't we ask him?", "Why don't we ask him?", "Then why don't we ask her?", "Why don't we ask her?"],
        dialog: { a: "I don't know the way.", aKo: "나 길을 몰라." },
        wrong: { "then why do not we asking him": "don't we 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "Let's ask someone.", why: "‘누구한테 물어보자’라는 말이에요." } }
    ]
  };
})(window.EP);
