/* 포르투갈어(유럽) 세션 16. Gostava de ~. (형식은 pattern1.js 위쪽 설명과 같다)
   Gostaria de도 맞는 말이라 빈칸 정답으로 인정한다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[16] = {
    no: 16, form: "Gostava de ~.", stem: "Gostava de/Gostava do/Gostava da/Gostava", subject: "eu", meaning: "~하고 싶어요 (정중하게)",
    hint: "Gostava de + 동사원형/명사",
    intro: {
      blocks: [["Gostava", "나는 좋아할 텐데"], ["de", "~을"], ["~", "동사원형 / 무엇"]],
      lines: [
        "Gostava de는 gostar의 지난 형태지만, ‘~하고 싶어요’를 부드럽게 말할 때 써요.",
        "Quero보다 정중해서 가게나 처음 만난 사람에게 좋아요.",
        "Gosto de(좋아해요)와 헷갈리지 마세요: Gostava de ir = 가고 싶어요."
      ],
      examples: [
        { en: "Gostava de reservar uma mesa.", ko: "테이블을 예약하고 싶어요." },
        { en: "Gostava de visitar Sintra.", ko: "신트라에 가 보고 싶어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "포르투에 가 보고 싶어요.", before: "", after: "de visitar o Porto.", answers: ["Gostava", "Gostaria"],
        wrong: { "gosto": "gosto de는 ‘좋아해요’예요. ‘~하고 싶어요’는 gostava de예요." },
        tip: { en: "Queria visitar o Porto.", why: "queria도 ‘~하고 싶어요’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "방을 하나 예약하고 싶어요.", before: "Gostava de reservar um", after: ".", answers: ["quarto"],
        wrong: { "habitación": "habitación은 스페인어예요. 포르투갈어는 quarto예요." },
        tip: { en: "Queria reservar um quarto.", why: "queria도 ‘~하고 싶어요’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "커피 한 잔 마시고 싶어요.", before: "Gostava", after: "tomar um café.", answers: ["de"],
        wrong: { "a": "gostar는 a가 아니라 de와 함께 써요." },
        tip: { en: "Apetece-me um café.", why: "apetecer는 ‘~이 당기다’예요. 다음 세션에서 배워요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "포르투갈어를 더 잘하고 싶어요.", before: "Gostava de", after: "melhor português.", answers: ["falar"],
        wrong: { "falo": "de 뒤에는 동사원형을 써요: falar." },
        tip: { en: "Quero melhorar o meu português.", why: "melhorar는 ‘나아지게 하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "창가 테이블로 주세요.", before: "Gostava de uma mesa à", after: ".", answers: ["janela"],
        wrong: { "ventana": "ventana는 스페인어예요. 포르투갈어는 janela예요." },
        tip: { en: "Pode ser uma mesa à janela?", why: "‘창가 테이블 될까요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "두 명 테이블 예약하고 싶어요.", answers: ["Gostava de reservar uma mesa para dois.", "Gostava de reservar uma mesa para duas pessoas."],
        wrong: { "gostava reservar uma mesa para dois": "gostar 뒤에는 de가 필요해요: gostava de." },
        tip: { en: "Queria uma mesa para dois.", why: "queria도 ‘~ 주세요’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "리스본에 살고 싶어요.", answers: ["Gostava de viver em Lisboa."], alts: ["Gostava de morar em Lisboa."],
        wrong: { "gosto de viver em lisboa": "gosto de는 ‘(지금) 사는 게 좋아요’예요. ‘살고 싶어요’는 gostava de예요." },
        tip: { en: "O meu sonho é viver em Lisboa.", why: "‘리스본에 사는 게 꿈이에요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이거 입어 보고 싶어요.", answers: ["Gostava de experimentar isto."],
        wrong: { "gostava de provar isto": "옷을 입어 볼 때는 experimentar예요. provar는 맛볼 때 써요." },
        tip: { en: "Posso experimentar isto?", why: "‘입어 봐도 돼요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "더 알고 싶어요.", answers: ["Gostava de saber mais."],
        wrong: { "gostava de sei mais": "de 뒤에는 동사원형을 써요: saber." },
        tip: { en: "Queria saber mais.", why: "queria도 ‘~하고 싶어요’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "파두를 들어 보고 싶어요.", answers: ["Gostava de ouvir fado.", "Gostava de ouvir o fado."],
        ctx: { lead: "visitar Sintra 대신 ‘파두를 듣다(ouvir fado)’를 넣어 보세요.", en: "Gostava de visitar Sintra." },
        wrong: { "gostava de ouço fado": "de 뒤에는 동사원형을 써요: ouvir." },
        tip: { en: "Queria ouvir fado.", why: "queria도 ‘~하고 싶어요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "이 바지를 바꾸고 싶어요.", answers: ["Gostava de trocar estas calças."],
        dialog: { a: "Em que posso ajudar?", aKo: "무엇을 도와드릴까요?" },
        wrong: { "gostava de trocar estes calças": "calças는 여성 명사라 estas예요." },
        tip: { en: "Queria trocar estas calças.", why: "queria도 ‘~하고 싶어요’예요." } }
    ]
  };
})(window.EP);
