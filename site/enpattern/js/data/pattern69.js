/* 세션 69. I didn't want you to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[69] = {
    no: 69, form: "I didn't want you to ~.", stem: "I didn't want you to", meaning: "난 당신이 ~하지 않기를 바랐어요.",
    hint: "I didn't want you to + 동사",
    intro: {
      blocks: [["I didn't want", "나는 원하지 않았다"], ["you to ~", "네가 ~하는 것을"]],
      lines: [
        "I didn't want you to ~는 ‘네가 ~하는 게 싫었어 / 네가 ~하지 않길 바랐어’예요.",
        "want 뒤에 사람(you)을 쓰고, 그 사람이 할 일을 to + 동사로 붙여요.",
        "걱정돼서 말 안 했을 때 자주 써요. (I didn't want you to worry.)"
      ],
      examples: [
        { en: "I didn't want you to worry.", ko: "네가 걱정하는 게 싫었어." },
        { en: "I didn't want you to know.", ko: "네가 몰랐으면 했어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네가 다치는 게 싫었어.", before: "I didn't want you", after: "get hurt.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I was worried about you.", why: "‘네가 걱정됐어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 기다리는 게 싫었어.", before: "I didn't want", after: "to wait.", answers: ["you"],
        wrong: { "your": "want 뒤에는 사람 you를 써요." },
        tip: { en: "I didn't want to keep you waiting.", why: "keep ~ waiting은 ‘기다리게 하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네가 화내는 게 싫었어.", before: "I didn't", after: "you to get angry.", answers: ["want"],
        wrong: { "wanted": "didn't 뒤에는 동사 원래 모양 want를 써요." },
        tip: { en: "I didn't want to upset you.", why: "upset은 ‘속상하게 하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네가 혼자 가는 게 싫었어.", before: "I didn't want you to", after: "alone.", answers: ["go"],
        wrong: { "going": "to 뒤에는 동사 원래 모양 go를 써요.", "went": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I wanted to go with you.", why: "‘같이 가고 싶었어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 그거 보는 게 싫었어.", before: "I", after: "want you to see that.", answers: ["didn't"],
        wrong: { "do not": "지난 일이라 didn't를 써요." },
        tip: { en: "I wanted to hide it.", why: "hide는 ‘숨기다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네가 슬퍼하는 게 싫었어.", answers: ["I didn't want you to be sad.", "I didn't want you to feel sad."],
        wrong: { "i did not want you to sad": "sad 앞에 be를 붙여요. to be sad예요.", "i did not want you be sad": "want you 뒤에 to를 붙여요." },
        tip: { en: "I didn't want to make you sad.", why: "make ~ sad는 ‘~를 슬프게 하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네가 돈 쓰는 게 싫었어.", answers: ["I didn't want you to spend money.", "I didn't want you to spend any money."],
        wrong: { "i did not want you to spending money": "to 뒤에는 동사 원래 모양 spend를 써요." },
        tip: { en: "I wanted to pay for it.", why: "‘내가 내고 싶었어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네가 떠나는 게 싫었어.", answers: ["I didn't want you to leave.", "I didn't want you to go."],
        wrong: { "i did not want you leave": "want you 뒤에 to를 붙여요.", "i did not wanted you to leave": "didn't 뒤에는 동사 원래 모양 want를 써요." },
        tip: { en: "I wanted you to stay.", why: "‘네가 있었으면 했어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네가 오해하는 게 싫었어.", answers: ["I didn't want you to misunderstand.", "I didn't want you to get the wrong idea."],
        wrong: { "i did not want you to misunderstanding": "to 뒤에는 동사 원래 모양 misunderstand를 써요." },
        tip: { en: "I didn't want any confusion.", why: "confusion은 ‘혼란’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 늦는 게 싫었어.", answers: ["I didn't want you to be late."],
        ctx: { lead: "worry 대신 ‘늦다(be late)’로 바꿔 보세요.", en: "I didn't want you to worry." },
        wrong: { "i did not want you to late": "late 앞에 be를 붙여요. to be late예요." },
        tip: { en: "I wanted you to be on time.", why: "‘네가 제시간에 오길 바랐어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네가 스트레스 받는 게 싫었어.", answers: ["I didn't want you to get stressed.", "I didn't want you to be stressed.", "I didn't want you to stress out."],
        dialog: { a: "Why didn't you tell me?", aKo: "왜 나한테 말 안 했어?" },
        wrong: { "i did not want you to be stressful": "stressful은 ‘스트레스를 주는’이에요. 네가 스트레스 받으면 stressed예요." },
        tip: { en: "I didn't want to stress you out.", why: "stress out은 ‘스트레스 주다’예요." } }
    ]
  };
})(window.EP);
