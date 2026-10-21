/* 콘텐츠 (샘플: 패턴 1) */
(function (EP) {
  "use strict";

  EP.data = {
    session: {
      no: 1, form: "I have ~.", stem: "I have", meaning: "나는 ~이 있어요 / ~을 가지고 있어요",
      hint: "I have + 명사",
      intro: {
        blocks: [["I", "나는"], ["have", "가지고 있다"], ["~", "무엇"]],
        lines: [
          "have는 ‘가지고 있다’라는 뜻이에요.",
          "물건뿐 아니라 가족, 시간, 감기처럼 ‘있다’고 말하는 것에 두루 써요.",
          "주어가 I일 때는 have 그대로 써요. (he, she는 has)"
        ],
        examples: [
          { en: "I have a bike.", ko: "나는 자전거가 있어." },
          { en: "I have a meeting today.", ko: "나 오늘 회의 있어." }
        ]
      },
      /* wrong: 자주 나오는 오답 → 설명, other: 맞는 영어지만 이번 패턴이 아닌 답 → 안내 (키는 normalize 결과) */
      items: [
        { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나는 강아지가 있어.", before: "I", after: "a dog.", answers: ["have"],
          wrong: { "has": "has는 he, she처럼 다른 한 사람이 주어일 때 써요. I 뒤에는 have예요.", "having": "‘가지고 있다’를 말할 때는 have 그대로 써요.", "am": "‘나는 ~이 있다’는 am이 아니라 have로 말해요." } },
        { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나는 우산이 있어.", before: "I have", after: "umbrella.", answers: ["an"],
          wrong: { "a": "umbrella처럼 모음 소리(엄)로 시작하는 단어 앞에는 an을 써요.", "the": "처음 말하는 물건 하나에는 the가 아니라 a / an을 써요." } },
        { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나는 형제가 두 명 있어.", before: "I", after: "two brothers.", answers: ["have"],
          wrong: { "has": "has는 he, she처럼 다른 한 사람이 주어일 때 써요. I 뒤에는 have예요.", "am": "‘나는 ~이 있다’는 am이 아니라 have로 말해요." } },
        { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 감기 걸렸어.", before: "I have a", after: ".", answers: ["cold"],
          wrong: { "flu": "flu는 독감이에요. 보통 감기는 cold예요." } },
        { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 숙제가 많아.", before: "I have a lot of", after: ".", answers: ["homework"],
          wrong: { "homeworks": "homework는 셀 수 없는 말이라 s를 붙이지 않아요." } },
        { id: "s1", type: "sentence", kind: "문장 입력", ko: "나는 차가 있어.", answers: ["I have a car."],
          wrong: { "i have a cars": "a는 ‘하나’라는 뜻이라 cars가 아니라 car예요." } },
        { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 질문 하나 있어.", answers: ["I have a question.", "I have one question."],
          other: { "can i ask you something": "이번엔 I have로 말해 보세요." } },
        { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 시간 있어.", answers: ["I have time today.", "Today I have time.", "I have some time today."],
          wrong: { "i have a time today": "time이 ‘시간 여유’라는 뜻일 때는 a를 붙이지 않아요." },
          other: { "i am free today": "이번엔 have로 말해 보세요." } },
        { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 머리 아파.", answers: ["I have a headache."],
          other: { "my head hurts": "이번엔 have로 말해 보세요." } },
        { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나는 계획이 있어.", answers: ["I have a plan."],
          ctx: { lead: "car 대신 ‘계획’을 넣어 보세요.", en: "I have a car." } },
        { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 하나 있어.", answers: ["Yes, I have one."],
          dialog: { a: "Do you have a pen?", aKo: "펜 있어?" },
          wrong: { "yes i have a one": "one이 이미 ‘하나’라서 a를 붙이지 않아요.", "yes i have it": "‘하나 있어’는 one을 써요. it은 바로 그 물건을 가리킬 때 써요." },
          other: { "yes i do": "이번엔 I have를 넣어 대답해 보세요." } }
      ],
      tips: [
        { from: "I have a question.", to: "Can I ask you something?", why: "‘질문이 있어’를 ‘뭐 좀 물어봐도 돼요?’처럼 부드럽게 바꾼 말이에요." },
        { from: "I have a headache.", to: "My head hurts.", why: "‘머리가 아파’를 그대로 옮긴 말이에요. 둘 다 자주 써요." }
      ]
    },

    /* 아직 열리지 않은 다음 세션 목록 (샘플은 10까지) */
    next: [
      { no: 2, form: "I have some ~.", meaning: "어떤 ~가 있어요" },
      { no: 3, form: "I don't have ~.", meaning: "나는 ~이 없어요" },
      { no: 4, form: "Do you have any ~?", meaning: "~ 있어요?" },
      { no: 5, form: "I didn't have any ~.", meaning: "나는 ~가 없었어요" },
      { no: 6, form: "I was ~.", meaning: "나는 ~였어요" },
      { no: 7, form: "I wasn't ~.", meaning: "나는 ~가 아니었어요" },
      { no: 8, form: "Were you ~?", meaning: "당신은 ~였나요?" },
      { no: 9, form: "I was told to ~.", meaning: "~하라고 들었어요" },
      { no: 10, form: "I was wondering if ~.", meaning: "~인지 궁금했어요" }
    ],
    totalSessions: 230
  };
})(window.EP);
