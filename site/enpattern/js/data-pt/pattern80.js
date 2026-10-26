/* 포르투갈어(유럽) 세션 80. Antes de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[80] = {
    no: 80, form: "Antes de ~.", stem: "Antes de/antes de/antes do/antes da/antes", meaning: "~하기 전에",
    hint: "Antes de + 동사원형",
    intro: {
      blocks: [["Antes de", "~하기 전에"], ["~", "동사원형 / 명사"]],
      lines: [
        "Antes de + 동사원형은 ‘~하기 전에’예요: Antes de sair, liga-me.",
        "명사도 와요: antes do jantar(저녁 전에). de + o = do, de + a = da.",
        "‘전에(이전에)’ 하나만은 antes예요: Nunca estive cá antes."
      ],
      examples: [
        { en: "Antes de sair, liga-me.", ko: "나가기 전에 전화해." },
        { en: "Lavo as mãos antes de comer.", ko: "먹기 전에 손을 씻어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "자기 전에 책 읽어.", before: "Leio", after: "de dormir.", answers: ["antes"],
        wrong: { "depois": "depois de는 ‘~한 뒤에’예요. ‘~하기 전에’는 antes de예요." },
        tip: { en: "Leio sempre na cama.", why: "‘항상 침대에서 읽어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "저녁 먹기 전에 장 봐야 해.", before: "Tenho de fazer compras antes", after: "jantar.", answers: ["do"],
        wrong: { "da": "jantar는 남성 명사라 do예요.", "de": "jantar 앞에 관사 o가 붙어서 de + o = do예요." },
        tip: { en: "Tenho de ir às compras primeiro.", why: "primeiro는 ‘먼저’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "들어오기 전에 노크해 줘.", before: "Bate à porta antes de", after: ".", answers: ["entrar"],
        wrong: { "entras": "de 뒤에는 동사원형을 써요: entrar." },
        tip: { en: "Bate antes de entrar.", why: "짧게 이렇게도 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 여기 전에 와 본 적 없어.", before: "Nunca estive cá", after: ".", answers: ["antes"],
        wrong: { "antes de": "뒤에 아무것도 없으면 de 없이 antes예요." },
        tip: { en: "É a primeira vez que cá venho.", why: "‘여기 처음 와 봐’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "떠나기 전에 다 확인해.", before: "Antes de", after: "verifica tudo.", answers: ["sair", "partir"],
        wrong: { "sales": "sales는 스페인어예요. de 뒤에는 동사원형을 써요: sair." },
        tip: { en: "Verifica tudo antes de sair.", why: "순서를 바꿔 말해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "자기 전에 이 닦아.", answers: ["Lava os dentes antes de dormir.", "Antes de dormir, lava os dentes."],
        wrong: { "lava os dentes antes de durmas": "de 뒤에는 동사원형을 써요: dormir." },
        tip: { en: "Não te esqueças de lavar os dentes.", why: "‘이 닦는 거 잊지 마’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "말하기 전에 생각해.", answers: ["Pensa antes de falar.", "Antes de falar, pensa."],
        wrong: { "pensa antes de hablar": "hablar는 스페인어예요. 포르투갈어는 falar예요." },
        tip: { en: "Pensa bem no que dizes.", why: "‘하는 말을 잘 생각해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "회의 전에 커피 마시자.", answers: ["Vamos tomar um café antes da reunião.", "Antes da reunião, vamos tomar um café."],
        wrong: { "vamos tomar um café antes do reunião": "reunião는 여성 명사라 da예요." },
        tip: { en: "Antes da reunião, um café?", why: "짧게 이렇게도 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "결정하기 전에 얘기하자.", answers: ["Antes de decidir, vamos falar.", "Vamos falar antes de decidir."],
        wrong: { "antes de decidimos vamos falar": "de 뒤에는 동사원형을 써요: decidir." },
        tip: { en: "Falamos primeiro e depois decidimos.", why: "primeiro는 ‘먼저’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "도착하기 전에 전화해.", answers: ["Antes de chegar, liga-me.", "Liga-me antes de chegar."],
        ctx: { lead: "sair 대신 ‘도착하다(chegar)’를 넣어 보세요.", en: "Antes de sair, liga-me." },
        wrong: { "antes de chegar me liga": "포르투갈에서는 me를 동사 뒤에 붙여요: liga-me." },
        tip: { en: "Avisa-me antes de chegar.", why: "avisar는 ‘미리 알리다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "저녁 먹기 전에 갈게.", answers: ["Vou antes do jantar.", "Antes do jantar.", "Vou antes de jantar."],
        dialog: { a: "Quando é que vens?", aKo: "언제 와?" },
        wrong: { "vou antes da jantar": "jantar는 남성 명사라 do예요." },
        tip: { en: "Chego antes do jantar.", why: "chegar는 ‘도착하다’예요." } }
    ]
  };
})(window.EP);
