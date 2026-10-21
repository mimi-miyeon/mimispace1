/* 세션 228. It is important to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[228] = {
    no: 228, form: "It is important to ~.", stem: "It's important to/It is important to/It's important not to", meaning: "~하는 것이 중요해요.",
    hint: "It's important to + 동사",
    intro: {
      blocks: [["It's important", "중요하다"], ["to ~", "~하는 것이"]],
      lines: [
        "It's important to + 동사는 ‘~하는 게 중요해’예요.",
        "It이 to 뒤의 일을 대신 가리켜요. to 뒤에는 동사 원래 모양을 써요.",
        "‘~하지 않는 게 중요해’는 It's important not to ~예요."
      ],
      examples: [
        { en: "It's important to sleep well.", ko: "잠을 잘 자는 게 중요해." },
        { en: "It's important to be on time.", ko: "시간 지키는 게 중요해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "잠을 잘 자는 게 중요해.", before: "It's important to", after: "well.", answers: ["sleep"],
        wrong: { "sleeping": "to 뒤에는 동사 원래 모양 sleep을 써요." },
        tip: { en: "Sleep is key.", why: "key는 ‘핵심’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "시간 지키는 게 중요해.", before: "It's important to be on", after: ".", answers: ["time"],
        wrong: { "times": "‘제시간에’는 on time이에요." },
        tip: { en: "Don't be late.", why: "‘늦지 마’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "물을 많이 마시는 게 중요해.", before: "It's", after: "to drink a lot of water.", answers: ["important"],
        wrong: { "importance": "‘중요한’은 형용사 important예요." },
        tip: { en: "Stay hydrated.", why: "hydrated는 ‘수분이 충분한’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "포기하지 않는 게 중요해.", before: "It's important", after: "to give up.", answers: ["not"],
        wrong: { "no": "‘~하지 않는 게’는 not to예요." },
        tip: { en: "Keep going.", why: "‘계속 가’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "매일 연습하는 게 중요해.", before: "It's important to", after: "every day.", answers: ["practice"],
        wrong: { "practicing": "to 뒤에는 동사 원래 모양 practice를 써요." },
        tip: { en: "Practice makes perfect.", why: "‘연습하면 완벽해져’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "잘 듣는 게 중요해.", answers: ["It's important to listen.", "It's important to listen well.", "It's important to listen carefully."],
        wrong: { "it is important to listening": "to 뒤에는 동사 원래 모양 listen을 써요.", "it is importance to listen": "‘중요한’은 형용사 important예요." },
        tip: { en: "Listen more, talk less.", why: "‘더 듣고 덜 말해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "아침 먹는 게 중요해.", answers: ["It's important to eat breakfast.", "It's important to have breakfast."],
        wrong: { "it is important to eat a breakfast": "breakfast 앞에는 a를 붙이지 않아요." },
        tip: { en: "Don't skip breakfast.", why: "skip은 ‘거르다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "솔직한 게 중요해.", answers: ["It's important to be honest."],
        wrong: { "it is important to honest": "honest 앞에 be를 붙여요." },
        tip: { en: "Honesty matters.", why: "matter는 ‘중요하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "쉬는 게 중요해.", answers: ["It's important to rest.", "It's important to take breaks.", "It's important to take a break."],
        wrong: { "it is important to resting": "to 뒤에는 동사 원래 모양 rest를 써요." },
        tip: { en: "Take it easy.", why: "‘무리하지 마’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "운동하는 게 중요해.", answers: ["It's important to exercise.", "It's important to work out."],
        ctx: { lead: "sleep well 대신 ‘운동하다(exercise)’로 바꿔 보세요.", en: "It's important to sleep well." },
        wrong: { "it is important to exercising": "to 뒤에는 동사 원래 모양 exercise를 써요." },
        tip: { en: "Stay active.", why: "‘활동적으로 지내’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 계획 세우는 게 중요해.", answers: ["Yes, it's important to make a plan.", "Yeah, it's important to make a plan.", "Yes, it's important to plan.", "It's important to make a plan."],
        dialog: { a: "Should I plan my trip first?", aKo: "여행 계획 먼저 세워야 할까?" },
        wrong: { "yes it is important to make plan": "plan은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Yes, plan ahead.", why: "plan ahead는 ‘미리 계획하다’예요." } }
    ]
  };
})(window.EP);
