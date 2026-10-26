/* 포르투갈어(유럽) 세션 12. Preciso de ~. (형식은 pattern1.js 위쪽 설명과 같다)
   stem: de가 뒤 말과 합쳐지는 모양(do, da)과 Preciso만 있는 모양(disso 등)도 핵심 부분으로 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[12] = {
    no: 12, form: "Preciso de ~.", stem: "Preciso de/Preciso do/Preciso da/Preciso", subject: "eu", meaning: "~이 필요해요 / ~해야 해요",
    hint: "Preciso de + 명사/동사원형",
    intro: {
      blocks: [["Preciso", "나는 필요하다"], ["de", "~이"], ["~", "무엇 / 동사원형"]],
      lines: [
        "precisar(필요하다)는 de와 함께 써요: Preciso de ajuda.",
        "포르투갈에서는 동사원형 앞에도 de를 써요: Preciso de dormir.",
        "de 뒤에 관사가 오면 줄여요: de + o = do, de + a = da."
      ],
      examples: [
        { en: "Preciso de ajuda.", ko: "도움이 필요해요." },
        { en: "Preciso de ir ao banco.", ko: "은행에 가야 해요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 시간이 필요해.", before: "Preciso", after: "tempo.", answers: ["de"],
        wrong: { "do": "‘시간’ 전반을 말할 때는 관사 없이 de tempo예요.", "a": "precisar는 a가 아니라 de와 함께 써요." },
        tip: { en: "Preciso de mais tempo.", why: "mais는 ‘더’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 쉬어야 해.", before: "Preciso de", after: ".", answers: ["descansar"],
        wrong: { "descanso": "de 뒤에는 동사원형을 써요: descansar." },
        tip: { en: "Preciso de uma pausa.", why: "pausa는 ‘잠깐 쉬는 것’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 의사가 필요해.", before: "Preciso de um", after: ".", answers: ["médico"],
        wrong: { "doctor": "doctor는 영어·스페인어예요. 포르투갈어는 médico예요." },
        tip: { en: "Preciso de ir ao médico.", why: "ir ao médico는 ‘병원에 가다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그 열쇠가 필요해.", before: "Preciso", after: "chave.", answers: ["da"],
        wrong: { "de": "정해진 그 열쇠(a chave)라 de + a = da예요.", "do": "chave는 여성 명사라 do가 아니라 da예요." },
        tip: { en: "Preciso da chave do carro.", why: "chave do carro는 ‘차 열쇠’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 일찍 일어나야 해.", before: "Preciso de", after: "cedo.", answers: ["acordar"],
        wrong: { "acordo": "de 뒤에는 동사원형을 써요: acordar." },
        tip: { en: "Tenho de acordar cedo.", why: "tenho de도 ‘~해야 해요’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 물이 필요해.", answers: ["Preciso de água."],
        wrong: { "preciso água": "포르투갈에서는 precisar 뒤에 꼭 de를 써요." },
        tip: { en: "Preciso de beber água.", why: "beber는 ‘마시다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 지금 가야 해.", answers: ["Preciso de ir agora.", "Agora preciso de ir."],
        wrong: { "preciso ir agora": "포르투갈에서는 동사원형 앞에도 de를 써요: preciso de ir. 빼는 건 브라질식이에요." },
        tip: { en: "Tenho de ir agora.", why: "tenho de도 ‘~해야 해요’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 새 컴퓨터가 필요해.", answers: ["Preciso de um computador novo.", "Preciso de um novo computador."],
        wrong: { "preciso de uma computador novo": "computador는 남성 명사라 um이에요." },
        tip: { en: "Preciso de trocar de computador.", why: "trocar de는 ‘~을 바꾸다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그거 필요 없어.", answers: ["Não preciso disso."],
        wrong: { "não preciso isso": "precisar 뒤에는 de가 필요해요: de + isso = disso." },
        tip: { en: "Não é preciso.", why: "‘필요 없어요’라는 짧은 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 우산이 필요해.", answers: ["Preciso de um guarda-chuva."],
        ctx: { lead: "médico 대신 ‘우산(guarda-chuva)’을 넣어 보세요.", en: "Preciso de um médico." },
        wrong: { "preciso de uma guarda-chuva": "guarda-chuva는 남성 명사라 um이에요." },
        tip: { en: "Preciso dum guarda-chuva.", why: "de + um을 dum으로 줄이기도 해요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 봉투 하나 필요해요.", answers: ["Sim, preciso de um saco."],
        dialog: { a: "Precisa de alguma coisa?", aKo: "뭐 필요한 거 있으세요?" },
        wrong: { "sim preciso de uma saco": "saco는 남성 명사라 um이에요.", "sim preciso de uma sacola": "sacola는 브라질에서 주로 써요. 포르투갈에서는 saco예요." },
        tip: { en: "Sim, pode dar-me um saco?", why: "‘봉투 하나 주실래요?’라는 말이에요." } }
    ]
  };
})(window.EP);
