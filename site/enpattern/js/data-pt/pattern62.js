/* 포르투갈어(유럽) 세션 62. Devia ~. (형식은 pattern1.js 위쪽 설명과 같다)
   devia는 ‘나’와 ‘그’가 같은 모양이라 subject는 문제마다 둔다 (나: eu, 친구에게 충고: tu) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[62] = {
    no: 62, form: "Devia ~.", stem: "Devia/Devias/Devíamos", meaning: "~하는 게 좋겠어요",
    hint: "Devia + 동사원형",
    intro: {
      blocks: [["Devia", "~해야 할 텐데"], ["~", "동사원형"]],
      lines: [
        "Devia + 동사원형은 ‘~해야 하는데, ~하는 게 좋겠어요’예요: Devia estudar mais.",
        "친구에게 충고할 때는 Devias ~(너 ~하는 게 좋겠어)예요: Devias descansar.",
        "지난 일의 후회는 Devia ter + 과거분사(~했어야 했는데)예요: Devia ter ido."
      ],
      examples: [
        { en: "Devia estudar mais.", ko: "공부를 더 해야 하는데." },
        { en: "Devias descansar.", ko: "너 좀 쉬는 게 좋겠어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 좀 더 일찍 자야 하는데.", before: "", after: "deitar-me mais cedo.", answers: ["Devia", "Devo"],
        wrong: { "debería": "debería는 스페인어예요. 포르투갈어는 devia예요." },
        tip: { en: "Tenho de me deitar mais cedo.", why: "tenho de는 ‘꼭 ~해야 해’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 병원에 가 보는 게 좋겠어.", before: "", after: "ir ao médico.", answers: ["Devias"],
        wrong: { "devia": "친구에게 충고할 때는 devias예요." },
        tip: { en: "Porque não vais ao médico?", why: "‘병원에 가 보지 그래?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "아빠한테 전화했어야 했는데.", before: "Devia ter", after: "ao meu pai.", answers: ["ligado", "telefonado"],
        wrong: { "ligar": "후회는 devia ter + 과거분사예요: ter ligado." },
        tip: { en: "Esqueci-me de ligar ao meu pai.", why: "esquecer-se de는 ‘~을 깜빡하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 그거 안 하는 게 좋겠어.", before: "Não", after: "fazer isso.", answers: ["devias"],
        wrong: { "debes": "debes는 스페인어예요. 포르투갈어는 devias예요." },
        tip: { en: "É melhor não fazeres isso.", why: "é melhor는 ‘~하는 게 낫다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 더 일찍 출발했어야 했는데.", before: "", after: "ter saído mais cedo.", answers: ["Devíamos"],
        wrong: { "devia": "‘우리는’이면 devíamos예요." },
        tip: { en: "Saímos tarde demais.", why: "tarde demais는 ‘너무 늦게’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 운동 더 해야 하는데.", answers: ["Devia fazer mais exercício."], subject: "eu",
        wrong: { "debería fazer mais exercício": "debería는 스페인어예요. 포르투갈어는 devia예요." },
        tip: { en: "Tenho de fazer mais exercício.", why: "tenho de는 ‘꼭 ~해야 해’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그 사람이랑 얘기해 보는 게 좋겠어.", answers: ["Devias falar com ele."], subject: "tu",
        wrong: { "devias hablar com ele": "hablar는 스페인어예요. 포르투갈어는 falar예요." },
        tip: { en: "Porque não falas com ele?", why: "‘그 사람이랑 얘기해 보지 그래?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그거 안 샀어야 했는데.", answers: ["Não devia ter comprado isso."], subject: "eu",
        wrong: { "não devia ter comprar isso": "후회는 devia ter + 과거분사예요: ter comprado." },
        tip: { en: "Arrependo-me de ter comprado isso.", why: "arrepender-se는 ‘후회하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 코트 가져가는 게 좋겠어.", answers: ["Devias levar um casaco."], subject: "tu",
        wrong: { "devias levar uma casaco": "casaco는 남성 명사라 um이에요." },
        tip: { en: "Leva um casaco, está frio.", why: "‘코트 가져가, 추워’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 물 더 마셔야 하는데.", answers: ["Devia beber mais água."], subject: "eu",
        ctx: { lead: "estudar mais 대신 ‘물을 더 마시다(beber mais água)’를 넣어 보세요.", en: "Devia estudar mais." },
        wrong: { "devia bebo mais água": "devia 뒤에는 동사원형을 써요: beber." },
        tip: { en: "Tenho de beber mais água.", why: "tenho de는 ‘꼭 ~해야 해’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "일찍 자는 게 좋겠어.", answers: ["Devias deitar-te cedo.", "Devias ir dormir cedo."], subject: "tu",
        dialog: { a: "Estou muito cansado.", aKo: "나 너무 피곤해." },
        wrong: { "devias te deitar cedo": "포르투갈에서는 te를 동사 뒤에 붙여요: deitar-te." },
        tip: { en: "Vai descansar.", why: "‘가서 쉬어’라는 말이에요." } }
    ]
  };
})(window.EP);
