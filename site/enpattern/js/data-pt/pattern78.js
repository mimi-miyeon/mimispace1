/* 포르투갈어(유럽) 세션 78. Daqui a ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[78] = {
    no: 78, form: "Daqui a ~.", stem: "daqui a/Daqui a/daqui", meaning: "(지금부터) ~ 뒤에",
    hint: "Daqui a + 시간",
    intro: {
      blocks: [["Daqui a", "지금부터 ~ 뒤에"], ["~", "시간"]],
      lines: [
        "Daqui a + 시간은 ‘(지금부터) ~ 뒤에’예요: daqui a cinco minutos.(5분 뒤에)",
        "앞으로의 일에 써요: Chego daqui a pouco.(곧 도착해)",
        "‘~ 전에’는 há + 시간이에요: há cinco minutos.(5분 전에)"
      ],
      examples: [
        { en: "Chego daqui a dez minutos.", ko: "10분 뒤에 도착해요." },
        { en: "Até daqui a pouco!", ko: "이따 봐요!" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "5분 뒤에 출발해.", before: "Saímos daqui", after: "cinco minutos.", answers: ["a"],
        wrong: { "en": "en은 스페인어예요. ‘~ 뒤에’는 daqui a예요.", "de": "‘~ 뒤에’는 daqui a예요." },
        tip: { en: "Saímos dentro de cinco minutos.", why: "dentro de도 ‘~ 뒤에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "곧 도착해.", before: "Chego daqui a", after: ".", answers: ["pouco", "bocado"],
        wrong: { "poco": "poco는 스페인어예요. 포르투갈어는 pouco예요." },
        tip: { en: "Estou quase a chegar.", why: "estar quase a는 ‘거의 ~하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "일주일 뒤에 돌아와.", before: "Volto daqui a uma", after: ".", answers: ["semana"],
        wrong: { "semanas": "uma 뒤에는 하나만: semana예요." },
        tip: { en: "Volto na próxima semana.", why: "‘다음 주에 돌아와’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이따 봐!", before: "Até daqui a", after: "!", answers: ["pouco", "bocado"],
        wrong: { "luego": "luego는 스페인어예요. 포르투갈어는 até daqui a pouco예요." },
        tip: { en: "Até já!", why: "até já는 ‘금방 봐!’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "두 시간 뒤에 시작해요.", before: "Começa daqui a duas", after: ".", answers: ["horas"],
        wrong: { "hora": "두 시간은 여럿이라 horas예요." },
        tip: { en: "Começa às cinco.", why: "‘5시에 시작해요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "한 시간 뒤에 전화할게.", answers: ["Ligo-te daqui a uma hora.", "Daqui a uma hora ligo-te."],
        wrong: { "te ligo daqui a uma hora": "포르투갈에서는 te를 동사 뒤에 붙여요: ligo-te." },
        tip: { en: "Depois ligo-te.", why: "depois는 ‘나중에’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "3일 뒤에 떠나요.", answers: ["Parto daqui a três dias.", "Vou embora daqui a três dias."],
        wrong: { "parto en três dias": "en은 스페인어예요. ‘~ 뒤에’는 daqui a예요." },
        tip: { en: "Vou-me embora na sexta.", why: "‘금요일에 떠나’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "1년 뒤에 결혼해요.", answers: ["Caso-me daqui a um ano.", "Vou casar daqui a um ano."],
        wrong: { "me caso daqui a um ano": "포르투갈에서는 me를 동사 뒤에 붙여요: caso-me." },
        tip: { en: "Vou casar no próximo ano.", why: "‘내년에 결혼해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "버스 몇 분 뒤에 와요?", answers: ["O autocarro chega daqui a quantos minutos?", "Daqui a quantos minutos chega o autocarro?"],
        wrong: { "o autocarro chega daqui a cuántos minutos": "cuántos는 스페인어예요. 포르투갈어는 quantos예요." },
        tip: { en: "Quanto tempo falta para o autocarro?", why: "faltar는 ‘남다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "30분 뒤에 도착해요.", answers: ["Chego daqui a meia hora."],
        ctx: { lead: "dez minutos 대신 ‘반 시간(meia hora)’을 넣어 보세요.", en: "Chego daqui a dez minutos." },
        wrong: { "chego daqui a media hora": "media hora는 스페인어예요. 포르투갈어는 meia hora예요." },
        tip: { en: "Chego dentro de meia hora.", why: "dentro de도 ‘~ 뒤에’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "곧 도착해!", answers: ["Chego daqui a pouco!", "Chego daqui a bocado!"],
        dialog: { a: "Onde estás?", aKo: "너 어디야?" },
        wrong: { "chego en un momento": "스페인어예요. 포르투갈어는 daqui a pouco예요." },
        tip: { en: "Estou quase a chegar!", why: "estar quase a는 ‘거의 ~하다’예요." } }
    ]
  };
})(window.EP);
