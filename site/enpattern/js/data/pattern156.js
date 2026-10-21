/* 세션 156. Have you been to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[156] = {
    no: 156, form: "Have you been to ~?", stem: "Have you been to/Have you ever been to", meaning: "~에 가 본 적 있어요?",
    hint: "Have you been to + 장소?",
    intro: {
      blocks: [["Have you been", "너 가 본 적 있니"], ["to ~?", "~에"]],
      lines: [
        "Have you been to + 장소?는 ‘~에 가 본 적 있어?’예요. 경험을 물어요.",
        "been은 be의 과거분사예요. ‘가 본 적’은 gone이 아니라 been을 써요.",
        "ever를 넣으면 ‘한 번이라도’예요. (Have you ever been to Japan?)"
      ],
      examples: [
        { en: "Have you been to Japan?", ko: "일본 가 본 적 있어?" },
        { en: "Have you ever been to Jeju?", ko: "제주도 가 본 적 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "일본 가 본 적 있어?", before: "Have you been", after: "Japan?", answers: ["to"],
        wrong: { "in": "‘~에 가 본 적’은 been to예요." },
        tip: { en: "Have you visited Japan?", why: "visit은 ‘방문하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "파리 가 본 적 있어?", before: "Have you", after: "to Paris?", answers: ["been"],
        wrong: { "gone": "‘가 본 적 있어?’는 gone이 아니라 been을 써요.", "went": "Have you 뒤에는 been을 써요." },
        tip: { en: "Is Paris nice?", why: "‘파리 좋아?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 식당 가 본 적 있어?", before: "Have you been to that", after: "?", answers: ["restaurant"],
        wrong: { "restaurants": "that 뒤에는 하나만 써요." },
        tip: { en: "Is the food good there?", why: "‘거기 음식 맛있어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "한 번이라도 미국에 가 본 적 있어?", before: "Have you", after: "been to the US?", answers: ["ever"],
        wrong: { "never": "물을 때는 ever를 써요." },
        tip: { en: "Have you traveled abroad?", why: "abroad는 ‘해외로’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "새 카페 가 봤어?", before: "", after: "you been to the new cafe?", answers: ["Have"],
        wrong: { "did": "‘가 본 적 있어?’는 Have you been이에요.", "do": "‘가 본 적 있어?’는 Have you been이에요." },
        tip: { en: "Did you check out the new cafe?", why: "check out은 ‘가 보다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "제주도 가 본 적 있어?", answers: ["Have you been to Jeju?", "Have you ever been to Jeju?", "Have you been to Jeju Island?", "Have you ever been to Jeju Island?"],
        wrong: { "have you gone to jeju": "‘가 본 적’은 gone이 아니라 been을 써요.", "did you been to jeju": "Have you been to예요." },
        tip: { en: "Jeju is beautiful.", why: "‘제주도 예뻐’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "유럽 가 본 적 있어?", answers: ["Have you been to Europe?", "Have you ever been to Europe?"],
        wrong: { "have you been europe": "been 뒤에 to를 붙여요." },
        tip: { en: "Where in Europe?", why: "‘유럽 어디?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 박물관 가 본 적 있어?", answers: ["Have you been to that museum?", "Have you been to the museum?", "Have you ever been to that museum?"],
        wrong: { "have you be to that museum": "Have you 뒤에는 been을 써요." },
        tip: { en: "Is it worth visiting?", why: "‘가 볼 만해?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "부산 가 본 적 있어?", answers: ["Have you been to Busan?", "Have you ever been to Busan?"],
        wrong: { "have you been in busan": "‘~에 가 본 적’은 been to예요." },
        tip: { en: "Busan has great beaches.", why: "‘부산 바다 좋아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "런던 가 본 적 있어?", answers: ["Have you been to London?", "Have you ever been to London?"],
        ctx: { lead: "Japan 대신 ‘런던(London)’으로 바꿔 보세요.", en: "Have you been to Japan?" },
        wrong: { "have you gone to london": "‘가 본 적’은 gone이 아니라 been을 써요." },
        tip: { en: "London is so rainy.", why: "rainy는 ‘비가 많은’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응! 너 태국 가 본 적 있어?", answers: ["Yes! Have you been to Thailand?", "Yeah! Have you been to Thailand?", "Have you been to Thailand?", "Yes! Have you ever been to Thailand?"],
        dialog: { a: "Do you like traveling?", aKo: "여행 좋아해?" },
        wrong: { "yes have you gone to thailand": "‘가 본 적’은 gone이 아니라 been을 써요." },
        tip: { en: "Yes! Where should I go?", why: "‘응! 어디 가 볼까?’라는 말이에요." } }
    ]
  };
})(window.EP);
