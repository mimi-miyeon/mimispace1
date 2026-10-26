/* 포르투갈어(유럽) 세션 72. Tinha ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[72] = {
    no: 72, form: "Tinha ~.", stem: "Tinha/Tínhamos/tinha", subject: "eu", meaning: "(예전에) ~이 있었어요",
    hint: "Tinha + 명사",
    intro: {
      blocks: [["Tinha", "나는 (그때) 가지고 있었다"], ["~", "무엇"]],
      lines: [
        "Tinha는 ter의 지난 형태예요. ‘(그때) ~이 있었어요, ~을 가지고 있었어요’예요: Tinha um cão.",
        "나이도 tinha로 말해요: Tinha dez anos.(열 살이었어요)",
        "‘~해야 했어요’는 Tinha de ~예요: Tinha de trabalhar."
      ],
      examples: [
        { en: "Quando era pequeno, tinha um cão.", ko: "어렸을 때 개가 있었어요." },
        { en: "Tinha dez anos.", ko: "열 살이었어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "예전에 차가 있었어.", before: "Antes", after: "carro.", answers: ["tinha"],
        wrong: { "tenho": "지금이 아니라 예전이라 tinha예요.", "tenía": "tenía는 스페인어예요. 포르투갈어는 tinha예요." },
        tip: { en: "Já tive carro.", why: "já tive는 ‘(예전에) 가져 본 적 있다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그때 나 스무 살이었어.", before: "Nessa altura, tinha vinte", after: ".", answers: ["anos"],
        wrong: { "ano": "스물은 여럿이라 anos예요." },
        tip: { en: "Era muito novo.", why: "‘아주 어렸어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어제 일해야 했어.", before: "Ontem tinha", after: "trabalhar.", answers: ["de", "que"],
        wrong: { "a": "‘~해야 했다’는 tinha de예요." },
        tip: { en: "Ontem tive de trabalhar.", why: "tive de도 ‘~해야 했다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 고양이 두 마리 있었어.", before: "", after: "dois gatos.", answers: ["Tínhamos"],
        wrong: { "tinha": "‘우리는’이면 tínhamos예요." },
        tip: { en: "Lá em casa havia dois gatos.", why: "havia는 ‘있었다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 시간이 없었어.", before: "Não", after: "tempo.", answers: ["tinha", "tive"],
        wrong: { "tenho": "지난 일이라 tinha예요." },
        tip: { en: "Estava muito ocupado.", why: "‘아주 바빴어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어렸을 때 친구가 많았어.", answers: ["Quando era pequeno, tinha muitos amigos.", "Quando era pequena, tinha muitos amigos."],
        wrong: { "quando era pequeno tenho muitos amigos": "지난 시절이라 tinha예요." },
        tip: { en: "Em criança, tinha muitos amigos.", why: "em criança는 ‘어렸을 때’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그때 돈이 없었어.", answers: ["Nessa altura não tinha dinheiro.", "Naquela altura não tinha dinheiro."],
        wrong: { "nessa altura não tenho dinheiro": "지난 일이라 tinha예요." },
        tip: { en: "Nessa altura estava sem dinheiro.", why: "sem dinheiro는 ‘돈이 없는’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 열이 있었어.", answers: ["Tinha febre."],
        wrong: { "tenho febre": "지난 일이라 tinha예요." },
        tip: { en: "Estava com febre.", why: "estava com도 ‘~이 있었다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그 여자는 머리가 길었어.", answers: ["Ela tinha o cabelo comprido.", "Tinha o cabelo comprido."], subject: "",
        wrong: { "ela tinha o cabelo largo": "largo는 ‘넓은’이에요. ‘긴 머리’는 cabelo comprido예요." },
        tip: { en: "Ela usava o cabelo comprido.", why: "usar는 ‘(머리 모양을) 하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어렸을 때 자전거가 있었어요.", answers: ["Quando era pequeno, tinha uma bicicleta.", "Quando era pequena, tinha uma bicicleta."],
        ctx: { lead: "um cão 대신 ‘자전거(uma bicicleta)’를 넣어 보세요.", en: "Quando era pequeno, tinha um cão." },
        wrong: { "quando era pequeno tinha um bicicleta": "bicicleta는 여성 명사라 uma예요." },
        tip: { en: "Em pequeno, tinha uma bicicleta.", why: "em pequeno는 ‘어렸을 때’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "일이 많았어.", answers: ["Tinha muito trabalho."],
        dialog: { a: "Porque não vieste à festa?", aKo: "파티에 왜 안 왔어?" },
        wrong: { "tenho muito trabalho": "지난 일이라 tinha예요." },
        tip: { en: "Tive muito trabalho.", why: "tive도 ‘있었다’예요." } }
    ]
  };
})(window.EP);
