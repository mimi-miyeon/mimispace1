/* 포르투갈어(유럽) 세션 65. Tenho medo de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[65] = {
    no: 65, form: "Tenho medo de ~.", stem: "Tenho medo de/Tenho medo do/Tenho medo das/Tenho medo/medo de", subject: "eu", meaning: "~이 무서워요",
    hint: "Tenho medo de + 명사/동사원형",
    intro: {
      blocks: [["Tenho medo", "나는 무섭다"], ["de", "~이"], ["~", "명사 / 동사원형"]],
      lines: [
        "Tenho medo de + 명사·동사원형은 ‘~이 무서워요, ~할까 봐 겁나요’예요: Tenho medo de cães.",
        "de 뒤에 관사가 오면 줄여요: Tenho medo do escuro.(어둠이 무서워요)",
        "지금 무서운 건 Estou com medo도 써요."
      ],
      examples: [
        { en: "Tenho medo de cães.", ko: "개가 무서워요." },
        { en: "Tenho medo de voar.", ko: "비행기 타는 게 무서워요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 거미 무서워.", before: "Tenho medo de", after: ".", answers: ["aranhas"],
        wrong: { "arañas": "arañas는 스페인어예요. 포르투갈어는 aranhas예요." },
        tip: { en: "Odeio aranhas.", why: "odiar는 ‘아주 싫어하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 어둠이 무서워.", before: "Tenho medo", after: "escuro.", answers: ["do"],
        wrong: { "de": "escuro 앞에 관사 o가 붙어서 de + o = do예요." },
        tip: { en: "Não gosto do escuro.", why: "‘어둠이 싫어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 뭐가 무서워?", before: "", after: "medo de quê?", answers: ["Tens"],
        wrong: { "tenho": "‘너는’이면 tens예요. tenho는 ‘나는’이에요." },
        tip: { en: "O que é que te assusta?", why: "assustar는 ‘겁주다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 실수할까 봐 무서워.", before: "Tenho medo de", after: "erros.", answers: ["fazer", "cometer"],
        wrong: { "faço": "de 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Não quero errar.", why: "errar는 ‘틀리다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 높은 데가 무서워.", before: "Tenho medo das", after: ".", answers: ["alturas"],
        wrong: { "altura": "das 뒤에는 여럿 alturas예요." },
        tip: { en: "Tenho vertigens.", why: "vertigens는 ‘현기증’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 바다가 무서워.", answers: ["Tenho medo do mar."],
        wrong: { "tenho medo da mar": "mar는 남성 명사라 do예요." },
        tip: { en: "Não gosto muito do mar.", why: "‘바다 별로 안 좋아해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 혼자 있는 게 무서워.", answers: ["Tenho medo de ficar sozinho.", "Tenho medo de ficar sozinha."],
        wrong: { "tenho medo de fico sozinho": "de 뒤에는 동사원형을 써요: ficar." },
        tip: { en: "Não gosto de estar sozinho.", why: "‘혼자 있는 거 싫어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 아무것도 안 무서워.", answers: ["Não tenho medo de nada."],
        wrong: { "tenho medo de nada": "‘아무것도 안’은 não ... nada예요." },
        tip: { en: "Não tenho medo.", why: "‘안 무서워’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 늦을까 봐 걱정돼.", answers: ["Tenho medo de chegar atrasado.", "Tenho medo de chegar atrasada.", "Tenho medo de chegar tarde."],
        wrong: { "tenho medo de chego atrasado": "de 뒤에는 동사원형을 써요: chegar." },
        tip: { en: "Estou preocupado com a hora.", why: "‘시간이 걱정돼’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 고양이 무서워.", answers: ["Tenho medo de gatos."],
        ctx: { lead: "cães 대신 ‘고양이(gatos)’를 넣어 보세요.", en: "Tenho medo de cães." },
        wrong: { "tenho miedo de gatos": "miedo는 스페인어예요. 포르투갈어는 medo예요." },
        tip: { en: "Os gatos assustam-me.", why: "assustar-me는 ‘나를 겁나게 하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 무서워.", answers: ["Não, tenho medo."], alts: ["Não, tenho muito medo."],
        dialog: { a: "Queres ir à montanha-russa?", aKo: "롤러코스터 탈래?" },
        wrong: { "não tengo miedo": "스페인어예요. 포르투갈어는 tenho medo예요." },
        tip: { en: "Nem pensar!", why: "‘절대 안 돼!’라는 말이에요." } }
    ]
  };
})(window.EP);
