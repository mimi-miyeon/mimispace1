/* 세션 25. I prefer ~ing to ...ing. (빈칸은 두 자리 중 하나만 비운다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[25] = {
    no: 25, form: "I prefer ~ing to ...ing.", stem: "I prefer", meaning: "나는 ...보다 ~을 좋아해요.",
    hint: "I prefer + 동사-ing + to + 동사-ing",
    intro: {
      blocks: [["I prefer", "나는 더 좋아한다"], ["~ing", "~하는 것을"], ["to ...ing", "...하는 것보다"]],
      lines: [
        "prefer는 ‘더 좋아하다’예요. 둘 중 하나를 고를 때 써요.",
        "I prefer A to B는 ‘B보다 A가 좋아’예요. 여기서 to는 ‘~보다’예요.",
        "A와 B에 할 일을 넣을 때는 둘 다 ~ing로 써요."
      ],
      examples: [
        { en: "I prefer walking to driving.", ko: "운전보다 걷는 게 좋아." },
        { en: "I prefer staying in to going out.", ko: "나가는 것보다 집에 있는 게 좋아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 운동보다 쉬는 게 좋아.", before: "I prefer resting", after: "working out.", answers: ["to"],
        wrong: { "than": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요." },
        tip: { en: "I'd rather rest than work out.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 버스 타는 것보다 걷는 게 좋아.", before: "I", after: "walking to taking the bus.", answers: ["prefer"],
        wrong: { "prefers": "I 뒤에는 prefers가 아니라 prefer예요.", "like": "‘더 좋아해’는 like가 아니라 prefer예요." },
        tip: { en: "I'd rather walk than take the bus.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 외식보다 요리하는 게 좋아.", before: "I prefer", after: "to eating out.", answers: ["cooking"],
        wrong: { "cook": "prefer A to B로 말할 때는 둘 다 ~ing로 써요. cooking이에요.", "to cook": "prefer A to B로 말할 때는 둘 다 ~ing로 써요. cooking이에요." },
        tip: { en: "I like cooking more than eating out.", why: "like A more than B도 같은 뜻이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 전화보다 문자 보내는 게 좋아.", before: "I prefer texting to", after: ".", answers: ["calling"],
        wrong: { "call": "to 뒤의 B도 ~ing로 써요. calling이에요." },
        tip: { en: "I'd rather text than call.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 쇼핑보다 집에 있는 게 좋아.", before: "I prefer staying home to", after: ".", answers: ["shopping"],
        wrong: { "shop": "to 뒤의 B도 ~ing로 써요. shopping이에요.", "shoping": "shop은 p를 한 번 더 써서 shopping이에요." },
        tip: { en: "I like staying home more than shopping.", why: "like A more than B도 같은 뜻이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 영화 보는 것보다 책 읽는 게 좋아.", answers: ["I prefer reading books to watching movies.", "I prefer reading to watching movies."],
        alts: ["I like reading books more than watching movies.", "I like reading more than watching movies."],
        wrong: { "i prefer reading books than watching movies": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요.", "i prefer read books to watch movies": "prefer A to B로 말할 때는 둘 다 ~ing로 써요." },
        tip: { en: "I'd rather read than watch movies.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 택시보다 지하철 타는 게 좋아.", answers: ["I prefer taking the subway to taking a taxi.", "I prefer taking the subway to taking taxis."],
        wrong: { "i prefer taking the subway than taking a taxi": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요.", "i prefer taking the subway to take a taxi": "to 뒤의 B도 ~ing로 써요. taking이에요." },
        tip: { en: "I'd rather take the subway than a taxi.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 사 먹는 것보다 집에서 먹는 게 좋아.", answers: ["I prefer eating at home to eating out."],
        alts: ["I like eating at home more than eating out."],
        wrong: { "i prefer eating at home than eating out": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요.", "i prefer eat at home to eat out": "prefer A to B로 말할 때는 둘 다 ~ing로 써요." },
        tip: { en: "I'd rather eat at home than eat out.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 말하는 것보다 듣는 게 좋아.", answers: ["I prefer listening to talking.", "I prefer listening to speaking."],
        wrong: { "i prefer listening than talking": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요." },
        tip: { en: "I'm more of a listener.", why: "‘나는 듣는 쪽이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 운전보다 자전거 타는 게 좋아.", answers: ["I prefer cycling to driving.", "I prefer biking to driving.", "I prefer riding a bike to driving."],
        ctx: { lead: "walking 대신 ‘자전거 타기(cycling)’를 넣어 보세요.", en: "I prefer walking to driving." },
        wrong: { "i prefer cycling than driving": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요.", "i prefer cycling to drive": "to 뒤의 B도 ~ing로 써요. driving이에요." },
        tip: { en: "I'd rather bike than drive.", why: "I'd rather A than B도 ‘B보다 A’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "난 헬스장 가는 것보다 걷는 게 좋아.", answers: ["I prefer walking to going to the gym.", "I prefer walking to working out at the gym."],
        dialog: { a: "Do you want to go to the gym with me?", aKo: "나랑 헬스장 갈래?" },
        wrong: { "i prefer walking than going to the gym": "prefer A to B에서 ‘~보다’는 than이 아니라 to예요.", "i prefer walking to go to the gym": "to 뒤의 B도 ~ing로 써요. going이에요." },
        tip: { en: "I'd rather go for a walk.", why: "I'd rather는 ‘차라리 ~할래’예요." } }
    ]
  };
})(window.EP);
