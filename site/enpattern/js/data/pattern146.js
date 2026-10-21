/* 세션 146. How can I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[146] = {
    no: 146, form: "How can I ~?", stem: "How can I", meaning: "어떻게 ~할 수 있어요?",
    hint: "How can I + 동사?",
    intro: {
      blocks: [["How", "어떻게"], ["can I ~?", "내가 ~할 수 있어?"]],
      lines: [
        "How can I + 동사?는 ‘어떻게 하면 ~할 수 있어?’예요. 방법을 물을 때 써요.",
        "can I 뒤에는 동사 원래 모양을 써요.",
        "How can I help you?는 ‘무엇을 도와드릴까요?’예요."
      ],
      examples: [
        { en: "How can I get there?", ko: "거기 어떻게 가?" },
        { en: "How can I help you?", ko: "무엇을 도와드릴까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "거기 어떻게 가?", before: "How can I", after: "there?", answers: ["get"],
        wrong: { "go": "‘거기 가다’는 get there예요.", "getting": "can I 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "What's the best way there?", why: "‘거기 가는 제일 좋은 길이 뭐야?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떻게 연락할 수 있어?", before: "How can I", after: "you?", answers: ["contact", "reach"],
        wrong: { "contact to": "contact 뒤에는 to 없이 바로 you를 써요." },
        tip: { en: "What's your number?", why: "‘번호가 뭐야?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떻게 도와드릴까요?", before: "How", after: "I help you?", answers: ["can"],
        wrong: { "do": "‘어떻게 ~할 수 있어?’는 How can I예요." },
        tip: { en: "What can I do for you?", why: "‘무엇을 해 드릴까요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이거 어떻게 켜?", before: "How can I turn this", after: "?", answers: ["on"],
        wrong: { "off": "‘켜다’는 turn on이에요. turn off는 ‘끄다’예요." },
        tip: { en: "Where's the power button?", why: "power button은 ‘전원 버튼’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어떻게 하면 영어 실력이 늘까?", before: "", after: "can I improve my English?", answers: ["How"],
        wrong: { "what": "방법을 물을 때는 How예요." },
        tip: { en: "Any tips for English?", why: "‘영어 팁 있어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어떻게 고칠 수 있어?", answers: ["How can I fix it?", "How can I fix this?"],
        wrong: { "how can i fixing it": "can I 뒤에는 동사 원래 모양 fix를 써요.", "how i can fix it": "물을 때는 can을 I 앞에 써요. How can I예요." },
        tip: { en: "Is there a way to fix it?", why: "‘고칠 방법 있어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어떻게 하면 살을 뺄 수 있어?", answers: ["How can I lose weight?"],
        wrong: { "how can i lose my weight": "‘살 빼다’는 lose weight예요.", "how can i losing weight": "can I 뒤에는 동사 원래 모양 lose를 써요." },
        tip: { en: "Any diet tips?", why: "‘다이어트 팁 있어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 문제를 어떻게 풀 수 있어?", answers: ["How can I solve this problem?", "How can I solve this?"],
        wrong: { "how can i solve this question": "‘문제를 풀다’는 solve a problem이에요." },
        tip: { en: "I'm stuck on this one.", why: "be stuck은 ‘막히다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떻게 표를 살 수 있어?", answers: ["How can I buy tickets?", "How can I get tickets?", "How can I buy a ticket?", "How can I get a ticket?"],
        wrong: { "how can i buying tickets": "can I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Where do I get tickets?", why: "‘표 어디서 사?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어떻게 너한테 갚을 수 있을까?", answers: ["How can I repay you?", "How can I pay you back?"],
        ctx: { lead: "get there 대신 ‘너한테 갚다(repay you)’로 바꿔 보세요.", en: "How can I get there?" },
        wrong: { "how can i pay back you": "you 같은 말은 pay와 back 사이에 넣어요. pay you back이에요." },
        tip: { en: "I owe you one.", why: "‘신세 졌어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 어떻게 비밀번호를 바꿀 수 있어?", answers: ["Then how can I change my password?", "How can I change my password?", "So how can I change my password?"],
        dialog: { a: "Your password is too weak.", aKo: "비밀번호가 너무 약해." },
        wrong: { "then how can i changing my password": "can I 뒤에는 동사 원래 모양 change를 써요." },
        tip: { en: "I forgot my password.", why: "‘비밀번호 까먹었어’라는 말이에요." } }
    ]
  };
})(window.EP);
