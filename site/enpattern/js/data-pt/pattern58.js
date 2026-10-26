/* 포르투갈어(유럽) 세션 58. Podia ~? (형식은 pattern1.js 위쪽 설명과 같다)
   상대에게 부탁하는 말이 대부분이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[58] = {
    no: 58, form: "Podia ~?", stem: "Podia/Podias", meaning: "~해 주실 수 있을까요?",
    hint: "Podia + 동사원형?",
    intro: {
      blocks: [["Podia", "~할 수 있을까요"], ["~", "동사원형"]],
      lines: [
        "Podia는 poder의 지난 형태지만, ‘~해 주실 수 있을까요?’라는 부드러운 부탁으로 써요.",
        "Pode ~?보다 더 정중해요: Podia ajudar-me? 친구에게는 Podias ~?예요.",
        "‘(그때) ~할 수 있었어요’라는 뜻도 있어요: Podia ir, mas não fui."
      ],
      examples: [
        { en: "Podia ajudar-me?", ko: "좀 도와주실 수 있을까요?" },
        { en: "Podia dizer-me as horas?", ko: "몇 시인지 알려 주실 수 있을까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "물 한 잔 주실 수 있을까요?", before: "", after: "dar-me um copo de água?", answers: ["Podia"],
        wrong: { "podría": "podría는 스페인어예요. 포르투갈어는 podia예요.", "posso": "posso는 ‘제가 ~해도 돼요?’예요." },
        tip: { en: "Pode dar-me um copo de água?", why: "pode도 ‘~해 주실래요’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "좀 비켜 주실 수 있을까요?", before: "Podia", after: "para lá, por favor?", answers: ["chegar-se"],
        wrong: { "se chegar": "포르투갈에서는 se를 동사 뒤에 붙여요: chegar-se." },
        tip: { en: "Com licença.", why: "‘실례합니다(지나갈게요)’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "역까지 가는 길 좀 알려 주실 수 있을까요?", before: "Podia indicar-me o", after: "para a estação?", answers: ["caminho"],
        wrong: { "camino": "camino는 스페인어예요. 포르투갈어는 caminho예요." },
        tip: { en: "Como vou para a estação?", why: "‘역에 어떻게 가요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "갈 수 있었는데 안 갔어.", before: "", after: "ir, mas não fui.", answers: ["Podia"],
        wrong: { "posso": "지난 일은 podia예요." },
        tip: { en: "Tive a oportunidade de ir.", why: "oportunidade는 ‘기회’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 나 좀 데려다줄 수 있어?", before: "", after: "levar-me?", answers: ["Podias"],
        wrong: { "podia": "친구(tu)에게는 podias예요." },
        tip: { en: "Dás-me boleia?", why: "dar boleia는 포르투갈식 ‘차로 태워 주다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "사진 좀 찍어 주실 수 있을까요?", answers: ["Podia tirar-nos uma fotografia?", "Podia tirar-nos uma foto?", "Podia tirar-me uma fotografia?", "Podia tirar-me uma foto?"],
        wrong: { "podría tirar-nos uma fotografia": "podría는 스페인어예요. 포르투갈어는 podia예요." },
        tip: { en: "Importa-se de nos tirar uma foto?", why: "importa-se de는 아주 정중한 부탁이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "조금 더 천천히 말씀해 주실 수 있을까요?", answers: ["Podia falar um pouco mais devagar?"],
        wrong: { "podia falar um poco mais devagar": "poco는 스페인어예요. 포르투갈어는 pouco예요." },
        tip: { en: "Mais devagar, por favor.", why: "짧게 이렇게만 말해도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이거 포장해 주실 수 있을까요?", answers: ["Podia embrulhar isto?"],
        wrong: { "podia embrulha isto": "podia 뒤에는 동사원형을 써요: embrulhar." },
        tip: { en: "Pode embrulhar isto para oferecer?", why: "para oferecer는 ‘선물용으로’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "에어컨 좀 꺼 주실 수 있을까요?", answers: ["Podia desligar o ar condicionado?"],
        wrong: { "podia apagar o ar condicionado": "기계를 끌 때는 desligar예요. apagar는 불을 끌 때 써요." },
        tip: { en: "Pode desligar o ar condicionado?", why: "pode도 ‘~해 주실래요’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "저 좀 기다려 주실 수 있을까요?", answers: ["Podia esperar por mim?"],
        ctx: { lead: "ajudar-me 대신 ‘저를 기다리다(esperar por mim)’를 넣어 보세요.", en: "Podia ajudar-me?" },
        wrong: { "podia esperar para mim": "‘~를 기다리다’는 esperar por예요." },
        tip: { en: "Importa-se de esperar por mim?", why: "importa-se de는 아주 정중한 부탁이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "이거 다른 사이즈로 바꿔 주실 수 있을까요?", answers: ["Podia trocar isto por outro tamanho?"],
        dialog: { a: "Em que posso ajudar?", aKo: "무엇을 도와드릴까요?" },
        wrong: { "podia trocar isto para outro tamanho": "‘~로 바꾸다’는 trocar por예요." },
        tip: { en: "Tem isto noutro tamanho?", why: "noutro는 em + outro예요." } }
    ]
  };
})(window.EP);
