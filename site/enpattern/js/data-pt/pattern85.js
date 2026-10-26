/* 포르투갈어(유럽) 세션 85. Pode ser ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[85] = {
    no: 85, form: "Pode ser ~.", stem: "Pode ser/pode ser", meaning: "~(으)로 할게요 / ~ 될까요?",
    hint: "Pode ser + 명사",
    intro: {
      blocks: [["Pode ser", "~이어도 된다"], ["~", "고른 것 / 때"]],
      lines: [
        "Pode ser ~는 ‘~로 할게요, ~도 괜찮아요’예요. 고를 때 써요: Pode ser este.(이걸로 할게요)",
        "물음표를 붙이면 ‘~ 될까요?’예요: Pode ser às três?(3시 괜찮아요?)",
        "한마디로 ‘좋아요, 그래요’는 Pode ser!예요."
      ],
      examples: [
        { en: "Pode ser este.", ko: "이걸로 할게요." },
        { en: "Pode ser amanhã?", ko: "내일 될까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "커피로 할게요.", before: "", after: "ser um café.", answers: ["Pode"],
        wrong: { "puede": "puede는 스페인어예요. 포르투갈어는 pode예요.", "posso": "posso는 ‘제가 ~해도 돼요’예요. ‘~로 할게요’는 pode ser예요." },
        tip: { en: "Um café, por favor.", why: "짧게 이렇게 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "5시 괜찮아요?", before: "Pode ser às", after: "?", answers: ["cinco", "5"],
        wrong: { "cinq": "cinq는 프랑스어예요. 포르투갈어는 cinco예요." },
        tip: { en: "Dá-lhe jeito às cinco?", why: "dar jeito는 ‘편하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "좋아, 그러자!", before: "Pode", after: "!", answers: ["ser"],
        wrong: { "estar": "‘좋아, 그러자’는 pode ser예요." },
        tip: { en: "Combinado!", why: "‘좋아, 그렇게 해!’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "카드로 해도 될까요?", before: "Pode ser com", after: "?", answers: ["cartão"],
        wrong: { "tarjeta": "tarjeta는 스페인어예요. 포르투갈어는 cartão이에요." },
        tip: { en: "Posso pagar com cartão?", why: "‘카드로 계산해도 돼요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그럴 수도 있지.", before: "", after: "ser.", answers: ["Pode"],
        wrong: { "puede": "puede는 스페인어예요. 포르투갈어는 pode예요." },
        tip: { en: "É possível.", why: "‘가능해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "저걸로 할게요.", answers: ["Pode ser aquele.", "Pode ser aquela."],
        wrong: { "puede ser aquel": "스페인어예요. 포르투갈어는 pode ser aquele예요." },
        tip: { en: "Levo aquele.", why: "levar는 ‘(사서) 가져가다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "다음 주 될까요?", answers: ["Pode ser na próxima semana?"],
        wrong: { "pode ser a próxima semana": "‘다음 주에’는 na próxima semana예요." },
        tip: { en: "E na próxima semana?", why: "‘다음 주는요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "물로 할게요.", answers: ["Pode ser água.", "Pode ser uma água."],
        wrong: { "puede ser agua": "스페인어예요. 포르투갈어는 pode ser água예요." },
        tip: { en: "Para mim, água.", why: "‘저는 물로요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "작은 걸로 될까요?", answers: ["Pode ser o pequeno?", "Pode ser um pequeno?"],
        wrong: { "posso ser o pequeno": "‘~로 될까요’는 pode ser예요." },
        tip: { en: "Queria o pequeno.", why: "queria는 정중한 ‘주세요’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "빨간 걸로 할게요.", answers: ["Pode ser o vermelho."],
        ctx: { lead: "este 대신 ‘빨간 거(o vermelho)’를 넣어 보세요.", en: "Pode ser este." },
        wrong: { "pode ser o rojo": "rojo는 스페인어예요. 포르투갈어는 vermelho예요." },
        tip: { en: "Levo o vermelho.", why: "levar는 ‘(사서) 가져가다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "차로 할게요.", answers: ["Pode ser chá.", "Pode ser um chá."],
        dialog: { a: "Café ou chá?", aKo: "커피, 차?" },
        wrong: { "puede ser té": "té는 스페인어예요. 포르투갈어는 chá예요." },
        tip: { en: "Chá, se faz favor.", why: "se faz favor는 포르투갈식 ‘부탁해요’예요." } }
    ]
  };
})(window.EP);
