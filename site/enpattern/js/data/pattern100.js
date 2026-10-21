/* 세션 100. It's ~er than it seems. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[100] = {
    no: 100, form: "It's ~er than it seems.", stem: "than it seems/than it looks", meaning: "보기보다 더 ~해요.",
    hint: "It's + 비교급 + than it seems",
    intro: {
      blocks: [["It's ~er", "더 ~하다"], ["than it seems", "보기보다"]],
      lines: [
        "It's + 비교급 + than it seems는 ‘보기보다 더 ~해’예요.",
        "짧은 형용사는 er를 붙여요. (hard → harder) 긴 형용사는 앞에 more를 붙여요. (more difficult)",
        "than it looks도 같은 뜻이에요."
      ],
      examples: [
        { en: "It's harder than it seems.", ko: "보기보다 어려워." },
        { en: "It's easier than it seems.", ko: "보기보다 쉬워." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "보기보다 무거워.", before: "It's", after: "than it seems.", answers: ["heavier"],
        wrong: { "heavy": "‘더 무거운’은 비교급 heavier예요.", "more heavy": "heavy는 y를 i로 바꿔 heavier예요." },
        tip: { en: "It's heavy.", why: "‘무거워’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "보기보다 멀어.", before: "It's farther", after: "it seems.", answers: ["than"],
        wrong: { "then": "‘~보다’는 then이 아니라 than이에요." },
        tip: { en: "It's a long way.", why: "‘먼 길이야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "보기보다 복잡해.", before: "It's", after: "complicated than it seems.", answers: ["more"],
        wrong: { "much": "긴 형용사의 비교급은 앞에 more를 붙여요." },
        tip: { en: "It's not that simple.", why: "‘그렇게 간단하지 않아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "보기보다 싸.", before: "It's cheaper than it", after: ".", answers: ["seems", "looks"],
        wrong: { "seem": "it 뒤에는 동사에 s를 붙여요. seems예요." },
        tip: { en: "It's a good deal.", why: "deal은 ‘거래’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "보기보다 쉬워.", before: "It's", after: "than it seems.", answers: ["easier"],
        wrong: { "easyer": "easy는 y를 i로 바꿔 easier예요.", "more easy": "easy의 비교급은 easier예요." },
        tip: { en: "It's not that hard.", why: "‘그렇게 어렵지 않아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "보기보다 어려워.", answers: ["It's harder than it seems.", "It's more difficult than it seems.", "It's harder than it looks.", "It's more difficult than it looks."],
        wrong: { "it is hard than it seems": "‘더 어려운’은 비교급 harder예요.", "it is harder then it seems": "‘~보다’는 then이 아니라 than이에요." },
        tip: { en: "It's not as easy as it looks.", why: "not as ~ as는 ‘~만큼 ~하지 않다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "보기보다 커.", answers: ["It's bigger than it seems.", "It's bigger than it looks.", "It's larger than it seems."],
        wrong: { "it is biger than it seems": "big은 g를 하나 더 붙여 bigger예요.", "it is more big than it seems": "big의 비교급은 bigger예요." },
        tip: { en: "It's huge.", why: "huge는 ‘거대한’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "보기보다 맛있어.", answers: ["It's better than it seems.", "It's better than it looks.", "It's tastier than it looks.", "It's tastier than it seems."],
        wrong: { "it is gooder than it looks": "good의 비교급은 better예요.", "it is more good than it looks": "good의 비교급은 better예요." },
        tip: { en: "Don't judge it by its looks.", why: "‘겉모습으로 판단하지 마’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "보기보다 위험해.", answers: ["It's more dangerous than it seems.", "It's more dangerous than it looks."],
        wrong: { "it is dangerouser than it seems": "긴 형용사는 앞에 more를 붙여요.", "it is dangerous than it seems": "‘더 위험한’은 more dangerous예요." },
        tip: { en: "Be careful.", why: "‘조심해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "보기보다 재밌어.", answers: ["It's more fun than it seems.", "It's more fun than it looks."],
        ctx: { lead: "harder 대신 ‘더 재밌는(more fun)’으로 바꿔 보세요.", en: "It's harder than it seems." },
        wrong: { "it is fun than it seems": "‘더 재밌는’은 more fun이에요." },
        tip: { en: "You'll love it.", why: "‘너 좋아할 거야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 보기보다 깊어.", answers: ["No, it's deeper than it seems.", "No, it's deeper than it looks."],
        dialog: { a: "Is the water shallow?", aKo: "물 얕아?" },
        wrong: { "no it is deep than it seems": "‘더 깊은’은 비교급 deeper예요." },
        tip: { en: "No, be careful.", why: "‘아니, 조심해’라는 말이에요." } }
    ]
  };
})(window.EP);
