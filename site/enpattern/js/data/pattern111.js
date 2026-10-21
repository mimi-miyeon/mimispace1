/* 세션 111. I used to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[111] = {
    no: 111, form: "I used to ~.", stem: "I used to/We used to", meaning: "나는 ~하곤 했어요.",
    hint: "I used to + 동사",
    intro: {
      blocks: [["I used to", "나는 예전에 ~했다"], ["~", "동사"]],
      lines: [
        "I used to + 동사는 ‘예전엔 ~했어 (지금은 안 해)’예요.",
        "used to 뒤에는 동사 원래 모양을 써요. (I used to playing ×)",
        "상태에도 써요. (I used to live here: 예전에 여기 살았어)"
      ],
      examples: [
        { en: "I used to smoke.", ko: "나 예전에 담배 피웠어." },
        { en: "I used to live in Busan.", ko: "나 예전에 부산 살았어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 예전에 여기서 일했어.", before: "I used to", after: "here.", answers: ["work"],
        wrong: { "working": "used to 뒤에는 동사 원래 모양 work를 써요.", "worked": "used to 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "I worked here before.", why: "before는 ‘전에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 예전에 피아노 쳤어.", before: "I used", after: "play the piano.", answers: ["to"],
        wrong: { "for": "used 뒤에는 to를 붙여요." },
        tip: { en: "I played the piano as a kid.", why: "as a kid는 ‘어렸을 때’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 예전엔 매운 거 싫어했어.", before: "I", after: "to hate spicy food.", answers: ["used"],
        wrong: { "use": "‘예전엔 ~했어’는 used to예요.", "am used": "‘예전엔 ~했어’는 am 없이 used to예요." },
        tip: { en: "Now I love it.", why: "‘지금은 엄청 좋아해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 예전에 안경 썼어.", before: "I used to", after: "glasses.", answers: ["wear"],
        wrong: { "put on": "‘안경을 쓰고 있다’는 wear glasses예요.", "wearing": "used to 뒤에는 동사 원래 모양 wear를 써요." },
        tip: { en: "I had glasses before.", why: "‘전에 안경 있었어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 예전엔 수줍음이 많았어.", before: "I used to", after: "shy.", answers: ["be"],
        wrong: { "is": "to 뒤에는 동사 원래 모양 be를 써요.", "was": "to 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "I was a shy kid.", why: "‘수줍은 아이였어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 예전에 담배 피웠어.", answers: ["I used to smoke."],
        wrong: { "i used to smoking": "used to 뒤에는 동사 원래 모양 smoke를 써요.", "i use to smoke": "‘예전에 ~했어’는 used to예요. d를 붙여요." },
        tip: { en: "I quit smoking.", why: "quit은 ‘끊다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 예전에 서울 살았어.", answers: ["I used to live in Seoul."],
        wrong: { "i used to live seoul": "도시 앞에는 in을 붙여요. live in Seoul이에요.", "i used to lived in seoul": "used to 뒤에는 동사 원래 모양 live를 써요." },
        tip: { en: "I lived in Seoul before.", why: "before는 ‘전에’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 예전엔 매일 달렸어.", answers: ["I used to run every day.", "I used to go running every day.", "I used to jog every day."],
        wrong: { "i used to running every day": "used to 뒤에는 동사 원래 모양 run을 써요." },
        tip: { en: "I was a runner.", why: "runner는 ‘달리기 하는 사람’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "우리 예전에 친한 친구였어.", answers: ["We used to be close friends.", "We used to be good friends.", "We used to be best friends."], alts: ["We used to be close."],
        wrong: { "we used to were close friends": "to 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "We were close.", why: "close는 ‘친한’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 예전에 수영했어.", answers: ["I used to swim."],
        ctx: { lead: "smoke 대신 ‘수영하다(swim)’로 바꿔 보세요.", en: "I used to smoke." },
        wrong: { "i used to swimming": "used to 뒤에는 동사 원래 모양 swim을 써요." },
        tip: { en: "I was on the swim team.", why: "swim team은 ‘수영부’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 예전엔 그랬어.", answers: ["Yes, I used to.", "Yeah, I used to."],
        dialog: { a: "Did you drink coffee before?", aKo: "너 전에 커피 마셨어?" },
        wrong: { "yes i use to": "‘예전엔 그랬어’는 used to예요. d를 붙여요." },
        tip: { en: "Not anymore.", why: "‘이젠 아니야’라는 말이에요." } }
    ]
  };
})(window.EP);
