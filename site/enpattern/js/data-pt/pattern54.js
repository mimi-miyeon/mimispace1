/* 포르투갈어(유럽) 세션 54. Parece ~. (형식은 pattern1.js 위쪽 설명과 같다)
   주어가 그것·그 사람이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[54] = {
    no: 54, form: "Parece ~.", stem: "Parece/Pareces/Parece-me", meaning: "~해 보여요 / ~인 것 같아요",
    hint: "Parece + 형용사 / Parece que + 문장",
    intro: {
      blocks: [["Parece", "~해 보인다"], ["~", "형용사 / que + 문장"]],
      lines: [
        "Parece + 형용사는 ‘~해 보여요’예요: Parece cansado.(피곤해 보여요)",
        "Parece que + 문장은 ‘~인 것 같아요’예요: Parece que vai chover.",
        "‘내가 보기엔’은 Parece-me ~예요: Parece-me bem.(좋아 보여요)"
      ],
      examples: [
        { en: "Parece cansado.", ko: "피곤해 보여요." },
        { en: "Parece que vai chover.", ko: "비가 올 것 같아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "맛있어 보여!", before: "", after: "delicioso!", answers: ["Parece"],
        wrong: { "es": "es는 스페인어예요.", "parece-se": "‘~해 보여’는 parece예요. parecer-se는 ‘닮다’예요." },
        tip: { en: "Que bom aspeto!", why: "aspeto는 ‘겉모습’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "아무도 없는 것 같아.", before: "Parece", after: "não está ninguém.", answers: ["que"],
        wrong: { "de": "‘~인 것 같다’는 parece que예요." },
        tip: { en: "Acho que não está ninguém.", why: "acho que도 ‘~인 것 같아’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 피곤해 보여.", before: "", after: "cansado.", answers: ["Pareces"],
        wrong: { "parece": "친구(tu)에게는 pareces예요. parece는 존댓말이에요." },
        tip: { en: "Estás com cara de cansado.", why: "cara de는 ‘~한 얼굴’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "좋은 생각인 것 같아요.", before: "Parece-me uma boa", after: ".", answers: ["ideia"],
        wrong: { "idea": "idea는 스페인어 표기예요. 포르투갈어는 ideia예요." },
        tip: { en: "Acho que é uma boa ideia.", why: "acho que도 ‘~인 것 같아’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 사람 우리 아빠 닮았어.", before: "Ele parece-se com o meu", after: ".", answers: ["pai"],
        wrong: { "padre": "padre는 스페인어로 ‘아버지’지만, 포르투갈어로는 ‘신부님’이에요. 아버지는 pai예요." },
        tip: { en: "Ele é parecido com o meu pai.", why: "parecido com은 ‘~와 닮은’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그 사람 행복해 보여.", answers: ["Ele parece feliz.", "Parece feliz."],
        wrong: { "ele parece que feliz": "형용사 앞에는 que를 쓰지 않아요: parece feliz." },
        tip: { en: "Ele está com ar feliz.", why: "ar는 ‘분위기, 표정’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "문 닫은 것 같아요.", answers: ["Parece que está fechado."],
        wrong: { "parece que é fechado": "지금 닫혀 있는 상태는 está fechado예요." },
        tip: { en: "Acho que está fechado.", why: "acho que도 ‘~인 것 같아’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "쉬워 보여요.", answers: ["Parece fácil."],
        wrong: { "parece que fácil": "형용사 앞에는 que를 쓰지 않아요: parece fácil." },
        tip: { en: "Não parece difícil.", why: "‘어려워 보이지 않아요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "(제가 보기엔) 괜찮은 것 같아요.", answers: ["Parece-me bem."],
        wrong: { "parece-me bueno": "bueno는 스페인어예요. 포르투갈어는 bem이에요." },
        tip: { en: "Por mim, está bem.", why: "‘저는 좋아요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "슬퍼 보여요.", answers: ["Parece triste."],
        ctx: { lead: "cansado 대신 ‘슬픈(triste)’을 넣어 보세요.", en: "Parece cansado." },
        wrong: { "parece que triste": "형용사 앞에는 que를 쓰지 않아요: parece triste." },
        tip: { en: "Está com cara de triste.", why: "cara de는 ‘~한 얼굴’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 비 올 것 같네.", answers: ["Sim, parece que vai chover."],
        dialog: { a: "Olha, o céu está muito escuro.", aKo: "봐, 하늘이 엄청 어두워." },
        wrong: { "sim parece vai chover": "문장 앞에는 parece que예요. que가 필요해요." },
        tip: { en: "Pois, vem aí chuva.", why: "vem aí는 ‘다가오고 있다’예요." } }
    ]
  };
})(window.EP);
