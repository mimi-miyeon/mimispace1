/* 세션 35. I'm afraid ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[35] = {
    no: 35, form: "I'm afraid ~.", stem: "I'm afraid", meaning: "죄송하지만 ~입니다.",
    hint: "I'm afraid + 주어 + 동사",
    intro: {
      blocks: [["I'm afraid", "유감이지만"], ["~", "주어 + 동사"]],
      lines: [
        "I'm afraid ~는 ‘미안하지만 / 유감이지만 ~이야’예요. 안 좋은 소식을 부드럽게 전할 때 써요.",
        "여기서 afraid는 ‘무서운’이 아니에요. 뒤에 ‘주어 + 동사’ 문장이 와요.",
        "짧게 대답할 때는 I'm afraid so(그런 것 같아), I'm afraid not(아닌 것 같아)."
      ],
      examples: [
        { en: "I'm afraid I can't come.", ko: "미안하지만 못 가." },
        { en: "I'm afraid I don't know.", ko: "미안하지만 나 몰라." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "미안하지만 나 그거 못 해.", before: "I'm", after: "I can't do that.", answers: ["afraid", "sorry"],
        wrong: { "scared": "‘미안하지만’이라는 뜻일 때는 scared가 아니라 afraid를 써요." },
        tip: { en: "Sorry, I can't do that.", why: "Sorry로 시작해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "미안하지만 너무 늦었어.", before: "I'm afraid it's too", after: ".", answers: ["late"],
        wrong: { "lately": "lately는 ‘최근에’예요. ‘늦은’은 late예요." },
        tip: { en: "We missed it.", why: "‘우리 놓쳤어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "미안하지만 그 사람 지금 없어.", before: "I'm afraid he's not", after: "right now.", answers: ["here", "in", "available"],
        tip: { en: "He's out right now.", why: "be out은 ‘밖에 나가 있다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "미안하지만 네가 틀린 것 같아.", before: "", after: "afraid you're wrong.", answers: ["I'm"],
        wrong: { "i": "‘유감이지만’은 I afraid가 아니라 I'm afraid예요." },
        tip: { en: "I don't think that's right.", why: "‘그게 맞지 않은 것 같아’라는 부드러운 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "아쉽지만 아닌 것 같아.", before: "I'm afraid", after: ".", answers: ["not"],
        wrong: { "no": "짧게 ‘아닌 것 같아’는 I'm afraid not이에요." },
        tip: { en: "Unfortunately not.", why: "unfortunately는 ‘안타깝게도’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "미안하지만 우리 오늘 문 닫았어.", answers: ["I'm afraid we're closed today."],
        wrong: { "i am afraid we closed today": "‘문 닫은 상태’는 we're closed예요." },
        tip: { en: "Sorry, we're closed today.", why: "Sorry로 시작해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "미안하지만 남은 게 없어.", answers: ["I'm afraid there's nothing left.", "I'm afraid there's none left.", "I'm afraid we don't have any left."],
        wrong: { "i am afraid there is nothing leave": "‘남은’은 leave가 아니라 left예요." },
        tip: { en: "Sorry, it's all gone.", why: "all gone은 ‘다 떨어졌어’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "미안하지만 그건 안 될 것 같아.", answers: ["I'm afraid that won't work.", "I'm afraid that's not possible.", "I'm afraid that isn't possible.", "I'm afraid I can't do that."],
        wrong: { "i am afraid that is not possibly": "‘가능한’은 possibly가 아니라 possible이에요." },
        tip: { en: "Unfortunately, that won't work.", why: "unfortunately는 ‘안타깝게도’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "미안하지만 우리 길 잃은 것 같아.", answers: ["I'm afraid we're lost.", "I'm afraid we got lost."],
        wrong: { "i am afraid we lost": "‘길을 잃다’는 get lost예요. we're lost나 we got lost로 써요." },
        tip: { en: "I think we're lost.", why: "I think로 말해도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "미안하지만 나 못 도와줘.", answers: ["I'm afraid I can't help.", "I'm afraid I can't help you."],
        ctx: { lead: "come 대신 ‘도와주다(help)’로 바꿔 보세요.", en: "I'm afraid I can't come." },
        wrong: { "i am afraid i cannot helping you": "can't 뒤에는 동사 원래 모양 help를 써요.", "i am scared i cannot help you": "‘미안하지만’이라는 뜻일 때는 scared가 아니라 afraid를 써요." },
        tip: { en: "Sorry, I can't help with that.", why: "help with는 ‘~을 돕다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "유감이지만 그럴 것 같아.", answers: ["I'm afraid so."],
        dialog: { a: "Is it going to rain tomorrow?", aKo: "내일 비 와?" },
        wrong: { "i am afraid yes": "짧게 ‘그런 것 같아’는 I'm afraid so예요." },
        tip: { en: "Looks like it.", why: "‘그런 것 같아’라는 짧은 말이에요." } }
    ]
  };
})(window.EP);
