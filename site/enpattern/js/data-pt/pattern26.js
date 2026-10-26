/* 포르투갈어(유럽) 세션 26. Nunca ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[26] = {
    no: 26, form: "Nunca ~.", stem: "Nunca", subject: "eu", meaning: "한 번도 ~ 안 했어요 / 절대 안 ~해요",
    hint: "Nunca + 동사",
    intro: {
      blocks: [["Nunca", "한 번도, 절대 ~ 않다"], ["~", "동사"]],
      lines: [
        "Nunca는 ‘한 번도 ~ 않다, 절대 ~ 않다’예요. 동사 앞에 쓰고 não는 쓰지 않아요: Nunca fui.",
        "과거형이면 ‘한 번도 ~해 본 적 없어요’, 현재형이면 ‘절대 ~ 안 해요’예요.",
        "동사 뒤에 쓰면 não가 필요해요: Não fui nunca. (앞에 쓰는 게 더 흔해요)"
      ],
      examples: [
        { en: "Nunca fui ao Brasil.", ko: "브라질에 한 번도 안 가 봤어요." },
        { en: "Nunca bebo café à noite.", ko: "밤에는 절대 커피 안 마셔요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 파두 한 번도 안 들어 봤어.", before: "", after: "ouvi fado.", answers: ["Nunca"],
        wrong: { "não nunca": "nunca가 동사 앞에 오면 não를 쓰지 않아요.", "jamais": "jamais도 있지만 말할 때는 보통 nunca예요." },
        tip: { en: "Nunca ouvi fado ao vivo.", why: "ao vivo는 ‘라이브로’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 절대 안 늦어.", before: "Nunca", after: "atrasado.", answers: ["chego"],
        wrong: { "chegar": "nunca 뒤에는 활용한 동사를 써요: chego." },
        tip: { en: "Sou sempre pontual.", why: "pontual은 ‘시간을 잘 지키는’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 비행기 한 번도 안 타 봤어.", before: "Nunca", after: "de avião.", answers: ["andei", "viajei"],
        wrong: { "andar": "nunca 뒤에는 활용한 동사를 써요: andei." },
        tip: { en: "Nunca viajei de avião.", why: "viajar는 ‘여행하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 사람 절대 거짓말 안 해.", before: "Ele nunca", after: "mentiras.", answers: ["diz"],
        wrong: { "digo": "‘그는’이면 diz예요. digo는 ‘나는’이에요." },
        tip: { en: "Ele é muito honesto.", why: "honesto는 ‘정직한’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 절대 포기 안 해.", before: "Nunca", after: ".", answers: ["desisto"],
        wrong: { "desistir": "nunca 뒤에는 활용한 동사를 써요: desisto." },
        tip: { en: "Não desisto.", why: "‘포기 안 해’라는 짧은 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 스키 한 번도 안 타 봤어.", answers: ["Nunca fiz esqui."],
        wrong: { "não nunca fiz esqui": "nunca가 동사 앞에 오면 não를 쓰지 않아요." },
        tip: { en: "Nunca experimentei esquiar.", why: "experimentar는 ‘해 보다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 아침은 절대 안 걸러.", answers: ["Nunca salto o pequeno-almoço."],
        wrong: { "não nunca salto o pequeno-almoço": "nunca가 동사 앞에 오면 não를 쓰지 않아요." },
        tip: { en: "Tomo sempre o pequeno-almoço.", why: "sempre는 ‘항상’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그런 거 한 번도 본 적 없어.", answers: ["Nunca vi nada assim."],
        wrong: { "não nunca vi nada assim": "nunca가 동사 앞에 오면 não를 쓰지 않아요." },
        tip: { en: "Nunca vi uma coisa destas.", why: "uma coisa destas는 ‘이런 것’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 포르투갈 음식 먹어 본 적 없어.", answers: ["Nunca comi comida portuguesa."],
        wrong: { "nunca como comida portuguesa": "‘먹어 본 적 없다’는 과거형 comi예요. como는 ‘(평소에) 안 먹어요’예요." },
        tip: { en: "Nunca provei comida portuguesa.", why: "provar는 ‘맛보다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 일본에 한 번도 안 가 봤어.", answers: ["Nunca fui ao Japão."], alts: ["Nunca estive no Japão."],
        ctx: { lead: "Brasil 대신 ‘일본(Japão)’을 넣어 보세요.", en: "Nunca fui ao Brasil." },
        wrong: { "nunca fui a japão": "Japão은 관사 o가 붙어서 a + o = ao예요." },
        tip: { en: "Ainda não conheço o Japão.", why: "conhecer는 ‘(가 봐서) 알다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 한 번도 안 먹어 봤어.", answers: ["Não, nunca comi.", "Nunca comi."],
        dialog: { a: "Já comeste caracóis?", aKo: "달팽이 먹어 봤어?" },
        wrong: { "não nunca como": "‘먹어 본 적 없다’는 과거형 comi예요." },
        tip: { en: "Não, nunca provei.", why: "provar는 ‘맛보다’예요." } }
    ]
  };
})(window.EP);
