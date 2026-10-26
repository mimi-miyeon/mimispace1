/* 포르투갈어(유럽) 세션 71. Quando era ~, ~. (형식은 pattern1.js 위쪽 설명과 같다)
   Eu는 quando 뒤에 들어가서(Quando eu era ~) 다른 표현(alts)으로 둔다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[71] = {
    no: 71, form: "Quando era ~, ~.", stem: "Quando era/Quando eu era/Quando eras/Quando éramos", meaning: "내가 ~였을 때 ~했어요",
    hint: "Quando era + 명사·형용사, + 지난 일 (-ava, -ia)",
    intro: {
      blocks: [["Quando era", "내가 ~였을 때"], ["~", "어린·학생…"], ["~", "그때 하던 일"]],
      lines: [
        "Quando era pequeno(어렸을 때)처럼 지난 시절은 era(ser의 지난 형태)로 말해요.",
        "그때 늘 하던 일은 -ava·-ia 형태예요: Quando era pequeno, jogava à bola.",
        "-ar 동사 → -ava (jogar → jogava), -er·-ir 동사 → -ia (comer → comia, viver → vivia)."
      ],
      examples: [
        { en: "Quando era pequeno, vivia no Porto.", ko: "어렸을 때 포르투에 살았어요." },
        { en: "Quando era estudante, trabalhava num café.", ko: "학생 때 카페에서 일했어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 어렸을 때 바다 근처에 살았어.", before: "Quando", after: "pequena, vivia perto do mar.", answers: ["era"],
        wrong: { "fui": "어린 시절처럼 지난 시기는 era예요.", "estava": "‘어렸을 때’는 ser의 지난 형태 era예요." },
        tip: { en: "Em criança, vivia perto do mar.", why: "em criança는 ‘어렸을 때’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "학생 때 카페에서 일했어.", before: "Quando era estudante,", after: "num café.", answers: ["trabalhava"],
        wrong: { "trabalho": "지난 시절이라 trabalhava예요.", "trabajaba": "trabajaba는 스페인어예요. 포르투갈어는 trabalhava예요." },
        tip: { en: "Na faculdade, trabalhei num café.", why: "faculdade는 ‘대학’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어렸을 때 채소를 안 먹었어.", before: "Quando era pequeno, não", after: "legumes.", answers: ["comia"],
        wrong: { "como": "지난 시절의 습관은 comia예요.", "comava": "-er 동사는 -ia예요: comia." },
        tip: { en: "Em pequeno, odiava legumes.", why: "odiava는 ‘아주 싫어했다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 어렸을 때 매일 놀았어.", before: "Quando", after: "pequenos, brincávamos todos os dias.", answers: ["éramos"],
        wrong: { "era": "‘우리’면 éramos예요." },
        tip: { en: "Em crianças, brincávamos muito.", why: "em crianças는 ‘(우리가) 어렸을 때’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 어렸을 때 뭐 되고 싶었어?", before: "Quando eras pequeno, o que", after: "ser?", answers: ["querias"],
        wrong: { "queres": "지난 시절이라 querias예요." },
        tip: { en: "Qual era o teu sonho em criança?", why: "sonho는 ‘꿈’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어렸을 때 축구를 했어.", answers: ["Quando era pequeno, jogava futebol.", "Quando era pequena, jogava futebol."],
        alts: ["Quando eu era pequeno, jogava futebol.", "Quando eu era pequena, jogava futebol."],
        wrong: { "quando era pequeno jugaba futebol": "jugaba는 스페인어예요. 포르투갈어는 jogava예요." },
        tip: { en: "Em pequeno, jogava futebol.", why: "em pequeno는 ‘어렸을 때’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "학생 때 리스본에 살았어.", answers: ["Quando era estudante, vivia em Lisboa."],
        alts: ["Quando eu era estudante, vivia em Lisboa.", "Quando era estudante, morava em Lisboa."],
        wrong: { "quando estava estudante vivia em lisboa": "‘학생일 때’는 ser의 지난 형태 era예요." },
        tip: { en: "No tempo da faculdade, vivia em Lisboa.", why: "no tempo de는 ‘~ 시절에’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어렸을 때 할머니 집에 자주 갔어.", answers: ["Quando era pequeno, ia muitas vezes a casa da minha avó.", "Quando era pequena, ia muitas vezes a casa da minha avó."],
        wrong: { "quando era pequeno iba muitas vezes a casa da minha avó": "iba는 스페인어예요. 포르투갈어는 ia예요." },
        tip: { en: "Em criança, visitava muito a minha avó.", why: "visitava는 ‘방문하곤 했다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내가 어렸을 때는 핸드폰이 없었어.", answers: ["Quando era pequeno, não havia telemóveis.", "Quando era pequena, não havia telemóveis."],
        wrong: { "quando era pequeno não havia celulares": "celular는 브라질 말이에요. 포르투갈에서는 telemóvel이에요." },
        tip: { en: "No meu tempo, não havia telemóveis.", why: "no meu tempo는 ‘내 시절엔’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어렸을 때 시골에 살았어요.", answers: ["Quando era pequeno, vivia no campo.", "Quando era pequena, vivia no campo."],
        ctx: { lead: "no Porto 대신 ‘시골에(no campo)’를 넣어 보세요.", en: "Quando era pequeno, vivia no Porto." },
        wrong: { "quando era pequeno vivia na campo": "campo는 남성 명사라 no예요." },
        tip: { en: "Cresci no campo.", why: "crescer는 ‘자라다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 어렸을 때 엄마랑 요리하곤 했어.", answers: ["Sim, quando era pequena, cozinhava com a minha mãe.", "Sim, quando era pequeno, cozinhava com a minha mãe."],
        dialog: { a: "Sempre gostaste de cozinhar?", aKo: "원래 요리 좋아했어?" },
        wrong: { "sim quando era pequena cocinaba com a minha mãe": "cocinaba는 스페인어예요. 포르투갈어는 cozinhava예요." },
        tip: { en: "Sim, desde pequena.", why: "desde pequena는 ‘어릴 때부터’예요." } }
    ]
  };
})(window.EP);
