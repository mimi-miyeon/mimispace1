/* 세션 121. If I were ..., I would ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[121] = {
    no: 121, form: "If I were ..., I would ~.", stem: "If I were", meaning: "내가 ...라면 ~할 텐데.",
    hint: "If I were + 명사/형용사, I would + 동사",
    intro: {
      blocks: [["If I were ...", "내가 ...라면"], ["I would ~", "~할 텐데"]],
      lines: [
        "If I were ..., I would ~는 ‘내가 ...라면 ~할 텐데’예요. 사실이 아닌 상황을 상상해요.",
        "I 뒤지만 was가 아니라 were를 써요. (말할 때는 was도 써요)",
        "뒤에는 I would(I'd) + 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "If I were rich, I would travel the world.", ko: "내가 부자라면 세계 여행을 할 텐데." },
        { en: "If I were you, I would wait.", ko: "내가 너라면 기다릴 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 부자라면 집을 살 텐데.", before: "If I were rich, I", after: "buy a house.", answers: ["would"],
        wrong: { "will": "상상하는 말이라 will이 아니라 would를 써요." },
        tip: { en: "I wish I had money.", why: "‘돈이 있으면 좋겠다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 그거 살 거야.", before: "If I", after: "you, I would buy it.", answers: ["were"],
        wrong: { "am": "상상하는 말이라 am이 아니라 were를 써요.", "was": "If I 뒤에는 were를 써요." },
        tip: { en: "Go for it.", why: "‘해 봐’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 더 키가 크면 농구를 할 텐데.", before: "If I were taller, I would", after: "basketball.", answers: ["play"],
        wrong: { "played": "would 뒤에는 동사 원래 모양 play를 써요." },
        tip: { en: "I love basketball.", why: "‘농구 좋아해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 쉴 거야.", before: "If I were", after: ", I would rest.", answers: ["you"],
        wrong: { "your": "‘내가 너라면’은 If I were you예요." },
        tip: { en: "Take a break.", why: "‘좀 쉬어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 새라면 너한테 날아갈 텐데.", before: "", after: "I were a bird, I would fly to you.", answers: ["If"],
        wrong: { "when": "상상할 때는 If를 써요." },
        tip: { en: "I miss you.", why: "‘보고 싶어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 너라면 그에게 전화할 거야.", answers: ["If I were you, I would call him.", "If I were you, I'd call him."], alts: ["If I was you, I would call him.", "If I was you, I'd call him."],
        wrong: { "if i am you i will call him": "상상하는 말이라 were, would를 써요.", "if i were you i would called him": "would 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "Just call him.", why: "‘그냥 전화해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 너라면 일찍 잘 거야.", answers: ["If I were you, I would go to bed early.", "If I were you, I'd go to bed early.", "If I were you, I would sleep early."], alts: ["If I was you, I would go to bed early.", "If I was you, I'd go to bed early."],
        wrong: { "if i were you i will go to bed early": "상상하는 말이라 will이 아니라 would를 써요." },
        tip: { en: "Get some sleep.", why: "‘좀 자’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 더 젊다면 다시 시작할 텐데.", answers: ["If I were younger, I would start again.", "If I were younger, I'd start again.", "If I were younger, I would start over."], alts: ["If I was younger, I would start again.", "If I was younger, I'd start again."],
        wrong: { "if i was younger i will start again": "상상하는 말이라 will이 아니라 would를 써요." },
        tip: { en: "It's never too late.", why: "‘절대 늦지 않았어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내가 사장이라면 월급을 올려 줄 텐데.", answers: ["If I were the boss, I would raise salaries.", "If I were the boss, I'd raise salaries.", "If I were the boss, I would give everyone a raise."],
        wrong: { "if i were the boss i will raise salaries": "상상하는 말이라 will이 아니라 would를 써요." },
        tip: { en: "Everyone deserves more.", why: "deserve는 ‘받을 자격이 있다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 너라면 그 일 맡을 거야.", answers: ["If I were you, I would take the job.", "If I were you, I'd take the job."],
        ctx: { lead: "wait 대신 ‘그 일을 맡다(take the job)’로 바꿔 보세요.", en: "If I were you, I would wait." },
        wrong: { "if i were you i would took the job": "would 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "It's a great chance.", why: "chance는 ‘기회’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 너라면 사과할 거야.", answers: ["If I were you, I would apologize.", "If I were you, I'd apologize.", "If I were you, I would say sorry."], alts: ["If I was you, I would apologize.", "If I was you, I'd apologize."],
        dialog: { a: "What should I do? She's still angry.", aKo: "어떡하지? 걔 아직 화났어." },
        wrong: { "if i am you i will apologize": "상상하는 말이라 were, would를 써요." },
        tip: { en: "Just say sorry.", why: "‘그냥 미안하다고 해’라는 말이에요." } }
    ]
  };
})(window.EP);
