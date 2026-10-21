/* 세션 96. It seems ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[96] = {
    no: 96, form: "It seems ~.", stem: "It seems/It seemed", meaning: "~인 것 같아요.",
    hint: "It seems + 형용사",
    intro: {
      blocks: [["It seems", "~인 것 같다"], ["~", "형용사"]],
      lines: [
        "It seems + 형용사는 ‘~인 것 같아 / ~해 보여’예요. 보고 느낀 인상을 말해요.",
        "seems는 seem에 s가 붙은 모양이에요. It 뒤라서 s를 붙여요.",
        "지난 일은 It seemed ~(~인 것 같았어)예요."
      ],
      examples: [
        { en: "It seems easy.", ko: "쉬워 보여." },
        { en: "It seems strange.", ko: "이상한 것 같아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "괜찮은 것 같아.", before: "It", after: "fine.", answers: ["seems"],
        wrong: { "seem": "It 뒤에는 동사에 s를 붙여요. seems예요.", "is seem": "is와 seems를 같이 쓰지 않아요. It seems예요." },
        tip: { en: "It looks fine.", why: "look도 ‘~해 보이다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "위험한 것 같아.", before: "It seems", after: ".", answers: ["dangerous"],
        wrong: { "danger": "danger는 ‘위험’이라는 명사예요. ‘위험한’은 dangerous예요." },
        tip: { en: "It looks risky.", why: "risky는 ‘위험한’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너무 비싼 것 같아.", before: "It seems too", after: ".", answers: ["expensive"],
        wrong: { "expensively": "‘비싼’은 expensive예요." },
        tip: { en: "It's a bit pricey.", why: "pricey는 ‘값비싼’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "공평한 것 같아.", before: "It seems", after: ".", answers: ["fair"],
        wrong: { "fairly": "‘공평한’은 fair예요." },
        tip: { en: "Sounds fair.", why: "‘공평하네’를 짧게 말해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "조용한 것 같아.", before: "", after: "seems quiet.", answers: ["It"],
        wrong: { "i": "‘~인 것 같아’는 It seems예요." },
        tip: { en: "It's pretty quiet.", why: "pretty는 ‘꽤’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "좀 이상한 것 같아.", answers: ["It seems a little strange.", "It seems a bit strange.", "It seems a little weird.", "It seems a bit weird.", "It seems strange.", "It seems weird."],
        wrong: { "it seem strange": "It 뒤에는 동사에 s를 붙여요. seems예요.", "it is seems strange": "is와 seems를 같이 쓰지 않아요." },
        tip: { en: "Something's off.", why: "‘뭔가 이상해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어려운 것 같아.", answers: ["It seems difficult.", "It seems hard."],
        wrong: { "it seems difficultly": "‘어려운’은 difficult예요.", "it seem difficult": "It 뒤에는 동사에 s를 붙여요. seems예요." },
        tip: { en: "It looks tough.", why: "tough는 ‘힘든’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "완벽한 것 같아.", answers: ["It seems perfect."],
        wrong: { "it seem perfect": "It 뒤에는 동사에 s를 붙여요. seems예요." },
        tip: { en: "Looks perfect.", why: "‘완벽해 보여’를 짧게 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "중요한 것 같았어.", answers: ["It seemed important."],
        wrong: { "it seems important": "지난 일이라 seemed를 써요." },
        tip: { en: "It looked important.", why: "look의 과거 looked예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "복잡한 것 같아.", answers: ["It seems complicated."],
        ctx: { lead: "easy 대신 ‘복잡한(complicated)’으로 바꿔 보세요.", en: "It seems easy." },
        wrong: { "it seems complicate": "‘복잡한’은 complicated예요." },
        tip: { en: "It's not that simple.", why: "‘그렇게 간단하지 않아’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 좋은 것 같아.", answers: ["Yeah, it seems good.", "Yes, it seems good.", "Yeah, it seems nice.", "Yes, it seems nice."],
        dialog: { a: "What do you think of the new place?", aKo: "새 집 어떤 것 같아?" },
        wrong: { "yeah it seem good": "It 뒤에는 동사에 s를 붙여요. seems예요." },
        tip: { en: "Yeah, I like it.", why: "‘응, 마음에 들어’라는 말이에요." } }
    ]
  };
})(window.EP);
