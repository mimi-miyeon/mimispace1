/* 세션 9. I was told to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[9] = {
    no: 9, form: "I was told to ~.", stem: "I was told to", meaning: "나는 ~하라고 들었어요.",
    hint: "I was told to + 동사",
    intro: {
      blocks: [["I was told", "나는 들었다"], ["to", "~하라고"], ["~", "할 일"]],
      lines: [
        "I was told to ~는 ‘누가 나한테 ~하라고 했어’라는 말이에요.",
        "told는 tell(말하다)의 과거분사예요. was told는 ‘말을 들었다’가 돼요.",
        "to 뒤에는 동사 원래 모양을 써요. (to wait, to come)"
      ],
      examples: [
        { en: "I was told to wear a suit.", ko: "나 정장 입으라고 들었어." },
        { en: "I was told to call you.", ko: "너한테 전화하라고 들었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 일찍 출근하라고 들었어.", before: "I was", after: "to come to work early.", answers: ["told"],
        wrong: { "tell": "‘들었다’는 was 뒤에 told를 써요.", "said": "was said to는 ‘~라고 한다’는 다른 뜻이에요. ‘~하라고 들었다’는 was told to예요." },
        tip: { en: "My boss told me to come in early.", why: "come in은 ‘출근하다’라는 뜻으로도 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 이 서류 작성하라고 들었어.", before: "I was told", after: "fill out this form.", answers: ["to"],
        wrong: { "for": "‘~하라고’는 for가 아니라 to 뒤에 동사를 써요." },
        tip: { en: "They asked me to fill out this form.", why: "ask는 ‘부탁하다’예요. 조금 더 부드러워요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 신발 벗으라고 들었어.", before: "I was told to", after: "off my shoes.", answers: ["take"],
        wrong: { "took": "to 뒤에는 동사 원래 모양 take를 써요.", "taking": "to 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "I had to take off my shoes.", why: "‘신발을 벗어야 했어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 너한테 물어보라고 들었어.", before: "I", after: "told to ask you.", answers: ["was"],
        wrong: { "am": "들은 건 지난 일이라 was를 써요.", "were": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "Someone told me to ask you.", why: "누가 말했는지 넣어서 말할 수도 있어요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 오늘 집에 있으라고 들었어.", before: "I was told to", after: "home today.", answers: ["stay", "be"],
        wrong: { "stayed": "to 뒤에는 동사 원래 모양 stay를 써요.", "staying": "to 뒤에는 동사 원래 모양 stay를 써요." },
        tip: { en: "They want me to stay home today.", why: "‘그들이 내가 집에 있길 바라’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 7시까지 오라고 들었어.", answers: ["I was told to come by seven.", "I was told to be here by seven.", "I was told to come by seven o'clock."],
        wrong: { "i was told to came by seven": "to 뒤에는 동사 원래 모양 come을 써요.", "i was told come by seven": "‘~하라고’는 told 뒤에 to를 붙여요." },
        tip: { en: "They told me to come by seven.", why: "누가 말했는지 넣어서 말해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 조용히 하라고 들었어.", answers: ["I was told to be quiet."],
        wrong: { "i was told to quiet": "quiet는 ‘조용한’이라 앞에 be를 붙여요." },
        tip: { en: "Someone told me to keep it down.", why: "keep it down은 ‘소리 좀 줄여’라는 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 약 먹으라고 들었어.", answers: ["I was told to take medicine.", "I was told to take my medicine.", "I was told to take some medicine."],
        wrong: { "i was told to eat medicine": "약을 먹다는 eat이 아니라 take를 써요." },
        tip: { en: "The doctor told me to take medicine.", why: "누가 말했는지 넣어서 말할 수도 있어요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 너한테 이거 주라고 들었어.", answers: ["I was told to give you this.", "I was told to give this to you."],
        wrong: { "i was told to gave you this": "to 뒤에는 동사 원래 모양 give를 써요." },
        tip: { en: "I'm supposed to give you this.", why: "be supposed to는 ‘~하기로 되어 있다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 여기서 기다리라고 들었어.", answers: ["I was told to wait here."],
        ctx: { lead: "‘~하라고 들었어’로 바꿔 보세요.", en: "They told me to wait here." },
        wrong: { "i was told wait here": "‘~하라고’는 told 뒤에 to를 붙여요.", "i told to wait here": "‘들었다’는 I was told예요. I told는 ‘내가 말했다’예요." },
        tip: { en: "They told me to wait here.", why: "누가 말했는지 넣어서 그대로 말해도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "일찍 오라고 들었어.", answers: ["I was told to come early.", "I was told to be here early.", "I was told to get here early."],
        dialog: { a: "Why are you here so early?", aKo: "왜 이렇게 일찍 왔어?" },
        wrong: { "i was told to came early": "to 뒤에는 동사 원래 모양 come을 써요.", "i told to come early": "‘들었다’는 I was told예요. I told는 ‘내가 말했다’예요." },
        tip: { en: "They told me to come early.", why: "누가 말했는지 넣어서 말해도 돼요." } }
    ]
  };
})(window.EP);
