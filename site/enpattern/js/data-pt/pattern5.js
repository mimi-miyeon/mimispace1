/* 포르투갈어(유럽) 세션 5. Quero ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[5] = {
    no: 5, form: "Quero ~.", stem: "Quero", subject: "eu", meaning: "~을 원해요 / ~하고 싶어요",
    hint: "Quero + 명사/동사원형",
    intro: {
      blocks: [["Quero", "나는 원한다 (querer)"], ["~", "무엇 / 동사원형"]],
      lines: [
        "Quero는 querer(원하다) 동사의 ‘나’ 형태예요.",
        "명사를 붙이면 ‘~을 원해요’, 동사원형을 붙이면 ‘~하고 싶어요’예요.",
        "가게에서 주문할 때 Quero는 조금 직설적이에요. 정중하게는 Queria(다음 세션)."
      ],
      examples: [
        { en: "Quero um café.", ko: "커피 한 잔 원해요." },
        { en: "Quero ir a Lisboa.", ko: "리스본에 가고 싶어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 포르투갈어 배우고 싶어.", before: "", after: "aprender português.", answers: ["Quero"],
        wrong: { "quer": "quer는 ‘그/그녀는 원한다’예요. ‘나는’은 quero예요.", "gosto": "gosto는 ‘좋아해요’예요. ‘~하고 싶어요’는 quero예요." },
        tip: { en: "Gostava de aprender português.", why: "gostava de는 ‘~하고 싶어요’의 부드러운 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 집에 가고 싶어.", before: "Quero", after: "para casa.", answers: ["ir"],
        wrong: { "vou": "quero 뒤에는 동사원형을 써요: ir." },
        tip: { en: "Quero ir embora.", why: "ir embora는 ‘(여기를) 떠나다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 자고 싶어.", before: "Quero", after: ".", answers: ["dormir"],
        wrong: { "durmo": "quero 뒤에는 동사원형을 써요: dormir." },
        tip: { en: "Estou com sono.", why: "‘졸려요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 새 휴대폰 갖고 싶어.", before: "Quero um telemóvel", after: ".", answers: ["novo"],
        wrong: { "nova": "telemóvel은 남성 명사라 novo예요.", "celular": "celular는 브라질 말이에요. 포르투갈에서는 telemóvel이에요." },
        tip: { en: "Preciso de um telemóvel novo.", why: "precisar de는 ‘~이 필요하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그거 원하지 않아.", before: "", after: "quero isso.", answers: ["Não"],
        wrong: { "no": "부정은 não예요. 동사 앞에 써요." },
        tip: { en: "Não, obrigado.", why: "‘아니요, 괜찮아요’라는 거절이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 커피 한 잔 원해.", answers: ["Quero um café."],
        wrong: { "quero uma café": "café는 남성 명사라 um이에요." },
        tip: { en: "Um café, por favor.", why: "가게에서는 이렇게 짧게도 말해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 여행하고 싶어.", answers: ["Quero viajar."],
        wrong: { "quero viajo": "quero 뒤에는 동사원형을 써요: viajar." },
        tip: { en: "Tenho vontade de viajar.", why: "ter vontade de는 ‘~하고 싶은 마음이 있다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 포르투에 가고 싶어.", answers: ["Quero ir ao Porto.", "Quero ir para o Porto."],
        wrong: { "quero ir a porto": "Porto는 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Quero conhecer o Porto.", why: "conhecer는 ‘(가서) 알게 되다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그거 사고 싶지 않아.", answers: ["Não quero comprar isso."],
        wrong: { "quero não comprar isso": "não는 quero 앞에 써요: não quero." },
        tip: { en: "Não preciso disso.", why: "‘그거 필요 없어요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 차 한 잔 원해.", answers: ["Quero um chá."],
        ctx: { lead: "café 대신 ‘차(chá)’를 넣어 보세요.", en: "Quero um café." },
        wrong: { "quero uma chá": "chá는 남성 명사라 um이에요." },
        tip: { en: "Um chá, se faz favor.", why: "se faz favor는 포르투갈식 ‘부탁해요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "바다에 가고 싶어요.", answers: ["Quero ir à praia."],
        dialog: { a: "O que quer fazer hoje?", aKo: "오늘 뭐 하고 싶어요?" },
        wrong: { "quero ir na praia": "‘~에 가다’는 em이 아니라 a를 써요: à praia." },
        tip: { en: "Apetece-me ir à praia.", why: "apetecer는 포르투갈식 ‘~하고 싶다’예요." } }
    ]
  };
})(window.EP);
