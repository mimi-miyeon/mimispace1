/* 세션 14. Do I need to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[14] = {
    no: 14, form: "Do I need to ~?", stem: "Do I need to", meaning: "내가 ~해야 해요?",
    hint: "Do I need to + 동사?",
    intro: {
      blocks: [["Do I", "내가 ~하니?"], ["need to", "~해야 한다"], ["~", "할 일"]],
      lines: [
        "Do I need to ~?는 ‘내가 ~해야 해?’라고 묻는 말이에요.",
        "I need to ~ 앞에 Do를 붙이면 묻는 말이 돼요.",
        "need는 동사라서 Am I need to가 아니라 Do I need to예요."
      ],
      examples: [
        { en: "Do I need to sign here?", ko: "나 여기 서명해야 해?" },
        { en: "Do I need to wait here?", ko: "나 여기서 기다려야 해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 예약해야 해?", before: "", after: "I need to make a reservation?", answers: ["Do"],
        wrong: { "am": "need는 동사라서 Am이 아니라 Do로 물어요.", "does": "Does는 he, she에게 물을 때 써요. I는 Do예요." },
        tip: { en: "Is a reservation needed?", why: "‘예약이 필요해?’처럼 물어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 지금 가야 해?", before: "Do I", after: "to go now?", answers: ["need", "have"],
        wrong: { "needs": "Do 뒤에는 동사 원래 모양 need를 써요." },
        tip: { en: "Should I go now?", why: "should는 ‘~하는 게 좋을까?’라는 느낌이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 신발 벗어야 해?", before: "Do I need", after: "take off my shoes?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Do I have to take off my shoes?", why: "have to도 ‘~해야 해’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 이 서류 작성해야 해?", before: "Do I need to", after: "out this form?", answers: ["fill"],
        wrong: { "filling": "to 뒤에는 동사 원래 모양 fill을 써요." },
        tip: { en: "Is this form required?", why: "required는 ‘꼭 필요한’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 정장 입어야 해?", before: "Do I need to", after: "a suit?", answers: ["wear"],
        wrong: { "put": "‘입고 있다’는 wear예요. put은 on과 같이 써요. (put on)", "wearing": "to 뒤에는 동사 원래 모양 wear를 써요." },
        tip: { en: "Is there a dress code?", why: "dress code는 ‘복장 규정’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 일찍 와야 해?", answers: ["Do I need to come early?", "Do I need to be there early?", "Do I need to get there early?"],
        wrong: { "am i need to come early": "need는 동사라서 Am이 아니라 Do로 물어요.", "do i need come early": "할 일 앞에 to를 붙여요. need to come이에요.", "i need to come early": "묻는 말은 Do로 시작해요." },
        tip: { en: "Should I come early?", why: "should는 ‘~하는 게 좋을까?’라는 느낌이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 내일 다시 와야 해?", answers: ["Do I need to come back tomorrow?", "Do I need to come again tomorrow?"],
        wrong: { "do i need to came back tomorrow": "to 뒤에는 동사 원래 모양 come을 써요." },
        tip: { en: "Should I come back tomorrow?", why: "should는 ‘~하는 게 좋을까?’라는 느낌이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 여권 가져가야 해?", answers: ["Do I need to bring my passport?", "Do I need to bring a passport?", "Do I need to take my passport?"],
        wrong: { "do i need to bring passport": "passport는 셀 수 있는 말이라 my나 a를 붙여요." },
        tip: { en: "Is my passport required?", why: "required는 ‘꼭 필요한’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 미리 전화해야 해?", answers: ["Do I need to call ahead?", "Do I need to call first?", "Do I need to call in advance?"],
        wrong: { "do i need call ahead": "할 일 앞에 to를 붙여요. need to call이에요." },
        tip: { en: "Should I call first?", why: "should는 ‘~하는 게 좋을까?’라는 느낌이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 지금 돈 내야 해?", answers: ["Do I need to pay now?"],
        ctx: { lead: "묻는 말로 바꿔 보세요.", en: "I need to pay now." },
        wrong: { "i need to pay now": "묻는 말은 Do로 시작해요.", "am i need to pay now": "need는 동사라서 Am이 아니라 Do로 물어요." },
        tip: { en: "Do I pay now?", why: "짧게 ‘지금 내?’라고 물어도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나 뭐 가져가야 해?", answers: ["Do I need to bring anything?", "Do I need to bring something?"],
        dialog: { a: "The party starts at seven.", aKo: "파티는 7시에 시작해." },
        wrong: { "do i need bring anything": "할 일 앞에 to를 붙여요. need to bring이에요.", "do i need to bringing anything": "to 뒤에는 동사 원래 모양 bring을 써요." },
        tip: { en: "Should I bring anything?", why: "should는 ‘~하는 게 좋을까?’라는 느낌이에요." } }
    ]
  };
})(window.EP);
