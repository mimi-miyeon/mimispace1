/* 포르투갈어(유럽) 세션 45. Estou a pensar em ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[45] = {
    no: 45, form: "Estou a pensar em ~.", stem: "Estou a pensar/Estava a pensar/Estás a pensar", subject: "eu", meaning: "~할까 생각 중이에요",
    hint: "Estou a pensar em + 동사원형",
    intro: {
      blocks: [["Estou a pensar", "나는 생각하고 있다"], ["em", "~에 대해"], ["~", "동사원형 / 사람·일"]],
      lines: [
        "Estou a pensar em + 동사원형은 ‘~할까 생각 중이에요’예요: Estou a pensar em mudar de casa.",
        "‘~를 생각하고 있어요(사람·일)’도 em이에요: Estou a pensar em ti.",
        "em 뒤에 관사가 오면 줄여요: em + o = no (Estou a pensar no problema)."
      ],
      examples: [
        { en: "Estou a pensar em viajar.", ko: "여행 갈까 생각 중이에요." },
        { en: "Estou a pensar em ti.", ko: "네 생각 하고 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이사할까 생각 중이야.", before: "Estou a pensar", after: "mudar de casa.", answers: ["em"],
        wrong: { "de": "pensar 뒤에는 em이에요: pensar em.", "en": "en은 스페인어예요. 포르투갈어는 em이에요." },
        tip: { en: "Quero mudar de casa.", why: "‘이사하고 싶어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "직장을 바꿀까 생각 중이야.", before: "Estou a pensar em", after: "de emprego.", answers: ["mudar", "trocar"],
        wrong: { "mudo": "em 뒤에는 동사원형을 써요: mudar." },
        tip: { en: "Ando a pensar em mudar de emprego.", why: "ando a는 ‘요즘 ~하고 있다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 문제 생각하고 있어.", before: "Estou a pensar", after: "problema.", answers: ["no"],
        wrong: { "em": "problema 앞에 관사 o가 붙어서 em + o = no예요.", "na": "problema는 남성 명사라 no예요." },
        tip: { en: "Estou a pensar nisso.", why: "nisso는 em + isso예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 생각 하고 있었어.", before: "Estava a pensar em", after: ".", answers: ["ti"],
        wrong: { "tu": "em 뒤에는 tu가 아니라 ti예요." },
        tip: { en: "Lembrei-me de ti.", why: "‘네 생각났어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "포르투갈어 수업 들을까 생각 중이야.", before: "Estou a", after: "em ter aulas de português.", answers: ["pensar"],
        wrong: { "pensando": "-ndo는 브라질식이에요. 포르투갈에서는 a pensar예요." },
        tip: { en: "Quero ter aulas de português.", why: "‘포르투갈어 수업을 듣고 싶어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "차를 살까 생각 중이야.", answers: ["Estou a pensar em comprar um carro."],
        wrong: { "estou pensando em comprar um carro": "-ndo는 브라질식이에요. 포르투갈에서는 estou a pensar예요." },
        tip: { en: "Quero comprar um carro.", why: "‘차 사고 싶어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "포르투갈에서 살까 생각 중이야.", answers: ["Estou a pensar em viver em Portugal."], alts: ["Estou a pensar em morar em Portugal."],
        wrong: { "estou a pensar de viver em portugal": "pensar 뒤에는 em이에요." },
        tip: { en: "Quero viver em Portugal.", why: "‘포르투갈에서 살고 싶어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "아직 생각 중이야.", answers: ["Ainda estou a pensar."],
        wrong: { "ainda estou pensando": "-ndo는 브라질식이에요. 포르투갈에서는 estou a pensar예요." },
        tip: { en: "Ainda não decidi.", why: "‘아직 결정 안 했어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "무슨 생각 해?", answers: ["Em que estás a pensar?", "Estás a pensar em quê?"], subject: "tu",
        wrong: { "o que estás a pensar": "pensar 뒤에는 em이 필요해요: em que estás a pensar?" },
        tip: { en: "No que é que estás a pensar?", why: "말할 때는 no que é que도 써요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "포르투갈어 배울까 생각 중이야.", answers: ["Estou a pensar em aprender português."],
        ctx: { lead: "viajar 대신 ‘포르투갈어를 배우다(aprender português)’를 넣어 보세요.", en: "Estou a pensar em viajar." },
        wrong: { "estou a pensar em aprendo português": "em 뒤에는 동사원형을 써요: aprender." },
        tip: { en: "Quero aprender português.", why: "‘포르투갈어 배우고 싶어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아소르스 제도에 갈까 생각 중이야.", answers: ["Estou a pensar em ir aos Açores."],
        dialog: { a: "O que vais fazer nas férias?", aKo: "휴가 때 뭐 할 거야?" },
        wrong: { "estou a pensar em ir nos açores": "‘~에 가다’는 em이 아니라 a예요: aos Açores." },
        tip: { en: "Se calhar vou aos Açores.", why: "se calhar는 ‘아마’예요." } }
    ]
  };
})(window.EP);
