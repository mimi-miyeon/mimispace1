/* 세션 82. There is something/someone ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[82] = {
    no: 82, form: "There is something/someone ~.", stem: "There is something/There is someone", meaning: "~한 것/사람이 있어요.",
    hint: "There is something/someone + 형용사/to + 동사",
    intro: {
      blocks: [["There is", "~이 있다"], ["something / someone", "무언가 / 누군가"], ["~", "형용사 / to + 동사"]],
      lines: [
        "There is something ~는 ‘~한 게 있어’, There is someone ~는 ‘~한 사람이 있어’예요.",
        "something 뒤에 형용사를 붙여요. (something strange: 이상한 것)",
        "할 일은 to + 동사로 붙여요. (something to drink: 마실 것)"
      ],
      examples: [
        { en: "There is something wrong.", ko: "뭔가 잘못됐어." },
        { en: "There is someone at the door.", ko: "문 앞에 누가 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "마실 게 있어.", before: "There is something to", after: ".", answers: ["drink"],
        wrong: { "drinking": "to 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "We have something to drink.", why: "‘마실 거 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이상한 게 있어.", before: "There is something", after: ".", answers: ["strange", "weird"],
        wrong: { "strangely": "something 뒤에는 형용사 strange를 써요." },
        tip: { en: "Something's off.", why: "off는 ‘이상한, 맞지 않는’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "밖에 누가 있어.", before: "There is", after: "outside.", answers: ["someone", "somebody"],
        wrong: { "something": "사람은 something이 아니라 someone이에요." },
        tip: { en: "Someone's outside.", why: "Someone's는 Someone is를 줄인 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "도와줄 사람이 있어.", before: "There is someone to", after: "you.", answers: ["help"],
        wrong: { "helping": "to 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Someone can help you.", why: "‘누가 도와줄 수 있어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 만나고 싶어 하는 사람이 있어.", before: "There is someone who wants to", after: "you.", answers: ["meet", "see"],
        wrong: { "meeting": "to 뒤에는 동사 원래 모양 meet을 써요." },
        tip: { en: "Someone wants to meet you.", why: "‘누가 널 만나고 싶어 해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "뭔가 이상해.", answers: ["There is something strange.", "There is something weird.", "There is something wrong."],
        wrong: { "there is strange something": "형용사는 something 뒤에 붙여요. something strange예요.", "there are something strange": "something은 하나로 봐서 There is예요." },
        tip: { en: "Something's not right.", why: "‘뭔가 잘못됐어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 찾는 사람이 있어.", answers: ["There is someone looking for you."], alts: ["There is somebody looking for you."],
        wrong: { "there is something looking for you": "사람은 something이 아니라 someone이에요." },
        tip: { en: "Someone's looking for you.", why: "Someone's는 Someone is를 줄인 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 할 게 좀 있어.", answers: ["There is something I have to do.", "There is something I need to do."],
        wrong: { "there is something i have to doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "I have something to do.", why: "‘할 일이 있어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너한테 보여 줄 게 있어.", answers: ["There is something I want to show you.", "There is something to show you."],
        wrong: { "there is something i want to showing you": "to 뒤에는 동사 원래 모양 show를 써요." },
        tip: { en: "I have something to show you.", why: "‘보여 줄 거 있어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "뭔가 특별한 게 있어.", answers: ["There is something special."],
        ctx: { lead: "wrong 대신 ‘특별한(special)’으로 바꿔 보세요.", en: "There is something wrong." },
        wrong: { "there is special something": "형용사는 something 뒤에 붙여요. something special이에요." },
        tip: { en: "It's something special.", why: "‘특별한 거야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너한테 해야 할 말이 있어.", answers: ["There is something I need to tell you.", "There is something I have to tell you.", "There is something I want to tell you."],
        dialog: { a: "Why do you look so serious?", aKo: "왜 그렇게 심각해?" },
        wrong: { "there is something i need to say you": "‘~에게 말하다’는 say가 아니라 tell이에요." },
        tip: { en: "We need to talk.", why: "‘우리 얘기 좀 해’라는 말이에요." } }
    ]
  };
})(window.EP);
