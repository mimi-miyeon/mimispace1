/* 포르투갈어(유럽) 세션 55. Dói-me ~. (형식은 pattern1.js 위쪽 설명과 같다)
   아픈 곳이 주어라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[55] = {
    no: 55, form: "Dói-me ~.", stem: "Dói-me/Doem-me/me dói/dói", meaning: "~이 아파요",
    hint: "Dói-me + 신체 부위",
    intro: {
      blocks: [["Dói", "아프다"], ["-me", "나에게"], ["~", "o/a + 신체 부위"]],
      lines: [
        "Dói-me + o/a + 신체 부위는 ‘~이 아파요’예요: Dói-me a cabeça.(머리가 아파요)",
        "아픈 곳이 주어라 여럿이면 Doem-me예요: Doem-me os pés.(발이 아파요)",
        "não가 앞에 오면 me가 동사 앞으로 가요: Já não me dói.(이제 안 아파요)"
      ],
      examples: [
        { en: "Dói-me a cabeça.", ko: "머리가 아파요." },
        { en: "Doem-me os pés.", ko: "발이 아파요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "배가 아파요.", before: "", after: "a barriga.", answers: ["Dói-me"],
        wrong: { "me dói": "포르투갈에서는 me를 동사 뒤에 붙여요: dói-me.", "me duele": "me duele는 스페인어예요. 포르투갈어는 dói-me예요." },
        tip: { en: "Tenho dores de barriga.", why: "dores de barriga는 ‘복통’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "목이 아파요.", before: "Dói-me a", after: ".", answers: ["garganta"],
        wrong: { "cuello": "cuello는 스페인어예요. 아픈 목(목구멍)은 garganta예요." },
        tip: { en: "Estou com dor de garganta.", why: "dor de garganta는 ‘인후통’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "다리가 아파요.", before: "", after: "as pernas.", answers: ["Doem-me"],
        wrong: { "dói-me": "pernas는 여럿이라 doem-me예요." },
        tip: { en: "Estou com dores nas pernas.", why: "dores는 ‘통증’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이가 아파요.", before: "Dói-me um", after: ".", answers: ["dente"],
        wrong: { "diente": "diente는 스페인어예요. 포르투갈어는 dente예요." },
        tip: { en: "Tenho dor de dentes.", why: "dor de dentes는 ‘치통’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이제 안 아파요.", before: "Já não", after: "dói.", answers: ["me"],
        wrong: { "te": "‘나에게’는 me예요. te는 ‘너에게’예요." },
        tip: { en: "Já passou.", why: "‘이제 다 나았어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "등이 아파요.", answers: ["Doem-me as costas."],
        wrong: { "dói-me as costas": "costas는 여럿이라 doem-me예요." },
        tip: { en: "Estou com dores nas costas.", why: "dores nas costas는 ‘등 통증’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어디가 아프세요?", answers: ["Onde é que lhe dói?", "Onde lhe dói?", "Onde é que dói?", "Onde dói?"],
        wrong: { "onde lhe duele": "duele는 스페인어예요. 포르투갈어는 dói예요." },
        tip: { en: "O que é que sente?", why: "‘어떻게 아프세요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "귀가 너무 아파.", answers: ["Dói-me muito o ouvido."],
        wrong: { "dói-me muito a ouvido": "ouvido는 남성 명사라 o ouvido예요." },
        tip: { en: "Tenho uma dor de ouvidos horrível.", why: "horrível은 ‘끔찍한’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아무 데도 안 아파요.", answers: ["Não me dói nada."],
        wrong: { "não dói-me nada": "não가 앞에 오면 me를 동사 앞으로 옮겨요: não me dói." },
        tip: { en: "Estou ótimo.", why: "‘아주 좋아요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "무릎이 아파요.", answers: ["Dói-me o joelho."],
        ctx: { lead: "a cabeça 대신 ‘무릎(o joelho)’을 넣어 보세요.", en: "Dói-me a cabeça." },
        wrong: { "dói-me a joelho": "joelho는 남성 명사라 o joelho예요." },
        tip: { en: "Magoei-me no joelho.", why: "magoar-se는 ‘다치다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "눈이 아파요.", answers: ["Doem-me os olhos."],
        dialog: { a: "O que é que se passa?", aKo: "무슨 일이에요?" },
        wrong: { "dói-me os olhos": "olhos는 여럿이라 doem-me예요." },
        tip: { en: "Tenho os olhos cansados.", why: "‘눈이 피곤해요’라는 말이에요." } }
    ]
  };
})(window.EP);
