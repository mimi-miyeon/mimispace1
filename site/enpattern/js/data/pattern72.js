/* 세션 72. I wish I could ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[72] = {
    no: 72, form: "I wish I could ~.", stem: "I wish I could", meaning: "내가 ~할 수 있으면 좋을 텐데.",
    hint: "I wish I could + 동사",
    intro: {
      blocks: [["I wish", "~라면 좋을 텐데"], ["I could ~", "내가 ~할 수 있다"]],
      lines: [
        "I wish I could ~는 ‘~할 수 있으면 좋을 텐데’예요. 하고 싶지만 못 하는 일을 말해요.",
        "can 대신 과거형 could를 써요. 뒤에는 동사 원래 모양을 써요.",
        "부드럽게 거절할 때도 써요. (I wish I could, but…: 그러고 싶은데…)"
      ],
      examples: [
        { en: "I wish I could help.", ko: "도와줄 수 있으면 좋을 텐데." },
        { en: "I wish I could stay longer.", ko: "더 있을 수 있으면 좋을 텐데." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나도 갈 수 있으면 좋을 텐데.", before: "I wish I", after: "go too.", answers: ["could"],
        wrong: { "can": "I wish 뒤에는 can 대신 could를 써요.", "will": "I wish 뒤에는 will 대신 could를 써요." },
        tip: { en: "Take me with you!", why: "‘나도 데려가!’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "노래 잘하면 좋을 텐데.", before: "I wish I could", after: "well.", answers: ["sing"],
        wrong: { "singing": "could 뒤에는 동사 원래 모양 sing을 써요.", "sang": "could 뒤에는 동사 원래 모양 sing을 써요." },
        tip: { en: "I'm a terrible singer.", why: "‘나 노래 진짜 못해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "더 잘 수 있으면 좋을 텐데.", before: "I wish I could", after: "more.", answers: ["sleep"],
        wrong: { "sleeping": "could 뒤에는 동사 원래 모양 sleep을 써요.", "slept": "could 뒤에는 동사 원래 모양 sleep을 써요." },
        tip: { en: "I need more sleep.", why: "‘잠이 더 필요해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "시간을 되돌릴 수 있으면 좋을 텐데.", before: "I", after: "I could go back in time.", answers: ["wish"],
        wrong: { "hope": "할 수 없는 일에 대한 바람은 hope가 아니라 wish예요.", "want": "‘~라면 좋을 텐데’는 want가 아니라 wish예요." },
        tip: { en: "If only I could turn back time.", why: "turn back time은 ‘시간을 되돌리다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "운전할 줄 알면 좋을 텐데.", before: "I wish", after: "could drive.", answers: ["I"],
        wrong: { "me": "‘내가’는 me가 아니라 I예요.", "my": "‘내가’는 my가 아니라 I예요." },
        tip: { en: "I want to learn to drive.", why: "learn to drive는 ‘운전을 배우다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너랑 같이 있을 수 있으면 좋을 텐데.", answers: ["I wish I could be with you.", "I wish I could stay with you."],
        wrong: { "i wish i can be with you": "I wish 뒤에는 can 대신 could를 써요.", "i wish i could to be with you": "could 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I miss you.", why: "‘보고 싶어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나도 그거 살 수 있으면 좋을 텐데.", answers: ["I wish I could buy it.", "I wish I could buy that.", "I wish I could afford it."],
        wrong: { "i wish i could bought it": "could 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "It's too expensive for me.", why: "‘나한텐 너무 비싸’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내일 쉴 수 있으면 좋을 텐데.", answers: ["I wish I could take tomorrow off.", "I wish I could rest tomorrow.", "I wish I could take a day off tomorrow."],
        wrong: { "i wish i can rest tomorrow": "I wish 뒤에는 can 대신 could를 써요." },
        tip: { en: "I need a day off.", why: "‘쉬는 날이 필요해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "영어로 자유롭게 말할 수 있으면 좋을 텐데.", answers: ["I wish I could speak English freely.", "I wish I could speak English fluently.", "I wish I could speak English well."],
        wrong: { "i wish i could speaking english freely": "could 뒤에는 동사 원래 모양 speak를 써요." },
        tip: { en: "I want to be fluent in English.", why: "fluent는 ‘유창한’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "날 수 있으면 좋을 텐데.", answers: ["I wish I could fly."],
        ctx: { lead: "help 대신 ‘날다(fly)’로 바꿔 보세요.", en: "I wish I could help." },
        wrong: { "i wish i can fly": "I wish 뒤에는 can 대신 could를 써요." },
        tip: { en: "If only I had wings.", why: "wings는 ‘날개’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "가고 싶은데, 일해야 해.", answers: ["I wish I could, but I have to work.", "I wish I could, but I need to work."],
        dialog: { a: "Can you come to my party?", aKo: "내 파티에 올 수 있어?" },
        wrong: { "i wish i can but i have to work": "I wish 뒤에는 can 대신 could를 써요." },
        tip: { en: "Sorry, I have to work that day.", why: "‘미안, 그날 일해야 해’라는 말이에요." } }
    ]
  };
})(window.EP);
