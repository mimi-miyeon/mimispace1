/* 포르투갈어(유럽) 세션 63. Não posso ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[63] = {
    no: 63, form: "Não posso ~.", stem: "Não posso/não posso/Não podes/Não se pode", subject: "eu", meaning: "~할 수 없어요",
    hint: "Não posso + 동사원형",
    intro: {
      blocks: [["Não posso", "나는 할 수 없다"], ["~", "동사원형"]],
      lines: [
        "Não posso + 동사원형은 ‘~할 수 없어요, 못 해요’예요: Não posso ir.(못 가요)",
        "사정이 있거나 허락이 안 될 때 써요. 해 봐도 안 되는 건 não consigo예요.",
        "‘여기서는 ~하면 안 돼요’는 Não se pode ~예요: Não se pode fumar aqui."
      ],
      examples: [
        { en: "Hoje não posso.", ko: "오늘은 안 돼요." },
        { en: "Não se pode fumar aqui.", ko: "여기서는 담배 피우면 안 돼요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 오늘 못 가.", before: "Hoje não", after: "ir.", answers: ["posso"],
        wrong: { "puedo": "puedo는 스페인어예요. 포르투갈어는 posso예요.", "pode": "‘나는’이면 posso예요." },
        tip: { en: "Hoje não dá.", why: "não dá는 포르투갈식 ‘안 돼’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "여기서 사진 찍으면 안 돼요.", before: "Não se pode tirar", after: "aqui.", answers: ["fotografias", "fotos"],
        wrong: { "fotografia": "‘사진 찍기’ 전반이라 여럿 fotografias예요." },
        tip: { en: "É proibido tirar fotografias.", why: "proibido는 ‘금지된’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 여기 주차하면 안 돼.", before: "Não", after: "estacionar aqui.", answers: ["podes"],
        wrong: { "posso": "‘너는’이면 podes예요. posso는 ‘나는’이에요." },
        tip: { en: "Aqui é proibido estacionar.", why: "proibido는 ‘금지된’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "미안, 너 도와줄 수가 없어.", before: "Desculpa, não posso", after: ".", answers: ["ajudar-te"],
        wrong: { "te ajudar": "포르투갈에서는 te를 동사 뒤에 붙여요: ajudar-te." },
        tip: { en: "Desculpa, não dá.", why: "não dá는 ‘안 돼’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그거 못 먹어(알레르기).", before: "Não posso", after: "isso.", answers: ["comer"],
        wrong: { "como": "posso 뒤에는 동사원형을 써요: comer." },
        tip: { en: "Sou alérgico a isso.", why: "alérgico a는 ‘~에 알레르기가 있는’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 내일 못 와.", answers: ["Amanhã não posso vir.", "Não posso vir amanhã."],
        wrong: { "amanhã não posso venho": "posso 뒤에는 동사원형을 써요: vir." },
        tip: { en: "Amanhã não dá.", why: "não dá는 ‘안 돼’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 지금 통화 못 해.", answers: ["Agora não posso falar.", "Não posso falar agora."],
        wrong: { "agora não posso hablar": "hablar는 스페인어예요. 포르투갈어는 falar예요." },
        tip: { en: "Agora não dá, ligo-te depois.", why: "ligo-te depois는 ‘나중에 전화할게’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "믿을 수가 없어.", answers: ["Não posso acreditar.", "Não posso acreditar nisso."],
        wrong: { "não posso creer": "creer는 스페인어예요. 포르투갈어는 acreditar예요." },
        tip: { en: "Não acredito!", why: "‘믿을 수 없어!’라는 짧은 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "여기서 음식 먹으면 안 돼요.", answers: ["Não se pode comer aqui."], subject: "",
        wrong: { "não se puede comer aqui": "puede는 스페인어예요. 포르투갈어는 pode예요." },
        tip: { en: "É proibido comer aqui.", why: "proibido는 ‘금지된’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이번 주말엔 안 돼요.", answers: ["Este fim de semana não posso.", "Não posso este fim de semana."],
        ctx: { lead: "Hoje 대신 ‘이번 주말(este fim de semana)’을 넣어 보세요.", en: "Hoje não posso." },
        wrong: { "este fim de semana no puedo": "no puedo는 스페인어예요. 포르투갈어는 não posso예요." },
        tip: { en: "Este fim de semana não dá.", why: "não dá는 ‘안 돼’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 오늘은 못 가.", answers: ["Desculpa, hoje não posso.", "Desculpa, hoje não posso ir."],
        dialog: { a: "Vens jantar connosco?", aKo: "우리랑 저녁 먹으러 올래?" },
        wrong: { "desculpa hoje no puedo": "no puedo는 스페인어예요. 포르투갈어는 não posso예요." },
        tip: { en: "Desculpa, hoje não dá.", why: "não dá는 ‘안 돼’예요." } }
    ]
  };
})(window.EP);
