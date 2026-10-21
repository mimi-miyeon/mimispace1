/* 세션 105. It's something like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[105] = {
    no: 105, form: "It's something like ~.", stem: "It's something like", meaning: "그건 ~같은 거예요.",
    hint: "It's something like + 명사/주어 + 동사",
    intro: {
      blocks: [["It's something", "그건 무언가다"], ["like ~", "~ 같은"]],
      lines: [
        "It's something like ~는 ‘~ 같은 거야 / 대충 ~ 정도야’예요.",
        "정확하지 않을 때 비슷한 걸 들어 설명해요.",
        "숫자 앞에 쓰면 ‘대략’이에요. (It's something like 20 dollars: 20달러쯤이야)"
      ],
      examples: [
        { en: "It's something like a game.", ko: "게임 같은 거야." },
        { en: "It's something like ten dollars.", ko: "10달러쯤이야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "파티 같은 거야.", before: "It's something like a", after: ".", answers: ["party"],
        wrong: { "parties": "a 뒤에는 하나만 써요. party예요." },
        tip: { en: "It's kind of a party.", why: "kind of는 ‘일종의’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "대략 한 시간쯤이야.", before: "It's", after: "like an hour.", answers: ["something"],
        wrong: { "some": "‘~ 같은 거’는 something like예요." },
        tip: { en: "About an hour.", why: "about은 ‘대략’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "스프 같은 거야.", before: "It's something", after: "soup.", answers: ["like"],
        wrong: { "as": "‘~ 같은’은 like예요." },
        tip: { en: "It's a kind of soup.", why: "a kind of는 ‘일종의’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "한 50명쯤이야.", before: "It's something like fifty", after: ".", answers: ["people"],
        wrong: { "peoples": "‘사람들’은 people이에요. s를 붙이지 않아요.", "person": "여러 명은 people이에요." },
        tip: { en: "Around fifty people.", why: "around는 ‘대략’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "대충 그런 거야.", before: "It's something like", after: ".", answers: ["that"],
        wrong: { "this": "앞에서 말한 것은 that을 써요." },
        tip: { en: "More or less.", why: "‘대략 그래’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "작은 카페 같은 거야.", answers: ["It's something like a small cafe.", "It's something like a little cafe."],
        wrong: { "it is something like small cafe": "cafe는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "It's a cozy little place.", why: "cozy는 ‘아늑한’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "한 20달러쯤이야.", answers: ["It's something like twenty dollars.", "It's something like 20 dollars."],
        wrong: { "it is something like twenty dollar": "여러 달러는 dollars예요." },
        tip: { en: "Around twenty bucks.", why: "buck은 ‘달러’를 편하게 부르는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "일기 같은 거야.", answers: ["It's something like a diary.", "It's something like a journal."],
        wrong: { "it is something like diary": "diary는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "It's kind of a diary.", why: "kind of는 ‘일종의’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "대략 3킬로미터쯤이야.", answers: ["It's something like three kilometers.", "It's something like 3 kilometers.", "It's something like three km."],
        wrong: { "it is something like three kilometer": "여러 킬로미터는 kilometers예요." },
        tip: { en: "It's not that far.", why: "‘그렇게 멀지 않아’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "퍼즐 같은 거야.", answers: ["It's something like a puzzle."],
        ctx: { lead: "a game 대신 ‘퍼즐(a puzzle)’로 바꿔 보세요.", en: "It's something like a game." },
        wrong: { "it is something like puzzle": "puzzle은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "It's a brain teaser.", why: "brain teaser는 ‘머리 쓰는 문제’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "음, 축제 같은 거야.", answers: ["Well, it's something like a festival.", "It's something like a festival."],
        dialog: { a: "What's Chuseok?", aKo: "추석이 뭐야?" },
        wrong: { "well it is something like festival": "festival은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "It's a big celebration.", why: "celebration은 ‘축하 행사’예요." } }
    ]
  };
})(window.EP);
