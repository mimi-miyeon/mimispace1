/* 세션 217. Is it okay ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[217] = {
    no: 217, form: "Is it okay ~?", stem: "Is it okay", meaning: "~해도 괜찮아요?",
    hint: "Is it okay to + 동사/if + 주어 + 동사?",
    intro: {
      blocks: [["Is it okay", "괜찮니"], ["to ~ / if ~?", "~해도"]],
      lines: [
        "Is it okay to + 동사?는 ‘~해도 괜찮아?’예요. Is it okay if I ~?도 같은 뜻이에요.",
        "to 뒤에는 동사 원래 모양, if I 뒤에는 현재형 동사를 써요.",
        "May I ~?보다 편하게 허락을 구해요."
      ],
      examples: [
        { en: "Is it okay to sit here?", ko: "여기 앉아도 괜찮아?" },
        { en: "Is it okay if I leave early?", ko: "나 일찍 가도 괜찮아?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "여기 앉아도 괜찮아?", before: "Is it okay to", after: "here?", answers: ["sit"],
        wrong: { "sitting": "to 뒤에는 동사 원래 모양 sit을 써요." },
        tip: { en: "Is this seat free?", why: "‘이 자리 비었어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 일찍 가도 괜찮아?", before: "Is it okay", after: "I leave early?", answers: ["if"],
        wrong: { "that": "‘내가 ~해도’는 if I예요." },
        tip: { en: "I have plans.", why: "‘약속 있어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "사진 찍어도 괜찮아요?", before: "Is it", after: "to take pictures?", answers: ["okay"],
        wrong: { "ok to": "okay 한 단어만 써요." },
        tip: { en: "Are photos allowed?", why: "allowed는 ‘허용된’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "여기 주차해도 괜찮아요?", before: "Is", after: "okay to park here?", answers: ["it"],
        wrong: { "this": "‘~해도 괜찮아?’는 Is it okay예요." },
        tip: { en: "Is parking free?", why: "‘주차 무료예요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "창문 열어도 괜찮아?", before: "Is it okay if I", after: "the window?", answers: ["open"],
        wrong: { "opening": "if I 뒤에는 동사 원래 모양 open을 써요." },
        tip: { en: "It's stuffy.", why: "stuffy는 ‘답답한’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이거 먹어도 괜찮아?", answers: ["Is it okay to eat this?", "Is it okay if I eat this?"],
        wrong: { "is it okay to eating this": "to 뒤에는 동사 원래 모양 eat을 써요.", "is okay to eat this": "Is 뒤에 it을 붙여요." },
        tip: { en: "Can I have this?", why: "‘이거 먹어도 돼?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "친구 데려가도 괜찮아?", answers: ["Is it okay if I bring a friend?", "Is it okay to bring a friend?"],
        wrong: { "is it okay if i bring friend": "friend는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "The more, the merrier.", why: "‘많을수록 좋지’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내일 전화해도 괜찮아?", answers: ["Is it okay if I call you tomorrow?", "Is it okay to call you tomorrow?", "Is it okay if I call tomorrow?"],
        wrong: { "is it okay if i will call you tomorrow": "if 뒤에는 will 없이 현재형을 써요." },
        tip: { en: "Call me anytime.", why: "‘언제든 전화해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "카드로 내도 괜찮아요?", answers: ["Is it okay to pay by card?", "Is it okay if I pay by card?", "Is it okay to pay with a card?"],
        wrong: { "is it okay to pay with card": "‘카드로’는 by card예요." },
        tip: { en: "Do you take cards?", why: "‘카드 받아요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "여기서 기다려도 괜찮아?", answers: ["Is it okay to wait here?", "Is it okay if I wait here?"],
        ctx: { lead: "sit 대신 ‘기다리다(wait)’로 바꿔 보세요.", en: "Is it okay to sit here?" },
        wrong: { "is it okay to waiting here": "to 뒤에는 동사 원래 모양 wait를 써요." },
        tip: { en: "I'll be right back.", why: "‘금방 올게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응. 근데 이거 빌려도 괜찮아?", answers: ["Yes. But is it okay if I borrow this?", "Is it okay if I borrow this?", "Is it okay to borrow this?", "Yeah. Is it okay if I borrow this?"],
        dialog: { a: "Make yourself at home.", aKo: "편하게 있어." },
        wrong: { "yes but is it okay if i lend this": "‘빌리다’는 borrow예요. lend는 ‘빌려주다’예요." },
        tip: { en: "I'll give it back soon.", why: "‘곧 돌려줄게’라는 말이에요." } }
    ]
  };
})(window.EP);
