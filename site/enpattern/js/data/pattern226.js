/* 세션 226. The thing is ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[226] = {
    no: 226, form: "The thing is ~.", stem: "The thing is", meaning: "핵심은 ~라는 거예요.",
    hint: "The thing is + 주어 + 동사",
    intro: {
      blocks: [["The thing is", "문제는 / 실은"], ["~", "주어 + 동사"]],
      lines: [
        "The thing is (that) ~는 ‘문제는 ~라는 거야 / 실은 말이야’예요.",
        "핵심이나 곤란한 사정을 꺼낼 때 써요.",
        "뒤에는 ‘주어 + 동사’를 써요. 말할 때는 The thing is, ...처럼 잠깐 쉬어요."
      ],
      examples: [
        { en: "The thing is, I'm busy.", ko: "실은 나 바빠." },
        { en: "The thing is, we don't have time.", ko: "문제는 우리가 시간이 없다는 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "실은 나 바빠.", before: "The thing", after: ", I'm busy.", answers: ["is"],
        wrong: { "was": "지금 사정이라 is를 써요.", "are": "thing 하나라 is를 써요." },
        tip: { en: "I'm swamped.", why: "swamped는 ‘일이 넘치는’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "문제는 우리가 시간이 없다는 거야.", before: "The", after: "is, we don't have time.", answers: ["thing"],
        wrong: { "things": "‘문제는’은 The thing is예요." },
        tip: { en: "Time's running out.", why: "‘시간이 없어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "실은 나 돈이 없어.", before: "The thing is, I don't have any", after: ".", answers: ["money"],
        wrong: { "moneys": "money는 s를 붙이지 않아요." },
        tip: { en: "I'm broke.", why: "broke는 ‘빈털터리인’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "문제는 그가 안 듣는다는 거야.", before: "The thing is, he doesn't", after: ".", answers: ["listen"],
        wrong: { "listens": "doesn't 뒤에는 동사 원래 모양 listen을 써요." },
        tip: { en: "He never listens.", why: "‘걔는 절대 안 들어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "실은 내가 까먹었어.", before: "", after: "thing is, I forgot.", answers: ["The"],
        wrong: { "a": "‘실은’은 The thing is예요." },
        tip: { en: "My bad.", why: "‘내 잘못이야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "실은 나 그거 못 해.", answers: ["The thing is, I can't do it.", "The thing is, I can't do that."],
        wrong: { "the thing is i cannot to do it": "can't 뒤에는 to 없이 동사 원래 모양을 써요.", "the things is i cannot do it": "‘실은’은 The thing is예요." },
        tip: { en: "I'm not able to.", why: "be able to는 ‘~할 수 있다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "문제는 너무 비싸다는 거야.", answers: ["The thing is, it's too expensive."],
        wrong: { "the thing is it too expensive": "too 앞에 is가 필요해요. it's예요." },
        tip: { en: "It's over my budget.", why: "budget은 ‘예산’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "실은 나 그녀를 좋아해.", answers: ["The thing is, I like her.", "The thing is, I have a crush on her."],
        wrong: { "the thing is i likes her": "I 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "I have feelings for her.", why: "have feelings for는 ‘~를 좋아하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "문제는 아무도 모른다는 거야.", answers: ["The thing is, nobody knows.", "The thing is, no one knows."],
        wrong: { "the thing is nobody know": "nobody 뒤에는 동사에 s를 붙여요. knows예요." },
        tip: { en: "It's a mystery.", why: "mystery는 ‘수수께끼’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "실은 나 피곤해.", answers: ["The thing is, I'm tired."],
        ctx: { lead: "busy 대신 ‘피곤한(tired)’으로 바꿔 보세요.", en: "The thing is, I'm busy." },
        wrong: { "the thing is i tired": "tired 앞에 am이 필요해요. I'm tired예요." },
        tip: { en: "I need rest.", why: "‘쉬어야 해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "가고 싶어. 근데 실은 나 일해야 해.", answers: ["I want to. The thing is, I have to work.", "The thing is, I have to work.", "I'd love to. The thing is, I have to work."],
        dialog: { a: "Why don't you come to the party?", aKo: "파티에 오지 그래?" },
        wrong: { "i want to the thing is i have to working": "have to 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Maybe next time.", why: "‘다음에’라는 말이에요." } }
    ]
  };
})(window.EP);
