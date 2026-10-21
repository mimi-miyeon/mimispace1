/* 세션 59. Don't you think ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[59] = {
    no: 59, form: "Don't you think ~?", stem: "Don't you think", meaning: "~라고 생각하지 않아요?",
    hint: "Don't you think (that) + 주어 + 동사?",
    intro: {
      blocks: [["Don't you think", "너는 생각하지 않니"], ["~", "주어 + 동사"]],
      lines: [
        "Don't you think ~?는 ‘~지 않아?’예요. 내 생각에 동의를 구할 때 써요.",
        "think 뒤에는 ‘주어 + 동사’ 순서로 써요.",
        "Isn't it ~?도 비슷한 뜻이에요."
      ],
      examples: [
        { en: "Don't you think it's too late?", ko: "너무 늦은 것 같지 않아?" },
        { en: "Don't you think she's pretty?", ko: "걔 예쁘지 않아?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그거 좀 이상하지 않아?", before: "Don't you think that's a little", after: "?", answers: ["strange", "weird"],
        wrong: { "strangely": "‘이상한’은 strangely가 아니라 strange예요." },
        tip: { en: "Isn't that a little weird?", why: "Isn't ~?도 ‘~지 않아?’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너무 비싸지 않아?", before: "", after: "you think it's too expensive?", answers: ["Don't"],
        wrong: { "are not": "‘생각 안 해?’는 Aren't가 아니라 Don't로 물어요.", "does not": "you와는 doesn't가 아니라 don't를 써요." },
        tip: { en: "Isn't it too expensive?", why: "Isn't ~?도 ‘~지 않아?’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 좀 쉬어야 하지 않아?", before: "Don't you think we", after: "take a break?", answers: ["should"],
        wrong: { "should to": "should 뒤에는 to를 쓰지 않아요." },
        tip: { en: "Let's take a break.", why: "‘쉬자’라고 바로 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "걔 좀 무례하지 않아?", before: "Don't you think he's a little", after: "?", answers: ["rude"],
        wrong: { "rudely": "‘무례한’은 rudely가 아니라 rude예요." },
        tip: { en: "He's kind of rude, right?", why: "끝에 right?를 붙이면 동의를 구해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 좋은 생각이지 않아?", before: "Don't you", after: "it's a good idea?", answers: ["think"],
        wrong: { "thinks": "Don't you 뒤에는 동사 원래 모양 think를 써요." },
        tip: { en: "That's a great idea, right?", why: "끝에 right?를 붙이면 동의를 구해요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이거 너무 짜지 않아?", answers: ["Don't you think this is too salty?", "Don't you think it's too salty?"],
        wrong: { "do not you think is this too salty": "think 뒤에는 ‘주어 + 동사’ 순서예요. this is예요." },
        tip: { en: "Isn't this too salty?", why: "Isn't ~?도 ‘~지 않아?’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 사람 잘생기지 않았어?", answers: ["Don't you think he's handsome?", "Don't you think he's good-looking?"],
        wrong: { "do not you think he handsome": "handsome 앞에 is가 필요해요. he's handsome이에요." },
        tip: { en: "Isn't he handsome?", why: "Isn't ~?도 ‘~지 않아?’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 너무 일 많이 하지 않아?", answers: ["Don't you think we work too much?", "Don't you think we're working too much?"],
        wrong: { "do not you think we works too much": "we 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "We work way too much, right?", why: "way too much는 ‘너무 지나치게’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "오늘 좀 춥지 않아?", answers: ["Don't you think it's a little cold today?", "Don't you think it's cold today?", "Don't you think it's kind of cold today?"],
        wrong: { "do not you think is it cold today": "think 뒤에는 ‘주어 + 동사’ 순서예요. it's cold예요." },
        tip: { en: "It's chilly today, isn't it?", why: "chilly는 ‘쌀쌀한’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너무 이르지 않아?", answers: ["Don't you think it's too early?"],
        ctx: { lead: "too late 대신 ‘너무 이른(too early)’으로 바꿔 보세요.", en: "Don't you think it's too late?" },
        wrong: { "do not you think it too early": "it 뒤에 is가 필요해요. it's too early예요." },
        tip: { en: "Isn't it too early?", why: "Isn't ~?도 ‘~지 않아?’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그거 너무 크지 않아?", answers: ["Don't you think it's too big?", "Don't you think that's too big?"],
        dialog: { a: "I'm going to wear this coat.", aKo: "나 이 코트 입을 거야." },
        wrong: { "do not you think it is too much big": "‘너무 큰’은 too big이에요." },
        tip: { en: "Isn't it a bit too big?", why: "a bit은 ‘조금’이에요." } }
    ]
  };
})(window.EP);
