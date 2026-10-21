/* 세션 198. What's your favorite ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[198] = {
    no: 198, form: "What's your favorite ~?", stem: "What's your favorite/What is your favorite/Who's your favorite/Who is your favorite", meaning: "당신이 가장 좋아하는 ~이 뭐예요?",
    hint: "What's your favorite + 명사?",
    intro: {
      blocks: [["What's your", "너의 ~는 뭐니"], ["favorite ~?", "가장 좋아하는 ~"]],
      lines: [
        "What's your favorite + 명사?는 ‘제일 좋아하는 ~이 뭐야?’예요.",
        "favorite은 ‘가장 좋아하는’이에요. most를 붙이지 않아요.",
        "대답은 My favorite ~ is ...예요."
      ],
      examples: [
        { en: "What's your favorite food?", ko: "제일 좋아하는 음식이 뭐야?" },
        { en: "What's your favorite color?", ko: "제일 좋아하는 색이 뭐야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "제일 좋아하는 음식이 뭐야?", before: "What's your favorite", after: "?", answers: ["food"],
        wrong: { "foods": "하나를 물을 때는 food예요." },
        tip: { en: "What do you like to eat?", why: "‘뭐 먹는 거 좋아해?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "제일 좋아하는 색이 뭐야?", before: "What's your", after: "color?", answers: ["favorite"],
        wrong: { "most favorite": "favorite에 이미 ‘가장’이 있어서 most를 붙이지 않아요.", "favorit": "‘가장 좋아하는’은 favorite이에요." },
        tip: { en: "I love blue.", why: "‘나 파랑 좋아해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "제일 좋아하는 영화가 뭐야?", before: "What's your favorite", after: "?", answers: ["movie"],
        wrong: { "movies": "하나를 물을 때는 movie예요." },
        tip: { en: "Seen any good movies?", why: "‘재밌는 영화 봤어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "제일 좋아하는 계절이 뭐야?", before: "What's your favorite", after: "?", answers: ["season"],
        wrong: { "seasons": "하나를 물을 때는 season이에요." },
        tip: { en: "I love fall.", why: "fall은 ‘가을’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "제일 좋아하는 노래가 뭐야?", before: "What's", after: "favorite song?", answers: ["your"],
        wrong: { "you": "‘너의’는 your예요." },
        tip: { en: "What are you listening to?", why: "‘뭐 듣고 있어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "제일 좋아하는 운동이 뭐야?", answers: ["What's your favorite sport?", "What is your favorite sport?"],
        wrong: { "what is your most favorite sport": "favorite에 이미 ‘가장’이 있어서 most를 붙이지 않아요.", "what is your favorite sports": "하나를 물을 때는 sport예요." },
        tip: { en: "Do you play any sports?", why: "‘운동하는 거 있어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "제일 좋아하는 가수가 누구야?", answers: ["Who's your favorite singer?", "Who is your favorite singer?"],
        wrong: { "what is your favorite singer": "사람을 물을 때는 Who's your favorite이에요." },
        tip: { en: "Who do you listen to?", why: "‘누구 노래 들어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "제일 좋아하는 책이 뭐야?", answers: ["What's your favorite book?", "What is your favorite book?"],
        wrong: { "what is your favorite books": "하나를 물을 때는 book이에요." },
        tip: { en: "Read anything good?", why: "‘좋은 거 읽었어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "제일 좋아하는 동물이 뭐야?", answers: ["What's your favorite animal?", "What is your favorite animal?"],
        wrong: { "what is your favorite animals": "하나를 물을 때는 animal이에요." },
        tip: { en: "Cats or dogs?", why: "‘고양이 아니면 개?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "제일 좋아하는 과일이 뭐야?", answers: ["What's your favorite fruit?", "What is your favorite fruit?"],
        ctx: { lead: "food 대신 ‘과일(fruit)’로 바꿔 보세요.", en: "What's your favorite food?" },
        wrong: { "what is your favorite fruits": "하나를 물을 때는 fruit이에요." },
        tip: { en: "I love strawberries.", why: "‘나 딸기 좋아해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너는 제일 좋아하는 게 뭐야?", answers: ["What's your favorite?", "What's your favorite flavor?"], alts: ["What's yours?"],
        dialog: { a: "My favorite ice cream is chocolate.", aKo: "내가 제일 좋아하는 아이스크림은 초콜릿이야." },
        wrong: { "what is your most favorite": "favorite에 이미 ‘가장’이 있어서 most를 붙이지 않아요." },
        tip: { en: "And you?", why: "‘너는?’이라는 말이에요." } }
    ]
  };
})(window.EP);
