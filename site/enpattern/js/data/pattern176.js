/* 세션 176. What kind of ~ is it? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[176] = {
    no: 176, form: "What kind of ~ is it?", stem: "What kind of", meaning: "그건 어떤 종류의 ~예요?",
    hint: "What kind of + 명사 + is it?",
    intro: {
      blocks: [["What kind of ~", "어떤 종류의 ~"], ["is it?", "그건 ~이니?"]],
      lines: [
        "What kind of + 명사 + is it?는 ‘그건 어떤 ~야?’예요. 종류를 물어요.",
        "kind는 ‘종류’예요. of 뒤에는 보통 a 없이 명사를 써요. (What kind of dog)",
        "여러 개면 What kind of ~ are they?예요."
      ],
      examples: [
        { en: "What kind of dog is it?", ko: "그거 무슨 종류 개야?" },
        { en: "What kind of food is it?", ko: "그거 어떤 음식이야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그거 무슨 종류 개야?", before: "What kind of", after: "is it?", answers: ["dog"],
        wrong: { "dogs": "it 하나라 dog예요.", "a dog": "kind of 뒤에는 보통 a를 붙이지 않아요." },
        tip: { en: "What breed is it?", why: "breed는 ‘품종’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 어떤 음식이야?", before: "What", after: "of food is it?", answers: ["kind"],
        wrong: { "kinds": "하나를 물을 때는 kind예요.", "type of": "kind 자리에 들어가는 말 하나만 써요." },
        tip: { en: "Is it spicy?", why: "‘매워?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그거 어떤 차야?", before: "What kind", after: "car is it?", answers: ["of"],
        wrong: { "for": "‘어떤 종류의’는 kind of예요." },
        tip: { en: "Is it new?", why: "‘새 차야?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그거 어떤 영화야?", before: "What kind of movie", after: "it?", answers: ["is"],
        wrong: { "does": "‘그건 ~야?’는 is it이에요.", "are": "it 하나라 is를 써요." },
        tip: { en: "Is it a comedy?", why: "comedy는 ‘코미디’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 어떤 가게야?", before: "", after: "kind of store is it?", answers: ["What"],
        wrong: { "which": "종류를 물을 때는 What kind of예요." },
        tip: { en: "What do they sell?", why: "‘거기서 뭐 팔아?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그거 어떤 꽃이야?", answers: ["What kind of flower is it?", "What kind of flower is that?"],
        wrong: { "what kind of flowers is it": "it 하나라 flower예요.", "what kind of a flower it is": "물을 때는 is를 it 앞에 써요." },
        tip: { en: "It smells nice.", why: "‘향기 좋다’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 어떤 회사야?", answers: ["What kind of company is it?"],
        wrong: { "what kind of company it is": "물을 때는 is를 it 앞에 써요." },
        tip: { en: "What do they do?", why: "‘거기 뭐 하는 데야?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 어떤 게임이야?", answers: ["What kind of game is it?", "What kind of game is that?"],
        wrong: { "what kind of games is it": "it 하나라 game이에요." },
        tip: { en: "Is it fun?", why: "‘재밌어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 어떤 책이야?", answers: ["What kind of book is it?", "What kind of book is that?"],
        wrong: { "what kind book is it": "kind 뒤에 of를 붙여요." },
        tip: { en: "Is it a novel?", why: "novel은 ‘소설’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그거 어떤 새야?", answers: ["What kind of bird is it?", "What kind of bird is that?"],
        ctx: { lead: "dog 대신 ‘새(bird)’로 바꿔 보세요.", en: "What kind of dog is it?" },
        wrong: { "what kind of birds is it": "it 하나라 bird예요." },
        tip: { en: "It's so colorful.", why: "colorful은 ‘알록달록한’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "오, 어떤 일이야?", answers: ["Oh, what kind of job is it?", "What kind of job is it?"],
        dialog: { a: "I got a new job.", aKo: "나 새 일 구했어." },
        wrong: { "oh what kind of job it is": "물을 때는 is를 it 앞에 써요." },
        tip: { en: "Congrats! Tell me about it.", why: "‘축하해! 얘기해 봐’라는 말이에요." } }
    ]
  };
})(window.EP);
