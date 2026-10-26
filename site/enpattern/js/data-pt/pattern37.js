/* 포르투갈어(유럽) 세션 37. Não sei ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[37] = {
    no: 37, form: "Não sei ~.", stem: "Não sei", subject: "eu", meaning: "~인지 몰라요",
    hint: "Não sei se/onde/como + 문장",
    intro: {
      blocks: [["Não sei", "나는 모른다"], ["se / onde / como", "~인지 / 어디 / 어떻게"], ["~", "문장"]],
      lines: [
        "Não sei 뒤에 se(~인지), onde(어디), como(어떻게), quando(언제)를 붙여요.",
        "Não sei se posso ir.(갈 수 있을지 모르겠어요)",
        "뒤 문장은 보통 그대로 현재형이에요: Não sei onde fica."
      ],
      examples: [
        { en: "Não sei onde fica.", ko: "어디 있는지 몰라요." },
        { en: "Não sei se posso ir.", ko: "갈 수 있을지 모르겠어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그 사람이 올지 모르겠어.", before: "Não sei", after: "ele vem.", answers: ["se"],
        wrong: { "si": "si는 스페인어예요. 포르투갈어는 se예요.", "que": "‘~인지’는 se예요." },
        tip: { en: "Não tenho a certeza se ele vem.", why: "não tenho a certeza는 ‘확실하지 않다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "역이 어디 있는지 몰라요.", before: "Não sei", after: "fica a estação.", answers: ["onde"],
        wrong: { "donde": "donde는 스페인어예요. 포르투갈어는 onde예요." },
        tip: { en: "Sabe onde fica a estação?", why: "‘역이 어디 있는지 아세요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떻게 말해야 할지 모르겠어.", before: "Não sei", after: "dizer.", answers: ["como"],
        wrong: { "cómo": "cómo는 스페인어예요. 포르투갈어는 악센트 없는 como예요." },
        tip: { en: "Não sei o que dizer.", why: "o que dizer는 ‘뭐라고 말할지’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "몇 시인지 몰라요.", before: "Não sei que", after: "são.", answers: ["horas"],
        wrong: { "hora": "‘몇 시’는 que horas예요." },
        tip: { en: "Sabe que horas são?", why: "‘몇 시인지 아세요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 사람 이름이 뭔지 몰라.", before: "Não sei como ele se", after: ".", answers: ["chama"],
        wrong: { "chama-se": "como 뒤에서는 se가 동사 앞에 와요: como ele se chama." },
        tip: { en: "Não sei o nome dele.", why: "dele는 ‘그의’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "언제 시작하는지 몰라요.", answers: ["Não sei quando começa."],
        wrong: { "não sei quando comença": "começa는 ç를 써요. comença는 없는 말이에요." },
        tip: { en: "Não sei a que horas começa.", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "얼마인지 몰라요.", answers: ["Não sei quanto custa.", "Não sei quanto é."],
        wrong: { "não sei quanto cuesta": "cuesta는 스페인어예요. 포르투갈어는 custa예요." },
        tip: { en: "Não sei o preço.", why: "preço는 ‘가격’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "뭘 해야 할지 모르겠어.", answers: ["Não sei o que fazer."],
        wrong: { "sei não o que fazer": "não는 sei 앞에 써요: não sei." },
        tip: { en: "Não faço ideia do que fazer.", why: "não faço ideia는 ‘전혀 모르겠다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그게 사실인지 모르겠어.", answers: ["Não sei se é verdade."],
        wrong: { "não sei se está verdade": "‘사실이다’는 é verdade예요." },
        tip: { en: "Não sei se isso é verdade.", why: "isso는 ‘그것’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "시간이 있을지 모르겠어요.", answers: ["Não sei se tenho tempo."],
        ctx: { lead: "posso ir 대신 ‘시간이 있다(tenho tempo)’를 넣어 보세요.", en: "Não sei se posso ir." },
        wrong: { "não sei si tenho tempo": "si는 스페인어예요. 포르투갈어는 se예요." },
        tip: { en: "Ainda não sei se tenho tempo.", why: "ainda não는 ‘아직 ~ 않다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "몰라.", answers: ["Não sei."],
        dialog: { a: "Onde está a Ana?", aKo: "아나 어디 있어?" },
        wrong: { "no sé": "no sé는 스페인어예요. 포르투갈어는 não sei예요." },
        tip: { en: "Não faço ideia.", why: "‘전혀 모르겠어’라는 말이에요." } }
    ]
  };
})(window.EP);
