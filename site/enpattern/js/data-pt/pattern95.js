/* 포르투갈어(유럽) 세션 95. Esqueci-me de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[95] = {
    no: 95, form: "Esqueci-me de ~.", stem: "Esqueci-me/me esqueci/te esqueças/te esqueceste", subject: "eu", meaning: "~을 깜빡했어요",
    hint: "Esqueci-me de + 명사/동사원형",
    intro: {
      blocks: [["Esqueci", "나는 잊었다"], ["-me", "나 자신이"], ["de", "~을"], ["~", "명사 / 동사원형"]],
      lines: [
        "Esqueci-me de ~는 ‘~을 깜빡했어요, 잊었어요’예요: Esqueci-me das chaves.",
        "포르투갈에서는 esquecer-se de로 말하고, me는 동사 뒤에 붙여요.",
        "‘잊지 마’는 Não te esqueças de ~예요 (não가 앞이라 te가 앞으로)."
      ],
      examples: [
        { en: "Esqueci-me das chaves.", ko: "열쇠를 깜빡했어요." },
        { en: "Esqueci-me de ligar.", ko: "전화하는 걸 깜빡했어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "우산 깜빡했어.", before: "", after: "do guarda-chuva.", answers: ["Esqueci-me"],
        wrong: { "me esqueci": "포르투갈에서는 me를 동사 뒤에 붙여요: esqueci-me.", "olvidé": "olvidé는 스페인어예요." },
        tip: { en: "Deixei o guarda-chuva em casa.", why: "‘우산 집에 두고 왔어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네 생일 깜빡했어.", before: "Esqueci-me", after: "teu aniversário.", answers: ["do"],
        wrong: { "de": "aniversário 앞에 관사 o가 붙어서 de + o = do예요." },
        tip: { en: "Desculpa, não me lembrei.", why: "lembrar-se는 ‘기억하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "약 먹는 거 잊지 마.", before: "Não te", after: "de tomar o remédio.", answers: ["esqueças"],
        wrong: { "esqueces": "‘~하지 마’는 não te esqueças예요." },
        tip: { en: "Lembra-te de tomar o remédio.", why: "lembra-te는 ‘기억해’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 사람 이름 깜빡했어.", before: "Esqueci-me do", after: "dele.", answers: ["nome"],
        wrong: { "nombre": "nombre는 스페인어예요. 포르투갈어는 nome예요." },
        tip: { en: "Não me lembro do nome dele.", why: "‘그 사람 이름 기억 안 나’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "아무것도 안 잊었어?", before: "Não te esqueceste de", after: "?", answers: ["nada"],
        wrong: { "algo": "não가 있는 문장에서는 nada예요." },
        tip: { en: "Tens tudo?", why: "‘다 챙겼어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "지갑을 깜빡했어.", answers: ["Esqueci-me da carteira."],
        wrong: { "me esqueci da carteira": "포르투갈에서는 me를 동사 뒤에 붙여요: esqueci-me." },
        tip: { en: "Deixei a carteira em casa.", why: "‘지갑 집에 두고 왔어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "문 잠그는 걸 깜빡했어.", answers: ["Esqueci-me de fechar a porta à chave.", "Esqueci-me de trancar a porta."],
        wrong: { "esqueci-me de fecho a porta à chave": "de 뒤에는 동사원형을 써요: fechar." },
        tip: { en: "Deixei a porta aberta.", why: "‘문 열어 두고 왔어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "잊지 마!", answers: ["Não te esqueças!"],
        wrong: { "não esqueças-te": "não가 앞에 오면 te를 동사 앞으로 옮겨요: não te esqueças." },
        tip: { en: "Lembra-te!", why: "‘기억해!’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 완전히 깜빡했어.", answers: ["Esqueci-me completamente."],
        wrong: { "me esqueci completamente": "포르투갈에서는 me를 동사 뒤에 붙여요: esqueci-me." },
        tip: { en: "Passou-me completamente.", why: "passar-me는 ‘깜빡 지나가다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "여권을 깜빡했어요.", answers: ["Esqueci-me do passaporte."],
        ctx: { lead: "chaves 대신 ‘여권(passaporte)’을 넣어 보세요.", en: "Esqueci-me das chaves." },
        wrong: { "esqueci-me da passaporte": "passaporte는 남성 명사라 do예요." },
        tip: { en: "Não trouxe o passaporte.", why: "‘여권 안 가져왔어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아, 깜빡했어!", answers: ["Ai, esqueci-me!", "Esqueci-me!"],
        dialog: { a: "Trouxeste o bolo?", aKo: "케이크 가져왔어?" },
        wrong: { "ai me esqueci": "포르투갈에서는 me를 동사 뒤에 붙여요: esqueci-me." },
        tip: { en: "Ai, passou-me!", why: "passar-me는 ‘깜빡 지나가다’예요." } }
    ]
  };
})(window.EP);
