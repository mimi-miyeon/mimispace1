/* 세션 83. There isn't any ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[83] = {
    no: 83, form: "There isn't any ~.", stem: "There isn't any", meaning: "~(이)가 없어요.",
    hint: "There isn't any + 명사",
    intro: {
      blocks: [["There isn't", "~이 없다"], ["any ~", "조금도"]],
      lines: [
        "There isn't any ~는 ‘~이 하나도 없어’예요.",
        "셀 수 없는 것(milk, time)에 주로 써요. 여러 개는 There aren't any예요.",
        "부정문이라 some 대신 any를 써요."
      ],
      examples: [
        { en: "There isn't any milk.", ko: "우유가 하나도 없어." },
        { en: "There isn't any time.", ko: "시간이 하나도 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "물이 하나도 없어.", before: "There isn't", after: "water.", answers: ["any"],
        wrong: { "some": "부정문에서는 some이 아니라 any를 써요.", "no": "isn't와 no를 같이 쓰면 부정이 두 번이 돼요." },
        tip: { en: "We're out of water.", why: "be out of는 ‘~이 다 떨어지다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "커피 하나도 없어.", before: "There", after: "any coffee.", answers: ["isn't"],
        wrong: { "are not": "coffee는 셀 수 없는 말이라 isn't를 써요.", "do not": "‘~이 없어’는 There isn't예요." },
        tip: { en: "We ran out of coffee.", why: "run out of는 ‘~이 다 떨어지다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "남은 음식이 하나도 없어.", before: "There isn't any food", after: ".", answers: ["left"],
        wrong: { "leave": "‘남은’은 left예요." },
        tip: { en: "It's all gone.", why: "‘다 없어졌어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뜨거운 물이 하나도 없어.", before: "There isn't any hot", after: ".", answers: ["water"],
        wrong: { "waters": "water는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "The hot water isn't working.", why: "‘온수가 안 나와’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "희망이 없어.", before: "", after: "isn't any hope.", answers: ["There"],
        wrong: { "it": "‘~이 없어’는 It이 아니라 There isn't예요." },
        tip: { en: "It's hopeless.", why: "hopeless는 ‘가망 없는’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "설탕이 하나도 없어.", answers: ["There isn't any sugar."],
        wrong: { "there is not some sugar": "부정문에서는 some이 아니라 any를 써요.", "there are not any sugar": "sugar는 셀 수 없는 말이라 There isn't예요." },
        tip: { en: "We're out of sugar.", why: "be out of는 ‘~이 다 떨어지다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "냉장고에 음식이 하나도 없어.", answers: ["There isn't any food in the fridge."],
        wrong: { "there is not any foods in the fridge": "food는 보통 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "The fridge is empty.", why: "empty는 ‘텅 빈’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오늘 숙제가 하나도 없어.", answers: ["There isn't any homework today."],
        wrong: { "there is not any homeworks today": "homework는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "I have no homework today.", why: "have no로도 ‘~ 없어’라고 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "돈이 하나도 안 남았어.", answers: ["There isn't any money left."],
        wrong: { "there is not any money leave": "‘남은’은 left예요." },
        tip: { en: "I'm broke.", why: "broke는 ‘빈털터리인’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "휴지가 하나도 없어.", answers: ["There isn't any toilet paper."],
        ctx: { lead: "milk 대신 ‘휴지(toilet paper)’로 바꿔 보세요.", en: "There isn't any milk." },
        wrong: { "there is not any toilet papers": "toilet paper는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "We're out of toilet paper.", why: "be out of는 ‘~이 다 떨어지다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 얼음이 하나도 없어.", answers: ["Sorry, there isn't any ice.", "Sorry, there isn't any ice left."],
        dialog: { a: "Can I have some ice?", aKo: "얼음 좀 줄래?" },
        wrong: { "sorry there is not some ice": "부정문에서는 some이 아니라 any를 써요." },
        tip: { en: "Sorry, we're out of ice.", why: "be out of는 ‘~이 다 떨어지다’예요." } }
    ]
  };
})(window.EP);
