/* 세션 46. I'm going to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[46] = {
    no: 46, form: "I'm going to ~.", stem: "I'm going to", meaning: "나는 ~할 거예요.",
    hint: "I'm going to + 동사",
    intro: {
      blocks: [["I'm going to", "나는 ~할 거다"], ["~", "동사"]],
      lines: [
        "I'm going to + 동사는 ‘~할 거야’예요. 이미 마음먹은 계획을 말해요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "말할 때는 I'm gonna로 줄이기도 해요. gonna로 써도 정답이에요."
      ],
      examples: [
        { en: "I'm going to call her.", ko: "나 걔한테 전화할 거야." },
        { en: "I'm going to stay home tonight.", ko: "나 오늘 밤 집에 있을 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 내일 쇼핑 갈 거야.", before: "I'm going", after: "go shopping tomorrow.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I'll go shopping tomorrow.", why: "I'll도 ‘~할게’예요. 즉석에서 정할 때 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 이사할 거야.", before: "I'm", after: "to move.", answers: ["going"],
        wrong: { "go": "‘~할 거야’는 I'm going to예요.", "gone": "‘~할 거야’는 I'm going to예요." },
        tip: { en: "I'm moving soon.", why: "가까운 계획은 I'm ~ing로도 말해요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 일찍 잘 거야.", before: "I'm going to", after: "to bed early.", answers: ["go"],
        wrong: { "going": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I'm turning in early.", why: "turn in은 ‘자러 가다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 운동 시작할 거야.", before: "I'm going to", after: "working out.", answers: ["start"],
        wrong: { "starting": "to 뒤에는 동사 원래 모양 start를 써요." },
        tip: { en: "I'm going to hit the gym.", why: "hit the gym은 ‘헬스장에 가다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 오늘 밤에 영화 볼 거야.", before: "", after: "going to watch a movie tonight.", answers: ["I'm"],
        wrong: { "i": "‘~할 거야’는 I 뒤에 am을 붙여 I'm going to예요." },
        tip: { en: "I'm watching a movie tonight.", why: "가까운 계획은 I'm ~ing로도 말해요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 내년에 유럽 여행 갈 거야.", answers: ["I'm going to travel to Europe next year.", "I'm going to go to Europe next year.", "Next year I'm going to travel to Europe."],
        wrong: { "i am going to traveling to europe next year": "to 뒤에는 동사 원래 모양 travel을 써요.", "i going to travel to europe next year": "‘~할 거야’는 I 뒤에 am을 붙여 I'm going to예요." },
        tip: { en: "I'm planning a trip to Europe next year.", why: "plan은 ‘계획하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 이 셔츠 살 거야.", answers: ["I'm going to buy this shirt.", "I'm going to get this shirt."],
        wrong: { "i am going to buying this shirt": "to 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "I'll take this shirt.", why: "가게에서 ‘이걸로 할게요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 일찍 퇴근할 거야.", answers: ["I'm going to leave work early today.", "I'm going to get off work early today.", "I'm going to leave early today."],
        wrong: { "i am going to leaving work early today": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "I'm heading out early today.", why: "head out은 ‘나가다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 걔한테 사실대로 말할 거야.", answers: ["I'm going to tell her the truth.", "I'm going to tell him the truth."],
        wrong: { "i am going to say her the truth": "‘~에게 말하다’는 say가 아니라 tell이에요." },
        tip: { en: "I'll be honest with her.", why: "be honest with는 ‘~에게 솔직하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 저녁 요리할 거야.", answers: ["I'm going to cook dinner.", "I'm going to make dinner."],
        ctx: { lead: "call her 대신 ‘저녁을 요리하다(cook dinner)’로 바꿔 보세요.", en: "I'm going to call her." },
        wrong: { "i am going to cooking dinner": "to 뒤에는 동사 원래 모양 cook을 써요." },
        tip: { en: "I'm making dinner tonight.", why: "가까운 계획은 I'm ~ing로도 말해요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나 집에서 쉴 거야.", answers: ["I'm going to relax at home.", "I'm going to rest at home.", "I'm going to stay home and relax."],
        dialog: { a: "What's your plan for the weekend?", aKo: "주말 계획이 뭐야?" },
        wrong: { "i am going to relaxing at home": "to 뒤에는 동사 원래 모양 relax를 써요." },
        tip: { en: "I'm just going to chill at home.", why: "chill은 ‘편하게 쉬다’예요." } }
    ]
  };
})(window.EP);
