/* 포르투갈어(유럽) 세션 20. Estava a ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[20] = {
    no: 20, form: "Estava a ~.", stem: "Estava a/Estávamos a", subject: "eu", meaning: "~하고 있었어요",
    hint: "Estava a + 동사원형",
    intro: {
      blocks: [["Estava", "나는 (그때) ~이었다"], ["a", "~하는 중"], ["~", "동사원형"]],
      lines: [
        "estava a + 동사원형은 ‘(그때) ~하고 있었어요’예요. Estou a(지금 ~하고 있어요)의 과거예요.",
        "estava는 ‘나’와 ‘그/그녀’ 모두 같은 모양이에요. ‘우리는’은 estávamos예요.",
        "다른 일이 끼어들 때 자주 써요: Estava a dormir quando ligaste."
      ],
      examples: [
        { en: "Estava a dormir.", ko: "자고 있었어요." },
        { en: "Estava a trabalhar quando ligaste.", ko: "네가 전화했을 때 일하고 있었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 TV 보고 있었어.", before: "", after: "a ver televisão.", answers: ["Estava"],
        wrong: { "estou": "estou는 지금이에요. ‘~하고 있었어요’는 estava예요.", "era": "진행형은 ser가 아니라 estar(estava)예요." },
        tip: { en: "Estava a ver TV.", why: "TV는 televisão의 줄임말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 요리하고 있었어.", before: "Estava a", after: ".", answers: ["cozinhar"],
        wrong: { "cozinhando": "-ndo는 브라질식이에요. 포르투갈에서는 a cozinhar예요." },
        tip: { en: "Estava a fazer o jantar.", why: "fazer o jantar는 ‘저녁을 만들다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "비가 오고 있었어요.", before: "Estava", after: "chover.", answers: ["a"],
        wrong: { "de": "진행형은 estar a + 동사원형이에요." },
        tip: { en: "Estava a chover muito.", why: "muito는 ‘많이’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네가 전화했을 때 나 자고 있었어.", before: "Estava a", after: "quando ligaste.", answers: ["dormir"],
        wrong: { "dormindo": "-ndo는 브라질식이에요. 포르투갈에서는 a dormir예요." },
        tip: { en: "Quando ligaste, estava a dormir.", why: "순서를 바꿔 말해도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 네 얘기 하고 있었어.", before: "Estávamos a falar de", after: ".", answers: ["ti"],
        wrong: { "tu": "de 뒤에는 tu가 아니라 ti를 써요." },
        tip: { en: "Estávamos agora a falar de ti.", why: "agora를 넣으면 ‘방금까지’ 느낌이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 공부하고 있었어.", answers: ["Estava a estudar."],
        wrong: { "estava estudando": "-ndo는 브라질식이에요. 포르투갈에서는 estava a estudar예요.", "estou a estudar": "estou는 지금이에요. ‘~하고 있었어요’는 estava예요." },
        tip: { en: "Estive a estudar.", why: "estive a는 ‘(한동안) ~하고 있었다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 운전하고 있었어.", answers: ["Estava a conduzir."],
        wrong: { "estava a dirigir": "dirigir는 브라질에서 ‘운전하다’예요. 포르투갈에서는 conduzir예요." },
        tip: { en: "Ia a conduzir.", why: "ia a는 ‘가는 길에 ~하고 있었다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 너 기다리고 있었어.", answers: ["Estava a esperar por ti."], alts: ["Estava à tua espera."],
        wrong: { "estava esperando por ti": "-ndo는 브라질식이에요. 포르투갈에서는 estava a esperar예요." },
        tip: { en: "Estava mesmo à tua espera.", why: "mesmo는 ‘정말’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 아무것도 안 하고 있었어.", answers: ["Não estava a fazer nada."],
        wrong: { "estava a fazer nada": "‘아무것도 안’은 não ... nada예요. não가 꼭 필요해요." },
        tip: { en: "Estava só a descansar.", why: "só는 ‘그냥’이에요. ‘그냥 쉬고 있었어’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 일하고 있었어.", answers: ["Estava a trabalhar."],
        ctx: { lead: "dormir 대신 ‘일하다(trabalhar)’를 넣어 보세요.", en: "Estava a dormir." },
        wrong: { "estava trabalhando": "-ndo는 브라질식이에요. 포르투갈에서는 estava a trabalhar예요." },
        tip: { en: "Estava no trabalho.", why: "‘회사에 있었어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 샤워하고 있었어.", answers: ["Desculpa, estava a tomar banho.", "Desculpa, estava a tomar duche."],
        dialog: { a: "Porque é que não atendeste?", aKo: "왜 전화 안 받았어?" },
        wrong: { "desculpa estava tomando banho": "-ndo는 브라질식이에요. 포르투갈에서는 estava a tomar예요." },
        tip: { en: "Desculpa, estava no banho.", why: "‘샤워 중이었어’라는 짧은 말이에요." } }
    ]
  };
})(window.EP);
