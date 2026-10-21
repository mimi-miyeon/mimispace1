/* 세션 87. This/That is ~. (형용사) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[87] = {
    no: 87, form: "This/That is ~. (형용사)", stem: "This is/That is", meaning: "이것은/저것은 ~합니다.",
    hint: "This/That is + 형용사",
    intro: {
      blocks: [["This / That", "이것 / 저것은"], ["is", "~하다"], ["~", "형용사"]],
      lines: [
        "This is + 형용사는 ‘이거 ~하다’, That is + 형용사는 ‘그거 ~하다’예요.",
        "형용사 앞에는 a를 붙이지 않아요. (This is good.)",
        "That's great!처럼 상대 말에 반응할 때 아주 자주 써요."
      ],
      examples: [
        { en: "This is delicious.", ko: "이거 맛있다." },
        { en: "That is true.", ko: "그건 맞아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이거 너무 비싸.", before: "This is too", after: ".", answers: ["expensive"],
        wrong: { "expensively": "‘비싼’은 expensively가 아니라 expensive예요." },
        tip: { en: "It costs too much.", why: "cost는 ‘값이 들다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 웃기다.", before: "That", after: "funny.", answers: ["is"],
        wrong: { "are": "that은 하나라서 is를 써요." },
        tip: { en: "That's hilarious.", why: "hilarious는 ‘엄청 웃긴’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 쉽다.", before: "", after: "is easy.", answers: ["This"],
        wrong: { "these": "these는 여러 개일 때 써요. 하나는 this예요." },
        tip: { en: "This is a piece of cake.", why: "a piece of cake는 ‘식은 죽 먹기’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그거 이상하다.", before: "That is", after: ".", answers: ["strange", "weird"],
        wrong: { "strangely": "‘이상한’은 strangely가 아니라 strange예요." },
        tip: { en: "That's odd.", why: "odd도 ‘이상한’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이거 무거워.", before: "This is", after: ".", answers: ["heavy"],
        wrong: { "heavily": "‘무거운’은 heavily가 아니라 heavy예요." },
        tip: { en: "This weighs a lot.", why: "weigh는 ‘무게가 나가다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이거 정말 편하다.", answers: ["This is really comfortable.", "This is so comfortable.", "This is very comfortable."],
        wrong: { "this is really comfort": "comfort는 ‘편안함’이에요. ‘편한’은 comfortable이에요." },
        tip: { en: "This feels so nice.", why: "feel nice는 ‘느낌이 좋다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 말도 안 돼.", answers: ["That is crazy.", "That is ridiculous.", "That is unbelievable."],
        wrong: { "that is a crazy": "형용사 앞에는 a를 붙이지 않아요." },
        tip: { en: "No way!", why: "‘말도 안 돼!’라는 짧은 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이거 너무 작아.", answers: ["This is too small."],
        wrong: { "this is too much small": "‘너무 작은’은 too small이에요.", "this are too small": "this는 하나라서 is를 써요." },
        tip: { en: "I need a bigger one.", why: "‘더 큰 게 필요해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 완벽하다.", answers: ["That is perfect.", "That is just perfect."],
        wrong: { "that is perfectly": "‘완벽한’은 perfectly가 아니라 perfect예요." },
        tip: { en: "Couldn't be better.", why: "‘이보다 좋을 순 없어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이거 맵다.", answers: ["This is spicy.", "This is hot."],
        ctx: { lead: "delicious 대신 ‘매운(spicy)’으로 바꿔 보세요.", en: "This is delicious." },
        wrong: { "this is a spicy": "형용사 앞에는 a를 붙이지 않아요." },
        tip: { en: "It's too hot for me.", why: "hot은 ‘매운’이라는 뜻도 있어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와, 그거 대단하다!", answers: ["Wow, that is amazing!", "Wow, that is great!", "That is amazing!", "That is great!"],
        dialog: { a: "I got the job!", aKo: "나 합격했어!" },
        wrong: { "wow that is a great": "형용사 앞에는 a를 붙이지 않아요." },
        tip: { en: "Congratulations!", why: "‘축하해!’라는 말이에요." } }
    ]
  };
})(window.EP);
