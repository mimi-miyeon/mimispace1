/* 세션 180. What kind of ... should I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[180] = {
    no: 180, form: "What kind of ... should I ~?", stem: "What kind of", meaning: "어떤 ...을 ~해야 할까요?",
    hint: "What kind of + 명사 + should I + 동사?",
    intro: {
      blocks: [["What kind of ...", "어떤 종류의 ..."], ["should I ~?", "내가 ~해야 할까?"]],
      lines: [
        "What kind of + 명사 + should I + 동사?는 ‘어떤 ...를 ~하면 좋을까?’예요. 조언을 구해요.",
        "should I 뒤에는 동사 원래 모양을 써요.",
        "물건을 고를 때, 선물을 살 때 많이 써요."
      ],
      examples: [
        { en: "What kind of gift should I buy?", ko: "어떤 선물 사면 좋을까?" },
        { en: "What kind of shoes should I wear?", ko: "어떤 신발 신으면 좋을까?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어떤 선물 사면 좋을까?", before: "What kind of gift should I", after: "?", answers: ["buy", "get"],
        wrong: { "buying": "should I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Any gift ideas?", why: "‘선물 아이디어 있어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떤 신발 신으면 좋을까?", before: "What kind of shoes", after: "I wear?", answers: ["should"],
        wrong: { "do": "조언을 구할 때는 should I예요.", "must": "조언을 구할 때는 should I예요." },
        tip: { en: "Wear something comfortable.", why: "comfortable은 ‘편한’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떤 노트북 사면 좋을까?", before: "What kind of laptop should I", after: "?", answers: ["buy", "get"],
        wrong: { "bought": "should I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "What's your budget?", why: "budget은 ‘예산’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어떤 옷 가져가면 좋을까?", before: "What kind of", after: "should I pack?", answers: ["clothes"],
        wrong: { "cloths": "‘옷’은 clothes예요. cloth는 ‘천’이에요." },
        tip: { en: "Check the weather first.", why: "‘날씨 먼저 확인해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어떤 책 읽으면 좋을까?", before: "What kind", after: "books should I read?", answers: ["of"],
        wrong: { "for": "‘어떤 종류의’는 kind of예요." },
        tip: { en: "Start with something easy.", why: "‘쉬운 것부터 시작해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어떤 와인 가져가면 좋을까?", answers: ["What kind of wine should I bring?", "What kind of wine should I take?"],
        wrong: { "what kind of wine should i bringing": "should I 뒤에는 동사 원래 모양 bring을 써요.", "what kind of wine i should bring": "물을 때는 should를 I 앞에 써요." },
        tip: { en: "Red or white?", why: "‘레드 아니면 화이트?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어떤 운동 하면 좋을까?", answers: ["What kind of exercise should I do?", "What kind of workout should I do?"],
        wrong: { "what kind of exercise should i doing": "should I 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Start with walking.", why: "‘걷기부터 시작해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어떤 차 사면 좋을까?", answers: ["What kind of car should I buy?", "What kind of car should I get?"],
        wrong: { "what kind of car should i buy it": "buy 뒤에 it을 붙이지 않아요." },
        tip: { en: "Something reliable.", why: "reliable은 ‘믿을 만한’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떤 질문 하면 좋을까?", answers: ["What kind of questions should I ask?", "What kind of question should I ask?"],
        wrong: { "what kind of questions should i asking": "should I 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "Ask about the team.", why: "‘팀에 대해 물어봐’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어떤 꽃 사면 좋을까?", answers: ["What kind of flowers should I buy?", "What kind of flowers should I get?"],
        ctx: { lead: "gift 대신 ‘꽃(flowers)’으로 바꿔 보세요.", en: "What kind of gift should I buy?" },
        wrong: { "what kind of flowers should i bought": "should I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Roses are classic.", why: "classic은 ‘무난한’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 어떤 폰 사야 할까?", answers: ["Then what kind of phone should I buy?", "What kind of phone should I buy?", "What kind of phone should I get?", "Then what kind of phone should I get?"],
        dialog: { a: "Your phone is too old.", aKo: "네 폰 너무 오래됐어." },
        wrong: { "then what kind of phone should i buying": "should I 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Any recommendations?", why: "‘추천해 줄 거 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
