/* 세션 64. Don't be afraid of ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[64] = {
    no: 64, form: "Don't be afraid of ~.", stem: "Don't be afraid of", meaning: "~을 두려워하지 마세요.",
    hint: "Don't be afraid of + 명사/동사-ing",
    intro: {
      blocks: [["Don't be afraid", "두려워하지 마"], ["of ~", "~을"]],
      lines: [
        "Don't be afraid of ~는 ‘~을 두려워하지 마’예요.",
        "of 뒤에는 명사(mistakes)나 동사-ing(trying)를 써요.",
        "하려는 일을 겁내지 말라고 할 때는 Don't be afraid to + 동사도 써요."
      ],
      examples: [
        { en: "Don't be afraid of mistakes.", ko: "실수를 두려워하지 마." },
        { en: "Don't be afraid of dogs.", ko: "개 무서워하지 마." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "변화를 두려워하지 마.", before: "Don't be afraid", after: "change.", answers: ["of"],
        wrong: { "to": "명사 앞에는 to가 아니라 of를 써요.", "for": "‘~을 두려워하다’는 afraid of예요." },
        tip: { en: "Change can be good.", why: "‘변화는 좋은 걸 수도 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "실패를 두려워하지 마.", before: "Don't be afraid of", after: ".", answers: ["failure", "failing"],
        wrong: { "fail": "of 뒤에는 명사나 동사-ing를 써요. failing이에요." },
        tip: { en: "It's okay to fail.", why: "‘실패해도 괜찮아’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "질문하는 걸 두려워하지 마.", before: "Don't be afraid of", after: "questions.", answers: ["asking"],
        wrong: { "ask": "of 뒤에는 동사에 ing를 붙여요. asking이에요." },
        tip: { en: "Feel free to ask.", why: "Feel free to는 ‘편하게 ~해’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 무서워하지 마.", before: "Don't be", after: "of me.", answers: ["afraid", "scared"],
        wrong: { "fear": "fear는 ‘두려움’이에요. ‘두려워하는’은 afraid예요." },
        tip: { en: "I won't hurt you.", why: "‘해치지 않을게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어둠을 무서워하지 마.", before: "", after: "be afraid of the dark.", answers: ["Don't"],
        wrong: { "not": "‘~하지 마’는 Not이 아니라 Don't로 시작해요." },
        tip: { en: "There's nothing there.", why: "‘거기 아무것도 없어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "새로운 걸 해 보는 걸 두려워하지 마.", answers: ["Don't be afraid of trying new things."], alts: ["Don't be afraid to try new things."],
        wrong: { "do not be afraid of try new things": "of 뒤에는 동사에 ing를 붙여요. trying이에요.", "do not afraid of trying new things": "afraid 앞에 be를 넣어요. Don't be afraid예요." },
        tip: { en: "Go ahead and try new things.", why: "go ahead는 ‘어서 해 봐’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "높은 곳 무서워하지 마.", answers: ["Don't be afraid of heights."],
        wrong: { "do not be afraid of height": "‘높은 곳’은 보통 heights로 써요." },
        tip: { en: "Don't look down.", why: "‘아래 보지 마’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 사람 무서워하지 마. 착해.", answers: ["Don't be afraid of him. He's nice.", "Don't be afraid of him. He's kind."],
        wrong: { "do not be afraid of he he is nice": "of 뒤에는 he가 아니라 him을 써요." },
        tip: { en: "He's harmless.", why: "harmless는 ‘해롭지 않은’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "남들과 다른 걸 두려워하지 마.", answers: ["Don't be afraid of being different."],
        wrong: { "do not be afraid of be different": "of 뒤에는 동사에 ing를 붙여요. being이에요." },
        tip: { en: "Be yourself.", why: "‘너답게 해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "물 무서워하지 마.", answers: ["Don't be afraid of the water.", "Don't be afraid of water."],
        ctx: { lead: "dogs 대신 ‘물(water)’로 바꿔 보세요.", en: "Don't be afraid of dogs." },
        wrong: { "do not be afraid of waters": "water는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "The water isn't deep.", why: "‘물 안 깊어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "거절당하는 걸 두려워하지 마.", answers: ["Don't be afraid of rejection.", "Don't be afraid of being rejected."],
        dialog: { a: "I want to ask her out, but I'm scared.", aKo: "걔한테 데이트 신청하고 싶은데 무서워." },
        wrong: { "do not be afraid of reject": "of 뒤에는 명사나 동사-ing를 써요." },
        tip: { en: "Just go for it!", why: "go for it은 ‘한번 해 봐’예요." } }
    ]
  };
})(window.EP);
