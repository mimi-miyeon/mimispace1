/* 포르투갈어(유럽) 세션 83. Estou a procurar ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[83] = {
    no: 83, form: "Estou a procurar ~.", stem: "Estou a procurar/Estou à procura de/Estou à procura/procurar/à procura", subject: "eu", meaning: "~을 찾고 있어요",
    hint: "Estou a procurar + 명사",
    intro: {
      blocks: [["Estou a procurar", "나는 찾고 있다"], ["~", "무엇"]],
      lines: [
        "Estou a procurar ~는 ‘~을 찾고 있어요’예요. 가게나 길에서 많이 써요: Estou a procurar uma farmácia.",
        "Estou à procura de ~도 같은 뜻이에요.",
        "점원이 물을 때는 Está à procura de alguma coisa?(뭐 찾으세요?)예요."
      ],
      examples: [
        { en: "Estou a procurar uma farmácia.", ko: "약국을 찾고 있어요." },
        { en: "Estou à procura de um presente.", ko: "선물을 찾고 있어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 열쇠 찾고 있어.", before: "Estou a", after: "as chaves.", answers: ["procurar"],
        wrong: { "buscar": "포르투갈에서 buscar는 ‘가지러 가다’예요. ‘찾다’는 procurar예요.", "procurando": "-ndo는 브라질식이에요. 포르투갈에서는 a procurar예요." },
        tip: { en: "Não encontro as chaves.", why: "encontrar는 ‘찾아내다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "일자리 찾고 있어요.", before: "Estou à", after: "de emprego.", answers: ["procura"],
        wrong: { "busca": "포르투갈에서는 보통 à procura de예요." },
        tip: { en: "Estou a procurar trabalho.", why: "trabalho도 ‘일자리’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭐 찾으세요?", before: "Está à procura de alguma", after: "?", answers: ["coisa"],
        wrong: { "cosa": "cosa는 스페인어예요. 포르투갈어는 coisa예요." },
        tip: { en: "Posso ajudar?", why: "‘도와드릴까요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 이 주소 찾고 있어.", before: "Estou a procurar esta", after: ".", answers: ["morada"],
        wrong: { "dirección": "dirección은 스페인어예요. 포르투갈어로 주소는 morada예요." },
        tip: { en: "Sabe onde fica esta rua?", why: "rua는 ‘거리’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 호텔 찾고 있어요.", before: "", after: "à procura do hotel.", answers: ["Estamos"],
        wrong: { "estou": "‘우리는’이면 estamos예요." },
        tip: { en: "Onde fica o hotel?", why: "‘호텔이 어디 있어요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "화장실 찾고 있어요.", answers: ["Estou à procura da casa de banho.", "Estou a procurar a casa de banho."],
        wrong: { "estou a procurar o banheiro": "banheiro는 브라질 말이에요. 포르투갈에서는 casa de banho예요." },
        tip: { en: "Onde é a casa de banho?", why: "‘화장실이 어디예요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "더 싼 거 찾고 있어요.", answers: ["Estou à procura de uma coisa mais barata.", "Estou a procurar uma coisa mais barata.", "Estou à procura de algo mais barato.", "Estou a procurar algo mais barato."],
        wrong: { "estou buscando algo mais barato": "-ndo는 브라질식이에요. 포르투갈에서는 estou a procurar예요." },
        tip: { en: "Tem alguma coisa mais em conta?", why: "em conta는 ‘저렴한’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 내 휴대폰 찾고 있어.", answers: ["Estou à procura do meu telemóvel.", "Estou a procurar o meu telemóvel."],
        wrong: { "estou a procurar o meu celular": "celular는 브라질 말이에요. 포르투갈에서는 telemóvel이에요." },
        tip: { en: "Viste o meu telemóvel?", why: "‘내 휴대폰 봤어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 집 구하고 있어.", answers: ["Estou à procura de casa.", "Estou a procurar casa.", "Estou à procura de um apartamento.", "Estou a procurar um apartamento."],
        wrong: { "estou a buscar casa": "포르투갈에서 buscar는 ‘가지러 가다’예요. ‘찾다’는 procurar예요." },
        tip: { en: "Quero alugar uma casa.", why: "alugar는 ‘빌리다, 임대하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "은행을 찾고 있어요.", answers: ["Estou a procurar um banco."],
        ctx: { lead: "farmácia 대신 ‘은행(banco)’을 넣어 보세요.", en: "Estou a procurar uma farmácia." },
        wrong: { "estou a procurar uma banco": "banco는 남성 명사라 um이에요." },
        tip: { en: "Há algum banco aqui perto?", why: "‘근처에 은행 있어요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 신트라 가는 버스를 찾고 있어요.", answers: ["Sim, estou à procura do autocarro para Sintra.", "Sim, estou a procurar o autocarro para Sintra."],
        dialog: { a: "Precisa de ajuda?", aKo: "도와드릴까요?" },
        wrong: { "sim estou buscando o autocarro para sintra": "-ndo는 브라질식이에요. 포르투갈에서는 estou a procurar예요." },
        tip: { en: "Sim, sabe onde apanho o autocarro para Sintra?", why: "apanhar는 ‘(차를) 타다’예요." } }
    ]
  };
})(window.EP);
