/* 세션 37. I was ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[37] = {
    no: 37, form: "I was ~ing.", stem: "I was", meaning: "나는 ~하고 있었어요.",
    hint: "I was + 동사-ing",
    intro: {
      blocks: [["I was", "나는 ~였다"], ["~ing", "~하고 있는"]],
      lines: [
        "I was + 동사-ing는 ‘~하고 있었어’예요. 그때 하던 중이던 일을 말해요.",
        "‘전화 왔을 때 나 자고 있었어’처럼 다른 일이 생긴 순간을 설명할 때 자주 써요.",
        "I 뒤에는 was예요. were는 you, we, they와 써요."
      ],
      examples: [
        { en: "I was sleeping.", ko: "나 자고 있었어." },
        { en: "I was watching TV.", ko: "나 TV 보고 있었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 일하고 있었어.", before: "I", after: "working.", answers: ["was"],
        wrong: { "am": "지난 일이라 was를 써요.", "were": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "I was at work.", why: "‘나 회사에 있었어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 운전하고 있었어.", before: "I was", after: ".", answers: ["driving"],
        wrong: { "drive": "was 뒤에는 동사에 ing를 붙여요. driving이에요.", "drove": "was 뒤에는 동사에 ing를 붙여요. driving이에요.", "driveing": "e로 끝나는 동사는 e를 빼고 ing를 붙여요. driving이에요." },
        tip: { en: "I was behind the wheel.", why: "behind the wheel은 ‘운전 중인’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 너 생각하고 있었어.", before: "I was", after: "about you.", answers: ["thinking"],
        wrong: { "think": "was 뒤에는 동사에 ing를 붙여요. thinking이에요." },
        tip: { en: "You were on my mind.", why: "on my mind는 ‘내 마음속에’라는 뜻이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 저녁 먹고 있었어.", before: "I", after: "having dinner.", answers: ["was"],
        wrong: { "am": "지난 일이라 was를 써요.", "were": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "I was in the middle of dinner.", why: "in the middle of는 ‘한창 ~하는 중’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그냥 쉬고 있었어.", before: "I was just", after: ".", answers: ["resting", "relaxing"],
        wrong: { "rest": "was 뒤에는 동사에 ing를 붙여요. resting이에요." },
        tip: { en: "I was taking it easy.", why: "take it easy는 ‘편히 쉬다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 샤워하고 있었어.", answers: ["I was taking a shower.", "I was showering."], alts: ["I was in the shower."],
        wrong: { "i was take a shower": "was 뒤에는 동사에 ing를 붙여요. taking이에요.", "i am taking a shower": "지난 일이라 was를 써요." },
        tip: { en: "I was in the shower.", why: "‘샤워 중이었어’를 짧게 말해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 책 읽고 있었어.", answers: ["I was reading a book.", "I was reading."],
        wrong: { "i was read a book": "was 뒤에는 동사에 ing를 붙여요. reading이에요.", "i were reading a book": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "I was in the middle of a book.", why: "in the middle of는 ‘한창 ~하는 중’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 너 기다리고 있었어.", answers: ["I was waiting for you."],
        wrong: { "i was waiting you": "‘~를 기다리다’는 wait 뒤에 for를 붙여요.", "i was wait for you": "was 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "I've been waiting for you.", why: "‘계속 기다리고 있었어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 친구랑 통화하고 있었어.", answers: ["I was talking to a friend on the phone.", "I was talking to my friend on the phone.", "I was talking on the phone with a friend."],
        alts: ["I was on the phone with a friend.", "I was on the phone with my friend."],
        wrong: { "i was talk to a friend on the phone": "was 뒤에는 동사에 ing를 붙여요. talking이에요." },
        tip: { en: "I was on a call.", why: "on a call은 ‘통화 중인’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 운동하고 있었어.", answers: ["I was working out.", "I was exercising."],
        ctx: { lead: "sleeping 대신 ‘운동하다(working out)’로 바꿔 보세요.", en: "I was sleeping." },
        wrong: { "i was work out": "was 뒤에는 동사에 ing를 붙여요. working out이에요." },
        tip: { en: "I was at the gym.", why: "‘헬스장에 있었어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 요리하고 있었어.", answers: ["Sorry, I was cooking.", "I'm sorry, I was cooking."],
        dialog: { a: "Why didn't you pick up?", aKo: "왜 전화 안 받았어?" },
        wrong: { "sorry i am cooking": "전화 온 건 지난 일이라 was를 써요.", "sorry i was cook": "was 뒤에는 동사에 ing를 붙여요. cooking이에요." },
        tip: { en: "Sorry, my hands were full.", why: "my hands were full은 ‘손이 바빴어’예요." } }
    ]
  };
})(window.EP);
