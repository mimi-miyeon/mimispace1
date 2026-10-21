/* 세션 131. There is no time to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[131] = {
    no: 131, form: "There is no time to ~.", stem: "There's no time to/There is no time to", meaning: "~할 시간이 없어요.",
    hint: "There is no time to + 동사",
    intro: {
      blocks: [["There's no time", "시간이 없다"], ["to ~", "~할"]],
      lines: [
        "There is no time to + 동사는 ‘~할 시간이 없어’예요. 말할 때는 There's로 줄여요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "급할 때 There's no time to waste.(낭비할 시간 없어)라고 해요."
      ],
      examples: [
        { en: "There's no time to lose.", ko: "지체할 시간이 없어." },
        { en: "There's no time to explain.", ko: "설명할 시간 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "설명할 시간 없어.", before: "There's no time to", after: ".", answers: ["explain"],
        wrong: { "explaining": "to 뒤에는 동사 원래 모양 explain을 써요." },
        tip: { en: "Just trust me.", why: "‘그냥 날 믿어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "쉴 시간 없어.", before: "There's no time", after: "rest.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Keep going.", why: "‘계속 가’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "낭비할 시간 없어.", before: "There's no", after: "to waste.", answers: ["time"],
        wrong: { "times": "‘시간’은 셀 수 없는 말이라 time이에요." },
        tip: { en: "Let's move.", why: "‘움직이자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "밥 먹을 시간 없어.", before: "There's", after: "time to eat.", answers: ["no"],
        wrong: { "not": "명사 앞에서는 not이 아니라 no를 써요." },
        tip: { en: "I'll grab something later.", why: "grab은 ‘간단히 먹다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "생각할 시간 없어.", before: "", after: "no time to think.", answers: ["There's"],
        wrong: { "it is": "‘~할 시간이 없어’는 There's no time이에요." },
        tip: { en: "Just decide.", why: "‘그냥 정해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "기다릴 시간 없어.", answers: ["There's no time to wait.", "There is no time to wait."],
        wrong: { "there is no time to waiting": "to 뒤에는 동사 원래 모양 wait를 써요.", "there is not time to wait": "명사 앞에서는 not이 아니라 no를 써요." },
        tip: { en: "We have to go now.", why: "‘지금 가야 해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "옷 갈아입을 시간 없어.", answers: ["There's no time to change.", "There's no time to change clothes.", "There's no time to get changed."],
        wrong: { "there is no time for change": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Just go as you are.", why: "‘그냥 그대로 가’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "다시 할 시간 없어.", answers: ["There's no time to do it again.", "There's no time to redo it."],
        wrong: { "there is no time to doing it again": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "This is our only chance.", why: "‘이게 유일한 기회야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "걱정할 시간 없어.", answers: ["There's no time to worry."],
        wrong: { "there is no time to worrying": "to 뒤에는 동사 원래 모양 worry를 써요." },
        tip: { en: "Focus on the task.", why: "task는 ‘해야 할 일’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "싸울 시간 없어.", answers: ["There's no time to fight.", "There's no time to argue."],
        ctx: { lead: "explain 대신 ‘싸우다(fight)’로 바꿔 보세요.", en: "There's no time to explain." },
        wrong: { "there is no time to fighting": "to 뒤에는 동사 원래 모양 fight를 써요." },
        tip: { en: "Let's work together.", why: "‘힘을 합치자’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 얘기할 시간 없어.", answers: ["Sorry, there's no time to talk.", "Sorry, there's no time to chat."],
        dialog: { a: "Do you have a minute?", aKo: "잠깐 시간 돼?" },
        wrong: { "sorry there is no time to talking": "to 뒤에는 동사 원래 모양 talk를 써요." },
        tip: { en: "Sorry, I'm in a rush.", why: "in a rush는 ‘급한’이에요." } }
    ]
  };
})(window.EP);
