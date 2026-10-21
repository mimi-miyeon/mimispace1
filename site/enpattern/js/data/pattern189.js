/* 세션 189. Why not ~? (동사) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[189] = {
    no: 189, form: "Why not ~? (동사)", stem: "Why not", meaning: "~하는 게 어때요?",
    hint: "Why not + 동사?",
    intro: {
      blocks: [["Why not", "~하지 그래"], ["~?", "동사"]],
      lines: [
        "Why not + 동사?는 ‘~하는 게 어때? / ~하면 되잖아?’예요. 짧고 가볍게 제안해요.",
        "Why not 뒤에는 동사 원래 모양을 바로 써요. (Why not to go ×)",
        "Why don't you ~?를 짧게 말한 느낌이에요."
      ],
      examples: [
        { en: "Why not ask him?", ko: "그에게 물어보면 되잖아?" },
        { en: "Why not try it?", ko: "한번 해 보지 그래?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그에게 물어보면 되잖아?", before: "Why not", after: "him?", answers: ["ask"],
        wrong: { "asking": "Why not 뒤에는 동사 원래 모양 ask를 써요.", "to ask": "Why not 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Just ask him.", why: "‘그냥 물어봐’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "한번 해 보지 그래?", before: "Why not", after: "it?", answers: ["try"],
        wrong: { "trying": "Why not 뒤에는 동사 원래 모양 try를 써요." },
        tip: { en: "Give it a shot.", why: "shot은 ‘시도’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오늘 하지 그래?", before: "Why", after: "do it today?", answers: ["not"],
        wrong: { "no": "‘~하지 그래?’는 Why not이에요." },
        tip: { en: "Don't put it off.", why: "put off는 ‘미루다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "택시 타면 되잖아?", before: "Why not", after: "a taxi?", answers: ["take"],
        wrong: { "taking": "Why not 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "It's faster.", why: "‘더 빨라’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "둘 다 사면 되잖아?", before: "Why not buy", after: "?", answers: ["both"],
        wrong: { "two": "‘둘 다’는 both예요." },
        tip: { en: "Treat yourself.", why: "‘너 자신한테 선물해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그녀에게 말하면 되잖아?", answers: ["Why not tell her?", "Why not talk to her?"],
        wrong: { "why not telling her": "Why not 뒤에는 동사 원래 모양 tell을 써요.", "why not to tell her": "Why not 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Be honest with her.", why: "‘그녀에게 솔직해져’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "일찍 출발하지 그래?", answers: ["Why not leave early?", "Why not leave earlier?", "Why not go early?"],
        wrong: { "why not leaving early": "Why not 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Beat the traffic.", why: "beat the traffic은 ‘차 막히기 전에 가다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "하루 쉬지 그래?", answers: ["Why not take a day off?", "Why not take the day off?"],
        wrong: { "why not take a day of": "‘쉬는 날’은 a day off예요. off를 써요." },
        tip: { en: "You deserve a break.", why: "deserve는 ‘받을 자격이 있다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "온라인으로 사면 되잖아?", answers: ["Why not buy it online?", "Why not order it online?", "Why not shop online?"],
        wrong: { "why not buying it online": "Why not 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "It's cheaper online.", why: "‘온라인이 더 싸’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "다시 해 보지 그래?", answers: ["Why not try again?"],
        ctx: { lead: "ask him 대신 ‘다시 해 보다(try again)’로 바꿔 보세요.", en: "Why not ask him?" },
        wrong: { "why not trying again": "Why not 뒤에는 동사 원래 모양 try를 써요." },
        tip: { en: "Don't give up.", why: "‘포기하지 마’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 빌리면 되잖아?", answers: ["Then why not rent one?", "Why not rent one?", "Then why not rent it?", "Why not rent it?", "Why not borrow one?"],
        dialog: { a: "A new bike is too expensive.", aKo: "새 자전거는 너무 비싸." },
        wrong: { "then why not renting one": "Why not 뒤에는 동사 원래 모양 rent를 써요." },
        tip: { en: "Renting is cheaper.", why: "‘빌리는 게 더 싸’라는 말이에요." } }
    ]
  };
})(window.EP);
