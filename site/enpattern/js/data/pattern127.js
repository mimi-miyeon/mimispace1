/* 세션 127. I'm looking at ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[127] = {
    no: 127, form: "I'm looking at ~.", stem: "I'm looking at", meaning: "~을 알아보는 중이에요.",
    hint: "I'm looking at + 명사/동사-ing",
    intro: {
      blocks: [["I'm looking", "나는 보고 있다"], ["at ~", "~을"]],
      lines: [
        "I'm looking at ~은 ‘~을 보고 있어’, 그리고 ‘~을 알아보는 중이야’라는 뜻도 있어요.",
        "사거나 고를 걸 살펴볼 때 써요. (I'm looking at new cars: 새 차 알아보는 중이야)",
        "at 뒤에는 명사나 동사-ing를 써요."
      ],
      examples: [
        { en: "I'm looking at new laptops.", ko: "나 새 노트북 알아보는 중이야." },
        { en: "I'm looking at moving to Busan.", ko: "나 부산으로 이사 갈까 알아보는 중이야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 새 폰 알아보는 중이야.", before: "I'm looking", after: "new phones.", answers: ["at"],
        wrong: { "for": "‘살펴보는 중’은 looking at이에요." },
        tip: { en: "I need a new phone.", why: "‘새 폰이 필요해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 집 알아보는 중이야.", before: "I'm looking at", after: ".", answers: ["houses", "apartments", "places"],
        wrong: { "house": "여러 집을 보니까 houses예요." },
        tip: { en: "I want to move.", why: "‘이사 가고 싶어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 이직 알아보는 중이야.", before: "I'm looking at", after: "jobs.", answers: ["changing"],
        wrong: { "change": "at 뒤에는 동사에 ing를 붙여요. changing이에요." },
        tip: { en: "I need a change.", why: "‘변화가 필요해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 비행기 표 알아보는 중이야.", before: "I'm", after: "at flights.", answers: ["looking"],
        wrong: { "watching": "‘알아보는 중’은 looking at이에요." },
        tip: { en: "I'm planning a trip.", why: "‘여행 계획 중이야’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 다른 선택지 알아보는 중이야.", before: "I'm looking at other", after: ".", answers: ["options"],
        wrong: { "option": "다른 선택지가 여러 개라 options예요." },
        tip: { en: "I'm keeping my options open.", why: "‘선택지를 열어 두고 있어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 새 차 알아보는 중이야.", answers: ["I'm looking at new cars.", "I'm looking at a new car."],
        wrong: { "i am looking for at new cars": "‘알아보는 중’은 looking at이에요.", "i am looking new cars": "look 뒤에 at을 붙여요." },
        tip: { en: "I'm car shopping.", why: "car shopping은 ‘차 고르기’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 대학원 알아보는 중이야.", answers: ["I'm looking at grad schools.", "I'm looking at graduate schools."],
        wrong: { "i am looking at grad school": "여러 학교를 보니까 schools예요." },
        tip: { en: "I'm thinking about grad school.", why: "‘대학원 생각 중이야’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 호텔 알아보는 중이야.", answers: ["I'm looking at hotels."],
        wrong: { "i am looking at hotel": "여러 호텔을 보니까 hotels예요." },
        tip: { en: "Know any good hotels?", why: "‘좋은 호텔 알아?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 내년에 유학 갈까 알아보는 중이야.", answers: ["I'm looking at studying abroad next year."],
        wrong: { "i am looking at study abroad next year": "at 뒤에는 동사에 ing를 붙여요. studying이에요." },
        tip: { en: "I want to study overseas.", why: "overseas는 ‘해외에서’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 새 소파 알아보는 중이야.", answers: ["I'm looking at new sofas.", "I'm looking at a new sofa.", "I'm looking at new couches."],
        ctx: { lead: "new laptops 대신 ‘새 소파(new sofas)’로 바꿔 보세요.", en: "I'm looking at new laptops." },
        wrong: { "i am looking at new sofa": "여러 개를 보니까 sofas예요." },
        tip: { en: "Our sofa is old.", why: "‘우리 소파 낡았어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나 이사 갈까 알아보는 중이야.", answers: ["I'm looking at moving.", "I'm looking at moving out."],
        dialog: { a: "Why are you looking at apartments?", aKo: "왜 아파트 보고 있어?" },
        wrong: { "i am looking at move": "at 뒤에는 동사에 ing를 붙여요. moving이에요." },
        tip: { en: "I need more space.", why: "space는 ‘공간’이에요." } }
    ]
  };
})(window.EP);
