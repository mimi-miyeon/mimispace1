/* 세션 30. You must have ~(p.p.). (과거분사는 쉬운 동사만: been, seen, heard, done, forgotten …) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[30] = {
    no: 30, form: "You must have ~(p.p.).", stem: "You must have", meaning: "당신이 ~했던 것이 틀림없어요.",
    hint: "You must have + 과거분사",
    intro: {
      blocks: [["You", "너는"], ["must have", "분명 ~했겠다"], ["~(p.p.)", "과거분사"]],
      lines: [
        "You must have + 과거분사는 ‘너 분명 ~했겠다’라고 지난 일을 추측하는 말이에요.",
        "have 뒤에는 과거분사를 써요. (be → been, see → seen, hear → heard)",
        "‘분명 ~였겠다’는 You must have been ~예요."
      ],
      examples: [
        { en: "You must have been tired.", ko: "너 분명 피곤했겠다." },
        { en: "You must have seen it.", ko: "너 분명 그거 봤겠다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 분명 배고팠겠다.", before: "You must have", after: "hungry.", answers: ["been"],
        wrong: { "be": "must have 뒤에는 과거분사 been을 써요.", "was": "must have 뒤에는 과거분사 been을 써요.", "being": "must have 뒤에는 과거분사 been을 써요." },
        tip: { en: "I bet you were hungry.", why: "I bet은 ‘분명 ~였겠다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 분명 놀랐겠다.", before: "You must", after: "been surprised.", answers: ["have"],
        wrong: { "has": "must 뒤에는 원래 모양 have를 써요.", "had": "must 뒤에는 원래 모양 have를 써요." },
        tip: { en: "That must have been a surprise.", why: "그 일을 주어로 말해도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 분명 열심히 일했겠다.", before: "You must have", after: "hard.", answers: ["worked"],
        wrong: { "work": "must have 뒤에는 과거분사 worked를 써요.", "working": "must have 뒤에는 과거분사 worked를 써요." },
        tip: { en: "You've been working so hard.", why: "‘요즘 정말 열심히 했구나’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 분명 그 소식 들었겠다.", before: "You must have", after: "the news.", answers: ["heard"],
        wrong: { "hear": "must have 뒤에는 과거분사 heard를 써요.", "heared": "hear의 과거분사는 heard예요." },
        tip: { en: "I'm sure you heard the news.", why: "I'm sure는 ‘분명 ~했을 거야’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 분명 길을 잃었겠다.", before: "You", after: "have gotten lost.", answers: ["must"],
        wrong: { "should": "should have는 ‘~했어야 했는데’예요. ‘분명 ~했겠다’는 must have예요.", "must to": "must 뒤에는 to를 쓰지 않아요." },
        tip: { en: "Did you get lost?", why: "‘길 잃었어?’라고 바로 물어봐도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 분명 무서웠겠다.", answers: ["You must have been scared.", "You must have been afraid."],
        wrong: { "you must have been scary": "scary는 ‘무서운(것)’이에요. 네가 무서웠으면 scared예요.", "you must be scared": "지난 일을 추측할 때는 must have been이에요. must be는 지금 일이에요." },
        tip: { en: "That must have been scary.", why: "그 일을 주어로 하면 scary를 써요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 분명 그거 잊어버렸겠다.", answers: ["You must have forgotten it.", "You must have forgotten."],
        wrong: { "you must have forgot it": "forget의 과거분사는 forgotten이에요.", "you must have forget it": "must have 뒤에는 과거분사 forgotten을 써요." },
        tip: { en: "Did you forget?", why: "‘잊어버렸어?’라고 바로 물어봐도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 분명 많이 걸었겠다.", answers: ["You must have walked a lot."],
        wrong: { "you must have walk a lot": "must have 뒤에는 과거분사 walked를 써요.", "you must walked a lot": "‘분명 ~했겠다’는 must 뒤에 have를 붙여요." },
        tip: { en: "I bet you walked a lot.", why: "I bet은 ‘분명 ~였겠다’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 분명 그 영화 봤겠다.", answers: ["You must have seen that movie.", "You must have seen the movie.", "You must have watched that movie.", "You must have watched the movie."],
        wrong: { "you must have saw that movie": "see의 과거분사는 seen이에요. saw는 과거형이에요." },
        tip: { en: "You've seen that movie, right?", why: "끝에 right?를 붙이면 ‘그렇지?’라고 확인해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 분명 신났겠다.", answers: ["You must have been excited."],
        ctx: { lead: "tired 대신 ‘신난(excited)’으로 바꿔 보세요.", en: "You must have been tired." },
        wrong: { "you must have been exciting": "exciting은 ‘신나게 하는(것)’이에요. 네가 신났으면 excited예요.", "you must have be excited": "must have 뒤에는 과거분사 been을 써요." },
        tip: { en: "That must have been exciting.", why: "그 일을 주어로 하면 exciting을 써요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와, 너 분명 지쳤겠다.", answers: ["Wow, you must have been exhausted.", "Wow, you must have been tired.", "Wow, you must have been so tired.", "Wow, you must have been really tired."],
        dialog: { a: "I worked until midnight yesterday.", aKo: "나 어제 자정까지 일했어." },
        wrong: { "wow you must have tired": "‘피곤했겠다’는 must have been tired예요. been이 필요해요." },
        tip: { en: "Wow, that sounds exhausting.", why: "exhausting은 ‘지치게 하는’이에요." } }
    ]
  };
})(window.EP);
