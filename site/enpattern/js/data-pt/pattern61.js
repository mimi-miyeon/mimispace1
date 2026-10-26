/* 포르투갈어(유럽) 세션 61. É preciso ~. (형식은 pattern1.js 위쪽 설명과 같다)
   ‘(누구든) ~해야 한다’라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[61] = {
    no: 61, form: "É preciso ~.", stem: "É preciso/é preciso", meaning: "~해야 해요 (누구든)",
    hint: "É preciso + 동사원형",
    intro: {
      blocks: [["É preciso", "~이 필요하다"], ["~", "동사원형 / 명사"]],
      lines: [
        "É preciso + 동사원형은 ‘(누구든) ~해야 해요, ~할 필요가 있어요’예요: É preciso reservar.",
        "특정한 사람이 아니라 일반적인 필요를 말해요. ‘내가’ 해야 하면 Tenho de ~예요.",
        "명사도 와요: É preciso passaporte.(여권이 필요해요)"
      ],
      examples: [
        { en: "É preciso ter paciência.", ko: "인내심이 필요해요." },
        { en: "É preciso reservar.", ko: "예약해야 해요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "표를 사야 해요.", before: "É", after: "comprar bilhete.", answers: ["preciso", "necessário"],
        wrong: { "necesario": "necesario는 스페인어예요. 포르투갈어는 preciso(또는 necessário)예요." },
        tip: { en: "Tem de se comprar bilhete.", why: "tem de se는 ‘(누구든) ~해야 한다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "일찍 일어나야 해요.", before: "É preciso", after: "cedo.", answers: ["acordar"],
        wrong: { "acorda": "preciso 뒤에는 동사원형을 써요: acordar." },
        tip: { en: "Temos de acordar cedo.", why: "temos de는 ‘우리는 ~해야 해’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "조심해야 해요.", before: "É preciso ter", after: ".", answers: ["cuidado", "atenção"],
        wrong: { "cuidar": "‘조심하다’는 ter cuidado예요." },
        tip: { en: "Cuidado!", why: "짧게 ‘조심해!’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "현금으로 내야 해요.", before: "É preciso", after: "em dinheiro.", answers: ["pagar"],
        wrong: { "pago": "preciso 뒤에는 동사원형을 써요: pagar." },
        tip: { en: "Só aceitam dinheiro.", why: "‘현금만 받아요’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "예약해야 해요?", before: "É", after: "reservar?", answers: ["preciso"],
        wrong: { "precisa": "‘(누구든) ~해야 하다’는 é preciso예요." },
        tip: { en: "Tenho de reservar?", why: "‘제가 예약해야 해요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "여기서는 신발을 벗어야 해요.", answers: ["Aqui é preciso tirar os sapatos.", "É preciso tirar os sapatos aqui."],
        wrong: { "aqui é preciso tirar as sapatos": "sapatos는 남성 명사라 os예요." },
        tip: { en: "Aqui tem de se tirar os sapatos.", why: "tem de se는 ‘(누구든) ~해야 한다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "운동을 해야 해요.", answers: ["É preciso fazer exercício."],
        wrong: { "é preciso fazer ejercicio": "ejercicio는 스페인어예요. 포르투갈어는 exercício예요." },
        tip: { en: "Faz bem fazer exercício.", why: "faz bem은 ‘~이 몸에 좋다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "물을 많이 마셔야 해요.", answers: ["É preciso beber muita água."],
        wrong: { "é preciso beber muito água": "água는 여성 명사라 muita예요." },
        tip: { en: "Convém beber muita água.", why: "convém은 ‘~하는 게 좋다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "비자가 필요해요?", answers: ["É preciso visto?", "É preciso um visto?", "É preciso ter visto?"],
        wrong: { "é preciso visa": "visa는 영어·스페인어예요. 포르투갈어는 visto예요." },
        tip: { en: "Preciso de visto?", why: "preciso de는 ‘(내가) ~이 필요해’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "일찍 와야 해요.", answers: ["É preciso chegar cedo."],
        ctx: { lead: "ter paciência 대신 ‘일찍 오다(chegar cedo)’를 넣어 보세요.", en: "É preciso ter paciência." },
        wrong: { "é preciso chega cedo": "preciso 뒤에는 동사원형을 써요: chegar." },
        tip: { en: "Convém chegar cedo.", why: "convém은 ‘~하는 게 좋다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 근데 표를 사야 해요.", answers: ["Sim, mas é preciso comprar bilhete.", "Sim, mas é preciso comprar o bilhete.", "Sim, mas é preciso comprar um bilhete."],
        dialog: { a: "Posso entrar no museu?", aKo: "박물관 들어가도 돼요?" },
        wrong: { "sim mas é preciso compra bilhete": "preciso 뒤에는 동사원형을 써요: comprar." },
        tip: { en: "Sim, mas tem de comprar bilhete.", why: "tem de는 ‘(당신이) ~해야 해요’예요." } }
    ]
  };
})(window.EP);
