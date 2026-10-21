/* 세션 70. I didn't mean to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[70] = {
    no: 70, form: "I didn't mean to ~.", stem: "I didn't mean to", meaning: "~하려던 건 아니었어요.",
    hint: "I didn't mean to + 동사",
    intro: {
      blocks: [["I didn't mean", "나는 의도하지 않았다"], ["to ~", "~하려고"]],
      lines: [
        "I didn't mean to ~는 ‘~하려던 건 아니었어’예요. 일부러 그런 게 아니라고 사과할 때 써요.",
        "mean to는 ‘~하려고 하다, 의도하다’예요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "I didn't mean to hurt you.", ko: "너 상처 주려던 건 아니었어." },
        { en: "I didn't mean to be rude.", ko: "무례하게 굴려던 건 아니었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "깨우려던 건 아니었어.", before: "I didn't mean", after: "wake you up.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Sorry, did I wake you?", why: "‘미안, 나 때문에 깼어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그렇게 말하려던 건 아니었어.", before: "I didn't", after: "to say that.", answers: ["mean"],
        wrong: { "meant": "didn't 뒤에는 동사 원래 모양 mean을 써요.", "want": "‘~하려던 건 아니었어’는 didn't mean to예요." },
        tip: { en: "That came out wrong.", why: "‘말이 잘못 나왔어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "놀래키려던 건 아니었어.", before: "I didn't mean to", after: "you.", answers: ["scare", "surprise"],
        wrong: { "scared": "to 뒤에는 동사 원래 모양 scare를 써요." },
        tip: { en: "Sorry, I didn't see you there.", why: "‘미안, 거기 있는 줄 몰랐어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "끼어들려던 건 아니었어.", before: "I didn't mean to", after: ".", answers: ["interrupt"],
        wrong: { "interrupting": "to 뒤에는 동사 원래 모양 interrupt를 써요." },
        tip: { en: "Sorry, go ahead.", why: "‘미안, 계속 말해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "늦으려던 건 아니었어.", before: "I", after: "mean to be late.", answers: ["didn't"],
        wrong: { "do not": "지난 일이라 didn't를 써요.", "was not": "‘~하려던 건 아니었어’는 didn't mean to예요." },
        tip: { en: "Traffic was terrible.", why: "‘차가 엄청 막혔어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네 기분 상하게 하려던 건 아니었어.", answers: ["I didn't mean to upset you.", "I didn't mean to hurt your feelings."],
        wrong: { "i did not mean to upsetting you": "to 뒤에는 동사 원래 모양 upset을 써요.", "i did not meant to upset you": "didn't 뒤에는 동사 원래 모양 mean을 써요." },
        tip: { en: "I'm sorry if I upset you.", why: "‘기분 상했다면 미안해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 깨려던 건 아니었어.", answers: ["I didn't mean to break it."],
        wrong: { "i did not mean to broke it": "to 뒤에는 동사 원래 모양 break를 써요." },
        tip: { en: "It was an accident.", why: "‘사고였어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 무시하려던 건 아니었어.", answers: ["I didn't mean to ignore you."],
        wrong: { "i did not mean to ignoring you": "to 뒤에는 동사 원래 모양 ignore를 써요." },
        tip: { en: "I didn't see your message.", why: "‘네 메시지 못 봤어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 먹으려던 건 아니었어.", answers: ["I didn't mean to eat it.", "I didn't mean to eat that."],
        wrong: { "i did not mean to ate it": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "I thought it was mine.", why: "‘내 건 줄 알았어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "소리 지르려던 건 아니었어.", answers: ["I didn't mean to yell.", "I didn't mean to shout.", "I didn't mean to yell at you."],
        ctx: { lead: "hurt you 대신 ‘소리 지르다(yell)’로 바꿔 보세요.", en: "I didn't mean to hurt you." },
        wrong: { "i did not mean to yelling": "to 뒤에는 동사 원래 모양 yell을 써요." },
        tip: { en: "I'm sorry I raised my voice.", why: "raise my voice는 ‘목소리를 높이다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안! 일부러 그런 거 아니야.", answers: ["Sorry! I didn't mean to.", "I'm sorry! I didn't mean to.", "Sorry! I didn't mean to do that."],
        dialog: { a: "Ouch! You stepped on my foot!", aKo: "아야! 너 내 발 밟았어!" },
        wrong: { "sorry i did not mean": "‘일부러 그런 거 아니야’는 mean 뒤에 to를 붙여 I didn't mean to예요." },
        tip: { en: "Sorry! It was an accident.", why: "‘미안! 실수였어’라는 말이에요." } }
    ]
  };
})(window.EP);
