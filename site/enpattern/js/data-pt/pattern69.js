/* 포르투갈어(유럽) 세션 69. Ando a ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[69] = {
    no: 69, form: "Ando a ~.", stem: "Ando a/Andas a/Ando/andas", subject: "eu", meaning: "요즘 ~하고 있어요",
    hint: "Ando a + 동사원형",
    intro: {
      blocks: [["Ando", "나는 (요즘) ~하며 지낸다"], ["a", "~하는 중"], ["~", "동사원형"]],
      lines: [
        "Ando a + 동사원형은 ‘요즘 (계속) ~하고 있어요’예요: Ando a aprender português.",
        "estou a(지금 이 순간)와 달리, 한동안 이어지는 일에 써요.",
        "‘요즘 바빠’ 같은 상태는 Ando ocupado처럼 형용사를 붙여요."
      ],
      examples: [
        { en: "Ando a aprender português.", ko: "요즘 포르투갈어 배우고 있어요." },
        { en: "Ando muito ocupado.", ko: "요즘 많이 바빠요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 요즘 운동하고 있어.", before: "", after: "a fazer exercício.", answers: ["Ando"],
        wrong: { "camino": "camino는 스페인어예요.", "estou": "estou a는 ‘지금 이 순간’이에요. ‘요즘’은 ando a예요." },
        tip: { en: "Tenho feito exercício.", why: "tenho feito는 ‘요즘 계속 해 왔다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 요즘 잠을 잘 못 자.", before: "Ando a dormir", after: ".", answers: ["mal"],
        wrong: { "malo": "malo는 스페인어예요. ‘잘 못’은 mal이에요.", "mau": "동사를 꾸밀 때는 mal이에요. mau는 ‘나쁜(형용사)’이에요." },
        tip: { en: "Tenho dormido mal.", why: "tenho dormido는 ‘요즘 자 왔다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 요즘 뭐 해?", before: "O que é que", after: "a fazer?", answers: ["andas"],
        wrong: { "ando": "친구에게 묻는 거라 andas예요. ando는 ‘나는’이에요." },
        tip: { en: "Então, como vai a vida?", why: "‘요즘 어떻게 지내?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 요즘 많이 피곤해.", before: "Ando muito", after: ".", answers: ["cansado", "cansada"],
        wrong: { "cansar": "‘피곤한’은 형용사 cansado예요." },
        tip: { en: "Estou muito cansado ultimamente.", why: "ultimamente는 ‘요즘’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 요즘 책 읽고 있어.", before: "Ando a", after: "um livro.", answers: ["ler"],
        wrong: { "lendo": "-ndo는 브라질식이에요. 포르투갈에서는 a ler예요." },
        tip: { en: "Estou a ler um livro ótimo.", why: "ótimo는 ‘아주 좋은’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 요즘 일 찾고 있어.", answers: ["Ando a procurar emprego.", "Ando a procurar trabalho."],
        wrong: { "ando buscando emprego": "buscando(-ndo)는 브라질식이에요. 포르투갈에서는 ando a procurar예요." },
        tip: { en: "Estou à procura de emprego.", why: "à procura de는 ‘~을 찾는 중’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 요즘 일 많이 해.", answers: ["Ando a trabalhar muito."],
        wrong: { "ando trabalhando muito": "-ndo는 브라질식이에요. 포르투갈에서는 ando a trabalhar예요." },
        tip: { en: "Tenho trabalhado muito.", why: "tenho trabalhado는 ‘요즘 계속 일해 왔다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 요즘 일찍 자.", answers: ["Ando a deitar-me cedo.", "Ando a dormir cedo."],
        wrong: { "ando a me deitar cedo": "포르투갈에서는 me를 동사 뒤에 붙여요: deitar-me." },
        tip: { en: "Tenho-me deitado cedo.", why: "‘요즘 계속 일찍 자 왔어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "요즘 어떻게 지내?", answers: ["Como é que andas?", "Como andas?"], subject: "tu",
        wrong: { "como é que ando": "친구에게 묻는 거라 andas예요." },
        tip: { en: "Então, tudo bem?", why: "‘그래서, 잘 지내?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "요즘 기타 배우고 있어요.", answers: ["Ando a aprender guitarra.", "Ando a aprender a tocar guitarra."],
        ctx: { lead: "português 대신 ‘기타(guitarra)’를 넣어 보세요.", en: "Ando a aprender português." },
        wrong: { "ando aprendendo guitarra": "-ndo는 브라질식이에요. 포르투갈에서는 ando a aprender예요." },
        tip: { en: "Estou a ter aulas de guitarra.", why: "‘기타 수업 듣고 있어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 요즘 많이 걸어.", answers: ["Sim, ando a caminhar muito.", "Sim, ando a fazer muitas caminhadas."],
        dialog: { a: "Estás mais magro!", aKo: "너 살 빠졌다!" },
        wrong: { "sim ando caminhando muito": "-ndo는 브라질식이에요. 포르투갈에서는 ando a caminhar예요." },
        tip: { en: "Sim, tenho caminhado bastante.", why: "tenho caminhado는 ‘요즘 계속 걸어 왔다’예요." } }
    ]
  };
})(window.EP);
