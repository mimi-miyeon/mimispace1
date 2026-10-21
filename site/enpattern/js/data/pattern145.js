/* 세션 145. I'm sorry if ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[145] = {
    no: 145, form: "I'm sorry if ~.", stem: "I'm sorry if", meaning: "~했다면 미안해요.",
    hint: "I'm sorry if I + 동사",
    intro: {
      blocks: [["I'm sorry", "미안하다"], ["if ~", "~했다면"]],
      lines: [
        "I'm sorry if + 주어 + 동사는 ‘~했다면 미안해’예요.",
        "상대가 그렇게 느꼈을 수도 있을 때 써요. (I'm sorry if I upset you)",
        "지난 일은 동사의 과거형을 써요."
      ],
      examples: [
        { en: "I'm sorry if I upset you.", ko: "내가 기분 상하게 했다면 미안해." },
        { en: "I'm sorry if I was rude.", ko: "내가 무례했다면 미안해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 기분 상하게 했다면 미안해.", before: "I'm sorry", after: "I upset you.", answers: ["if"],
        wrong: { "that": "‘~했다면’은 if예요." },
        tip: { en: "I didn't mean to.", why: "‘그럴 뜻은 아니었어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 무례했다면 미안해.", before: "I'm sorry if I", after: "rude.", answers: ["was"],
        wrong: { "am": "지난 일이라 was를 써요.", "were": "I 뒤에는 was예요." },
        tip: { en: "Forgive me.", why: "‘용서해 줘’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 깨웠다면 미안해.", before: "I'm sorry if I", after: "you up.", answers: ["woke"],
        wrong: { "wake": "지난 일이라 woke를 써요.", "waked": "wake의 과거는 woke예요." },
        tip: { en: "Go back to sleep.", why: "‘다시 자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "헷갈리게 했다면 미안해.", before: "I'm sorry if I", after: "you.", answers: ["confused"],
        wrong: { "confuse": "지난 일이라 confused를 써요." },
        tip: { en: "Let me explain again.", why: "‘다시 설명할게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 너무 시끄러웠다면 미안해.", before: "", after: "sorry if I was too loud.", answers: ["I'm"],
        wrong: { "i": "‘미안해’는 I'm sorry예요." },
        tip: { en: "I'll keep it down.", why: "keep it down은 ‘조용히 하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 너무 심하게 말했다면 미안해.", answers: ["I'm sorry if I was too harsh.", "I'm sorry if I said too much."],
        wrong: { "i am sorry if i am too harsh": "지난 일이라 was를 써요.", "i sorry if i was too harsh": "I 뒤에 am이 필요해요. I'm sorry예요." },
        tip: { en: "I went too far.", why: "go too far는 ‘선을 넘다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 방해했다면 미안해.", answers: ["I'm sorry if I bothered you.", "I'm sorry if I interrupted you.", "I'm sorry if I disturbed you."],
        wrong: { "i am sorry if i bother you": "지난 일이라 bothered를 써요." },
        tip: { en: "Sorry to bother you.", why: "‘귀찮게 해서 미안’이라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 너를 기다리게 했다면 미안해.", answers: ["I'm sorry if I kept you waiting.", "I'm sorry if I made you wait."],
        wrong: { "i am sorry if i keep you waiting": "지난 일이라 kept를 써요." },
        tip: { en: "Thanks for waiting.", why: "‘기다려 줘서 고마워’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내 말이 이상하게 들렸다면 미안해.", answers: ["I'm sorry if that sounded weird.", "I'm sorry if that sounded strange.", "I'm sorry if it sounded weird."],
        wrong: { "i am sorry if that sound weird": "지난 일이라 sounded를 써요." },
        tip: { en: "That came out wrong.", why: "come out wrong은 ‘말이 잘못 나오다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 늦었다면 미안해.", answers: ["I'm sorry if I was late.", "I'm sorry if I'm late."],
        ctx: { lead: "rude 대신 ‘늦은(late)’으로 바꿔 보세요.", en: "I'm sorry if I was rude." },
        wrong: { "i am sorry if i were late": "I 뒤에는 was예요." },
        tip: { en: "Traffic was bad.", why: "‘차가 막혔어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 상처 줬다면 미안해.", answers: ["I'm sorry if I hurt you.", "I'm sorry if I hurt your feelings."],
        dialog: { a: "What you said really hurt me.", aKo: "네가 한 말 진짜 상처였어." },
        wrong: { "i am sorry if i hurted you": "hurt의 과거는 그대로 hurt예요." },
        tip: { en: "It wasn't my intention.", why: "intention은 ‘의도’예요." } }
    ]
  };
})(window.EP);
