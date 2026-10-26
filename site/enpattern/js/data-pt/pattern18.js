/* 포르투갈어(유럽) 세션 18. Costumo ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[18] = {
    no: 18, form: "Costumo ~.", stem: "Costumo", subject: "eu", meaning: "보통 ~해요",
    hint: "Costumo + 동사원형",
    intro: {
      blocks: [["Costumo", "나는 늘 ~하곤 한다"], ["~", "동사원형"]],
      lines: [
        "costumar + 동사원형은 ‘보통 ~해요, 평소에 ~해요’예요.",
        "습관이나 자주 하는 일을 말할 때 써요: Costumo correr de manhã.",
        "‘보통 안 해요’는 Não costumo ~예요."
      ],
      examples: [
        { en: "Costumo acordar cedo.", ko: "보통 일찍 일어나요." },
        { en: "Costumo ir ao ginásio.", ko: "평소에 헬스장에 가요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 보통 커피 마셔.", before: "", after: "beber café.", answers: ["Costumo"],
        wrong: { "costuma": "costuma는 ‘그/그녀는’이에요. ‘나는’은 costumo예요." },
        tip: { en: "Normalmente bebo café.", why: "normalmente는 ‘보통’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 보통 버스 타고 출근해.", before: "Costumo ir para o trabalho de", after: ".", answers: ["autocarro"],
        wrong: { "ônibus": "ônibus는 브라질 말이에요. 포르투갈에서는 autocarro예요." },
        tip: { en: "Normalmente apanho o autocarro.", why: "apanhar는 ‘(차를) 타다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 보통 아침 안 먹어.", before: "Não costumo", after: "o pequeno-almoço.", answers: ["tomar", "comer"],
        wrong: { "tomo": "costumo 뒤에는 동사원형을 써요: tomar." },
        tip: { en: "Normalmente não como de manhã.", why: "de manhã는 ‘아침에’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 주말엔 보통 집에 있어.", before: "Ao fim de semana costumo", after: "em casa.", answers: ["ficar", "estar"],
        wrong: { "fico": "costumo 뒤에는 동사원형을 써요: ficar." },
        tip: { en: "Ao fim de semana fico em casa.", why: "현재형만으로도 습관을 말해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 보통 밤 11시에 자.", before: "Costumo deitar-me às onze da", after: ".", answers: ["noite"],
        wrong: { "tarde": "tarde는 ‘오후’예요. 밤은 noite예요." },
        tip: { en: "Costumo ir para a cama às onze.", why: "ir para a cama는 ‘잠자리에 들다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 보통 걸어서 출근해.", answers: ["Costumo ir a pé para o trabalho.", "Costumo ir para o trabalho a pé."],
        wrong: { "costumo vou a pé para o trabalho": "costumo 뒤에는 동사원형을 써요: ir." },
        tip: { en: "Normalmente vou a pé para o trabalho.", why: "a pé는 ‘걸어서’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 저녁엔 보통 TV 봐.", answers: ["À noite costumo ver televisão.", "Costumo ver televisão à noite.", "À noite costumo ver TV.", "Costumo ver TV à noite."],
        wrong: { "à noite costumo assistir televisão": "포르투갈에서는 TV를 ‘보다’에 ver를 써요." },
        tip: { en: "À noite vejo televisão.", why: "현재형만으로도 습관을 말해요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 보통 아침에 달려.", answers: ["Costumo correr de manhã.", "De manhã costumo correr."],
        wrong: { "costumo corro de manhã": "costumo 뒤에는 동사원형을 써요: correr." },
        tip: { en: "Corro todas as manhãs.", why: "todas as manhãs는 ‘매일 아침’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 보통 술 안 마셔.", answers: ["Não costumo beber álcool.", "Não costumo beber."],
        wrong: { "não costumo bebo álcool": "costumo 뒤에는 동사원형을 써요: beber." },
        tip: { en: "Normalmente não bebo.", why: "normalmente는 ‘보통’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 보통 토요일에 장을 봐.", answers: ["Costumo fazer compras ao sábado.", "Ao sábado costumo fazer compras.", "Costumo fazer as compras ao sábado."],
        ctx: { lead: "ir ao ginásio 대신 ‘장을 보다(fazer compras)’를 넣어 보세요.", en: "Costumo ir ao ginásio." },
        wrong: { "costumo fazer compras no sábado": "‘토요일마다’는 포르투갈에서 ao sábado라고 해요. no sábado는 ‘이번 토요일에’예요." },
        tip: { en: "Faço compras ao sábado.", why: "현재형만으로도 습관을 말해요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "보통 가족이랑 점심 먹어.", answers: ["Costumo almoçar com a família.", "Costumo almoçar com a minha família."],
        dialog: { a: "O que fazes ao domingo?", aKo: "일요일엔 뭐 해?" },
        wrong: { "costumo almoço com a família": "costumo 뒤에는 동사원형을 써요: almoçar." },
        tip: { en: "Almoço com a família.", why: "현재형만으로도 습관을 말해요." } }
    ]
  };
})(window.EP);
