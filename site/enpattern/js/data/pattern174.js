/* 세션 174. How long have you been ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[174] = {
    no: 174, form: "How long have you been ~?", stem: "How long have you been", meaning: "~한 지는 얼마나 되었나요?",
    hint: "How long have you been + 동사-ing?",
    intro: {
      blocks: [["How long have you been", "얼마나 오래 ~해 왔니"], ["~ing?", "~하는 중"]],
      lines: [
        "How long have you been + 동사-ing?는 ‘~한 지 얼마나 됐어?’예요. 지금까지 계속된 일을 물어요.",
        "been 뒤에는 동사-ing를 써요. 상태는 형용사나 장소도 써요. (How long have you been here?)",
        "대답은 for two years(2년 동안), since 2020(2020년부터)처럼 해요."
      ],
      examples: [
        { en: "How long have you been waiting?", ko: "기다린 지 얼마나 됐어?" },
        { en: "How long have you been studying English?", ko: "영어 공부한 지 얼마나 됐어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "기다린 지 얼마나 됐어?", before: "How long have you been", after: "?", answers: ["waiting"],
        wrong: { "wait": "been 뒤에는 동사에 ing를 붙여요. waiting이에요.", "waited": "been 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "Sorry I'm late.", why: "‘늦어서 미안’이라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "여기서 일한 지 얼마나 됐어?", before: "How long have you been", after: "here?", answers: ["working"],
        wrong: { "work": "been 뒤에는 동사에 ing를 붙여요. working이에요." },
        tip: { en: "When did you start here?", why: "‘여기 언제 시작했어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "한국에 산 지 얼마나 됐어?", before: "How long have you", after: "living in Korea?", answers: ["been"],
        wrong: { "be": "have you 뒤에는 been을 써요.", "being": "have you 뒤에는 been을 써요." },
        tip: { en: "When did you move here?", why: "‘여기 언제 이사 왔어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "운전한 지 얼마나 됐어?", before: "How long", after: "you been driving?", answers: ["have"],
        wrong: { "did": "‘~한 지 얼마나 됐어?’는 have you been이에요.", "do": "‘~한 지 얼마나 됐어?’는 have you been이에요." },
        tip: { en: "When did you get your license?", why: "license는 ‘면허’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "여기 온 지 얼마나 됐어?", before: "How long have you been", after: "?", answers: ["here"],
        wrong: { "there": "지금 있는 곳은 here예요." },
        tip: { en: "Did you just arrive?", why: "‘방금 왔어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "영어 공부한 지 얼마나 됐어?", answers: ["How long have you been studying English?", "How long have you been learning English?"],
        wrong: { "how long have you been study english": "been 뒤에는 동사에 ing를 붙여요. studying이에요.", "how long are you studying english": "‘~한 지 얼마나 됐어?’는 have you been이에요." },
        tip: { en: "Your English is great.", why: "‘영어 잘한다’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "둘이 사귄 지 얼마나 됐어?", answers: ["How long have you been dating?", "How long have you been going out?", "How long have you been together?"],
        wrong: { "how long have you been date": "been 뒤에는 동사에 ing를 붙여요. dating이에요." },
        tip: { en: "You two look happy.", why: "‘둘이 행복해 보여’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "요가 한 지 얼마나 됐어?", answers: ["How long have you been doing yoga?"],
        wrong: { "how long have you been do yoga": "been 뒤에는 동사에 ing를 붙여요. doing이에요." },
        tip: { en: "You're so flexible.", why: "flexible은 ‘유연한’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아픈 지 얼마나 됐어?", answers: ["How long have you been sick?", "How long have you been ill?"],
        wrong: { "how long are you sick": "‘~한 지 얼마나 됐어?’는 have you been이에요." },
        tip: { en: "Did you see a doctor?", why: "‘병원 가 봤어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "여기 산 지 얼마나 됐어?", answers: ["How long have you been living here?"],
        ctx: { lead: "waiting 대신 ‘여기 살다(living here)’로 바꿔 보세요.", en: "How long have you been waiting?" },
        wrong: { "how long have you been live here": "been 뒤에는 동사에 ing를 붙여요. living이에요." },
        tip: { en: "Do you like the neighborhood?", why: "neighborhood는 ‘동네’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와! 기타 친 지 얼마나 됐어?", answers: ["Wow! How long have you been playing the guitar?", "How long have you been playing the guitar?", "Wow! How long have you been playing guitar?", "How long have you been playing guitar?"],
        dialog: { a: "I play the guitar in a band.", aKo: "나 밴드에서 기타 쳐." },
        wrong: { "wow how long have you been play the guitar": "been 뒤에는 동사에 ing를 붙여요. playing이에요." },
        tip: { en: "Wow, you're really good!", why: "‘와, 진짜 잘한다!’라는 말이에요." } }
    ]
  };
})(window.EP);
