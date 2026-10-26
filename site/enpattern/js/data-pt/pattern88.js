/* 포르투갈어(유럽) 세션 88. Como é que ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[88] = {
    no: 88, form: "Como é que ~?", stem: "Como é que/Como", meaning: "어떻게 ~해요?",
    hint: "Como é que + 문장?",
    intro: {
      blocks: [["Como é que", "어떻게"], ["~", "문장"]],
      lines: [
        "Como é que ~?는 ‘어떻게 ~해요?’예요. 말할 때 아주 자주 써요: Como é que se faz isto?",
        "é que를 빼고 Como ~?라고 해도 돼요: Como vais?",
        "como 뒤에서는 se·o 같은 말이 동사 앞에 와요: Como é que se diz?, Como é que o fizeste?"
      ],
      examples: [
        { en: "Como é que se faz isto?", ko: "이거 어떻게 해요?" },
        { en: "Como é que vou para a estação?", ko: "역에 어떻게 가요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "공항에 어떻게 가요?", before: "Como é que", after: "para o aeroporto?", answers: ["vou"],
        wrong: { "voy": "voy는 스페인어예요. 포르투갈어는 vou예요." },
        tip: { en: "Qual é o melhor caminho para o aeroporto?", why: "melhor caminho는 ‘가장 좋은 길’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떻게 알았어?", before: "Como é que", after: "?", answers: ["soubeste"],
        wrong: { "sabes": "지난 일이라 soubeste예요." },
        tip: { en: "Quem te disse?", why: "‘누가 말해 줬어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 어떻게 켜요?", before: "Como é que se", after: "isto?", answers: ["liga"],
        wrong: { "enciende": "enciende는 스페인어예요. 포르투갈에서는 ligar예요." },
        tip: { en: "Onde é o botão?", why: "botão은 ‘버튼’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "여기 어떻게 왔어?", before: "Como é que", after: "cá?", answers: ["vieste", "chegaste"],
        wrong: { "vienes": "vienes는 스페인어예요." },
        tip: { en: "Vieste de carro?", why: "‘차 타고 왔어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "포르투갈어로 어떻게 말해요?", before: "Como é que se", after: "em português?", answers: ["diz"],
        wrong: { "dice": "dice는 스페인어예요. 포르투갈어는 diz예요." },
        tip: { en: "Como se diz em português?", why: "é que를 빼도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이거 어떻게 열어요?", answers: ["Como é que se abre isto?", "Como se abre isto?"],
        wrong: { "como é que abre-se isto": "como가 앞에 오면 se를 동사 앞으로 옮겨요: se abre." },
        tip: { en: "Isto abre como?", why: "말할 때는 como를 뒤에 붙이기도 해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "시내에 어떻게 가요?", answers: ["Como é que vou para o centro?", "Como vou para o centro?", "Como é que se vai para o centro?"],
        wrong: { "como é que voy para o centro": "voy는 스페인어예요. 포르투갈어는 vou예요." },
        tip: { en: "Qual é o caminho para o centro?", why: "caminho는 ‘길’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네 이름 어떻게 써?", answers: ["Como é que se escreve o teu nome?", "Como se escreve o teu nome?"],
        wrong: { "como é que escreve-se o teu nome": "como가 앞에 오면 se를 동사 앞으로 옮겨요: se escreve." },
        tip: { en: "Podes soletrar o teu nome?", why: "soletrar는 ‘철자를 불러 주다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떻게 지내?", answers: ["Como é que estás?", "Como estás?"],
        wrong: { "como é que estou": "친구에게 묻는 거라 estás예요." },
        tip: { en: "Então, tudo bem?", why: "‘그래서, 잘 지내?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "해변에 어떻게 가요?", answers: ["Como é que vou para a praia?", "Como vou para a praia?"],
        ctx: { lead: "a estação 대신 ‘해변(a praia)’을 넣어 보세요.", en: "Como é que vou para a estação?" },
        wrong: { "como é que vou para o praia": "praia는 여성 명사라 a praia예요." },
        tip: { en: "Qual é o caminho para a praia?", why: "caminho는 ‘길’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와! 어떻게 만들었어?", answers: ["Uau! Como é que o fizeste?", "Como é que o fizeste?", "Como é que fizeste?"],
        dialog: { a: "Fiz um bolo de chocolate.", aKo: "초콜릿 케이크 만들었어." },
        wrong: { "uau como é que fizeste-o": "como é que가 앞에 오면 o를 동사 앞으로 옮겨요: o fizeste." },
        tip: { en: "Ensinas-me a receita?", why: "‘레시피 알려 줄래?’라는 말이에요." } }
    ]
  };
})(window.EP);
