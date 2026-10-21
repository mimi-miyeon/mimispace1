/* 세션 158. I've been to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[158] = {
    no: 158, form: "I've been to ~.", stem: "I've been to/I've been there", meaning: "난 ~에 간 적이 있어요.",
    hint: "I've been to + 장소",
    intro: {
      blocks: [["I've been", "나는 가 본 적 있다"], ["to ~", "~에"]],
      lines: [
        "I've been to + 장소는 ‘나 ~에 가 본 적 있어’예요.",
        "I've는 I have를 줄인 말이에요. ‘가 본 적’은 gone이 아니라 been을 써요.",
        "횟수도 붙여요. (I've been to Japan twice: 일본 두 번 가 봤어)"
      ],
      examples: [
        { en: "I've been to Japan.", ko: "나 일본 가 봤어." },
        { en: "I've been there twice.", ko: "나 거기 두 번 가 봤어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 일본 가 봤어.", before: "I've been", after: "Japan.", answers: ["to"],
        wrong: { "in": "‘~에 가 본 적’은 been to예요." },
        tip: { en: "I visited Japan.", why: "visit은 ‘방문하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 파리 가 봤어.", before: "I've", after: "to Paris.", answers: ["been"],
        wrong: { "gone": "‘가 본 적 있어’는 gone이 아니라 been을 써요.", "went": "I've 뒤에는 been을 써요." },
        tip: { en: "Paris was beautiful.", why: "‘파리 예뻤어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 거기 두 번 가 봤어.", before: "I've been there", after: ".", answers: ["twice"],
        wrong: { "two times": "‘두 번’은 보통 twice라고 해요." },
        tip: { en: "I've visited twice.", why: "visit은 ‘방문하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그 식당 여러 번 가 봤어.", before: "I've been to that restaurant many", after: ".", answers: ["times"],
        wrong: { "time": "여러 번은 times예요." },
        tip: { en: "I'm a regular there.", why: "regular는 ‘단골’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 제주도 가 봤어.", before: "", after: "been to Jeju.", answers: ["I've"],
        wrong: { "i": "I 뒤에 have가 필요해요. I've예요.", "i was": "‘가 본 적 있어’는 I've been이에요." },
        tip: { en: "Jeju is my favorite.", why: "‘제주도 제일 좋아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 미국 가 봤어.", answers: ["I've been to the US.", "I've been to the United States.", "I've been to America.", "I've been to the USA."],
        wrong: { "i have gone to the us": "‘가 본 적’은 gone이 아니라 been을 써요.", "i have been to us": "US 앞에는 the를 붙여요." },
        tip: { en: "I've traveled in the US.", why: "travel은 ‘여행하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그 박물관 가 봤어.", answers: ["I've been to that museum.", "I've been to the museum."],
        wrong: { "i have been that museum": "been 뒤에 to를 붙여요." },
        tip: { en: "It's worth a visit.", why: "‘가 볼 만해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 거기 한 번 가 봤어.", answers: ["I've been there once."],
        wrong: { "i have been to there once": "there 앞에는 to를 붙이지 않아요." },
        tip: { en: "Only once.", why: "‘딱 한 번’이라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 유럽 세 번 가 봤어.", answers: ["I've been to Europe three times.", "I've been to Europe 3 times."],
        wrong: { "i have been to europe three time": "여러 번은 times예요." },
        tip: { en: "I love Europe.", why: "‘유럽 정말 좋아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 런던 가 봤어.", answers: ["I've been to London."],
        ctx: { lead: "Japan 대신 ‘런던(London)’으로 바꿔 보세요.", en: "I've been to Japan." },
        wrong: { "i have gone to london": "‘가 본 적’은 gone이 아니라 been을 써요." },
        tip: { en: "London was rainy.", why: "‘런던은 비가 왔어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나 거기 가 봤어.", answers: ["Yes, I've been there.", "Yeah, I've been there."],
        dialog: { a: "Have you been to Bali?", aKo: "발리 가 본 적 있어?" },
        wrong: { "yes i have been to there": "there 앞에는 to를 붙이지 않아요." },
        tip: { en: "Yes, it was amazing.", why: "‘응, 정말 좋았어’라는 말이에요." } }
    ]
  };
})(window.EP);
