/* 세션 202. What brings you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[202] = {
    no: 202, form: "What brings you ~?", stem: "What brings you", meaning: "~하게 된 이유가 뭐예요?",
    hint: "What brings you (to) + 명사?",
    intro: {
      blocks: [["What brings you", "무엇이 너를 데려왔니"], ["(to) ~?", "~에"]],
      lines: [
        "What brings you (to) ~?는 ‘~에 무슨 일로 왔어요?’예요. 방문 이유를 공손하게 물어요.",
        "brings는 bring에 s가 붙은 모양이에요.",
        "What brings you here?(여긴 무슨 일로?)를 가장 많이 써요."
      ],
      examples: [
        { en: "What brings you here?", ko: "여긴 무슨 일로 왔어요?" },
        { en: "What brings you to Seoul?", ko: "서울엔 무슨 일로 왔어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "여긴 무슨 일로 왔어요?", before: "What brings you", after: "?", answers: ["here"],
        wrong: { "to here": "here 앞에는 to를 붙이지 않아요." },
        tip: { en: "Why are you here?", why: "‘여기 왜 왔어요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "서울엔 무슨 일로 왔어요?", before: "What brings you", after: "Seoul?", answers: ["to"],
        wrong: { "in": "‘~에 온 이유’는 brings you to예요." },
        tip: { en: "Are you here on business?", why: "on business는 ‘업무로’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오늘은 무슨 일로 오셨어요?", before: "What", after: "you in today?", answers: ["brings"],
        wrong: { "bring": "What 뒤에는 동사에 s를 붙여요. brings예요.", "brought": "지금 묻는 말이라 brings예요." },
        tip: { en: "How can I help you today?", why: "‘오늘 무엇을 도와드릴까요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "한국엔 무슨 일로 왔어요?", before: "What brings you to", after: "?", answers: ["Korea"],
        wrong: { "korean": "나라 이름은 Korea예요." },
        tip: { en: "Is this your first time in Korea?", why: "‘한국 처음이에요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이 동네엔 무슨 일이야?", before: "What brings you to this", after: "?", answers: ["neighborhood"],
        wrong: { "neighbor": "neighbor는 ‘이웃’이에요. ‘동네’는 neighborhood예요." },
        tip: { en: "Do you live around here?", why: "‘이 근처 살아?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "여긴 웬일이야?", answers: ["What brings you here?"],
        wrong: { "what bring you here": "What 뒤에는 동사에 s를 붙여요. brings예요.", "what brings you to here": "here 앞에는 to를 붙이지 않아요." },
        tip: { en: "Fancy seeing you here!", why: "‘여기서 보다니!’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "부산엔 무슨 일로 왔어?", answers: ["What brings you to Busan?"],
        wrong: { "what brings you in busan": "‘~에 온 이유’는 brings you to예요." },
        tip: { en: "Visiting family?", why: "‘가족 보러?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 가게엔 무슨 일로 오셨어요?", answers: ["What brings you to our store?", "What brings you to our shop?"],
        wrong: { "what brings you to our stores": "우리 가게 하나라 store예요." },
        tip: { en: "Looking for something?", why: "‘찾는 거 있으세요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이렇게 늦게 무슨 일이야?", answers: ["What brings you here so late?"],
        wrong: { "what brings you here so lately": "‘늦게’는 late예요. lately는 ‘최근에’예요." },
        tip: { en: "It's past midnight.", why: "‘자정 넘었어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "런던엔 무슨 일로 왔어요?", answers: ["What brings you to London?"],
        ctx: { lead: "Seoul 대신 ‘런던(London)’으로 바꿔 보세요.", en: "What brings you to Seoul?" },
        wrong: { "what brings you in london": "‘~에 온 이유’는 brings you to예요." },
        tip: { en: "How long are you staying?", why: "‘얼마나 머물러요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어서 오세요! 무슨 일로 오셨어요?", answers: ["Welcome! What brings you here?", "What brings you here?", "Welcome! What brings you in today?"],
        dialog: { a: "Hi, is this the travel agency?", aKo: "안녕하세요, 여기 여행사 맞죠?" },
        wrong: { "welcome what bring you here": "What 뒤에는 동사에 s를 붙여요. brings예요." },
        tip: { en: "Welcome! How can I help?", why: "‘어서 오세요! 무엇을 도와드릴까요?’라는 말이에요." } }
    ]
  };
})(window.EP);
