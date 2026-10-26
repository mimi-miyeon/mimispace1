/* 포르투갈어(유럽) 세션 41. Acho que ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[41] = {
    no: 41, form: "Acho que ~.", stem: "Acho que/Achas", subject: "eu", meaning: "~인 것 같아요",
    hint: "Acho que + 문장",
    intro: {
      blocks: [["Acho", "나는 생각한다"], ["que", "~라고"], ["~", "문장"]],
      lines: [
        "Acho que + 문장은 ‘~인 것 같아요, ~라고 생각해요’예요: Acho que vai chover.",
        "‘그런 것 같아요’는 Acho que sim, ‘아닌 것 같아요’는 Acho que não예요.",
        "의견을 물을 때는 O que achas?(어떻게 생각해?)예요."
      ],
      examples: [
        { en: "Acho que vai chover.", ko: "비가 올 것 같아요." },
        { en: "Acho que sim.", ko: "그런 것 같아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그 사람 아픈 것 같아.", before: "", after: "que ele está doente.", answers: ["Acho", "Penso"],
        wrong: { "creo": "creo는 스페인어예요. 포르투갈어는 acho예요." },
        tip: { en: "Parece que ele está doente.", why: "parece que는 ‘~인 것 같다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "아닌 것 같아.", before: "Acho que", after: ".", answers: ["não"],
        wrong: { "no": "포르투갈어 ‘아니’는 não예요." },
        tip: { en: "Acho que não é bem assim.", why: "‘꼭 그렇진 않은 것 같아’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떻게 생각해?", before: "O que", after: "?", answers: ["achas"],
        wrong: { "acho": "친구에게 묻는 거라 achas예요. acho는 ‘나는’이에요.", "acha": "친구(tu)에게는 achas예요. acha는 존댓말이에요." },
        tip: { en: "Qual é a tua opinião?", why: "opinião는 ‘의견’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 늦을 것 같아.", before: "Acho que vou chegar", after: ".", answers: ["atrasado", "atrasada", "tarde"],
        wrong: { "retrasado": "retrasado는 스페인어예요. 포르투갈어는 atrasado예요." },
        tip: { en: "Se calhar chego atrasado.", why: "se calhar는 ‘아마’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 좋은 생각인 것 같아요.", before: "Acho que é uma boa", after: ".", answers: ["ideia"],
        wrong: { "idea": "idea는 스페인어 표기예요. 포르투갈어는 ideia예요." },
        tip: { en: "Parece-me uma boa ideia.", why: "parece-me는 ‘내가 보기엔 ~ 같다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그 식당 닫은 것 같아.", answers: ["Acho que o restaurante está fechado."],
        wrong: { "acho que o restaurante é fechado": "지금 닫혀 있는 상태는 está fechado예요." },
        tip: { en: "Parece que o restaurante está fechado.", why: "parece que는 ‘~인 것 같다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네 말이 맞는 것 같아.", answers: ["Acho que tens razão."],
        wrong: { "acho que tens razón": "razón은 스페인어예요. 포르투갈어는 razão예요." },
        tip: { en: "Tens toda a razão.", why: "‘네 말이 완전히 맞아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 사람 안 올 것 같아.", answers: ["Acho que ele não vem."],
        wrong: { "acho que ele não venho": "‘그는’이면 vem이에요. venho는 ‘나는’이에요." },
        tip: { en: "Acho que ele não vai vir.", why: "vai vir는 ‘올 것이다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이게 더 나은 것 같아.", answers: ["Acho que este é melhor.", "Acho que isto é melhor."],
        wrong: { "acho que este é mais bom": "bom의 ‘더’는 melhor예요." },
        tip: { en: "Prefiro este.", why: "‘이게 더 좋아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "눈이 올 것 같아.", answers: ["Acho que vai nevar."],
        ctx: { lead: "chover 대신 ‘눈이 오다(nevar)’를 넣어 보세요.", en: "Acho que vai chover." },
        wrong: { "acho que vai neva": "vai 뒤에는 동사원형을 써요: nevar." },
        tip: { en: "Parece que vai nevar.", why: "parece que는 ‘~인 것 같다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그런 것 같아.", answers: ["Acho que sim."],
        dialog: { a: "O museu abre ao domingo?", aKo: "박물관 일요일에 열어?" },
        wrong: { "acho que si": "si는 스페인어예요. 포르투갈어는 sim이에요." },
        tip: { en: "Penso que sim.", why: "penso que도 ‘~인 것 같아’예요." } }
    ]
  };
})(window.EP);
