/* 세션 23. I like to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[23] = {
    no: 23, form: "I like to ~.", stem: "I like to", meaning: "나는 ~하는 것을 좋아해요.",
    hint: "I like to + 동사",
    intro: {
      blocks: [["I like", "나는 좋아한다"], ["to ~", "~하는 것"]],
      lines: [
        "like to + 동사도 ‘~하는 걸 좋아해’예요. 지난 세션의 like ~ing와 뜻이 거의 같아요.",
        "to 뒤에는 동사 원래 모양을 써요. (to read, to cook)",
        "‘평소에 ~하는 편이야’처럼 습관을 말할 때 자주 써요."
      ],
      examples: [
        { en: "I like to sleep in on weekends.", ko: "주말엔 늦잠 자는 걸 좋아해." },
        { en: "I like to cook at home.", ko: "나 집에서 요리하는 걸 좋아해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 일찍 자는 걸 좋아해.", before: "I like", after: "go to bed early.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I'm an early sleeper.", why: "‘나 일찍 자는 편이야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 음악 듣는 걸 좋아해.", before: "I like to", after: "to music.", answers: ["listen"],
        wrong: { "listening": "to 뒤에는 동사 원래 모양 listen을 써요.", "hear": "‘음악을 듣다’는 listen to music이에요." },
        tip: { en: "I like listening to music.", why: "like ~ing로 말해도 뜻이 같아요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 혼자 있는 걸 좋아해.", before: "I like to", after: "alone.", answers: ["be"],
        wrong: { "being": "to 뒤에는 동사 원래 모양 be를 써요.", "am": "to 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "I enjoy my alone time.", why: "alone time은 ‘혼자만의 시간’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 걸어서 출근하는 걸 좋아해.", before: "I", after: "to walk to work.", answers: ["like"],
        wrong: { "likes": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요." },
        tip: { en: "I like walking to work.", why: "like ~ing로 말해도 뜻이 같아요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 일기 쓰는 걸 좋아해.", before: "I like to", after: "in my diary.", answers: ["write"],
        wrong: { "writing": "to 뒤에는 동사 원래 모양 write를 써요.", "wrote": "to 뒤에는 동사 원래 모양 write를 써요." },
        tip: { en: "I keep a diary.", why: "keep a diary는 ‘일기를 쓰다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 아침에 커피 마시는 걸 좋아해.",
        answers: ["I like to drink coffee in the morning.", "I like to have coffee in the morning.", "In the morning, I like to drink coffee."],
        alts: ["I like drinking coffee in the morning.", "I like having coffee in the morning."],
        wrong: { "i like to drinking coffee in the morning": "to 뒤에는 동사 원래 모양 drink를 써요.", "i like drink coffee in the morning": "like 뒤에 할 일을 말할 때는 to를 붙이거나 drinking처럼 써요." },
        tip: { en: "I always have coffee in the morning.", why: "‘아침엔 늘 커피를 마셔’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 새로운 곳에 가 보는 걸 좋아해.", answers: ["I like to go to new places.", "I like to visit new places.", "I like to explore new places."],
        alts: ["I like going to new places.", "I like visiting new places.", "I like exploring new places."],
        wrong: { "i like to going to new places": "to 뒤에는 동사 원래 모양 go를 써요.", "i like to go to new place": "여러 곳을 말할 때는 places로 써요." },
        tip: { en: "I love exploring new places.", why: "explore는 ‘둘러보다, 탐험하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 밤에 산책하는 걸 좋아해.", answers: ["I like to take a walk at night.", "I like to walk at night.", "I like to go for a walk at night."],
        alts: ["I like taking a walk at night.", "I like walking at night.", "I like going for a walk at night."],
        wrong: { "i like to walking at night": "to 뒤에는 동사 원래 모양 walk를 써요." },
        tip: { en: "Night walks are my favorite.", why: "favorite은 ‘가장 좋아하는 것’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 미리 계획하는 걸 좋아해.", answers: ["I like to plan ahead.", "I like to plan things ahead.", "I like to plan in advance."], alts: ["I like planning ahead."],
        wrong: { "i like to planning ahead": "to 뒤에는 동사 원래 모양 plan을 써요." },
        tip: { en: "I'm a planner.", why: "‘나 계획 세우는 타입이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 외식하는 걸 좋아해.", answers: ["I like to eat out."], alts: ["I like eating out."],
        ctx: { lead: "cook at home 대신 ‘외식하다(eat out)’를 넣어 보세요.", en: "I like to cook at home." },
        wrong: { "i like to eating out": "to 뒤에는 동사 원래 모양 eat을 써요.", "i like to eat outside": "‘외식하다’는 eat out이에요. eat outside는 ‘야외에서 먹다’예요." },
        tip: { en: "I love eating out.", why: "love는 like보다 더 좋아한다는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 나 집에 있는 걸 좋아해.", answers: ["No, I like to stay home.", "No, I like to stay at home.", "No, I like to stay in."],
        alts: ["No, I like staying home.", "No, I like staying at home."],
        dialog: { a: "Do you want to go out tonight?", aKo: "오늘 밤에 나갈래?" },
        wrong: { "no i like to staying home": "to 뒤에는 동사 원래 모양 stay를 써요." },
        tip: { en: "No, I'd rather stay in.", why: "I'd rather는 ‘차라리 ~할래’예요." } }
    ]
  };
})(window.EP);
