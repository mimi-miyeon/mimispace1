/* 포르투갈어(유럽) 세션 94. Estou farto de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[94] = {
    no: 94, form: "Estou farto de ~.", stem: "Estou farto/Estou farta/estás farto/estás farta/Estamos fartos", subject: "eu", meaning: "~이 지긋지긋해요",
    hint: "Estou farto(a) de + 명사/동사원형",
    intro: {
      blocks: [["Estou farto", "나는 질렸다"], ["de", "~에"], ["~", "명사 / 동사원형"]],
      lines: [
        "Estou farto de ~는 ‘~이 지긋지긋해요, ~에 질렸어요’예요. 여자는 farta예요.",
        "동사원형도 붙여요: Estou farto de esperar.(기다리는 거 지쳤어)",
        "포르투갈에서 아주 자주 쓰지만, 친한 사이에서 쓰는 말이에요."
      ],
      examples: [
        { en: "Estou farto de chuva.", ko: "비가 지긋지긋해요." },
        { en: "Estou farta de esperar.", ko: "기다리는 거 지쳤어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 이 일 지겨워.", before: "Estou", after: "deste trabalho.", answers: ["farto", "farta"],
        wrong: { "harto": "harto는 스페인어예요. 포르투갈어는 farto예요." },
        tip: { en: "Já não aguento este trabalho.", why: "aguentar는 ‘견디다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 공부하는 거 질렸어.", before: "Estou farto de", after: ".", answers: ["estudar"],
        wrong: { "estudo": "de 뒤에는 동사원형을 써요: estudar." },
        tip: { en: "Já não posso estudar mais.", why: "‘더는 공부 못 하겠어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 지겹지 않아?", before: "Não estás", after: "?", answers: ["farto", "farta"],
        wrong: { "harto": "harto는 스페인어예요. 포르투갈어는 farto예요." },
        tip: { en: "Não te cansas?", why: "cansar-se는 ‘지치다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 다 질렸어.", before: "Estamos", after: "disto.", answers: ["fartos", "fartas"],
        wrong: { "farto": "‘우리는’이면 fartos예요." },
        tip: { en: "Já chega!", why: "‘이제 그만!’이라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그 노래 질렸어.", before: "Estou farta", after: "canção.", answers: ["dessa", "desta"],
        wrong: { "desse": "canção는 여성 명사라 dessa예요." },
        tip: { en: "Já ouvi essa canção mil vezes.", why: "mil vezes는 ‘천 번’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "추위가 지긋지긋해.", answers: ["Estou farto do frio.", "Estou farta do frio."],
        wrong: { "estou farto da frio": "frio는 남성 명사라 do예요." },
        tip: { en: "Já não aguento este frio.", why: "aguentar는 ‘견디다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 동네 소음 지긋지긋해.", answers: ["Estou farto do barulho deste bairro.", "Estou farta do barulho deste bairro."],
        wrong: { "estou farto do ruido deste bairro": "ruido는 스페인어예요. 포르투갈어는 barulho예요." },
        tip: { en: "Este bairro é muito barulhento.", why: "barulhento는 ‘시끄러운’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "매일 같은 거 먹는 거 질렸어.", answers: ["Estou farto de comer sempre o mesmo.", "Estou farta de comer sempre o mesmo."],
        wrong: { "estou farto de como sempre o mesmo": "de 뒤에는 동사원형을 써요: comer." },
        tip: { en: "Quero comer outra coisa.", why: "‘다른 거 먹고 싶어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 안 질렸어.", answers: ["Não estou farto.", "Não estou farta."],
        wrong: { "estou não farto": "não는 estou 앞에 써요." },
        tip: { en: "Ainda gosto.", why: "‘아직 좋아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "차 막히는 거 지긋지긋해.", answers: ["Estou farto do trânsito.", "Estou farta do trânsito.", "Estou farto de trânsito.", "Estou farta de trânsito."],
        ctx: { lead: "chuva 대신 ‘교통 체증(trânsito)’을 넣어 보세요.", en: "Estou farto de chuva." },
        wrong: { "estou harto do trânsito": "harto는 스페인어예요. 포르투갈어는 farto예요." },
        tip: { en: "O trânsito é horrível.", why: "horrível은 ‘끔찍한’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 기다리는 거 지쳤어.", answers: ["Sim, estou farta de esperar.", "Sim, estou farto de esperar."],
        dialog: { a: "Ainda estás à espera?", aKo: "아직 기다리고 있어?" },
        wrong: { "sim estou farta de espero": "de 뒤에는 동사원형을 써요: esperar." },
        tip: { en: "Sim, já estou aqui há uma hora.", why: "há uma hora는 ‘한 시간째’예요." } }
    ]
  };
})(window.EP);
