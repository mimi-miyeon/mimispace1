/* 포르투갈어(유럽) 세션 51. É mais ~ do que ~. (형식은 pattern1.js 위쪽 설명과 같다)
   비교 문장이라 subject를 두지 않는다. stem: 비교에 쓰는 말 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[51] = {
    no: 51, form: "É mais ~ do que ~.", stem: "mais/melhor/maior", meaning: "~보다 더 ~해요",
    hint: "É mais + 형용사 + do que + 명사",
    intro: {
      blocks: [["mais", "더"], ["~", "형용사"], ["do que", "~보다"], ["~", "비교 대상"]],
      lines: [
        "비교는 mais + 형용사 + do que예요: O comboio é mais rápido do que o autocarro.",
        "do que는 que만 써도 돼요. ‘덜 ~해요’는 menos ~ do que예요.",
        "bom의 비교는 melhor(더 좋은), grande는 maior(더 큰)예요. mais bom이라고 하지 않아요."
      ],
      examples: [
        { en: "É mais barato do que o outro.", ko: "다른 것보다 더 싸요." },
        { en: "Lisboa é maior do que o Porto.", ko: "리스본이 포르투보다 커요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이게 저것보다 더 비싸요.", before: "Este é", after: "caro do que aquele.", answers: ["mais"],
        wrong: { "más": "más는 스페인어예요. 포르투갈어는 mais예요.", "muito": "비교의 ‘더’는 mais예요. muito는 ‘아주’예요." },
        tip: { en: "Aquele é mais barato.", why: "‘저게 더 싸요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "기차가 버스보다 빨라.", before: "O comboio é mais rápido do", after: "o autocarro.", answers: ["que"],
        wrong: { "de": "비교의 ‘~보다’는 do que예요." },
        tip: { en: "O autocarro é mais lento.", why: "lento는 ‘느린’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이게 더 좋아.", before: "Este é", after: ".", answers: ["melhor"],
        wrong: { "mais bom": "bom의 비교는 melhor예요. mais bom이라고 하지 않아요.", "mejor": "mejor는 스페인어예요. 포르투갈어는 melhor예요." },
        tip: { en: "Gosto mais deste.", why: "‘이게 더 좋아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "오늘이 어제보다 더 추워.", before: "Hoje está mais frio do que", after: ".", answers: ["ontem"],
        wrong: { "ayer": "ayer는 스페인어예요. 포르투갈어는 ontem이에요." },
        tip: { en: "Hoje está mais frio.", why: "비교 대상은 빼도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "포르투가 리스본보다 작아요.", before: "O Porto é mais", after: "do que Lisboa.", answers: ["pequeno"],
        wrong: { "pequena": "Porto는 남성이라 pequeno예요." },
        tip: { en: "Lisboa é maior do que o Porto.", why: "maior는 ‘더 큰’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 호텔이 저 호텔보다 더 좋아요.", answers: ["Este hotel é melhor do que aquele.", "Este hotel é melhor que aquele."],
        wrong: { "este hotel é mais bom do que aquele": "bom의 비교는 melhor예요." },
        tip: { en: "Prefiro este hotel.", why: "‘이 호텔이 더 좋아’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내 형이 나보다 키가 커.", answers: ["O meu irmão é mais alto do que eu.", "O meu irmão é mais alto que eu."],
        wrong: { "o meu irmão é mais alto do que mim": "비교 뒤에는 eu를 써요: do que eu." },
        tip: { en: "Sou mais baixo do que o meu irmão.", why: "baixo는 ‘키가 작은’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "포르투갈어가 영어보다 어려워.", answers: ["O português é mais difícil do que o inglês.", "O português é mais difícil que o inglês."],
        wrong: { "o português é más difícil do que o inglês": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "O inglês é mais fácil.", why: "‘영어가 더 쉬워’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "오늘이 어제보다 나아.", answers: ["Hoje está melhor do que ontem.", "Hoje está melhor que ontem."],
        wrong: { "hoje está mais bom do que ontem": "bom의 비교는 melhor예요." },
        tip: { en: "Hoje sinto-me melhor.", why: "‘오늘은 기분이 더 좋아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "다른 것보다 더 가벼워요.", answers: ["É mais leve do que o outro.", "É mais leve que o outro."],
        ctx: { lead: "barato 대신 ‘가벼운(leve)’을 넣어 보세요.", en: "É mais barato do que o outro." },
        wrong: { "é más leve do que o outro": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Pesa menos do que o outro.", why: "pesar menos는 ‘덜 무겁다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "포르투가 더 예쁜 것 같아.", answers: ["Acho que o Porto é mais bonito.", "O Porto é mais bonito."],
        dialog: { a: "Qual preferes, o Porto ou Lisboa?", aKo: "포르투랑 리스본 중에 어디가 좋아?" },
        wrong: { "acho que o porto é más bonito": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Gosto mais do Porto.", why: "gosto mais de는 ‘~이 더 좋아’예요." } }
    ]
  };
})(window.EP);
