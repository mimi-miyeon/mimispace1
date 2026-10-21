/* 세션 150. How may I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[150] = {
    no: 150, form: "How may I ~?", stem: "How may I", meaning: "어떻게 ~해 드릴까요?",
    hint: "How may I + 동사?",
    intro: {
      blocks: [["How", "어떻게"], ["may I ~?", "제가 ~해 드릴까요"]],
      lines: [
        "How may I + 동사?는 ‘어떻게 ~해 드릴까요?’예요. 손님을 대할 때 쓰는 아주 공손한 말이에요.",
        "may I 뒤에는 동사 원래 모양을 써요.",
        "How may I help you?는 가게, 호텔, 전화 응대에서 가장 많이 들어요."
      ],
      examples: [
        { en: "How may I help you?", ko: "어떻게 도와드릴까요?" },
        { en: "How may I direct your call?", ko: "어디로 연결해 드릴까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어떻게 도와드릴까요?", before: "How may I", after: "you?", answers: ["help"],
        wrong: { "helping": "may I 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "What can I do for you?", why: "‘무엇을 해 드릴까요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "무엇을 지원해 드릴까요?", before: "How", after: "I assist you?", answers: ["may"],
        wrong: { "do": "공손하게 물을 때는 How may I예요." },
        tip: { en: "How can I help?", why: "can으로 말해도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어디로 연결해 드릴까요?", before: "How may I", after: "your call?", answers: ["direct"],
        wrong: { "directing": "may I 뒤에는 동사 원래 모양 direct를 써요." },
        tip: { en: "Who would you like to speak to?", why: "‘누구와 통화하시겠어요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어떻게 불러 드릴까요?", before: "How may I", after: "you?", answers: ["address"],
        wrong: { "call to": "‘~를 부르다’는 address you예요." },
        tip: { en: "What should I call you?", why: "‘뭐라고 부를까요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어떻게 보답해 드릴까요?", before: "", after: "may I repay you?", answers: ["How"],
        wrong: { "what": "방법을 물을 때는 How예요." },
        tip: { en: "I owe you one.", why: "‘신세 졌어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "오늘 어떻게 도와드릴까요?", answers: ["How may I help you today?"],
        wrong: { "how may i helping you today": "may I 뒤에는 동사 원래 모양 help를 써요.", "how i may help you today": "물을 때는 may를 I 앞에 써요. How may I예요." },
        tip: { en: "What brings you in today?", why: "‘오늘 무슨 일로 오셨어요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어떻게 안내해 드릴까요?", answers: ["How may I assist you?", "How may I help you?", "How may I guide you?"],
        wrong: { "how may i assisting you": "may I 뒤에는 동사 원래 모양 assist를 써요." },
        tip: { en: "What are you looking for?", why: "‘무엇을 찾으세요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어떻게 연락드리면 될까요?", answers: ["How may I contact you?", "How may I reach you?"],
        wrong: { "how may i contact to you": "contact 뒤에는 to 없이 바로 you를 써요." },
        tip: { en: "What's the best number?", why: "‘제일 좋은 번호가 뭐예요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떻게 결제해 드릴까요?", answers: ["How may I pay?"], alts: ["How would you like to pay?"],
        wrong: { "how may i paying": "may I 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "Do you take cards?", why: "‘카드 받아요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어떻게 모실까요?", answers: ["How may I serve you?"],
        ctx: { lead: "help 대신 ‘모시다(serve)’로 바꿔 보세요.", en: "How may I help you?" },
        wrong: { "how may i serving you": "may I 뒤에는 동사 원래 모양 serve를 써요." },
        tip: { en: "What would you like?", why: "‘무엇을 드릴까요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "안녕하세요, 어떻게 도와드릴까요?", answers: ["Hello, how may I help you?", "Hi, how may I help you?", "Good morning, how may I help you?"],
        dialog: { a: "Excuse me, I need some help.", aKo: "저기요, 도움이 좀 필요해요." },
        wrong: { "hello how may i helping you": "may I 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Hello, what can I do for you?", why: "‘안녕하세요, 무엇을 해 드릴까요?’라는 말이에요." } }
    ]
  };
})(window.EP);
