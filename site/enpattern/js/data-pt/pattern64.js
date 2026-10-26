/* 포르투갈어(유럽) 세션 64. Não é preciso ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[64] = {
    no: 64, form: "Não é preciso ~.", stem: "Não é preciso/não é preciso", meaning: "~할 필요 없어요",
    hint: "Não é preciso + 동사원형",
    intro: {
      blocks: [["Não é preciso", "~할 필요 없다"], ["~", "동사원형 / 명사"]],
      lines: [
        "Não é preciso + 동사원형은 ‘~할 필요 없어요, 안 해도 돼요’예요: Não é preciso pagar.",
        "한마디로 ‘괜찮아요, 필요 없어요’는 Não é preciso.예요.",
        "친구에게는 Escusas de ~(~할 필요 없어)라는 포르투갈식 말도 써요."
      ],
      examples: [
        { en: "Não é preciso pagar.", ko: "돈 안 내도 돼요." },
        { en: "Obrigado, não é preciso.", ko: "고마워요, 괜찮아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "예약 안 해도 돼요.", before: "Não é", after: "reservar.", answers: ["preciso", "necessário"],
        wrong: { "necesario": "necesario는 스페인어예요. 포르투갈어는 preciso(또는 necessário)예요." },
        tip: { en: "Não precisa de reservar.", why: "não precisa de는 ‘~할 필요 없어요’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "걱정할 필요 없어.", before: "Não é preciso ficar", after: ".", answers: ["preocupado", "preocupada"],
        wrong: { "preocupar": "ficar 뒤에는 형용사 preocupado를 써요." },
        tip: { en: "Não te preocupes.", why: "‘걱정하지 마’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "서두를 필요 없어요.", before: "Não é preciso ter", after: ".", answers: ["pressa"],
        wrong: { "prisa": "prisa는 스페인어예요. 포르투갈어는 pressa예요." },
        tip: { en: "Com calma.", why: "‘천천히 하세요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "고마워, 괜찮아(필요 없어).", before: "Obrigado, não é", after: ".", answers: ["preciso", "necessário"],
        wrong: { "precisa": "‘필요 없어’는 não é preciso예요." },
        tip: { en: "Obrigado, está bem assim.", why: "‘고마워, 이대로 괜찮아’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "다시 올 필요 없어요.", before: "Não é preciso", after: "outra vez.", answers: ["voltar", "vir"],
        wrong: { "volta": "preciso 뒤에는 동사원형을 써요: voltar." },
        tip: { en: "Não tem de voltar.", why: "não tem de는 ‘~하지 않아도 돼요’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "신발 안 벗어도 돼요.", answers: ["Não é preciso tirar os sapatos."],
        wrong: { "é preciso não tirar os sapatos": "‘안 해도 된다’는 não é preciso예요. é preciso não는 ‘하지 말아야 한다’예요." },
        tip: { en: "Pode ficar de sapatos.", why: "‘신발 신은 채로 있어도 돼요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 말할 필요 없어.", answers: ["Não é preciso dizer isso."],
        wrong: { "não é preciso digo isso": "preciso 뒤에는 동사원형을 써요: dizer." },
        tip: { en: "Escusas de dizer isso.", why: "escusar de는 포르투갈식 ‘~할 필요 없다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "영수증 필요 없어요, 고마워요.", answers: ["Não é preciso fatura, obrigado.", "Não é preciso fatura, obrigada.", "Não é preciso recibo, obrigado.", "Não é preciso recibo, obrigada."],
        wrong: { "não é preciso fatura gracias": "gracias는 스페인어예요. 포르투갈어는 obrigado(obrigada)예요." },
        tip: { en: "Não preciso de fatura, obrigado.", why: "não preciso de는 ‘나는 ~이 필요 없어’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "안 와도 돼.", answers: ["Não é preciso vir."],
        wrong: { "não é preciso vem": "preciso 뒤에는 동사원형을 써요: vir." },
        tip: { en: "Escusas de vir.", why: "escusar de는 포르투갈식 ‘~할 필요 없다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "안 기다리셔도 돼요.", answers: ["Não é preciso esperar."],
        ctx: { lead: "pagar 대신 ‘기다리다(esperar)’를 넣어 보세요.", en: "Não é preciso pagar." },
        wrong: { "não é preciso espera": "preciso 뒤에는 동사원형을 써요: esperar." },
        tip: { en: "Pode ir.", why: "‘가셔도 돼요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니요, 아무것도 안 가져오셔도 돼요.", answers: ["Não, não é preciso trazer nada.", "Não é preciso trazer nada."],
        dialog: { a: "Quer que eu traga alguma coisa?", aKo: "뭐 좀 가져갈까요?" },
        wrong: { "não é preciso trazer algo": "‘아무것도 ~ 않다’는 nada예요." },
        tip: { en: "Não, não traga nada.", why: "‘아무것도 가져오지 마세요’라는 말이에요." } }
    ]
  };
})(window.EP);
