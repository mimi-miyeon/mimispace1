/* 포르투갈어(유럽) 세션 29. A que horas ~? (형식은 pattern1.js 위쪽 설명과 같다)
   질문이 a que horas로 시작해서 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[29] = {
    no: 29, form: "A que horas ~?", stem: "A que horas/Que horas", meaning: "몇 시에 ~해요?",
    hint: "A que horas + 문장?",
    intro: {
      blocks: [["A que horas", "몇 시에"], ["~", "동사 + 무엇"]],
      lines: [
        "A que horas ~?는 ‘몇 시에 ~해요?’예요: A que horas abre?",
        "지금 몇 시인지는 Que horas são?예요. 대답은 São três horas. (1시는 É uma hora.)",
        "‘~시에’는 à(1시)·às(2시부터): à uma, às duas, às três e meia."
      ],
      examples: [
        { en: "A que horas abre o museu?", ko: "박물관은 몇 시에 열어요?" },
        { en: "Que horas são?", ko: "지금 몇 시예요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "가게 몇 시에 닫아요?", before: "A que horas", after: "a loja?", answers: ["fecha"],
        wrong: { "abre": "abre는 ‘열다’예요. ‘닫다’는 fecha예요.", "cierra": "cierra는 스페인어예요. 포르투갈어는 fecha예요." },
        tip: { en: "Até que horas está aberta a loja?", why: "até que horas는 ‘몇 시까지’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "기차 몇 시에 출발해요?", before: "A que horas", after: "o comboio?", answers: ["parte", "sai"],
        wrong: { "partir": "물을 때는 활용한 동사를 써요: parte." },
        tip: { en: "Quando parte o comboio?", why: "quando는 ‘언제’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "3시예요.", before: "", after: "três horas.", answers: ["São"],
        wrong: { "é": "2시부터는 여럿이라 são이에요. é는 1시예요.", "está": "시각은 ser로 말해요: são três horas." },
        tip: { en: "São três em ponto.", why: "em ponto는 ‘정각’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "1시예요.", before: "", after: "uma hora.", answers: ["É"],
        wrong: { "são": "1시는 하나라 é예요." },
        tip: { en: "É uma em ponto.", why: "em ponto는 ‘정각’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "2시 반에 만나.", before: "Encontramo-nos", after: "duas e meia.", answers: ["às"],
        wrong: { "as": "‘~시에’는 a + as = às예요. 악센트를 꼭 써요.", "a": "2시부터는 às예요. à는 1시예요." },
        tip: { en: "Vemo-nos às duas e meia.", why: "ver-se는 ‘서로 보다, 만나다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "식당 몇 시에 열어요?", answers: ["A que horas abre o restaurante?"],
        wrong: { "a que hora abre o restaurante": "‘몇 시’는 que horas예요. horas에 s가 있어요." },
        tip: { en: "Quando abre o restaurante?", why: "quando는 ‘언제’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 몇 시에 일어나?", answers: ["A que horas acordas?"],
        wrong: { "a que horas acordo": "친구(tu)에게 물을 때는 acordas예요. acordo는 ‘나는’이에요." },
        tip: { en: "A que horas te levantas?", why: "levantar-se는 ‘(침대에서) 일어나다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "영화 몇 시에 시작해요?", answers: ["A que horas começa o filme?"],
        wrong: { "a que horas comença o filme": "começa는 ç(세디유)를 써요. comença는 없는 말이에요." },
        tip: { en: "Quando começa o filme?", why: "quando는 ‘언제’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "몇 시에 도착해요?", answers: ["A que horas chega?"],
        wrong: { "a que horas chegar": "물을 때는 활용한 동사를 써요: chega." },
        tip: { en: "Quando chega?", why: "quando는 ‘언제’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "약국 몇 시에 열어요?", answers: ["A que horas abre a farmácia?"],
        ctx: { lead: "museu 대신 ‘약국(farmácia)’을 넣어 보세요.", en: "A que horas abre o museu?" },
        wrong: { "a que horas abre o farmácia": "farmácia는 여성 명사라 a farmácia예요." },
        tip: { en: "Quando abre a farmácia?", why: "quando는 ‘언제’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아. 몇 시에?", answers: ["Boa. A que horas?", "Está bem. A que horas?", "Sim. A que horas?"],
        dialog: { a: "Vamos jantar amanhã?", aKo: "내일 저녁 먹을래?" },
        wrong: { "boa que horas": "‘몇 시에’는 a que horas예요. a가 필요해요." },
        tip: { en: "Combinado. A que horas?", why: "combinado는 ‘좋아, 그렇게 해’예요." } }
    ]
  };
})(window.EP);
