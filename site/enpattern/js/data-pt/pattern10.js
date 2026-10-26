/* 포르투갈어(유럽) 세션 10. Vou + 동사. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[10] = {
    no: 10, form: "Vou ~.", stem: "Vou", subject: "eu", meaning: "~할 거예요",
    hint: "Vou + 동사원형",
    intro: {
      blocks: [["Vou", "나는 간다 (ir)"], ["~", "동사원형"]],
      lines: [
        "Vou는 ir(가다) 동사의 ‘나’ 형태예요. 동사원형을 붙이면 ‘~할 거예요’예요.",
        "가까운 미래를 말할 때 가장 많이 써요: Vou jantar.",
        "‘~에 가요’는 Vou a + 장소(오래 머물면 Vou para)예요."
      ],
      examples: [
        { en: "Vou jantar fora.", ko: "나 밖에서 저녁 먹을 거야." },
        { en: "Amanhã vou trabalhar.", ko: "나 내일 일할 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 내일 너한테 전화할게.", before: "Amanhã", after: "ligar-te.", answers: ["vou"],
        wrong: { "vai": "vai는 ‘그/그녀는 간다’예요. ‘나는’은 vou예요.", "quero": "quero는 ‘원해요’예요. ‘~할 거예요’는 vou예요." },
        tip: { en: "Ligo-te amanhã.", why: "현재형으로도 가까운 미래를 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 집에 가.", before: "Vou", after: "casa.", answers: ["para"],
        wrong: { "em": "가는 곳은 em이 아니라 para(또는 a)로 말해요." },
        tip: { en: "Vou embora.", why: "‘(이제) 갈게요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 오늘 밤에 영화 볼 거야.", before: "Esta noite vou", after: "um filme.", answers: ["ver"],
        wrong: { "vejo": "vou 뒤에는 동사원형을 써요: ver.", "assistir": "포르투갈에서는 보통 ver um filme라고 해요." },
        tip: { en: "Esta noite vou ao cinema.", why: "‘오늘 밤 영화관 가요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 해변에 갈 거야.", before: "Vou", after: "praia.", answers: ["à"],
        wrong: { "a": "praia 앞에는 관사 a가 붙어서 a + a = à예요. 악센트를 꼭 써요.", "na": "‘~에 가다’는 em이 아니라 a를 써요: à praia." },
        tip: { en: "Vou para a praia.", why: "para a도 ‘~로’예요. 오래 있을 때 써요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 다음 주에 포르투갈어 공부할 거야.", before: "Vou", after: "português na próxima semana.", answers: ["estudar"],
        wrong: { "estudo": "vou 뒤에는 동사원형을 써요: estudar." },
        tip: { en: "Vou ter aulas de português.", why: "‘포르투갈어 수업이 있을 거예요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 커피 마실 거야.", answers: ["Vou beber um café.", "Vou tomar um café."],
        wrong: { "vou bebo um café": "vou 뒤에는 동사원형을 써요: beber." },
        tip: { en: "Vou tomar um cafezinho.", why: "-zinho를 붙이면 친근한 느낌이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 내일 리스본에 갈 거야.", answers: ["Amanhã vou a Lisboa.", "Vou a Lisboa amanhã.", "Amanhã vou para Lisboa.", "Vou para Lisboa amanhã."],
        wrong: { "amanhã vou em lisboa": "가는 곳은 em이 아니라 a(또는 para)로 말해요.", "amanhã vou à lisboa": "Lisboa 앞에는 관사가 없어서 à가 아니라 a예요." },
        tip: { en: "Amanhã vou de comboio para Lisboa.", why: "de comboio는 ‘기차로’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 일찍 잘 거야.", answers: ["Hoje vou dormir cedo.", "Vou dormir cedo hoje."],
        wrong: { "hoje vou durmo cedo": "vou 뒤에는 동사원형을 써요: dormir." },
        tip: { en: "Hoje vou deitar-me cedo.", why: "deitar-se는 ‘잠자리에 들다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그거 안 살 거야.", answers: ["Não vou comprar isso."],
        wrong: { "vou não comprar isso": "não는 vou 앞에 써요: não vou." },
        tip: { en: "Não vou levar isso.", why: "levar는 가게에서 ‘(사) 가다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 친구 만날 거야.", answers: ["Vou encontrar um amigo.", "Vou encontrar uma amiga.", "Vou estar com um amigo.", "Vou estar com uma amiga."],
        ctx: { lead: "jantar fora 대신 ‘친구를 만나다(encontrar um amigo)’를 넣어 보세요.", en: "Vou jantar fora." },
        wrong: { "vou encontro um amigo": "vou 뒤에는 동사원형을 써요: encontrar." },
        tip: { en: "Vou ter com um amigo.", why: "ter com은 포르투갈식 ‘~를 만나러 가다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "포르투에 갈 거야.", answers: ["Vou ao Porto.", "Vou para o Porto."],
        dialog: { a: "O que vais fazer no fim de semana?", aKo: "주말에 뭐 할 거야?" },
        wrong: { "vou a porto": "Porto는 관사 o가 붙어서 a + o = ao예요.", "vou no porto": "가는 곳은 em이 아니라 a로 말해요: ao Porto." },
        tip: { en: "Vou dar um salto ao Porto.", why: "dar um salto는 ‘잠깐 다녀오다’예요." } }
    ]
  };
})(window.EP);
