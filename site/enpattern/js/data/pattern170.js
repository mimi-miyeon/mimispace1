/* 세션 170. How often do you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[170] = {
    no: 170, form: "How often do you ~?", stem: "How often do you", meaning: "얼마나 자주 ~해요?",
    hint: "How often do you + 동사?",
    intro: {
      blocks: [["How often", "얼마나 자주"], ["do you ~?", "너는 ~하니?"]],
      lines: [
        "How often do you + 동사?는 ‘얼마나 자주 ~해?’예요.",
        "do you 뒤에는 동사 원래 모양을 써요.",
        "대답은 every day, once a week(일주일에 한 번), twice a month처럼 해요."
      ],
      examples: [
        { en: "How often do you work out?", ko: "얼마나 자주 운동해?" },
        { en: "How often do you eat out?", ko: "얼마나 자주 외식해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "얼마나 자주 운동해?", before: "How often do you", after: "out?", answers: ["work"],
        wrong: { "working": "do you 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Do you go to the gym?", why: "‘헬스장 다녀?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "얼마나 자주 외식해?", before: "How", after: "do you eat out?", answers: ["often"],
        wrong: { "many": "‘얼마나 자주’는 How often이에요.", "much": "‘얼마나 자주’는 How often이에요." },
        tip: { en: "Do you cook at home?", why: "‘집에서 요리해?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "얼마나 자주 부모님께 전화해?", before: "How often do you", after: "your parents?", answers: ["call"],
        wrong: { "calls": "do you 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "Call your parents.", why: "‘부모님께 전화해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "얼마나 자주 여행 가?", before: "How often do you", after: "?", answers: ["travel"],
        wrong: { "trip": "‘여행 가다’는 동사 travel이에요." },
        tip: { en: "Where did you go last?", why: "‘마지막으로 어디 갔어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "얼마나 자주 머리 잘라?", before: "How often", after: "you get a haircut?", answers: ["do"],
        wrong: { "are": "get이 동사라 do를 써요.", "does": "you 앞에는 do를 써요." },
        tip: { en: "Your hair looks nice.", why: "‘머리 예쁘다’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "얼마나 자주 영화 봐?", answers: ["How often do you watch movies?", "How often do you see movies?", "How often do you go to the movies?"],
        wrong: { "how often do you watching movies": "do you 뒤에는 동사 원래 모양 watch를 써요.", "how often you watch movies": "물을 때는 do를 붙여요. do you예요." },
        tip: { en: "Seen any good movies?", why: "‘재밌는 영화 봤어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "얼마나 자주 장 봐?", answers: ["How often do you go grocery shopping?", "How often do you go shopping?", "How often do you buy groceries?"],
        wrong: { "how often do you go to shopping": "go 뒤에는 to 없이 shopping을 써요." },
        tip: { en: "Where do you shop?", why: "‘어디서 장 봐?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "얼마나 자주 그녀를 만나?", answers: ["How often do you see her?", "How often do you meet her?"],
        wrong: { "how often do you sees her": "do you 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "Are you two close?", why: "‘둘이 친해?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "얼마나 자주 청소해?", answers: ["How often do you clean?", "How often do you clean your room?", "How often do you clean the house?"],
        wrong: { "how often do you cleaning": "do you 뒤에는 동사 원래 모양 clean을 써요." },
        tip: { en: "Your place is so clean.", why: "‘집 진짜 깨끗하다’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "얼마나 자주 수영해?", answers: ["How often do you swim?", "How often do you go swimming?"],
        ctx: { lead: "work out 대신 ‘수영하다(swim)’로 바꿔 보세요.", en: "How often do you work out?" },
        wrong: { "how often do you swimming": "do you 뒤에는 동사 원래 모양 swim을 써요." },
        tip: { en: "Do you like swimming?", why: "‘수영 좋아해?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와, 얼마나 자주 가?", answers: ["Wow, how often do you go?", "How often do you go?", "Wow, how often do you go there?"],
        dialog: { a: "I love that cafe.", aKo: "나 그 카페 진짜 좋아." },
        wrong: { "wow how often do you goes": "do you 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Wow, every week?", why: "‘와, 매주?’라는 말이에요." } }
    ]
  };
})(window.EP);
