/* 세션 210. I'm sure that ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[210] = {
    no: 210, form: "I'm sure that ~.", stem: "I'm sure that/I'm sure", meaning: "~임에 틀림없어요.",
    hint: "I'm sure that + 주어 + 동사",
    intro: {
      blocks: [["I'm sure", "나는 확신한다"], ["that ~", "~라고"]],
      lines: [
        "I'm sure (that) + 주어 + 동사는 ‘분명 ~일 거야 / ~라고 확신해’예요.",
        "말할 때는 that을 자주 빼요. (I'm sure you'll do great.)",
        "‘확실하지 않아’는 I'm not sure (if) ~예요."
      ],
      examples: [
        { en: "I'm sure that you'll do great.", ko: "너 분명 잘할 거야." },
        { en: "I'm sure he's right.", ko: "그가 분명 옳아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 분명 잘할 거야.", before: "I'm sure that you'll do", after: ".", answers: ["great"],
        wrong: { "greatly": "do 뒤에는 great를 써요." },
        tip: { en: "You've got this.", why: "‘넌 할 수 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그가 분명 옳아.", before: "I'm", after: "that he's right.", answers: ["sure"],
        wrong: { "surely": "‘확신하는’은 sure예요." },
        tip: { en: "He's always right.", why: "‘걔는 항상 맞아’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그녀가 분명 올 거야.", before: "I'm sure", after: "she'll come.", answers: ["that"],
        wrong: { "what": "‘~라고’는 that이에요." },
        tip: { en: "She promised.", why: "‘약속했어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "분명 괜찮을 거야.", before: "I'm sure it'll be", after: ".", answers: ["fine", "okay"],
        wrong: { "finely": "be 뒤에는 형용사 fine을 써요." },
        tip: { en: "Don't worry.", why: "‘걱정 마’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "분명 그거 여기 어딘가 있어.", before: "", after: "sure it's here somewhere.", answers: ["I'm"],
        wrong: { "i": "‘확신해’는 I'm sure예요." },
        tip: { en: "Keep looking.", why: "‘계속 찾아봐’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네가 이길 거라고 확신해.", answers: ["I'm sure that you'll win.", "I'm sure you'll win.", "I'm sure that you will win."],
        wrong: { "i sure that you will win": "‘확신해’는 I'm sure예요. am이 필요해요.", "i am sure that you win will": "‘이길 거야’는 you'll win이에요." },
        tip: { en: "You're the best.", why: "‘네가 최고야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "분명 그가 너를 좋아해.", answers: ["I'm sure that he likes you.", "I'm sure he likes you."],
        wrong: { "i am sure that he like you": "he 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "He's into you.", why: "be into는 ‘~에게 빠져 있다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "분명 그녀가 이해할 거야.", answers: ["I'm sure that she'll understand.", "I'm sure she'll understand.", "I'm sure she will understand."],
        wrong: { "i am sure that she will understands": "will 뒤에는 동사 원래 모양 understand를 써요." },
        tip: { en: "She's very kind.", why: "‘그녀는 정말 친절해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "분명 내가 문 잠갔어.", answers: ["I'm sure that I locked the door.", "I'm sure I locked the door."],
        wrong: { "i am sure that i lock the door": "지난 일이라 locked를 써요." },
        tip: { en: "Let me check again.", why: "‘다시 확인해 볼게’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그가 분명 거짓말하고 있어.", answers: ["I'm sure that he's lying.", "I'm sure he's lying."],
        ctx: { lead: "he's right 대신 ‘그가 거짓말하고 있다(he's lying)’로 바꿔 보세요.", en: "I'm sure he's right." },
        wrong: { "i am sure that he lying": "lying 앞에 is가 필요해요. he's lying이에요." },
        tip: { en: "I don't trust him.", why: "‘그 사람 안 믿어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "걱정 마. 분명 잘될 거야.", answers: ["Don't worry. I'm sure it'll be fine.", "Don't worry. I'm sure that it'll work out.", "I'm sure it'll be fine.", "Don't worry. I'm sure it'll work out."],
        dialog: { a: "I'm so nervous about the interview.", aKo: "면접 때문에 너무 떨려." },
        wrong: { "do not worry i sure it will be fine": "‘확신해’는 I'm sure예요. am이 필요해요." },
        tip: { en: "Everything will be okay.", why: "‘다 괜찮을 거야’라는 말이에요." } }
    ]
  };
})(window.EP);
