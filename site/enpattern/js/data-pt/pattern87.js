/* 포르투갈어(유럽) 세션 87. Onde posso ~? (형식은 pattern1.js 위쪽 설명과 같다)
   질문이 onde로 시작해서 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[87] = {
    no: 87, form: "Onde posso ~?", stem: "Onde posso/Onde se pode/onde posso", meaning: "어디서 ~할 수 있어요?",
    hint: "Onde posso + 동사원형?",
    intro: {
      blocks: [["Onde", "어디서"], ["posso", "내가 ~할 수 있나"], ["~", "동사원형"]],
      lines: [
        "Onde posso + 동사원형?은 ‘어디서 ~할 수 있어요?’예요: Onde posso comprar bilhetes?",
        "누구든 할 수 있는 곳을 물을 때는 Onde se pode ~?예요.",
        "대답은 Pode ~ ali.(저기서 ~하실 수 있어요)처럼 해요."
      ],
      examples: [
        { en: "Onde posso comprar bilhetes?", ko: "표를 어디서 살 수 있어요?" },
        { en: "Onde posso apanhar um táxi?", ko: "택시를 어디서 탈 수 있어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어디서 돈 바꿀 수 있어요?", before: "Onde posso", after: "dinheiro?", answers: ["trocar", "cambiar"],
        wrong: { "troco": "posso 뒤에는 동사원형을 써요: trocar." },
        tip: { en: "Onde há uma casa de câmbio?", why: "casa de câmbio는 ‘환전소’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어디에 주차할 수 있어요?", before: "Onde", after: "estacionar?", answers: ["posso"],
        wrong: { "puedo": "puedo는 스페인어예요. 포르투갈어는 posso예요.", "pode": "‘제가’는 posso예요." },
        tip: { en: "Há estacionamento aqui perto?", why: "estacionamento는 ‘주차장’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어디서 와이파이 쓸 수 있어요?", before: "Onde posso usar o", after: "?", answers: ["wi-fi", "wifi"],
        wrong: { "internete": "포르투갈어로는 wi-fi 또는 internet이에요." },
        tip: { en: "Há wi-fi grátis?", why: "grátis는 ‘무료’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "버스 표는 어디서 사요?", before: "Onde se", after: "comprar bilhetes de autocarro?", answers: ["pode"],
        wrong: { "puede": "puede는 스페인어예요. 포르투갈어는 pode예요." },
        tip: { en: "Onde vendem bilhetes?", why: "vender는 ‘팔다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어디서 기다리면 돼요?", before: "Onde posso", after: "?", answers: ["esperar"],
        wrong: { "espero": "posso 뒤에는 동사원형을 써요: esperar." },
        tip: { en: "Onde é que espero?", why: "‘어디서 기다려요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어디서 휴대폰 충전할 수 있어요?", answers: ["Onde posso carregar o telemóvel?"],
        wrong: { "onde posso cargar o telemóvel": "cargar는 스페인어예요. 포르투갈어는 carregar예요." },
        tip: { en: "Há alguma tomada?", why: "tomada는 ‘콘센트’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어디서 버스 탈 수 있어요?", answers: ["Onde posso apanhar o autocarro?", "Onde posso apanhar um autocarro?"],
        wrong: { "onde posso coger o autocarro": "coger는 스페인어예요. 포르투갈에서는 apanhar예요." },
        tip: { en: "Onde é a paragem do autocarro?", why: "paragem은 ‘정류장’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어디서 손 씻을 수 있어요?", answers: ["Onde posso lavar as mãos?"],
        wrong: { "onde posso lavar os mãos": "mãos는 여성 명사라 as예요." },
        tip: { en: "Onde é a casa de banho?", why: "‘화장실이 어디예요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어디에 짐 맡길 수 있어요?", answers: ["Onde posso deixar a bagagem?", "Onde posso deixar as malas?"],
        wrong: { "onde posso deixo a bagagem": "posso 뒤에는 동사원형을 써요: deixar." },
        tip: { en: "Há cacifos aqui?", why: "cacifo는 ‘보관함, 사물함’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "유심 카드 어디서 살 수 있어요?", answers: ["Onde posso comprar um cartão SIM?"],
        ctx: { lead: "bilhetes 대신 ‘유심 카드(um cartão SIM)’를 넣어 보세요.", en: "Onde posso comprar bilhetes?" },
        wrong: { "onde posso comprar uma cartão sim": "cartão은 남성 명사라 um이에요." },
        tip: { en: "Onde vendem cartões SIM?", why: "vender는 ‘팔다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 어디서 커피 마실 수 있어요?", answers: ["Sim, onde posso tomar um café?", "Sim, onde posso beber um café?"],
        dialog: { a: "Precisa de alguma coisa?", aKo: "뭐 필요하세요?" },
        wrong: { "sim onde puedo tomar um café": "puedo는 스페인어예요. 포르투갈어는 posso예요." },
        tip: { en: "Sim, há algum café aqui perto?", why: "‘근처에 카페 있어요?’라는 말이에요." } }
    ]
  };
})(window.EP);
