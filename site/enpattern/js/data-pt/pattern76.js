/* 포르투갈어(유럽) 세션 76. Vou ter de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[76] = {
    no: 76, form: "Vou ter de ~.", stem: "Vou ter de/Vou ter que/Vamos ter de/Vais ter de", subject: "eu", meaning: "~해야 할 거예요",
    hint: "Vou ter de + 동사원형",
    intro: {
      blocks: [["Vou ter", "나는 가지게 될 것이다"], ["de", "~할 것을"], ["~", "동사원형"]],
      lines: [
        "Vou ter de + 동사원형은 ‘(앞으로) ~해야 할 거예요’예요: Vou ter de trabalhar amanhã.",
        "Tenho de(지금 해야 해요)의 앞으로 버전이에요. Vou ter que도 써요.",
        "‘안 해도 될 거예요’는 Não vou ter de ~예요."
      ],
      examples: [
        { en: "Vou ter de trabalhar no sábado.", ko: "토요일에 일해야 할 거예요." },
        { en: "Vamos ter de esperar.", ko: "우리 기다려야 할 거예요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 내일 일찍 일어나야 할 거야.", before: "Amanhã vou ter", after: "acordar cedo.", answers: ["de", "que"],
        wrong: { "a": "‘~해야 한다’는 ter de예요." },
        tip: { en: "Amanhã tenho de acordar cedo.", why: "tenho de도 ‘~해야 해’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "우리 택시 타야 할 거야.", before: "", after: "ter de apanhar um táxi.", answers: ["Vamos"],
        wrong: { "vou": "‘우리는’이면 vamos예요." },
        tip: { en: "O melhor é apanhar um táxi.", why: "o melhor é는 ‘~하는 게 제일 낫다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 기다려야 할 거야.", before: "", after: "ter de esperar.", answers: ["Vais"],
        wrong: { "vou": "‘너는’이면 vais예요." },
        tip: { en: "Tens de ter paciência.", why: "‘참아야 해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 새 휴대폰 사야 할 거야.", before: "Vou ter de comprar um", after: "novo.", answers: ["telemóvel"],
        wrong: { "celular": "celular는 브라질 말이에요. 포르투갈에서는 telemóvel이에요." },
        tip: { en: "Preciso de um telemóvel novo.", why: "preciso de는 ‘~이 필요해’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그거 다시 해야 할 거야.", before: "Vou ter de", after: "outra vez.", answers: ["fazer"],
        wrong: { "faço": "de 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Vou ter de repetir.", why: "repetir는 ‘다시 하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 내일 병원 가야 할 거야.", answers: ["Amanhã vou ter de ir ao médico.", "Vou ter de ir ao médico amanhã."],
        alts: ["Amanhã vou ter que ir ao médico."],
        wrong: { "amanhã vou ter ir ao médico": "ter 뒤에 de가 필요해요: vou ter de." },
        tip: { en: "Amanhã tenho consulta.", why: "consulta는 ‘진료 예약’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리 더 일찍 출발해야 할 거야.", answers: ["Vamos ter de sair mais cedo."], subject: "nós",
        wrong: { "vamos ter de salir mais cedo": "salir는 스페인어예요. 포르투갈어는 sair예요." },
        tip: { en: "É melhor sairmos mais cedo.", why: "é melhor는 ‘~하는 게 낫다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 돈 모아야 할 거야.", answers: ["Vou ter de poupar dinheiro."],
        wrong: { "vou ter de ahorrar dinheiro": "ahorrar는 스페인어예요. 포르투갈어는 poupar예요." },
        tip: { en: "Tenho de poupar.", why: "poupar는 ‘아끼다, 모으다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 안 와도 될 거야.", answers: ["Não vais ter de vir."], subject: "tu",
        wrong: { "vais não ter de vir": "não는 vais 앞에 써요." },
        tip: { en: "Escusas de vir.", why: "escusar de는 ‘~할 필요 없다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "일요일에 일해야 할 거예요.", answers: ["Vou ter de trabalhar no domingo."], alts: ["Vou ter que trabalhar no domingo."],
        ctx: { lead: "no sábado 대신 ‘일요일에(no domingo)’를 넣어 보세요.", en: "Vou ter de trabalhar no sábado." },
        wrong: { "vou ter de trabajar no domingo": "trabajar는 스페인어예요. 포르투갈어는 trabalhar예요." },
        tip: { en: "No domingo tenho trabalho.", why: "‘일요일에 일 있어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 기다려야겠네요.", answers: ["Então vamos ter de esperar."], subject: "nós",
        dialog: { a: "O restaurante está cheio.", aKo: "식당이 꽉 찼어요." },
        wrong: { "então vamos ter esperar": "ter 뒤에 de가 필요해요: vamos ter de." },
        tip: { en: "Então esperamos um bocadinho.", why: "um bocadinho는 ‘잠깐’이에요." } }
    ]
  };
})(window.EP);
