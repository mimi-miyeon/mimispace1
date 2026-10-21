/* 세션 130. Take a look at ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[130] = {
    no: 130, form: "Take a look at ~.", stem: "Take a look at", meaning: "~을 한번 보세요.",
    hint: "Take a look at + 명사/대명사",
    intro: {
      blocks: [["Take a look", "한번 봐"], ["at ~", "~을"]],
      lines: [
        "Take a look at ~은 ‘~ 한번 봐 봐’예요. 살펴봐 달라고 할 때 써요.",
        "look 앞에 a를 꼭 붙여요. (take look ×)",
        "Let me take a look.(내가 한번 볼게)처럼도 많이 써요."
      ],
      examples: [
        { en: "Take a look at this.", ko: "이거 한번 봐 봐." },
        { en: "Take a look at the menu.", ko: "메뉴 한번 봐 봐." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이거 한번 봐 봐.", before: "Take a look", after: "this.", answers: ["at"],
        wrong: { "to": "‘~을 한번 보다’는 take a look at이에요." },
        tip: { en: "Check this out.", why: "check out은 ‘한번 보다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "메뉴 한번 봐 봐.", before: "Take a", after: "at the menu.", answers: ["look"],
        wrong: { "see": "‘한번 보다’는 take a look이에요.", "looking": "a 뒤에는 look을 써요." },
        tip: { en: "What looks good?", why: "‘뭐가 맛있어 보여?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내 보고서 한번 봐 줄래?", before: "Can you take a look at my", after: "?", answers: ["report"],
        wrong: { "reports": "보고서 하나라 report예요." },
        tip: { en: "Any feedback?", why: "‘의견 있어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "지도 한번 봐 봐.", before: "", after: "a look at the map.", answers: ["Take"],
        wrong: { "have": "여기서는 Take a look이 자연스러워요." },
        tip: { en: "Where are we?", why: "‘우리 어디야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이 사진들 한번 봐 봐.", before: "Take a look at these", after: ".", answers: ["pictures", "photos"],
        wrong: { "picture": "these 뒤에는 여러 개라 pictures예요." },
        tip: { en: "These are from my trip.", why: "‘여행 가서 찍은 거야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 계약서 한번 봐 봐.", answers: ["Take a look at this contract."],
        wrong: { "take look at this contract": "look 앞에 a를 붙여요. take a look이에요.", "take a look this contract": "look 뒤에 at을 붙여요." },
        tip: { en: "Read it carefully.", why: "‘꼼꼼히 읽어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내 차 한번 봐 줄래?", answers: ["Can you take a look at my car?", "Could you take a look at my car?"],
        wrong: { "can you take a look my car": "look 뒤에 at을 붙여요." },
        tip: { en: "It's making a weird noise.", why: "‘이상한 소리가 나’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 그래프 한번 봐.", answers: ["Take a look at this graph.", "Take a look at this chart."],
        wrong: { "take a look at this graphs": "this 뒤에는 하나만 써요. graph예요." },
        tip: { en: "The numbers are going up.", why: "‘숫자가 오르고 있어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가격 한번 봐 봐.", answers: ["Take a look at the price.", "Take a look at the prices."],
        wrong: { "take a look at price": "price 앞에 the를 붙여요." },
        tip: { en: "It's so expensive!", why: "‘엄청 비싸!’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 영상 한번 봐 봐.", answers: ["Take a look at this video."],
        ctx: { lead: "this 대신 ‘이 영상(this video)’으로 바꿔 보세요.", en: "Take a look at this." },
        wrong: { "take a look at this videos": "this 뒤에는 하나만 써요. video예요." },
        tip: { en: "You have to see this.", why: "‘이거 꼭 봐야 해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 이거 한번 봐 줄래?", answers: ["Yes, can you take a look at this?", "Yeah, can you take a look at this?", "Yes, could you take a look at this?"],
        dialog: { a: "Do you need help with your computer?", aKo: "컴퓨터 도와줄까?" },
        wrong: { "yes can you take a look this": "look 뒤에 at을 붙여요." },
        tip: { en: "Yes, I need your help.", why: "‘응, 네 도움이 필요해’라는 말이에요." } }
    ]
  };
})(window.EP);
