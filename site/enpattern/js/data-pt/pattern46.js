/* 포르투갈어(유럽) 세션 46. Tenho vontade de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[46] = {
    no: 46, form: "Tenho vontade de ~.", stem: "Tenho vontade de/Tenho muita vontade de/Tens vontade de/Tenho", subject: "eu", meaning: "~하고 싶은 마음이에요",
    hint: "Tenho vontade de + 동사원형",
    intro: {
      blocks: [["Tenho", "나는 가지고 있다"], ["vontade de", "~하고 싶은 마음"], ["~", "동사원형"]],
      lines: [
        "Tenho vontade de + 동사원형은 ‘~하고 싶어요(그런 마음이 들어요)’예요.",
        "‘하고 싶지 않아요’는 Não tenho vontade de ~예요.",
        "Apetece-me와 비슷하지만, 조금 더 진지한 바람에도 써요."
      ],
      examples: [
        { en: "Tenho vontade de viajar.", ko: "여행 가고 싶어요." },
        { en: "Não tenho vontade de sair.", ko: "나가고 싶지 않아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 울고 싶어.", before: "Tenho vontade de", after: ".", answers: ["chorar"],
        wrong: { "choro": "de 뒤에는 동사원형을 써요: chorar." },
        tip: { en: "Apetece-me chorar.", why: "apetece-me도 ‘~하고 싶어’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 바다 보고 싶어.", before: "Tenho", after: "de ver o mar.", answers: ["vontade"],
        wrong: { "ganas": "ganas는 스페인어예요. 포르투갈어는 vontade예요." },
        tip: { en: "Tenho saudades do mar.", why: "saudades는 ‘그리움’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오늘 일하기 싫어.", before: "Hoje não tenho vontade", after: "trabalhar.", answers: ["de"],
        wrong: { "para": "vontade 뒤에는 de예요." },
        tip: { en: "Hoje não me apetece trabalhar.", why: "não me apetece도 ‘~하기 싫어’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 뭐 하고 싶어?", before: "Tens vontade de fazer o", after: "?", answers: ["quê"],
        wrong: { "que": "문장 끝의 ‘뭐’는 악센트가 있는 quê예요." },
        tip: { en: "O que te apetece fazer?", why: "apetecer는 ‘~이 당기다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 정말 가고 싶어.", before: "Tenho muita", after: "de ir.", answers: ["vontade"],
        wrong: { "ganas": "ganas는 스페인어예요. 포르투갈어는 vontade예요." },
        tip: { en: "Quero muito ir.", why: "muito를 넣으면 ‘정말’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 쉬고 싶어.", answers: ["Tenho vontade de descansar."],
        wrong: { "tenho vontade descansar": "vontade 뒤에는 de가 필요해요." },
        tip: { en: "Preciso de descansar.", why: "‘쉬어야 해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 초콜릿 먹고 싶어.", answers: ["Tenho vontade de comer chocolate."],
        wrong: { "tenho vontade de como chocolate": "de 뒤에는 동사원형을 써요: comer." },
        tip: { en: "Apetece-me chocolate.", why: "apetece-me는 ‘~이 당겨’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 집에 가고 싶어.", answers: ["Tenho vontade de ir para casa."],
        wrong: { "tenho vontade de vou para casa": "de 뒤에는 동사원형을 써요: ir." },
        tip: { en: "Quero ir para casa.", why: "quero로 말해도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아무것도 하고 싶지 않아.", answers: ["Não tenho vontade de fazer nada."],
        wrong: { "tenho vontade de fazer nada": "‘아무것도 안’은 não ... nada예요." },
        tip: { en: "Não me apetece fazer nada.", why: "não me apetece도 ‘~하기 싫어’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 노래하고 싶어.", answers: ["Tenho vontade de cantar."],
        ctx: { lead: "viajar 대신 ‘노래하다(cantar)’를 넣어 보세요.", en: "Tenho vontade de viajar." },
        wrong: { "tenho vontade de canto": "de 뒤에는 동사원형을 써요: cantar." },
        tip: { en: "Apetece-me cantar.", why: "apetece-me도 ‘~하고 싶어’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 나가고 싶지 않아.", answers: ["Não, não tenho vontade de sair.", "Não tenho vontade de sair."],
        dialog: { a: "Queres sair hoje?", aKo: "오늘 나갈래?" },
        wrong: { "não não tenho vontade sair": "vontade 뒤에는 de가 필요해요." },
        tip: { en: "Não, hoje não me apetece.", why: "não me apetece도 ‘~하기 싫어’예요." } }
    ]
  };
})(window.EP);
