/* 세션 71. I wish ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[71] = {
    no: 71, form: "I wish ~.", stem: "I wish", meaning: "~라면 좋을 텐데.",
    hint: "I wish + 주어 + 동사(과거형)",
    intro: {
      blocks: [["I wish", "~라면 좋을 텐데"], ["~", "주어 + 동사(과거형)"]],
      lines: [
        "I wish + 주어 + 과거형은 ‘~라면 좋을 텐데’예요. 지금 사실과 반대되는 바람을 말해요.",
        "지금 일인데도 과거형을 써요. (I wish I had a car: 나 차 있으면 좋겠다)",
        "be동사는 were를 쓰지만 말할 때는 was도 많이 써요."
      ],
      examples: [
        { en: "I wish I had more time.", ko: "시간이 더 있으면 좋을 텐데." },
        { en: "I wish you were here.", ko: "네가 여기 있으면 좋을 텐데." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 차 있으면 좋겠다.", before: "I wish I", after: "a car.", answers: ["had"],
        wrong: { "have": "I wish 뒤에는 과거형을 써요. had예요.", "has": "I wish 뒤에는 과거형 had를 써요." },
        tip: { en: "I need a car.", why: "‘차가 필요해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 키가 더 크면 좋을 텐데.", before: "I wish I", after: "taller.", answers: ["were", "was"],
        wrong: { "am": "I wish 뒤에는 과거형을 써요. were예요.", "is": "I wish 뒤에는 과거형을 써요. were예요." },
        tip: { en: "If only I were taller.", why: "If only도 ‘~라면 좋을 텐데’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 사람 번호를 알면 좋을 텐데.", before: "I wish I", after: "his number.", answers: ["knew"],
        wrong: { "know": "I wish 뒤에는 과거형을 써요. knew예요.", "knowed": "know의 과거형은 knew예요." },
        tip: { en: "I should have gotten his number.", why: "‘번호 받아 둘걸’이라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "오늘 금요일이면 좋겠다.", before: "I", after: "it was Friday.", answers: ["wish"],
        wrong: { "hope": "사실이 아닌 바람은 hope가 아니라 wish예요.", "want": "‘~라면 좋을 텐데’는 want가 아니라 wish예요." },
        tip: { en: "I can't wait for Friday.", why: "‘금요일이 기다려져’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 집이 더 가까우면 좋을 텐데.", before: "I wish my house", after: "closer.", answers: ["were", "was"],
        wrong: { "is": "I wish 뒤에는 과거형을 써요. were예요." },
        tip: { en: "My commute is too long.", why: "commute는 ‘출퇴근길’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 돈 많으면 좋을 텐데.", answers: ["I wish I had a lot of money.", "I wish I had more money.", "I wish I had lots of money."],
        wrong: { "i wish i have a lot of money": "I wish 뒤에는 과거형을 써요. had예요.", "i hope i had a lot of money": "사실이 아닌 바람은 hope가 아니라 wish예요." },
        tip: { en: "If only I were rich.", why: "If only도 ‘~라면 좋을 텐데’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 영어 잘하면 좋을 텐데.", answers: ["I wish I spoke English well.", "I wish my English was better.", "I wish my English were better."], alts: ["I wish I could speak English well."],
        wrong: { "i wish i speak english well": "I wish 뒤에는 과거형을 써요. spoke예요." },
        tip: { en: "I want to be good at English.", why: "‘영어 잘하고 싶어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오늘 일 안 해도 되면 좋을 텐데.", answers: ["I wish I didn't have to work today."],
        wrong: { "i wish i do not have to work today": "I wish 뒤에는 과거형을 써요. didn't예요." },
        tip: { en: "I'd love a day off today.", why: "day off는 ‘쉬는 날’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "날씨가 더 따뜻하면 좋을 텐데.", answers: ["I wish it was warmer.", "I wish it were warmer.", "I wish the weather was warmer.", "I wish the weather were warmer."],
        wrong: { "i wish it is warmer": "I wish 뒤에는 과거형을 써요. was나 were예요." },
        tip: { en: "It's too cold today.", why: "‘오늘 너무 추워’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 강아지 있으면 좋겠다.", answers: ["I wish I had a dog."],
        ctx: { lead: "more time 대신 ‘강아지(a dog)’로 바꿔 보세요.", en: "I wish I had more time." },
        wrong: { "i wish i have a dog": "I wish 뒤에는 과거형을 써요. had예요." },
        tip: { en: "I really want a dog.", why: "‘강아지 정말 갖고 싶어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋겠다! 나도 같이 가면 좋을 텐데.", answers: ["Lucky you! I wish I was going with you.", "I wish I was going with you.", "I wish I were going with you.", "I wish I was going too."], alts: ["I wish I could go too.", "Lucky you! I wish I could go too."],
        dialog: { a: "I'm going to Hawaii next week!", aKo: "나 다음 주에 하와이 가!" },
        wrong: { "i wish i am going with you": "I wish 뒤에는 과거형을 써요. was나 were예요." },
        tip: { en: "Lucky you! Take me with you.", why: "‘좋겠다! 나도 데려가’라는 말이에요." } }
    ]
  };
})(window.EP);
