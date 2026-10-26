/* 포르투갈어(유럽) 세션 8. Posso ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[8] = {
    no: 8, form: "Posso ~?", stem: "Posso", subject: "eu", meaning: "~해도 돼요?",
    hint: "Posso + 동사원형?",
    intro: {
      blocks: [["Posso", "내가 ~할 수 있다 (poder)"], ["~", "동사원형"]],
      lines: [
        "Posso는 poder(~할 수 있다) 동사의 ‘나’ 형태예요.",
        "물음표를 붙이면 ‘~해도 돼요?’라고 허락을 구하는 말이 돼요.",
        "Posso 뒤에는 동사원형이 와요: Posso entrar?"
      ],
      examples: [
        { en: "Posso entrar?", ko: "들어가도 돼요?" },
        { en: "Posso pagar com cartão?", ko: "카드로 계산해도 돼요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "여기 앉아도 돼요?", before: "", after: "sentar-me aqui?", answers: ["Posso"],
        wrong: { "pode": "pode는 ‘당신은 ~할 수 있다’예요. ‘제가’는 posso예요.", "quero": "quero는 ‘원해요’예요. 허락을 구할 때는 posso예요." },
        tip: { en: "Este lugar está livre?", why: "‘이 자리 비었어요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "사진 찍어도 돼요?", before: "Posso tirar uma", after: "?", answers: ["fotografia", "foto"],
        wrong: { "fotografias": "uma 뒤에는 하나만: fotografia예요.", "fotos": "uma 뒤에는 하나만: foto예요." },
        tip: { en: "Posso tirar fotos?", why: "fotos는 ‘사진들’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "창문 열어도 돼요?", before: "Posso abrir a", after: "?", answers: ["janela"],
        wrong: { "ventana": "ventana는 스페인어예요. 포르투갈어는 janela예요." },
        tip: { en: "Importa-se que abra a janela?", why: "‘창문 열어도 괜찮으세요?’라는 정중한 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이거 입어 봐도 돼요?", before: "Posso", after: "isto?", answers: ["experimentar"],
        wrong: { "provar": "옷을 입어 볼 때 포르투갈에서는 experimentar예요. provar는 맛볼 때 써요.", "experimento": "posso 뒤에는 동사원형을 써요: experimentar." },
        tip: { en: "Posso experimentar este?", why: "este는 ‘이것(남성 명사)’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내일 와도 돼요?", before: "Posso", after: "amanhã?", answers: ["vir"],
        wrong: { "venho": "posso 뒤에는 동사원형을 써요: vir.", "ir": "ir는 ‘가다’예요. 상대가 있는 곳으로 ‘오다’는 vir예요." },
        tip: { en: "Posso passar cá amanhã?", why: "passar cá는 ‘들르다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "하나 물어봐도 돼요?", answers: ["Posso perguntar uma coisa?", "Posso fazer uma pergunta?"],
        wrong: { "posso pergunto uma coisa": "posso 뒤에는 동사원형을 써요: perguntar." },
        tip: { en: "Posso fazer-lhe uma pergunta?", why: "lhe는 ‘당신에게’예요. 동사 뒤에 붙여요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "현금으로 내도 돼요?", answers: ["Posso pagar em dinheiro?"],
        wrong: { "posso pago em dinheiro": "posso 뒤에는 동사원형을 써요: pagar." },
        tip: { en: "Posso pagar em numerário?", why: "numerário는 ‘현금’의 격식 있는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "여기서 기다려도 돼요?", answers: ["Posso esperar aqui?"],
        wrong: { "posso espero aqui": "posso 뒤에는 동사원형을 써요: esperar." },
        tip: { en: "Posso ficar à espera aqui?", why: "ficar à espera는 ‘기다리고 있다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "물 좀 마셔도 돼요?", answers: ["Posso beber água?", "Posso beber um pouco de água?"],
        wrong: { "posso bebo água": "posso 뒤에는 동사원형을 써요: beber." },
        tip: { en: "Posso beber um copo de água?", why: "um copo de는 ‘한 잔’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "여기 주차해도 돼요?", answers: ["Posso estacionar aqui?"],
        ctx: { lead: "sentar-me 대신 ‘주차하다(estacionar)’를 넣어 보세요.", en: "Posso sentar-me aqui?" },
        wrong: { "posso estacionar-me aqui": "estacionar에는 -me를 붙이지 않아요." },
        tip: { en: "Posso deixar o carro aqui?", why: "‘차를 여기 둬도 돼요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "카드로 계산해도 돼요?", answers: ["Posso pagar com cartão?"],
        dialog: { a: "São doze euros.", aKo: "12유로예요." },
        wrong: { "posso pago com cartão": "posso 뒤에는 동사원형을 써요: pagar." },
        tip: { en: "Posso pagar com multibanco?", why: "multibanco는 포르투갈의 은행 카드 결제예요." } }
    ]
  };
})(window.EP);
