/* 세션 139. If you don't mind, I would like to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[139] = {
    no: 139, form: "If you don't mind, I would like to ~.", stem: "If you don't mind, I would like to/If you don't mind, I'd like to", meaning: "괜찮으시면 제가 ~하고 싶은데요.",
    hint: "If you don't mind, I would like to + 동사",
    intro: {
      blocks: [["If you don't mind,", "괜찮으시면"], ["I would like to ~", "~하고 싶어요"]],
      lines: [
        "If you don't mind, I would like to + 동사는 ‘괜찮으시면 ~하고 싶은데요’예요. 아주 공손해요.",
        "I would like to는 I'd like to로 줄여 말해요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "If you don't mind, I'd like to leave early.", ko: "괜찮으시면 일찍 가고 싶은데요." },
        { en: "If you don't mind, I'd like to ask a question.", ko: "괜찮으시면 질문 하나 하고 싶은데요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "괜찮으시면 여기 앉고 싶은데요.", before: "If you don't mind, I'd like to", after: "here.", answers: ["sit"],
        wrong: { "sitting": "to 뒤에는 동사 원래 모양 sit을 써요." },
        tip: { en: "Is this seat free?", why: "‘이 자리 비었어요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "괜찮으시면 질문 하나 하고 싶은데요.", before: "If you don't mind, I'd like to", after: "a question.", answers: ["ask"],
        wrong: { "asking": "to 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "May I ask something?", why: "May I도 공손한 질문이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "괜찮으시면 일찍 가고 싶은데요.", before: "If you don't", after: ", I'd like to leave early.", answers: ["mind"],
        wrong: { "care": "‘괜찮으시면’은 If you don't mind예요." },
        tip: { en: "I have an appointment.", why: "appointment는 ‘약속’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "괜찮으시면 생각해 보고 싶은데요.", before: "If you don't mind, I'd", after: "to think about it.", answers: ["like"],
        wrong: { "want": "공손하게는 I'd like to예요." },
        tip: { en: "Let me sleep on it.", why: "sleep on it은 ‘하룻밤 생각해 보다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "괜찮으시면 먼저 가고 싶은데요.", before: "", after: "you don't mind, I'd like to go first.", answers: ["If"],
        wrong: { "when": "‘괜찮으시면’은 If you don't mind예요." },
        tip: { en: "Can I go first?", why: "‘먼저 해도 돼요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "괜찮으시면 창문을 열고 싶은데요.", answers: ["If you don't mind, I'd like to open the window.", "If you don't mind, I would like to open the window."],
        wrong: { "if you do not mind i would like to opening the window": "to 뒤에는 동사 원래 모양 open을 써요.", "if you do not mind i would like open the window": "like 뒤에 to를 붙여요." },
        tip: { en: "It's hot in here.", why: "‘여기 더워요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "괜찮으시면 좀 쉬고 싶은데요.", answers: ["If you don't mind, I'd like to take a break.", "If you don't mind, I'd like to rest."],
        wrong: { "if you do not mind i would like to taking a break": "to 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "I'm a bit tired.", why: "‘좀 피곤해요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "괜찮으시면 계산하고 싶은데요.", answers: ["If you don't mind, I'd like to pay.", "If you don't mind, I'd like to pay now."],
        wrong: { "if you do not mind i would like to paying": "to 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "Check, please.", why: "‘계산서 주세요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "괜찮으시면 녹음하고 싶은데요.", answers: ["If you don't mind, I'd like to record this.", "If you don't mind, I'd like to record it."],
        wrong: { "if you do not mind i would like to recording this": "to 뒤에는 동사 원래 모양 record를 써요." },
        tip: { en: "Is it okay to record?", why: "‘녹음해도 될까요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "괜찮으시면 전화 한 통 하고 싶은데요.", answers: ["If you don't mind, I'd like to make a call.", "If you don't mind, I'd like to make a phone call."],
        ctx: { lead: "leave early 대신 ‘전화 한 통 하다(make a call)’로 바꿔 보세요.", en: "If you don't mind, I'd like to leave early." },
        wrong: { "if you do not mind i would like to make call": "call은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Excuse me for a minute.", why: "‘잠깐 실례할게요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "괜찮으시면 창가 자리에 앉고 싶은데요.", answers: ["If you don't mind, I'd like to sit by the window."], alts: ["If you don't mind, I'd like a window seat."],
        dialog: { a: "Where would you like to sit?", aKo: "어디 앉으시겠어요?" },
        wrong: { "if you do not mind i would like to sitting by the window": "to 뒤에는 동사 원래 모양 sit을 써요." },
        tip: { en: "Window seat, please.", why: "‘창가 자리요’라는 말이에요." } }
    ]
  };
})(window.EP);
