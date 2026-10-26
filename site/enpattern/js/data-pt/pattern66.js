/* 포르투갈어(유럽) 세션 66. Levanto-me ~. (재귀동사) (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[66] = {
    no: 66, form: "Levanto-me ~.", stem: "Levanto-me/Levantei-me/me levanto/te levantas/Deito-me/visto-me/vestir-me/levantar", subject: "eu",
    meaning: "(나는) ~에 일어나요",
    hint: "Levanto-me + 시간",
    intro: {
      blocks: [["Levanto", "나는 일으킨다"], ["-me", "나 자신을"], ["~", "시간"]],
      lines: [
        "levantar-se(일어나다)처럼 -se가 붙은 동사는 ‘나’면 -me를 붙여요: Levanto-me às sete.",
        "자주 쓰는 재귀동사: deitar-se(잠자리에 들다), vestir-se(옷 입다), chamar-se(이름이 ~이다).",
        "não, nunca, já 같은 말이 앞에 오면 me가 동사 앞으로 가요: Nunca me levanto tarde."
      ],
      examples: [
        { en: "Levanto-me às sete.", ko: "7시에 일어나요." },
        { en: "Deito-me às onze.", ko: "11시에 자요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 보통 6시에 일어나.", before: "Normalmente", after: "às seis.", answers: ["levanto-me"],
        wrong: { "me levanto": "포르투갈에서는 me를 동사 뒤에 붙여요: levanto-me.", "levanto": "levantar-se는 me가 꼭 필요해요: levanto-me." },
        tip: { en: "Costumo acordar às seis.", why: "acordar는 ‘잠에서 깨다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 늦게 자.", before: "", after: "tarde.", answers: ["Deito-me"],
        wrong: { "me deito": "포르투갈에서는 me를 동사 뒤에 붙여요: deito-me." },
        tip: { en: "Vou para a cama tarde.", why: "ir para a cama는 ‘잠자리에 들다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 몇 시에 일어나?", before: "A que horas te", after: "?", answers: ["levantas"],
        wrong: { "levanto": "친구에게 묻는 거라 levantas예요.", "levantas-te": "a que horas가 앞에 오면 te가 동사 앞으로 와요: te levantas." },
        tip: { en: "A que horas acordas?", why: "acordar는 ‘잠에서 깨다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 절대 늦게 안 일어나.", before: "Nunca me", after: "tarde.", answers: ["levanto"],
        wrong: { "levanto-me": "nunca가 앞에 오면 me가 동사 앞으로 와요: nunca me levanto." },
        tip: { en: "Sou muito madrugador.", why: "madrugador는 ‘일찍 일어나는 사람’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 빨리 옷 입을게.", before: "Vou", after: "rápido.", answers: ["vestir-me"],
        wrong: { "me vestir": "포르투갈에서는 me를 동사 뒤에 붙여요: vestir-me." },
        tip: { en: "Já me visto.", why: "já가 앞에 오면 me가 동사 앞으로 와요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 주말엔 9시에 일어나.", answers: ["Ao fim de semana levanto-me às nove.", "Levanto-me às nove ao fim de semana."],
        wrong: { "ao fim de semana me levanto às nove": "포르투갈에서는 me를 동사 뒤에 붙여요: levanto-me." },
        tip: { en: "Ao fim de semana durmo até às nove.", why: "dormir até는 ‘~까지 자다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 오늘 일찍 일어났어.", answers: ["Hoje levantei-me cedo."],
        wrong: { "hoje me levantei cedo": "포르투갈에서는 me를 동사 뒤에 붙여요: levantei-me." },
        tip: { en: "Hoje acordei cedo.", why: "acordei는 ‘잠에서 깼어’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 샤워하고 옷 입어.", answers: ["Tomo banho e visto-me.", "Tomo duche e visto-me."],
        wrong: { "tomo banho e me visto": "포르투갈에서는 me를 동사 뒤에 붙여요: visto-me." },
        tip: { en: "Primeiro tomo banho, depois visto-me.", why: "primeiro는 ‘먼저’, depois는 ‘그다음’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 오늘 일어나기 싫어.", answers: ["Hoje não me quero levantar.", "Hoje não quero levantar-me."],
        wrong: { "hoje não quero me levantar": "포르투갈에서는 levantar-me처럼 뒤에 붙이거나, não 뒤로 옮겨요: não me quero levantar." },
        tip: { en: "Hoje apetece-me ficar na cama.", why: "‘오늘은 침대에 있고 싶어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "8시 반에 일어나요.", answers: ["Levanto-me às oito e meia."],
        ctx: { lead: "sete 대신 ‘8시 반(oito e meia)’을 넣어 보세요.", en: "Levanto-me às sete." },
        wrong: { "me levanto às oito e meia": "포르투갈에서는 me를 동사 뒤에 붙여요: levanto-me." },
        tip: { en: "Acordo às oito e meia.", why: "acordar는 ‘잠에서 깨다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너무 늦게 자서 그래.", answers: ["Deito-me muito tarde.", "Deito-me tarde demais."],
        dialog: { a: "Estás sempre cansado. Porquê?", aKo: "너 맨날 피곤해 보여. 왜?" },
        wrong: { "me deito muito tarde": "포르투갈에서는 me를 동사 뒤에 붙여요: deito-me." },
        tip: { en: "Vou para a cama muito tarde.", why: "ir para a cama는 ‘잠자리에 들다’예요." } }
    ]
  };
})(window.EP);
