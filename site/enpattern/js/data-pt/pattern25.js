/* 포르투갈어(유럽) 세션 25. Ainda não ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[25] = {
    no: 25, form: "Ainda não ~.", stem: "Ainda não", subject: "eu", meaning: "아직 ~ 안 했어요",
    hint: "Ainda não + 과거형",
    intro: {
      blocks: [["Ainda não", "아직 ~ 안"], ["~", "과거형 동사"]],
      lines: [
        "Ainda não는 ‘아직 ~ 안’이에요. 과거형과 함께 ‘아직 ~ 안 했어요’예요: Ainda não comi.",
        "Já ~?(벌써 ~했어?)의 대답으로 많이 써요: Ainda não.",
        "지금 상태에도 써요: Ainda não sei.(아직 몰라요)"
      ],
      examples: [
        { en: "Ainda não comi.", ko: "아직 안 먹었어요." },
        { en: "Ainda não sei.", ko: "아직 몰라요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 아직 표 안 샀어.", before: "", after: "não comprei o bilhete.", answers: ["Ainda"],
        wrong: { "já": "já não는 ‘더는 안’이에요. ‘아직 안’은 ainda não예요." },
        tip: { en: "Ainda tenho de comprar o bilhete.", why: "‘아직 표를 사야 해요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "버스가 아직 안 왔어.", before: "O autocarro ainda não", after: ".", answers: ["chegou", "veio"],
        wrong: { "chega": "chega는 지금이에요. 아직 안 온 지난 일은 chegou예요." },
        tip: { en: "O autocarro está atrasado.", why: "atrasado는 ‘늦은’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 아직 결정 안 했어.", before: "Ainda não", after: ".", answers: ["decidi"],
        wrong: { "decido": "decido는 지금이에요. 지난 일은 decidi예요." },
        tip: { en: "Ainda estou a pensar.", why: "‘아직 생각 중이에요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 아직 안 끝났어.", before: "Ainda não", after: ".", answers: ["acabámos", "terminámos"],
        wrong: { "acabei": "‘우리는’이면 acabámos예요. acabei는 ‘나는’이에요." },
        tip: { en: "Ainda falta um pouco.", why: "faltar는 ‘남아 있다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 아직 그 책 안 읽었어.", before: "Ainda não", after: "esse livro.", answers: ["li"],
        wrong: { "leio": "leio는 지금이에요. ler의 ‘나’ 과거형은 li예요." },
        tip: { en: "Ainda não comecei esse livro.", why: "começar는 ‘시작하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 아직 점심 안 먹었어.", answers: ["Ainda não almocei."],
        wrong: { "já não almocei": "‘아직 안’은 ainda não예요. já não는 ‘더는 안’이에요.", "ainda não almoço": "지난 일은 almocei예요." },
        tip: { en: "Ainda estou sem almoçar.", why: "sem + 동사원형은 ‘~하지 않은 채’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 아직 답장 안 했어.", answers: ["Ainda não respondi."],
        wrong: { "ainda não respondo": "지난 일은 respondi예요." },
        tip: { en: "Ainda não lhe respondi.", why: "lhe는 ‘그/그녀에게’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "아직 안 끝났어요.", answers: ["Ainda não acabou."], subject: "",
        wrong: { "ainda não acabei": "‘그것이 끝나다’는 acabou예요. acabei는 ‘내가 끝냈다’예요." },
        tip: { en: "Ainda não terminou.", why: "terminar도 ‘끝나다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 아직 포르투에 안 가 봤어.", answers: ["Ainda não fui ao Porto."], alts: ["Ainda não estive no Porto."],
        wrong: { "ainda não fui a porto": "Porto는 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Ainda não conheço o Porto.", why: "conhecer는 ‘(가 봐서) 알다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 아직 안 잤어.", answers: ["Ainda não dormi."],
        ctx: { lead: "comi 대신 ‘잤다(dormi)’를 넣어 보세요.", en: "Ainda não comi." },
        wrong: { "ainda não durmo": "durmo는 지금이에요. 지난 일은 dormi예요." },
        tip: { en: "Ainda estou acordado.", why: "‘아직 깨어 있어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 아직 안 봤어.", answers: ["Não, ainda não vi.", "Ainda não vi."],
        dialog: { a: "Já viste o novo filme?", aKo: "새 영화 벌써 봤어?" },
        wrong: { "não ainda não vejo": "지난 일은 vi예요. ver의 ‘나’ 과거형이에요." },
        tip: { en: "Ainda não, mas quero ver.", why: "mas quero ver는 ‘근데 보고 싶어’예요." } }
    ]
  };
})(window.EP);
