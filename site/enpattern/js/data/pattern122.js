/* 세션 122. If I were you, I wouldn't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[122] = {
    no: 122, form: "If I were you, I wouldn't ~.", stem: "If I were you, I wouldn't", meaning: "내가 당신이라면 ~하지 않을 거예요.",
    hint: "If I were you, I wouldn't + 동사",
    intro: {
      blocks: [["If I were you,", "내가 너라면"], ["I wouldn't ~", "~하지 않을 거야"]],
      lines: [
        "If I were you, I wouldn't + 동사는 ‘내가 너라면 ~ 안 할 거야’예요. 부드럽게 말리는 말이에요.",
        "wouldn't는 would not을 줄인 말이에요. 뒤에는 동사 원래 모양을 써요.",
        "If I were you를 뒤에 붙여도 돼요. (I wouldn't go, if I were you)"
      ],
      examples: [
        { en: "If I were you, I wouldn't go.", ko: "내가 너라면 안 갈 거야." },
        { en: "If I were you, I wouldn't worry.", ko: "내가 너라면 걱정 안 할 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 걱정 안 할 거야.", before: "If I were you, I wouldn't", after: ".", answers: ["worry"],
        wrong: { "worrying": "wouldn't 뒤에는 동사 원래 모양 worry를 써요." },
        tip: { en: "Don't worry about it.", why: "‘걱정하지 마’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 그거 안 살 거야.", before: "If I were you, I", after: "buy it.", answers: ["wouldn't"],
        wrong: { "will not": "상상하는 말이라 won't가 아니라 wouldn't예요.", "do not": "상상하는 말이라 wouldn't를 써요." },
        tip: { en: "It's not worth it.", why: "‘그럴 가치 없어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 그 사람 안 믿을 거야.", before: "If I were you, I wouldn't", after: "him.", answers: ["trust"],
        wrong: { "trusting": "wouldn't 뒤에는 동사 원래 모양 trust를 써요." },
        tip: { en: "Be careful with him.", why: "‘그 사람 조심해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 그거 안 먹을 거야.", before: "If I were", after: ", I wouldn't eat that.", answers: ["you"],
        wrong: { "your": "‘내가 너라면’은 If I were you예요." },
        tip: { en: "It looks old.", why: "‘오래돼 보여’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 너라면 그만두지 않을 거야.", before: "If I", after: "you, I wouldn't quit.", answers: ["were"],
        wrong: { "am": "상상하는 말이라 am이 아니라 were를 써요.", "was": "If I 뒤에는 were를 써요." },
        tip: { en: "Hang in there.", why: "‘조금만 버텨’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 너라면 거기 안 갈 거야.", answers: ["If I were you, I wouldn't go there.", "If I were you, I wouldn't go."],
        wrong: { "if i were you i will not go there": "상상하는 말이라 won't가 아니라 wouldn't예요.", "if i were you i would not going there": "wouldn't 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Stay away from there.", why: "stay away는 ‘멀리하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 너라면 그 말 안 할 거야.", answers: ["If I were you, I wouldn't say that.", "If I were you, I wouldn't say it."],
        wrong: { "if i were you i would not said that": "wouldn't 뒤에는 동사 원래 모양 say를 써요." },
        tip: { en: "Keep it to yourself.", why: "‘혼자만 알고 있어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 너라면 운전 안 할 거야.", answers: ["If I were you, I wouldn't drive."],
        wrong: { "if i were you i do not drive": "상상하는 말이라 wouldn't를 써요." },
        tip: { en: "Take a taxi.", why: "‘택시 타’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내가 너라면 그 사람한테 돈 안 빌려줄 거야.", answers: ["If I were you, I wouldn't lend him money.", "If I were you, I wouldn't lend him any money."],
        wrong: { "if i were you i would not borrow him money": "‘빌려주다’는 lend예요. borrow는 ‘빌리다’예요." },
        tip: { en: "You won't get it back.", why: "‘못 돌려받을 거야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 너라면 기다리지 않을 거야.", answers: ["If I were you, I wouldn't wait."],
        ctx: { lead: "go 대신 ‘기다리다(wait)’로 바꿔 보세요.", en: "If I were you, I wouldn't go." },
        wrong: { "if i were you i would not waiting": "wouldn't 뒤에는 동사 원래 모양 wait를 써요." },
        tip: { en: "Just go ahead.", why: "‘그냥 먼저 해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 너라면 답장 안 할 거야.", answers: ["If I were you, I wouldn't reply.", "If I were you, I wouldn't answer.", "If I were you, I wouldn't text him back.", "If I were you, I wouldn't text back."],
        dialog: { a: "My ex texted me last night.", aKo: "어젯밤에 전 남친한테 문자 왔어." },
        wrong: { "if i were you i will not reply": "상상하는 말이라 won't가 아니라 wouldn't예요." },
        tip: { en: "Just ignore it.", why: "‘그냥 무시해’라는 말이에요." } }
    ]
  };
})(window.EP);
