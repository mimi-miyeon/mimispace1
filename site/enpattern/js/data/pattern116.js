/* 세션 116. I'd rather ... than ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[116] = {
    no: 116, form: "I'd rather ... than ~.", stem: "I'd rather", meaning: "~보다는 ...하는 게 좋아요.",
    hint: "I'd rather + 동사 + than + 동사",
    intro: {
      blocks: [["I'd rather ...", "나는 차라리 ...하겠다"], ["than ~", "~하느니"]],
      lines: [
        "I'd rather A than B는 ‘B 하느니 차라리 A 할래’예요.",
        "I'd는 I would를 줄인 말이에요. rather 뒤와 than 뒤에 모두 동사 원래 모양을 써요.",
        "than ~ 없이 I'd rather stay home.(차라리 집에 있을래)처럼도 써요."
      ],
      examples: [
        { en: "I'd rather walk than take the bus.", ko: "버스 타느니 걸을래." },
        { en: "I'd rather stay home.", ko: "차라리 집에 있을래." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나가느니 집에 있을래.", before: "I'd rather stay home", after: "go out.", answers: ["than"],
        wrong: { "then": "‘~하느니’는 then이 아니라 than이에요.", "to": "‘~하느니’는 than이에요." },
        tip: { en: "I'm staying in tonight.", why: "stay in은 ‘집에 있다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "버스 타느니 걸을래.", before: "I'd rather", after: "than take the bus.", answers: ["walk"],
        wrong: { "walking": "rather 뒤에는 동사 원래 모양 walk를 써요.", "to walk": "rather 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Walking is faster.", why: "‘걷는 게 더 빨라’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "기다리느니 지금 갈래.", before: "I'd", after: "go now than wait.", answers: ["rather"],
        wrong: { "better": "‘차라리 ~할래’는 I'd rather예요." },
        tip: { en: "Let's not wait.", why: "‘기다리지 말자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "밖에서 먹느니 요리할래.", before: "I'd rather cook than", after: "out.", answers: ["eat"],
        wrong: { "eating": "than 뒤에도 동사 원래 모양 eat을 써요." },
        tip: { en: "Home cooking is better.", why: "‘집밥이 더 좋아’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "차라리 혼자 할래.", before: "", after: "rather do it alone.", answers: ["I'd"],
        wrong: { "i": "‘차라리 ~할래’는 I'd rather예요. would가 필요해요." },
        tip: { en: "I'll do it myself.", why: "‘내가 직접 할게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "거짓말하느니 사실대로 말할래.", answers: ["I'd rather tell the truth than lie."],
        wrong: { "i would rather tell the truth than lying": "than 뒤에도 동사 원래 모양 lie를 써요.", "i would rather tell the truth then lie": "‘~하느니’는 then이 아니라 than이에요." },
        tip: { en: "Honesty is best.", why: "honesty는 ‘정직’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "운전하느니 기차 탈래.", answers: ["I'd rather take the train than drive."],
        wrong: { "i would rather taking the train than drive": "rather 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Trains are more relaxing.", why: "relaxing은 ‘편안한’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "차라리 집에 있을래.", answers: ["I'd rather stay home.", "I'd rather stay at home."],
        wrong: { "i would rather to stay home": "rather 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "I don't feel like going out.", why: "feel like ~ing는 ‘~하고 싶다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "쇼핑하느니 잘래.", answers: ["I'd rather sleep than go shopping.", "I'd rather sleep than shop."],
        wrong: { "i would rather sleep than going shopping": "than 뒤에도 동사 원래 모양 go를 써요." },
        tip: { en: "Shopping tires me out.", why: "tire out은 ‘지치게 하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "버스 타느니 택시 탈래.", answers: ["I'd rather take a taxi than take the bus.", "I'd rather take a taxi."],
        ctx: { lead: "walk 대신 ‘택시 타다(take a taxi)’로 바꿔 보세요.", en: "I'd rather walk than take the bus." },
        wrong: { "i would rather taking a taxi than take the bus": "rather 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Let's grab a cab.", why: "cab도 ‘택시’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "영화 보느니 산책할래.", answers: ["I'd rather go for a walk than watch a movie.", "I'd rather take a walk than watch a movie.", "I'd rather go for a walk."],
        dialog: { a: "Do you want to watch a movie?", aKo: "영화 볼래?" },
        wrong: { "i would rather go for a walk than watching a movie": "than 뒤에도 동사 원래 모양 watch를 써요." },
        tip: { en: "It's too nice to stay inside.", why: "‘안에 있기엔 날씨가 너무 좋아’라는 말이에요." } }
    ]
  };
})(window.EP);
