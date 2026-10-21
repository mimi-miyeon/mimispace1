/* 세션 32. I'm sorry that ~. (that 없는 형태는 alts로 인정) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[32] = {
    no: 32, form: "I'm sorry that ~.", stem: "I'm sorry that", meaning: "~해서 미안해요.",
    hint: "I'm sorry that + 주어 + 동사",
    intro: {
      blocks: [["I'm sorry", "미안해"], ["that", "~해서"], ["~", "주어 + 동사"]],
      lines: [
        "I'm sorry that ~도 ‘~해서 미안해 / 안됐다’예요.",
        "that 뒤에는 ‘주어 + 동사’로 문장을 써요. (that I was late)",
        "지난 일은 과거형으로 써요. 말할 때는 that을 빼기도 해요."
      ],
      examples: [
        { en: "I'm sorry that I was late.", ko: "늦어서 미안해." },
        { en: "I'm sorry that you're sick.", ko: "네가 아프다니 안됐다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 소리 질러서 미안해.", before: "I'm sorry", after: "I yelled.", answers: ["that"],
        wrong: { "for": "for 뒤에는 명사나 동사-ing가 와요. ‘주어 + 동사’ 앞에는 that을 써요.", "to": "‘주어 + 동사’ 앞에는 to가 아니라 that을 써요." },
        tip: { en: "I shouldn't have yelled.", why: "‘소리 지르지 말았어야 했는데’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 화내서 미안해.", before: "I'm sorry that I", after: "angry.", answers: ["got", "was"],
        wrong: { "get": "지난 일이라 과거형 got을 써요.", "am": "지난 일이라 과거형 was를 써요." },
        tip: { en: "I lost my temper. Sorry.", why: "lose my temper는 ‘욱하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네가 기다려야 했다니 미안해.", before: "I'm sorry that you had to", after: ".", answers: ["wait"],
        wrong: { "waited": "had to 뒤에는 동사 원래 모양 wait을 써요.", "waiting": "had to 뒤에는 동사 원래 모양 wait을 써요." },
        tip: { en: "Sorry to keep you waiting.", why: "keep ~ waiting은 ‘~를 기다리게 하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 못 가서 미안해.", before: "I'm sorry that I", after: "come.", answers: ["couldn't"],
        wrong: { "cannot": "지난 일이라 can't가 아니라 couldn't를 써요.", "did not": "‘못 갔다’는 didn't가 아니라 couldn't예요." },
        tip: { en: "Sorry I missed it.", why: "Sorry I ~처럼 that 없이도 말해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 그걸 놓쳤다니 아쉽다.", before: "I'm", after: "that you missed it.", answers: ["sorry"],
        wrong: { "apologize": "‘안됐다, 미안해’는 I'm sorry예요. apologize는 동사라 I'm 뒤에 쓰지 않아요." },
        tip: { en: "What a shame.", why: "‘아깝다, 아쉽다’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 너무 바빴어서 미안해.", answers: ["I'm sorry that I was so busy.", "I'm sorry that I was too busy.", "I'm sorry that I've been so busy."],
        alts: ["I'm sorry I was so busy.", "I'm sorry I've been so busy."],
        wrong: { "i am sorry that i am so busy": "지난 일이라 과거형 was를 써요.", "i am sorry that so busy": "that 뒤에는 ‘주어 + 동사’가 와요. I was예요." },
        tip: { en: "Sorry I've been out of touch.", why: "out of touch는 ‘연락이 뜸한’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네가 다쳤다니 안됐다.", answers: ["I'm sorry that you got hurt.", "I'm sorry that you were hurt."],
        alts: ["I'm sorry you got hurt."],
        wrong: { "i am sorry that you get hurt": "지난 일이라 과거형 got을 써요.", "i am sorry that you hurt": "‘다쳤다’는 got hurt예요. you hurt는 ‘네가 아프게 했다’예요." },
        tip: { en: "Sorry to hear you got hurt.", why: "Sorry to hear ~는 ‘~라니 안됐다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 말 안 해서 미안해.", answers: ["I'm sorry that I didn't tell you.", "I'm sorry that I didn't say anything."],
        alts: ["I'm sorry I didn't tell you."],
        wrong: { "i am sorry that i do not tell you": "지난 일이라 didn't를 써요.", "i am sorry that i did not told you": "didn't 뒤에는 동사 원래 모양 tell을 써요." },
        tip: { en: "I should have told you.", why: "‘말했어야 했는데’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그런 일이 생겨서 안됐다.", answers: ["I'm sorry that it happened.", "I'm sorry that happened."],
        alts: ["I'm sorry it happened."],
        wrong: { "i am sorry that it happen": "지난 일이라 과거형 happened를 써요." },
        tip: { en: "That's too bad.", why: "‘아쉽다, 안됐다’라는 짧은 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 잊어버려서 미안해.", answers: ["I'm sorry that I forgot."], alts: ["I'm sorry I forgot."],
        ctx: { lead: "I was late 대신 ‘내가 잊어버렸다’로 바꿔 보세요.", en: "I'm sorry that I was late." },
        wrong: { "i am sorry that i forget": "지난 일이라 과거형 forgot을 써요.", "i am sorry for i forgot": "‘주어 + 동사’ 앞에는 for가 아니라 that을 써요." },
        tip: { en: "Sorry, it slipped my mind.", why: "slip my mind는 ‘깜빡하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아, 떨어졌다니 안됐다.", answers: ["Oh, I'm sorry that you failed.", "I'm sorry that you failed.", "Oh, I'm sorry that you failed the test."],
        alts: ["Oh, I'm sorry you failed.", "I'm sorry you failed."],
        dialog: { a: "I failed the test.", aKo: "나 시험 떨어졌어." },
        wrong: { "oh i am sorry that you fail": "지난 일이라 과거형 failed를 써요." },
        tip: { en: "Oh, I'm sorry to hear that.", why: "Sorry to hear that은 ‘그 말 들으니 안됐다’예요." } }
    ]
  };
})(window.EP);
