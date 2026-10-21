/* 세션 106. Let me ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[106] = {
    no: 106, form: "Let me ~.", stem: "Let me", meaning: "내가 ~하게 해 주세요.",
    hint: "Let me + 동사",
    intro: {
      blocks: [["Let me", "내가 ~하게 해 줘"], ["~", "동사"]],
      lines: [
        "Let me + 동사는 ‘내가 ~할게 / ~하게 해 줘’예요. 내가 하겠다고 나설 때 써요.",
        "me 뒤에는 동사 원래 모양을 써요. to를 붙이지 않아요. (Let me to help ×)",
        "Let me see.(어디 보자)처럼 생각할 시간을 벌 때도 써요."
      ],
      examples: [
        { en: "Let me help you.", ko: "내가 도와줄게." },
        { en: "Let me think.", ko: "생각 좀 해 볼게." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 계산할게.", before: "Let me", after: ".", answers: ["pay"],
        wrong: { "to pay": "Let me 뒤에는 to 없이 동사 원래 모양을 써요.", "paying": "Let me 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "It's on me.", why: "‘내가 쏠게’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 확인해 볼게.", before: "Let me", after: ".", answers: ["check"],
        wrong: { "to check": "Let me 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "I'll look into it.", why: "look into는 ‘알아보다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어디 보자.", before: "Let me", after: ".", answers: ["see"],
        wrong: { "look": "‘어디 보자’는 Let me see예요." },
        tip: { en: "Hmm, let me think.", why: "‘음, 생각 좀 해 볼게’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 들어 줄게.", before: "Let", after: "carry it.", answers: ["me"],
        wrong: { "my": "Let 뒤에는 my가 아니라 me를 써요.", "i": "Let 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "I've got it.", why: "‘내가 들게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 끝까지 말할게.", before: "Let me", after: ".", answers: ["finish"],
        wrong: { "finishing": "Let me 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "Hear me out.", why: "‘끝까지 들어 봐’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 도와줄게.", answers: ["Let me help you.", "Let me help."],
        wrong: { "let me to help you": "Let me 뒤에는 to 없이 동사 원래 모양을 써요.", "let me helping you": "Let me 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "I'll give you a hand.", why: "give a hand는 ‘도와주다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "생각 좀 해 볼게.", answers: ["Let me think about it.", "Let me think."],
        wrong: { "let me thinking about it": "Let me 뒤에는 동사 원래 모양 think를 써요." },
        tip: { en: "I'll sleep on it.", why: "sleep on it은 ‘하룻밤 생각해 보다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 다시 전화할게.", answers: ["Let me call you back.", "Let me call back."],
        wrong: { "let me to call you back": "Let me 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "I'll get back to you.", why: "get back to는 ‘다시 연락하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내 소개를 할게요.", answers: ["Let me introduce myself."],
        wrong: { "let me introduce me": "‘나 자신’은 myself예요." },
        tip: { en: "Hi, I'm Mina.", why: "이름을 바로 말해도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 운전할게.", answers: ["Let me drive."],
        ctx: { lead: "help you 대신 ‘운전하다(drive)’로 바꿔 보세요.", en: "Let me help you." },
        wrong: { "let me to drive": "Let me 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "I'll take the wheel.", why: "take the wheel은 ‘운전대를 잡다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 한번 볼게.", answers: ["Let me take a look.", "Let me see.", "Let me have a look.", "Let me look."],
        dialog: { a: "My phone won't turn on.", aKo: "내 폰이 안 켜져." },
        wrong: { "let me to see": "Let me 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Show me.", why: "‘보여 줘’라는 말이에요." } }
    ]
  };
})(window.EP);
