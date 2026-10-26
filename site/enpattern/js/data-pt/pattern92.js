/* 포르투갈어(유럽) 세션 92. Demora ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[92] = {
    no: 92, form: "Demora ~.", stem: "Demora/Demorou/demora/demoro/Leva", meaning: "~ 걸려요",
    hint: "Demora + 시간",
    intro: {
      blocks: [["Demora", "(시간이) 걸린다"], ["~", "시간"]],
      lines: [
        "Demora + 시간은 ‘(시간이) ~ 걸려요’예요: Demora vinte minutos.(20분 걸려요)",
        "‘얼마나 걸려요?’는 Quanto tempo demora?예요. Leva도 같은 뜻이에요.",
        "지난 일은 Demorou예요: Demorou uma hora.(한 시간 걸렸어요)"
      ],
      examples: [
        { en: "Demora vinte minutos.", ko: "20분 걸려요." },
        { en: "Quanto tempo demora?", ko: "얼마나 걸려요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "한 시간 걸려요.", before: "", after: "uma hora.", answers: ["Demora", "Leva"],
        wrong: { "tarda": "tarda는 스페인어예요. 포르투갈어는 demora예요." },
        tip: { en: "É uma hora de viagem.", why: "‘한 시간 거리예요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "얼마나 걸려요?", before: "Quanto tempo", after: "?", answers: ["demora", "leva"],
        wrong: { "tarda": "tarda는 스페인어예요. 포르투갈어는 demora예요." },
        tip: { en: "É longe?", why: "‘멀어요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오래 안 걸려요.", before: "Não demora", after: ".", answers: ["muito"],
        wrong: { "mucho": "mucho는 스페인어예요. 포르투갈어는 muito예요." },
        tip: { en: "É rápido.", why: "‘금방이에요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "두 시간 걸렸어.", before: "", after: "duas horas.", answers: ["Demorou", "Levou"],
        wrong: { "demora": "지난 일이라 demorou예요." },
        tip: { en: "Foram duas horas de viagem.", why: "‘두 시간 여행이었어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "금방 올게(오래 안 걸릴게).", before: "Não", after: ".", answers: ["demoro"],
        wrong: { "demora": "‘나는’이면 demoro예요." },
        tip: { en: "Volto já.", why: "‘금방 돌아올게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "기차로 세 시간 걸려요.", answers: ["De comboio demora três horas.", "Demora três horas de comboio."],
        wrong: { "de comboio tarda três horas": "tarda는 스페인어예요. 포르투갈어는 demora예요." },
        tip: { en: "São três horas de comboio.", why: "‘기차로 세 시간이에요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "공항까지 얼마나 걸려요?", answers: ["Quanto tempo demora até ao aeroporto?", "Quanto tempo demora para o aeroporto?"],
        wrong: { "quanto tempo tarda até ao aeroporto": "tarda는 스페인어예요. 포르투갈어는 demora예요." },
        tip: { en: "O aeroporto fica longe?", why: "‘공항 멀어요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오래 걸렸어.", answers: ["Demorou muito."],
        wrong: { "demora muito": "지난 일이라 demorou예요." },
        tip: { en: "Levou muito tempo.", why: "levar도 ‘(시간이) 걸리다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "늦어서 미안해.", answers: ["Desculpa a demora."],
        wrong: { "desculpa o demora": "demora는 여성 명사라 a demora예요." },
        tip: { en: "Desculpa o atraso.", why: "atraso는 ‘늦음, 지각’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "30분 걸려요.", answers: ["Demora meia hora."],
        ctx: { lead: "vinte minutos 대신 ‘반 시간(meia hora)’을 넣어 보세요.", en: "Demora vinte minutos." },
        wrong: { "demora media hora": "media hora는 스페인어예요. 포르투갈어는 meia hora예요." },
        tip: { en: "Leva meia hora.", why: "levar도 ‘(시간이) 걸리다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아직이요, 5분 걸려요.", answers: ["Ainda não, demora cinco minutos.", "Ainda não, demora uns cinco minutos."],
        dialog: { a: "O café está pronto?", aKo: "커피 다 됐어요?" },
        wrong: { "ainda não tarda cinco minutos": "tarda는 스페인어예요. 포르투갈어는 demora예요." },
        tip: { en: "Só mais um bocadinho.", why: "‘조금만 더요’라는 말이에요." } }
    ]
  };
})(window.EP);
