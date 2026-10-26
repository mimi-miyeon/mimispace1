/* 포르투갈어(유럽) 세션 48. Está ~. (날씨·지금 상태) (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[48] = {
    no: 48, form: "Está ~.", stem: "Está", meaning: "(지금·날씨가) ~해요",
    hint: "Está + 형용사",
    intro: {
      blocks: [["Está", "(지금) ~한 상태다"], ["~", "형용사 / 날씨"]],
      lines: [
        "Está는 estar의 ‘그것·그/그녀’ 형태예요. 지금의 상태나 날씨를 말해요: Está frio.(추워요)",
        "날씨: Está calor(더워요), Está sol(해가 났어요), Está a chover(비가 와요).",
        "지금 먹는 음식 맛도 está예요: Está delicioso!(맛있어요!)"
      ],
      examples: [
        { en: "Está frio hoje.", ko: "오늘 추워요." },
        { en: "Está delicioso!", ko: "맛있어요!" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "더워요.", before: "", after: "calor.", answers: ["Está"],
        wrong: { "é": "날씨는 지금의 상태라 está예요.", "hace": "hace calor는 스페인어예요. 포르투갈어는 está calor예요." },
        tip: { en: "Faz calor.", why: "faz calor도 ‘더워요’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "문 열려 있어요.", before: "A porta está", after: ".", answers: ["aberta"],
        wrong: { "aberto": "porta는 여성 명사라 aberta예요." },
        tip: { en: "A porta ficou aberta.", why: "ficar는 ‘~한 채로 있다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "커피 식었어.", before: "O café está", after: ".", answers: ["frio"],
        wrong: { "fria": "café는 남성 명사라 frio예요." },
        tip: { en: "O café arrefeceu.", why: "arrefecer는 ‘식다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "다 괜찮아?", before: "", after: "tudo bem?", answers: ["Está"],
        wrong: { "é": "‘괜찮아?’는 지금의 상태라 está tudo bem?이에요." },
        tip: { en: "Tudo bem?", why: "짧게 이렇게 물어도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "가게가 닫혀 있어요.", before: "A loja está", after: ".", answers: ["fechada"],
        wrong: { "fechado": "loja는 여성 명사라 fechada예요.", "cerrada": "cerrada는 스페인어예요. 포르투갈어는 fechada예요." },
        tip: { en: "A loja já fechou.", why: "‘가게가 벌써 닫았어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "오늘 날씨 좋아요.", answers: ["Hoje está bom tempo.", "Está bom tempo hoje."],
        wrong: { "hoje é bom tempo": "날씨는 지금의 상태라 está예요." },
        tip: { en: "Hoje está um dia lindo.", why: "‘오늘 날씨 정말 좋다’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 수프 정말 맛있어요.", answers: ["Esta sopa está ótima.", "Esta sopa está deliciosa."],
        wrong: { "esta sopa é ótima": "지금 먹는 음식 맛은 está예요." },
        tip: { en: "Que sopa tão boa!", why: "que ... tão은 ‘정말 ~한 ...!’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오늘 바람 불어요.", answers: ["Hoje está vento.", "Está vento hoje.", "Hoje está muito vento."],
        wrong: { "hoje é vento": "날씨는 지금의 상태라 está예요." },
        tip: { en: "Hoje há muito vento.", why: "há vento도 ‘바람이 불어요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "방이 아주 깨끗해요.", answers: ["O quarto está muito limpo."],
        wrong: { "o quarto está muito limpa": "quarto는 남성 명사라 limpo예요." },
        tip: { en: "O quarto está impecável.", why: "impecável은 ‘흠잡을 데 없는’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "오늘 더워요.", answers: ["Está calor hoje.", "Hoje está calor."],
        ctx: { lead: "frio 대신 ‘더위(calor)’를 넣어 보세요.", en: "Está frio hoje." },
        wrong: { "hoje é calor": "날씨는 지금의 상태라 está예요." },
        tip: { en: "Hoje faz muito calor.", why: "faz calor도 ‘더워요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "비 와.", answers: ["Está a chover."],
        dialog: { a: "Como está o tempo aí?", aKo: "거기 날씨 어때?" },
        wrong: { "está chovendo": "-ndo는 브라질식이에요. 포르투갈에서는 está a chover예요." },
        tip: { en: "Chove muito.", why: "‘비가 많이 와’라는 말이에요." } }
    ]
  };
})(window.EP);
