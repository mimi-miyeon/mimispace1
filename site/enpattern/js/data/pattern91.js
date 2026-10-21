/* 세션 91. It is hard to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[91] = {
    no: 91, form: "It is hard to ~.", stem: "It's hard to/It is hard to", meaning: "~하기는 힘들어요.",
    hint: "It's hard to + 동사",
    intro: {
      blocks: [["It's hard", "어렵다"], ["to ~", "~하는 것은"]],
      lines: [
        "It's hard to + 동사는 ‘~하기 어려워 / 힘들어’예요.",
        "It이 ‘to 뒤의 일’을 대신 가리켜요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "It's hard to say.", ko: "말하기 어려워." },
        { en: "It's hard to believe.", ko: "믿기 어려워." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "일찍 일어나기 힘들어.", before: "It's hard", after: "get up early.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I'm not a morning person.", why: "‘나 아침형 아니야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "결정하기 어려워.", before: "It's hard to", after: ".", answers: ["decide"],
        wrong: { "decision": "decision은 ‘결정’이라는 명사예요. to 뒤에는 동사 decide를 써요.", "deciding": "to 뒤에는 동사 원래 모양 decide를 써요." },
        tip: { en: "I can't decide.", why: "‘결정 못 하겠어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "잠들기 힘들어.", before: "It's hard to fall", after: ".", answers: ["asleep"],
        wrong: { "sleep": "‘잠들다’는 fall asleep이에요." },
        tip: { en: "I can't sleep.", why: "‘잠이 안 와’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "설명하기 어려워.", before: "It's", after: "to explain.", answers: ["hard", "difficult"],
        wrong: { "hardly": "hardly는 ‘거의 ~ 않다’예요. ‘어려운’은 hard예요." },
        tip: { en: "It's complicated.", why: "complicated는 ‘복잡한’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "주차하기 힘들어.", before: "", after: "hard to park.", answers: ["It's"],
        wrong: { "i am": "‘~하기 힘들어’는 It's hard to예요. I'm hard는 다른 뜻이에요." },
        tip: { en: "Parking is a nightmare.", why: "nightmare는 ‘악몽’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "돈 모으기 힘들어.", answers: ["It's hard to save money."],
        wrong: { "it is hard to saving money": "to 뒤에는 동사 원래 모양 save를 써요.", "it is hard save money": "hard 뒤에 to를 붙여요. hard to save예요." },
        tip: { en: "Saving money isn't easy.", why: "‘돈 모으는 거 쉽지 않아’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "새 친구 사귀기 어려워.", answers: ["It's hard to make new friends."],
        wrong: { "it is hard to make a new friends": "friends는 여러 명이라 a를 붙이지 않아요.", "it is hard to make new friend": "‘친구를 사귀다’는 make friends예요." },
        tip: { en: "Making friends is tough.", why: "tough는 ‘힘든’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "아침에 집중하기 힘들어.", answers: ["It's hard to focus in the morning.", "It's hard to concentrate in the morning."],
        wrong: { "it is hard to focusing in the morning": "to 뒤에는 동사 원래 모양 focus를 써요." },
        tip: { en: "I can't focus in the morning.", why: "‘아침엔 집중이 안 돼’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그 사람 이해하기 힘들어.", answers: ["It's hard to understand him.", "It's hard to understand her."],
        wrong: { "it is hard understanding him": "hard 뒤에는 to + 동사를 써요." },
        tip: { en: "I don't get him.", why: "get은 ‘이해하다’라는 뜻도 있어요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "잊기 힘들어.", answers: ["It's hard to forget.", "It's hard to forget it."],
        ctx: { lead: "say 대신 ‘잊다(forget)’로 바꿔 보세요.", en: "It's hard to say." },
        wrong: { "it is hard to forgot": "to 뒤에는 동사 원래 모양 forget을 써요." },
        tip: { en: "I can't stop thinking about it.", why: "‘계속 생각나’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그만두기 어려워.", answers: ["It's hard to quit."], alts: ["It's not easy to quit."],
        dialog: { a: "Why don't you quit?", aKo: "그만두지 그래?" },
        wrong: { "it is hard to quitting": "to 뒤에는 동사 원래 모양 quit을 써요." },
        tip: { en: "It's not that simple.", why: "‘그렇게 간단하지 않아’라는 말이에요." } }
    ]
  };
})(window.EP);
