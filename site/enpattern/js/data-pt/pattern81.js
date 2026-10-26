/* 포르투갈어(유럽) 세션 81. ~ para ~. (목적) (형식은 pattern1.js 위쪽 설명과 같다)
   문장 중간에 오는 말이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[81] = {
    no: 81, form: "~ para ~.", stem: "para/Para", meaning: "~하려고 / ~하기 위해",
    hint: "para + 동사원형",
    intro: {
      blocks: [["~", "문장"], ["para", "~하려고, ~을 위해"], ["~", "동사원형 / 명사"]],
      lines: [
        "para + 동사원형은 ‘~하려고, ~하기 위해’예요: Vim para aprender português.",
        "para + 사람은 ‘~에게 (주려고)’예요: É para ti.(너 줄 거야)",
        "por와 헷갈리지 마세요. 목적은 para, 이유·감사는 por예요."
      ],
      examples: [
        { en: "Estudo para aprender.", ko: "배우려고 공부해요." },
        { en: "Isto é para ti.", ko: "이거 너 주려고." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "포르투갈어 배우려고 왔어요.", before: "Vim", after: "aprender português.", answers: ["para"],
        wrong: { "por": "목적(~하려고)은 para예요. por는 이유·감사예요.", "a": "‘~하려고’는 para예요." },
        tip: { en: "Estou cá para aprender português.", why: "cá는 ‘여기’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이거 너 줄 거야.", before: "Isto é", after: "ti.", answers: ["para"],
        wrong: { "por": "‘~에게 주려고’는 para예요." },
        tip: { en: "Trouxe-te isto.", why: "‘이거 너한테 가져왔어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "돈 아끼려고 걸어가.", before: "Vou a pé para", after: "dinheiro.", answers: ["poupar"],
        wrong: { "poupo": "para 뒤에는 동사원형을 써요: poupar.", "ahorrar": "ahorrar는 스페인어예요. 포르투갈어는 poupar예요." },
        tip: { en: "Ando a pé, assim poupo dinheiro.", why: "assim은 ‘그렇게 하면’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뭐 하려고?", before: "", after: "quê?", answers: ["Para"],
        wrong: { "por": "‘뭐 하려고(목적)?’는 para quê예요. por quê는 이유를 묻는 말이에요." },
        tip: { en: "Para que é isso?", why: "‘그거 뭐에 쓰는 거야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "물 마시려고 일어났어.", before: "Levantei-me para", after: "água.", answers: ["beber"],
        wrong: { "bebi": "para 뒤에는 동사원형을 써요: beber." },
        tip: { en: "Fui buscar água.", why: "ir buscar는 ‘가지러 가다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "사진 찍으려고 여기 왔어.", answers: ["Vim aqui para tirar fotografias.", "Vim aqui para tirar fotos.", "Vim cá para tirar fotografias.", "Vim cá para tirar fotos."],
        wrong: { "vim aqui por tirar fotografias": "목적(~하려고)은 para예요." },
        tip: { en: "Vim cá fotografar.", why: "fotografar는 ‘사진 찍다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 선물 엄마 거야.", answers: ["Este presente é para a minha mãe."],
        wrong: { "este presente é por a minha mãe": "‘~에게 줄’은 para예요." },
        tip: { en: "Comprei isto para a minha mãe.", why: "‘엄마 주려고 샀어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 살 빼려고 운동해.", answers: ["Faço exercício para emagrecer."],
        wrong: { "faço exercício para emagreço": "para 뒤에는 동사원형을 써요: emagrecer." },
        tip: { en: "Faço exercício para perder peso.", why: "perder peso는 ‘살을 빼다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이거 뭐에 쓰는 거예요?", answers: ["Para que serve isto?", "Isto serve para quê?"],
        wrong: { "por que serve isto": "‘무엇을 위해’는 para que예요." },
        tip: { en: "Para que é isto?", why: "짧게 이렇게도 물어요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이거 너희 주려고.", answers: ["Isto é para vocês."],
        ctx: { lead: "ti 대신 ‘너희(vocês)’를 넣어 보세요.", en: "Isto é para ti." },
        wrong: { "isto é por vocês": "‘~에게 주려고’는 para예요." },
        tip: { en: "Trouxe isto para vocês.", why: "‘이거 너희 주려고 가져왔어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "여행 가려고.", answers: ["Para viajar.", "Para ir viajar."],
        dialog: { a: "Porque estás a poupar?", aKo: "왜 돈 모아?" },
        wrong: { "por viajar": "목적(~하려고)은 para예요." },
        tip: { en: "Quero fazer uma viagem.", why: "‘여행하고 싶어서’라는 말이에요." } }
    ]
  };
})(window.EP);
