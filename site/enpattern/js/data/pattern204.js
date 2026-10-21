/* 세션 204. I should have ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[204] = {
    no: 204, form: "I should have ~.", stem: "I should have", meaning: "난 ~했어야 했어요.",
    hint: "I should have + 과거분사",
    intro: {
      blocks: [["I should have", "나는 ~했어야 했다"], ["~(p.p.)", "과거분사"]],
      lines: [
        "I should have + 과거분사는 ‘~했어야 했는데 (안 했어)’예요. 후회를 말해요.",
        "말할 때는 I should've로 줄여요. (슈드브)",
        "‘~하지 말았어야 했는데’는 I shouldn't have + 과거분사예요."
      ],
      examples: [
        { en: "I should have known.", ko: "알았어야 했는데." },
        { en: "I should have left earlier.", ko: "더 일찍 나왔어야 했는데." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "알았어야 했는데.", before: "I should have", after: ".", answers: ["known"],
        wrong: { "knew": "have 뒤에는 knew가 아니라 known을 써요.", "know": "have 뒤에는 과거분사 known을 써요." },
        tip: { en: "I had no idea.", why: "‘전혀 몰랐어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "더 일찍 나왔어야 했는데.", before: "I should have", after: "earlier.", answers: ["left"],
        wrong: { "leave": "have 뒤에는 과거분사 left를 써요.", "leaved": "leave의 과거분사는 left예요." },
        tip: { en: "I'm running late.", why: "‘늦어지고 있어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너한테 말했어야 했는데.", before: "I should", after: "told you.", answers: ["have"],
        wrong: { "of": "should 뒤에는 have를 써요. of가 아니에요.", "has": "should 뒤에는 have를 써요." },
        tip: { en: "I'm sorry I didn't tell you.", why: "‘말 안 해서 미안해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "더 열심히 공부했어야 했는데.", before: "I should have", after: "harder.", answers: ["studied"],
        wrong: { "study": "have 뒤에는 과거분사 studied를 써요.", "studyed": "study는 y를 i로 바꿔 studied예요." },
        tip: { en: "I'll do better next time.", why: "‘다음엔 더 잘할게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 말 하지 말았어야 했는데.", before: "I", after: "have said that.", answers: ["shouldn't"],
        wrong: { "do not": "‘~하지 말았어야 했는데’는 shouldn't have예요." },
        tip: { en: "I take it back.", why: "take back은 ‘말을 취소하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너한테 전화했어야 했는데.", answers: ["I should have called you."],
        wrong: { "i should have call you": "have 뒤에는 과거분사 called를 써요.", "i should of called you": "should 뒤에는 have를 써요. of가 아니에요." },
        tip: { en: "Sorry I didn't call.", why: "‘전화 못 해서 미안’이라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우산 가져왔어야 했는데.", answers: ["I should have brought an umbrella.", "I should have brought my umbrella."],
        wrong: { "i should have bringed an umbrella": "bring의 과거분사는 brought예요.", "i should have brought a umbrella": "umbrella 앞에는 an을 붙여요." },
        tip: { en: "I'm soaked.", why: "soaked는 ‘흠뻑 젖은’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 샀어야 했는데.", answers: ["I should have bought it.", "I should have bought that."],
        wrong: { "i should have buyed it": "buy의 과거분사는 bought예요." },
        tip: { en: "It's sold out now.", why: "‘이제 매진이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "일찍 잤어야 했는데.", answers: ["I should have gone to bed early.", "I should have gone to bed earlier.", "I should have slept early."],
        wrong: { "i should have went to bed early": "have 뒤에는 went가 아니라 gone을 써요." },
        tip: { en: "I'm so tired.", why: "‘너무 피곤해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "물어봤어야 했는데.", answers: ["I should have asked.", "I should have asked you."],
        ctx: { lead: "known 대신 ‘물어본(asked)’으로 바꿔 보세요.", en: "I should have known." },
        wrong: { "i should have ask": "have 뒤에는 과거분사 asked를 써요." },
        tip: { en: "Next time, I'll ask.", why: "‘다음엔 물어볼게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 너 말 들었어야 했는데.", answers: ["Yes, I should have listened to you.", "Yeah, I should have listened to you.", "I should have listened to you."],
        dialog: { a: "I told you it was a bad idea.", aKo: "그거 안 좋은 생각이라고 했잖아." },
        wrong: { "yes i should have listen to you": "have 뒤에는 과거분사 listened를 써요." },
        tip: { en: "You were right.", why: "‘네 말이 맞았어’라는 말이에요." } }
    ]
  };
})(window.EP);
