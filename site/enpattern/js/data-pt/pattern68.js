/* 포르투갈어(유럽) 세션 68. Estou à espera de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[68] = {
    no: 68, form: "Estou à espera de ~.", stem: "Estou à espera de/Estou à espera/à espera/à tua espera", subject: "eu", meaning: "~을 기다리고 있어요",
    hint: "Estou à espera de + 명사",
    intro: {
      blocks: [["Estou", "나는 ~이다"], ["à espera de", "~을 기다리는 중"], ["~", "사람·것"]],
      lines: [
        "Estou à espera de ~는 포르투갈에서 ‘~을 기다리고 있어요’예요: Estou à espera do autocarro.",
        "de 뒤의 관사는 줄여요: de + o = do, de + a = da. ‘너를’은 à tua espera예요.",
        "Estou a esperar por ~도 같은 뜻이에요."
      ],
      examples: [
        { en: "Estou à espera do autocarro.", ko: "버스 기다리고 있어요." },
        { en: "Estou à tua espera.", ko: "너 기다리고 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 친구 기다리고 있어.", before: "Estou", after: "espera de um amigo.", answers: ["à"],
        wrong: { "a": "à espera는 a + a(관사)라 악센트가 있는 à예요.", "na": "‘기다리는 중’은 à espera예요." },
        tip: { en: "Estou a esperar por um amigo.", why: "estou a esperar por도 ‘~을 기다리고 있어’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "택시 기다리고 있어요.", before: "Estou à espera", after: "táxi.", answers: ["do"],
        wrong: { "de": "táxi 앞에 관사 o가 붙어서 de + o = do예요." },
        tip: { en: "Já chamei um táxi.", why: "‘택시 벌써 불렀어요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "누구 기다리세요?", before: "Está à espera de", after: "?", answers: ["alguém"],
        wrong: { "alguien": "alguien은 스페인어예요. 포르투갈어는 alguém이에요." },
        tip: { en: "Este lugar está ocupado?", why: "‘이 자리 주인 있어요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 결과 기다리고 있어.", before: "Estamos à espera dos", after: ".", answers: ["resultados"],
        wrong: { "resultado": "dos 뒤에는 여럿 resultados예요." },
        tip: { en: "Ainda não sabemos os resultados.", why: "‘아직 결과 몰라’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "오래 기다렸어?", before: "Estiveste muito tempo à", after: "?", answers: ["espera"],
        wrong: { "esperar": "à 뒤에는 명사 espera예요." },
        tip: { en: "Esperaste muito?", why: "‘많이 기다렸어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 택배 기다리고 있어.", answers: ["Estou à espera de uma encomenda."],
        wrong: { "estou à espera de um encomenda": "encomenda는 여성 명사라 uma예요." },
        tip: { en: "Estou a aguardar uma encomenda.", why: "aguardar는 ‘기다리다’의 격식 있는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 엄마 기다리고 있어.", answers: ["Estou à espera da minha mãe."],
        wrong: { "estou à espera do minha mãe": "mãe는 여성이라 da예요." },
        tip: { en: "Estou a esperar pela minha mãe.", why: "esperar por도 ‘~을 기다리다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 너 기다리고 있었어.", answers: ["Estava à tua espera.", "Estava à espera de ti."],
        wrong: { "estava a tua espera": "à espera는 악센트가 있는 à예요." },
        tip: { en: "Estava a esperar por ti.", why: "esperar por도 ‘~을 기다리다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아직 기다리고 있어요.", answers: ["Ainda estou à espera."],
        wrong: { "ainda estou esperando": "-ndo는 브라질식이에요. 포르투갈에서는 estou à espera예요." },
        tip: { en: "Ainda estou a esperar.", why: "estou a esperar도 ‘기다리고 있어’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "기차 기다리고 있어요.", answers: ["Estou à espera do comboio."],
        ctx: { lead: "autocarro 대신 ‘기차(comboio)’를 넣어 보세요.", en: "Estou à espera do autocarro." },
        wrong: { "estou à espera da comboio": "comboio는 남성 명사라 do예요." },
        tip: { en: "Estou a esperar pelo comboio.", why: "esperar por도 ‘~을 기다리다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니요, 아직 기다리고 있어요.", answers: ["Não, ainda estou à espera.", "Ainda estou à espera."],
        dialog: { a: "Já foi atendido?", aKo: "주문 받으셨어요?" },
        wrong: { "não ainda estou esperando": "-ndo는 브라질식이에요. 포르투갈에서는 estou à espera예요." },
        tip: { en: "Ainda não, estou à espera.", why: "‘아직이요, 기다리고 있어요’라는 말이에요." } }
    ]
  };
})(window.EP);
