/* 포르투갈어(유럽) 세션 4. Gosto de ~. (형식은 pattern1.js 위쪽 설명과 같다)
   stem: de가 뒤 말과 합쳐지는 모양(do, da, desta)도 핵심 부분으로 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[4] = {
    no: 4, form: "Gosto de ~.", stem: "Gosto de/Gosto do/Gosto da/Gosto desta/Gosto", subject: "eu", meaning: "나는 ~을 좋아해요",
    hint: "Gosto de + 명사/동사원형",
    intro: {
      blocks: [["Gosto", "나는 좋아한다"], ["de", "~을"], ["~", "무엇"]],
      lines: [
        "gostar는 항상 de와 함께 써요: Gosto de música.",
        "de 뒤에 관사가 오면 줄여 써요: de + o = do, de + a = da.",
        "동사원형을 붙이면 ‘~하는 걸 좋아해요’예요: Gosto de ler."
      ],
      examples: [
        { en: "Gosto de música.", ko: "나는 음악을 좋아해요." },
        { en: "Gosto do Porto.", ko: "나는 포르투를 좋아해요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 커피 좋아해.", before: "Gosto", after: "café.", answers: ["de"],
        wrong: { "por": "gostar는 por가 아니라 de와 함께 써요.", "em": "gostar는 em이 아니라 de와 함께 써요." },
        tip: { en: "Adoro café.", why: "adorar는 ‘아주 좋아하다’예요. de가 없어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 책 읽는 거 좋아해.", before: "Gosto de", after: ".", answers: ["ler"],
        wrong: { "leio": "de 뒤에는 동사원형을 써요: ler.", "lendo": "‘~하는 것’은 동사원형으로 말해요: de ler." },
        tip: { en: "Adoro ler.", why: "adorar 뒤에는 de 없이 바로 동사원형이 와요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 포르투 좋아해.", before: "Gosto", after: "Porto.", answers: ["do"],
        wrong: { "de": "Porto는 관사 o가 붙는 도시라 de + o = do예요.", "da": "Porto는 남성이라 da가 아니라 do예요." },
        tip: { en: "Adoro o Porto.", why: "adorar 뒤에는 de 없이 o Porto예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 이 노래 좋아해.", before: "Gosto", after: "canção.", answers: ["desta"],
        wrong: { "de": "de + esta는 desta로 줄여 써요.", "esta": "gostar 뒤에는 de가 필요해요: de + esta = desta.", "deste": "canção는 여성 명사라 deste가 아니라 desta예요." },
        tip: { en: "Adoro esta canção.", why: "adorar 뒤에는 de가 없어요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 걷는 거 좋아해.", before: "Gosto de", after: ".", answers: ["andar", "caminhar"],
        wrong: { "ando": "de 뒤에는 동사원형을 써요: andar." },
        tip: { en: "Gosto de passear.", why: "passear는 ‘산책하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 음악 좋아해.", answers: ["Gosto de música."],
        wrong: { "gosto música": "gostar 뒤에는 꼭 de가 필요해요." },
        tip: { en: "Adoro música.", why: "adorar는 ‘아주 좋아하다’예요. de가 없어요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 요리하는 거 좋아해.", answers: ["Gosto de cozinhar."],
        wrong: { "gosto cozinhar": "gostar 뒤에는 꼭 de가 필요해요.", "gosto de cozinho": "de 뒤에는 동사원형을 써요: cozinhar." },
        tip: { en: "Cozinho muito em casa.", why: "‘집에서 요리 많이 해요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 포르투갈 좋아해.", answers: ["Gosto de Portugal."],
        wrong: { "gosto do portugal": "Portugal은 관사 없이 쓰는 나라라 de Portugal이에요." },
        tip: { en: "Adoro Portugal.", why: "adorar는 ‘아주 좋아하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 축구 보는 거 좋아해.", answers: ["Gosto de ver futebol.", "Gosto de ver o futebol."],
        wrong: { "gosto de vejo futebol": "de 뒤에는 동사원형을 써요: ver." },
        tip: { en: "Sou fã de futebol.", why: "‘축구 팬이에요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 이 도시 좋아해.", answers: ["Gosto desta cidade."],
        ctx: { lead: "canção 대신 ‘도시(cidade)’를 넣어 보세요.", en: "Gosto desta canção." },
        wrong: { "gosto deste cidade": "cidade는 여성 명사라 deste가 아니라 desta예요." },
        tip: { en: "Adoro esta cidade.", why: "adorar 뒤에는 de가 없어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 생선 좋아해요.", answers: ["Sim, gosto de peixe."], alts: ["Sim, gosto."],
        dialog: { a: "Gosta de peixe?", aKo: "생선 좋아하세요?" },
        wrong: { "sim gosto peixe": "gostar 뒤에는 꼭 de가 필요해요." },
        tip: { en: "Gosto muito.", why: "‘아주 좋아해요’라는 짧은 대답이에요." } }
    ]
  };
})(window.EP);
