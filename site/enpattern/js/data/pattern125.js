/* 세션 125. What happens if you try to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[125] = {
    no: 125, form: "What happens if you try to ~?", stem: "What happens if you try to", meaning: "당신이 ~하려고 하면 어떻게 될까요?",
    hint: "What happens if you try to + 동사?",
    intro: {
      blocks: [["What happens", "어떻게 되나"], ["if you try to ~?", "네가 ~하려고 하면"]],
      lines: [
        "What happens if you try to + 동사?는 ‘~하려고 하면 어떻게 돼?’예요.",
        "happens는 happen에 s가 붙은 모양이에요. What 뒤라서 s를 붙여요.",
        "try to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "What happens if you try to open it?", ko: "그거 열려고 하면 어떻게 돼?" },
        { en: "What happens if you try to leave early?", ko: "일찍 나가려고 하면 어떻게 돼?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그거 고치려고 하면 어떻게 돼?", before: "What happens if you try to", after: "it?", answers: ["fix"],
        wrong: { "fixing": "try to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "Can it be fixed?", why: "‘고칠 수 있어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 열려고 하면 어떻게 돼?", before: "What", after: "if you try to open it?", answers: ["happens"],
        wrong: { "happen": "What 뒤에는 동사에 s를 붙여요. happens예요.", "happened": "지금 묻는 말이라 happens예요." },
        tip: { en: "Is it locked?", why: "‘잠겨 있어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "일찍 나가려고 하면 어떻게 돼?", before: "What happens if you", after: "to leave early?", answers: ["try"],
        wrong: { "tries": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Can I leave early?", why: "‘일찍 가도 돼?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "다시 로그인하려고 하면 어떻게 돼?", before: "What happens if you try to log", after: "again?", answers: ["in"],
        wrong: { "on": "‘로그인하다’는 log in이에요." },
        tip: { en: "Does it work?", why: "‘되긴 해?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 끄려고 하면 어떻게 돼?", before: "What happens", after: "you try to turn it off?", answers: ["if"],
        wrong: { "when": "‘~하면’은 if예요." },
        tip: { en: "Is it safe to turn off?", why: "‘꺼도 안전해?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "거기 들어가려고 하면 어떻게 돼?", answers: ["What happens if you try to go in there?", "What happens if you try to enter?", "What happens if you try to go in?"],
        wrong: { "what happen if you try to go in there": "What 뒤에는 동사에 s를 붙여요. happens예요.", "what happens if you try to going in there": "try to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Is it off-limits?", why: "off-limits는 ‘출입 금지인’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "비밀번호를 바꾸려고 하면 어떻게 돼?", answers: ["What happens if you try to change the password?", "What happens if you try to change your password?"],
        wrong: { "what happens if you try to changing the password": "try to 뒤에는 동사 원래 모양 change를 써요." },
        tip: { en: "Do I need my old password?", why: "‘옛날 비밀번호 필요해?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 사람한테 연락하려고 하면 어떻게 돼?", answers: ["What happens if you try to contact him?", "What happens if you try to call him?", "What happens if you try to reach him?"],
        wrong: { "what happens if you try to contact to him": "contact 뒤에는 to 없이 바로 him을 써요." },
        tip: { en: "He never answers.", why: "‘걔 절대 안 받아’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "환불받으려고 하면 어떻게 돼?", answers: ["What happens if you try to get a refund?"],
        wrong: { "what happens if you try to get refund": "refund는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Is it refundable?", why: "refundable은 ‘환불 가능한’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그거 밀려고 하면 어떻게 돼?", answers: ["What happens if you try to push it?"],
        ctx: { lead: "open 대신 ‘밀다(push)’로 바꿔 보세요.", en: "What happens if you try to open it?" },
        wrong: { "what happens if you try to pushing it": "try to 뒤에는 동사 원래 모양 push를 써요." },
        tip: { en: "Is it heavy?", why: "‘무거워?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 지금 취소하려고 하면 어떻게 돼?", answers: ["Then what happens if you try to cancel now?", "What happens if you try to cancel now?", "So what happens if you try to cancel now?"],
        dialog: { a: "You can't cancel after Friday.", aKo: "금요일 이후엔 취소 못 해." },
        wrong: { "then what happens if you try to canceling now": "try to 뒤에는 동사 원래 모양 cancel을 써요." },
        tip: { en: "Is there a fee?", why: "fee는 ‘수수료’예요." } }
    ]
  };
})(window.EP);
