/* 세션 205. I don't see anything ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[205] = {
    no: 205, form: "I don't see anything ~.", stem: "I don't see anything", meaning: "~한 것은 보이지 않아요.",
    hint: "I don't see anything + 형용사",
    intro: {
      blocks: [["I don't see anything", "아무것도 안 보인다"], ["~", "형용사"]],
      lines: [
        "I don't see anything + 형용사는 ‘~한 건 안 보여 / ~한 점은 없어 보여’예요.",
        "anything 뒤에 형용사를 붙여요. (anything wrong, anything special)",
        "I don't see anything wrong with it.(그거 아무 문제 없어 보여)처럼 with를 붙이기도 해요."
      ],
      examples: [
        { en: "I don't see anything wrong.", ko: "잘못된 건 안 보여." },
        { en: "I don't see anything special.", ko: "특별한 건 안 보여." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "잘못된 건 안 보여.", before: "I don't see anything", after: ".", answers: ["wrong"],
        wrong: { "wrongly": "anything 뒤에는 형용사 wrong을 써요." },
        tip: { en: "It looks fine to me.", why: "‘내가 보기엔 괜찮아’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "특별한 건 안 보여.", before: "I don't see anything", after: ".", answers: ["special"],
        wrong: { "specially": "anything 뒤에는 형용사 special을 써요." },
        tip: { en: "It looks normal.", why: "‘평범해 보여’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이상한 건 안 보여.", before: "I don't see", after: "strange.", answers: ["anything"],
        wrong: { "something": "not과 함께 쓸 때는 anything이에요.", "nothing": "don't와 nothing을 같이 쓰지 않아요." },
        tip: { en: "Everything looks okay.", why: "‘다 괜찮아 보여’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "새로운 건 안 보여.", before: "I don't", after: "anything new.", answers: ["see"],
        wrong: { "look": "‘보이다’는 see예요." },
        tip: { en: "Same as before.", why: "‘전이랑 똑같아’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 아무 문제 없어 보여.", before: "I don't see anything wrong", after: "it.", answers: ["with"],
        wrong: { "about": "‘~에 문제가 있다’는 wrong with예요." },
        tip: { en: "It works fine.", why: "‘잘 작동해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "다른 건 안 보여.", answers: ["I don't see anything different."],
        wrong: { "i do not see anything differently": "anything 뒤에는 형용사 different를 써요.", "i do not see nothing different": "don't와 nothing을 같이 쓰지 않아요." },
        tip: { en: "They look the same.", why: "‘똑같아 보여’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "위험한 건 안 보여.", answers: ["I don't see anything dangerous."],
        wrong: { "i do not see something dangerous": "not과 함께 쓸 때는 anything이에요." },
        tip: { en: "It looks safe.", why: "‘안전해 보여’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이상한 점은 하나도 안 보여.", answers: ["I don't see anything unusual.", "I don't see anything strange.", "I don't see anything weird."],
        wrong: { "i do not see anything unusually": "anything 뒤에는 형용사 unusual을 써요." },
        tip: { en: "Nothing out of the ordinary.", why: "‘평소와 다를 게 없어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "흥미로운 건 안 보여.", answers: ["I don't see anything interesting."],
        wrong: { "i do not see anything interested": "‘흥미로운’은 interesting이에요." },
        tip: { en: "It's kind of boring.", why: "‘좀 지루해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "깨진 건 안 보여.", answers: ["I don't see anything broken."],
        ctx: { lead: "wrong 대신 ‘깨진(broken)’으로 바꿔 보세요.", en: "I don't see anything wrong." },
        wrong: { "i do not see anything break": "‘깨진’은 broken이에요." },
        tip: { en: "It looks okay.", why: "‘괜찮아 보여’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "음, 이상한 건 안 보이는데.", answers: ["Well, I don't see anything wrong.", "I don't see anything wrong.", "Hmm, I don't see anything wrong.", "Well, I don't see anything strange."],
        dialog: { a: "Is there something wrong with my car?", aKo: "내 차 뭐 문제 있어?" },
        wrong: { "well i do not see nothing wrong": "don't와 nothing을 같이 쓰지 않아요." },
        tip: { en: "It looks fine to me.", why: "‘내가 보기엔 괜찮아’라는 말이에요." } }
    ]
  };
})(window.EP);
