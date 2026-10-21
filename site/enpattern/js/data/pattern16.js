/* 세션 16. I can ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[16] = {
    no: 16, form: "I can ~.", stem: "I can", meaning: "나는 ~할 수 있어요.",
    hint: "I can + 동사",
    intro: {
      blocks: [["I", "나는"], ["can", "~할 수 있다"], ["~", "동사"]],
      lines: [
        "can은 ‘~할 수 있다’예요. 뒤에 동사 원래 모양을 붙여요.",
        "can 뒤에는 to를 쓰지 않아요. (I can swim)",
        "누가 주어든 can 모양은 그대로예요. (she can)"
      ],
      examples: [
        { en: "I can swim.", ko: "나 수영할 수 있어." },
        { en: "I can help you.", ko: "내가 도와줄 수 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 운전할 수 있어.", before: "I", after: "drive.", answers: ["can"],
        wrong: { "am": "‘~할 수 있다’는 am이 아니라 can으로 말해요.", "could": "could는 ‘~할 수 있었다’예요. 지금 할 수 있으면 can이에요." },
        tip: { en: "I know how to drive.", why: "know how to는 ‘~하는 법을 안다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 영어 조금 할 수 있어.", before: "I can", after: "a little English.", answers: ["speak"],
        wrong: { "speaks": "can 뒤에는 동사 원래 모양 speak를 써요.", "to speak": "can 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I speak a little English.", why: "can 없이 말해도 ‘할 줄 안다’는 뜻이 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 피아노 칠 수 있어.", before: "I", after: "play the piano.", answers: ["can"],
        wrong: { "could": "could는 ‘~할 수 있었다’예요. 지금 할 수 있으면 can이에요.", "am": "‘~할 수 있다’는 am이 아니라 can으로 말해요." },
        tip: { en: "I play the piano.", why: "can 없이 말해도 ‘칠 줄 안다’는 뜻이 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 혼자 할 수 있어.", before: "I can do it by", after: ".", answers: ["myself"],
        wrong: { "me": "‘나 혼자’는 by me가 아니라 by myself예요." },
        tip: { en: "I can handle it.", why: "handle은 ‘처리하다, 감당하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 그거 고칠 수 있어.", before: "I", after: "fix it.", answers: ["can"],
        wrong: { "can to": "can 뒤에는 to를 쓰지 않아요." },
        tip: { en: "Let me fix it.", why: "Let me는 ‘내가 할게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 일찍 일어날 수 있어.", answers: ["I can get up early.", "I can wake up early."],
        wrong: { "i can to get up early": "can 뒤에는 to를 쓰지 않아요.", "i can gets up early": "can 뒤에는 동사 원래 모양을 써요." },
        tip: { en: "Getting up early is easy for me.", why: "‘일찍 일어나는 건 쉬워’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 요리할 수 있어.", answers: ["I can cook."],
        wrong: { "i can cooking": "can 뒤에는 동사 원래 모양 cook을 써요.", "i am can cook": "can 앞에 am을 쓰지 않아요." },
        tip: { en: "I know how to cook.", why: "know how to는 ‘~하는 법을 안다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 너 공항에 데려다줄 수 있어.", answers: ["I can take you to the airport.", "I can drive you to the airport."],
        wrong: { "i can to take you to the airport": "can 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I'll drive you to the airport.", why: "I'll은 ‘내가 ~할게’라는 약속이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 매운 음식 먹을 수 있어.", answers: ["I can eat spicy food."],
        wrong: { "i can eat spicy foods": "food는 보통 셀 수 없는 말이라 s를 붙이지 않아요.", "i can eating spicy food": "can 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "Spicy food is fine with me.", why: "‘매운 음식 괜찮아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 빨리 달릴 수 있어.", answers: ["I can run fast.", "I can run quickly."],
        ctx: { lead: "swim 대신 ‘달리다(run)’를 넣고 ‘빨리’를 붙여 보세요.", en: "I can swim." },
        wrong: { "i can running fast": "can 뒤에는 동사 원래 모양 run을 써요.", "i can to run fast": "can 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I'm a fast runner.", why: "‘나 빨리 뛰는 사람이야’처럼 말할 수도 있어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 할 수 있어.", answers: ["I can do it.", "I can.", "I can help."],
        dialog: { a: "Who can help me move this?", aKo: "이거 옮기는 거 누가 도와줄 수 있어?" },
        wrong: { "i am can": "can 앞에 am을 쓰지 않아요.", "i can do": "‘그거 할 수 있어’는 do 뒤에 it을 붙여요." },
        tip: { en: "I'll help you.", why: "I'll은 ‘내가 ~할게’라는 약속이에요." } }
    ]
  };
})(window.EP);
