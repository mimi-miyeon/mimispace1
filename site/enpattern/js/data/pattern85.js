/* 세션 85. There is nothing to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[85] = {
    no: 85, form: "There is nothing to ~.", stem: "There is nothing to", meaning: "~할 것이 없어요.",
    hint: "There is nothing to + 동사",
    intro: {
      blocks: [["There is nothing", "아무것도 없다"], ["to ~", "~할"]],
      lines: [
        "There is nothing to + 동사는 ‘~할 게 없어’예요.",
        "nothing이 이미 부정이라 isn't를 같이 쓰지 않아요.",
        "to 뒤에는 동사 원래 모양을 써요. (nothing to do: 할 게 없어)"
      ],
      examples: [
        { en: "There is nothing to do.", ko: "할 게 없어." },
        { en: "There is nothing to worry about.", ko: "걱정할 거 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "먹을 게 없어.", before: "There is nothing to", after: ".", answers: ["eat"],
        wrong: { "eating": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "The fridge is empty.", why: "empty는 ‘텅 빈’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "할 말이 없어.", before: "There is nothing", after: "say.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I have nothing to say.", why: "I have nothing to ~도 같은 뜻이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "볼 게 없어.", before: "There is", after: "to see.", answers: ["nothing"],
        wrong: { "anything": "There is 뒤에는 anything이 아니라 nothing을 써요.", "something": "‘~할 게 없어’는 nothing이에요." },
        tip: { en: "It's not worth seeing.", why: "‘볼 가치가 없어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "무서워할 거 없어.", before: "There is nothing to be afraid", after: ".", answers: ["of"],
        wrong: { "for": "‘~을 두려워하다’는 afraid of예요." },
        tip: { en: "Don't be scared.", why: "‘무서워하지 마’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "잃을 게 없어.", before: "There is nothing to", after: ".", answers: ["lose"],
        wrong: { "lost": "to 뒤에는 동사 원래 모양 lose를 써요." },
        tip: { en: "Let's just go for it.", why: "go for it은 ‘한번 해 보다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "고칠 게 없어.", answers: ["There is nothing to fix.", "There is nothing to change."],
        wrong: { "there is not nothing to fix": "nothing이 이미 부정이라 not을 같이 쓰지 않아요.", "there is nothing to fixing": "to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "It's perfect.", why: "‘완벽해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "숨길 게 없어.", answers: ["There is nothing to hide."],
        wrong: { "there is nothing to hiding": "to 뒤에는 동사 원래 모양 hide를 써요.", "there is not nothing to hide": "nothing이 이미 부정이라 not을 같이 쓰지 않아요." },
        tip: { en: "I have nothing to hide.", why: "I have nothing to ~도 같은 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "마실 게 없어.", answers: ["There is nothing to drink."],
        wrong: { "there is nothing to drinking": "to 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "We're out of drinks.", why: "be out of는 ‘~이 다 떨어지다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "읽을 게 없어.", answers: ["There is nothing to read."],
        wrong: { "there is nothing to reading": "to 뒤에는 동사 원래 모양 read를 써요." },
        tip: { en: "I finished all my books.", why: "‘책 다 읽었어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "입을 게 없어.", answers: ["There is nothing to wear."],
        ctx: { lead: "do 대신 ‘입다(wear)’로 바꿔 보세요.", en: "There is nothing to do." },
        wrong: { "there is nothing to wearing": "to 뒤에는 동사 원래 모양 wear를 써요." },
        tip: { en: "I have nothing to wear.", why: "I have nothing to ~도 같은 뜻이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "괜찮아. 사과할 거 없어.", answers: ["It's okay. There is nothing to apologize for.", "That's okay. There is nothing to apologize for."],
        dialog: { a: "I'm sorry about yesterday.", aKo: "어제 일 미안해." },
        wrong: { "it is okay there is nothing to apologize": "‘~에 대해 사과하다’는 apologize for예요. 끝에 for를 붙여요." },
        tip: { en: "It's okay. Don't worry about it.", why: "‘괜찮아. 신경 쓰지 마’라는 말이에요." } }
    ]
  };
})(window.EP);
