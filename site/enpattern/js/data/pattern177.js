/* 세션 177. What kind of ~ do you like? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[177] = {
    no: 177, form: "What kind of ~ do you like?", stem: "What kind of", meaning: "어떤 ~를 좋아해요?",
    hint: "What kind of + 명사 + do you like?",
    intro: {
      blocks: [["What kind of ~", "어떤 종류의 ~를"], ["do you like?", "너는 좋아하니?"]],
      lines: [
        "What kind of + 명사 + do you like?는 ‘어떤 ~ 좋아해?’예요. 취향을 물어요.",
        "like 뒤에 아무것도 붙이지 않아요. (do you like it ×)",
        "대답은 I like + 명사로 해요. (I like rock music.)"
      ],
      examples: [
        { en: "What kind of music do you like?", ko: "어떤 음악 좋아해?" },
        { en: "What kind of food do you like?", ko: "어떤 음식 좋아해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어떤 음악 좋아해?", before: "What kind of", after: "do you like?", answers: ["music"],
        wrong: { "musics": "music은 s를 붙이지 않아요." },
        tip: { en: "Who's your favorite singer?", why: "‘제일 좋아하는 가수 누구야?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떤 음식 좋아해?", before: "What kind of food do you", after: "?", answers: ["like"],
        wrong: { "likes": "do you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Do you like spicy food?", why: "‘매운 거 좋아해?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떤 영화 좋아해?", before: "What kind of movies", after: "you like?", answers: ["do"],
        wrong: { "are": "like가 동사라 do를 써요.", "does": "you 앞에는 do를 써요." },
        tip: { en: "Seen anything good lately?", why: "‘요즘 재밌는 거 봤어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어떤 책 좋아해?", before: "What kind", after: "books do you like?", answers: ["of"],
        wrong: { "for": "‘어떤 종류의’는 kind of예요." },
        tip: { en: "What are you reading?", why: "‘뭐 읽고 있어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어떤 사람 좋아해?", before: "What kind of", after: "do you like?", answers: ["people", "guys", "person"],
        wrong: { "peoples": "‘사람들’은 people이에요. s를 붙이지 않아요." },
        tip: { en: "What's your type?", why: "type은 ‘이상형’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어떤 운동 좋아해?", answers: ["What kind of sports do you like?", "What kind of exercise do you like?", "What kind of sport do you like?"],
        wrong: { "what kind of sports you like": "물을 때는 do를 붙여요. do you like예요.", "what kind of sports do you like it": "like 뒤에 it을 붙이지 않아요." },
        tip: { en: "Do you play any sports?", why: "‘운동하는 거 있어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어떤 커피 좋아해?", answers: ["What kind of coffee do you like?"],
        wrong: { "what kind of coffees do you like": "coffee는 보통 s를 붙이지 않아요." },
        tip: { en: "Hot or iced?", why: "‘따뜻한 거 아니면 아이스?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어떤 옷 좋아해?", answers: ["What kind of clothes do you like?"],
        wrong: { "what kind of cloths do you like": "‘옷’은 clothes예요. cloth는 ‘천’이에요." },
        tip: { en: "What's your style?", why: "style은 ‘스타일’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떤 게임 좋아해?", answers: ["What kind of games do you like?", "What kind of game do you like?"],
        wrong: { "what kind of games do you likes": "do you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Do you play online?", why: "‘온라인으로 해?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어떤 동물 좋아해?", answers: ["What kind of animals do you like?", "What kind of animal do you like?"],
        ctx: { lead: "music 대신 ‘동물(animals)’로 바꿔 보세요.", en: "What kind of music do you like?" },
        wrong: { "what kind of animals you like": "물을 때는 do를 붙여요. do you like예요." },
        tip: { en: "Are you a dog person?", why: "dog person은 ‘개를 좋아하는 사람’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아! 어떤 장르 좋아해?", answers: ["Great! What kind of genre do you like?", "What kind of genre do you like?", "What kind of movies do you like?", "Great! What kind of movies do you like?"],
        dialog: { a: "I love watching movies.", aKo: "나 영화 보는 거 진짜 좋아해." },
        wrong: { "great what kind of genre do you likes": "do you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Me too! What's your favorite?", why: "‘나도! 제일 좋아하는 거 뭐야?’라는 말이에요." } }
    ]
  };
})(window.EP);
