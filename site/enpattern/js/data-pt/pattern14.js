/* 포르투갈어(유럽) 세션 14. Pode ~? (형식은 pattern1.js 위쪽 설명과 같다)
   상대(당신)에게 부탁하는 말이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[14] = {
    no: 14, form: "Pode ~?", stem: "Pode", meaning: "~해 주실래요?",
    hint: "Pode + 동사원형?",
    intro: {
      blocks: [["Pode", "당신은 ~할 수 있다"], ["~", "동사원형"]],
      lines: [
        "Pode는 poder의 ‘당신’ 형태예요. 물음표를 붙이면 ‘~해 주실래요?’라는 부탁이 돼요.",
        "Posso ~?는 ‘제가 ~해도 돼요?’, Pode ~?는 ‘(당신이) ~해 주실래요?’예요.",
        "대명사는 동사 뒤에 붙여요: Pode ajudar-me?"
      ],
      examples: [
        { en: "Pode repetir, por favor?", ko: "다시 한 번 말씀해 주실래요?" },
        { en: "Pode ajudar-me?", ko: "저 좀 도와주실래요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "도와주실래요?", before: "", after: "ajudar-me?", answers: ["Pode"],
        wrong: { "posso": "posso는 ‘제가 ~해도 돼요?’예요. 상대에게 부탁할 때는 pode예요.", "quer": "quer는 ‘원하세요?’예요. 부탁할 때는 pode예요." },
        tip: { en: "Podia ajudar-me?", why: "podia를 쓰면 더 정중해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "제 사진 좀 찍어 주실래요?", before: "Pode tirar-me uma", after: "?", answers: ["fotografia", "foto"],
        wrong: { "fotografias": "uma 뒤에는 하나만: fotografia예요." },
        tip: { en: "Pode tirar-me uma foto?", why: "foto는 fotografia의 줄임말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "창문 닫아 주실래요?", before: "Pode", after: "a janela?", answers: ["fechar"],
        wrong: { "abrir": "abrir는 ‘열다’예요. ‘닫다’는 fechar예요.", "fecha": "pode 뒤에는 동사원형을 써요: fechar." },
        tip: { en: "Importa-se de fechar a janela?", why: "‘창문 닫아 주셔도 괜찮을까요?’라는 정중한 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이것 좀 써 주실래요?", before: "Pode escrever", after: "?", answers: ["isto"],
        wrong: { "esto": "esto는 스페인어예요. 포르투갈어는 isto예요.", "este": "물건 이름 없이 ‘이것’이라고 할 때는 isto예요." },
        tip: { en: "Pode escrever isto aqui?", why: "aqui는 ‘여기에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "계산서 갖다주실래요?", before: "Pode trazer a", after: "?", answers: ["conta"],
        wrong: { "cuenta": "cuenta는 스페인어예요. 포르투갈어는 conta예요." },
        tip: { en: "A conta, se faz favor.", why: "짧게 이렇게 말해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "좀 더 크게 말씀해 주실래요?", answers: ["Pode falar mais alto?"],
        wrong: { "pode fala mais alto": "pode 뒤에는 동사원형을 써요: falar." },
        tip: { en: "Pode falar um pouco mais alto?", why: "um pouco는 ‘조금’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "택시 불러 주실래요?", answers: ["Pode chamar um táxi?"],
        wrong: { "pode chamar uma táxi": "táxi는 남성 명사라 um이에요." },
        tip: { en: "Pode chamar-me um táxi?", why: "-me를 붙이면 ‘저를 위해’가 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "길 좀 알려 주실래요?", answers: ["Pode indicar-me o caminho?", "Pode dizer-me o caminho?"],
        wrong: { "pode indicar-me a caminho": "caminho는 남성 명사라 o caminho예요." },
        tip: { en: "Pode mostrar-me o caminho?", why: "mostrar는 ‘보여 주다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "여기서 세워 주실래요?", answers: ["Pode parar aqui?"],
        wrong: { "pode para aqui": "pode 뒤에는 동사원형을 써요: parar." },
        tip: { en: "Pode deixar-me aqui?", why: "‘여기서 내려 주실래요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "설명해 주실래요?", answers: ["Pode explicar, por favor?", "Pode explicar?"],
        ctx: { lead: "repetir 대신 ‘설명하다(explicar)’를 넣어 보세요.", en: "Pode repetir, por favor?" },
        wrong: { "pode explico por favor": "pode 뒤에는 동사원형을 써요: explicar." },
        tip: { en: "Pode explicar outra vez?", why: "outra vez는 ‘한 번 더’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좀 더 천천히 말씀해 주실래요?", answers: ["Pode falar mais devagar?", "Pode falar mais devagar, por favor?"],
        dialog: { a: "O comboio para Sintra sai às dez e meia.", aKo: "신트라행 기차는 10시 반에 출발해요." },
        wrong: { "pode falar mais lento": "‘천천히’는 devagar예요. lento는 ‘느린’이에요." },
        tip: { en: "Mais devagar, por favor.", why: "짧게 이렇게만 말해도 돼요." } }
    ]
  };
})(window.EP);
