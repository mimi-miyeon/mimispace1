/* 포르투갈어(유럽) 세션 15. Onde fica ~? (형식은 pattern1.js 위쪽 설명과 같다)
   Onde é ~?도 같은 뜻이라 정답으로 둔다. 주어가 장소라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[15] = {
    no: 15, form: "Onde fica ~?", stem: "Onde fica/Onde ficam/Onde é/Onde são/Onde está", meaning: "~이 어디에 있어요?",
    hint: "Onde fica + 장소?",
    intro: {
      blocks: [["Onde", "어디에"], ["fica", "~이 있다 (위치)"], ["~", "장소"]],
      lines: [
        "Onde fica ~?는 건물이나 장소가 어디 있는지 물을 때 써요.",
        "Onde é ~?도 같은 뜻이에요. 사람이나 물건이 어디 있는지는 보통 Onde está ~?예요.",
        "여럿이면 ficam: Onde ficam as lojas?"
      ],
      examples: [
        { en: "Onde fica a estação?", ko: "역이 어디에 있어요?" },
        { en: "Onde fica o Museu do Azulejo?", ko: "아줄레주 박물관이 어디에 있어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "화장실이 어디에 있어요?", before: "Onde", after: "a casa de banho?", answers: ["fica", "é", "está"],
        wrong: { "ficam": "casa de banho는 하나라 fica예요. ficam은 여럿일 때예요." },
        tip: { en: "Onde é a casa de banho?", why: "onde é도 같은 뜻이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "지하철역이 어디에 있어요?", before: "Onde fica a estação de", after: "?", answers: ["metro"],
        wrong: { "metrô": "metrô는 브라질 표기예요. 포르투갈에서는 metro예요." },
        tip: { en: "Há metro aqui perto?", why: "‘근처에 지하철 있어요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "가게들이 어디에 있어요?", before: "Onde", after: "as lojas?", answers: ["ficam", "são"],
        wrong: { "fica": "lojas는 여럿이라 ficam이에요." },
        tip: { en: "Onde há lojas?", why: "há로 ‘가게가 어디 있어요?’라고 물을 수도 있어요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "제일 가까운 약국이 어디에 있어요?", before: "Onde fica a farmácia mais", after: "?", answers: ["próxima"],
        wrong: { "perto": "‘가장 가까운’은 mais próxima예요.", "próximo": "farmácia는 여성 명사라 próxima예요." },
        tip: { en: "Há uma farmácia aqui perto?", why: "há로 ‘근처에 있어요?’라고 물을 수도 있어요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "버스 정류장이 어디에 있어요?", before: "Onde fica a", after: "do autocarro?", answers: ["paragem"],
        wrong: { "parada": "parada는 브라질 말이에요. 포르투갈에서는 paragem이에요." },
        tip: { en: "Onde apanho o autocarro?", why: "apanhar o autocarro는 ‘버스를 타다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "기차역이 어디에 있어요?", answers: ["Onde fica a estação de comboios?", "Onde é a estação de comboios?", "Onde fica a estação de comboio?"],
        wrong: { "onde fica a estação de trem": "trem은 브라질 말이에요. 포르투갈에서는 comboio예요." },
        tip: { en: "Onde apanho o comboio?", why: "apanhar o comboio는 ‘기차를 타다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "호텔이 어디에 있어요?", answers: ["Onde fica o hotel?", "Onde é o hotel?"],
        wrong: { "onde fica a hotel": "hotel은 남성 명사라 o hotel이에요." },
        tip: { en: "Onde é que fica o hotel?", why: "é que를 넣으면 말할 때 자연스러워요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "해변이 어디에 있어요?", answers: ["Onde fica a praia?", "Onde é a praia?"],
        wrong: { "onde fica o praia": "praia는 여성 명사라 a praia예요." },
        tip: { en: "Onde é que fica a praia?", why: "é que를 넣으면 말할 때 자연스러워요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "출구가 어디에 있어요?", answers: ["Onde fica a saída?", "Onde é a saída?"],
        wrong: { "onde fica o saída": "saída는 여성 명사라 a saída예요." },
        tip: { en: "Por onde é a saída?", why: "‘출구가 어느 쪽이에요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "시장이 어디에 있어요?", answers: ["Onde fica o mercado?", "Onde é o mercado?"],
        ctx: { lead: "estação 대신 ‘시장(mercado)’을 넣어 보세요.", en: "Onde fica a estação?" },
        wrong: { "onde fica a mercado": "mercado는 남성 명사라 o mercado예요." },
        tip: { en: "Sabe onde fica o mercado?", why: "‘시장이 어디 있는지 아세요?’라는 정중한 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 박물관이 어디에 있어요?", answers: ["Sim, onde fica o museu?", "Sim, onde é o museu?"],
        dialog: { a: "Posso ajudar?", aKo: "도와드릴까요?" },
        wrong: { "sim onde fica a museu": "museu는 남성 명사라 o museu예요." },
        tip: { en: "Sim, sabe onde fica o museu?", why: "sabe를 넣으면 더 정중해요." } }
    ]
  };
})(window.EP);
