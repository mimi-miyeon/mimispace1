/* 포르투갈어(유럽) 세션 60. Obrigado por ~. (형식은 pattern1.js 위쪽 설명과 같다)
   말하는 사람이 여자면 obrigada라 두 형태를 다 정답으로 둔다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[60] = {
    no: 60, form: "Obrigado por ~.", stem: "Obrigado por/Obrigada por/Obrigado pelo/Obrigada pelo/Obrigado pela/Obrigada pela/obrigado por/obrigada por",
    meaning: "~해 줘서 고마워요",
    hint: "Obrigado(a) por + 명사/동사원형",
    intro: {
      blocks: [["Obrigado", "고마워요"], ["por", "~에 대해"], ["~", "명사 / 동사원형"]],
      lines: [
        "Obrigado por ~는 ‘~해 줘서 고마워요’예요. 말하는 사람이 여자면 Obrigada예요.",
        "명사 앞 관사는 줄여요: por + o = pelo, por + a = pela: Obrigado pela ajuda.",
        "‘다 고마워요’는 Obrigado por tudo예요."
      ],
      examples: [
        { en: "Obrigado pela ajuda.", ko: "도와줘서 고마워요." },
        { en: "Obrigada por tudo.", ko: "여러 가지로 고마워요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "선물 고마워요.", before: "Obrigado", after: "presente.", answers: ["pelo"],
        wrong: { "pela": "presente는 남성 명사라 pelo예요.", "para o": "고마운 이유는 por예요: pelo." },
        tip: { en: "Adorei o presente!", why: "‘선물 정말 마음에 들어!’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "초대해 줘서 고마워요.", before: "Obrigada", after: "convite.", answers: ["pelo"],
        wrong: { "pela": "convite는 남성 명사라 pelo예요." },
        tip: { en: "Obrigada por me convidares.", why: "me convidares는 ‘네가 나를 초대한 것’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "기다려 줘서 고마워요.", before: "Obrigado por", after: ".", answers: ["esperar"],
        wrong: { "esperou": "por 뒤에는 동사원형을 써요: esperar." },
        tip: { en: "Obrigado pela paciência.", why: "paciência는 ‘인내심’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "다 고마워.", before: "Obrigada por", after: ".", answers: ["tudo"],
        wrong: { "todo": "‘모든 것’은 tudo예요. todo는 ‘모든’이에요." },
        tip: { en: "Muito obrigada por tudo.", why: "muito를 넣으면 ‘정말’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "저녁 고마워.", before: "Obrigado pelo", after: ".", answers: ["jantar"],
        wrong: { "cena": "cena는 스페인어 ‘저녁’이에요. 포르투갈어는 jantar예요." },
        tip: { en: "O jantar estava ótimo.", why: "‘저녁 정말 맛있었어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "메시지 고마워.", answers: ["Obrigado pela mensagem.", "Obrigada pela mensagem."],
        wrong: { "obrigado pelo mensagem": "mensagem은 여성 명사라 pela예요." },
        tip: { en: "Obrigado por escreveres.", why: "escreveres는 ‘네가 쓴 것’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "정보 고마워요.", answers: ["Obrigado pela informação.", "Obrigada pela informação."],
        wrong: { "obrigado pelo informação": "informação는 여성 명사라 pela예요." },
        tip: { en: "Muito obrigado pela informação.", why: "muito를 넣으면 ‘정말’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "모든 거 정말 고마워.", answers: ["Muito obrigado por tudo.", "Muito obrigada por tudo."],
        wrong: { "muito obrigado por todo": "‘모든 것’은 tudo예요." },
        tip: { en: "Nem sei como agradecer.", why: "‘어떻게 고마워해야 할지 모르겠어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "들어 줘서 고마워.", answers: ["Obrigado por me ouvir.", "Obrigada por me ouvir.", "Obrigado por me ouvires.", "Obrigada por me ouvires."],
        wrong: { "obrigado para me ouvir": "고마운 이유는 por예요." },
        tip: { en: "Obrigado pela atenção.", why: "atenção은 ‘관심, 들어 줌’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "커피 고마워요.", answers: ["Obrigado pelo café.", "Obrigada pelo café."],
        ctx: { lead: "ajuda 대신 ‘커피(café)’를 넣어 보세요.", en: "Obrigado pela ajuda." },
        wrong: { "obrigado pela café": "café는 남성 명사라 pelo예요." },
        tip: { en: "Obrigado, o café estava ótimo.", why: "‘커피 정말 맛있었어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "친절하게 대해 주셔서 고마워요.", answers: ["Obrigado pela simpatia.", "Obrigada pela simpatia."],
        dialog: { a: "Aqui tem o seu casaco.", aKo: "여기 코트 있습니다." },
        wrong: { "obrigado pelo simpatia": "simpatia는 여성 명사라 pela예요." },
        tip: { en: "Muito amável, obrigado.", why: "amável은 ‘친절한’이에요." } }
    ]
  };
})(window.EP);
