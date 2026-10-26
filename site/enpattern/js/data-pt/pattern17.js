/* 포르투갈어(유럽) 세션 17. Apetece-me ~. (형식은 pattern1.js 위쪽 설명과 같다)
   원하는 것이 주어라 subject(eu)를 두지 않는다.
   stem: não·também·só가 앞에 와서 me가 동사 앞으로 간 모양(me apetece)도 핵심 부분으로 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[17] = {
    no: 17, form: "Apetece-me ~.", stem: "Apetece-me/me apetece/te apetece", meaning: "~이 당겨요 / (지금) ~하고 싶어요",
    hint: "Apetece-me + 명사/동사원형",
    intro: {
      blocks: [["Apetece", "~이 당긴다"], ["-me", "나에게"], ["~", "무엇 / 동사원형"]],
      lines: [
        "Apetece-me는 포르투갈에서 많이 쓰는 ‘(지금) ~이 당겨요, ~하고 싶어요’예요.",
        "원하는 것이 주어라서 apetece 모양은 그대로예요. me는 동사 뒤에 붙여요.",
        "não, também, só가 앞에 오면 me가 동사 앞으로 가요: Não me apetece sair."
      ],
      examples: [
        { en: "Apetece-me um gelado.", ko: "아이스크림이 당겨요." },
        { en: "Não me apetece sair.", ko: "나가기 싫어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "커피가 당겨.", before: "", after: "um café.", answers: ["Apetece-me"],
        wrong: { "me apetece": "포르투갈에서는 me를 동사 뒤에 붙여요: apetece-me.", "apeteço": "apetecer는 원하는 것이 주어라 apetece-me예요." },
        tip: { en: "Quero um café.", why: "quero로 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 바다에 가고 싶어.", before: "Apetece-me", after: "à praia.", answers: ["ir"],
        wrong: { "vou": "apetece-me 뒤에는 동사원형을 써요: ir." },
        tip: { en: "Quero ir à praia.", why: "quero로 말해도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오늘은 요리하기 싫어.", before: "Hoje não me", after: "cozinhar.", answers: ["apetece"],
        wrong: { "apetece-me": "não가 앞에 오면 me가 동사 앞으로 와요: não me apetece." },
        tip: { en: "Hoje não tenho vontade de cozinhar.", why: "ter vontade de는 ‘~할 마음이 있다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뭐 먹고 싶어?", before: "O que te", after: "comer?", answers: ["apetece"],
        wrong: { "apeteces": "원하는 것이 주어라 apetece 그대로예요." },
        tip: { en: "O que queres comer?", why: "queres는 친구에게 쓰는 ‘원해?’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 산책하고 싶어.", before: "Apetece-me dar um", after: ".", answers: ["passeio"],
        wrong: { "paseo": "paseo는 스페인어예요. 포르투갈어는 passeio예요." },
        tip: { en: "Apetece-me passear.", why: "passear는 ‘산책하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "피자가 당겨.", answers: ["Apetece-me uma piza.", "Apetece-me uma pizza.", "Apetece-me piza.", "Apetece-me pizza."],
        wrong: { "apetece-me um pizza": "piza는 여성 명사라 uma예요." },
        tip: { en: "Estou com vontade de comer piza.", why: "estar com vontade de는 ‘~하고 싶은 기분이다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 자고 싶어.", answers: ["Apetece-me dormir."],
        wrong: { "apetece-me durmo": "apetece-me 뒤에는 동사원형을 써요: dormir." },
        tip: { en: "Só me apetece dormir.", why: "só를 넣으면 ‘자고 싶은 마음뿐이에요’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 일하기 싫어.", answers: ["Não me apetece trabalhar."],
        wrong: { "não apetece-me trabalhar": "não가 앞에 오면 me를 동사 앞으로 옮겨요: não me apetece." },
        tip: { en: "Não tenho vontade de trabalhar.", why: "ter vontade de는 ‘~할 마음이 있다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "시원한 맥주가 당겨.", answers: ["Apetece-me uma cerveja fresca."],
        wrong: { "apetece-me um cerveja fresca": "cerveja는 여성 명사라 uma예요." },
        tip: { en: "Apetece-me uma imperial.", why: "imperial은 리스본에서 생맥주 한 잔이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "수프가 당겨.", answers: ["Apetece-me uma sopa.", "Apetece-me sopa."],
        ctx: { lead: "gelado 대신 ‘수프(sopa)’를 넣어 보세요.", en: "Apetece-me um gelado." },
        wrong: { "apetece-me um sopa": "sopa는 여성 명사라 uma예요." },
        tip: { en: "Apetece-me uma sopinha.", why: "-inha를 붙이면 따뜻하고 정겨운 느낌이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나도 가고 싶어.", answers: ["Sim, também me apetece.", "Sim, apetece-me."],
        dialog: { a: "Vamos ao cinema?", aKo: "영화 보러 갈래?" },
        wrong: { "sim também apetece-me": "também이 앞에 오면 me를 동사 앞으로 옮겨요: também me apetece." },
        tip: { en: "Sim, apetece-me muito.", why: "muito는 ‘아주’예요." } }
    ]
  };
})(window.EP);
