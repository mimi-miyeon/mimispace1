/* 포르투갈어(유럽) 세션 21. Fui ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[21] = {
    no: 21, form: "Fui ~.", stem: "Fui/Fomos/Foi", subject: "eu", meaning: "~에 갔어요 / ~였어요 (지난 일)",
    hint: "Fui a + 장소 / Fui + 명사",
    intro: {
      blocks: [["Fui", "나는 갔다 / 나는 ~였다"], ["~", "장소 / 무엇"]],
      lines: [
        "Fui는 ir(가다)와 ser(~이다) 둘 다의 ‘나’ 과거형이에요.",
        "어디에 갔는지는 Fui a + 장소예요: Fui a Lisboa. Fui ao cinema.",
        "‘우리는’은 Fomos, ‘그/그녀·그것은’은 Foi예요."
      ],
      examples: [
        { en: "Ontem fui ao cinema.", ko: "어제 영화관에 갔어요." },
        { en: "Fui a Lisboa no fim de semana.", ko: "주말에 리스본에 갔어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 어제 해변에 갔어.", before: "Ontem", after: "à praia.", answers: ["fui"],
        wrong: { "vou": "vou는 지금·앞으로예요. 지난 일은 fui예요.", "foi": "foi는 ‘그/그녀는 갔다’예요. ‘나는’은 fui예요." },
        tip: { en: "Ontem estive na praia.", why: "‘어제 해변에 있었어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 지난주에 포르투에 갔어.", before: "Fui", after: "Porto na semana passada.", answers: ["ao"],
        wrong: { "a": "Porto는 관사 o가 붙어서 a + o = ao예요.", "no": "‘~에 갔다’는 em이 아니라 a를 써요: ao Porto." },
        tip: { en: "Estive no Porto na semana passada.", why: "estive em은 ‘~에 있었다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 어제 저녁에 식당에 갔어.", before: "", after: "a um restaurante ontem à noite.", answers: ["Fomos"],
        wrong: { "fui": "‘우리는’이면 fomos예요. fui는 ‘나는’이에요.", "vamos": "vamos는 지금·앞으로예요. 지난 일은 fomos예요." },
        tip: { en: "Ontem jantámos fora.", why: "jantar fora는 ‘외식하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그거 정말 좋은 경험이었어.", before: "", after: "uma ótima experiência.", answers: ["Foi"],
        wrong: { "fui": "‘그것은’이면 foi예요. fui는 ‘나는’이에요." },
        tip: { en: "Adorei a experiência.", why: "adorei는 ‘정말 좋았어요’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 학교에 걸어서 갔어.", before: "Fui a", after: "para a escola.", answers: ["pé"],
        wrong: { "pie": "pie는 스페인어예요. 포르투갈어는 a pé예요." },
        tip: { en: "Fui a andar até à escola.", why: "até à는 ‘~까지’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 어제 시장에 갔어.", answers: ["Ontem fui ao mercado.", "Fui ao mercado ontem."],
        wrong: { "ontem fui a mercado": "mercado는 관사 o가 붙어서 a + o = ao예요.", "ontem vou ao mercado": "어제 일은 vou가 아니라 fui예요." },
        tip: { en: "Ontem estive no mercado.", why: "‘어제 시장에 있었어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 작년에 스페인에 갔어.", answers: ["No ano passado fui a Espanha.", "Fui a Espanha no ano passado.", "O ano passado fui a Espanha."],
        wrong: { "no ano passado fui em espanha": "‘~에 갔다’는 em이 아니라 a를 써요." },
        tip: { en: "No ano passado estive em Espanha.", why: "estive em은 ‘~에 있었다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 예전에 선생님이었어.", answers: ["Já fui professor.", "Já fui professora."],
        wrong: { "já fui um professor": "직업 앞에는 um/uma를 붙이지 않아요." },
        tip: { en: "Já trabalhei como professor.", why: "trabalhei는 ‘일했어요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 오늘 안 갔어.", answers: ["Hoje não fui.", "Não fui hoje."],
        wrong: { "hoje não vou": "지난 일은 não fui예요. não vou는 ‘안 갈 거예요’예요." },
        tip: { en: "Hoje acabei por não ir.", why: "acabar por는 ‘결국 ~하게 되다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 어제 공원에 갔어.", answers: ["Ontem fui ao parque.", "Fui ao parque ontem."],
        ctx: { lead: "cinema 대신 ‘공원(parque)’을 넣어 보세요.", en: "Ontem fui ao cinema." },
        wrong: { "ontem fui a parque": "parque는 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Ontem dei um passeio no parque.", why: "dar um passeio는 ‘산책하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "알가르브에 갔어.", answers: ["Fui ao Algarve."],
        dialog: { a: "Onde foste nas férias?", aKo: "휴가 때 어디 갔어?" },
        wrong: { "fui a algarve": "Algarve는 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Estive no Algarve.", why: "‘알가르브에 있었어’라는 말이에요." } }
    ]
  };
})(window.EP);
