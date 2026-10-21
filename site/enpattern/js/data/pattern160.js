/* 세션 160. I've never ~(p.p.). */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[160] = {
    no: 160, form: "I've never ~(p.p.).", stem: "I've never", meaning: "난 ~한 적이 없어요.",
    hint: "I've never + 과거분사",
    intro: {
      blocks: [["I've never", "나는 한 번도 ~한 적 없다"], ["~(p.p.)", "과거분사"]],
      lines: [
        "I've never + 과거분사는 ‘나 한 번도 ~해 본 적 없어’예요.",
        "never가 이미 ‘한 번도 ~ 않다’라서 not을 또 붙이지 않아요.",
        "‘~에 가 본 적 없어’는 I've never been to ~예요."
      ],
      examples: [
        { en: "I've never seen it.", ko: "나 그거 본 적 없어." },
        { en: "I've never been to Japan.", ko: "나 일본 가 본 적 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 그거 본 적 없어.", before: "I've never", after: "it.", answers: ["seen"],
        wrong: { "saw": "never 뒤에는 saw가 아니라 seen을 써요.", "see": "I've never 뒤에는 과거분사 seen을 써요." },
        tip: { en: "This is my first time.", why: "‘처음이야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 일본 가 본 적 없어.", before: "I've never", after: "to Japan.", answers: ["been"],
        wrong: { "gone": "‘가 본 적 없어’는 gone이 아니라 been을 써요." },
        tip: { en: "I want to go someday.", why: "someday는 ‘언젠가’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그거 해 본 적 없어.", before: "I've", after: "tried it.", answers: ["never"],
        wrong: { "not": "‘한 번도 ~ 않다’는 never예요.", "ever": "‘한 적 없어’는 never예요." },
        tip: { en: "I'd like to try it.", why: "‘해 보고 싶어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그 사람 만난 적 없어.", before: "I've never", after: "him.", answers: ["met"],
        wrong: { "meet": "I've never 뒤에는 과거분사 met을 써요." },
        tip: { en: "Who is he?", why: "‘그 사람 누구야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그런 거 들어 본 적 없어.", before: "", after: "never heard of that.", answers: ["I've"],
        wrong: { "i": "I 뒤에 have가 필요해요. I've예요." },
        tip: { en: "That's news to me.", why: "‘처음 듣는 얘기야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 비행기 타 본 적 없어.", answers: ["I've never been on a plane.", "I've never flown.", "I've never taken a plane."],
        wrong: { "i have never fly": "never 뒤에는 과거분사를 써요. flown이에요.", "i have not never flown": "never에 이미 ‘않다’가 있어서 not을 붙이지 않아요." },
        tip: { en: "I'm scared of flying.", why: "‘비행기 타는 거 무서워’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그 영화 본 적 없어.", answers: ["I've never seen that movie.", "I've never seen the movie.", "I've never watched that movie."],
        wrong: { "i have never saw that movie": "never 뒤에는 saw가 아니라 seen을 써요." },
        tip: { en: "Is it good?", why: "‘재밌어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 눈 본 적 없어.", answers: ["I've never seen snow."],
        wrong: { "i have never see snow": "never 뒤에는 과거분사 seen을 써요." },
        tip: { en: "It never snows here.", why: "‘여긴 눈이 안 와’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그런 맛 먹어 본 적 없어.", answers: ["I've never tasted anything like it.", "I've never tasted anything like this.", "I've never had anything like this."],
        wrong: { "i have never taste anything like it": "never 뒤에는 과거분사 tasted를 써요." },
        tip: { en: "This is amazing.", why: "‘이거 대박이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 그거 들어 본 적 없어.", answers: ["I've never heard it.", "I've never heard of it."],
        ctx: { lead: "seen 대신 ‘들어 본(heard)’으로 바꿔 보세요.", en: "I've never seen it." },
        wrong: { "i have never hear it": "never 뒤에는 과거분사 heard를 써요." },
        tip: { en: "What is it?", why: "‘그게 뭐야?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 한 번도 못 해 봤어.", answers: ["No, I've never tried it.", "No, I've never done it.", "No, I've never tried."],
        dialog: { a: "Have you ever tried surfing?", aKo: "서핑 해 본 적 있어?" },
        wrong: { "no i have never try it": "never 뒤에는 과거분사 tried를 써요." },
        tip: { en: "No, but I'd love to.", why: "‘아니, 근데 해 보고 싶어’라는 말이에요." } }
    ]
  };
})(window.EP);
