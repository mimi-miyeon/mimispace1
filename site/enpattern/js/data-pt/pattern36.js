/* 포르투갈어(유럽) 세션 36. Sei ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[36] = {
    no: 36, form: "Sei ~.", stem: "Sei/Sabes", subject: "eu", meaning: "~할 줄 알아요",
    hint: "Sei + 동사원형",
    intro: {
      blocks: [["Sei", "나는 안다 (saber)"], ["~", "동사원형"]],
      lines: [
        "Sei는 saber(알다)의 ‘나’ 형태예요. 동사원형을 붙이면 ‘~할 줄 알아요’예요: Sei nadar.",
        "배워서 아는 능력에 써요. 허락은 posso, 해낼 수 있는지는 consigo예요.",
        "‘몰라요’는 Não sei, 친구에게 ‘너 ~할 줄 알아?’는 Sabes ~?예요."
      ],
      examples: [
        { en: "Sei nadar.", ko: "수영할 줄 알아요." },
        { en: "Sei falar um pouco de português.", ko: "포르투갈어 조금 할 줄 알아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 운전할 줄 알아.", before: "", after: "conduzir.", answers: ["Sei"],
        wrong: { "posso": "배워서 아는 능력은 sei예요. posso는 ‘해도 돼요’예요.", "conheço": "능력은 saber예요: sei." },
        tip: { en: "Tenho carta de condução.", why: "carta de condução는 포르투갈의 ‘운전면허’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 요리할 줄 몰라.", before: "Não sei", after: ".", answers: ["cozinhar"],
        wrong: { "cozinho": "sei 뒤에는 동사원형을 써요: cozinhar." },
        tip: { en: "Não tenho jeito para cozinhar.", why: "ter jeito para는 ‘~에 소질이 있다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 사람 기타 칠 줄 알아.", before: "Ele", after: "tocar guitarra.", answers: ["sabe"],
        wrong: { "sei": "‘그는’이면 sabe예요. sei는 ‘나는’이에요." },
        tip: { en: "Ele toca guitarra muito bem.", why: "‘그 사람 기타 정말 잘 쳐’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "포르투갈어 조금 할 줄 알아.", before: "Sei falar um", after: "de português.", answers: ["pouco"],
        wrong: { "poco": "poco는 스페인어예요. 포르투갈어는 pouco예요." },
        tip: { en: "Falo um pouco de português.", why: "falo는 ‘말해요’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 수영할 줄 알아?", before: "", after: "nadar?", answers: ["Sabes"],
        wrong: { "sei": "친구에게 물을 때는 sabes예요. sei는 ‘나는’이에요." },
        tip: { en: "Consegues nadar?", why: "conseguir는 ‘해낼 수 있다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 춤출 줄 알아.", answers: ["Sei dançar."],
        wrong: { "sei danço": "sei 뒤에는 동사원형을 써요: dançar." },
        tip: { en: "Danço bem.", why: "‘춤 잘 춰요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 스페인어 할 줄 알아.", answers: ["Sei falar espanhol."],
        wrong: { "conheço espanhol": "언어를 할 줄 안다는 sei falar(또는 falo)예요." },
        tip: { en: "Falo espanhol.", why: "‘스페인어 해요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그거 할 줄 몰라.", answers: ["Não sei fazer isso."],
        wrong: { "não sei faço isso": "sei 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Não sei como se faz isso.", why: "como se faz는 ‘어떻게 하는지’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 자전거 탈 줄 알아.", answers: ["Sei andar de bicicleta."],
        wrong: { "sei ando de bicicleta": "sei 뒤에는 동사원형을 써요: andar." },
        tip: { en: "Ando de bicicleta desde pequeno.", why: "desde pequeno는 ‘어릴 때부터’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 요리할 줄 알아.", answers: ["Sei cozinhar."],
        ctx: { lead: "nadar 대신 ‘요리하다(cozinhar)’를 넣어 보세요.", en: "Sei nadar." },
        wrong: { "sei cozinho": "sei 뒤에는 동사원형을 써요: cozinhar." },
        tip: { en: "Cozinho bastante bem.", why: "bastante bem은 ‘꽤 잘’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 조금 할 줄 알아.", answers: ["Sim, sei um pouco.", "Sei, um pouco.", "Sim, sei falar um pouco."],
        dialog: { a: "Sabes falar inglês?", aKo: "영어 할 줄 알아?" },
        wrong: { "sim conheço um pouco": "능력은 saber예요: sei." },
        tip: { en: "Sei, mas pouco.", why: "‘알긴 하는데 조금’이라는 말이에요." } }
    ]
  };
})(window.EP);
