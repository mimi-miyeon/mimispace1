/* 세션 101. It's like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[101] = {
    no: 101, form: "It's like ~.", stem: "It's like", meaning: "그건 ~인 것 같아요.",
    hint: "It's like + 명사",
    intro: {
      blocks: [["It's like", "그건 ~ 같다"], ["~", "명사"]],
      lines: [
        "It's like + 명사는 ‘그건 ~ 같아 / 꼭 ~ 같아’예요. 비유해서 설명할 때 써요.",
        "like 뒤에는 명사(a dream)나 ‘주어 + 동사’를 써요.",
        "여기서 like는 ‘좋아하다’가 아니라 ‘~ 같은’이에요."
      ],
      examples: [
        { en: "It's like a dream.", ko: "꿈 같아." },
        { en: "It's like magic.", ko: "마법 같아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "꼭 영화 같아.", before: "It's", after: "a movie.", answers: ["like"],
        wrong: { "as": "‘~ 같아’는 It's like예요." },
        tip: { en: "It's so dramatic.", why: "dramatic은 ‘극적인’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "꿈 같아.", before: "It's like a", after: ".", answers: ["dream"],
        wrong: { "dreaming": "‘꿈’은 dream이에요." },
        tip: { en: "I can't believe it.", why: "‘믿기지 않아’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "여기는 여름 같아.", before: "It's like", after: "here.", answers: ["summer"],
        wrong: { "a summer": "계절 이름 앞에는 보통 a를 붙이지 않아요." },
        tip: { en: "It's so hot here.", why: "‘여기 엄청 더워’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "자전거 타는 거랑 비슷해.", before: "It's like riding a", after: ".", answers: ["bike"],
        wrong: { "bicycle ride": "‘자전거 타기’는 riding a bike예요." },
        tip: { en: "You never forget.", why: "‘절대 안 잊어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "미로 같아.", before: "", after: "like a maze.", answers: ["It's"],
        wrong: { "i am": "‘그건 ~ 같아’는 It's like예요." },
        tip: { en: "I'm lost.", why: "‘길 잃었어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "꼭 집 같아.", answers: ["It's like home.", "It's like a home."],
        wrong: { "it is like house": "‘집 같은 편안함’은 home이에요.", "it likes home": "‘~ 같아’는 It's like예요. likes는 ‘좋아하다’예요." },
        tip: { en: "I feel at home here.", why: "feel at home은 ‘편안하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "마법 같아.", answers: ["It's like magic."],
        wrong: { "it is like a magic": "magic은 셀 수 없는 말이라 a를 붙이지 않아요.", "it like magic": "It 뒤에 is가 필요해요. It's like예요." },
        tip: { en: "It's amazing.", why: "amazing은 ‘놀라운’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "꼭 사우나 같아.", answers: ["It's like a sauna.", "It's like a sauna in here."],
        wrong: { "it is like sauna": "sauna는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "It's boiling in here.", why: "boiling은 ‘엄청 더운’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "꼭 어제 일 같아.", answers: ["It's like yesterday.", "It's like it was yesterday.", "It's like it happened yesterday."],
        wrong: { "it is like the yesterday": "yesterday 앞에는 the를 붙이지 않아요." },
        tip: { en: "Time flies.", why: "‘시간 빠르다’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "꼭 천국 같아.", answers: ["It's like heaven.", "It's like paradise."],
        ctx: { lead: "a dream 대신 ‘천국(heaven)’으로 바꿔 보세요.", en: "It's like a dream." },
        wrong: { "it is like a heaven": "heaven 앞에는 보통 a를 붙이지 않아요." },
        tip: { en: "This is the best.", why: "‘이게 최고야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "음, 치킨 같아.", answers: ["Well, it's like chicken.", "It's like chicken."],
        dialog: { a: "What does it taste like?", aKo: "그거 무슨 맛이야?" },
        wrong: { "well it is like a chickens": "음식으로서 chicken은 a도 s도 붙이지 않아요." },
        tip: { en: "It tastes like chicken.", why: "taste like는 ‘~ 맛이 나다’예요." } }
    ]
  };
})(window.EP);
