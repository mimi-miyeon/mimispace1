/* 세션 47. I'm not going to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[47] = {
    no: 47, form: "I'm not going to ~.", stem: "I'm not going to", meaning: "나는 ~하지 않을 거예요.",
    hint: "I'm not going to + 동사",
    intro: {
      blocks: [["I'm not going to", "나는 ~하지 않을 거다"], ["~", "동사"]],
      lines: [
        "I'm not going to ~는 ‘~ 안 할 거야’예요. 하지 않기로 마음먹은 일을 말해요.",
        "not은 I'm 바로 뒤에 넣어요. (I'm not going to)",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "I'm not going to give up.", ko: "나 포기 안 할 거야." },
        { en: "I'm not going to tell anyone.", ko: "나 아무한테도 말 안 할 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 거기 안 갈 거야.", before: "I'm", after: "going to go there.", answers: ["not"],
        wrong: { "do not": "‘안 할 거야’는 I'm not going to예요. don't를 쓰지 않아요.", "no": "‘안 할 거야’는 no가 아니라 not을 써요." },
        tip: { en: "I'm skipping it.", why: "skip은 ‘빠지다, 건너뛰다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 다시는 안 늦을 거야.", before: "I'm not", after: "to be late again.", answers: ["going"],
        wrong: { "go": "‘안 할 거야’는 I'm not going to예요." },
        tip: { en: "I'll be on time from now on.", why: "from now on은 ‘이제부터’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 오늘 밤에 술 안 마실 거야.", before: "I'm not going to", after: "tonight.", answers: ["drink"],
        wrong: { "drinking": "to 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "I'm staying sober tonight.", why: "sober는 ‘술 안 마신’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그거 안 살 거야.", before: "I'm not going to", after: "it.", answers: ["buy"],
        wrong: { "buying": "to 뒤에는 동사 원래 모양 buy를 써요.", "bought": "to 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "I'll pass on it.", why: "pass on은 ‘~은 사양할게’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 안 울 거야.", before: "", after: "not going to cry.", answers: ["I'm"],
        wrong: { "i": "‘안 할 거야’는 I 뒤에 am을 붙여 I'm not going to예요." },
        tip: { en: "I'll be strong.", why: "‘강해질 거야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 이번엔 아무 말 안 할 거야.", answers: ["I'm not going to say anything this time.", "This time I'm not going to say anything."],
        wrong: { "i am not going to say something this time": "부정문에서 ‘아무것도’는 anything을 써요.", "i do not going to say anything this time": "‘안 할 거야’는 I'm not going to예요." },
        tip: { en: "I'll keep quiet this time.", why: "keep quiet은 ‘조용히 있다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그 사람 다시 안 만날 거야.", answers: ["I'm not going to see him again.", "I'm not going to meet him again.", "I'm not going to see her again.", "I'm not going to meet her again."],
        wrong: { "i am not going to seeing him again": "to 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "I'm done with him.", why: "be done with는 ‘~와 끝이다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 일 안 할 거야.", answers: ["I'm not going to work today."],
        wrong: { "i am not going to working today": "to 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "I'm taking the day off.", why: "take the day off는 ‘하루 쉬다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 늦게까지 안 있을 거야.", answers: ["I'm not going to stay late.", "I'm not going to stay long."],
        wrong: { "i am not going to staying late": "to 뒤에는 동사 원래 모양 stay를 써요." },
        tip: { en: "I'll leave early.", why: "‘일찍 갈게’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 안 기다릴 거야.", answers: ["I'm not going to wait."],
        ctx: { lead: "‘~ 안 할 거야’로 바꿔 보세요.", en: "I'm going to wait." },
        wrong: { "i do not going to wait": "‘안 할 거야’는 I'm not going to예요.", "i am not going to waiting": "to 뒤에는 동사 원래 모양 wait을 써요." },
        tip: { en: "I won't wait.", why: "won't도 ‘~ 안 할 거야’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "걱정 마, 말 안 할게.", answers: ["Don't worry, I'm not going to tell her.", "Don't worry, I'm not going to tell.", "Don't worry, I'm not going to tell Mom."],
        dialog: { a: "Don't tell Mom, okay?", aKo: "엄마한테 말하지 마, 알았지?" },
        wrong: { "do not worry i am not going to say her": "‘~에게 말하다’는 say가 아니라 tell이에요." },
        tip: { en: "Don't worry, I won't tell.", why: "won't도 ‘~ 안 할 거야’예요." } }
    ]
  };
})(window.EP);
