/* 포르투갈어(유럽) 세션 44. Queres ~? (형식은 pattern1.js 위쪽 설명과 같다)
   친구(tu)에게 묻는 말이라 subject는 tu */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[44] = {
    no: 44, form: "Queres ~?", stem: "Queres/Quer/Quero", subject: "tu", meaning: "~할래? (친구에게)",
    hint: "Queres + 동사원형/명사?",
    intro: {
      blocks: [["Queres", "너는 원하니?"], ["~", "동사원형 / 무엇"]],
      lines: [
        "Queres는 querer의 ‘너’ 형태예요. 친구에게 ‘~할래?, ~ 줄까?’라고 물어요: Queres um café?",
        "존댓말은 Quer ~?예요: Quer um café?",
        "대답은 Quero!(응!) 또는 Não, obrigado.(아니, 괜찮아)예요."
      ],
      examples: [
        { en: "Queres um café?", ko: "커피 마실래?" },
        { en: "Queres vir connosco?", ko: "우리랑 같이 갈래?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나랑 같이 갈래?", before: "", after: "vir comigo?", answers: ["Queres"],
        wrong: { "quero": "quero는 ‘나는’이에요. 친구에게 물을 때는 queres예요.", "quieres": "quieres는 스페인어예요. 포르투갈어는 queres예요." },
        tip: { en: "Vens comigo?", why: "‘나랑 갈래?’라는 짧은 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "뭐 마실래?", before: "O que", after: "beber?", answers: ["queres"],
        wrong: { "quer": "친구(tu)에게는 queres예요. quer는 존댓말이에요." },
        tip: { en: "Bebes alguma coisa?", why: "‘뭐 마실래?’라는 짧은 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "커피 드실래요?", before: "", after: "um café?", answers: ["Quer"],
        wrong: { "queres": "존댓말로는 quer예요. queres는 친구에게 써요." },
        tip: { en: "Deseja um café?", why: "desejar는 가게에서 쓰는 정중한 ‘원하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "응, 좋아!", before: "", after: "!", answers: ["Quero"],
        wrong: { "queres": "대답은 ‘나는 원해’라서 quero예요." },
        tip: { en: "Sim, obrigado!", why: "‘응, 고마워!’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리랑 같이 저녁 먹을래?", before: "Queres jantar", after: "?", answers: ["connosco"],
        wrong: { "con nosotros": "con nosotros는 스페인어예요. 포르투갈어는 connosco예요.", "conosco": "conosco는 브라질 표기예요. 포르투갈에서는 connosco예요." },
        tip: { en: "Vens jantar connosco?", why: "vens는 ‘너 올래?’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "차 마실래?", answers: ["Queres um chá?"],
        wrong: { "quieres um chá": "quieres는 스페인어예요. 포르투갈어는 queres예요." },
        tip: { en: "Apetece-te um chá?", why: "‘차 당겨?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "영화 보러 갈래?", answers: ["Queres ir ao cinema?"],
        wrong: { "queres ir a cinema": "cinema는 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Vamos ao cinema?", why: "‘영화관 갈래?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나랑 춤출래?", answers: ["Queres dançar comigo?"],
        wrong: { "queres dançar con migo": "‘나와 함께’는 붙여서 comigo예요." },
        tip: { en: "Danças comigo?", why: "‘나랑 춤출래?’라는 짧은 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "도와줄까?", answers: ["Queres ajuda?"],
        wrong: { "quero ajuda": "quero는 ‘나는’이에요. 친구에게 물을 때는 queres예요." },
        tip: { en: "Precisas de ajuda?", why: "‘도움 필요해?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "케이크 한 조각 먹을래?", answers: ["Queres uma fatia de bolo?"],
        ctx: { lead: "um café 대신 ‘케이크 한 조각(uma fatia de bolo)’을 넣어 보세요.", en: "Queres um café?" },
        wrong: { "queres um fatia de bolo": "fatia는 여성 명사라 uma예요." },
        tip: { en: "Apetece-te bolo?", why: "‘케이크 당겨?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 산책할래?", answers: ["Então, queres dar um passeio?", "Queres dar um passeio?"],
        dialog: { a: "Estou aborrecido.", aKo: "나 심심해." },
        wrong: { "então quieres dar um passeio": "quieres는 스페인어예요. 포르투갈어는 queres예요." },
        tip: { en: "Vamos dar uma volta?", why: "dar uma volta는 ‘한 바퀴 돌다’예요." } }
    ]
  };
})(window.EP);
