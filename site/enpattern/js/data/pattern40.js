/* 세션 40. I'm getting ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[40] = {
    no: 40, form: "I'm getting ~.", stem: "I'm getting", meaning: "점점 ~해지고 있어요.",
    hint: "I'm getting + 형용사",
    intro: {
      blocks: [["I'm getting", "나는 점점 ~해지고 있다"], ["~", "형용사"]],
      lines: [
        "I'm getting + 형용사는 ‘점점 ~해지고 있어’예요. 상태가 바뀌는 중일 때 써요.",
        "여기서 get은 ‘~해지다’라는 뜻이에요. (get tired: 피곤해지다)",
        "비교급도 잘 붙어요. (I'm getting better: 점점 나아지고 있어)"
      ],
      examples: [
        { en: "I'm getting hungry.", ko: "나 배고파지고 있어." },
        { en: "I'm getting worried.", ko: "나 점점 걱정돼." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 점점 피곤해지고 있어.", before: "I'm", after: "tired.", answers: ["getting"],
        wrong: { "get": "I'm 뒤에는 getting을 써요.", "got": "‘점점 ~해지고 있어’는 I'm getting이에요." },
        tip: { en: "I'm starting to feel tired.", why: "start to는 ‘~하기 시작하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 점점 추워지고 있어.", before: "I'm getting", after: ".", answers: ["cold", "colder"],
        tip: { en: "It's getting cold.", why: "날씨를 주어로 하면 It's getting이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 점점 지루해지고 있어.", before: "I'm getting", after: ".", answers: ["bored"],
        wrong: { "boring": "boring은 ‘지루하게 하는’이에요. 내가 지루하면 bored예요." },
        tip: { en: "This is getting boring.", why: "상황을 주어로 하면 boring을 써요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 점점 긴장돼.", before: "", after: "getting nervous.", answers: ["I'm"],
        wrong: { "i": "‘~해지고 있어’는 I 뒤에 am을 붙여 I'm이에요." },
        tip: { en: "I'm starting to feel nervous.", why: "start to는 ‘~하기 시작하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 영어 실력이 점점 늘고 있어.", before: "I'm getting", after: "at English.", answers: ["better"],
        wrong: { "good": "‘점점 나아지다’는 비교급 better를 써요.", "more good": "good의 비교급은 better예요." },
        tip: { en: "My English is improving.", why: "improve는 ‘나아지다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 점점 졸려.", answers: ["I'm getting sleepy."],
        wrong: { "i get sleepy": "‘점점 ~해지고 있어’는 I'm getting이에요.", "i am getting sleep": "‘졸린’은 sleep이 아니라 sleepy예요." },
        tip: { en: "I can barely keep my eyes open.", why: "‘눈을 뜨고 있기도 힘들어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 점점 늙어 가.", answers: ["I'm getting old.", "I'm getting older."],
        wrong: { "i am get old": "I'm 뒤에는 getting을 써요." },
        tip: { en: "I'm not young anymore.", why: "‘나 이제 젊지 않아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 점점 짜증 나.", answers: ["I'm getting annoyed.", "I'm getting angry.", "I'm getting irritated."],
        wrong: { "i am getting annoying": "annoying은 ‘짜증 나게 하는’이에요. 내가 짜증 나면 annoyed예요." },
        tip: { en: "This is getting on my nerves.", why: "get on my nerves는 ‘신경을 긁다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 점점 배불러.", answers: ["I'm getting full."],
        wrong: { "i am getting fully": "‘배부른’은 fully가 아니라 full이에요." },
        tip: { en: "I'm almost full.", why: "‘거의 배불러’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 목말라지고 있어.", answers: ["I'm getting thirsty."],
        ctx: { lead: "hungry 대신 ‘목마른(thirsty)’으로 바꿔 보세요.", en: "I'm getting hungry." },
        wrong: { "i am getting thirst": "‘목마른’은 thirst가 아니라 thirsty예요." },
        tip: { en: "I need something to drink.", why: "‘마실 게 필요해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "점점 나아지고 있어.", answers: ["I'm getting better."],
        dialog: { a: "How's your cold?", aKo: "감기는 좀 어때?" },
        wrong: { "i am getting good": "‘점점 나아지다’는 비교급 better를 써요.", "i am getting more better": "better 앞에는 more를 붙이지 않아요." },
        tip: { en: "I'm feeling better.", why: "‘몸이 나아졌어’라는 말이에요." } }
    ]
  };
})(window.EP);
