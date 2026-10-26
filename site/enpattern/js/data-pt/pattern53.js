/* 포르투갈어(유럽) 세션 53. Fico ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[53] = {
    no: 53, form: "Fico ~.", stem: "Fico/Fiquei/Ficaste/ficar", subject: "eu", meaning: "~해져요 / ~한 기분이 돼요",
    hint: "Fico + 형용사",
    intro: {
      blocks: [["Fico", "나는 ~해진다"], ["~", "형용사 / 장소"]],
      lines: [
        "ficar + 형용사는 ‘~해지다, ~한 기분이 되다’예요: Fico nervoso.(긴장돼요)",
        "좋은 소식에는 Fico contente!(기뻐요!) 지난 일은 Fiquei ~예요: Fiquei surpreendido.",
        "ficar + 장소는 ‘머물다’예요: Fico em casa.(집에 있을게요)"
      ],
      examples: [
        { en: "Fico contente!", ko: "기뻐요!" },
        { en: "Fiquei muito surpreendido.", ko: "정말 놀랐어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 시험 전엔 긴장돼.", before: "", after: "nervoso antes dos exames.", answers: ["Fico"],
        wrong: { "sou": "‘~해지다’는 fico예요. sou는 늘 그런 성격이에요.", "estoy": "estoy는 스페인어예요." },
        tip: { en: "Os exames põem-me nervoso.", why: "pôr nervoso는 ‘긴장하게 만들다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그 소식 듣고 기뻤어.", before: "", after: "contente com a notícia.", answers: ["Fiquei"],
        wrong: { "fico": "지난 일은 fiquei예요." },
        tip: { en: "Gostei muito da notícia.", why: "‘그 소식 정말 좋았어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "오늘은 집에 있을게.", before: "Hoje", after: "em casa.", answers: ["fico"],
        wrong: { "quedo": "quedo는 스페인어예요. 포르투갈어는 fico예요." },
        tip: { en: "Hoje não saio.", why: "‘오늘은 안 나가’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 화났어?", before: "", after: "chateado?", answers: ["Ficaste"],
        wrong: { "fiquei": "‘너는’이면 ficaste예요. fiquei는 ‘나는’이에요." },
        tip: { en: "Estás chateado comigo?", why: "‘나한테 화났어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그거 보면 슬퍼져.", before: "Fico", after: "quando vejo isso.", answers: ["triste"],
        wrong: { "tristeza": "명사 tristeza가 아니라 형용사 triste를 써요." },
        tip: { en: "Fico em baixo quando vejo isso.", why: "ficar em baixo는 ‘기분이 가라앉다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그 말 들으니 기뻐요.", answers: ["Fico contente por ouvir isso.", "Fico feliz por ouvir isso.", "Fico contente de ouvir isso."],
        wrong: { "fico contente por ouço isso": "por 뒤에는 동사원형을 써요: ouvir." },
        tip: { en: "Que bom ouvir isso!", why: "‘그 말 들으니 좋다!’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 정말 실망했어.", answers: ["Fiquei muito desiludido.", "Fiquei muito desiludida."],
        wrong: { "fico muito desiludido": "지난 일은 fiquei예요." },
        tip: { en: "Foi uma grande desilusão.", why: "desilusão는 ‘실망’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 거기 일주일 있을 거야.", answers: ["Vou ficar lá uma semana."],
        wrong: { "vou quedar lá uma semana": "quedar는 스페인어예요. 포르투갈어는 ficar예요." },
        tip: { en: "Fico lá uma semana.", why: "현재형으로도 가까운 미래를 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 괜찮아질 거야.", answers: ["Vou ficar bem."], alts: ["Vou estar bem."],
        wrong: { "vou fico bem": "vou 뒤에는 동사원형을 써요: ficar." },
        tip: { en: "Isto passa.", why: "‘이건 지나갈 거야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "슬퍼져요.", answers: ["Fico triste."],
        ctx: { lead: "contente 대신 ‘슬픈(triste)’을 넣어 보세요.", en: "Fico contente!" },
        wrong: { "fico tristeza": "명사 tristeza가 아니라 형용사 triste를 써요." },
        tip: { en: "Isso deixa-me triste.", why: "deixar triste는 ‘슬프게 하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와, 정말 기뻐!", answers: ["Que bom! Fico muito contente!", "Fico muito contente!", "Fico muito feliz!"],
        dialog: { a: "Passei no exame!", aKo: "나 시험 붙었어!" },
        wrong: { "que bom estoy muy contento": "스페인어예요. 포르투갈어는 fico muito contente예요." },
        tip: { en: "Parabéns! Que alegria!", why: "parabéns는 ‘축하해’예요." } }
    ]
  };
})(window.EP);
