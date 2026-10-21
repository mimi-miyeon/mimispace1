/* 세션 62. Don't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[62] = {
    no: 62, form: "Don't ~.", stem: "Don't", meaning: "~하지 마세요.",
    hint: "Don't + 동사",
    intro: {
      blocks: [["Don't", "~하지 마"], ["~", "동사"]],
      lines: [
        "Don't + 동사는 ‘~하지 마’예요.",
        "주어 없이 Don't로 바로 시작해요. 뒤에는 동사 원래 모양을 써요.",
        "부드럽게 하려면 please를 붙여요. (Please don't go.)"
      ],
      examples: [
        { en: "Don't go.", ko: "가지 마." },
        { en: "Don't worry.", ko: "걱정하지 마." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "만지지 마.", before: "", after: "touch it.", answers: ["Don't"],
        wrong: { "not": "‘~하지 마’는 Not이 아니라 Don't로 시작해요.", "no": "‘~하지 마’는 No가 아니라 Don't로 시작해요." },
        tip: { en: "Hands off.", why: "‘손 대지 마’라는 짧은 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "늦지 마.", before: "Don't be", after: ".", answers: ["late"],
        wrong: { "lately": "lately는 ‘최근에’예요. ‘늦은’은 late예요." },
        tip: { en: "Be on time.", why: "‘제시간에 와’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나한테 거짓말하지 마.", before: "Don't", after: "to me.", answers: ["lie"],
        wrong: { "lying": "Don't 뒤에는 동사 원래 모양 lie를 써요." },
        tip: { en: "Tell me the truth.", why: "‘사실대로 말해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "포기하지 마.", before: "Don't give", after: ".", answers: ["up"],
        wrong: { "out": "‘포기하다’는 give up이에요." },
        tip: { en: "Keep going.", why: "‘계속해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "잊지 마.", before: "Don't", after: ".", answers: ["forget"],
        wrong: { "forgot": "Don't 뒤에는 동사 원래 모양 forget을 써요.", "forgetting": "Don't 뒤에는 동사 원래 모양 forget을 써요." },
        tip: { en: "Remember that.", why: "‘그거 기억해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그거 먹지 마.", answers: ["Don't eat that.", "Don't eat it."],
        wrong: { "do not eating that": "Don't 뒤에는 동사 원래 모양 eat을 써요.", "not eat that": "‘~하지 마’는 Don't로 시작해요." },
        tip: { en: "Leave that alone.", why: "leave alone은 ‘그냥 두다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "아무한테도 말하지 마.", answers: ["Don't tell anyone.", "Don't tell anybody."],
        wrong: { "do not tell someone": "‘아무한테도’는 부정문에서 anyone을 써요.", "do not say anyone": "‘~에게 말하다’는 say가 아니라 tell이에요." },
        tip: { en: "Keep it a secret.", why: "‘비밀로 해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "여기서 사진 찍지 마.", answers: ["Don't take pictures here.", "Don't take photos here."],
        wrong: { "do not taking pictures here": "Don't 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "No photos here.", why: "‘여기선 사진 금지’라는 짧은 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 기다리지 마.", answers: ["Don't wait for me."],
        wrong: { "do not wait me": "‘~를 기다리다’는 wait for예요." },
        tip: { en: "Go ahead without me.", why: "‘나 없이 먼저 가’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "울지 마.", answers: ["Don't cry."],
        ctx: { lead: "go 대신 ‘울다(cry)’로 바꿔 보세요.", en: "Don't go." },
        wrong: { "do not crying": "Don't 뒤에는 동사 원래 모양 cry를 써요.", "not cry": "‘~하지 마’는 Don't로 시작해요." },
        tip: { en: "It's okay.", why: "‘괜찮아’라는 위로예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "하지 마! 너무 늦었어.", answers: ["Don't! It's too late.", "Don't call him! It's too late.", "Don't! It's too late now."],
        dialog: { a: "I'm going to call him now.", aKo: "나 지금 걔한테 전화할 거야." },
        wrong: { "not call him it is too late": "‘~하지 마’는 Don't로 시작해요." },
        tip: { en: "It's too late to call.", why: "‘전화하기엔 너무 늦었어’라는 말이에요." } }
    ]
  };
})(window.EP);
