/* 포르투갈어(유럽) 세션 28. Quanto custa ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[28] = {
    no: 28, form: "Quanto custa ~?", stem: "Quanto custa/Quanto custam/Quanto é/Custa", meaning: "~ 얼마예요?",
    hint: "Quanto custa + 물건?",
    intro: {
      blocks: [["Quanto", "얼마"], ["custa", "(값이) 나가다"], ["~", "물건"]],
      lines: [
        "Quanto custa ~?는 ‘~ 얼마예요?’예요. 여럿이면 Quanto custam ~?예요.",
        "계산할 때는 Quanto é?(얼마예요?)라고 짧게 물어요.",
        "가격은 ~ euros: Custa cinco euros. (1유로는 um euro)"
      ],
      examples: [
        { en: "Quanto custa este casaco?", ko: "이 코트 얼마예요?" },
        { en: "Quanto é?", ko: "(전부) 얼마예요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이 책 얼마예요?", before: "Quanto", after: "este livro?", answers: ["custa"],
        wrong: { "custam": "책 한 권이라 custa예요. custam은 여럿일 때예요.", "cuesta": "cuesta는 스페인어예요. 포르투갈어는 custa예요." },
        tip: { en: "Qual é o preço deste livro?", why: "preço는 ‘가격’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이 신발 얼마예요?", before: "Quanto", after: "estes sapatos?", answers: ["custam"],
        wrong: { "custa": "sapatos는 여럿이라 custam이에요." },
        tip: { en: "Quanto são estes sapatos?", why: "말할 때는 são으로도 물어요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 3유로예요.", before: "Custa três", after: ".", answers: ["euros"],
        wrong: { "euro": "둘 이상이면 euros예요." },
        tip: { en: "São três euros.", why: "são + 가격으로도 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "(전부) 얼마예요?", before: "Quanto", after: "?", answers: ["é"],
        wrong: { "está": "계산할 때는 quanto é?라고 해요." },
        tip: { en: "Quanto devo?", why: "‘얼마 드리면 돼요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "커피 한 잔 얼마예요?", before: "Quanto custa", after: "café?", answers: ["um"],
        wrong: { "uma": "café는 남성 명사라 um이에요." },
        tip: { en: "Quanto é um café?", why: "quanto é로도 물어요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 가방 얼마예요?", answers: ["Quanto custa esta mala?", "Quanto custa esta bolsa?"],
        wrong: { "quanto custa este mala": "mala는 여성 명사라 esta예요." },
        tip: { en: "Qual é o preço desta mala?", why: "preço는 ‘가격’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 티셔츠 얼마예요?", answers: ["Quanto custa esta t-shirt?", "Quanto é esta t-shirt?"],
        wrong: { "quanto custa este t-shirt": "t-shirt는 여성 명사라 esta예요." },
        tip: { en: "Qual é o preço desta t-shirt?", why: "preço는 ‘가격’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 사과들 얼마예요?", answers: ["Quanto custam estas maçãs?"], alts: ["Quanto são estas maçãs?"],
        wrong: { "quanto custa estas maçãs": "maçãs는 여럿이라 custam이에요." },
        tip: { en: "A como estão as maçãs?", why: "시장에서 ‘사과 얼마예요?’라고 할 때 써요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "표 한 장 얼마예요?", answers: ["Quanto custa um bilhete?", "Quanto é um bilhete?"],
        wrong: { "quanto custa uma bilhete": "bilhete는 남성 명사라 um이에요." },
        tip: { en: "Qual é o preço do bilhete?", why: "preço는 ‘가격’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 우산 얼마예요?", answers: ["Quanto custa este guarda-chuva?", "Quanto é este guarda-chuva?"],
        ctx: { lead: "casaco 대신 ‘우산(guarda-chuva)’을 넣어 보세요.", en: "Quanto custa este casaco?" },
        wrong: { "quanto custa esta guarda-chuva": "guarda-chuva는 남성 명사라 este예요." },
        tip: { en: "Qual é o preço deste guarda-chuva?", why: "preço는 ‘가격’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "얼마예요?", answers: ["Quanto é?", "Quanto custa?"],
        dialog: { a: "São dois cafés e um pastel de nata.", aKo: "커피 두 잔이랑 나타 하나요." },
        wrong: { "quanto está": "계산할 때는 quanto é?라고 해요." },
        tip: { en: "Quanto é tudo?", why: "tudo는 ‘전부’예요." } }
    ]
  };
})(window.EP);
