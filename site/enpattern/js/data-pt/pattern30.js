/* 포르투갈어(유럽) 세션 30. Como se diz ~? (형식은 pattern1.js 위쪽 설명과 같다)
   묻는 말이라 subject를 두지 않는다. stem: 같은 묶음의 말(se escreve, se pronuncia, quer dizer)도 핵심 부분으로 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[30] = {
    no: 30, form: "Como se diz ~?", stem: "Como se diz/Como é que se diz/Como se escreve/Como é que se escreve/Como se pronuncia/O que quer dizer",
    meaning: "~를 어떻게 말해요?",
    hint: "Como se diz + 말 + em português?",
    intro: {
      blocks: [["Como", "어떻게"], ["se diz", "(사람들이) 말하다"], ["~", "말"]],
      lines: [
        "Como se diz ~ em português?는 ‘~를 포르투갈어로 어떻게 말해요?’예요.",
        "como 뒤에서는 se가 동사 앞에 와요: como se diz, como se escreve(어떻게 써요), como se pronuncia(어떻게 발음해요).",
        "뜻을 물을 때는 O que quer dizer ~?(~가 무슨 뜻이에요?)예요."
      ],
      examples: [
        { en: "Como se diz isto em português?", ko: "이거 포르투갈어로 어떻게 말해요?" },
        { en: "Como se diz isto em inglês?", ko: "이거 영어로 어떻게 말해요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이거 포르투갈어로 어떻게 말해요?", before: "Como se", after: "isto em português?", answers: ["diz"],
        wrong: { "dice": "dice는 스페인어예요. 포르투갈어는 diz예요.", "fala": "‘어떻게 말해요’는 como se diz예요." },
        tip: { en: "Como é que se diz isto?", why: "é que를 넣으면 말할 때 자연스러워요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 영어로 어떻게 말해요?", before: "Como se diz isso em", after: "?", answers: ["inglês"],
        wrong: { "inglés": "포르투갈어는 inglês예요(ê). inglés는 스페인어 표기예요." },
        tip: { en: "Como é isso em inglês?", why: "짧게 이렇게도 물어요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이게 무슨 뜻이에요?", before: "O que quer", after: "isto?", answers: ["dizer"],
        wrong: { "diz": "quer 뒤에는 동사원형을 써요: quer dizer." },
        tip: { en: "O que significa isto?", why: "significar는 ‘뜻하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이 단어 어떻게 써요?", before: "Como se", after: "esta palavra?", answers: ["escreve"],
        wrong: { "escribe": "escribe는 스페인어예요. 포르투갈어는 escreve예요." },
        tip: { en: "Pode soletrar?", why: "soletrar는 ‘철자를 불러 주다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이거 어떻게 발음해요?", before: "Como se", after: "isto?", answers: ["pronuncia"],
        wrong: { "pronúncia": "pronúncia는 명사 ‘발음’이에요. 동사는 pronuncia예요." },
        tip: { en: "Como se lê isto?", why: "ler는 ‘읽다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이거 스페인어로 어떻게 말해요?", answers: ["Como se diz isto em espanhol?"],
        wrong: { "como se dice isto em espanhol": "dice는 스페인어예요. 포르투갈어는 diz예요." },
        tip: { en: "Como é isto em espanhol?", why: "짧게 이렇게도 물어요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "‘saudade’가 무슨 뜻이에요?", answers: ["O que quer dizer saudade?"], alts: ["O que significa saudade?"],
        wrong: { "o que quer diz saudade": "quer 뒤에는 동사원형을 써요: quer dizer." },
        tip: { en: "O que é a saudade?", why: "‘saudade가 뭐예요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 어떻게 써요?", answers: ["Como se escreve isso?", "Como é que se escreve isso?"],
        wrong: { "como escreve-se isso": "como가 앞에 오면 se를 동사 앞으로 옮겨요: como se escreve." },
        tip: { en: "Pode escrever isso?", why: "‘그거 써 주실래요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이 이름 어떻게 발음해요?", answers: ["Como se pronuncia este nome?"],
        wrong: { "como pronuncia-se este nome": "como가 앞에 오면 se를 동사 앞으로 옮겨요: como se pronuncia." },
        tip: { en: "Como se lê este nome?", why: "ler는 ‘읽다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이거 프랑스어로 어떻게 말해요?", answers: ["Como se diz isto em francês?"],
        ctx: { lead: "português 대신 ‘프랑스어(francês)’를 넣어 보세요.", en: "Como se diz isto em português?" },
        wrong: { "como diz-se isto em francês": "como가 앞에 오면 se를 동사 앞으로 옮겨요: como se diz." },
        tip: { en: "Como é isto em francês?", why: "짧게 이렇게도 물어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어떻게 써요?", answers: ["Como se escreve?", "Como é que se escreve?"],
        dialog: { a: "Isto é um azulejo.", aKo: "이건 아줄레주예요." },
        wrong: { "como escreve-se": "como가 앞에 오면 se를 동사 앞으로 옮겨요: como se escreve." },
        tip: { en: "Pode soletrar?", why: "soletrar는 ‘철자를 불러 주다’예요." } }
    ]
  };
})(window.EP);
