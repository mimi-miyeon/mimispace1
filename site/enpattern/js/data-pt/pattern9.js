/* 포르투갈어(유럽) 세션 9. Estou a + 동사. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[9] = {
    no: 9, form: "Estou a ~.", stem: "Estou a", subject: "eu", meaning: "지금 ~하고 있어요 (유럽식 진행형)",
    hint: "Estou a + 동사원형",
    intro: {
      blocks: [["Estou", "나는 (지금) ~이다"], ["a", "~하는 중"], ["~", "동사원형"]],
      lines: [
        "포르투갈에서는 ‘지금 ~하고 있어요’를 estar a + 동사원형으로 말해요.",
        "브라질식 estou fazendo(-ndo)는 포르투갈에서는 잘 쓰지 않아요.",
        "a 뒤에는 꼭 동사원형이 와요: Estou a trabalhar."
      ],
      examples: [
        { en: "Estou a trabalhar.", ko: "나 지금 일하고 있어." },
        { en: "Estou a aprender português.", ko: "나 포르투갈어 배우고 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 지금 밥 먹고 있어.", before: "Estou", after: "comer.", answers: ["a"],
        wrong: { "de": "진행형은 estar a + 동사원형이에요.", "à": "여기서는 악센트 없는 a예요." },
        tip: { en: "Estou a almoçar.", why: "almoçar는 ‘점심 먹다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 책 읽고 있어.", before: "Estou a", after: "um livro.", answers: ["ler"],
        wrong: { "lendo": "lendo(-ndo)는 브라질식이에요. 포르투갈에서는 a + 동사원형: a ler.", "leio": "a 뒤에는 동사원형을 써요: ler." },
        tip: { en: "Estou a ler um romance.", why: "romance는 ‘소설’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 지금 운전하고 있어.", before: "", after: "a conduzir.", answers: ["Estou"],
        wrong: { "sou": "진행형은 ser가 아니라 estar(estou)예요.", "está": "está는 ‘그/그녀는’이에요. ‘나는’은 estou예요." },
        tip: { en: "Estou ao volante.", why: "‘운전대 잡고 있어요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 너 기다리고 있어.", before: "Estou a", after: "por ti.", answers: ["esperar"],
        wrong: { "esperando": "-ndo는 브라질식이에요. 포르투갈에서는 a esperar예요." },
        tip: { en: "Estou à tua espera.", why: "‘너를 기다리는 중이야’의 포르투갈식 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "지금 비 와.", before: "Está a", after: ".", answers: ["chover"],
        wrong: { "chovendo": "-ndo는 브라질식이에요. 포르투갈에서는 a chover예요." },
        tip: { en: "Está a chover muito.", why: "muito는 ‘많이’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 지금 공부하고 있어.", answers: ["Estou a estudar.", "Agora estou a estudar.", "Estou a estudar agora."],
        wrong: { "estou estudando": "estudando(-ndo)는 브라질식이에요. 포르투갈에서는 estou a estudar예요.", "estou estudar": "estou와 동사원형 사이에 a가 필요해요." },
        tip: { en: "Estou a estudar para o exame.", why: "para o exame는 ‘시험 대비로’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 저녁 만들고 있어.", answers: ["Estou a fazer o jantar."],
        wrong: { "estou fazendo o jantar": "fazendo(-ndo)는 브라질식이에요. 포르투갈에서는 estou a fazer예요." },
        tip: { en: "Estou a preparar o jantar.", why: "preparar는 ‘준비하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 음악 듣고 있어.", answers: ["Estou a ouvir música."], alts: ["Estou a escutar música."],
        wrong: { "estou ouvindo música": "ouvindo(-ndo)는 브라질식이에요. 포르투갈에서는 estou a ouvir예요." },
        tip: { en: "Estou a ouvir uma música.", why: "uma música는 ‘노래 한 곡’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 지금 TV 안 보고 있어.", answers: ["Não estou a ver televisão.", "Não estou a ver TV.", "Agora não estou a ver televisão."],
        wrong: { "estou não a ver televisão": "não는 estou 앞에 써요.", "não estou assistindo televisão": "assistir와 -ndo는 브라질식이에요. 포르투갈에서는 estou a ver예요." },
        tip: { en: "Não estou a ver a televisão.", why: "a televisão처럼 관사를 넣어도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 지금 달리고 있어.", answers: ["Estou a correr."],
        ctx: { lead: "trabalhar 대신 ‘달리다(correr)’를 넣어 보세요.", en: "Estou a trabalhar." },
        wrong: { "estou correndo": "correndo(-ndo)는 브라질식이에요. 포르투갈에서는 estou a correr예요." },
        tip: { en: "Estou a fazer jogging.", why: "jogging은 ‘조깅’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "거의 다 왔어.", answers: ["Estou a chegar."],
        dialog: { a: "Onde estás?", aKo: "너 어디야?" },
        wrong: { "estou chegando": "chegando(-ndo)는 브라질식이에요. 포르투갈에서는 estou a chegar예요." },
        tip: { en: "Já estou a chegar.", why: "já를 넣으면 ‘이제 곧 도착해’예요." } }
    ]
  };
})(window.EP);
