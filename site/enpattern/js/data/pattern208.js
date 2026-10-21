/* 세션 208. That's why ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[208] = {
    no: 208, form: "That's why ~.", stem: "That's why", meaning: "그게 ~한 이유예요.",
    hint: "That's why + 주어 + 동사",
    intro: {
      blocks: [["That's", "그게"], ["why ~", "~한 이유다"]],
      lines: [
        "That's why + 주어 + 동사는 ‘그래서 ~한 거야’예요. 이유를 먼저 말하고 결과를 이어요.",
        "why 뒤에는 ‘주어 + 동사’를 써요.",
        "That's why I love you.(그래서 내가 널 좋아해)처럼 써요."
      ],
      examples: [
        { en: "That's why I'm late.", ko: "그래서 나 늦은 거야." },
        { en: "That's why I called you.", ko: "그래서 너한테 전화한 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그래서 나 늦은 거야.", before: "That's", after: "I'm late.", answers: ["why"],
        wrong: { "because": "‘그래서 ~한 거야’는 That's why예요.", "what": "이유를 말할 때는 why예요." },
        tip: { en: "Sorry I'm late.", why: "‘늦어서 미안’이라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그래서 너한테 전화한 거야.", before: "That's why I", after: "you.", answers: ["called"],
        wrong: { "call": "지난 일이라 called를 써요." },
        tip: { en: "I needed to talk.", why: "‘얘기해야 했어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그래서 내가 널 좋아해.", before: "That's why I", after: "you.", answers: ["love", "like"],
        wrong: { "loves": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "You're the best.", why: "‘네가 최고야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그래서 그녀가 화난 거야.", before: "That's why she's", after: ".", answers: ["angry", "mad", "upset"],
        wrong: { "anger": "she's 뒤에는 형용사 angry를 써요." },
        tip: { en: "Now I understand.", why: "‘이제 알겠다’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그래서 내가 여기 온 거야.", before: "", after: "why I'm here.", answers: ["That's"],
        wrong: { "it is": "‘그래서 ~한 거야’는 That's why예요." },
        tip: { en: "That's the reason I came.", why: "reason은 ‘이유’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그래서 내가 피곤한 거야.", answers: ["That's why I'm tired."],
        wrong: { "that is why i tired": "tired 앞에 am이 필요해요. I'm tired예요.", "that is because i am tired": "‘그래서 ~한 거야’는 That's why예요." },
        tip: { en: "I didn't sleep well.", why: "‘잠을 잘 못 잤어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그래서 내가 일찍 나온 거야.", answers: ["That's why I left early.", "That's why I came out early."],
        wrong: { "that is why i leave early": "지난 일이라 left를 써요." },
        tip: { en: "I wanted to beat traffic.", why: "‘차 막히기 전에 가고 싶었어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그래서 걔가 안 온 거야.", answers: ["That's why he didn't come.", "That's why she didn't come."],
        wrong: { "that is why he do not come": "지난 일이라 didn't를 써요." },
        tip: { en: "Now it makes sense.", why: "make sense는 ‘이해가 되다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그래서 내가 영어 공부해.", answers: ["That's why I study English.", "That's why I'm studying English."],
        wrong: { "that is why i studies english": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "I want to travel.", why: "‘여행하고 싶어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그래서 내가 너한테 말한 거야.", answers: ["That's why I told you."],
        ctx: { lead: "called 대신 ‘말했다(told)’로 바꿔 보세요.", en: "That's why I called you." },
        wrong: { "that is why i tell you": "지난 일이라 told를 써요." },
        tip: { en: "I trust you.", why: "‘널 믿어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 그래서 내가 일찍 자는 거야.", answers: ["Yes, that's why I go to bed early.", "Yeah, that's why I go to bed early.", "That's why I go to bed early.", "Yes, that's why I sleep early."],
        dialog: { a: "You get up at 5 every day?", aKo: "너 매일 5시에 일어나?" },
        wrong: { "yes that is why i goes to bed early": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Yes, I need my sleep.", why: "‘응, 잠 자야 해’라는 말이에요." } }
    ]
  };
})(window.EP);
