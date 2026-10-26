/* 포르투갈어(유럽) 세션 70. Costumava ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[70] = {
    no: 70, form: "Costumava ~.", stem: "Costumava/Costumávamos/costumava", subject: "eu", meaning: "예전에 ~하곤 했어요",
    hint: "Costumava + 동사원형",
    intro: {
      blocks: [["Costumava", "나는 (예전에) ~하곤 했다"], ["~", "동사원형"]],
      lines: [
        "Costumava + 동사원형은 ‘예전에 ~하곤 했어요’예요: Costumava jogar futebol.",
        "지금은 안 하는 옛 습관에 써요. 지금의 습관은 costumo(세션 18)예요.",
        "‘우리는’은 costumávamos예요."
      ],
      examples: [
        { en: "Costumava jogar futebol.", ko: "예전에 축구를 하곤 했어요." },
        { en: "Costumávamos ir à praia.", ko: "우리 예전엔 해변에 가곤 했어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 예전엔 담배 피웠어.", before: "", after: "fumar.", answers: ["Costumava"],
        wrong: { "costumo": "costumo는 지금의 습관이에요. 예전 습관은 costumava예요.", "solía": "solía는 스페인어예요. 포르투갈어는 costumava예요." },
        tip: { en: "Antes fumava.", why: "antes는 ‘예전에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 예전엔 일찍 일어나곤 했어.", before: "Costumava", after: "cedo.", answers: ["acordar", "levantar-me"],
        wrong: { "acordava": "costumava 뒤에는 동사원형을 써요: acordar." },
        tip: { en: "Antes acordava cedo.", why: "antes는 ‘예전에’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 어릴 때 같이 놀곤 했어.", before: "", after: "brincar juntos.", answers: ["Costumávamos"],
        wrong: { "costumava": "‘우리는’이면 costumávamos예요." },
        tip: { en: "Brincávamos juntos.", why: "brincávamos는 ‘우리는 놀곤 했다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 사람 예전엔 노래 많이 불렀어.", before: "Ele", after: "cantar muito.", answers: ["costumava"],
        wrong: { "costuma": "예전 습관은 costumava예요." },
        tip: { en: "Antes ele cantava muito.", why: "antes는 ‘예전에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 예전엔 커피 안 마셨어.", before: "Não", after: "beber café.", answers: ["costumava"],
        wrong: { "costumo": "예전 습관은 costumava예요." },
        tip: { en: "Antes não bebia café.", why: "bebia는 ‘마시곤 했다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 예전엔 피아노 쳤어.", answers: ["Costumava tocar piano."],
        wrong: { "costumava jugar piano": "악기는 tocar예요. jugar는 스페인어예요." },
        tip: { en: "Antes tocava piano.", why: "tocava는 ‘치곤 했다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리 여름마다 알가르브에 가곤 했어.", answers: ["Costumávamos ir ao Algarve no verão.", "Costumávamos ir ao Algarve todos os verões."], subject: "nós",
        wrong: { "costumávamos ir a algarve no verão": "Algarve는 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Íamos ao Algarve todos os verões.", why: "íamos는 ‘가곤 했다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 예전엔 고기 안 먹었어.", answers: ["Não costumava comer carne."],
        wrong: { "não costumo comer carne": "예전 습관은 costumava예요." },
        tip: { en: "Antes não comia carne.", why: "comia는 ‘먹곤 했다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 예전엔 버스로 출근했어.", answers: ["Costumava ir para o trabalho de autocarro."],
        wrong: { "costumava ir para o trabalho em autocarro": "교통수단은 de예요: de autocarro." },
        tip: { en: "Antes ia de autocarro.", why: "ia는 ‘가곤 했다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 예전엔 수영하곤 했어.", answers: ["Costumava nadar."],
        ctx: { lead: "jogar futebol 대신 ‘수영하다(nadar)’를 넣어 보세요.", en: "Costumava jogar futebol." },
        wrong: { "costumava nado": "costumava 뒤에는 동사원형을 써요: nadar." },
        tip: { en: "Antes nadava muito.", why: "nadava는 ‘수영하곤 했다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 예전엔 쳤었는데.", answers: ["Não, mas costumava tocar.", "Não, mas costumava."],
        dialog: { a: "Ainda tocas guitarra?", aKo: "아직 기타 쳐?" },
        wrong: { "não mas costumo tocar": "예전 습관은 costumava예요." },
        tip: { en: "Já não toco.", why: "já não는 ‘더는 ~ 않다’예요." } }
    ]
  };
})(window.EP);
