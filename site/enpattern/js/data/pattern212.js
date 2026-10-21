/* 세션 212. I've been ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[212] = {
    no: 212, form: "I've been ~ing.", stem: "I've been", meaning: "계속 ~하고 있었어요.",
    hint: "I've been + 동사-ing",
    intro: {
      blocks: [["I've been", "나는 계속 ~해 왔다"], ["~ing", "~하는 중"]],
      lines: [
        "I've been + 동사-ing는 ‘(최근에/지금까지) 계속 ~하고 있었어’예요.",
        "I've는 I have를 줄인 말이에요. been 뒤에는 동사-ing를 써요.",
        "for(~ 동안), lately(요즘)와 자주 써요."
      ],
      examples: [
        { en: "I've been waiting for an hour.", ko: "나 한 시간째 기다리고 있어." },
        { en: "I've been working out lately.", ko: "나 요즘 운동하고 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 한 시간째 기다리고 있어.", before: "I've been", after: "for an hour.", answers: ["waiting"],
        wrong: { "wait": "been 뒤에는 동사에 ing를 붙여요. waiting이에요.", "waited": "been 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "Where are you?", why: "‘어디야?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 요즘 운동하고 있어.", before: "I've been working out", after: ".", answers: ["lately"],
        wrong: { "late": "‘요즘’은 lately예요. late는 ‘늦은’이에요." },
        tip: { en: "I'm getting in shape.", why: "get in shape는 ‘몸을 만들다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 너 생각 계속 하고 있었어.", before: "I've been", after: "about you.", answers: ["thinking"],
        wrong: { "think": "been 뒤에는 동사에 ing를 붙여요. thinking이에요." },
        tip: { en: "I miss you.", why: "‘보고 싶어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 하루 종일 일했어.", before: "I've", after: "working all day.", answers: ["been"],
        wrong: { "be": "I've 뒤에는 been을 써요.", "being": "I've 뒤에는 been을 써요." },
        tip: { en: "I'm exhausted.", why: "exhausted는 ‘지친’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 너 찾고 있었어.", before: "", after: "been looking for you.", answers: ["I've"],
        wrong: { "i": "I 뒤에 have가 필요해요. I've예요.", "i am": "‘계속 ~하고 있었어’는 I've been이에요." },
        tip: { en: "There you are!", why: "‘여기 있었구나!’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 요즘 영어 공부하고 있어.", answers: ["I've been studying English lately.", "I've been studying English these days.", "I've been learning English lately."],
        wrong: { "i have been study english lately": "been 뒤에는 동사에 ing를 붙여요. studying이에요.", "i been studying english lately": "I 뒤에 have가 필요해요. I've예요." },
        tip: { en: "I'm taking English classes.", why: "‘영어 수업 듣고 있어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 요즘 늦게 자고 있어.", answers: ["I've been staying up late.", "I've been staying up late lately.", "I've been going to bed late."],
        wrong: { "i have been stay up late": "been 뒤에는 동사에 ing를 붙여요. staying이에요." },
        tip: { en: "I need more sleep.", why: "‘잠이 더 필요해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 너한테 계속 전화하고 있었어.", answers: ["I've been calling you.", "I've been trying to call you."],
        wrong: { "i have been call you": "been 뒤에는 동사에 ing를 붙여요. calling이에요." },
        tip: { en: "Why didn't you answer?", why: "‘왜 안 받았어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 3년째 여기 살고 있어.", answers: ["I've been living here for three years.", "I've been living here for 3 years."],
        wrong: { "i have been living here since three years": "기간은 for를 써요. since는 시작 시점이에요." },
        tip: { en: "I love this neighborhood.", why: "neighborhood는 ‘동네’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 한 시간째 걷고 있어.", answers: ["I've been walking for an hour."],
        ctx: { lead: "waiting 대신 ‘걷다(walking)’로 바꿔 보세요.", en: "I've been waiting for an hour." },
        wrong: { "i have been walk for an hour": "been 뒤에는 동사에 ing를 붙여요. walking이에요." },
        tip: { en: "My feet hurt.", why: "‘발 아파’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나 요즘 요리 배우고 있어.", answers: ["Yes, I've been learning to cook.", "Yeah, I've been learning to cook.", "Yes, I've been learning how to cook.", "Yes, I've been taking cooking classes."],
        dialog: { a: "Did you make this?", aKo: "이거 네가 만들었어?" },
        wrong: { "yes i have been learn to cook": "been 뒤에는 동사에 ing를 붙여요. learning이에요." },
        tip: { en: "Yes, it's my new hobby.", why: "‘응, 새 취미야’라는 말이에요." } }
    ]
  };
})(window.EP);
