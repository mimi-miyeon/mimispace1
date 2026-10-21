/* 세션 163. What do you need to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[163] = {
    no: 163, form: "What do you need to ~?", stem: "What do you need to", meaning: "무엇을 ~해야 해요?",
    hint: "What do you need to + 동사?",
    intro: {
      blocks: [["What do you need", "너는 무엇이 필요하니"], ["to ~?", "~하는 것이"]],
      lines: [
        "What do you need to + 동사?는 ‘뭘 ~해야 해? / 뭘 ~할 필요가 있어?’예요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "‘~하려면 뭐가 필요해?’는 What do you need to + 동사로도 물어요."
      ],
      examples: [
        { en: "What do you need to buy?", ko: "뭐 사야 해?" },
        { en: "What do you need to do?", ko: "뭐 해야 해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "뭐 사야 해?", before: "What do you need to", after: "?", answers: ["buy"],
        wrong: { "buying": "to 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Do you have a list?", why: "‘목록 있어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "오늘 뭐 해야 해?", before: "What do you need to", after: "today?", answers: ["do"],
        wrong: { "doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "What's on your list today?", why: "‘오늘 할 일이 뭐야?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭐 챙겨야 해?", before: "What do you", after: "to bring?", answers: ["need"],
        wrong: { "needs": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Don't forget anything.", why: "‘아무것도 잊지 마’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뭐 확인해야 해?", before: "What do you need", after: "check?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Let me help you check.", why: "‘확인하는 거 도와줄게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "뭐 알아야 해?", before: "", after: "do you need to know?", answers: ["What"],
        wrong: { "how": "무엇을 묻는 말이라 What이에요." },
        tip: { en: "Ask me anything.", why: "‘뭐든 물어봐’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "뭐 준비해야 해?", answers: ["What do you need to prepare?", "What do you need to get ready?"],
        wrong: { "what do you need to preparing": "to 뒤에는 동사 원래 모양 prepare를 써요.", "what you need to prepare": "물을 때는 do를 붙여요. What do you예요." },
        tip: { en: "Can I help?", why: "‘도와줄까?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "시험 전에 뭐 공부해야 해?", answers: ["What do you need to study before the test?", "What do you need to study before the exam?"],
        wrong: { "what do you need to study before test": "test 앞에 the를 붙여요." },
        tip: { en: "Focus on the basics.", why: "basics는 ‘기본’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "뭐 고쳐야 해?", answers: ["What do you need to fix?"],
        wrong: { "what do you need to fixing": "to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "Is something broken?", why: "‘뭐 고장 났어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "집에 가기 전에 뭐 끝내야 해?", answers: ["What do you need to finish before you go home?", "What do you need to finish before going home?"],
        wrong: { "what do you need to finish before you going home": "before you 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Almost done?", why: "‘거의 끝났어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "뭐 가져가야 해?", answers: ["What do you need to take?", "What do you need to bring?"],
        ctx: { lead: "buy 대신 ‘가져가다(take)’로 바꿔 보세요.", en: "What do you need to buy?" },
        wrong: { "what do you need to taking": "to 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Pack light.", why: "‘짐 가볍게 싸’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 뭐 사야 해?", answers: ["Then what do you need to buy?", "What do you need to buy?", "So what do you need to buy?"],
        dialog: { a: "I'm cooking dinner tonight.", aKo: "나 오늘 저녁 요리할 거야." },
        wrong: { "then what do you need to buying": "to 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Let's go shopping.", why: "‘장 보러 가자’라는 말이에요." } }
    ]
  };
})(window.EP);
