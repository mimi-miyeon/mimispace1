/* 포르투갈어(유럽) 세션 40. Não percebo ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[40] = {
    no: 40, form: "Não percebo ~.", stem: "Não percebo/Percebo/Não percebi/Percebi/Percebeste", subject: "eu", meaning: "~을 이해 못 하겠어요",
    hint: "Não percebo + 명사/문장",
    intro: {
      blocks: [["Não percebo", "나는 이해 못 한다"], ["~", "말 / 문장"]],
      lines: [
        "포르투갈에서는 ‘이해하다’를 perceber로 많이 말해요: Não percebo.(이해가 안 돼요)",
        "방금 들은 말을 못 알아들었으면 Não percebi.(못 알아들었어요)예요.",
        "entender도 같은 뜻이지만, 일상에서는 perceber가 더 흔해요."
      ],
      examples: [
        { en: "Não percebo esta palavra.", ko: "이 단어 이해가 안 돼요." },
        { en: "Desculpe, não percebi.", ko: "죄송해요, 못 알아들었어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이해가 안 돼요.", before: "Não", after: ".", answers: ["percebo", "entendo"],
        wrong: { "percibo": "percibo는 스페인어예요. 포르투갈어는 percebo예요." },
        tip: { en: "Não estou a perceber.", why: "‘지금 이해가 안 돼요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "못 알아들었어, 다시 말해 줄래?", before: "Não", after: ", podes repetir?", answers: ["percebi"],
        wrong: { "percibí": "percibí는 스페인어예요. 포르투갈어는 percebi예요." },
        tip: { en: "Como?", why: "‘응? 뭐라고?’라는 짧은 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 이해했어?", before: "", after: "?", answers: ["Percebeste"],
        wrong: { "percebi": "‘너는’이면 percebeste예요. percebi는 ‘나는’이에요." },
        tip: { en: "Está claro?", why: "‘알겠어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이 문장 이해가 안 돼요.", before: "Não percebo", after: "frase.", answers: ["esta"],
        wrong: { "este": "frase는 여성 명사라 esta예요." },
        tip: { en: "O que quer dizer esta frase?", why: "quer dizer는 ‘뜻하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "왜 그런 일이 생기는지 이해가 안 돼.", before: "Não percebo", after: "é que isso acontece.", answers: ["porque"],
        wrong: { "por que": "포르투갈에서는 porque를 붙여 써요." },
        tip: { en: "Não sei porquê.", why: "‘왜인지 모르겠어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그 사람 말을 못 알아듣겠어.", answers: ["Não percebo o que ele diz."],
        wrong: { "não percebo o que ele digo": "‘그는’이면 diz예요." },
        tip: { en: "Não percebo nada do que ele diz.", why: "nada do que는 ‘~하는 것 하나도’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이제 이해했어요.", answers: ["Agora percebi.", "Já percebi.", "Agora percebo."],
        wrong: { "agora percebe": "‘나는’이면 percebi예요." },
        tip: { en: "Ah, está bem!", why: "‘아, 알겠어요!’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "포르투갈어 조금 알아들어요.", answers: ["Percebo um pouco de português."],
        wrong: { "percibo um pouco de português": "percibo는 스페인어예요. 포르투갈어는 percebo예요." },
        tip: { en: "Entendo um pouco de português.", why: "entender도 ‘이해하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "하나도 모르겠어.", answers: ["Não percebo nada."],
        wrong: { "percebo nada": "‘아무것도 안’은 não ... nada예요." },
        tip: { en: "Não estou a perceber nada.", why: "‘지금 하나도 모르겠어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 질문 이해가 안 돼요.", answers: ["Não percebo esta pergunta."],
        ctx: { lead: "palavra 대신 ‘질문(pergunta)’을 넣어 보세요.", en: "Não percebo esta palavra." },
        wrong: { "não percebo este pergunta": "pergunta는 여성 명사라 esta예요." },
        tip: { en: "Pode explicar a pergunta?", why: "explicar는 ‘설명하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "죄송해요, 못 알아들었어요.", answers: ["Desculpe, não percebi."], alts: ["Desculpe, não entendi."],
        dialog: { a: "O comboio sai da linha três.", aKo: "기차는 3번 선로에서 출발해요." },
        wrong: { "desculpe no entendí": "no entendí는 스페인어예요. 포르투갈어는 não percebi예요." },
        tip: { en: "Desculpe, pode repetir?", why: "‘다시 말씀해 주실래요?’라는 말이에요." } }
    ]
  };
})(window.EP);
