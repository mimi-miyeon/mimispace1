/* 포르투갈어(유럽) 세션 67. Vou de ~. (교통수단) (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[67] = {
    no: 67, form: "Vou de ~.", stem: "Vou de/Vamos de/Vens de/Vou", subject: "eu", meaning: "~을 타고 가요",
    hint: "Vou de + 교통수단",
    intro: {
      blocks: [["Vou", "나는 간다"], ["de", "~으로"], ["~", "교통수단"]],
      lines: [
        "교통수단은 de로 말해요: Vou de comboio.(기차 타고 가요)",
        "포르투갈 말: comboio(기차), autocarro(버스), elétrico(트램), metro(지하철), carro(차).",
        "걸어서는 a pé예요: Vou a pé."
      ],
      examples: [
        { en: "Vou de comboio.", ko: "기차 타고 가요." },
        { en: "Vou para o trabalho de metro.", ko: "지하철로 출근해요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 버스 타고 가.", before: "Vou de", after: ".", answers: ["autocarro"],
        wrong: { "ônibus": "ônibus는 브라질 말이에요. 포르투갈에서는 autocarro예요.", "bus": "포르투갈어로 버스는 autocarro예요." },
        tip: { en: "Apanho o autocarro.", why: "apanhar는 ‘(차를) 타다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 트램 타고 가.", before: "Vou de", after: ".", answers: ["elétrico"],
        wrong: { "bonde": "bonde는 브라질 말이에요. 포르투갈에서는 elétrico예요." },
        tip: { en: "Apanho o 28.", why: "28번은 리스본의 유명한 트램이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 차 타고 가.", before: "Vou", after: "carro.", answers: ["de"],
        wrong: { "en": "en은 스페인어예요. 교통수단은 de예요.", "no": "‘~을 타고’는 de예요: de carro." },
        tip: { en: "Vou a conduzir.", why: "‘운전해서 가’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 걸어서 가자.", before: "Vamos a", after: ".", answers: ["pé"],
        wrong: { "pie": "pie는 스페인어예요. 포르투갈어는 a pé예요." },
        tip: { en: "Fica perto, vamos a pé.", why: "‘가까우니까 걸어가자’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 뭐 타고 와?", before: "Vens de", after: "?", answers: ["quê"],
        wrong: { "que": "문장 끝의 ‘뭐’는 악센트가 있는 quê예요." },
        tip: { en: "Como é que vens?", why: "‘어떻게 와?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 비행기 타고 가.", answers: ["Vou de avião."],
        wrong: { "vou em avião": "교통수단은 de로 말해요: de avião." },
        tip: { en: "Apanho um avião.", why: "apanhar는 ‘(교통수단을) 타다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 자전거 타고 학교 가.", answers: ["Vou de bicicleta para a escola.", "Vou para a escola de bicicleta."],
        wrong: { "vou em bicicleta para a escola": "교통수단은 de로 말해요: de bicicleta." },
        tip: { en: "Ando de bicicleta até à escola.", why: "andar de bicicleta는 ‘자전거를 타다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "택시 타고 갈까?", answers: ["Vamos de táxi?"], subject: "",
        wrong: { "vamos em táxi": "교통수단은 de로 말해요: de táxi." },
        tip: { en: "Apanhamos um táxi?", why: "apanhar는 ‘(차를) 타다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 포르투에 기차 타고 갈 거야.", answers: ["Vou de comboio para o Porto.", "Vou para o Porto de comboio.", "Vou ao Porto de comboio."],
        wrong: { "vou de trem para o porto": "trem은 브라질 말이에요. 포르투갈에서는 comboio예요." },
        tip: { en: "Apanho o comboio para o Porto.", why: "apanhar는 ‘(교통수단을) 타다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 배 타고 가.", answers: ["Vou de barco."],
        ctx: { lead: "comboio 대신 ‘배(barco)’를 넣어 보세요.", en: "Vou de comboio." },
        wrong: { "vou em barco": "교통수단은 de로 말해요: de barco." },
        tip: { en: "Apanho o barco.", why: "apanhar는 ‘(교통수단을) 타다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "지하철로 가.", answers: ["Vou de metro."],
        dialog: { a: "Como vais para o aeroporto?", aKo: "공항에 어떻게 가?" },
        wrong: { "vou de metrô": "metrô는 브라질 표기예요. 포르투갈에서는 metro예요." },
        tip: { en: "Apanho o metro.", why: "apanhar는 ‘(교통수단을) 타다’예요." } }
    ]
  };
})(window.EP);
