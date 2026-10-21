/* 세션 34. I'm sorry to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[34] = {
    no: 34, form: "I'm sorry to ~.", stem: "I'm sorry to", meaning: "~하니 유감입니다.",
    hint: "I'm sorry to + 동사",
    intro: {
      blocks: [["I'm sorry", "미안해, 안됐어"], ["to ~", "~하게 돼서"]],
      lines: [
        "I'm sorry to + 동사는 ‘~하게 돼서 미안해 / 안됐어’예요.",
        "지금 하는 일에 미안할 때 써요. (sorry to bother you: 귀찮게 해서 미안)",
        "I'm sorry to hear that은 ‘그 말을 들으니 안됐다’는 위로예요."
      ],
      examples: [
        { en: "I'm sorry to say this.", ko: "이런 말 해서 미안해." },
        { en: "I'm sorry to bother you.", ko: "귀찮게 해서 미안해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이렇게 늦게 전화해서 미안해.", before: "I'm sorry", after: "call so late.", answers: ["to"],
        wrong: { "for": "for 뒤에는 동사-ing가 와요. 동사 원래 모양 앞에는 to를 써요." },
        tip: { en: "Sorry for calling so late.", why: "sorry for + 동사-ing로도 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "끼어들어서 미안해.", before: "I'm sorry to", after: ".", answers: ["interrupt"],
        wrong: { "interrupting": "to 뒤에는 동사 원래 모양 interrupt를 써요." },
        tip: { en: "Sorry, can I say something?", why: "‘미안, 나 한마디 해도 돼?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 소식 들으니 안됐다.", before: "I'm sorry to", after: "the news.", answers: ["hear"],
        wrong: { "listen": "‘소식을 듣다’는 listen이 아니라 hear예요.", "hearing": "to 뒤에는 동사 원래 모양 hear를 써요." },
        tip: { en: "That's terrible news.", why: "‘정말 안 좋은 소식이다’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이렇게 일찍 가서 미안해.", before: "I'm sorry to", after: "so early.", answers: ["leave", "go"],
        wrong: { "leaving": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Sorry I have to leave early.", why: "‘일찍 가야 해서 미안해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "또 물어봐서 미안해.", before: "I'm", after: "to ask again.", answers: ["sorry"],
        wrong: { "sad": "sad는 ‘슬픈’이에요. ‘미안한’은 sorry예요." },
        tip: { en: "Sorry, one more question.", why: "‘미안, 질문 하나만 더’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "실망시켜서 미안해.", answers: ["I'm sorry to disappoint you.", "I'm sorry to let you down."],
        wrong: { "i am sorry to disappointing you": "to 뒤에는 동사 원래 모양 disappoint를 써요." },
        tip: { en: "I didn't want to let you down.", why: "let down은 ‘실망시키다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "기다리게 해서 미안해.", answers: ["I'm sorry to keep you waiting.", "I'm sorry to make you wait."],
        wrong: { "i am sorry to keep you wait": "keep ~ 뒤에는 waiting을 써요. keep you waiting이에요." },
        tip: { en: "Thanks for waiting.", why: "‘기다려 줘서 고마워’로 바꿔 말해도 좋아요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "안 좋은 소식 전해서 미안해.", answers: ["I'm sorry to give you bad news.", "I'm sorry to give you the bad news.", "I'm sorry to tell you the bad news.", "I'm sorry to tell you bad news."],
        wrong: { "i am sorry to give you a bad news": "news는 셀 수 없는 말이라 a를 붙이지 않아요." },
        tip: { en: "I have some bad news.", why: "‘안 좋은 소식이 있어’라고 먼저 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이렇게 늦게 문자해서 미안해.", answers: ["I'm sorry to text you so late.", "I'm sorry to text you this late.", "I'm sorry to message you so late."],
        wrong: { "i am sorry to texting you so late": "to 뒤에는 동사 원래 모양 text를 써요." },
        tip: { en: "Sorry for the late text.", why: "sorry for + 명사로도 말해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "깨워서 미안해.", answers: ["I'm sorry to wake you up.", "I'm sorry to wake you."],
        ctx: { lead: "bother you 대신 ‘너를 깨우다(wake you up)’로 바꿔 보세요.", en: "I'm sorry to bother you." },
        wrong: { "i am sorry to wake up you": "you는 wake와 up 사이에 넣어 wake you up이에요.", "i am sorry to woke you up": "to 뒤에는 동사 원래 모양 wake를 써요." },
        tip: { en: "Sorry, did I wake you?", why: "‘미안, 나 때문에 깼어?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그 말 들으니 마음이 안 좋다.", answers: ["I'm sorry to hear that."],
        dialog: { a: "My grandma is in the hospital.", aKo: "우리 할머니가 입원하셨어." },
        wrong: { "i am sorry to hearing that": "to 뒤에는 동사 원래 모양 hear를 써요.", "i am sorry to listen that": "‘그 말을 듣다’는 listen이 아니라 hear예요." },
        tip: { en: "I hope she gets better soon.", why: "‘빨리 나으시길 바라’라는 위로예요." } }
    ]
  };
})(window.EP);
