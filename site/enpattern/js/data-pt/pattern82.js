/* 포르투갈어(유럽) 세션 82. ~ sem ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[82] = {
    no: 82, form: "~ sem ~.", stem: "sem/Sem", meaning: "~ 없이 / ~하지 않고",
    hint: "sem + 명사/동사원형",
    intro: {
      blocks: [["~", "무엇 / 문장"], ["sem", "~ 없이"], ["~", "명사 / 동사원형"]],
      lines: [
        "sem + 명사는 ‘~ 없이’예요: café sem açúcar(설탕 없는 커피).",
        "sem + 동사원형은 ‘~하지 않고’예요: Saiu sem dizer nada.(아무 말 없이 나갔어)",
        "주문할 때 아주 많이 써요: sem gelo(얼음 없이), sem gás(탄산 없이)."
      ],
      examples: [
        { en: "Um café sem açúcar, por favor.", ko: "설탕 없는 커피 주세요." },
        { en: "Saiu sem dizer nada.", ko: "아무 말 없이 나갔어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "얼음 없이 주세요.", before: "", after: "gelo, por favor.", answers: ["Sem"],
        wrong: { "sin": "sin은 스페인어예요. 포르투갈어는 sem이에요.", "com": "com은 ‘~와 함께’예요. ‘없이’는 sem이에요." },
        tip: { en: "Não ponha gelo, por favor.", why: "‘얼음 넣지 마세요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "탄산 없는 물 주세요.", before: "Queria água sem", after: ".", answers: ["gás"],
        wrong: { "gaz": "gaz는 프랑스어예요. 포르투갈어는 gás예요." },
        tip: { en: "Água lisa, por favor.", why: "água lisa는 포르투갈식 ‘탄산 없는 물’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "아침 안 먹고 나갔어.", before: "Saí sem", after: "o pequeno-almoço.", answers: ["tomar", "comer"],
        wrong: { "tomei": "sem 뒤에는 동사원형을 써요: tomar." },
        tip: { en: "Saí de casa em jejum.", why: "em jejum은 ‘빈속으로’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 없이는 못 해.", before: "Não consigo", after: "ti.", answers: ["sem"],
        wrong: { "sin": "sin은 스페인어예요. 포르투갈어는 sem이에요." },
        tip: { en: "Preciso de ti.", why: "‘네가 필요해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "돈 없이 어떻게 살아?", before: "Como se vive sem", after: "?", answers: ["dinheiro"],
        wrong: { "dinero": "dinero는 스페인어예요. 포르투갈어는 dinheiro예요." },
        tip: { en: "O dinheiro faz falta.", why: "fazer falta는 ‘아쉽다, 필요하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "우유 없는 커피 주세요.", answers: ["Um café sem leite, por favor.", "Queria um café sem leite, por favor.", "Queria um café sem leite."],
        wrong: { "um café sin leite por favor": "sin은 스페인어예요. 포르투갈어는 sem이에요." },
        tip: { en: "Um café simples, por favor.", why: "simples는 ‘아무것도 안 넣은’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 사람 인사도 안 하고 갔어.", answers: ["Ele foi embora sem dizer adeus.", "Foi embora sem dizer adeus."],
        wrong: { "ele foi embora sem diz adeus": "sem 뒤에는 동사원형을 써요: dizer." },
        tip: { en: "Ele nem se despediu.", why: "despedir-se는 ‘작별 인사를 하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 안경 없이는 아무것도 안 보여.", answers: ["Sem óculos não vejo nada.", "Não vejo nada sem óculos."],
        wrong: { "sem óculos vejo nada": "‘아무것도 안’은 não ... nada예요." },
        tip: { en: "Preciso dos óculos para ver.", why: "para ver는 ‘보려면’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "생각 안 하고 말했어.", answers: ["Falei sem pensar."],
        wrong: { "falei sem penso": "sem 뒤에는 동사원형을 써요: pensar." },
        tip: { en: "Disse aquilo sem querer.", why: "sem querer는 ‘일부러가 아니라’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "얼음 없는 콜라 주세요.", answers: ["Uma cola sem gelo, por favor.", "Uma Coca-Cola sem gelo, por favor."],
        ctx: { lead: "café sem açúcar 대신 ‘얼음 없는 콜라(cola sem gelo)’를 넣어 보세요.", en: "Um café sem açúcar, por favor." },
        wrong: { "una cola sin gelo por favor": "una, sin은 스페인어예요. 포르투갈어는 uma, sem이에요." },
        tip: { en: "Sem gelo, por favor.", why: "짧게 이렇게 말해도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "설탕 없이.", answers: ["Sem açúcar.", "Sem açúcar, por favor."],
        dialog: { a: "Como queres o café?", aKo: "커피 어떻게 해 줄까?" },
        wrong: { "sin azúcar": "sin azúcar는 스페인어예요. 포르투갈어는 sem açúcar예요." },
        tip: { en: "Simples, obrigado.", why: "simples는 ‘아무것도 안 넣은’이에요." } }
    ]
  };
})(window.EP);
