/* 세션 112. I'm used to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[112] = {
    no: 112, form: "I'm used to ~.", stem: "I'm used to/I'm not used to/I'm still not used to", meaning: "나는 ~에 익숙해요.",
    hint: "I'm used to + 명사/동사-ing",
    intro: {
      blocks: [["I'm used", "나는 익숙하다"], ["to ~", "~에"]],
      lines: [
        "I'm used to ~는 ‘~에 익숙해’예요. used to(예전에 ~했어)와 달라요.",
        "여기서 to 뒤에는 명사나 동사-ing를 써요. (I'm used to working late)",
        "‘익숙하지 않아’는 I'm not used to ~예요."
      ],
      examples: [
        { en: "I'm used to it.", ko: "나 그거 익숙해." },
        { en: "I'm used to getting up early.", ko: "나 일찍 일어나는 거 익숙해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 이제 익숙해.", before: "I'm used to", after: "now.", answers: ["it"],
        wrong: { "this": "‘그것에 익숙해’는 used to it이에요." },
        tip: { en: "It's no big deal.", why: "‘별거 아니야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 추운 날씨에 익숙해.", before: "I'm", after: "to cold weather.", answers: ["used"],
        wrong: { "use": "‘익숙한’은 used예요." },
        tip: { en: "I can handle the cold.", why: "handle은 ‘견디다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 혼자 사는 거 익숙해.", before: "I'm used to", after: "alone.", answers: ["living"],
        wrong: { "live": "used to 뒤에는 동사에 ing를 붙여요. living이에요." },
        tip: { en: "I like living alone.", why: "‘혼자 사는 거 좋아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 야근에 익숙해.", before: "I'm used to", after: "late.", answers: ["working"],
        wrong: { "work": "used to 뒤에는 동사에 ing를 붙여요. working이에요." },
        tip: { en: "Late nights are normal for me.", why: "‘밤늦게까지 일하는 거 평범해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 이거 익숙하지 않아.", before: "I'm", after: "used to this.", answers: ["not"],
        wrong: { "do not": "I'm 뒤에는 not을 붙여요. don't는 쓰지 않아요." },
        tip: { en: "This is new to me.", why: "‘처음 겪는 일이야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 매운 음식에 익숙해.", answers: ["I'm used to spicy food."],
        wrong: { "i am used to spicy foods": "food는 보통 셀 수 없는 말이라 s를 붙이지 않아요.", "i used to spicy food": "‘익숙해’는 I'm used to예요. am이 필요해요." },
        tip: { en: "I can handle spicy food.", why: "handle은 ‘감당하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 일찍 일어나는 거 익숙해.", answers: ["I'm used to getting up early.", "I'm used to waking up early."],
        wrong: { "i am used to get up early": "여기서 to 뒤에는 동사에 ing를 붙여요. getting이에요." },
        tip: { en: "I'm a morning person.", why: "morning person은 ‘아침형 인간’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 소음에 익숙해.", answers: ["I'm used to the noise.", "I'm used to noise."],
        wrong: { "i used to the noise": "‘익숙해’는 I'm used to예요. am이 필요해요." },
        tip: { en: "The noise doesn't bother me.", why: "bother는 ‘신경 쓰이게 하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 아직 여기 익숙하지 않아.", answers: ["I'm not used to it here yet.", "I'm still not used to it here.", "I'm not used to this place yet."],
        wrong: { "i do not used to it here yet": "‘익숙하지 않아’는 I'm not used to예요." },
        tip: { en: "I'm still new here.", why: "‘아직 여기 새로 왔어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 기다리는 거 익숙해.", answers: ["I'm used to waiting.", "I'm used to waiting for people."],
        ctx: { lead: "getting up early 대신 ‘기다리기(waiting)’로 바꿔 보세요.", en: "I'm used to getting up early." },
        wrong: { "i am used to wait": "여기서 to 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "I'm patient.", why: "patient는 ‘참을성 있는’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나 익숙해.", answers: ["Yes, I'm used to it.", "Yeah, I'm used to it."],
        dialog: { a: "Isn't driving in the city hard?", aKo: "도시에서 운전하는 거 힘들지 않아?" },
        wrong: { "yes i used to it": "‘익숙해’는 I'm used to예요. am이 필요해요." },
        tip: { en: "Yes, I do it every day.", why: "‘응, 매일 해’라는 말이에요." } }
    ]
  };
})(window.EP);
