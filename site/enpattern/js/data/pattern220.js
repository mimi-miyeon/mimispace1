/* 세션 220. Given ~, ... */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[220] = {
    no: 220, form: "Given ~, ...", stem: "Given", meaning: "~을 생각하면.",
    hint: "Given + 명사/대명사, 주어 + 동사",
    intro: {
      blocks: [["Given ~,", "~을 고려하면"], ["주어 + 동사", "~하다"]],
      lines: [
        "Given + 명사, 주어 + 동사는 ‘~을 고려하면 …해’예요. 조건을 두고 판단할 때 써요.",
        "given 뒤에는 명사를 써요. (given the price: 가격을 생각하면)",
        "회의나 글에서 많이 쓰는 표현이에요."
      ],
      examples: [
        { en: "Given the price, it's a good deal.", ko: "가격을 생각하면 괜찮은 거래야." },
        { en: "Given the weather, let's stay home.", ko: "날씨를 생각하면 집에 있자." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "가격을 생각하면 괜찮은 거래야.", before: "", after: "the price, it's a good deal.", answers: ["Given"],
        wrong: { "give": "‘~을 고려하면’은 Given이에요.", "giving": "‘~을 고려하면’은 Given이에요." },
        tip: { en: "It's worth it.", why: "‘그럴 가치 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "날씨를 생각하면 집에 있자.", before: "Given the", after: ", let's stay home.", answers: ["weather"],
        wrong: { "whether": "whether는 ‘~인지’예요. ‘날씨’는 weather예요." },
        tip: { en: "It's pouring outside.", why: "pour는 ‘비가 퍼붓다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "시간을 생각하면 서둘러야 해.", before: "Given the", after: ", we should hurry.", answers: ["time"],
        wrong: { "times": "‘시간’은 time이에요." },
        tip: { en: "We're running late.", why: "‘늦어지고 있어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그의 나이를 생각하면 정말 건강해.", before: "Given his", after: ", he's really healthy.", answers: ["age"],
        wrong: { "old": "‘나이’는 명사 age예요." },
        tip: { en: "He's in great shape.", why: "in great shape는 ‘건강 상태가 좋은’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "상황을 생각하면 잘했어.", before: "Given the", after: ", you did well.", answers: ["situation"],
        wrong: { "situations": "이 상황 하나라 situation이에요." },
        tip: { en: "You did your best.", why: "‘최선을 다했어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "거리를 생각하면 택시가 나아.", answers: ["Given the distance, a taxi is better.", "Given the distance, taking a taxi is better."],
        wrong: { "give the distance a taxi is better": "‘~을 고려하면’은 Given이에요.", "given the distance a taxi is more better": "better 앞에는 more를 붙이지 않아요." },
        tip: { en: "It's too far to walk.", why: "‘걷기엔 너무 멀어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "상황을 생각하면 기다리는 게 좋겠어.", answers: ["Given the situation, we should wait.", "Given the situation, it's better to wait."],
        wrong: { "given the situation we should waiting": "should 뒤에는 동사 원래 모양 wait를 써요." },
        tip: { en: "Let's be patient.", why: "patient는 ‘참을성 있는’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "교통을 생각하면 일찍 나가야 해.", answers: ["Given the traffic, we should leave early.", "Given the traffic, we need to leave early."],
        wrong: { "given the traffics we should leave early": "traffic은 s를 붙이지 않아요." },
        tip: { en: "Rush hour is terrible.", why: "rush hour는 ‘출퇴근 시간’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "예산을 생각하면 이게 최선이야.", answers: ["Given the budget, this is the best option.", "Given our budget, this is the best option.", "Given the budget, this is the best choice."],
        wrong: { "given the budget this is best option": "best 앞에 the를 붙여요." },
        tip: { en: "We can't afford more.", why: "afford는 ‘여유가 있다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "품질을 생각하면 괜찮은 거래야.", answers: ["Given the quality, it's a good deal."],
        ctx: { lead: "the price 대신 ‘품질(the quality)’로 바꿔 보세요.", en: "Given the price, it's a good deal." },
        wrong: { "given the qualities it is a good deal": "‘품질’은 quality예요." },
        tip: { en: "You get what you pay for.", why: "‘싼 게 비지떡’이라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "시간을 생각하면 내일 하자.", answers: ["Given the time, let's do it tomorrow.", "Given the time, let's finish it tomorrow."],
        dialog: { a: "It's already 11 p.m.", aKo: "벌써 밤 11시야." },
        wrong: { "give the time let us do it tomorrow": "‘~을 고려하면’은 Given이에요." },
        tip: { en: "Let's call it a day.", why: "call it a day는 ‘오늘은 그만하다’예요." } }
    ]
  };
})(window.EP);
