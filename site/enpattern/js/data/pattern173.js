/* 세션 173. How long does it take to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[173] = {
    no: 173, form: "How long does it take to ~?", stem: "How long does it take to", meaning: "~하는 데 얼마나 걸리나요?",
    hint: "How long does it take to + 동사?",
    intro: {
      blocks: [["How long does it take", "얼마나 걸리니"], ["to ~?", "~하는 데"]],
      lines: [
        "How long does it take to + 동사?는 ‘~하는 데 얼마나 걸려?’예요.",
        "it은 ‘시간’을 가리켜요. take는 ‘(시간이) 걸리다’예요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "How long does it take to cook?", ko: "요리하는 데 얼마나 걸려?" },
        { en: "How long does it take to learn English?", ko: "영어 배우는 데 얼마나 걸려?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "요리하는 데 얼마나 걸려?", before: "How long does it take to", after: "?", answers: ["cook"],
        wrong: { "cooking": "to 뒤에는 동사 원래 모양 cook을 써요." },
        tip: { en: "When will dinner be ready?", why: "‘저녁 언제 돼?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 고치는 데 얼마나 걸려요?", before: "How long does it take to", after: "it?", answers: ["fix"],
        wrong: { "fixing": "to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "When will it be ready?", why: "‘언제 돼요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "끝내는 데 얼마나 걸려?", before: "How long does it", after: "to finish?", answers: ["take"],
        wrong: { "takes": "does 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Are you almost done?", why: "‘거의 다 했어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "익숙해지는 데 얼마나 걸려?", before: "How long does it take to get", after: "to it?", answers: ["used"],
        wrong: { "use": "‘익숙해지다’는 get used to예요." },
        tip: { en: "Give it some time.", why: "‘시간을 좀 줘’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "배달되는 데 얼마나 걸려요?", before: "How long does it take", after: "deliver?", answers: ["to"],
        wrong: { "for": "‘~하는 데’는 to + 동사예요." },
        tip: { en: "When will it arrive?", why: "‘언제 도착해요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "영어 배우는 데 얼마나 걸려?", answers: ["How long does it take to learn English?"],
        wrong: { "how long does it take to learning english": "to 뒤에는 동사 원래 모양 learn을 써요.", "how long does it takes to learn english": "does 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Practice every day.", why: "‘매일 연습해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "준비하는 데 얼마나 걸려?", answers: ["How long does it take to get ready?", "How long does it take to prepare?"],
        wrong: { "how long does it take to getting ready": "to 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Hurry up!", why: "‘서둘러!’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 다운로드하는 데 얼마나 걸려?", answers: ["How long does it take to download it?", "How long does it take to download?"],
        wrong: { "how long does it take to downloading it": "to 뒤에는 동사 원래 모양 download를 써요." },
        tip: { en: "The Wi-Fi is slow.", why: "‘와이파이 느려’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "비자 받는 데 얼마나 걸려요?", answers: ["How long does it take to get a visa?"],
        wrong: { "how long does it take to get visa": "visa는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Apply early.", why: "apply는 ‘신청하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그거 굽는 데 얼마나 걸려?", answers: ["How long does it take to bake it?", "How long does it take to bake?"],
        ctx: { lead: "cook 대신 ‘굽다(bake)’로 바꿔 보세요.", en: "How long does it take to cook?" },
        wrong: { "how long does it take to baking it": "to 뒤에는 동사 원래 모양 bake를 써요." },
        tip: { en: "It smells great.", why: "‘냄새 좋다’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그거 마르는 데 얼마나 걸려?", answers: ["How long does it take to dry?", "How long does it take to dry it?"],
        dialog: { a: "I just washed your shirt.", aKo: "네 셔츠 방금 빨았어." },
        wrong: { "how long does it take to drying": "to 뒤에는 동사 원래 모양 dry를 써요." },
        tip: { en: "Can I wear it tomorrow?", why: "‘내일 입을 수 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
