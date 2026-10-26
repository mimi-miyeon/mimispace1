/* 포르투갈어(유럽) 세션 91. Faltam ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[91] = {
    no: 91, form: "Faltam ~.", stem: "Faltam/Falta/falta/faltam", meaning: "~ 남았어요",
    hint: "Faltam + 숫자/시간",
    intro: {
      blocks: [["Faltam", "(아직) 모자라다, 남았다"], ["~", "숫자 / 시간"]],
      lines: [
        "Faltam + 숫자·시간은 ‘~ 남았어요’예요: Faltam cinco minutos.(5분 남았어요)",
        "하나면 Falta예요: Falta um dia.(하루 남았어요)",
        "‘~이 모자라요, 없어요’도 faltar예요: Falta sal.(소금이 부족해요)"
      ],
      examples: [
        { en: "Faltam cinco minutos.", ko: "5분 남았어요." },
        { en: "Falta pouco!", ko: "얼마 안 남았어요!" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이틀 남았어.", before: "", after: "dois dias.", answers: ["Faltam"],
        wrong: { "falta": "둘 이상이면 faltam이에요.", "quedan": "quedan은 스페인어예요. 포르투갈어는 faltam이에요." },
        tip: { en: "Só faltam dois dias.", why: "só는 ‘겨우, 단지’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "하루 남았어.", before: "", after: "um dia.", answers: ["Falta"],
        wrong: { "faltam": "하나면 falta예요." },
        tip: { en: "É já amanhã!", why: "‘바로 내일이야!’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "얼마 안 남았어!", before: "Falta", after: "!", answers: ["pouco"],
        wrong: { "poco": "poco는 스페인어예요. 포르투갈어는 pouco예요." },
        tip: { en: "Estamos quase!", why: "‘거의 다 왔어!’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "소금이 좀 부족해.", before: "Falta um bocado de", after: ".", answers: ["sal"],
        wrong: { "salt": "salt는 영어예요. 포르투갈어는 sal이에요." },
        tip: { en: "Precisa de mais sal.", why: "‘소금이 더 필요해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "몇 분 남았어?", before: "Quantos minutos", after: "?", answers: ["faltam"],
        wrong: { "falta": "minutos는 여럿이라 faltam이에요." },
        tip: { en: "Quanto tempo falta?", why: "‘시간 얼마나 남았어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "10분 남았어요.", answers: ["Faltam dez minutos."],
        wrong: { "falta dez minutos": "둘 이상이면 faltam이에요." },
        tip: { en: "Só faltam dez minutos.", why: "só는 ‘겨우, 단지’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "휴가까지 일주일 남았어.", answers: ["Falta uma semana para as férias."],
        wrong: { "faltam uma semana para as férias": "일주일은 하나라 falta예요." },
        tip: { en: "As férias são daqui a uma semana.", why: "daqui a는 ‘~ 뒤에’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "부족한 거 하나도 없어요.", answers: ["Não falta nada."],
        wrong: { "falta nada": "‘아무것도 안’은 não ... nada예요." },
        tip: { en: "Está tudo.", why: "‘다 있어요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "기차 출발까지 얼마나 남았어요?", answers: ["Quanto tempo falta para o comboio partir?", "Quanto tempo falta para o comboio?"],
        wrong: { "quanto tempo faltam para o comboio partir": "tempo는 하나라 falta예요." },
        tip: { en: "A que horas parte o comboio?", why: "‘기차 몇 시에 출발해요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "세 시간 남았어요.", answers: ["Faltam três horas."],
        ctx: { lead: "cinco minutos 대신 ‘세 시간(três horas)’을 넣어 보세요.", en: "Faltam cinco minutos." },
        wrong: { "falta três horas": "둘 이상이면 faltam이에요." },
        tip: { en: "Ainda faltam três horas.", why: "ainda는 ‘아직’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 얼마 안 남았어.", answers: ["Não, falta pouco.", "Não, já falta pouco."],
        dialog: { a: "Ainda falta muito?", aKo: "아직 많이 남았어?" },
        wrong: { "não falta poco": "poco는 스페인어예요. 포르투갈어는 pouco예요." },
        tip: { en: "Não, estamos quase a chegar.", why: "estar quase a는 ‘거의 ~하다’예요." } }
    ]
  };
})(window.EP);
