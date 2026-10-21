/* 세션 94. It's the only way to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[94] = {
    no: 94, form: "It's the only way to ~.", stem: "It's the only way to", meaning: "~하려면 이 방법뿐이에요.",
    hint: "It's the only way to + 동사",
    intro: {
      blocks: [["It's the only way", "유일한 방법이다"], ["to ~", "~하는"]],
      lines: [
        "It's the only way to ~는 ‘~하려면 이 방법밖에 없어’예요.",
        "only way는 ‘유일한 방법’이에요. 앞에 꼭 the를 붙여요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "It's the only way to learn.", ko: "그게 배우는 유일한 방법이야." },
        { en: "It's the only way to get there.", ko: "거기 가는 방법은 그것뿐이야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그게 이기는 유일한 방법이야.", before: "It's the only way", after: "win.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "There's no other way to win.", why: "no other way는 ‘다른 방법이 없다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그게 확인하는 유일한 방법이야.", before: "It's the only way to", after: ".", answers: ["check", "know"],
        wrong: { "checking": "to 뒤에는 동사 원래 모양 check를 써요." },
        tip: { en: "We have to check.", why: "‘확인해야 해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그게 유일한 방법이야.", before: "It's the only", after: ".", answers: ["way"],
        wrong: { "ways": "the only 뒤에는 way 하나만 써요.", "road": "‘방법’은 road가 아니라 way예요." },
        tip: { en: "There's no other way.", why: "no other way는 ‘다른 방법이 없다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그게 돈 버는 유일한 방법이야.", before: "It's the only way to make", after: ".", answers: ["money"],
        wrong: { "moneys": "money는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "You have to work for money.", why: "‘돈은 일해야 벌어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그게 그걸 고치는 유일한 방법이야.", before: "It's", after: "only way to fix it.", answers: ["the"],
        wrong: { "a": "‘유일한’ 방법은 하나뿐이라 a가 아니라 the를 써요." },
        tip: { en: "That's how we fix it.", why: "That's how는 ‘그렇게 하는 거야’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그게 살 빼는 유일한 방법이야.", answers: ["It's the only way to lose weight."],
        wrong: { "it is a only way to lose weight": "‘유일한’ 방법은 하나뿐이라 the를 써요.", "it is the only way to losing weight": "to 뒤에는 동사 원래 모양 lose를 써요." },
        tip: { en: "That's the only way to lose weight.", why: "That's로 시작해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그게 시간 아끼는 유일한 방법이야.", answers: ["It's the only way to save time."],
        wrong: { "it is the only way to saving time": "to 뒤에는 동사 원래 모양 save를 써요." },
        tip: { en: "It's the fastest way.", why: "‘그게 제일 빠른 방법이야’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그게 영어 실력을 늘리는 유일한 방법이야.", answers: ["It's the only way to improve your English.", "It's the only way to get better at English.", "It's the only way to improve my English."],
        wrong: { "it is the only way to improving your english": "to 뒤에는 동사 원래 모양 improve를 써요." },
        tip: { en: "Practice is the key.", why: "key는 ‘비결’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그게 그 사람을 만나는 유일한 방법이야.", answers: ["It's the only way to meet him.", "It's the only way to see him.", "It's the only way to meet her."],
        wrong: { "it is the only way meet him": "way 뒤에 to를 붙여요. way to meet이에요." },
        tip: { en: "That's my only chance to meet him.", why: "chance는 ‘기회’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그게 살아남는 유일한 방법이야.", answers: ["It's the only way to survive."],
        ctx: { lead: "learn 대신 ‘살아남다(survive)’로 바꿔 보세요.", en: "It's the only way to learn." },
        wrong: { "it is the only way to surviving": "to 뒤에는 동사 원래 모양 survive를 써요." },
        tip: { en: "We have no other choice.", why: "choice는 ‘선택’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그게 시험에 붙는 유일한 방법이야.", answers: ["It's the only way to pass the test.", "It's the only way to pass the exam."],
        dialog: { a: "Why do you study every day?", aKo: "왜 매일 공부해?" },
        wrong: { "it is the only way to passing the test": "to 뒤에는 동사 원래 모양 pass를 써요." },
        tip: { en: "I really want to pass.", why: "‘정말 붙고 싶어’라는 말이에요." } }
    ]
  };
})(window.EP);
