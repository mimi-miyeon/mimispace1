/* 세션 164. What do you have to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[164] = {
    no: 164, form: "What do you have to ~?", stem: "What do you have to", meaning: "무엇을 ~해야 해요?",
    hint: "What do you have to + 동사?",
    intro: {
      blocks: [["What do you have", "너는 무엇을 해야 하니"], ["to ~?", "~하는 것을"]],
      lines: [
        "What do you have to + 동사?는 ‘뭘 ~해야 해?’예요. 꼭 해야 하는 일을 물어요.",
        "have to는 ‘~해야 하다’예요. to 뒤에는 동사 원래 모양을 써요.",
        "have to는 ‘해브 투’보다 ‘해프 투’처럼 들려요."
      ],
      examples: [
        { en: "What do you have to do?", ko: "너 뭐 해야 해?" },
        { en: "What do you have to say?", ko: "할 말 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 뭐 해야 해?", before: "What do you have to", after: "?", answers: ["do"],
        wrong: { "doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Are you busy?", why: "‘바빠?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "할 말 있어?", before: "What do you have to", after: "?", answers: ["say"],
        wrong: { "tell": "‘할 말’은 have to say예요." },
        tip: { en: "Speak up.", why: "‘말해 봐’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭐 내야 해?", before: "What do you", after: "to pay?", answers: ["have"],
        wrong: { "has": "you 뒤에는 has가 아니라 have예요." },
        tip: { en: "How much is it?", why: "‘얼마야?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내일까지 뭐 제출해야 해?", before: "What do you have to", after: "by tomorrow?", answers: ["submit"],
        wrong: { "submitting": "to 뒤에는 동사 원래 모양 submit을 써요." },
        tip: { en: "What's due tomorrow?", why: "due는 ‘마감인’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "주말에 뭐 해야 해?", before: "What do you have", after: "do this weekend?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Busy weekend?", why: "‘주말 바빠?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "뭐 외워야 해?", answers: ["What do you have to memorize?"],
        wrong: { "what do you have to memorizing": "to 뒤에는 동사 원래 모양 memorize를 써요.", "what do you has to memorize": "you 뒤에는 has가 아니라 have예요." },
        tip: { en: "Learn it by heart.", why: "by heart는 ‘외워서’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "오늘 뭐 끝내야 해?", answers: ["What do you have to finish today?", "What do you have to get done today?"],
        wrong: { "what do you have to finishing today": "to 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "What's on your plate?", why: "on one's plate는 ‘해야 할 일’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "거기서 뭐 해야 해?", answers: ["What do you have to do there?"],
        wrong: { "what do you have to do in there": "‘거기서’는 there예요." },
        tip: { en: "What's the job?", why: "‘무슨 일이야?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "뭐 사야 해?", answers: ["What do you have to buy?", "What do you have to get?"],
        wrong: { "what do you have to buying": "to 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Make a list.", why: "‘목록 만들어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "뭐 고쳐야 해?", answers: ["What do you have to fix?"],
        ctx: { lead: "do 대신 ‘고치다(fix)’로 바꿔 보세요.", en: "What do you have to do?" },
        wrong: { "what do you have to fixing": "to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "What's broken?", why: "‘뭐가 고장 났어?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "왜? 뭐 해야 하는데?", answers: ["Why? What do you have to do?", "What do you have to do?"],
        dialog: { a: "I can't go out tonight.", aKo: "나 오늘 밤 못 나가." },
        wrong: { "why what do you have to doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Can I help?", why: "‘도와줄까?’라는 말이에요." } }
    ]
  };
})(window.EP);
