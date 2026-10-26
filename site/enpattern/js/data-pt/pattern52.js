/* 포르투갈어(유럽) 세션 52. Gosto mais de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[52] = {
    no: 52, form: "Gosto mais de ~.", stem: "Gosto mais de/Gosto mais do/Gosto mais da/Gosto mais desta/gostas mais/Gosto mais", subject: "eu", meaning: "~을 더 좋아해요",
    hint: "Gosto mais de + 명사",
    intro: {
      blocks: [["Gosto mais", "나는 더 좋아한다"], ["de", "~을"], ["~", "무엇"]],
      lines: [
        "Gosto mais de ~는 ‘~을 더 좋아해요’예요: Gosto mais de café.",
        "비교하면 Gosto mais de A do que de B예요: Gosto mais de gatos do que de cães.",
        "de 뒤의 관사는 줄여 써요: Gosto mais do verão(o verão)."
      ],
      examples: [
        { en: "Gosto mais de café.", ko: "커피를 더 좋아해요." },
        { en: "Gosto mais do verão do que do inverno.", ko: "겨울보다 여름이 더 좋아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 개보다 고양이가 더 좋아.", before: "Gosto mais de gatos do que", after: "cães.", answers: ["de"],
        wrong: { "a": "gostar mais de로 비교할 때는 do que de예요." },
        tip: { en: "Prefiro gatos a cães.", why: "prefiro A a B도 ‘B보다 A가 좋아’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어느 게 더 좋아?", before: "De qual gostas", after: "?", answers: ["mais"],
        wrong: { "más": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Qual preferes?", why: "preferir는 ‘더 좋아하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 바다가 더 좋아.", before: "Gosto mais", after: "mar.", answers: ["do"],
        wrong: { "de": "mar 앞에 관사 o가 붙어서 de + o = do예요.", "da": "mar는 남성 명사라 do예요." },
        tip: { en: "Prefiro o mar.", why: "preferir는 ‘더 좋아하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 걷는 게 더 좋아.", before: "Gosto mais de", after: ".", answers: ["andar", "caminhar"],
        wrong: { "ando": "de 뒤에는 동사원형을 써요: andar." },
        tip: { en: "Prefiro ir a pé.", why: "a pé는 ‘걸어서’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 엄마는 차를 더 좋아해.", before: "A minha mãe", after: "mais de chá.", answers: ["gosta"],
        wrong: { "gosto": "‘엄마는’이면 gosta예요. gosto는 ‘나는’이에요." },
        tip: { en: "A minha mãe prefere chá.", why: "prefere는 ‘더 좋아해요’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 고기보다 생선이 더 좋아.", answers: ["Gosto mais de peixe do que de carne.", "Gosto mais de peixe que de carne."],
        wrong: { "gosto mais de peixe do que carne": "비교 대상 앞에도 de가 필요해요: do que de carne." },
        tip: { en: "Prefiro peixe a carne.", why: "prefiro A a B도 ‘B보다 A가 좋아’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 이 노래가 더 좋아.", answers: ["Gosto mais desta canção."],
        wrong: { "gosto mais deste canção": "canção는 여성 명사라 desta예요." },
        tip: { en: "Prefiro esta canção.", why: "preferir는 ‘더 좋아하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 아침보다 밤이 더 좋아.", answers: ["Gosto mais da noite do que da manhã."],
        wrong: { "gosto mais do noite do que do manhã": "noite, manhã는 여성 명사라 da예요." },
        tip: { en: "Sou mais uma pessoa da noite.", why: "‘나는 밤형 인간이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 뭐가 더 좋아?", answers: ["De que gostas mais?", "Do que gostas mais?"], subject: "tu",
        wrong: { "que gostas mais": "gostar 뒤에는 de가 필요해요: de que gostas mais?" },
        tip: { en: "O que preferes?", why: "preferir는 ‘더 좋아하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 맥주가 더 좋아.", answers: ["Gosto mais de cerveja."],
        ctx: { lead: "café 대신 ‘맥주(cerveja)’를 넣어 보세요.", en: "Gosto mais de café." },
        wrong: { "gosto más de cerveja": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Prefiro cerveja.", why: "preferir는 ‘더 좋아하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 근데 포르투가 더 좋아.", answers: ["Sim, mas gosto mais do Porto."],
        dialog: { a: "Gostas de Lisboa?", aKo: "리스본 좋아해?" },
        wrong: { "sim mas gosto mais de porto": "Porto는 관사 o가 붙어서 de + o = do Porto예요." },
        tip: { en: "Sim, mas prefiro o Porto.", why: "preferir는 ‘더 좋아하다’예요." } }
    ]
  };
})(window.EP);
