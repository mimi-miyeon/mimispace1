/* 세션 119. You'd better ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[119] = {
    no: 119, form: "You'd better ~.", stem: "You'd better", meaning: "당신은 ~하는 게 좋겠어요.",
    hint: "You'd better + 동사",
    intro: {
      blocks: [["You'd better", "너는 ~하는 게 좋겠다"], ["~", "동사"]],
      lines: [
        "You'd better + 동사는 ‘너 ~하는 게 좋을 거야’예요. 충고나 경고처럼 강하게 들려요.",
        "You'd는 You had를 줄인 말이에요. better 뒤에는 동사 원래 모양을 써요.",
        "‘~하지 않는 게 좋을 거야’는 You'd better not + 동사예요."
      ],
      examples: [
        { en: "You'd better hurry.", ko: "너 서두르는 게 좋을 거야." },
        { en: "You'd better not be late.", ko: "너 늦지 않는 게 좋을 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 좀 쉬는 게 좋겠어.", before: "You'd better", after: "some rest.", answers: ["get"],
        wrong: { "getting": "better 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Take it easy.", why: "‘무리하지 마’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 서두르는 게 좋을 거야.", before: "You'd", after: "hurry.", answers: ["better"],
        wrong: { "rather": "충고할 때는 You'd better예요.", "best": "충고할 때는 You'd better예요." },
        tip: { en: "Time's almost up.", why: "‘시간 거의 다 됐어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 병원 가 보는 게 좋겠어.", before: "You'd better", after: "a doctor.", answers: ["see"],
        wrong: { "meet": "‘병원에 가다’는 see a doctor예요." },
        tip: { en: "You don't look well.", why: "‘몸이 안 좋아 보여’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 늦지 않는 게 좋을 거야.", before: "You'd better", after: "be late.", answers: ["not"],
        wrong: { "do not": "‘~하지 않는 게 좋을 거야’는 better not이에요.", "no": "‘~하지 않는 게 좋을 거야’는 better not이에요." },
        tip: { en: "Be on time.", why: "on time은 ‘제시간에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 사과하는 게 좋겠어.", before: "", after: "better apologize.", answers: ["You'd"],
        wrong: { "you": "‘~하는 게 좋겠어’는 You'd better예요." },
        tip: { en: "Say you're sorry.", why: "‘미안하다고 해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 코트 입는 게 좋겠어.", answers: ["You'd better wear a coat.", "You'd better put on a coat.", "You'd better take a coat."],
        wrong: { "you would better wearing a coat": "better 뒤에는 동사 원래 모양 wear를 써요.", "you better to wear a coat": "better 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "It's freezing outside.", why: "freezing은 ‘몹시 추운’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그녀에게 사실대로 말하는 게 좋겠어.", answers: ["You'd better tell her the truth."],
        wrong: { "you would better tell to her the truth": "tell 뒤에는 to 없이 바로 her를 써요." },
        tip: { en: "Honesty is the best policy.", why: "‘정직이 최선이야’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 지금 출발하는 게 좋을 거야.", answers: ["You'd better leave now.", "You'd better go now.", "You'd better get going."],
        wrong: { "you would better leaving now": "better 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Traffic is bad.", why: "‘차 막혀’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 그거 만지지 않는 게 좋을 거야.", answers: ["You'd better not touch it.", "You'd better not touch that."],
        wrong: { "you would better do not touch it": "‘~하지 않는 게 좋을 거야’는 better not이에요." },
        tip: { en: "Hands off!", why: "‘손 대지 마!’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 조심하는 게 좋을 거야.", answers: ["You'd better be careful."],
        ctx: { lead: "hurry 대신 ‘조심하다(be careful)’로 바꿔 보세요.", en: "You'd better hurry." },
        wrong: { "you would better careful": "careful 앞에 be를 붙여요. be careful이에요." },
        tip: { en: "Watch out.", why: "‘조심해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 일찍 자는 게 좋겠어.", answers: ["You'd better go to bed early.", "You'd better sleep early.", "You'd better get to bed early."],
        dialog: { a: "I have a test tomorrow.", aKo: "나 내일 시험이야." },
        wrong: { "you would better going to bed early": "better 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Get a good night's sleep.", why: "‘푹 자’라는 말이에요." } }
    ]
  };
})(window.EP);
