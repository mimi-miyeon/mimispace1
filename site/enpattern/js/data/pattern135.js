/* 세션 135. There is no doubt ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[135] = {
    no: 135, form: "There is no doubt ~.", stem: "There's no doubt/There is no doubt", meaning: "~인 것은 의심할 바가 없어요.",
    hint: "There is no doubt that + 주어 + 동사",
    intro: {
      blocks: [["There's no doubt", "의심의 여지가 없다"], ["that ~", "~라는 데"]],
      lines: [
        "There is no doubt (that) ~은 ‘~인 건 확실해 / 틀림없어’예요.",
        "that 뒤에는 ‘주어 + 동사’를 써요. 말할 때는 that을 빼기도 해요.",
        "No doubt.만 써도 ‘물론이지’라는 뜻이에요."
      ],
      examples: [
        { en: "There's no doubt that she's talented.", ko: "그녀가 재능 있는 건 확실해." },
        { en: "There's no doubt about it.", ko: "그건 의심할 여지가 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그건 의심할 여지가 없어.", before: "There's no doubt", after: "it.", answers: ["about"],
        wrong: { "of": "‘~에 대해 의심이 없다’는 no doubt about이에요." },
        tip: { en: "I'm sure of it.", why: "‘확신해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그가 최고인 건 확실해.", before: "There's no doubt", after: "he's the best.", answers: ["that"],
        wrong: { "what": "‘~라는 것’은 that이에요." },
        tip: { en: "He's the best, for sure.", why: "for sure는 ‘확실히’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리가 이길 건 틀림없어.", before: "There's no", after: "that we'll win.", answers: ["doubt"],
        wrong: { "doubts": "no 뒤에 doubt 하나로 써요." },
        tip: { en: "We've got this.", why: "‘우리가 해낼 거야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그녀가 옳은 건 확실해.", before: "There's no doubt that she's", after: ".", answers: ["right"],
        wrong: { "rightly": "‘옳은’은 right예요." },
        tip: { en: "She's definitely right.", why: "definitely는 ‘분명히’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그가 거짓말한 건 틀림없어.", before: "There's no doubt that he", after: ".", answers: ["lied"],
        wrong: { "lie": "지난 일이라 lied를 써요.", "lay": "‘거짓말했다’는 lied예요." },
        tip: { en: "He was lying.", why: "‘거짓말하고 있었어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그녀가 재능 있는 건 확실해.", answers: ["There's no doubt that she's talented.", "There's no doubt she's talented."],
        wrong: { "there is no doubt that she talented": "talented 앞에 is가 필요해요. she's talented예요.", "there is not doubt that she is talented": "명사 앞에서는 not이 아니라 no를 써요." },
        tip: { en: "She's so gifted.", why: "gifted는 ‘타고난 재능이 있는’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이게 최선의 방법인 건 확실해.", answers: ["There's no doubt that this is the best way.", "There's no doubt this is the best way."],
        wrong: { "there is no doubt that this is best way": "best 앞에 the를 붙여요." },
        tip: { en: "This is the way to go.", why: "the way to go는 ‘가장 좋은 방법’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그가 열심히 일하는 건 확실해.", answers: ["There's no doubt that he works hard.", "There's no doubt he works hard."],
        wrong: { "there is no doubt that he work hard": "he 뒤에는 동사에 s를 붙여요. works예요." },
        tip: { en: "He's a hard worker.", why: "‘일 열심히 하는 사람이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "비가 올 건 틀림없어.", answers: ["There's no doubt that it'll rain.", "There's no doubt that it's going to rain.", "There's no doubt it'll rain."],
        wrong: { "there is no doubt that it will rains": "will 뒤에는 동사 원래 모양 rain을 써요." },
        tip: { en: "Look at those clouds.", why: "‘저 구름 좀 봐’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그녀가 너를 좋아하는 건 확실해.", answers: ["There's no doubt that she likes you.", "There's no doubt she likes you."],
        ctx: { lead: "she's talented 대신 ‘그녀가 너를 좋아한다(she likes you)’로 바꿔 보세요.", en: "There's no doubt that she's talented." },
        wrong: { "there is no doubt that she like you": "she 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "She's into you.", why: "be into는 ‘~에게 빠져 있다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 그게 사실인 건 확실해.", answers: ["Yes, there's no doubt that it's true.", "Yes, there's no doubt about it.", "Yeah, there's no doubt that it's true."],
        dialog: { a: "Are you sure it's true?", aKo: "그거 진짜 확실해?" },
        wrong: { "yes there is no doubt that it true": "true 앞에 is가 필요해요. it's true예요." },
        tip: { en: "Yes, I saw it myself.", why: "‘응, 내가 직접 봤어’라는 말이에요." } }
    ]
  };
})(window.EP);
