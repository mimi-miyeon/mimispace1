/* 포르투갈어(유럽) 세션 19. Acabei de ~. (형식은 pattern1.js 위쪽 설명과 같다)
   Acabo de(지금 형태)도 ‘방금 ~했어요’로 쓰여서 정답으로 인정한다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[19] = {
    no: 19, form: "Acabei de ~.", stem: "Acabei de/Acabo de/Acabou de/Acabámos de", subject: "eu", meaning: "방금 ~했어요",
    hint: "Acabei de + 동사원형",
    intro: {
      blocks: [["Acabei", "나는 막 끝냈다"], ["de", "~하는 것을"], ["~", "동사원형"]],
      lines: [
        "acabar de + 동사원형은 ‘방금 ~했어요’예요. 막 끝난 일을 말해요.",
        "Acabei는 acabar의 ‘나’ 과거형이에요. 뒤의 동사는 원형 그대로예요.",
        "‘우리는’은 Acabámos de ~예요 (포르투갈 표기는 á)."
      ],
      examples: [
        { en: "Acabei de chegar.", ko: "방금 도착했어요." },
        { en: "Acabei de almoçar.", ko: "방금 점심 먹었어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 방금 일어났어.", before: "", after: "de acordar.", answers: ["Acabei", "Acabo"],
        wrong: { "acabou": "acabou는 ‘그/그녀는’이에요. ‘나는’은 acabei예요." },
        tip: { en: "Acordei agora mesmo.", why: "agora mesmo는 ‘바로 지금’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "방금 그거 봤어.", before: "Acabei de", after: "isso.", answers: ["ver"],
        wrong: { "vi": "de 뒤에는 동사원형을 써요: ver." },
        tip: { en: "Vi isso agora mesmo.", why: "vi는 ver의 ‘나’ 과거형이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 방금 샤워했어.", before: "Acabei de tomar", after: ".", answers: ["banho", "duche"],
        wrong: { "ducha": "ducha는 스페인어예요. 포르투갈어로는 tomar banho(또는 duche)예요." },
        tip: { en: "Saí agora do banho.", why: "‘방금 씻고 나왔어요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "기차가 방금 떠났어요.", before: "O comboio acabou", after: "partir.", answers: ["de"],
        wrong: { "a": "acabar는 a가 아니라 de와 함께 써요." },
        tip: { en: "O comboio já partiu.", why: "já partiu는 ‘벌써 떠났어요’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 방금 도착했어.", before: "", after: "de chegar.", answers: ["Acabámos"],
        wrong: { "acabei": "‘우리는’이면 acabámos예요. acabei는 ‘나는’이에요." },
        tip: { en: "Chegámos agora.", why: "chegámos는 chegar의 ‘우리’ 과거형이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 방금 퇴근했어.", answers: ["Acabei de sair do trabalho."],
        wrong: { "acabei sair do trabalho": "acabar 뒤에는 de가 필요해요: acabei de." },
        tip: { en: "Saí agora do trabalho.", why: "saí는 sair의 ‘나’ 과거형이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 방금 밥 먹었어.", answers: ["Acabei de comer.", "Acabo de comer."],
        wrong: { "acabei de comi": "de 뒤에는 동사원형을 써요: comer." },
        tip: { en: "Comi agora mesmo.", why: "agora mesmo는 ‘바로 지금’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 방금 그 책 다 읽었어.", answers: ["Acabei de ler o livro.", "Acabei de ler esse livro."],
        wrong: { "acabei de leer o livro": "leer는 스페인어예요. 포르투갈어는 ler예요." },
        tip: { en: "Já li o livro.", why: "já li는 ‘벌써 읽었어요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그 사람 방금 나갔어요.", answers: ["Ele acabou de sair.", "Acabou de sair."], subject: "",
        wrong: { "ele acabei de sair": "‘그는’이면 acabou예요. acabei는 ‘나는’이에요." },
        tip: { en: "Ele saiu agora mesmo.", why: "saiu는 sair의 ‘그’ 과거형이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 방금 알았어.", answers: ["Acabei de saber."],
        ctx: { lead: "chegar 대신 ‘알게 되다(saber)’를 넣어 보세요.", en: "Acabei de chegar." },
        wrong: { "acabei de sei": "de 뒤에는 동사원형을 써요: saber." },
        tip: { en: "Soube agora mesmo.", why: "soube는 saber의 ‘나’ 과거형이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 방금 먹었어.", answers: ["Sim, acabei de jantar.", "Sim, acabei de comer."],
        dialog: { a: "Já jantaste?", aKo: "저녁 먹었어?" },
        wrong: { "sim acabei jantar": "acabar 뒤에는 de가 필요해요: acabei de." },
        tip: { en: "Sim, jantei agora mesmo.", why: "jantei는 jantar의 ‘나’ 과거형이에요." } }
    ]
  };
})(window.EP);
