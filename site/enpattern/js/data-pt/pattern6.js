/* 포르투갈어(유럽) 세션 6. Queria ~, por favor. (형식은 pattern1.js 위쪽 설명과 같다)
   ‘주세요’ 문장은 por favor를 빼도 정답 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[6] = {
    no: 6, form: "Queria ~, por favor.", stem: "Queria", subject: "eu", meaning: "~ 주세요 (가게·식당에서 정중하게)",
    hint: "Queria + 명사, por favor",
    intro: {
      blocks: [["Queria", "~을 원하는데요 (정중하게)"], ["~", "무엇"], ["por favor", "부탁해요"]],
      lines: [
        "Queria는 querer의 지난 형태지만, 포르투갈에서는 ‘~ 주세요’의 정중한 말로 써요.",
        "가게나 식당에서 주문할 때 Quero보다 Queria가 자연스러워요.",
        "끝에 por favor나 se faz favor를 붙이면 더 공손해요."
      ],
      examples: [
        { en: "Queria um café, por favor.", ko: "커피 한 잔 주세요." },
        { en: "Queria a conta, por favor.", ko: "계산서 주세요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "커피 한 잔 주세요.", before: "", after: "um café, por favor.", answers: ["Queria"],
        wrong: { "quero": "quero도 틀린 말은 아니지만, 주문할 때는 queria가 더 정중해요.", "quer": "quer는 ‘그/그녀는 원한다’예요." },
        tip: { en: "Pode ser um café?", why: "‘커피 한 잔 될까요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "물 한 병 주세요.", before: "Queria uma garrafa", after: "água, por favor.", answers: ["de"],
        wrong: { "da": "‘물 한 병’처럼 양을 말할 때는 관사 없이 de예요." },
        tip: { en: "Queria água sem gás.", why: "sem gás는 ‘탄산 없는’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "계산서 주세요.", before: "Queria", after: "conta, por favor.", answers: ["a"],
        wrong: { "uma": "식사한 그 계산서라 uma가 아니라 a conta예요.", "o": "conta는 여성 명사라 a예요." },
        tip: { en: "A conta, se faz favor.", why: "se faz favor는 포르투갈식 ‘부탁해요’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "빵 두 개 주세요.", before: "Queria", after: "pães, por favor.", answers: ["dois"],
        wrong: { "duas": "pão는 남성 명사라 dois예요." },
        tip: { en: "Dois pães, se faz favor.", why: "짧게 이렇게만 말해도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나타 하나 주세요.", before: "Queria um", after: "de nata, por favor.", answers: ["pastel"],
        wrong: { "pastéis": "하나일 때는 pastel이에요. pastéis는 여럿이에요." },
        tip: { en: "Um pastel de nata, se faz favor.", why: "se faz favor는 포르투갈식 ‘부탁해요’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "물 한 잔 주세요.", answers: ["Queria um copo de água, por favor.", "Queria um copo de água."],
        wrong: { "queria um copo da água por favor": "양을 말할 때는 관사 없이 de água예요." },
        tip: { en: "Um copo de água, se faz favor.", why: "se faz favor는 포르투갈식 ‘부탁해요’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "메뉴판 주세요.", answers: ["Queria a ementa, por favor.", "Queria a ementa.", "Queria o menu, por favor.", "Queria o menu."],
        wrong: { "queria o cardápio por favor": "cardápio는 브라질에서 써요. 포르투갈에서는 a ementa예요." },
        tip: { en: "Pode trazer a ementa?", why: "‘메뉴판 갖다주실래요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "영수증 주세요.", answers: ["Queria a fatura, por favor.", "Queria a fatura.", "Queria o recibo, por favor.", "Queria o recibo."],
        wrong: { "queria uma fatura por favor": "방금 계산한 그 영수증이라 uma가 아니라 a fatura예요." },
        tip: { en: "Pode dar-me a fatura?", why: "‘영수증 주실래요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "와인 한 잔 주세요.", answers: ["Queria um copo de vinho, por favor.", "Queria um copo de vinho."],
        wrong: { "queria uma copo de vinho por favor": "copo는 남성 명사라 um이에요." },
        tip: { en: "Um copo de vinho tinto, por favor.", why: "vinho tinto는 레드 와인이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "차 한 잔 주세요.", answers: ["Queria um chá, por favor.", "Queria um chá."],
        ctx: { lead: "café 대신 ‘차(chá)’를 넣어 보세요.", en: "Queria um café, por favor." },
        wrong: { "queria uma chá por favor": "chá는 남성 명사라 um이에요." },
        tip: { en: "Pode ser um chá?", why: "‘차 한 잔 될까요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나타 두 개 주세요.", answers: ["Queria dois pastéis de nata, por favor.", "Queria dois pastéis de nata."],
        dialog: { a: "Boa tarde. O que deseja?", aKo: "안녕하세요. 뭘 드릴까요?" },
        wrong: { "queria dois pastel de nata por favor": "둘 이상이면 pastéis예요." },
        tip: { en: "Dois pastéis de nata, se faz favor.", why: "짧게 이렇게만 말해도 돼요." } }
    ]
  };
})(window.EP);
