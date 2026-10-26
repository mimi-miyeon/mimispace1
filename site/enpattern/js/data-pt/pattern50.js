/* 포르투갈어(유럽) 세션 50. Prefiro ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[50] = {
    no: 50, form: "Prefiro ~.", stem: "Prefiro/Preferes/Preferimos", subject: "eu", meaning: "~이 더 좋아요",
    hint: "Prefiro + 명사/동사원형",
    intro: {
      blocks: [["Prefiro", "나는 더 좋아한다"], ["~", "명사 / 동사원형"]],
      lines: [
        "Prefiro는 preferir의 ‘나’ 형태예요. ‘~이 더 좋아요’예요: Prefiro chá.",
        "둘을 비교하면 Prefiro A a B(B보다 A가 좋아요): Prefiro chá a café.",
        "동사원형도 붙여요: Prefiro ficar em casa."
      ],
      examples: [
        { en: "Prefiro chá.", ko: "차가 더 좋아요." },
        { en: "Prefiro ficar em casa.", ko: "집에 있는 게 더 좋아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 커피보다 차가 좋아.", before: "Prefiro chá", after: "café.", answers: ["a"],
        wrong: { "que": "preferir로 비교할 때는 a예요: prefiro A a B.", "do que": "preferir로 비교할 때는 a예요: prefiro A a B." },
        tip: { en: "Gosto mais de chá do que de café.", why: "gosto mais de도 ‘~보다 ~가 좋아’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "우리는 걸어가는 게 더 좋아.", before: "", after: "ir a pé.", answers: ["Preferimos"],
        wrong: { "prefiro": "‘우리는’이면 preferimos예요." },
        tip: { en: "Vamos a pé.", why: "‘걸어가자’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭐가 더 좋아?", before: "O que", after: "?", answers: ["preferes"],
        wrong: { "prefieres": "prefieres는 스페인어예요. 포르투갈어는 preferes예요.", "prefiro": "친구에게 묻는 거라 preferes예요." },
        tip: { en: "Qual é que preferes?", why: "qual은 ‘어느 것’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 바다보다 산이 좋아.", before: "Prefiro a montanha", after: "praia.", answers: ["à"],
        wrong: { "a": "praia 앞에 관사 a가 붙어서 a + a = à예요.", "que a": "preferir로 비교할 때는 a예요: à praia." },
        tip: { en: "Gosto mais da montanha.", why: "‘산이 더 좋아’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그거 얘기 안 하는 게 좋겠어.", before: "Prefiro não", after: "sobre isso.", answers: ["falar"],
        wrong: { "hablar": "hablar는 스페인어예요. 포르투갈어는 falar예요." },
        tip: { en: "Não quero falar disso.", why: "‘그 얘기 하기 싫어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 고기보다 생선이 좋아.", answers: ["Prefiro peixe a carne."],
        wrong: { "prefiro peixe que carne": "preferir로 비교할 때는 a예요: peixe a carne." },
        tip: { en: "Gosto mais de peixe do que de carne.", why: "gosto mais de도 ‘~이 더 좋아’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 기차 타고 가는 게 더 좋아.", answers: ["Prefiro ir de comboio."],
        wrong: { "prefiro ir em comboio": "교통수단은 de로 말해요: de comboio." },
        tip: { en: "É melhor ir de comboio.", why: "é melhor는 ‘~하는 게 낫다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 지금은 안 먹을래.", answers: ["Prefiro não comer agora.", "Agora prefiro não comer."],
        wrong: { "prefiro não como agora": "prefiro 뒤에는 동사원형을 써요: comer." },
        tip: { en: "Agora não me apetece comer.", why: "não me apetece는 ‘~하기 싫어’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "넌 어느 게 더 좋아?", answers: ["Qual preferes?", "Qual é que preferes?"], subject: "tu",
        wrong: { "qual prefiro": "친구에게 묻는 거라 preferes예요." },
        tip: { en: "De qual gostas mais?", why: "gostar mais de도 ‘~이 더 좋다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "물이 더 좋아요.", answers: ["Prefiro água."],
        ctx: { lead: "chá 대신 ‘물(água)’을 넣어 보세요.", en: "Prefiro chá." },
        wrong: { "prefiero água": "prefiero는 스페인어예요. 포르투갈어는 prefiro예요." },
        tip: { en: "Para mim, água.", why: "‘저는 물로요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "화이트가 더 좋아.", answers: ["Prefiro branco.", "Prefiro vinho branco.", "Prefiro o branco."],
        dialog: { a: "Queres vinho tinto ou branco?", aKo: "레드 와인 마실래, 화이트 마실래?" },
        wrong: { "prefiro blanco": "blanco는 스페인어예요. 포르투갈어는 branco예요." },
        tip: { en: "Branco, por favor.", why: "‘화이트로 주세요’라는 말이에요." } }
    ]
  };
})(window.EP);
