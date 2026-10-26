/* 포르투갈어(유럽) 세션 27. Há ~ que ~. (형식은 pattern1.js 위쪽 설명과 같다)
   문장이 há로 시작해서 subject를 두지 않는다 (Eu를 넣으면 어색하다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[27] = {
    no: 27, form: "Há ~ que ~.", stem: "Há", meaning: "~한 지 (기간)이 됐어요",
    hint: "Há + 기간 + que + 현재형",
    intro: {
      blocks: [["Há", "(시간이) 지났다"], ["~", "기간"], ["que", "~한 지"], ["~", "현재형 문장"]],
      lines: [
        "Há + 기간 + que + 현재형은 ‘~한 지 (기간)이 됐어요’예요: Há dois anos que vivo cá.",
        "기간을 뒤에 붙여도 돼요: Vivo cá há dois anos.",
        "‘얼마나 됐어요?’는 Há quanto tempo ~?예요. 브라질식 faz는 쓰지 않아요."
      ],
      examples: [
        { en: "Há dois anos que vivo em Lisboa.", ko: "리스본에 산 지 2년 됐어요." },
        { en: "Há quanto tempo estuda português?", ko: "포르투갈어 공부한 지 얼마나 됐어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "여기서 일한 지 3년 됐어.", before: "", after: "três anos que trabalho aqui.", answers: ["Há"],
        wrong: { "a": "há는 h와 악센트까지 써야 해요. a는 다른 말이에요.", "faz": "브라질에서는 faz도 쓰지만, 포르투갈에서는 há예요." },
        tip: { en: "Trabalho aqui há três anos.", why: "há + 기간을 뒤에 붙여도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 기다린 지 한 시간 됐어.", before: "Há uma hora", after: "estou à tua espera.", answers: ["que"],
        wrong: { "de": "há + 기간 뒤에는 que예요." },
        tip: { en: "Estou à tua espera há uma hora.", why: "há + 기간을 뒤에 붙여도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "포르투갈어 배운 지 6개월 됐어.", before: "Há seis", after: "que aprendo português.", answers: ["meses"],
        wrong: { "mês": "여섯 달은 여럿이라 meses예요." },
        tip: { en: "Aprendo português há meio ano.", why: "meio ano는 ‘반년’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "얼마나 됐어요?", before: "Há quanto", after: "?", answers: ["tempo"],
        wrong: { "hora": "‘얼마나 오래’는 quanto tempo예요. hora는 ‘한 시간’이에요." },
        tip: { en: "Desde quando?", why: "‘언제부터요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 사람 못 본 지 오래됐어.", before: "Há muito tempo que não o", after: ".", answers: ["vejo"],
        wrong: { "vi": "há ... que 뒤에는 지금까지 이어지는 일이라 현재형 vejo예요." },
        tip: { en: "Já não o vejo há muito tempo.", why: "já não는 ‘더는 ~ 않다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "결혼한 지 5년 됐어.", answers: ["Há cinco anos que estou casado.", "Há cinco anos que estou casada.", "Estou casado há cinco anos.", "Estou casada há cinco anos."],
        wrong: { "faz cinco anos que estou casado": "브라질에서는 faz도 쓰지만, 포르투갈에서는 há예요." },
        tip: { en: "Casei-me há cinco anos.", why: "과거형 + há는 ‘~ 전에’예요. ‘5년 전에 결혼했어요’." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "기다리신 지 얼마나 됐어요?", answers: ["Há quanto tempo está à espera?"],
        wrong: { "faz quanto tempo que está à espera": "포르투갈에서는 faz 대신 há예요." },
        tip: { en: "Está à espera há muito tempo?", why: "‘오래 기다리셨어요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "여기 산 지 얼마 안 됐어.", answers: ["Há pouco tempo que vivo aqui.", "Vivo aqui há pouco tempo."],
        wrong: { "há pouco tempo que vivi aqui": "지금도 사니까 현재형 vivo예요." },
        tip: { en: "Mudei-me para cá há pouco tempo.", why: "mudar-se는 ‘이사하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "비 안 온 지 한 달 됐어.", answers: ["Há um mês que não chove.", "Não chove há um mês."],
        wrong: { "faz um mês que não chove": "브라질에서는 faz도 쓰지만, 포르투갈에서는 há예요." },
        tip: { en: "Já não chove há um mês.", why: "já não는 ‘더는 ~ 않다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "리스본에 산 지 10년 됐어.", answers: ["Há dez anos que vivo em Lisboa.", "Vivo em Lisboa há dez anos."],
        ctx: { lead: "dois anos 대신 ‘10년(dez anos)’을 넣어 보세요.", en: "Há dois anos que vivo em Lisboa." },
        wrong: { "há dez anos que vivi em lisboa": "지금도 사니까 현재형 vivo예요." },
        tip: { en: "Moro em Lisboa há dez anos.", why: "morar도 ‘살다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "1년 됐어.", answers: ["Há um ano.", "Há um ano que estudo português.", "Estudo há um ano."],
        dialog: { a: "Há quanto tempo estudas português?", aKo: "포르투갈어 공부한 지 얼마나 됐어?" },
        wrong: { "faz um ano": "브라질에서는 faz도 쓰지만, 포르투갈에서는 há예요." },
        tip: { en: "Há mais ou menos um ano.", why: "mais ou menos는 ‘대략’이에요." } }
    ]
  };
})(window.EP);
