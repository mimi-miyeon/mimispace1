/* 포르투갈어(유럽) 세션 57. Importa-se de ~? (형식은 pattern1.js 위쪽 설명과 같다)
   상대에게 부탁하는 말이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[57] = {
    no: 57, form: "Importa-se de ~?", stem: "Importa-se de/Importas-te de/me importo", meaning: "~해 주시겠어요? (아주 정중하게)",
    hint: "Importa-se de + 동사원형?",
    intro: {
      blocks: [["Importa-se", "(당신은) 괜찮으세요?"], ["de", "~하는 것이"], ["~", "동사원형"]],
      lines: [
        "Importa-se de + 동사원형?은 ‘~해 주시겠어요?(~해도 괜찮으시겠어요?)’라는 아주 정중한 부탁이에요.",
        "친구에게는 Importas-te de ~?예요.",
        "대답 ‘전혀 괜찮아요’는 Não, não me importo.예요."
      ],
      examples: [
        { en: "Importa-se de repetir?", ko: "다시 말씀해 주시겠어요?" },
        { en: "Importa-se de fechar a porta?", ko: "문 좀 닫아 주시겠어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "자리 좀 바꿔 주시겠어요?", before: "", after: "de trocar de lugar?", answers: ["Importa-se"],
        wrong: { "se importa": "포르투갈에서는 se를 동사 뒤에 붙여요: importa-se.", "importa": "importar-se는 se가 꼭 필요해요: importa-se." },
        tip: { en: "Podemos trocar de lugar?", why: "‘자리 바꿀 수 있을까요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "잠깐 기다려 주시겠어요?", before: "Importa-se de", after: "um momento?", answers: ["esperar"],
        wrong: { "espera": "de 뒤에는 동사원형을 써요: esperar." },
        tip: { en: "Um momento, por favor.", why: "‘잠시만요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "음악 소리 좀 줄여 줄래?", before: "", after: "de baixar a música?", answers: ["Importas-te"],
        wrong: { "importa-se": "친구에게는 importas-te예요. importa-se는 존댓말이에요." },
        tip: { en: "Podes baixar a música?", why: "‘음악 좀 줄여 줄래?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "전혀 괜찮아요.", before: "Não, não me", after: ".", answers: ["importo"],
        wrong: { "importa": "‘나는’이면 importo예요." },
        tip: { en: "Claro, com todo o gosto.", why: "‘물론이죠, 기꺼이요’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "사진 좀 찍어 주시겠어요?", before: "Importa-se de nos tirar uma", after: "?", answers: ["fotografia", "foto"],
        wrong: { "fotografias": "uma 뒤에는 하나만: fotografia예요." },
        tip: { en: "Pode tirar-nos uma foto?", why: "pode는 ‘~해 주실래요’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "천천히 말씀해 주시겠어요?", answers: ["Importa-se de falar mais devagar?"],
        wrong: { "se importa de falar mais devagar": "포르투갈에서는 se를 동사 뒤에 붙여요: importa-se." },
        tip: { en: "Pode falar mais devagar?", why: "‘천천히 말씀해 주실래요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "창문 좀 열어 주시겠어요?", answers: ["Importa-se de abrir a janela?"],
        wrong: { "importa-se de abre a janela": "de 뒤에는 동사원형을 써요: abrir." },
        tip: { en: "Podia abrir a janela?", why: "podia는 정중한 ‘~해 주실 수 있을까요’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "여기 써 주시겠어요?", answers: ["Importa-se de escrever aqui?"],
        wrong: { "importa-se escrever aqui": "importar-se 뒤에는 de가 필요해요." },
        tip: { en: "Pode escrever aqui?", why: "pode는 ‘~해 주실래요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가방 좀 봐 줄래?", answers: ["Importas-te de tomar conta da mala?", "Importas-te de ficar de olho na mala?"],
        wrong: { "te importas de tomar conta da mala": "포르투갈에서는 te를 동사 뒤에 붙여요: importas-te." },
        tip: { en: "Podes ficar com a minha mala um bocadinho?", why: "um bocadinho는 ‘잠깐’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "불 좀 꺼 주시겠어요?", answers: ["Importa-se de apagar a luz?"],
        ctx: { lead: "fechar a porta 대신 ‘불을 끄다(apagar a luz)’를 넣어 보세요.", en: "Importa-se de fechar a porta?" },
        wrong: { "importa-se de apaga a luz": "de 뒤에는 동사원형을 써요: apagar." },
        tip: { en: "Pode apagar a luz?", why: "pode는 ‘~해 주실래요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니요, 전혀 괜찮아요.", answers: ["Não, não me importo nada.", "Não me importo."],
        dialog: { a: "Importa-se de esperar aqui?", aKo: "여기서 기다려 주시겠어요?" },
        wrong: { "não não importo nada": "importar-se는 me가 꼭 필요해요: não me importo." },
        tip: { en: "Claro, sem problema.", why: "‘물론이죠, 문제없어요’라는 말이에요." } }
    ]
  };
})(window.EP);
