/* 세션 57. I don't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[57] = {
    no: 57, form: "I don't ~.", stem: "I don't", meaning: "나는 ~하지 않아요.",
    hint: "I don't + 동사",
    intro: {
      blocks: [["I", "나는"], ["don't", "~하지 않는다"], ["~", "동사"]],
      lines: [
        "I don't + 동사는 ‘나 ~ 안 해’예요. 평소 습관이나 사실을 부정해요.",
        "don't 뒤에는 동사 원래 모양을 써요.",
        "I'm not like가 아니라 I don't like예요. 동사를 부정할 때는 don't를 써요."
      ],
      examples: [
        { en: "I don't drink coffee.", ko: "나 커피 안 마셔." },
        { en: "I don't smoke.", ko: "나 담배 안 피워." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 술 안 마셔.", before: "I", after: "drink.", answers: ["don't"],
        wrong: { "am not": "동사를 부정할 때는 am not이 아니라 don't를 써요.", "not": "동사 앞에는 not만 쓰지 않고 don't를 써요.", "does not": "doesn't는 he, she가 주어일 때 써요. I 뒤에는 don't예요." },
        tip: { en: "I'm not a drinker.", why: "‘나 술 마시는 사람 아니야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 그거 이해 안 돼.", before: "I don't", after: "it.", answers: ["understand"],
        wrong: { "understands": "don't 뒤에는 동사 원래 모양 understand를 써요." },
        tip: { en: "It doesn't make sense to me.", why: "make sense는 ‘이해가 되다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 고기 안 먹어.", before: "I", after: "eat meat.", answers: ["don't"],
        wrong: { "am not": "동사를 부정할 때는 am not이 아니라 don't를 써요.", "no": "‘안 먹어’는 no가 아니라 don't를 써요." },
        tip: { en: "I'm a vegetarian.", why: "vegetarian은 ‘채식주의자’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그 사람 안 좋아해.", before: "I don't", after: "him.", answers: ["like"],
        wrong: { "likes": "don't 뒤에는 동사 원래 모양 like를 써요." },
        tip: { en: "He's not my type.", why: "‘내 스타일 아니야’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 기억 안 나.", before: "I don't", after: ".", answers: ["remember"],
        wrong: { "remembering": "don't 뒤에는 동사 원래 모양 remember를 써요." },
        tip: { en: "I forgot.", why: "‘까먹었어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 일요일엔 일 안 해.", answers: ["I don't work on Sundays.", "I don't work on Sunday."],
        wrong: { "i am not work on sundays": "동사를 부정할 때는 am not이 아니라 don't를 써요.", "i do not working on sundays": "don't 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Sundays are my day off.", why: "day off는 ‘쉬는 날’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 TV 잘 안 봐.", answers: ["I don't watch TV much.", "I don't watch TV often.", "I don't watch much TV."],
        wrong: { "i do not watching tv much": "don't 뒤에는 동사 원래 모양 watch를 써요." },
        tip: { en: "I rarely watch TV.", why: "rarely는 ‘거의 안’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 운전 안 해.", answers: ["I don't drive."],
        wrong: { "i am not drive": "동사를 부정할 때는 am not이 아니라 don't를 써요." },
        tip: { en: "I usually take the bus.", why: "‘보통 버스 타’라고 이유를 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그런 거 신경 안 써.", answers: ["I don't care about that.", "I don't care."],
        wrong: { "i am not care about that": "동사를 부정할 때는 am not이 아니라 don't를 써요." },
        tip: { en: "It doesn't matter to me.", why: "‘나한테 상관없어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 공포 영화 안 좋아해.", answers: ["I don't like horror movies.", "I don't like scary movies."],
        ctx: { lead: "‘~ 안 해’로 바꿔 보세요.", en: "I like horror movies." },
        wrong: { "i am not like horror movies": "동사를 부정할 때는 am not이 아니라 don't를 써요.", "i do not likes horror movies": "don't 뒤에는 동사 원래 모양 like를 써요." },
        tip: { en: "Horror movies aren't my thing.", why: "not my thing은 ‘내 취향 아니야’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 몰라.", answers: ["Sorry, I don't know.", "I'm sorry, I don't know."],
        dialog: { a: "Where's the station?", aKo: "역이 어디야?" },
        wrong: { "sorry i am not know": "동사를 부정할 때는 am not이 아니라 don't를 써요." },
        tip: { en: "Sorry, I'm not from here.", why: "‘미안, 나 여기 사람 아니야’라는 말이에요." } }
    ]
  };
})(window.EP);
