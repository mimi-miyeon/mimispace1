/* 세션 73. I wish it was ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[73] = {
    no: 73, form: "I wish it was ~.", stem: "I wish it was/I wish it were", meaning: "그게 ~라면 좋을 텐데.",
    hint: "I wish it was + 형용사/명사",
    intro: {
      blocks: [["I wish", "~라면 좋을 텐데"], ["it was ~", "그게 ~였다"]],
      lines: [
        "I wish it was ~는 ‘~라면 좋을 텐데’예요. 지금 상황이 달랐으면 할 때 써요.",
        "지금 일이지만 과거형 was를 써요. 글에서는 were도 써요.",
        "날씨, 요일, 가격 같은 상황에 자주 써요."
      ],
      examples: [
        { en: "I wish it was warmer.", ko: "더 따뜻하면 좋겠다." },
        { en: "I wish it was cheaper.", ko: "더 싸면 좋을 텐데." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "주말이면 좋겠다.", before: "I wish it", after: "the weekend.", answers: ["was", "were"],
        wrong: { "is": "I wish 뒤에는 과거형을 써요. was예요.", "be": "I wish 뒤에는 과거형을 써요. was예요." },
        tip: { en: "I can't wait for the weekend.", why: "‘주말이 기다려져’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "더 쉬우면 좋을 텐데.", before: "I wish it was", after: ".", answers: ["easier"],
        wrong: { "more easy": "easy의 비교급은 easier예요." },
        tip: { en: "This is too hard.", why: "‘이거 너무 어려워’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "더 가까우면 좋을 텐데.", before: "I wish it was", after: ".", answers: ["closer", "nearer"],
        wrong: { "more close": "close의 비교급은 closer예요." },
        tip: { en: "It's so far away.", why: "‘너무 멀어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "여름이면 좋겠다.", before: "I", after: "it was summer.", answers: ["wish"],
        wrong: { "hope": "사실이 아닌 바람은 hope가 아니라 wish예요." },
        tip: { en: "I miss summer.", why: "‘여름이 그리워’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이렇게 안 추우면 좋을 텐데.", before: "I wish it", after: "so cold.", answers: ["wasn't", "weren't"],
        wrong: { "is not": "I wish 뒤에는 과거형을 써요. wasn't예요." },
        tip: { en: "It's freezing today.", why: "freezing은 ‘꽁꽁 얼 듯 추운’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "벌써 끝났으면 좋겠다.", answers: ["I wish it was over.", "I wish it was already over.", "I wish it were over."],
        wrong: { "i wish it is over": "I wish 뒤에는 과거형을 써요. was예요." },
        tip: { en: "I can't wait for this to end.", why: "‘이게 빨리 끝났으면’이라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "더 크면 좋을 텐데.", answers: ["I wish it was bigger.", "I wish it were bigger."],
        wrong: { "i wish it was more big": "big의 비교급은 bigger예요." },
        tip: { en: "It's a little too small.", why: "‘좀 너무 작아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그게 사실이면 좋을 텐데.", answers: ["I wish it was true.", "I wish it were true."],
        wrong: { "i wish it is true": "I wish 뒤에는 과거형을 써요. was예요." },
        tip: { en: "That sounds too good to be true.", why: "too good to be true는 ‘믿기 어려울 만큼 좋은’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "오늘 날씨가 맑으면 좋을 텐데.", answers: ["I wish it was sunny today.", "I wish it were sunny today.", "I wish it was nice today."],
        wrong: { "i wish it is sunny today": "I wish 뒤에는 과거형을 써요. was예요." },
        tip: { en: "What a gloomy day.", why: "gloomy는 ‘우중충한’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "오늘이 내 생일이면 좋겠다.", answers: ["I wish it was my birthday.", "I wish it were my birthday.", "I wish it was my birthday today."],
        ctx: { lead: "warmer 대신 ‘내 생일(my birthday)’로 바꿔 보세요.", en: "I wish it was warmer." },
        wrong: { "i wish it is my birthday": "I wish 뒤에는 과거형을 써요. was예요." },
        tip: { en: "My birthday is still far away.", why: "‘내 생일은 아직 멀었어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "알아. 벌써 금요일이면 좋겠다.", answers: ["I know. I wish it was Friday.", "I know. I wish it was already Friday.", "I know. I wish it were Friday."],
        dialog: { a: "It's only Monday.", aKo: "아직 월요일이야." },
        wrong: { "i know i wish it is friday": "I wish 뒤에는 과거형을 써요. was예요." },
        tip: { en: "I know. This week feels so long.", why: "‘알아. 이번 주 너무 길다’라는 말이에요." } }
    ]
  };
})(window.EP);
