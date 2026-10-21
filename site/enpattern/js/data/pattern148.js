/* 세션 148. What can I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[148] = {
    no: 148, form: "What can I ~?", stem: "What can I", meaning: "제가 무엇을 ~할 수 있어요?",
    hint: "What can I + 동사?",
    intro: {
      blocks: [["What", "무엇을"], ["can I ~?", "내가 ~할 수 있어?"]],
      lines: [
        "What can I + 동사?는 ‘내가 뭘 ~할 수 있어?’예요.",
        "can I 뒤에는 동사 원래 모양을 써요.",
        "What can I do for you?는 ‘무엇을 도와드릴까요?’예요."
      ],
      examples: [
        { en: "What can I do?", ko: "내가 뭘 할 수 있어?" },
        { en: "What can I get you?", ko: "뭐 갖다줄까?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 뭘 할 수 있어?", before: "What can I", after: "?", answers: ["do"],
        wrong: { "doing": "can I 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "How can I help?", why: "‘어떻게 도와줄까?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "뭐 갖다줄까?", before: "What can I", after: "you?", answers: ["get"],
        wrong: { "give": "‘갖다주다’는 get you예요." },
        tip: { en: "Anything to drink?", why: "‘마실 거 줄까?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭘 가져가면 돼?", before: "What can I", after: "?", answers: ["bring"],
        wrong: { "take": "모임에 ‘가져가다’는 bring이에요." },
        tip: { en: "Should I bring anything?", why: "‘뭐 가져갈까?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 뭐라고 하겠어?", before: "What", after: "I say?", answers: ["can"],
        wrong: { "do": "‘뭐라고 할 수 있겠어?’는 What can I say예요." },
        tip: { en: "I have no excuse.", why: "excuse는 ‘변명’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "오늘 뭐 먹을 수 있어?", before: "", after: "can I eat today?", answers: ["What"],
        wrong: { "how": "무엇을 묻는 말이라 What이에요." },
        tip: { en: "Any food limits?", why: "limit은 ‘제한’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "무엇을 도와드릴까요?", answers: ["What can I do for you?", "What can I help you with?"],
        wrong: { "what can i doing for you": "can I 뒤에는 동사 원래 모양 do를 써요.", "what i can do for you": "물을 때는 can을 I 앞에 써요. What can I예요." },
        tip: { en: "How can I help you?", why: "‘어떻게 도와드릴까요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "뭘 사면 돼?", answers: ["What can I buy?"], alts: ["What should I buy?"],
        wrong: { "what can i buying": "can I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Any gift ideas?", why: "‘선물 아이디어 있어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 돈으로 뭘 살 수 있어?", answers: ["What can I buy with this money?", "What can I get with this money?"],
        wrong: { "what can i buy by this money": "‘이 돈으로’는 with this money예요." },
        tip: { en: "It's not much.", why: "‘얼마 안 돼’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "거기서 뭘 볼 수 있어?", answers: ["What can I see there?"],
        wrong: { "what can i seeing there": "can I 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "Is it worth visiting?", why: "‘가 볼 만해?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 뭘 마실 수 있어?", answers: ["What can I drink?"],
        ctx: { lead: "do 대신 ‘마시다(drink)’로 바꿔 보세요.", en: "What can I do?" },
        wrong: { "what can i drinking": "can I 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "Do you have any juice?", why: "‘주스 있어?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 내가 뭘 하면 될까?", answers: ["Then what can I do?", "What can I do?", "So what can I do?"],
        dialog: { a: "We need help with the party.", aKo: "파티 준비 도움이 필요해." },
        wrong: { "then what can i doing": "can I 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "How can I help?", why: "‘어떻게 도와줄까?’라는 말이에요." } }
    ]
  };
})(window.EP);
