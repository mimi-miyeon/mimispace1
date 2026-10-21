/* 세션 211. I'm about to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[211] = {
    no: 211, form: "I'm about to ~.", stem: "I'm about to/I was about to", meaning: "막 ~하려던 참이에요.",
    hint: "I'm about to + 동사",
    intro: {
      blocks: [["I'm about", "나는 막 ~하려는 참이다"], ["to ~", "~하려고"]],
      lines: [
        "I'm about to + 동사는 ‘막 ~하려던 참이야’예요. 곧바로 할 일을 말해요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "지난 일은 I was about to ~(막 ~하려던 참이었어)예요."
      ],
      examples: [
        { en: "I'm about to leave.", ko: "나 막 나가려던 참이야." },
        { en: "I was about to call you.", ko: "막 너한테 전화하려던 참이었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 막 나가려던 참이야.", before: "I'm about to", after: ".", answers: ["leave"],
        wrong: { "leaving": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "I'm heading out.", why: "head out은 ‘나가다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "막 너한테 전화하려던 참이었어.", before: "I was about to", after: "you.", answers: ["call"],
        wrong: { "calling": "to 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "Great timing!", why: "‘타이밍 좋다!’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 막 자려던 참이야.", before: "I'm about", after: "go to bed.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I'm getting ready for bed.", why: "‘잘 준비 하고 있어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 막 먹으려던 참이야.", before: "I'm", after: "to eat.", answers: ["about"],
        wrong: { "around": "‘막 ~하려던 참’은 about to예요." },
        tip: { en: "Dinner's ready.", why: "‘저녁 다 됐어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "막 시작하려던 참이야.", before: "", after: "about to start.", answers: ["I'm"],
        wrong: { "i": "‘막 ~하려던 참이야’는 I'm about to예요." },
        tip: { en: "Just in time.", why: "‘딱 맞춰 왔네’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 막 샤워하려던 참이야.", answers: ["I'm about to take a shower.", "I'm about to shower."],
        wrong: { "i am about to taking a shower": "to 뒤에는 동사 원래 모양 take를 써요.", "i about to take a shower": "I 뒤에 am이 필요해요. I'm이에요." },
        tip: { en: "Can I call you back?", why: "‘다시 전화해도 돼?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "막 너한테 문자하려던 참이었어.", answers: ["I was about to text you."],
        wrong: { "i am about to texted you": "to 뒤에는 동사 원래 모양 text를 써요." },
        tip: { en: "You read my mind.", why: "‘내 마음 읽었네’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 막 그만두려던 참이야.", answers: ["I'm about to quit.", "I'm about to give up."],
        wrong: { "i am about to quitting": "to 뒤에는 동사 원래 모양 quit을 써요." },
        tip: { en: "Don't give up yet.", why: "‘아직 포기하지 마’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 막 주문하려던 참이야.", answers: ["I'm about to order."],
        wrong: { "i am about to ordering": "to 뒤에는 동사 원래 모양 order를 써요." },
        tip: { en: "Want to join me?", why: "‘같이 할래?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 막 운동하려던 참이야.", answers: ["I'm about to work out.", "I'm about to exercise."],
        ctx: { lead: "leave 대신 ‘운동하다(work out)’로 바꿔 보세요.", en: "I'm about to leave." },
        wrong: { "i am about to working out": "to 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "I'm going to the gym.", why: "‘헬스장 가’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 막 나가려던 참이야.", answers: ["Yes, I'm about to leave.", "Yeah, I'm about to leave.", "Yes, I'm about to go."],
        dialog: { a: "Are you still at the office?", aKo: "아직 사무실이야?" },
        wrong: { "yes i am about to leaving": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Yes, I'm heading out now.", why: "head out은 ‘나가다’예요." } }
    ]
  };
})(window.EP);
