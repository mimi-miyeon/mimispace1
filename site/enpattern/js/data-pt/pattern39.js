/* 포르투갈어(유럽) 세션 39. Consigo ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[39] = {
    no: 39, form: "Consigo ~.", stem: "Consigo/Consegues/Consegui", subject: "eu", meaning: "~할 수 있어요 (해낼 수 있어요)",
    hint: "Consigo + 동사원형",
    intro: {
      blocks: [["Consigo", "나는 해낼 수 있다"], ["~", "동사원형"]],
      lines: [
        "Consigo는 conseguir(해내다)의 ‘나’ 형태예요. ‘(애써서) ~할 수 있어요’예요.",
        "‘못 하겠어요’는 Não consigo ~예요: Não consigo dormir.",
        "능력(배워서 앎)은 sei, 허락은 posso, 해낼 수 있는지는 consigo예요."
      ],
      examples: [
        { en: "Não consigo dormir.", ko: "잠이 안 와요." },
        { en: "Consigo fazer isso sozinho.", ko: "그거 혼자 할 수 있어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 이거 못 열겠어.", before: "Não", after: "abrir isto.", answers: ["consigo"],
        wrong: { "sei": "‘(해 봐도) 못 하겠다’는 não consigo예요.", "consego": "conseguir의 ‘나’는 consigo예요." },
        tip: { en: "Isto não abre.", why: "‘이거 안 열려’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "잘 안 들려요.", before: "Não consigo", after: "bem.", answers: ["ouvir"],
        wrong: { "oiço": "consigo 뒤에는 동사원형을 써요: ouvir." },
        tip: { en: "Não se ouve bem.", why: "‘소리가 잘 안 들려요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 그거 보여?", before: "", after: "ver isso?", answers: ["Consegues"],
        wrong: { "consigo": "‘너는’이면 consegues예요. consigo는 ‘나는’이에요." },
        tip: { en: "Estás a ver isso?", why: "‘그거 보여?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 해냈어!", before: "", after: "!", answers: ["Consegui"],
        wrong: { "consigo": "해낸 지난 일은 consegui예요." },
        tip: { en: "Já está!", why: "‘다 됐다!’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 혼자 할 수 있어.", before: "Consigo fazer isso", after: ".", answers: ["sozinho", "sozinha"],
        wrong: { "solo": "solo는 스페인어예요. 포르투갈어는 sozinho예요." },
        tip: { en: "Não preciso de ajuda.", why: "‘도움 필요 없어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 집중이 안 돼.", answers: ["Não consigo concentrar-me.", "Não me consigo concentrar."],
        wrong: { "não consigo me concentrar": "포르투갈에서는 me를 동사 뒤에 붙여요: concentrar-me." },
        tip: { en: "Estou distraído.", why: "distraído는 ‘집중 못 하는’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 이거 다 못 먹겠어.", answers: ["Não consigo comer isto tudo.", "Não consigo comer tudo isto."],
        wrong: { "não consigo como isto tudo": "consigo 뒤에는 동사원형을 써요: comer." },
        tip: { en: "É demasiado para mim.", why: "demasiado는 ‘너무 많은’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 내일 갈 수 있어.", answers: ["Amanhã consigo ir.", "Consigo ir amanhã."],
        wrong: { "amanhã consigo vou": "consigo 뒤에는 동사원형을 써요: ir." },
        tip: { en: "Amanhã posso ir.", why: "posso도 ‘갈 수 있어요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아무것도 안 보여.", answers: ["Não consigo ver nada."],
        wrong: { "consigo ver nada": "‘아무것도 안’은 não ... nada예요." },
        tip: { en: "Não se vê nada.", why: "‘아무것도 안 보여’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "숨을 못 쉬겠어요.", answers: ["Não consigo respirar."],
        ctx: { lead: "dormir 대신 ‘숨 쉬다(respirar)’를 넣어 보세요.", en: "Não consigo dormir." },
        wrong: { "não consigo respiro": "consigo 뒤에는 동사원형을 써요: respirar." },
        tip: { en: "Estou com falta de ar.", why: "falta de ar는 ‘숨이 차다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "괜찮아, 혼자 할 수 있어.", answers: ["Não é preciso, consigo sozinho.", "Não é preciso, consigo sozinha.", "Obrigado, consigo sozinho.", "Obrigada, consigo sozinha."],
        dialog: { a: "Precisas de ajuda com a mala?", aKo: "가방 도와줄까?" },
        wrong: { "não é preciso consigo solo": "solo는 스페인어예요. 포르투갈어는 sozinho예요." },
        tip: { en: "Obrigado, eu consigo.", why: "‘고마워, 할 수 있어’라는 말이에요." } }
    ]
  };
})(window.EP);
