/* 포르투갈어(유럽) 세션 74. Pensei que ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[74] = {
    no: 74, form: "Pensei que ~.", stem: "Pensei que/Achei que", subject: "eu", meaning: "~인 줄 알았어요",
    hint: "Pensei que + 문장 (지난 형태)",
    intro: {
      blocks: [["Pensei", "나는 생각했다"], ["que", "~라고"], ["~", "지난 형태 문장"]],
      lines: [
        "Pensei que + 문장은 ‘~인 줄 알았어요’예요. 뒤 문장도 지난 형태로 써요: Pensei que eras português.",
        "ser → era, estar → estava, ir → ia, -ar → -ava, -er·-ir → -ia: Pensei que estava fechado.",
        "Achei que ~도 같은 뜻이에요."
      ],
      examples: [
        { en: "Pensei que era fácil.", ko: "쉬운 줄 알았어요." },
        { en: "Pensei que não vinhas.", ko: "너 안 오는 줄 알았어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "닫은 줄 알았어.", before: "", after: "que estava fechado.", answers: ["Pensei", "Achei"],
        wrong: { "pienso": "pienso는 스페인어예요. 포르투갈어는 pensei예요.", "penso": "‘~인 줄 알았다’는 지난 일이라 pensei예요." },
        tip: { en: "Achava que estava fechado.", why: "achava도 ‘~인 줄 알았다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 포르투갈 사람인 줄 알았어.", before: "Pensei que", after: "português.", answers: ["eras"],
        wrong: { "és": "pensei que 뒤에는 지난 형태 eras예요." },
        tip: { en: "Parecias português.", why: "‘포르투갈 사람 같았어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "비 올 줄 알았어.", before: "Pensei que", after: "chover.", answers: ["ia"],
        wrong: { "vai": "pensei que 뒤에는 지난 형태 ia예요." },
        tip: { en: "Parecia que ia chover.", why: "parecia는 ‘~ 같았다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "더 비싼 줄 알았어요.", before: "Pensei que era", after: "caro.", answers: ["mais"],
        wrong: { "más": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Esperava que fosse mais caro.", why: "esperar는 ‘예상하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 사람 여기 사는 줄 알았어.", before: "Pensei que ele", after: "aqui.", answers: ["vivia", "morava"],
        wrong: { "vive": "pensei que 뒤에는 지난 형태 vivia예요." },
        tip: { en: "Achei que ele morava aqui.", why: "achei que도 ‘~인 줄 알았다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "오늘 일요일인 줄 알았어.", answers: ["Pensei que hoje era domingo."], alts: ["Achei que hoje era domingo."],
        wrong: { "pensei que hoje é domingo": "pensei que 뒤에는 지난 형태 era예요." },
        tip: { en: "Estava convencido de que era domingo.", why: "estar convencido는 ‘확신하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 아픈 줄 알았어.", answers: ["Pensei que estavas doente."],
        wrong: { "pensei que estás doente": "pensei que 뒤에는 지난 형태 estavas예요." },
        tip: { en: "Achei que estavas doente.", why: "achei que도 ‘~인 줄 알았다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 이미 아는 줄 알았어.", answers: ["Pensei que já sabias."],
        wrong: { "pensei que já sabes": "pensei que 뒤에는 지난 형태 sabias예요." },
        tip: { en: "Achei que já sabias.", why: "achei que도 ‘~인 줄 알았다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 무료인 줄 알았어요.", answers: ["Pensei que era grátis.", "Pensei que era gratuito."],
        wrong: { "pensei que é grátis": "pensei que 뒤에는 지난 형태 era예요." },
        tip: { en: "Não sabia que era preciso pagar.", why: "‘돈 내야 하는 줄 몰랐어요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "먼 줄 알았어요.", answers: ["Pensei que era longe.", "Pensei que ficava longe."],
        ctx: { lead: "fácil 대신 ‘먼(longe)’을 넣어 보세요.", en: "Pensei que era fácil." },
        wrong: { "pensei que é longe": "pensei que 뒤에는 지난 형태 era예요." },
        tip: { en: "Afinal é perto!", why: "afinal은 ‘알고 보니’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아, 일본 사람인 줄 알았어요.", answers: ["Ah, pensei que era japonesa."], alts: ["Ah, achei que era japonesa."],
        dialog: { a: "Sou coreana.", aKo: "저 한국 사람이에요." },
        wrong: { "ah pensei que é japonesa": "pensei que 뒤에는 지난 형태 era예요." },
        tip: { en: "Ah, desculpe, pensei que fosse japonesa.", why: "fosse는 era의 조심스러운 형태예요." } }
    ]
  };
})(window.EP);
