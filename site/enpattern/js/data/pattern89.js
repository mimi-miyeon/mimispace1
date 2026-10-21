/* 세션 89. This/That is not ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[89] = {
    no: 89, form: "This/That is not ~.", stem: "This isn't/That isn't", meaning: "이것은/저것은 ~하지 않아요.",
    hint: "This/That isn't + 형용사",
    intro: {
      blocks: [["This / That", "이것 / 저것은"], ["isn't", "~하지 않다"], ["~", "형용사"]],
      lines: [
        "This isn't ~는 ‘이거 ~하지 않아’, That isn't ~는 ‘그거 ~하지 않아’예요.",
        "is not을 줄여 isn't라고 해요. That's not ~도 같은 말이에요.",
        "형용사를 부정할 때는 don't가 아니라 isn't예요."
      ],
      examples: [
        { en: "This isn't fair.", ko: "이건 불공평해." },
        { en: "That isn't true.", ko: "그건 사실이 아니야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이거 안 맵다.", before: "This", after: "spicy.", answers: ["isn't"],
        wrong: { "do not": "형용사를 부정할 때는 don't가 아니라 isn't를 써요.", "does not": "형용사를 부정할 때는 doesn't가 아니라 isn't를 써요.", "not": "is 뒤에 not을 붙여 isn't예요." },
        tip: { en: "This is mild.", why: "mild는 ‘순한’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 별로 안 좋아.", before: "That isn't very", after: ".", answers: ["good"],
        wrong: { "well": "‘좋은’은 well이 아니라 good이에요." },
        tip: { en: "That's not great.", why: "not great은 ‘별로’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 내 거 아니야.", before: "This isn't", after: ".", answers: ["mine"],
        wrong: { "my": "‘내 것’은 my가 아니라 mine이에요.", "me": "‘내 것’은 me가 아니라 mine이에요." },
        tip: { en: "This belongs to someone else.", why: "belong to는 ‘~의 것이다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그거 쉽지 않아.", before: "", after: "isn't easy.", answers: ["That", "It"],
        wrong: { "there": "‘그건’은 There가 아니라 That이에요." },
        tip: { en: "That's tough.", why: "tough는 ‘힘든’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이거 안 비싸.", before: "This isn't", after: ".", answers: ["expensive"],
        wrong: { "expensively": "‘비싼’은 expensive예요." },
        tip: { en: "This is cheap.", why: "cheap은 ‘싼’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이건 내 잘못 아니야.", answers: ["This isn't my fault.", "That isn't my fault."],
        wrong: { "this does not my fault": "‘~이 아니야’는 doesn't가 아니라 isn't예요." },
        tip: { en: "It's not my fault.", why: "It's not으로 말해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 안 웃겨.", answers: ["That isn't funny."],
        wrong: { "that does not funny": "형용사를 부정할 때는 doesn't가 아니라 isn't를 써요." },
        tip: { en: "Not funny.", why: "‘안 웃겨’라는 짧은 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이거 안 무거워.", answers: ["This isn't heavy."],
        wrong: { "this does not heavy": "형용사를 부정할 때는 doesn't가 아니라 isn't를 써요." },
        tip: { en: "This is light.", why: "light는 ‘가벼운’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그건 중요하지 않아.", answers: ["That isn't important."],
        wrong: { "that is not importance": "importance는 ‘중요성’이에요. ‘중요한’은 important예요." },
        tip: { en: "That doesn't matter.", why: "matter는 ‘중요하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이건 옳지 않아.", answers: ["This isn't right."],
        ctx: { lead: "fair 대신 ‘옳은(right)’으로 바꿔 보세요.", en: "This isn't fair." },
        wrong: { "this does not right": "형용사를 부정할 때는 doesn't가 아니라 isn't를 써요." },
        tip: { en: "This is wrong.", why: "‘이건 잘못됐어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 그거 내 거 아니야.", answers: ["No, that isn't mine.", "No, this isn't mine.", "No, that isn't my phone."],
        dialog: { a: "Is this your phone?", aKo: "이거 네 폰이야?" },
        wrong: { "no that is not my": "‘내 것’은 my가 아니라 mine이에요." },
        tip: { en: "No, mine is black.", why: "‘아니, 내 건 검은색이야’라는 말이에요." } }
    ]
  };
})(window.EP);
