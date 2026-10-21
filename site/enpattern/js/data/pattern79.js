/* 세션 79. I'm grateful for ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[79] = {
    no: 79, form: "I'm grateful for ~.", stem: "I'm grateful for/I'm grateful to", meaning: "~에 감사해요.",
    hint: "I'm grateful for + 명사",
    intro: {
      blocks: [["I'm grateful", "감사하다"], ["for ~", "~에 대해"]],
      lines: [
        "I'm grateful for ~는 ‘~에 감사해’예요. 마음 깊이 고마움을 표현해요.",
        "for 뒤에는 고마운 것을 명사로 써요. (my family, your help)",
        "사람에게 고마울 때는 I'm grateful to + 사람도 써요."
      ],
      examples: [
        { en: "I'm grateful for my family.", ko: "가족에게 감사해." },
        { en: "I'm grateful for your help.", ko: "도와줘서 정말 고마워." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내 친구들에게 감사해.", before: "I'm grateful", after: "my friends.", answers: ["for", "to"],
        wrong: { "of": "‘~에 감사하다’는 grateful for예요." },
        tip: { en: "My friends mean a lot to me.", why: "mean a lot은 ‘아주 소중하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내 건강에 감사해.", before: "I'm grateful for my", after: ".", answers: ["health"],
        wrong: { "healthy": "healthy는 ‘건강한’이에요. ‘건강’은 health예요." },
        tip: { en: "I'm lucky to be healthy.", why: "lucky는 ‘운이 좋은’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오늘 하루에 감사해.", before: "I'm", after: "for today.", answers: ["grateful", "thankful"],
        wrong: { "great": "great은 ‘멋진’이에요. ‘감사하는’은 grateful이에요." },
        tip: { en: "Today was a good day.", why: "‘오늘 좋은 하루였어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이 기회에 감사해.", before: "I'm grateful for this", after: ".", answers: ["opportunity", "chance"],
        tip: { en: "Thank you for this chance.", why: "chance도 ‘기회’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "모든 것에 감사해.", before: "", after: "grateful for everything.", answers: ["I'm"],
        wrong: { "i": "‘감사해’는 I 뒤에 am을 붙여 I'm grateful이에요." },
        tip: { en: "I'm thankful for everything.", why: "thankful도 ‘감사하는’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네 우정에 감사해.", answers: ["I'm grateful for your friendship."],
        wrong: { "i am grateful for your friend": "‘우정’은 friend가 아니라 friendship이에요.", "i grateful for your friendship": "‘감사해’는 I 뒤에 am을 붙여 I'm grateful이에요." },
        tip: { en: "I'm lucky to have you as a friend.", why: "lucky는 ‘운이 좋은’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네 조언에 감사해.", answers: ["I'm grateful for your advice."],
        wrong: { "i am grateful for your advices": "advice는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "Your advice really helped.", why: "‘네 조언이 정말 도움 됐어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내 일에 감사해.", answers: ["I'm grateful for my job.", "I'm grateful for my work."],
        wrong: { "i am grateful about my job": "‘~에 감사하다’는 grateful for예요." },
        tip: { en: "I'm lucky to have this job.", why: "lucky는 ‘운이 좋은’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "작은 것들에 감사해.", answers: ["I'm grateful for the little things.", "I'm grateful for small things.", "I'm grateful for the small things."],
        wrong: { "i am grateful for the little thing": "‘작은 것들’은 여러 개라 things예요." },
        tip: { en: "Little things make me happy.", why: "‘작은 것들이 날 행복하게 해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내 선생님들께 감사해.", answers: ["I'm grateful for my teachers.", "I'm grateful to my teachers."],
        ctx: { lead: "my family 대신 ‘내 선생님들(my teachers)’로 바꿔 보세요.", en: "I'm grateful for my family." },
        wrong: { "i am grateful for my teacher": "‘선생님들’은 여러 명이라 teachers예요." },
        tip: { en: "My teachers taught me so much.", why: "‘선생님들이 많은 걸 가르쳐 주셨어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋은 사람들에게 감사해.", answers: ["I'm grateful for the good people.", "I'm grateful for good people.", "I'm grateful for the people in my life."],
        dialog: { a: "How do you feel about this year?", aKo: "올해 어땠어?" },
        wrong: { "i am grateful for good peoples": "people은 이미 여러 명이라 s를 붙이지 않아요." },
        tip: { en: "I met so many great people.", why: "‘좋은 사람을 정말 많이 만났어’라는 말이에요." } }
    ]
  };
})(window.EP);
