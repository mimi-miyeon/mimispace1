/* 포르투갈어(유럽) 세션 42. Vamos ~. (형식은 pattern1.js 위쪽 설명과 같다)
   ‘(우리) ~하자’라 subject를 두지 않는다 (nós를 넣으면 ‘우리는 ~할 거야’가 된다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[42] = {
    no: 42, form: "Vamos ~.", stem: "Vamos", meaning: "~하자",
    hint: "Vamos + 동사원형",
    intro: {
      blocks: [["Vamos", "우리 ~하자"], ["~", "동사원형 / a + 장소"]],
      lines: [
        "Vamos + 동사원형은 ‘(우리) ~하자’예요: Vamos comer!",
        "Vamos a(ao/à) + 장소는 ‘~에 가자’예요: Vamos à praia!",
        "‘하지 말자’는 Não vamos ~예요. 대답 ‘가자!’는 Vamos!예요."
      ],
      examples: [
        { en: "Vamos comer!", ko: "밥 먹자!" },
        { en: "Vamos à praia amanhã.", ko: "내일 해변에 가자." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "가자!", before: "", after: "!", answers: ["Vamos"],
        wrong: { "vou": "‘우리 ~하자’는 vamos예요. vou는 ‘나는 간다’예요." },
        tip: { en: "Bora!", why: "bora는 젊은 사람들이 쓰는 ‘가자!’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "커피 마시자.", before: "Vamos", after: "um café.", answers: ["tomar", "beber"],
        wrong: { "tomamos": "vamos 뒤에는 동사원형을 써요: tomar." },
        tip: { en: "Bora tomar um café?", why: "bora는 젊은 사람들이 쓰는 ‘~하자’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "영화관 가자.", before: "Vamos", after: "cinema.", answers: ["ao"],
        wrong: { "a": "cinema는 관사 o가 붙어서 a + o = ao예요.", "no": "‘~에 가자’는 em이 아니라 a를 써요: ao cinema." },
        tip: { en: "Vamos ver um filme.", why: "‘영화 보자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "택시 타고 가자.", before: "Vamos", after: "táxi.", answers: ["de"],
        wrong: { "en": "en은 스페인어예요. 교통수단은 de로 말해요: de táxi.", "no": "‘~을 타고’는 de예요: de táxi." },
        tip: { en: "Vamos apanhar um táxi.", why: "apanhar는 ‘(차를) 잡다, 타다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "오늘은 나가지 말자.", before: "Hoje não", after: "sair.", answers: ["vamos"],
        wrong: { "vou": "‘우리’면 vamos예요. vou는 ‘나는’이에요." },
        tip: { en: "Hoje ficamos em casa.", why: "‘오늘은 집에 있자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "점심 먹자.", answers: ["Vamos almoçar."],
        wrong: { "vamos almoçamos": "vamos 뒤에는 동사원형을 써요: almoçar.", "nós vamos almoçar": "nós를 넣으면 ‘우리는 점심 먹을 거야’가 돼요. ‘~하자’는 vamos만 써요." },
        tip: { en: "Bora almoçar?", why: "bora는 젊은 사람들이 쓰는 ‘~하자’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "산책하자.", answers: ["Vamos dar um passeio."], alts: ["Vamos passear."],
        wrong: { "vamos dar um paseo": "paseo는 스페인어예요. 포르투갈어는 passeio예요." },
        tip: { en: "Vamos dar uma volta.", why: "dar uma volta는 ‘한 바퀴 돌다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내일 다시 얘기하자.", answers: ["Vamos falar amanhã.", "Amanhã vamos falar."], alts: ["Amanhã falamos."],
        wrong: { "vamos hablar amanhã": "hablar는 스페인어예요. 포르투갈어는 falar예요." },
        tip: { en: "Depois falamos.", why: "‘나중에 얘기하자’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "늦지 말자.", answers: ["Não vamos chegar atrasados.", "Não vamos chegar tarde."],
        wrong: { "vamos não chegar atrasados": "não는 vamos 앞에 써요." },
        tip: { en: "Temos de chegar a horas.", why: "a horas는 ‘제시간에’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "춤추자!", answers: ["Vamos dançar!"],
        ctx: { lead: "comer 대신 ‘춤추다(dançar)’를 넣어 보세요.", en: "Vamos comer!" },
        wrong: { "vamos dançamos": "vamos 뒤에는 동사원형을 써요: dançar." },
        tip: { en: "Bora dançar!", why: "bora는 젊은 사람들이 쓰는 ‘~하자’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 뭐 좀 먹자.", answers: ["Então vamos comer alguma coisa.", "Então, vamos comer qualquer coisa."],
        dialog: { a: "Estou cheio de fome.", aKo: "나 배고파 죽겠어." },
        wrong: { "então vamos comemos alguma coisa": "vamos 뒤에는 동사원형을 써요: comer." },
        tip: { en: "Então bora comer.", why: "bora는 젊은 사람들이 쓰는 ‘~하자’예요." } }
    ]
  };
})(window.EP);
