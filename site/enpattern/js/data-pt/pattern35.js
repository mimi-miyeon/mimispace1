/* 포르투갈어(유럽) 세션 35. Quem ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[35] = {
    no: 35, form: "Quem ~?", stem: "Quem", meaning: "누가 ~해요? / ~은 누구예요?",
    hint: "Quem + 동사?",
    intro: {
      blocks: [["Quem", "누구, 누가"], ["~", "동사 + 무엇"]],
      lines: [
        "Quem은 ‘누구, 누가’예요: Quem é?(누구세요?)",
        "Quem 뒤의 동사는 ‘그/그녀’ 형태예요: Quem quer café?(커피 마실 사람?)",
        "‘누구와’는 com quem, ‘누구의’는 de quem이에요: De quem é isto?"
      ],
      examples: [
        { en: "Quem é aquele senhor?", ko: "저 분은 누구예요?" },
        { en: "Quem quer café?", ko: "커피 마실 사람?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "(전화) 누구세요?", before: "Quem", after: "?", answers: ["fala", "é"],
        wrong: { "falo": "‘누가’ 뒤에는 ‘그/그녀’ 형태예요: fala." },
        tip: { en: "Quem está a falar?", why: "전화로 ‘누구세요?’라고 할 때 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "누가 이거 만들었어?", before: "Quem", after: "isto?", answers: ["fez"],
        wrong: { "fazer": "물을 때는 활용한 동사를 써요: fez.", "fiz": "fiz는 ‘나는’이에요. ‘누가’는 fez예요." },
        tip: { en: "Quem é que fez isto?", why: "é que를 넣으면 말할 때 자연스러워요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 누구 거예요?", before: "", after: "quem é isto?", answers: ["De"],
        wrong: { "a": "‘누구의 것’은 de quem이에요." },
        tip: { en: "Isto é de quem?", why: "말할 때는 de quem을 뒤에 붙이기도 해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "누구랑 갔어?", before: "Com", after: "foste?", answers: ["quem"],
        wrong: { "que": "사람은 quem이에요. que는 ‘무엇’이에요." },
        tip: { en: "Foste com quem?", why: "말할 때는 com quem을 뒤에 붙이기도 해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "누가 알아요?", before: "Quem", after: "?", answers: ["sabe"],
        wrong: { "sei": "‘누가’ 뒤에는 ‘그/그녀’ 형태 sabe예요." },
        tip: { en: "Alguém sabe?", why: "alguém은 ‘누군가’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "저 여자분은 누구예요?", answers: ["Quem é aquela senhora?"],
        wrong: { "quem é aquele senhora": "senhora는 여성 명사라 aquela예요." },
        tip: { en: "Sabe quem é aquela senhora?", why: "‘저 분이 누군지 아세요?’라는 정중한 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "누가 전화했어?", answers: ["Quem ligou?", "Quem é que ligou?", "Quem telefonou?"],
        wrong: { "quem liguei": "‘누가’ 뒤에는 ‘그/그녀’ 형태예요: ligou." },
        tip: { en: "Quem era ao telefone?", why: "‘전화 누구였어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "누가 이겼어?", answers: ["Quem ganhou?", "Quem é que ganhou?"],
        wrong: { "quem ganhei": "‘누가’ 뒤에는 ‘그/그녀’ 형태예요: ganhou." },
        tip: { en: "Quem venceu?", why: "vencer도 ‘이기다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "누구랑 살아요?", answers: ["Com quem vive?", "Com quem mora?"],
        wrong: { "com que vive": "사람은 quem이에요. que는 ‘무엇’이에요." },
        tip: { en: "Vive com quem?", why: "말할 때는 com quem을 뒤에 붙이기도 해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "차 마실 사람?", answers: ["Quem quer chá?"],
        ctx: { lead: "café 대신 ‘차(chá)’를 넣어 보세요.", en: "Quem quer café?" },
        wrong: { "quem queres chá": "‘누가’ 뒤에는 ‘그/그녀’ 형태 quer예요." },
        tip: { en: "Alguém quer chá?", why: "alguém은 ‘누군가’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "누구세요?", answers: ["Quem é?", "Quem está aí?"],
        dialog: { a: "Toc, toc!", aKo: "똑똑!" },
        wrong: { "quem está": "‘누구세요?’는 quem é?예요. está라면 aí(거기)까지 말해요." },
        tip: { en: "Quem é que é?", why: "말할 때는 é que를 넣기도 해요." } }
    ]
  };
})(window.EP);
