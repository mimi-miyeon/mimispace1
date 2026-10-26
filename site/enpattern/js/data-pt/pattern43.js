/* 포르투갈어(유럽) 세션 43. Que tal ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[43] = {
    no: 43, form: "Que tal ~?", stem: "Que tal", meaning: "~하는 게 어때요?",
    hint: "Que tal + 명사/동사원형?",
    intro: {
      blocks: [["Que tal", "~ 어때?"], ["~", "명사 / 동사원형"]],
      lines: [
        "Que tal + 명사?는 ‘~ 어때?’라는 제안이에요: Que tal um café?",
        "동사원형도 붙여요: Que tal jantar fora?(외식하는 거 어때?)",
        "지난 일의 느낌을 물을 때도 써요: Que tal o hotel?(호텔 어땠어?)"
      ],
      examples: [
        { en: "Que tal um café?", ko: "커피 한 잔 어때?" },
        { en: "Que tal jantar fora hoje?", ko: "오늘 외식하는 거 어때?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "토요일 어때?", before: "Que tal", after: "?", answers: ["sábado"],
        wrong: { "sábados": "‘이번 토요일’은 하나라 sábado예요." },
        tip: { en: "Pode ser no sábado?", why: "pode ser는 ‘~ 괜찮아요?’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "산책하는 거 어때?", before: "Que tal dar um", after: "?", answers: ["passeio"],
        wrong: { "paseo": "paseo는 스페인어예요. 포르투갈어는 passeio예요." },
        tip: { en: "Vamos dar um passeio?", why: "‘산책할래?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "여행 어땠어?", before: "Que tal a", after: "?", answers: ["viagem"],
        wrong: { "viaje": "viaje는 스페인어예요. 포르투갈어는 viagem이에요." },
        tip: { en: "Como correu a viagem?", why: "correr bem은 ‘잘 진행되다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내일 어때?", before: "Que tal", after: "?", answers: ["amanhã"],
        wrong: { "mañana": "mañana는 스페인어예요. 포르투갈어는 amanhã예요." },
        tip: { en: "Dá-te jeito amanhã?", why: "dar jeito는 ‘편하다, 형편이 되다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "외식하는 거 어때?", before: "Que tal jantar", after: "?", answers: ["fora"],
        wrong: { "afuera": "afuera는 스페인어예요. 포르투갈어는 fora예요." },
        tip: { en: "Vamos jantar fora?", why: "‘외식할래?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "피자 어때?", answers: ["Que tal uma piza?", "Que tal uma pizza?", "Que tal piza?", "Que tal pizza?"],
        wrong: { "que tal um piza": "piza는 여성 명사라 uma예요." },
        tip: { en: "Apetece-te piza?", why: "‘피자 당겨?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "영화 보는 거 어때?", answers: ["Que tal ver um filme?"],
        wrong: { "que tal vemos um filme": "que tal 뒤에는 동사원형을 써요: ver." },
        tip: { en: "Vamos ver um filme?", why: "‘영화 볼래?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "호텔 어땠어요?", answers: ["Que tal o hotel?"],
        wrong: { "que tal a hotel": "hotel은 남성 명사라 o hotel이에요." },
        tip: { en: "Gostou do hotel?", why: "‘호텔 마음에 드셨어요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "3시 어때?", answers: ["Que tal às três?"],
        wrong: { "que tal as três": "‘3시에’는 a + as = às예요. 악센트를 꼭 써요." },
        tip: { en: "Pode ser às três?", why: "pode ser는 ‘~ 괜찮아요?’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "맥주 한 잔 어때?", answers: ["Que tal uma cerveja?"],
        ctx: { lead: "um café 대신 ‘맥주 한 잔(uma cerveja)’을 넣어 보세요.", en: "Que tal um café?" },
        wrong: { "que tal um cerveja": "cerveja는 여성 명사라 uma예요." },
        tip: { en: "Vamos beber uma cerveja?", why: "‘맥주 마실래?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그 일식집 어때?", answers: ["Que tal aquele japonês?", "Que tal o restaurante japonês?"],
        dialog: { a: "Onde vamos jantar?", aKo: "저녁 어디서 먹을까?" },
        wrong: { "que tal aquela japonês": "restaurante(식당)가 남성이라 aquele japonês예요." },
        tip: { en: "Pode ser o japonês?", why: "o japonês는 말할 때 ‘일식집’이에요." } }
    ]
  };
})(window.EP);
