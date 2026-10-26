/* 포르투갈어(유럽) 세션 23. Ontem ~. (규칙 과거형) (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[23] = {
    no: 23, form: "Ontem ~.", stem: "Ontem", subject: "eu", meaning: "어제 ~했어요 (규칙 과거형)",
    hint: "Ontem + 과거형 (-ei, -i)",
    intro: {
      blocks: [["Ontem", "어제"], ["~", "과거형 동사"]],
      lines: [
        "규칙 동사의 ‘나’ 과거형: -ar → -ei (falar → falei), -er·-ir → -i (comer → comi, abrir → abri).",
        "Ontem(어제), na semana passada(지난주) 같은 말과 함께 써요.",
        "‘우리는’은 -ámos, -emos, -imos예요: falámos, comemos, abrimos."
      ],
      examples: [
        { en: "Ontem trabalhei muito.", ko: "어제 일을 많이 했어요." },
        { en: "Ontem comi bacalhau.", ko: "어제 바칼라우를 먹었어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 어제 엄마랑 통화했어.", before: "Ontem", after: "com a minha mãe.", answers: ["falei"],
        wrong: { "falo": "falo는 지금이에요. 어제 일은 falei예요.", "falou": "falou는 ‘그/그녀는’이에요. ‘나는’은 falei예요." },
        tip: { en: "Ontem liguei à minha mãe.", why: "ligar a는 ‘~에게 전화하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 어제 생선 먹었어.", before: "Ontem", after: "peixe.", answers: ["comi"],
        wrong: { "comei": "-er 동사는 -i예요: comi.", "como": "como는 지금이에요. 어제 일은 comi예요." },
        tip: { en: "Ontem jantei peixe.", why: "jantar는 ‘저녁으로 먹다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 어제 늦게 일어났어.", before: "Ontem", after: "tarde.", answers: ["acordei"],
        wrong: { "acordo": "acordo는 지금이에요. 어제 일은 acordei예요.", "acordi": "-ar 동사는 -ei예요: acordei." },
        tip: { en: "Ontem levantei-me tarde.", why: "levantar-se는 ‘(침대에서) 일어나다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 어제 많이 걸었어.", before: "Ontem", after: "muito.", answers: ["andámos", "caminhámos"],
        wrong: { "andei": "‘우리는’이면 andámos예요. andei는 ‘나는’이에요." },
        tip: { en: "Ontem fizemos uma grande caminhada.", why: "fizemos는 fazer의 ‘우리’ 과거형이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 어제 창문을 열었어.", before: "Ontem", after: "a janela.", answers: ["abri"],
        wrong: { "abrei": "-ir 동사는 -i예요: abri.", "abro": "abro는 지금이에요. 어제 일은 abri예요." },
        tip: { en: "Ontem deixei a janela aberta.", why: "‘창문을 열어 뒀어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 어제 포르투갈어 공부했어.", answers: ["Ontem estudei português.", "Estudei português ontem."],
        wrong: { "ontem estudo português": "어제 일은 estudei예요.", "ontem estudi português": "-ar 동사는 -ei예요: estudei." },
        tip: { en: "Ontem tive aula de português.", why: "‘어제 포르투갈어 수업이 있었어요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 어제 친구한테 편지 썼어.", answers: ["Ontem escrevi uma carta a um amigo.", "Ontem escrevi uma carta a uma amiga."],
        wrong: { "ontem escrevei uma carta a um amigo": "-er 동사는 -i예요: escrevi." },
        tip: { en: "Ontem mandei uma carta a um amigo.", why: "mandar는 ‘보내다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 어제 아무것도 안 샀어.", answers: ["Ontem não comprei nada."],
        wrong: { "ontem comprei nada": "‘아무것도 안’은 não ... nada예요. não가 꼭 필요해요." },
        tip: { en: "Ontem não gastei dinheiro.", why: "gastar는 ‘(돈을) 쓰다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 어제 늦게까지 일했어.", answers: ["Ontem trabalhei até tarde."],
        wrong: { "ontem trabalho até tarde": "어제 일은 trabalhei예요." },
        tip: { en: "Ontem saí tarde do trabalho.", why: "‘어제 늦게 퇴근했어요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 어제 정어리 먹었어.", answers: ["Ontem comi sardinhas."],
        ctx: { lead: "bacalhau 대신 ‘정어리(sardinhas)’를 넣어 보세요.", en: "Ontem comi bacalhau." },
        wrong: { "ontem comei sardinhas": "-er 동사는 -i예요: comi." },
        tip: { en: "Ontem jantei sardinhas.", why: "jantar는 ‘저녁으로 먹다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어제 하루 종일 쉬었어.", answers: ["Ontem descansei o dia todo.", "Ontem descansei todo o dia."],
        alts: ["Descansei o dia todo."],
        dialog: { a: "O que fizeste ontem?", aKo: "어제 뭐 했어?" },
        wrong: { "ontem descanso o dia todo": "어제 일은 descansei예요." },
        tip: { en: "Ontem passei o dia a descansar.", why: "passar o dia a ~는 ‘하루를 ~하며 보내다’예요." } }
    ]
  };
})(window.EP);
