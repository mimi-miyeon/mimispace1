/* 세션 20. I can't help ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[20] = {
    no: 20, form: "I can't help ~ing.", stem: "I can't help", meaning: "~하지 않을 수 없어요.",
    hint: "I can't help + 동사-ing",
    intro: {
      blocks: [["I can't help", "어쩔 수 없다"], ["~ing", "~하는 것"]],
      lines: [
        "I can't help ~ing는 ‘나도 모르게 ~하게 돼 / ~할 수밖에 없어’예요.",
        "help 뒤에는 동사에 ing를 붙여요. (laughing, thinking)",
        "I can't help you(도와줄 수 없어)와 헷갈리지 않게 뒤의 ~ing를 잘 보세요."
      ],
      examples: [
        { en: "I can't help feeling nervous.", ko: "자꾸 긴장이 돼." },
        { en: "I can't help thinking about it.", ko: "자꾸 그 생각이 나." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "자꾸 먹게 돼.", before: "I can't", after: "eating.", answers: ["help", "stop"],
        wrong: { "helping": "can't 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Everything looks so good.", why: "‘다 맛있어 보여’로 이유를 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "자꾸 걱정이 돼.", before: "I can't", after: "worrying.", answers: ["help", "stop"],
        wrong: { "helping": "can't 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "I'm so worried.", why: "‘너무 걱정돼’로 바로 말해도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나도 모르게 눈물이 나.", before: "I can't help", after: ".", answers: ["crying"],
        wrong: { "cry": "help 뒤에는 동사에 ing를 붙여요. crying이에요.", "to cry": "help 뒤에는 to 대신 동사에 ing를 붙여요." },
        tip: { en: "Tears keep coming.", why: "‘눈물이 계속 나’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "자꾸 휴대폰을 보게 돼.", before: "I can't help", after: "my phone.", answers: ["checking"],
        wrong: { "check": "help 뒤에는 동사에 ing를 붙여요. checking이에요." },
        tip: { en: "I keep checking my phone.", why: "keep ~ing는 ‘계속 ~하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나도 모르게 그걸 보게 돼.", before: "I", after: "help looking at it.", answers: ["can't"],
        wrong: { "do not": "‘어쩔 수 없이 ~하게 돼’는 don't가 아니라 can't help예요.", "can": "‘어쩔 수 없이 ~하게 돼’는 can이 아니라 can't help예요." },
        tip: { en: "I can't take my eyes off it.", why: "‘눈을 뗄 수가 없어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "자꾸 그 노래를 부르게 돼.", answers: ["I can't help singing that song.", "I can't help singing the song."],
        wrong: { "i cannot help sing that song": "help 뒤에는 동사에 ing를 붙여요. singing이에요.", "i cannot help to sing that song": "help 뒤에는 to 대신 동사에 ing를 붙여요." },
        tip: { en: "That song is stuck in my head.", why: "stuck in my head는 ‘머리에서 맴돌다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "자꾸 네 생각이 나.", answers: ["I can't help thinking about you.", "I can't help thinking of you."],
        wrong: { "i cannot help think about you": "help 뒤에는 동사에 ing를 붙여요. thinking이에요." },
        tip: { en: "You're always on my mind.", why: "on my mind는 ‘내 마음속에’라는 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "자꾸 간식을 사게 돼.", answers: ["I can't help buying snacks."],
        wrong: { "i cannot help buy snacks": "help 뒤에는 동사에 ing를 붙여요. buying이에요." },
        tip: { en: "I always end up buying snacks.", why: "end up ~ing는 ‘결국 ~하게 되다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "자꾸 같은 실수를 하게 돼.", answers: ["I can't help making the same mistake.", "I can't help making the same mistakes."],
        wrong: { "i cannot help make the same mistake": "help 뒤에는 동사에 ing를 붙여요. making이에요.", "i cannot help doing the same mistake": "‘실수하다’는 do가 아니라 make a mistake예요." },
        tip: { en: "I keep making the same mistake.", why: "keep ~ing는 ‘계속 ~하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "자꾸 웃음이 나.", answers: ["I can't help laughing.", "I can't help smiling."],
        ctx: { lead: "feeling nervous 대신 ‘웃다(laugh)’를 넣어 보세요.", en: "I can't help feeling nervous." },
        wrong: { "i cannot help laugh": "help 뒤에는 동사에 ing를 붙여요. laughing이에요." },
        tip: { en: "I can't stop laughing.", why: "can't stop ~ing는 ‘멈출 수가 없어’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그냥 어쩔 수가 없어.", answers: ["I can't help it."], alts: ["I just can't help it."],
        dialog: { a: "Why do you keep checking your phone?", aKo: "왜 자꾸 휴대폰 봐?" },
        wrong: { "i cannot help": "‘어쩔 수가 없어’는 help 뒤에 it을 붙여 I can't help it이에요." },
        tip: { en: "It's a habit.", why: "‘습관이야’로 이유를 말해요." } }
    ]
  };
})(window.EP);
