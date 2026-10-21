/* 세션 84. There is/are no ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[84] = {
    no: 84, form: "There is/are no ~.", stem: "There is no/There are no", meaning: "~(이)가 없어요.",
    hint: "There is/are no + 명사",
    intro: {
      blocks: [["There is / are", "~이 있다"], ["no ~", "하나도 없는"]],
      lines: [
        "There is no ~ / There are no ~는 ‘~이 없어’예요. 83번 There isn't any와 같은 뜻이에요.",
        "no 한 단어로 부정해요. 그래서 isn't와 같이 쓰지 않아요.",
        "하나 또는 셀 수 없는 것은 There is no, 여러 개는 There are no예요."
      ],
      examples: [
        { en: "There is no time.", ko: "시간이 없어." },
        { en: "There are no seats.", ko: "자리가 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "문제없어.", before: "There is", after: "problem.", answers: ["no"],
        wrong: { "not": "명사 앞에서 부정할 때는 not이 아니라 no를 써요.", "any": "any를 쓰려면 There isn't any예요. 여기는 no예요." },
        tip: { en: "No problem.", why: "‘문제없어’라는 짧은 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "남은 표가 없어.", before: "There are no tickets", after: ".", answers: ["left"],
        wrong: { "leave": "‘남은’은 left예요." },
        tip: { en: "It's sold out.", why: "sold out은 ‘매진된’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "버스가 없어.", before: "There", after: "no buses.", answers: ["are"],
        wrong: { "is": "여러 개(buses)는 There are예요." },
        tip: { en: "The buses have stopped.", why: "‘버스가 끊겼어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "와이파이가 없어.", before: "There is no", after: ".", answers: ["wifi", "Wi-Fi"],
        tip: { en: "We don't have Wi-Fi here.", why: "‘여기 와이파이 없어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "다른 방법이 없어.", before: "There is no other", after: ".", answers: ["way"],
        wrong: { "ways": "no other 뒤에 way 하나만 써요." },
        tip: { en: "This is the only way.", why: "‘이게 유일한 방법이야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "여기 아무도 없어.", answers: ["There is no one here."], alts: ["There is nobody here."],
        wrong: { "there are no one here": "no one은 한 명으로 봐서 There is예요." },
        tip: { en: "Nobody's here.", why: "Nobody's는 Nobody is를 줄인 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "오늘 수업 없어.", answers: ["There is no class today.", "There are no classes today."],
        wrong: { "there is not class today": "명사 앞에서 부정할 때는 not이 아니라 no를 써요." },
        tip: { en: "We have no class today.", why: "have no로도 ‘~ 없어’라고 말해요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "서두를 필요 없어.", answers: ["There is no need to hurry.", "There is no need to rush."],
        wrong: { "there is no need hurry": "need 뒤에 to를 붙여요. no need to hurry예요." },
        tip: { en: "Take your time.", why: "‘천천히 해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그런 건 없어.", answers: ["There is no such thing."],
        wrong: { "there is no such a thing": "no such 뒤에는 a를 붙이지 않아요." },
        tip: { en: "That doesn't exist.", why: "exist는 ‘존재하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "창문이 없어.", answers: ["There are no windows."],
        ctx: { lead: "seats 대신 ‘창문(windows)’으로 바꿔 보세요.", en: "There are no seats." },
        wrong: { "there is no windows": "여러 개(windows)는 There are예요." },
        tip: { en: "The room has no windows.", why: "has no로도 ‘~ 없어’라고 말해요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 여기 콘센트가 없어.", answers: ["Sorry, there is no outlet here.", "Sorry, there are no outlets here.", "Sorry, there is no plug here."],
        dialog: { a: "Can I use your charger?", aKo: "네 충전기 써도 돼?" },
        wrong: { "sorry there is not outlet here": "명사 앞에서 부정할 때는 not이 아니라 no를 써요." },
        tip: { en: "Sorry, I can't find an outlet.", why: "outlet은 ‘콘센트’예요." } }
    ]
  };
})(window.EP);
