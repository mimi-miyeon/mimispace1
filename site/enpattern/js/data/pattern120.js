/* 세션 120. We'd better ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[120] = {
    no: 120, form: "We'd better ~.", stem: "We'd better", meaning: "우리는 ~하는 게 좋겠어요.",
    hint: "We'd better + 동사",
    intro: {
      blocks: [["We'd better", "우리는 ~하는 게 좋겠다"], ["~", "동사"]],
      lines: [
        "We'd better + 동사는 ‘우리 ~하는 게 좋겠어’예요.",
        "We'd는 We had를 줄인 말이에요. better 뒤에는 동사 원래 모양을 써요.",
        "‘~하지 않는 게 좋겠어’는 We'd better not + 동사예요."
      ],
      examples: [
        { en: "We'd better go.", ko: "우리 가는 게 좋겠어." },
        { en: "We'd better hurry.", ko: "우리 서두르는 게 좋겠어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "우리 서두르는 게 좋겠어.", before: "We'd better", after: ".", answers: ["hurry"],
        wrong: { "hurrying": "better 뒤에는 동사 원래 모양 hurry를 써요." },
        tip: { en: "Let's move.", why: "‘움직이자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "우리 예약하는 게 좋겠어.", before: "We'd better make a", after: ".", answers: ["reservation"],
        wrong: { "reserve": "make a 뒤에는 명사 reservation을 써요." },
        tip: { en: "Let's book a table.", why: "book은 ‘예약하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 지금 가는 게 좋겠어.", before: "We'd", after: "go now.", answers: ["better"],
        wrong: { "rather": "‘~하는 게 좋겠어’는 We'd better예요." },
        tip: { en: "It's getting dark.", why: "‘어두워지고 있어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 늦지 않는 게 좋겠어.", before: "We'd better not be", after: ".", answers: ["late"],
        wrong: { "lately": "‘늦은’은 late예요. lately는 ‘최근에’예요." },
        tip: { en: "We have to be on time.", why: "on time은 ‘제시간에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 여기서 기다리는 게 좋겠어.", before: "", after: "better wait here.", answers: ["We'd"],
        wrong: { "we": "‘~하는 게 좋겠어’는 We'd better예요." },
        tip: { en: "Let's stay put.", why: "stay put은 ‘그 자리에 있다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "우리 택시 타는 게 좋겠어.", answers: ["We'd better take a taxi.", "We'd better get a taxi.", "We'd better take a cab."],
        wrong: { "we would better taking a taxi": "better 뒤에는 동사 원래 모양 take를 써요.", "we better to take a taxi": "better 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Let's grab a cab.", why: "cab도 ‘택시’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리 돈 아끼는 게 좋겠어.", answers: ["We'd better save money.", "We'd better save some money."],
        wrong: { "we would better saving money": "better 뒤에는 동사 원래 모양 save를 써요." },
        tip: { en: "We're on a budget.", why: "budget은 ‘예산’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 일찍 출발하는 게 좋겠어.", answers: ["We'd better leave early.", "We'd better start early.", "We'd better head out early."],
        wrong: { "we would better leave earlier": "‘일찍’은 early예요." },
        tip: { en: "Traffic will be bad.", why: "‘차 막힐 거야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "우리 여기 주차하지 않는 게 좋겠어.", answers: ["We'd better not park here."],
        wrong: { "we would better do not park here": "‘~하지 않는 게 좋겠어’는 better not이에요." },
        tip: { en: "It's a no-parking zone.", why: "no-parking zone은 ‘주차 금지 구역’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "우리 쉬는 게 좋겠어.", answers: ["We'd better take a break.", "We'd better rest.", "We'd better get some rest."],
        ctx: { lead: "go 대신 ‘쉬다(take a break)’로 바꿔 보세요.", en: "We'd better go." },
        wrong: { "we would better taking a break": "better 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Let's call it a day.", why: "call it a day는 ‘오늘은 그만하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 우리 우산 챙기는 게 좋겠어.", answers: ["Then we'd better take umbrellas.", "Then we'd better bring umbrellas.", "We'd better take umbrellas.", "We'd better bring umbrellas.", "Then we'd better take an umbrella.", "We'd better take an umbrella."],
        dialog: { a: "It's going to rain this afternoon.", aKo: "오늘 오후에 비 온대." },
        wrong: { "then we would better taking umbrellas": "better 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Good thing you checked.", why: "‘확인하길 잘했다’라는 말이에요." } }
    ]
  };
})(window.EP);
