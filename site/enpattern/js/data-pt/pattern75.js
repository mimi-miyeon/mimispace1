/* 포르투갈어(유럽) 세션 75. Disse que ~. (형식은 pattern1.js 위쪽 설명과 같다)
   ‘그 사람이 ~라고 했어’가 많아서 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[75] = {
    no: 75, form: "Disse que ~.", stem: "Disse que/Disseste que/Disseram que/disse que/disse", meaning: "~라고 했어요",
    hint: "Disse que + 문장",
    intro: {
      blocks: [["Disse", "(나·그가) 말했다"], ["que", "~라고"], ["~", "문장"]],
      lines: [
        "Disse que + 문장은 ‘~라고 했어요’예요. disse는 dizer의 ‘나·그/그녀’ 과거형이에요.",
        "들은 말을 전할 때는 한 칸 과거로 바꿔요: ‘온다’ → Disse que vinha.(온다고 했어)",
        "‘사람들이 ~라고 했어’는 Disseram que ~, ‘너 ~라고 했잖아’는 Disseste que ~예요."
      ],
      examples: [
        { en: "Ele disse que vinha.", ko: "그 사람이 온다고 했어요." },
        { en: "Disseram que ia chover.", ko: "비 온다고 했어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그녀가 피곤하다고 했어.", before: "Ela", after: "que estava cansada.", answers: ["disse"],
        wrong: { "dijo": "dijo는 스페인어예요. 포르투갈어는 disse예요.", "diz": "지난 일이라 disse예요." },
        tip: { en: "Ela comentou que estava cansada.", why: "comentar는 ‘말하다, 언급하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 온다고 했잖아!", before: "", after: "que vinhas!", answers: ["Disseste"],
        wrong: { "disse": "‘너는’이면 disseste예요." },
        tip: { en: "Prometeste que vinhas!", why: "prometer는 ‘약속하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "사람들이 그 식당 좋다고 했어.", before: "", after: "que o restaurante era bom.", answers: ["Disseram"],
        wrong: { "disse": "‘사람들이’면 disseram이에요." },
        tip: { en: "Dizem que o restaurante é bom.", why: "dizem que는 ‘~라고들 해요’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 사람이 늦을 거라고 했어.", before: "Ele disse que ia chegar", after: ".", answers: ["atrasado", "tarde"],
        wrong: { "atrasada": "ele는 남자라 atrasado예요." },
        tip: { en: "Ele avisou que se atrasava.", why: "avisar는 ‘미리 알리다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "의사가 나보고 쉬어야 한대.", before: "O médico disse que eu", after: "de descansar.", answers: ["tinha"],
        wrong: { "tenho": "들은 말을 전할 때는 한 칸 과거로: tinha de예요." },
        tip: { en: "O médico mandou-me descansar.", why: "mandar는 ‘시키다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그 사람이 바쁘다고 했어.", answers: ["Ele disse que estava ocupado.", "Disse que estava ocupado."],
        wrong: { "ele dijo que estava ocupado": "dijo는 스페인어예요. 포르투갈어는 disse예요." },
        tip: { en: "Ele avisou que estava ocupado.", why: "avisar는 ‘미리 알리다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 말했잖아!", answers: ["Eu disse-te!", "Eu bem te disse!", "Disse-te!"],
        wrong: { "eu te disse": "포르투갈에서는 te를 동사 뒤에 붙여요: disse-te." },
        tip: { en: "Eu bem te avisei!", why: "avisar는 ‘경고하다, 미리 알리다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그녀가 내일 전화한다고 했어.", answers: ["Ela disse que ligava amanhã.", "Ela disse que ia ligar amanhã."],
        wrong: { "ela dijo que ligava amanhã": "dijo는 스페인어예요. 포르투갈어는 disse예요." },
        tip: { en: "Ela ficou de ligar amanhã.", why: "ficar de는 포르투갈식 ‘~하기로 하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 아무 말도 안 했어.", answers: ["Não disse nada.", "Eu não disse nada."],
        wrong: { "disse nada": "‘아무 말도 안’은 não ... nada예요." },
        tip: { en: "Fiquei calado.", why: "calado는 ‘말없는’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "덥다고 했어요.", answers: ["Disseram que ia estar calor.", "Disseram que ia fazer calor."],
        ctx: { lead: "ia chover 대신 ‘더울 것이다(ia estar calor)’를 넣어 보세요.", en: "Disseram que ia chover." },
        wrong: { "dijeron que ia estar calor": "dijeron은 스페인어예요. 포르투갈어는 disseram이에요." },
        tip: { en: "A previsão diz que vai estar calor.", why: "previsão는 ‘(날씨) 예보’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "오늘 못 온대.", answers: ["Disse que hoje não podia vir.", "Ele disse que hoje não podia vir."],
        dialog: { a: "O que é que o João disse?", aKo: "주앙이 뭐라고 했어?" },
        wrong: { "dijo que hoje não podia vir": "dijo는 스페인어예요. 포르투갈어는 disse예요." },
        tip: { en: "Disse que hoje não dava.", why: "não dava는 ‘안 됐다’예요." } }
    ]
  };
})(window.EP);
