/* 세션 143. I doubt if ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[143] = {
    no: 143, form: "I doubt if ~.", stem: "I doubt if/I doubt", meaning: "~하는지 의심스러워요.",
    hint: "I doubt if + 주어 + 동사",
    intro: {
      blocks: [["I doubt", "나는 의심한다"], ["if ~", "~인지"]],
      lines: [
        "I doubt if + 주어 + 동사는 ‘~일지 모르겠어 / ~ 안 할 것 같아’예요.",
        "doubt는 ‘의심하다’예요. b는 소리 내지 않아요. (다웃)",
        "I doubt it.만 쓰면 ‘글쎄, 아닐걸’이에요."
      ],
      examples: [
        { en: "I doubt if he'll come.", ko: "걔가 올지 모르겠어." },
        { en: "I doubt if it's true.", ko: "그게 사실인지 의심스러워." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "걔가 올지 모르겠어.", before: "I doubt", after: "he'll come.", answers: ["if"],
        wrong: { "that if": "‘~인지’는 if예요." },
        tip: { en: "He probably won't come.", why: "probably는 ‘아마’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그게 사실인지 의심스러워.", before: "I", after: "if it's true.", answers: ["doubt"],
        wrong: { "doubts": "I 뒤에는 동사에 s를 붙이지 않아요.", "think": "‘의심스러워’는 doubt예요." },
        tip: { en: "That sounds fishy.", why: "fishy는 ‘수상한’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그녀가 기억할지 모르겠어.", before: "I doubt if she'll", after: ".", answers: ["remember"],
        wrong: { "remembers": "will 뒤에는 동사 원래 모양 remember를 써요." },
        tip: { en: "She forgets everything.", why: "‘걔 다 잊어버려’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그게 효과 있을지 모르겠어.", before: "I doubt if it'll", after: ".", answers: ["work"],
        wrong: { "works": "will 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "It's worth a try.", why: "‘해 볼 만은 해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "글쎄, 아닐걸.", before: "I doubt", after: ".", answers: ["it"],
        wrong: { "that": "‘글쎄, 아닐걸’은 I doubt it이에요." },
        tip: { en: "I don't think so.", why: "‘그런 것 같지 않아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "우리가 제시간에 도착할지 모르겠어.", answers: ["I doubt if we'll make it on time.", "I doubt if we'll get there on time.", "I doubt if we'll arrive on time."],
        wrong: { "i doubt if we will made it on time": "will 뒤에는 동사 원래 모양 make를 써요.", "i doubt if we will make it in time on": "‘제시간에’는 on time이에요." },
        tip: { en: "We should hurry.", why: "‘서둘러야겠어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그가 날 믿을지 모르겠어.", answers: ["I doubt if he'll believe me.", "I doubt if he believes me."],
        wrong: { "i doubt if he will believes me": "will 뒤에는 동사 원래 모양 believe를 써요." },
        tip: { en: "He never trusts me.", why: "‘걔는 절대 날 안 믿어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 가게가 아직 있을지 모르겠어.", answers: ["I doubt if the store is still there.", "I doubt if the shop is still there.", "I doubt if that store is still there."],
        wrong: { "i doubt if the store still there": "still 앞에 is가 필요해요." },
        tip: { en: "It was years ago.", why: "‘몇 년 전이었잖아’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그녀가 그걸 좋아할지 모르겠어.", answers: ["I doubt if she'll like it.", "I doubt if she likes it."],
        wrong: { "i doubt if she will likes it": "will 뒤에는 동사 원래 모양 like를 써요." },
        tip: { en: "She's picky.", why: "picky는 ‘까다로운’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그가 사과할지 모르겠어.", answers: ["I doubt if he'll apologize.", "I doubt if he'll say sorry."],
        ctx: { lead: "come 대신 ‘사과하다(apologize)’로 바꿔 보세요.", en: "I doubt if he'll come." },
        wrong: { "i doubt if he will apologizes": "will 뒤에는 동사 원래 모양 apologize를 써요." },
        tip: { en: "He's too proud.", why: "proud는 ‘자존심 센’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "글쎄, 표가 남아 있을지 모르겠어.", answers: ["Well, I doubt if there are any tickets left.", "I doubt if there are any tickets left.", "I doubt if there are tickets left."],
        dialog: { a: "Can we still get tickets for tonight?", aKo: "오늘 밤 표 아직 살 수 있을까?" },
        wrong: { "well i doubt if there is any tickets left": "tickets는 여러 개라 there are예요." },
        tip: { en: "It's sold out, probably.", why: "sold out은 ‘매진된’이에요." } }
    ]
  };
})(window.EP);
