/* 세션 95. It is not worth ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[95] = {
    no: 95, form: "It is not worth ~ing.", stem: "It's not worth", meaning: "그건 ~할 가치가 없어요.",
    hint: "It's not worth + 동사-ing",
    intro: {
      blocks: [["It's not worth", "~할 가치가 없다"], ["~ing", "~하는 것"]],
      lines: [
        "It's not worth + 동사-ing는 ‘~할 가치가 없어 / ~할 필요 없어’예요.",
        "worth 뒤에는 to가 아니라 동사-ing를 써요. (worth waiting)",
        "‘그럴 가치 없어’는 It's not worth it.이에요."
      ],
      examples: [
        { en: "It's not worth waiting.", ko: "기다릴 가치 없어." },
        { en: "It's not worth it.", ko: "그럴 가치 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "살 가치 없어.", before: "It's not worth", after: ".", answers: ["buying"],
        wrong: { "buy": "worth 뒤에는 동사에 ing를 붙여요. buying이에요.", "to buy": "worth 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "It's a waste of money.", why: "waste는 ‘낭비’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "걱정할 가치 없어.", before: "It's not worth", after: "about.", answers: ["worrying"],
        wrong: { "worry": "worth 뒤에는 동사에 ing를 붙여요. worrying이에요." },
        tip: { en: "Don't sweat it.", why: "Don't sweat it은 ‘신경 쓰지 마’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그거 볼 가치 없어.", before: "It's not", after: "watching.", answers: ["worth"],
        wrong: { "worthy": "‘~할 가치가 있는’은 worth예요." },
        tip: { en: "Skip it.", why: "skip은 ‘건너뛰다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "싸울 가치 없어.", before: "It's not worth", after: "about.", answers: ["fighting", "arguing"],
        wrong: { "fight": "worth 뒤에는 동사에 ing를 붙여요. fighting이에요." },
        tip: { en: "Let it go.", why: "‘그냥 넘겨’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 돈 낼 가치 없어.", before: "", after: "not worth the money.", answers: ["It's"],
        wrong: { "i am": "‘가치 없어’는 It's not worth예요." },
        tip: { en: "It's overpriced.", why: "overpriced는 ‘값이 너무 비싼’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그거 고칠 가치 없어.", answers: ["It's not worth fixing.", "It's not worth repairing."],
        wrong: { "it is not worth to fix": "worth 뒤에는 to 대신 동사-ing를 써요.", "it is not worth fix": "worth 뒤에는 동사에 ing를 붙여요. fixing이에요." },
        tip: { en: "Just buy a new one.", why: "‘그냥 새로 사’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 일로 울 필요 없어.", answers: ["It's not worth crying over.", "It's not worth crying about."],
        wrong: { "it is not worth to cry over": "worth 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Don't cry over it.", why: "cry over는 ‘~ 때문에 울다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "거기 갈 가치 없어.", answers: ["It's not worth going there.", "It's not worth going."],
        wrong: { "it is not worth go there": "worth 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "Don't bother going there.", why: "Don't bother는 ‘굳이 ~하지 마’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 읽을 가치 없어.", answers: ["It's not worth reading."],
        wrong: { "it is not worth to read": "worth 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "It's a boring book.", why: "‘지루한 책이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "해 볼 가치 없어.", answers: ["It's not worth trying."],
        ctx: { lead: "waiting 대신 ‘시도하다(trying)’로 바꿔 보세요.", en: "It's not worth waiting." },
        wrong: { "it is not worth try": "worth 뒤에는 동사에 ing를 붙여요. trying이에요." },
        tip: { en: "Don't waste your time.", why: "waste는 ‘낭비하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 그럴 가치 없어.", answers: ["No, it's not worth it.", "No, it's not worth waiting."],
        dialog: { a: "Should I wait in line for an hour?", aKo: "한 시간 줄 서서 기다릴까?" },
        wrong: { "no it is not worthy": "‘가치가 없어’는 It's not worth it이에요." },
        tip: { en: "No, let's go somewhere else.", why: "‘아니, 다른 데 가자’라는 말이에요." } }
    ]
  };
})(window.EP);
