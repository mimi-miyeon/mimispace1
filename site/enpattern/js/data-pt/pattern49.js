/* 포르투갈어(유럽) 세션 49. Estou com ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[49] = {
    no: 49, form: "Estou com ~.", stem: "Estou com/Está com", subject: "eu", meaning: "~해요 (배고픔·졸림·추위)",
    hint: "Estou com + fome/sono/frio",
    intro: {
      blocks: [["Estou", "나는 (지금) ~이다"], ["com", "~을 가진"], ["~", "느낌 (명사)"]],
      lines: [
        "Estou com + 명사는 ‘(지금) ~해요’라는 느낌이에요: Estou com fome.(배고파요)",
        "자주 쓰는 말: fome(배고픔), sede(목마름), sono(졸림), frio(추위), calor(더위), pressa(급함), medo(무서움).",
        "Tenho fome처럼 ter로도 말해요."
      ],
      examples: [
        { en: "Estou com sono.", ko: "졸려요." },
        { en: "Estou com pressa.", ko: "급해요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "목말라.", before: "Estou com", after: ".", answers: ["sede"],
        wrong: { "sed": "sed는 스페인어예요. 포르투갈어는 sede예요." },
        tip: { en: "Tenho sede.", why: "tenho sede도 ‘목말라’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "추워.", before: "Estou", after: "frio.", answers: ["com"],
        wrong: { "de": "‘추워’는 estou com frio예요.", "en": "en은 스페인어예요. 포르투갈어는 com이에요." },
        tip: { en: "Tenho frio.", why: "tenho frio도 ‘추워’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 무서워.", before: "Estou com", after: ".", answers: ["medo"],
        wrong: { "miedo": "miedo는 스페인어예요. 포르투갈어는 medo예요." },
        tip: { en: "Tenho medo.", why: "tenho medo도 ‘무서워’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 사람 배고파.", before: "Ele", after: "com fome.", answers: ["está"],
        wrong: { "estou": "‘그는’이면 está예요. estou는 ‘나는’이에요." },
        tip: { en: "Ele tem fome.", why: "tem fome도 ‘배고파’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 감기 걸렸어.", before: "Estou com uma", after: ".", answers: ["constipação", "gripe"],
        wrong: { "resfriado": "resfriado는 브라질 말이에요. 포르투갈에서는 constipação예요." },
        tip: { en: "Estou constipado.", why: "constipado는 포르투갈에서 ‘감기 걸린’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 배고파.", answers: ["Estou com fome."],
        wrong: { "estou com hambre": "hambre는 스페인어예요. 포르투갈어는 fome예요." },
        tip: { en: "Tenho fome.", why: "tenho fome도 ‘배고파’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 너무 더워.", answers: ["Estou com muito calor."],
        wrong: { "estou com muita calor": "calor는 남성 명사라 muito예요." },
        tip: { en: "Tenho muito calor.", why: "tenho calor도 ‘더워’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 머리 아파.", answers: ["Estou com dor de cabeça.", "Estou com dores de cabeça."],
        wrong: { "estou com dor da cabeça": "‘두통’은 dor de cabeça예요." },
        tip: { en: "Dói-me a cabeça.", why: "dói-me는 ‘~이 아파’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 안 졸려.", answers: ["Não estou com sono."],
        wrong: { "estou com não sono": "não는 estou 앞에 써요." },
        tip: { en: "Ainda não tenho sono.", why: "ainda não는 ‘아직 ~ 않다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 질투 나.", answers: ["Estou com ciúmes."],
        ctx: { lead: "sono 대신 ‘질투(ciúmes)’를 넣어 보세요.", en: "Estou com sono." },
        wrong: { "estou com celos": "celos는 스페인어예요. 포르투갈어는 ciúmes예요." },
        tip: { en: "Tenho ciúmes.", why: "tenho ciúmes도 ‘질투 나’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 나 다리 아파.", answers: ["Não, estou com dores nas pernas.", "Não, estou com dor nas pernas."],
        dialog: { a: "Vamos andar mais um bocado?", aKo: "좀 더 걸을까?" },
        wrong: { "não estou com dores nos pernas": "pernas는 여성 명사라 nas예요." },
        tip: { en: "Não, doem-me as pernas.", why: "doem-me는 ‘(여럿이) 아파’예요." } }
    ]
  };
})(window.EP);
