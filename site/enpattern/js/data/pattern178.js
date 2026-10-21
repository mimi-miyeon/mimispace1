/* 세션 178. What kind of ... did you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[178] = {
    no: 178, form: "What kind of ... did you ~?", stem: "What kind of", meaning: "어떤 ...을 ~했어요?",
    hint: "What kind of + 명사 + did you + 동사?",
    intro: {
      blocks: [["What kind of ...", "어떤 종류의 ..."], ["did you ~?", "너는 ~했니?"]],
      lines: [
        "What kind of + 명사 + did you + 동사?는 ‘어떤 ...를 ~했어?’예요. 지난 일을 물어요.",
        "did you 뒤에는 동사 원래 모양을 써요. (did you bought ×)",
        "현재 일은 do you, 지난 일은 did you예요."
      ],
      examples: [
        { en: "What kind of car did you buy?", ko: "어떤 차 샀어?" },
        { en: "What kind of food did you eat?", ko: "어떤 음식 먹었어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어떤 차 샀어?", before: "What kind of car did you", after: "?", answers: ["buy"],
        wrong: { "bought": "did you 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Nice! Is it new?", why: "‘좋다! 새 차야?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떤 음식 먹었어?", before: "What kind of food", after: "you eat?", answers: ["did"],
        wrong: { "do": "지난 일이라 did를 써요.", "were": "eat이 동사라 did를 써요." },
        tip: { en: "Was it good?", why: "‘맛있었어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떤 영화 봤어?", before: "What kind of movie did you", after: "?", answers: ["watch", "see"],
        wrong: { "watched": "did you 뒤에는 동사 원래 모양 watch를 써요.", "saw": "did you 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "Was it any good?", why: "‘괜찮았어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어떤 선물 받았어?", before: "What kind of", after: "did you get?", answers: ["gift", "gifts", "present", "presents"],
        tip: { en: "Lucky you!", why: "‘좋겠다!’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어떤 일 했어?", before: "What kind of work did you", after: "?", answers: ["do"],
        wrong: { "did": "did you 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "What was your job?", why: "‘무슨 일 했어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어떤 책 읽었어?", answers: ["What kind of book did you read?", "What kind of books did you read?"],
        wrong: { "what kind of book did you readed": "did you 뒤에는 동사 원래 모양 read를 써요.", "what kind of book you read": "물을 때는 did를 붙여요. did you read예요." },
        tip: { en: "Any good books?", why: "‘좋은 책 있었어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어떤 케이크 주문했어?", answers: ["What kind of cake did you order?"],
        wrong: { "what kind of cake did you ordered": "did you 뒤에는 동사 원래 모양 order를 써요." },
        tip: { en: "Chocolate, I hope!", why: "‘초콜릿이면 좋겠다!’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어떤 음악 들었어?", answers: ["What kind of music did you listen to?", "What kind of music did you hear?"],
        wrong: { "what kind of music did you listen": "‘~을 듣다’는 listen to예요. 끝에 to를 붙여요." },
        tip: { en: "Any good songs?", why: "‘좋은 노래 있었어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떤 개 입양했어?", answers: ["What kind of dog did you adopt?", "What kind of dog did you get?"],
        wrong: { "what kind of dog did you adopted": "did you 뒤에는 동사 원래 모양 adopt를 써요." },
        tip: { en: "Can I see a picture?", why: "‘사진 볼 수 있어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어떤 신발 샀어?", answers: ["What kind of shoes did you buy?", "What kind of shoes did you get?"],
        ctx: { lead: "car 대신 ‘신발(shoes)’로 바꿔 보세요.", en: "What kind of car did you buy?" },
        wrong: { "what kind of shoes did you bought": "did you 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Let me see them.", why: "‘보여 줘’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "오, 어떤 사진 찍었어?", answers: ["Oh, what kind of pictures did you take?", "What kind of pictures did you take?", "What kind of photos did you take?"],
        dialog: { a: "I took a lot of pictures on my trip.", aKo: "여행 가서 사진 많이 찍었어." },
        wrong: { "oh what kind of pictures did you took": "did you 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Show me!", why: "‘보여 줘!’라는 말이에요." } }
    ]
  };
})(window.EP);
