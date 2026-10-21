/* 세션 107. Don't let me ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[107] = {
    no: 107, form: "Don't let me ~.", stem: "Don't let me", meaning: "내가 ~하게 하지 마세요.",
    hint: "Don't let me + 동사/형용사",
    intro: {
      blocks: [["Don't let me", "내가 ~하게 두지 마"], ["~", "동사"]],
      lines: [
        "Don't let me + 동사는 ‘내가 ~하지 않게 해 줘 / ~하게 두지 마’예요.",
        "부탁할 때 써요. me 뒤에는 동사 원래 모양을 써요.",
        "Don't let me down.(나 실망시키지 마)은 자주 쓰는 표현이에요."
      ],
      examples: [
        { en: "Don't let me forget.", ko: "나 잊어버리지 않게 해 줘." },
        { en: "Don't let me down.", ko: "나 실망시키지 마." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 늦잠 자지 않게 해 줘.", before: "Don't let me", after: ".", answers: ["oversleep"],
        wrong: { "oversleeping": "me 뒤에는 동사 원래 모양 oversleep을 써요." },
        tip: { en: "Wake me up early.", why: "‘일찍 깨워 줘’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 실망시키지 마.", before: "Don't let me", after: ".", answers: ["down"],
        wrong: { "done": "‘실망시키다’는 let down이에요." },
        tip: { en: "I'm counting on you.", why: "count on은 ‘믿고 기대하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그거 잊지 않게 해 줘.", before: "Don't let me", after: "it.", answers: ["forget"],
        wrong: { "forgot": "me 뒤에는 동사 원래 모양 forget을 써요." },
        tip: { en: "Remind me later.", why: "remind는 ‘다시 알려 주다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 너무 많이 먹지 않게 해 줘.", before: "Don't", after: "me eat too much.", answers: ["let"],
        wrong: { "make": "‘~하게 두다’는 let이에요." },
        tip: { en: "Stop me if I eat too much.", why: "‘많이 먹으면 말려 줘’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 혼자 가게 두지 마.", before: "", after: "let me go alone.", answers: ["Don't"],
        wrong: { "not": "‘~하지 마’는 Don't로 시작해요." },
        tip: { en: "Come with me.", why: "‘같이 가자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 또 그거 사지 않게 해 줘.", answers: ["Don't let me buy it again.", "Don't let me buy that again."],
        wrong: { "do not let me to buy it again": "me 뒤에는 to 없이 동사 원래 모양을 써요.", "do not let me buying it again": "me 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "Stop me from buying it.", why: "stop A from ~ing는 ‘A가 ~ 못 하게 막다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 잠들지 않게 해 줘.", answers: ["Don't let me fall asleep."],
        wrong: { "do not let me sleep": "‘잠들다’는 fall asleep이에요." },
        tip: { en: "Keep me awake.", why: "keep awake는 ‘깨어 있게 하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그에게 전화하지 않게 해 줘.", answers: ["Don't let me call him."],
        wrong: { "do not let me calling him": "me 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "Take my phone away.", why: "‘내 폰 뺏어 가’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 포기하지 않게 해 줘.", answers: ["Don't let me give up.", "Don't let me quit."],
        wrong: { "do not let me to give up": "me 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Keep pushing me.", why: "push는 ‘밀어붙이다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 울지 않게 해 줘.", answers: ["Don't let me cry."],
        ctx: { lead: "forget 대신 ‘울다(cry)’로 바꿔 보세요.", en: "Don't let me forget." },
        wrong: { "do not let me crying": "me 뒤에는 동사 원래 모양 cry를 써요." },
        tip: { en: "Cheer me up.", why: "cheer up은 ‘기운 나게 하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나 잊지 않게 해 줘.", answers: ["Yes, don't let me forget.", "Yeah, don't let me forget."],
        dialog: { a: "Should I remind you about the meeting?", aKo: "회의 있다고 알려 줄까?" },
        wrong: { "yes do not let me forgot": "me 뒤에는 동사 원래 모양 forget을 써요." },
        tip: { en: "Yes, please remind me.", why: "remind는 ‘다시 알려 주다’예요." } }
    ]
  };
})(window.EP);
