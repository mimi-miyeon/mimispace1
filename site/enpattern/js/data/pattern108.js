/* 세션 108. Let's ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[108] = {
    no: 108, form: "Let's ~.", stem: "Let's", meaning: "~합시다.",
    hint: "Let's + 동사",
    intro: {
      blocks: [["Let's", "우리 ~하자"], ["~", "동사"]],
      lines: [
        "Let's + 동사는 ‘우리 ~하자’예요. Let us를 줄인 말이에요.",
        "Let's 뒤에는 동사 원래 모양을 써요. (Let's going ×)",
        "‘~하지 말자’는 Let's not + 동사예요."
      ],
      examples: [
        { en: "Let's eat.", ko: "먹자." },
        { en: "Let's take a break.", ko: "좀 쉬자." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "시작하자.", before: "Let's", after: ".", answers: ["start", "begin"],
        wrong: { "starting": "Let's 뒤에는 동사 원래 모양 start를 써요.", "to start": "Let's 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Let's get started.", why: "get started는 ‘시작하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "좀 쉬자.", before: "Let's", after: "a break.", answers: ["take"],
        wrong: { "have": "‘쉬다’는 take a break가 자연스러워요." },
        tip: { en: "Time for a break.", why: "‘쉴 시간이야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "택시 타자.", before: "Let's", after: "a taxi.", answers: ["take", "get"],
        wrong: { "ride": "‘택시를 타다’는 take a taxi예요." },
        tip: { en: "Let's grab a cab.", why: "cab도 ‘택시’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "싸우지 말자.", before: "Let's", after: "fight.", answers: ["not"],
        wrong: { "do not": "‘~하지 말자’는 Let's not이에요.", "no": "‘~하지 말자’는 Let's not이에요." },
        tip: { en: "Let's calm down.", why: "calm down은 ‘진정하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나중에 얘기하자.", before: "", after: "talk later.", answers: ["Let's"],
        wrong: { "let": "Let us를 줄인 말이라 Let's예요." },
        tip: { en: "We'll talk later.", why: "‘나중에 얘기해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "밖에서 먹자.", answers: ["Let's eat out."],
        wrong: { "let us eating out": "Let's 뒤에는 동사 원래 모양 eat을 써요.", "let us to eat out": "Let's 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Let's go out to eat.", why: "go out to eat도 ‘외식하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "사진 찍자.", answers: ["Let's take a picture.", "Let's take a photo.", "Let's take pictures."],
        wrong: { "let us take picture": "picture는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Say cheese!", why: "사진 찍을 때 하는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "집에 가자.", answers: ["Let's go home."],
        wrong: { "let us go to home": "home 앞에는 to를 붙이지 않아요." },
        tip: { en: "Let's head home.", why: "head는 ‘~로 향하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "늦지 말자.", answers: ["Let's not be late."],
        wrong: { "let us not late": "late 앞에 be가 필요해요. not be late예요.", "let us do not be late": "‘~하지 말자’는 Let's not이에요." },
        tip: { en: "Let's be on time.", why: "on time은 ‘제시간에’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "커피 마시자.", answers: ["Let's have coffee.", "Let's get coffee.", "Let's drink coffee.", "Let's have some coffee.", "Let's get some coffee."],
        ctx: { lead: "eat 대신 ‘커피 마시다(have coffee)’로 바꿔 보세요.", en: "Let's eat." },
        wrong: { "let us drinking coffee": "Let's 뒤에는 동사 원래 모양을 써요." },
        tip: { en: "Coffee break?", why: "‘커피 타임?’이라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "영화 보자.", answers: ["Let's watch a movie.", "Let's see a movie.", "Let's go to the movies."],
        dialog: { a: "What should we do tonight?", aKo: "오늘 밤에 뭐 할까?" },
        wrong: { "let us watching a movie": "Let's 뒤에는 동사 원래 모양 watch를 써요." },
        tip: { en: "How about a movie?", why: "How about은 ‘~ 어때?’예요." } }
    ]
  };
})(window.EP);
