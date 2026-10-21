/* 세션 49. It's going to be ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[49] = {
    no: 49, form: "It's going to be ~.", stem: "It's going to be", meaning: "~해질 거예요.",
    hint: "It's going to be + 형용사",
    intro: {
      blocks: [["It's going to be", "그것은 ~일 것이다"], ["~", "형용사"]],
      lines: [
        "It's going to be ~는 ‘~일 거야 / ~해질 거야’예요.",
        "날씨, 일, 하루가 어떨지 예상할 때 써요. (It's going to be hot.)",
        "be 뒤에 형용사를 붙여요. (fine, fun, hard)"
      ],
      examples: [
        { en: "It's going to be a good day.", ko: "좋은 하루가 될 거야." },
        { en: "It's going to be hot tomorrow.", ko: "내일 덥겠다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "재밌을 거야.", before: "It's going to", after: "fun.", answers: ["be"],
        wrong: { "is": "to 뒤에는 원래 모양 be를 써요.", "being": "to 뒤에는 원래 모양 be를 써요." },
        tip: { en: "It'll be fun.", why: "It'll be도 ‘~일 거야’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "오늘 추울 거야.", before: "It's going to be", after: "today.", answers: ["cold", "cool"],
        wrong: { "coldly": "‘추운’은 coldly가 아니라 cold예요." },
        tip: { en: "Bundle up today.", why: "bundle up은 ‘따뜻하게 껴입다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "괜찮을 거야.", before: "", after: "going to be fine.", answers: ["It's"],
        wrong: { "i am": "‘괜찮을 거야’는 It's going to be예요.", "it": "It 뒤에 is를 붙여 It's going to be예요." },
        tip: { en: "Everything will be fine.", why: "will be도 ‘~일 거야’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "긴 하루가 될 거야.", before: "It's going to be a long", after: ".", answers: ["day"],
        wrong: { "days": "a 뒤에는 day 하나만 써요." },
        tip: { en: "Today will be tough.", why: "tough는 ‘힘든’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어려울 거야.", before: "It's", after: "to be hard.", answers: ["going"],
        wrong: { "go": "‘~일 거야’는 It's going to be예요." },
        tip: { en: "It won't be easy.", why: "‘쉽지 않을 거야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "멋질 거야.", answers: ["It's going to be great.", "It's going to be amazing.", "It's going to be awesome."],
        wrong: { "it is going to great": "great 앞에 be를 붙여요. going to be great예요." },
        tip: { en: "It'll be great.", why: "It'll be도 ‘~일 거야’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "주말에 날씨 좋을 거야.", answers: ["It's going to be nice this weekend.", "It's going to be sunny this weekend.", "It's going to be nice on the weekend."],
        wrong: { "it is going to nice this weekend": "nice 앞에 be를 붙여요. going to be nice예요." },
        tip: { en: "The weekend looks nice.", why: "‘주말 날씨 좋아 보여’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오늘 바쁠 거야.", answers: ["It's going to be busy today.", "It's going to be a busy day."],
        wrong: { "it is going to be busily today": "‘바쁜’은 busily가 아니라 busy예요." },
        tip: { en: "Today will be hectic.", why: "hectic은 ‘정신없이 바쁜’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "거기 사람 많을 거야.", answers: ["It's going to be crowded there.", "It's going to be busy there.", "It's going to be crowded."],
        wrong: { "it is going to be crowd there": "‘붐비는’은 crowd가 아니라 crowded예요." },
        tip: { en: "There'll be a lot of people.", why: "There'll be는 ‘~이 있을 거야’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "쉬울 거야.", answers: ["It's going to be easy."],
        ctx: { lead: "a good day 대신 ‘쉬운(easy)’으로 바꿔 보세요.", en: "It's going to be a good day." },
        wrong: { "it is going to be easily": "‘쉬운’은 easily가 아니라 easy예요." },
        tip: { en: "It'll be a piece of cake.", why: "a piece of cake는 ‘식은 죽 먹기’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "괜찮을 거야. 걱정 마.", answers: ["It's going to be okay. Don't worry.", "It's going to be fine. Don't worry.", "Don't worry. It's going to be okay.", "Don't worry. It's going to be fine."],
        dialog: { a: "I'm nervous about my first day.", aKo: "첫 출근이라 떨려." },
        wrong: { "it is going to okay do not worry": "okay 앞에 be를 붙여요. going to be okay예요." },
        tip: { en: "You'll do great.", why: "‘넌 잘할 거야’라는 말이에요." } }
    ]
  };
})(window.EP);
