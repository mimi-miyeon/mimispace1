/* 세션 222. I'm ready to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[222] = {
    no: 222, form: "I'm ready to ~.", stem: "I'm ready to/I'm not ready to", meaning: "나는 ~할 준비가 되었어요.",
    hint: "I'm ready to + 동사",
    intro: {
      blocks: [["I'm ready", "나는 준비됐다"], ["to ~", "~할"]],
      lines: [
        "I'm ready to + 동사는 ‘나 ~할 준비 됐어’예요.",
        "to 뒤에는 동사 원래 모양을 써요. 명사는 ready for ~예요. (ready for the test)",
        "‘아직 준비 안 됐어’는 I'm not ready to ~예요."
      ],
      examples: [
        { en: "I'm ready to go.", ko: "나 갈 준비 됐어." },
        { en: "I'm ready to order.", ko: "주문할 준비 됐어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 갈 준비 됐어.", before: "I'm ready to", after: ".", answers: ["go"],
        wrong: { "going": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Let's go!", why: "‘가자!’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "주문할 준비 됐어요.", before: "I'm ready to", after: ".", answers: ["order"],
        wrong: { "ordering": "to 뒤에는 동사 원래 모양 order를 써요." },
        tip: { en: "We're ready.", why: "‘저희 준비됐어요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "시작할 준비 됐어.", before: "I'm", after: "to start.", answers: ["ready"],
        wrong: { "already": "‘준비된’은 ready예요. already는 ‘이미’예요." },
        tip: { en: "Let's begin.", why: "‘시작하자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 아직 결정할 준비 안 됐어.", before: "I'm not ready", after: "decide yet.", answers: ["to"],
        wrong: { "for": "동사 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Give me more time.", why: "‘시간 좀 더 줘’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 시험 준비 됐어.", before: "I'm ready", after: "the test.", answers: ["for"],
        wrong: { "to": "명사 앞에는 for를 써요." },
        tip: { en: "Bring it on!", why: "‘덤벼!’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 집에 갈 준비 됐어.", answers: ["I'm ready to go home."],
        wrong: { "i am ready to go to home": "home 앞에는 to를 붙이지 않아요.", "i ready to go home": "I 뒤에 am이 필요해요. I'm이에요." },
        tip: { en: "Let's call it a day.", why: "call it a day는 ‘오늘은 그만하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 다시 시작할 준비 됐어.", answers: ["I'm ready to start again.", "I'm ready to start over."],
        wrong: { "i am ready to starting again": "to 뒤에는 동사 원래 모양 start를 써요." },
        tip: { en: "New beginnings.", why: "‘새로운 시작’이라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 아직 떠날 준비 안 됐어.", answers: ["I'm not ready to leave yet.", "I'm not ready to go yet."],
        wrong: { "i am not ready to leaving yet": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Five more minutes.", why: "‘5분만 더’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 도와줄 준비 됐어.", answers: ["I'm ready to help.", "I'm ready to help you."],
        wrong: { "i am ready to helping": "to 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Just say the word.", why: "‘말만 해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 먹을 준비 됐어.", answers: ["I'm ready to eat."],
        ctx: { lead: "go 대신 ‘먹다(eat)’로 바꿔 보세요.", en: "I'm ready to go." },
        wrong: { "i am ready to eating": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "I'm starving.", why: "starving은 ‘배고파 죽겠는’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나 출발할 준비 됐어.", answers: ["Yes, I'm ready to go.", "Yeah, I'm ready to go.", "Yes, I'm ready to leave."],
        dialog: { a: "Are you all packed?", aKo: "짐 다 쌌어?" },
        wrong: { "yes i am ready to going": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Yes, let's hit the road.", why: "hit the road는 ‘출발하다’예요." } }
    ]
  };
})(window.EP);
