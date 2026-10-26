/* 포르투갈어(유럽) 세션 13. Tenho de ~. (형식은 pattern1.js 위쪽 설명과 같다)
   Tenho que도 쓰는 말이라 다른 표현(alts)으로 인정한다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[13] = {
    no: 13, form: "Tenho de ~.", stem: "Tenho de/Tenho que", subject: "eu", meaning: "~해야 해요",
    hint: "Tenho de + 동사원형",
    intro: {
      blocks: [["Tenho", "나는 가지고 있다"], ["de", "~할 것을"], ["~", "동사원형"]],
      lines: [
        "ter de + 동사원형은 ‘~해야 해요’예요. 꼭 해야 하는 일에 써요.",
        "Tenho que도 쓰지만, 포르투갈에서는 Tenho de가 더 일반적이에요.",
        "‘안 해도 돼요’는 Não tenho de ~예요."
      ],
      examples: [
        { en: "Tenho de trabalhar.", ko: "일해야 해요." },
        { en: "Tenho de ir embora.", ko: "이제 가 봐야 해요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 공부해야 해.", before: "", after: "de estudar.", answers: ["Tenho"],
        wrong: { "tem": "tem은 ‘그/그녀는’이에요. ‘나는’은 tenho예요.", "estou": "‘~해야 해요’는 ter de예요: tenho de." },
        tip: { en: "Preciso de estudar.", why: "preciso de도 ‘~해야 해요’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 일찍 자야 해.", before: "Tenho", after: "dormir cedo.", answers: ["de", "que"],
        wrong: { "a": "‘~해야 해요’는 tenho de예요. a가 아니에요." },
        tip: { en: "Tenho de me deitar cedo.", why: "deitar-se는 ‘잠자리에 들다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 전화 한 통 해야 해.", before: "Tenho de", after: "um telefonema.", answers: ["fazer"],
        wrong: { "faço": "de 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Tenho de ligar a uma pessoa.", why: "ligar a는 ‘~에게 전화하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 표 사야 해.", before: "Tenho de comprar o", after: ".", answers: ["bilhete"],
        wrong: { "boleto": "boleto는 스페인어예요. 포르투갈어는 bilhete예요." },
        tip: { en: "Tenho de tirar o bilhete.", why: "tirar o bilhete는 ‘표를 끊다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 오늘 일 안 해도 돼.", before: "Hoje não tenho de", after: ".", answers: ["trabalhar"],
        wrong: { "trabalho": "de 뒤에는 동사원형을 써요: trabalhar." },
        tip: { en: "Hoje estou de folga.", why: "estar de folga는 ‘쉬는 날이다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 집에 가야 해.", answers: ["Tenho de ir para casa."], alts: ["Tenho que ir para casa."],
        wrong: { "tenho ir para casa": "ter 뒤에 de가 필요해요: tenho de ir.", "tenho de vou para casa": "de 뒤에는 동사원형을 써요: ir." },
        tip: { en: "Tenho de voltar para casa.", why: "voltar는 ‘돌아가다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 내일 일찍 일어나야 해.", answers: ["Amanhã tenho de acordar cedo.", "Tenho de acordar cedo amanhã."],
        alts: ["Amanhã tenho que acordar cedo."],
        wrong: { "amanhã tenho de acordo cedo": "de 뒤에는 동사원형을 써요: acordar." },
        tip: { en: "Amanhã tenho de me levantar cedo.", why: "levantar-se는 ‘(자리에서) 일어나다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 숙제해야 해.", answers: ["Tenho de fazer os trabalhos de casa.", "Tenho de fazer o trabalho de casa."],
        alts: ["Tenho que fazer os trabalhos de casa."],
        wrong: { "tenho de faço os trabalhos de casa": "de 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Tenho de fazer os TPC.", why: "TPC는 학생들이 쓰는 ‘숙제’의 줄임말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 오늘 안 가도 돼.", answers: ["Hoje não tenho de ir.", "Não tenho de ir hoje."],
        wrong: { "hoje tenho de não ir": "‘안 가도 돼요’는 não tenho de예요. tenho de não ir는 ‘가지 말아야 해요’예요." },
        tip: { en: "Hoje não preciso de ir.", why: "não preciso de도 ‘안 해도 돼요’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 집 청소해야 해.", answers: ["Tenho de limpar a casa."], alts: ["Tenho que limpar a casa."],
        ctx: { lead: "trabalhar 대신 ‘집을 청소하다(limpar a casa)’를 넣어 보세요.", en: "Tenho de trabalhar." },
        wrong: { "tenho de limpo a casa": "de 뒤에는 동사원형을 써요: limpar." },
        tip: { en: "Tenho de arrumar a casa.", why: "arrumar는 ‘정리하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 일해야 해.", answers: ["Desculpa, tenho de trabalhar."], alts: ["Desculpa, tenho que trabalhar."],
        dialog: { a: "Vens jantar connosco?", aKo: "우리랑 저녁 먹을래?" },
        wrong: { "desculpa tenho trabalhar": "ter 뒤에 de가 필요해요: tenho de trabalhar." },
        tip: { en: "Desculpa, não posso. Tenho de trabalhar.", why: "não posso는 ‘못 해요’예요." } }
    ]
  };
})(window.EP);
