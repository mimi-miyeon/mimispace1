/* 포르투갈어(유럽) 세션 59. Dá-me ~? (형식은 pattern1.js 위쪽 설명과 같다)
   상대에게 부탁하는 말이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[59] = {
    no: 59, form: "Dá-me ~?", stem: "Dá-me/Dás-me/dar-me", meaning: "~ 줄래요? / ~ 주세요",
    hint: "Dá-me + 명사?",
    intro: {
      blocks: [["Dá", "줘"], ["-me", "나에게"], ["~", "무엇"]],
      lines: [
        "Dá-me ~는 ‘~ 줘’예요. 친구나 가족에게 써요: Dá-me a mão.(손 줘)",
        "친구에게 부드럽게 물을 때는 Dás-me ~?(~ 줄래?)예요.",
        "모르는 사람에게는 Pode dar-me ~?(~ 주실래요?)가 정중해요."
      ],
      examples: [
        { en: "Dá-me a tua mão.", ko: "손 줘." },
        { en: "Dás-me o sal?", ko: "소금 좀 줄래?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "물 좀 줘.", before: "", after: "água, por favor.", answers: ["Dá-me"],
        wrong: { "me dá": "포르투갈에서는 me를 동사 뒤에 붙여요: dá-me.", "dame": "dame는 스페인어예요. 포르투갈어는 dá-me예요." },
        tip: { en: "Passas-me a água?", why: "passar는 ‘건네주다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "펜 좀 줄래?", before: "", after: "uma caneta?", answers: ["Dás-me"],
        wrong: { "me dás": "포르투갈에서는 me를 동사 뒤에 붙여요: dás-me." },
        tip: { en: "Emprestas-me uma caneta?", why: "emprestar는 ‘빌려주다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "계산서 주실래요?", before: "Pode dar-me a", after: "?", answers: ["conta"],
        wrong: { "cuenta": "cuenta는 스페인어예요. 포르투갈어는 conta예요." },
        tip: { en: "A conta, se faz favor.", why: "짧게 이렇게 말해도 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "잠깐만 시간 줘.", before: "Dá-me um", after: ".", answers: ["minuto", "momento", "segundo"],
        wrong: { "minutos": "um 뒤에는 하나만: minuto예요." },
        tip: { en: "Espera um bocadinho.", why: "um bocadinho는 ‘잠깐’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 나한테 줘.", before: "Dá-me", after: ".", answers: ["isso"],
        wrong: { "eso": "eso는 스페인어예요. 포르투갈어는 isso예요." },
        tip: { en: "Passa-me isso.", why: "passar는 ‘건네주다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "열쇠 줘.", answers: ["Dá-me as chaves.", "Dá-me a chave."],
        wrong: { "me dá as chaves": "포르투갈에서는 me를 동사 뒤에 붙여요: dá-me." },
        tip: { en: "Passa-me as chaves.", why: "passar는 ‘건네주다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "빵 좀 줄래?", answers: ["Dás-me o pão?"],
        wrong: { "me dás o pão": "포르투갈에서는 me를 동사 뒤에 붙여요: dás-me." },
        tip: { en: "Passas-me o pão?", why: "passar는 ‘건네주다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "영수증 주실래요?", answers: ["Pode dar-me a fatura?", "Pode dar-me o recibo?"],
        wrong: { "pode darme a fatura": "dar와 me 사이에 하이픈을 써요: dar-me." },
        tip: { en: "Queria a fatura, por favor.", why: "queria는 정중한 ‘~ 주세요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "전화번호 줄래?", answers: ["Dás-me o teu número?"],
        wrong: { "me dás o teu número": "포르투갈에서는 me를 동사 뒤에 붙여요: dás-me." },
        tip: { en: "Qual é o teu número?", why: "‘번호가 뭐야?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "가방 줘.", answers: ["Dá-me a mala."],
        ctx: { lead: "a tua mão 대신 ‘가방(a mala)’을 넣어 보세요.", en: "Dá-me a tua mão." },
        wrong: { "dá-me o mala": "mala는 여성 명사라 a mala예요." },
        tip: { en: "Passa-me a mala.", why: "passar는 ‘건네주다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 휴지 좀 줄래?", answers: ["Sim, dás-me um lenço?", "Sim, dás-me um lenço de papel?"],
        dialog: { a: "Precisas de alguma coisa?", aKo: "뭐 필요한 거 있어?" },
        wrong: { "sim me dás um lenço": "포르투갈에서는 me를 동사 뒤에 붙여요: dás-me." },
        tip: { en: "Sim, arranjas-me um lenço?", why: "arranjar는 ‘구해 주다’예요." } }
    ]
  };
})(window.EP);
