/* 세션 103. It looks like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[103] = {
    no: 103, form: "It looks like ~.", stem: "It looks like", meaning: "그건 ~처럼 보여요.",
    hint: "It looks like + 명사/주어 + 동사",
    intro: {
      blocks: [["It looks", "~처럼 보인다"], ["like ~", "명사 / 주어 + 동사"]],
      lines: [
        "It looks like ~는 ‘~처럼 보여 / ~인 것 같아’예요. 눈으로 본 걸 근거로 말해요.",
        "like 뒤에는 명사(a cat)나 ‘주어 + 동사’(it's going to rain)를 써요.",
        "It 뒤라서 look에 s를 붙여요."
      ],
      examples: [
        { en: "It looks like rain.", ko: "비 올 것 같아." },
        { en: "It looks like you're right.", ko: "네 말이 맞는 것 같아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "고양이처럼 보여.", before: "It looks", after: "a cat.", answers: ["like"],
        wrong: { "as": "‘~처럼 보여’는 looks like예요." },
        tip: { en: "It's shaped like a cat.", why: "shaped like는 ‘~ 모양인’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "비 올 것 같아.", before: "It", after: "like rain.", answers: ["looks"],
        wrong: { "look": "It 뒤에는 동사에 s를 붙여요. looks예요.", "is look": "is와 looks를 같이 쓰지 않아요." },
        tip: { en: "Bring an umbrella.", why: "‘우산 챙겨’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리가 이긴 것 같아.", before: "It looks like we", after: ".", answers: ["won"],
        wrong: { "win": "지난 일이라 won을 써요." },
        tip: { en: "We did it!", why: "‘우리가 해냈어!’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "아무도 여기 없는 것 같아.", before: "It looks like", after: "is here.", answers: ["nobody"],
        wrong: { "anybody": "‘아무도 없다’는 nobody예요." },
        tip: { en: "The place is empty.", why: "empty는 ‘텅 빈’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "새것 같아.", before: "It looks like", after: ".", answers: ["new"],
        wrong: { "news": "‘새것’은 new예요. news는 ‘소식’이에요." },
        tip: { en: "It's in great shape.", why: "in great shape는 ‘상태가 아주 좋은’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "폭풍이 올 것 같아.", answers: ["It looks like a storm is coming.", "It looks like there's a storm coming."],
        wrong: { "it look like a storm is coming": "It 뒤에는 동사에 s를 붙여요. looks예요.", "it looks like a storm coming": "storm 뒤에 is가 필요해요. a storm is coming이에요." },
        tip: { en: "The sky is getting dark.", why: "‘하늘이 어두워지고 있어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그가 너를 좋아하는 것 같아.", answers: ["It looks like he likes you."],
        wrong: { "it looks like he like you": "he 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "He's into you.", why: "be into는 ‘~에게 빠져 있다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 늦을 것 같아.", answers: ["It looks like we're going to be late.", "It looks like we'll be late.", "It looks like we're late."],
        wrong: { "it looks like we going to be late": "we 뒤에 are가 필요해요. we're예요." },
        tip: { en: "We need to hurry.", why: "‘서둘러야 해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가게 문 닫은 것 같아.", answers: ["It looks like the store is closed.", "It looks like the shop is closed.", "It looks like it's closed."],
        wrong: { "it looks like the store closed": "‘문 닫은 상태’는 is closed예요." },
        tip: { en: "They're closed today.", why: "‘오늘 휴무야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "눈 올 것 같아.", answers: ["It looks like snow."],
        ctx: { lead: "rain 대신 ‘눈(snow)’으로 바꿔 보세요.", en: "It looks like rain." },
        wrong: { "it looks like a snow": "snow는 셀 수 없는 말이라 a를 붙이지 않아요." },
        tip: { en: "It's getting cold.", why: "‘추워지고 있어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "고장 난 것 같아.", answers: ["It looks like it's broken.", "It looks like it's not working."],
        dialog: { a: "What's wrong with the printer?", aKo: "프린터 왜 그래?" },
        wrong: { "it looks like it broken": "it 뒤에 is가 필요해요. it's broken이에요." },
        tip: { en: "It won't turn on.", why: "turn on은 ‘켜지다’예요." } }
    ]
  };
})(window.EP);
