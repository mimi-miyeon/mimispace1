/* 세션 141. What if ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[141] = {
    no: 141, form: "What if ~?", stem: "What if", meaning: "만약 ~라면 어떡해요?",
    hint: "What if + 주어 + 동사?",
    intro: {
      blocks: [["What if", "만약 ~라면 어떡해"], ["~?", "주어 + 동사"]],
      lines: [
        "What if + 주어 + 동사?는 ‘만약 ~하면 어떡해?’예요. 걱정이나 상상을 말해요.",
        "뒤에는 ‘주어 + 동사’를 완전하게 써요. (What if it rains?)",
        "제안할 때도 써요. (What if we go tomorrow?: 내일 가면 어때?)"
      ],
      examples: [
        { en: "What if it rains?", ko: "비 오면 어떡해?" },
        { en: "What if he says no?", ko: "걔가 싫다고 하면 어떡해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "비 오면 어떡해?", before: "What", after: "it rains?", answers: ["if"],
        wrong: { "when": "‘만약 ~라면 어떡해’는 What if예요." },
        tip: { en: "Let's bring an umbrella.", why: "‘우산 챙기자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "걔가 싫다고 하면 어떡해?", before: "What if he", after: "no?", answers: ["says"],
        wrong: { "say": "he 뒤에는 동사에 s를 붙여요. says예요." },
        tip: { en: "Then we'll ask someone else.", why: "‘그럼 다른 사람한테 물어보자’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리가 늦으면 어떡해?", before: "What if we're", after: "?", answers: ["late"],
        wrong: { "lately": "‘늦은’은 late예요." },
        tip: { en: "We won't be.", why: "‘안 늦을 거야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "아무도 안 오면 어떡해?", before: "What if", after: "comes?", answers: ["nobody"],
        wrong: { "anybody": "‘아무도 안 오다’는 nobody comes예요." },
        tip: { en: "Don't worry, they'll come.", why: "‘걱정 마, 올 거야’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내일 가면 어때?", before: "What if we go", after: "?", answers: ["tomorrow"],
        wrong: { "yesterday": "앞으로의 일이라 tomorrow예요." },
        tip: { en: "How about tomorrow?", why: "How about도 ‘~ 어때?’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 실패하면 어떡해?", answers: ["What if I fail?"],
        wrong: { "what if i will fail": "if 뒤에는 will 없이 현재형을 써요.", "what if i failed": "앞으로의 걱정이라 fail을 써요." },
        tip: { en: "You won't fail.", why: "‘너 실패 안 해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "길을 잃으면 어떡해?", answers: ["What if we get lost?", "What if I get lost?"],
        wrong: { "what if we will get lost": "if 뒤에는 will 없이 현재형을 써요." },
        tip: { en: "We have a map.", why: "‘지도 있잖아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그녀가 날 기억 못 하면 어떡해?", answers: ["What if she doesn't remember me?"],
        wrong: { "what if she do not remember me": "she 뒤에는 doesn't를 써요.", "what if she will not remember me": "if 뒤에는 will 없이 현재형을 써요." },
        tip: { en: "Of course she will.", why: "‘당연히 기억하지’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가게가 문 닫았으면 어떡해?", answers: ["What if the store is closed?", "What if the shop is closed?"],
        wrong: { "what if the store closed": "‘문 닫은 상태’는 is closed예요." },
        tip: { en: "Let's call first.", why: "‘먼저 전화해 보자’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "눈 오면 어떡해?", answers: ["What if it snows?"],
        ctx: { lead: "rains 대신 ‘눈이 오다(snows)’로 바꿔 보세요.", en: "What if it rains?" },
        wrong: { "what if it snow": "it 뒤에는 동사에 s를 붙여요. snows예요." },
        tip: { en: "We'll stay home.", why: "‘집에 있으면 되지’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "근데 그게 안 맞으면 어떡해?", answers: ["But what if it doesn't fit?", "What if it doesn't fit?"],
        dialog: { a: "Just buy it online.", aKo: "그냥 온라인으로 사." },
        wrong: { "but what if it do not fit": "it 뒤에는 doesn't를 써요." },
        tip: { en: "Can I return it?", why: "‘반품할 수 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
