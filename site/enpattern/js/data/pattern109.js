/* 세션 109. Let's go ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[109] = {
    no: 109, form: "Let's go ~ing.", stem: "Let's go", meaning: "~하러 가요.",
    hint: "Let's go + 동사-ing",
    intro: {
      blocks: [["Let's go", "가자"], ["~ing", "~하러"]],
      lines: [
        "Let's go + 동사-ing는 ‘~하러 가자’예요. 활동하러 가자고 할 때 써요.",
        "go 뒤에는 to가 아니라 동사-ing를 써요. (go shopping, go swimming)",
        "장소를 붙일 때는 at이나 in을 써요. (go shopping at the mall)"
      ],
      examples: [
        { en: "Let's go shopping.", ko: "쇼핑하러 가자." },
        { en: "Let's go swimming.", ko: "수영하러 가자." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "캠핑 가자.", before: "Let's go", after: ".", answers: ["camping"],
        wrong: { "camp": "go 뒤에는 동사에 ing를 붙여요. camping이에요.", "to camp": "go 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Let's go on a camping trip.", why: "camping trip은 ‘캠핑 여행’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "등산 가자.", before: "Let's go", after: ".", answers: ["hiking"],
        wrong: { "hike": "go 뒤에는 동사에 ing를 붙여요. hiking이에요.", "climbing": "가벼운 등산은 hiking이 자연스러워요." },
        tip: { en: "Let's hit the trails.", why: "trail은 ‘산길’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "낚시하러 가자.", before: "Let's", after: "fishing.", answers: ["go"],
        wrong: { "going": "Let's 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Let's catch some fish.", why: "catch는 ‘잡다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "자전거 타러 가자.", before: "Let's go", after: ".", answers: ["biking", "cycling"],
        wrong: { "bike": "go 뒤에는 동사에 ing를 붙여요. biking이에요." },
        tip: { en: "Let's go for a ride.", why: "go for a ride는 ‘한 바퀴 타러 가다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "스키 타러 가자.", before: "", after: "go skiing.", answers: ["Let's"],
        wrong: { "lets": "Let us를 줄인 말이라 Let's에 '를 붙여요." },
        tip: { en: "Let's hit the slopes.", why: "slope는 ‘스키 슬로프’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "쇼핑하러 가자.", answers: ["Let's go shopping."],
        wrong: { "let us go to shopping": "go 뒤에는 to 없이 동사-ing를 써요.", "let us go shop": "go 뒤에는 동사에 ing를 붙여요. shopping이에요." },
        tip: { en: "Let's hit the mall.", why: "hit은 ‘~에 가다’라는 뜻도 있어요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "수영하러 가자.", answers: ["Let's go swimming."],
        wrong: { "let us go swiming": "swim은 m을 하나 더 붙여 swimming이에요.", "let us go to swim": "go 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Let's go for a swim.", why: "go for a swim도 ‘수영하러 가다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "볼링 치러 가자.", answers: ["Let's go bowling."],
        wrong: { "let us go to bowling": "go 뒤에는 to 없이 동사-ing를 써요." },
        tip: { en: "Let's hit the lanes.", why: "lane은 ‘볼링 레인’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이번 주말에 캠핑 가자.", answers: ["Let's go camping this weekend."],
        wrong: { "let us go camping at this weekend": "this weekend 앞에는 at을 붙이지 않아요." },
        tip: { en: "Are you free this weekend?", why: "‘이번 주말에 시간 돼?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "달리기하러 가자.", answers: ["Let's go running.", "Let's go jogging."],
        ctx: { lead: "shopping 대신 ‘달리기(running)’로 바꿔 보세요.", en: "Let's go shopping." },
        wrong: { "let us go run": "go 뒤에는 동사에 ing를 붙여요. running이에요.", "let us go runing": "run은 n을 하나 더 붙여 running이에요." },
        tip: { en: "Let's go for a run.", why: "go for a run도 ‘달리러 가다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아, 스케이트 타러 가자.", answers: ["Okay, let's go skating.", "Sure, let's go skating.", "Let's go skating."],
        dialog: { a: "The lake is frozen.", aKo: "호수가 얼었어." },
        wrong: { "okay let us go skate": "go 뒤에는 동사에 ing를 붙여요. skating이에요." },
        tip: { en: "Sounds fun!", why: "‘재밌겠다!’라는 말이에요." } }
    ]
  };
})(window.EP);
