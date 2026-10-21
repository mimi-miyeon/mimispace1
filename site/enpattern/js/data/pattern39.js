/* 세션 39. I'm trying to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[39] = {
    no: 39, form: "I'm trying to ~.", stem: "I'm trying to", meaning: "나는 ~하려고 애쓰는 중이에요.",
    hint: "I'm trying to + 동사",
    intro: {
      blocks: [["I'm trying", "나는 애쓰고 있다"], ["to ~", "~하려고"]],
      lines: [
        "I'm trying to ~는 ‘~하려고 하는 중이야 / 노력 중이야’예요.",
        "try to + 동사는 ‘~하려고 하다’예요. to 뒤에는 동사 원래 모양을 써요.",
        "‘집중하려는 중이니까 조용히 해 줘’처럼 지금 애쓰는 일을 말할 때 써요."
      ],
      examples: [
        { en: "I'm trying to sleep.", ko: "나 자려고 하는 중이야." },
        { en: "I'm trying to save money.", ko: "나 돈 모으려고 노력 중이야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 집중하려고 하는 중이야.", before: "I'm trying", after: "focus.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I need to concentrate.", why: "concentrate는 ‘집중하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 살 빼려고 노력 중이야.", before: "I'm", after: "to lose weight.", answers: ["trying"],
        wrong: { "try": "I'm 뒤에는 동사에 ing를 붙여요. trying이에요.", "tried": "I'm 뒤에는 동사에 ing를 붙여요. trying이에요.", "tring": "try는 y를 그대로 두고 ing를 붙여 trying이에요." },
        tip: { en: "I'm on a diet.", why: "on a diet는 ‘다이어트 중인’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 일찍 자려고 노력 중이야.", before: "I'm trying to", after: "to bed early.", answers: ["go"],
        wrong: { "going": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I want to sleep earlier.", why: "‘더 일찍 자고 싶어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 담배 끊으려고 하는 중이야.", before: "I'm trying to", after: "smoking.", answers: ["quit", "stop"],
        wrong: { "quitting": "to 뒤에는 동사 원래 모양 quit을 써요." },
        tip: { en: "I'm cutting down on smoking.", why: "cut down on은 ‘~을 줄이다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 기억해 내려고 하는 중이야.", before: "", after: "trying to remember.", answers: ["I'm"],
        wrong: { "i": "‘~하는 중이야’는 I 뒤에 am을 붙여 I'm이에요." },
        tip: { en: "It's on the tip of my tongue.", why: "‘말이 혀끝에서 맴돌아’라는 표현이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 영어 배우려고 노력 중이야.", answers: ["I'm trying to learn English.", "I'm trying to study English."],
        wrong: { "i am trying to learning english": "to 뒤에는 동사 원래 모양 learn을 써요.", "i trying to learn english": "‘~하는 중이야’는 I 뒤에 am을 붙여 I'm이에요." },
        tip: { en: "I'm working on my English.", why: "work on은 ‘~을 갈고닦다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 너 도와주려고 하는 거야.", answers: ["I'm trying to help you.", "I'm trying to help."], alts: ["I'm just trying to help.", "I'm just trying to help you."],
        wrong: { "i am trying help you": "‘~하려고’는 trying 뒤에 to를 붙여요.", "i am try to help you": "I'm 뒤에는 동사에 ing를 붙여요. trying이에요." },
        tip: { en: "I just want to help.", why: "‘그냥 돕고 싶어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 일찍 일어나려고 노력 중이야.", answers: ["I'm trying to get up early.", "I'm trying to wake up early."],
        wrong: { "i am trying to getting up early": "to 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "I'm working on waking up early.", why: "work on은 ‘~을 고치려고 노력하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 덜 먹으려고 노력 중이야.", answers: ["I'm trying to eat less."],
        wrong: { "i am trying to eat fewer": "먹는 양을 말할 때는 less를 써요.", "i am trying to eating less": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "I'm cutting back on food.", why: "cut back on은 ‘~을 줄이다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 공부하려고 하는 중이야.", answers: ["I'm trying to study."],
        ctx: { lead: "sleep 대신 ‘공부하다(study)’로 바꿔 보세요.", en: "I'm trying to sleep." },
        wrong: { "i am trying to studying": "to 뒤에는 동사 원래 모양 study를 써요." },
        tip: { en: "I'm trying to get some studying done.", why: "get ~ done은 ‘~을 해내다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "이 문 열려고 하는 중이야.", answers: ["I'm trying to open this door.", "I'm trying to open the door."],
        dialog: { a: "What are you doing?", aKo: "뭐 해?" },
        wrong: { "i am trying to opening this door": "to 뒤에는 동사 원래 모양 open을 써요." },
        tip: { en: "This door won't open.", why: "won't open은 ‘안 열려’예요." } }
    ]
  };
})(window.EP);
