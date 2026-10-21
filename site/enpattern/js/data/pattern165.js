/* 세션 165. What do you say about ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[165] = {
    no: 165, form: "What do you say about ~?", stem: "What do you say about/What do you say to", meaning: "~하는 거 어때요?",
    hint: "What do you say about + 명사/동사-ing?",
    intro: {
      blocks: [["What do you say", "뭐라고 하겠니"], ["about ~?", "~에 대해"]],
      lines: [
        "What do you say about + 명사/동사-ing?는 ‘~하는 거 어때?’예요. 제안할 때 써요.",
        "about 뒤에는 명사나 동사-ing를 써요.",
        "What do you say?만 써도 ‘어때?’예요."
      ],
      examples: [
        { en: "What do you say about pizza?", ko: "피자 어때?" },
        { en: "What do you say about going out?", ko: "나가는 거 어때?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나가는 거 어때?", before: "What do you say about", after: "out?", answers: ["going"],
        wrong: { "go": "about 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "Let's go out.", why: "‘나가자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "피자 어때?", before: "What do you say about", after: "?", answers: ["pizza"],
        wrong: { "a pizzas": "음식 이름으로 pizza만 써요." },
        tip: { en: "How about pizza?", why: "How about도 ‘~ 어때?’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "쉬는 거 어때?", before: "What do you say", after: "taking a break?", answers: ["about"],
        wrong: { "for": "‘~하는 거 어때?’는 What do you say about이에요." },
        tip: { en: "Let's take five.", why: "take five는 ‘잠깐 쉬다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "오늘 밤 영화 보는 거 어때?", before: "What do you", after: "about watching a movie tonight?", answers: ["say"],
        wrong: { "think": "‘~하는 거 어때?’는 What do you say about이에요." },
        tip: { en: "Movie night?", why: "‘영화 볼래?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어때?", before: "What do you", after: "?", answers: ["say"],
        wrong: { "says": "do you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Are you in?", why: "‘같이 할래?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내일 만나는 거 어때?", answers: ["What do you say about meeting tomorrow?"],
        wrong: { "what do you say about meet tomorrow": "about 뒤에는 동사에 ing를 붙여요. meeting이에요.", "what do you say about to meet tomorrow": "about 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Are you free tomorrow?", why: "‘내일 시간 돼?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "중국 음식 어때?", answers: ["What do you say about Chinese food?"],
        wrong: { "what do you say about chinese foods": "food는 보통 s를 붙이지 않아요." },
        tip: { en: "How about Chinese?", why: "How about도 ‘~ 어때?’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "산책하는 거 어때?", answers: ["What do you say about taking a walk?", "What do you say about going for a walk?"],
        wrong: { "what do you say about take a walk": "about 뒤에는 동사에 ing를 붙여요. taking이에요." },
        tip: { en: "Let's get some air.", why: "‘바람 좀 쐬자’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이번 주말에 캠핑 가는 거 어때?", answers: ["What do you say about going camping this weekend?"],
        wrong: { "what do you say about go camping this weekend": "about 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "Weekend getaway?", why: "getaway는 ‘짧은 휴가’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "커피 어때?", answers: ["What do you say about coffee?", "What do you say about some coffee?"],
        ctx: { lead: "pizza 대신 ‘커피(coffee)’로 바꿔 보세요.", en: "What do you say about pizza?" },
        wrong: { "what do you say about a coffees": "coffee는 보통 s를 붙이지 않아요." },
        tip: { en: "Coffee break?", why: "‘커피 타임?’이라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 택시 타는 건 어때?", answers: ["Then what do you say about taking a taxi?", "What do you say about taking a taxi?", "What do you say about getting a taxi?"],
        dialog: { a: "The bus won't come for 30 minutes.", aKo: "버스가 30분 동안 안 와." },
        wrong: { "then what do you say about take a taxi": "about 뒤에는 동사에 ing를 붙여요. taking이에요." },
        tip: { en: "Let's grab a cab.", why: "cab도 ‘택시’예요." } }
    ]
  };
})(window.EP);
