/* 포르투갈어(유럽) 세션 24. Já ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[24] = {
    no: 24, form: "Já ~.", stem: "Já", subject: "eu", meaning: "벌써 ~했어요",
    hint: "Já + 과거형",
    intro: {
      blocks: [["Já", "벌써, 이미"], ["~", "과거형 동사"]],
      lines: [
        "Já는 ‘벌써, 이미’예요. 과거형과 함께 ‘벌써 ~했어요’가 돼요: Já comi.",
        "물을 때도 그대로예요: Já comeste?(벌써 먹었어?) 대답은 Já.(응) 하나로도 돼요.",
        "‘~해 본 적 있어요’도 já예요: Já estive em Lisboa."
      ],
      examples: [
        { en: "Já comi.", ko: "벌써 먹었어요." },
        { en: "Já acabei o trabalho.", ko: "벌써 일 끝냈어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 벌써 표 샀어.", before: "", after: "comprei os bilhetes.", answers: ["Já"],
        wrong: { "ainda": "ainda는 ‘아직’이에요. ‘벌써’는 já예요." },
        tip: { en: "Os bilhetes já estão comprados.", why: "‘표는 벌써 사 뒀어요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 그 영화 벌써 봤어.", before: "Já", after: "esse filme.", answers: ["vi"],
        wrong: { "vejo": "vejo는 지금이에요. 지난 일은 vi예요.", "viu": "viu는 ‘그/그녀는’이에요. ‘나는’은 vi예요." },
        tip: { en: "Já vi esse filme duas vezes.", why: "duas vezes는 ‘두 번’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 사람 벌써 도착했어?", before: "Ele já", after: "?", answers: ["chegou"],
        wrong: { "cheguei": "‘그는’이면 chegou예요. cheguei는 ‘나는’이에요." },
        tip: { en: "Ele já está cá?", why: "‘그 사람 벌써 여기 와 있어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 벌써 점심 먹었어?", before: "Já", after: "?", answers: ["almoçaste"],
        wrong: { "almocei": "‘너는’이면 almoçaste예요. almocei는 ‘나는’이에요.", "almoçou": "친구(tu)에게는 almoçaste예요." },
        tip: { en: "Já comeste?", why: "comeste는 comer의 ‘너’ 과거형이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그거 벌써 말했어.", before: "Já", after: "isso.", answers: ["disse"],
        wrong: { "digo": "digo는 지금이에요. dizer의 ‘나’ 과거형은 disse예요." },
        tip: { en: "Já te disse isso.", why: "te는 ‘너에게’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 벌써 이메일 보냈어.", answers: ["Já mandei o email.", "Já enviei o email.", "Já mandei o e-mail.", "Já enviei o e-mail."],
        wrong: { "já mando o email": "지난 일은 mandei예요." },
        tip: { en: "O email já foi enviado.", why: "‘이메일은 벌써 보내졌어요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 리스본에 가 본 적 있어.", answers: ["Já estive em Lisboa."], alts: ["Já fui a Lisboa."],
        wrong: { "já estive no lisboa": "Lisboa는 관사 없이 em Lisboa예요." },
        tip: { en: "Já conheço Lisboa.", why: "conhecer는 ‘(가 봐서) 알다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 벌써 일어났어?", answers: ["Já acordaste?"], subject: "tu",
        wrong: { "já acordei": "‘너는’이면 acordaste예요. acordei는 ‘나는’이에요." },
        tip: { en: "Já estás acordado?", why: "‘벌써 깼어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 벌써 끝났어.", answers: ["Já acabou."], subject: "",
        wrong: { "já acabei": "‘그것이 끝났다’는 acabou예요. acabei는 ‘내가 끝냈다’예요." },
        tip: { en: "Já terminou.", why: "terminar도 ‘끝나다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 벌써 커피 마셨어.", answers: ["Já bebi café.", "Já bebi um café.", "Já tomei café.", "Já tomei um café."],
        ctx: { lead: "comi 대신 ‘마셨다(bebi)’와 ‘커피(café)’를 넣어 보세요.", en: "Já comi." },
        wrong: { "já bebo café": "지난 일은 bebi예요." },
        tip: { en: "Já tomei o meu café.", why: "o meu café는 ‘(늘 마시는) 내 커피’ 느낌이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 벌써 쌌어.", answers: ["Sim, já fiz.", "Já fiz."],
        dialog: { a: "Já fizeste a mala?", aKo: "벌써 짐 쌌어?" },
        wrong: { "sim já faço": "지난 일은 fiz예요. fazer의 ‘나’ 과거형이에요." },
        tip: { en: "Sim, já está feita.", why: "‘응, 다 쌌어’라는 말이에요." } }
    ]
  };
})(window.EP);
