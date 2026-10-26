/* 포르투갈어(유럽) 세션 73. Ia ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[73] = {
    no: 73, form: "Ia ~.", stem: "Ia/Íamos/Ias/ia", subject: "eu", meaning: "~하려고 했어요",
    hint: "Ia + 동사원형",
    intro: {
      blocks: [["Ia", "나는 ~하려고 했다"], ["~", "동사원형"]],
      lines: [
        "Ia + 동사원형은 ‘~하려고 했어요, ~할 참이었어요’예요: Ia ligar-te.(너한테 전화하려고 했어)",
        "하려다 못 한 일이나 막 하려던 참에 자주 써요: Ia sair agora mesmo.",
        "ia는 ir의 지난 형태라 ‘(그때) 가곤 했다’라는 뜻도 있어요."
      ],
      examples: [
        { en: "Ia ligar-te agora mesmo.", ko: "지금 막 너한테 전화하려고 했어." },
        { en: "Ia sair, mas começou a chover.", ko: "나가려고 했는데 비가 오기 시작했어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 지금 막 나가려던 참이었어.", before: "", after: "sair agora mesmo.", answers: ["Ia"],
        wrong: { "vou": "vou는 ‘~할 거야’예요. ‘하려던 참이었다’는 ia예요.", "iba": "iba는 스페인어예요. 포르투갈어는 ia예요." },
        tip: { en: "Estava mesmo a sair.", why: "estava a는 ‘~하고 있었다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 그 말 하려고 했어.", before: "Ia", after: "isso.", answers: ["dizer"],
        wrong: { "digo": "ia 뒤에는 동사원형을 써요: dizer." },
        tip: { en: "Era isso que eu ia dizer.", why: "‘내가 하려던 말이 그거야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 영화 보러 가려고 했어.", before: "", after: "ver um filme.", answers: ["Íamos"],
        wrong: { "ia": "‘우리는’이면 íamos예요." },
        tip: { en: "Tínhamos planos para ir ao cinema.", why: "planos는 ‘계획’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 뭐 하려고 했어?", before: "O que é que", after: "fazer?", answers: ["ias"],
        wrong: { "ia": "친구에게 묻는 거라 ias예요." },
        tip: { en: "Qual era o teu plano?", why: "‘네 계획이 뭐였어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "일찍 자려고 했는데 못 잤어.", before: "Ia deitar-me cedo, mas não", after: ".", answers: ["consegui"],
        wrong: { "consigo": "지난 일이라 consegui예요." },
        tip: { en: "Queria dormir cedo, mas não deu.", why: "não deu는 ‘안 됐다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 너한테 문자 보내려고 했어.", answers: ["Ia mandar-te uma mensagem."],
        wrong: { "ia te mandar uma mensagem": "포르투갈에서는 te를 동사 뒤에 붙여요: mandar-te." },
        tip: { en: "Estava a escrever-te agora.", why: "‘지금 너한테 쓰고 있었어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "사려고 했는데 너무 비쌌어.", answers: ["Ia comprar, mas era muito caro.", "Ia comprar, mas estava muito caro."],
        wrong: { "ia compro mas era muito caro": "ia 뒤에는 동사원형을 써요: comprar." },
        tip: { en: "Queria comprar, mas era caro demais.", why: "caro demais는 ‘너무 비싼’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "거기 가려고 했는데 길을 잃었어.", answers: ["Ia lá, mas perdi-me."],
        wrong: { "ia lá mas me perdi": "포르투갈에서는 me를 동사 뒤에 붙여요: perdi-me." },
        tip: { en: "Estava a caminho, mas perdi-me.", why: "a caminho는 ‘가는 중’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아무 말도 안 하려고 했어.", answers: ["Não ia dizer nada."],
        wrong: { "ia dizer nada": "‘아무 말도 안’은 não ... nada예요." },
        tip: { en: "Não queria dizer nada.", why: "não queria는 ‘~하고 싶지 않았다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "지금 막 너한테 쓰려고 했어.", answers: ["Ia escrever-te agora mesmo."],
        ctx: { lead: "ligar-te 대신 ‘너에게 쓰다(escrever-te)’를 넣어 보세요.", en: "Ia ligar-te agora mesmo." },
        wrong: { "ia te escrever agora mesmo": "포르투갈에서는 te를 동사 뒤에 붙여요: escrever-te." },
        tip: { en: "Estava mesmo a escrever-te.", why: "estava a는 ‘~하고 있었다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 지금 하려고 했어.", answers: ["Não, ia fazer agora.", "Não, ia fazê-lo agora."],
        dialog: { a: "Já fizeste o jantar?", aKo: "저녁 벌써 만들었어?" },
        wrong: { "não ia faço agora": "ia 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Ainda não, ia começar agora.", why: "começar는 ‘시작하다’예요." } }
    ]
  };
})(window.EP);
