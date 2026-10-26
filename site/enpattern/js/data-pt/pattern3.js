/* 포르투갈어(유럽) 세션 3. Tenho ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[3] = {
    no: 3, form: "Tenho ~.", stem: "Tenho", subject: "eu", meaning: "나는 ~이 있어요 / ~을 가지고 있어요",
    hint: "Tenho + 명사",
    intro: {
      blocks: [["Tenho", "나는 가지고 있다 (ter)"], ["~", "무엇"]],
      lines: [
        "Tenho는 ter(가지다) 동사의 ‘나’ 형태예요.",
        "물건, 가족, 시간뿐 아니라 나이와 배고픔도 ter로 말해요.",
        "나이는 Tenho trinta anos.처럼 ‘~살을 가지고 있다’로 말해요."
      ],
      examples: [
        { en: "Tenho um irmão.", ko: "나는 남자 형제가 한 명 있어요." },
        { en: "Tenho trinta anos.", ko: "나는 서른 살이에요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 고양이 한 마리 있어.", before: "", after: "um gato.", answers: ["Tenho"],
        wrong: { "tem": "tem은 ‘그/그녀는 가지고 있다’예요. ‘나는’은 tenho예요.", "sou": "‘가지고 있다’는 ser가 아니라 ter(tenho)예요.", "estou": "‘가지고 있다’는 estar가 아니라 ter(tenho)예요." },
        tip: { en: "Tenho um gatinho.", why: "-inho를 붙이면 ‘작고 귀여운’ 느낌이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 차가 있어.", before: "Tenho", after: "carro.", answers: ["um"],
        wrong: { "uma": "carro는 남성 명사라 uma가 아니라 um이에요.", "o": "처음 말하는 물건 하나에는 o가 아니라 um을 써요." },
        tip: { en: "Tenho carro.", why: "‘차 있어요’라고 할 때 um을 빼고 말하기도 해요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 여자 형제가 한 명 있어.", before: "Tenho", after: "irmã.", answers: ["uma"],
        wrong: { "um": "irmã는 여성 명사라 um이 아니라 uma예요." },
        tip: { en: "Tenho uma irmã mais nova.", why: "mais nova는 ‘더 어린’, 즉 동생이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 서른 살이야.", before: "Tenho trinta", after: ".", answers: ["anos"],
        wrong: { "ano": "서른은 여럿이라 anos로 써요." },
        tip: { en: "Fiz trinta anos este ano.", why: "‘올해 서른이 됐어요’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 시간 있어.", before: "Tenho", after: ".", answers: ["tempo"],
        wrong: { "hora": "‘시간 여유’는 tempo예요. hora는 ‘(몇) 시, 한 시간’이에요." },
        tip: { en: "Estou livre.", why: "‘한가해요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 배고파.", answers: ["Tenho fome."], alts: ["Estou com fome."],
        wrong: { "estou fome": "estar로 말할 때는 com이 필요해요: estou com fome.", "sou fome": "배고픔은 ter로 말해요: tenho fome." },
        tip: { en: "Tenho muita fome.", why: "muita를 넣으면 ‘아주 배고파요’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 형제가 둘 있어.", answers: ["Tenho dois irmãos.", "Tenho 2 irmãos."],
        wrong: { "tenho duas irmãos": "irmãos는 남성이라 dois예요. duas는 여성 명사 앞에 써요.", "tenho dois irmão": "둘 이상이라 irmãos로 써요." },
        tip: { en: "Somos três irmãos.", why: "‘우리는 삼 남매예요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 회의가 있어.", answers: ["Tenho uma reunião hoje.", "Hoje tenho uma reunião."],
        wrong: { "tenho um reunião hoje": "reunião는 여성 명사라 uma예요." },
        tip: { en: "Tenho reunião às três.", why: "às três는 ‘세 시에’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 질문이 하나 있어.", answers: ["Tenho uma pergunta."], alts: ["Tenho uma questão."],
        wrong: { "tenho um pergunta": "pergunta는 여성 명사라 uma예요." },
        tip: { en: "Posso fazer uma pergunta?", why: "‘질문해도 될까요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 개 한 마리 있어.", answers: ["Tenho um cão."],
        ctx: { lead: "gato 대신 ‘개(cão)’를 넣어 보세요.", en: "Tenho um gato." },
        wrong: { "tenho um cachorro": "cachorro는 브라질에서 주로 써요. 포르투갈에서는 cão예요.", "tenho uma cão": "cão는 남성 명사라 um이에요." },
        tip: { en: "Tenho um cãozinho.", why: "-zinho를 붙이면 ‘작은 강아지’ 느낌이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 여자 형제가 한 명 있어요.", answers: ["Sim, tenho uma irmã."],
        dialog: { a: "Tem irmãos?", aKo: "형제 있어요?" },
        wrong: { "sim tenho um irmã": "irmã는 여성 명사라 uma예요." },
        tip: { en: "Sim, tenho uma irmã mais velha.", why: "mais velha는 ‘나이가 더 많은’, 언니·누나예요." } }
    ]
  };
})(window.EP);
