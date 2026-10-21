/* 세션 223. It's better to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[223] = {
    no: 223, form: "It's better to ~.", stem: "It's better to/It's better not to", meaning: "~하는 편이 나아요.",
    hint: "It's better to + 동사",
    intro: {
      blocks: [["It's better", "더 낫다"], ["to ~", "~하는 것이"]],
      lines: [
        "It's better to + 동사는 ‘~하는 게 나아’예요. 조언할 때 써요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "‘~하지 않는 게 나아’는 It's better not to ~예요."
      ],
      examples: [
        { en: "It's better to wait.", ko: "기다리는 게 나아." },
        { en: "It's better not to say anything.", ko: "아무 말 안 하는 게 나아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "기다리는 게 나아.", before: "It's better to", after: ".", answers: ["wait"],
        wrong: { "waiting": "to 뒤에는 동사 원래 모양 wait를 써요." },
        tip: { en: "Be patient.", why: "‘참아’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "아무 말 안 하는 게 나아.", before: "It's better", after: "to say anything.", answers: ["not"],
        wrong: { "no": "‘~하지 않는 게 나아’는 better not to예요." },
        tip: { en: "Keep quiet.", why: "‘조용히 있어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "일찍 가는 게 나아.", before: "It's", after: "to go early.", answers: ["better"],
        wrong: { "good": "비교해서 ‘나아’는 better예요.", "best": "둘을 비교할 때는 better예요." },
        tip: { en: "Beat the crowd.", why: "‘사람 몰리기 전에 가’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "물어보는 게 나아.", before: "It's better to", after: ".", answers: ["ask"],
        wrong: { "asking": "to 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "Don't guess.", why: "‘짐작하지 마’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "확인하는 게 나아.", before: "It's better", after: "check.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Double-check.", why: "‘한 번 더 확인해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "사실대로 말하는 게 나아.", answers: ["It's better to tell the truth."],
        wrong: { "it is better to telling the truth": "to 뒤에는 동사 원래 모양 tell을 써요.", "it is more better to tell the truth": "better 앞에는 more를 붙이지 않아요." },
        tip: { en: "Honesty is the best policy.", why: "‘정직이 최선이야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "늦는 게 안 오는 것보다 나아.", answers: ["It's better to be late than never.", "It's better to come late than never."],
        wrong: { "it is better to be late then never": "‘~보다’는 then이 아니라 than이에요." },
        tip: { en: "Better late than never.", why: "‘안 하는 것보다 늦는 게 낫다’는 속담이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "미리 준비하는 게 나아.", answers: ["It's better to prepare ahead.", "It's better to prepare in advance.", "It's better to be prepared."],
        wrong: { "it is better to preparing ahead": "to 뒤에는 동사 원래 모양 prepare를 써요." },
        tip: { en: "Plan ahead.", why: "plan ahead는 ‘미리 계획하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그건 안 사는 게 나아.", answers: ["It's better not to buy it.", "It's better not to buy that."],
        wrong: { "it is better to not buy it": "보통 not을 to 앞에 써요. better not to예요." },
        tip: { en: "Save your money.", why: "‘돈 아껴’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "쉬는 게 나아.", answers: ["It's better to rest.", "It's better to take a break."],
        ctx: { lead: "wait 대신 ‘쉬다(rest)’로 바꿔 보세요.", en: "It's better to wait." },
        wrong: { "it is better to resting": "to 뒤에는 동사 원래 모양 rest를 써요." },
        tip: { en: "You look tired.", why: "‘피곤해 보여’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 기차 타는 게 나아.", answers: ["Yes, it's better to take the train.", "Yeah, it's better to take the train.", "It's better to take the train."],
        dialog: { a: "Should I take the train or drive?", aKo: "기차 탈까, 운전할까?" },
        wrong: { "yes it is better to take train": "train 앞에 the를 붙여요." },
        tip: { en: "Yes, the train is faster.", why: "‘응, 기차가 더 빨라’라는 말이에요." } }
    ]
  };
})(window.EP);
