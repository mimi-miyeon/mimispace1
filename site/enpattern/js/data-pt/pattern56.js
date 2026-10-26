/* 포르투갈어(유럽) 세션 56. Sinto-me ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[56] = {
    no: 56, form: "Sinto-me ~.", stem: "Sinto-me/me sinto/te sentes", subject: "eu", meaning: "기분이 ~해요",
    hint: "Sinto-me + 형용사",
    intro: {
      blocks: [["Sinto", "나는 느낀다"], ["-me", "나 자신을"], ["~", "형용사"]],
      lines: [
        "sentir-se + 형용사는 ‘~한 기분이에요, 몸이 ~해요’예요: Sinto-me bem.",
        "me는 동사 뒤에 붙여요. não·já가 앞에 오면 앞으로 가요: Não me sinto bem.",
        "친구에게는 Como te sentes?(기분 어때?)라고 물어요."
      ],
      examples: [
        { en: "Sinto-me bem.", ko: "기분이 좋아요." },
        { en: "Não me sinto bem.", ko: "몸이 안 좋아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "피곤해요.", before: "", after: "cansado.", answers: ["Sinto-me"],
        wrong: { "me sinto": "포르투갈에서는 me를 동사 뒤에 붙여요: sinto-me.", "me siento": "me siento는 스페인어예요." },
        tip: { en: "Estou cansado.", why: "estou로 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "몸이 안 좋아.", before: "Não me", after: "bem.", answers: ["sinto"],
        wrong: { "sinto-me": "não가 앞에 오면 me가 동사 앞으로 와요: não me sinto." },
        tip: { en: "Estou mal disposto.", why: "mal disposto는 ‘몸이 안 좋은’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "기분 어때?", before: "Como te", after: "?", answers: ["sentes"],
        wrong: { "sinto": "친구에게 묻는 거라 sentes예요. sinto는 ‘나는’이에요." },
        tip: { en: "Estás melhor?", why: "‘좀 나아졌어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "외로워요.", before: "Sinto-me", after: ".", answers: ["sozinho", "sozinha", "só"],
        wrong: { "solo": "solo는 스페인어예요. 포르투갈어는 sozinho예요." },
        tip: { en: "Sinto-me um pouco só.", why: "só도 ‘외로운’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "훨씬 나아졌어요.", before: "Sinto-me muito", after: ".", answers: ["melhor"],
        wrong: { "mejor": "mejor는 스페인어예요. 포르투갈어는 melhor예요.", "mais bem": "‘더 나은’은 melhor예요." },
        tip: { en: "Já estou melhor.", why: "‘이제 나아졌어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 행복해.", answers: ["Sinto-me feliz."],
        wrong: { "me sinto feliz": "포르투갈에서는 me를 동사 뒤에 붙여요: sinto-me." },
        tip: { en: "Estou muito feliz.", why: "estou로 말해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 좀 어지러워.", answers: ["Sinto-me um pouco tonto.", "Sinto-me um pouco tonta."],
        wrong: { "sinto-me um poco tonto": "poco는 스페인어예요. 포르투갈어는 pouco예요." },
        tip: { en: "Estou com tonturas.", why: "tonturas는 ‘어지럼증’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 기운이 없어.", answers: ["Hoje sinto-me sem energia.", "Hoje sinto-me sem forças."],
        wrong: { "hoje sinto-me sin energia": "sin은 스페인어예요. 포르투갈어는 sem이에요." },
        tip: { en: "Hoje estou sem energia.", why: "estou로 말해도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "기분이 나아졌어요.", answers: ["Sinto-me melhor.", "Já me sinto melhor."],
        wrong: { "sinto-me mais bem": "‘더 나은’은 melhor예요." },
        tip: { en: "Estou melhor, obrigado.", why: "estou로 말해도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "긴장돼요.", answers: ["Sinto-me nervoso.", "Sinto-me nervosa."],
        ctx: { lead: "bem 대신 ‘긴장한(nervoso)’을 넣어 보세요.", en: "Sinto-me bem." },
        wrong: { "me siento nervioso": "스페인어예요. 포르투갈어는 sinto-me nervoso예요." },
        tip: { en: "Estou nervoso.", why: "estou로 말해도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "훨씬 좋아, 고마워.", answers: ["Sinto-me muito melhor, obrigado.", "Sinto-me muito melhor, obrigada."],
        alts: ["Muito melhor, obrigado.", "Muito melhor, obrigada."],
        dialog: { a: "Como te sentes hoje?", aKo: "오늘 기분 어때?" },
        wrong: { "me sinto muito melhor obrigado": "포르투갈에서는 me를 동사 뒤에 붙여요: sinto-me." },
        tip: { en: "Estou muito melhor, obrigado.", why: "estou로 말해도 돼요." } }
    ]
  };
})(window.EP);
