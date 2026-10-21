/* 세션 98. It seems that ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[98] = {
    no: 98, form: "It seems that ~.", stem: "It seems that/It seems like", meaning: "~인 것 같아요.",
    hint: "It seems that + 주어 + 동사",
    intro: {
      blocks: [["It seems", "~인 것 같다"], ["that ~", "주어 + 동사"]],
      lines: [
        "It seems that + 주어 + 동사는 ‘~인 것 같아’예요. 상황을 보고 판단할 때 써요.",
        "that 뒤에는 ‘주어 + 동사’가 완전하게 와요.",
        "말할 때는 It seems like ~도 많이 써요."
      ],
      examples: [
        { en: "It seems that he's busy.", ko: "걔 바쁜 것 같아." },
        { en: "It seems that we're late.", ko: "우리 늦은 것 같아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "비가 올 것 같아.", before: "It seems", after: "it's going to rain.", answers: ["that", "like"],
        wrong: { "what": "‘~인 것 같아’는 It seems that이에요." },
        tip: { en: "It looks like rain.", why: "look like rain은 ‘비 올 것 같다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "아무도 집에 없는 것 같아.", before: "It seems that", after: "is home.", answers: ["nobody"],
        wrong: { "anybody": "‘아무도 없다’는 nobody예요." },
        tip: { en: "No one's home.", why: "no one도 ‘아무도 ~ 않다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그녀가 마음을 바꾼 것 같아.", before: "It seems that she", after: "her mind.", answers: ["changed"],
        wrong: { "change": "지난 일이라 changed를 써요." },
        tip: { en: "She's had a change of heart.", why: "change of heart는 ‘마음이 바뀜’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그게 효과가 있는 것 같아.", before: "It seems that it", after: ".", answers: ["works"],
        wrong: { "work": "it 뒤에는 동사에 s를 붙여요. works예요." },
        tip: { en: "It's working.", why: "‘효과 있어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 길을 잃은 것 같아.", before: "It", after: "that we're lost.", answers: ["seems"],
        wrong: { "seem": "It 뒤에는 동사에 s를 붙여요. seems예요." },
        tip: { en: "I think we're lost.", why: "I think로 말해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그가 아픈 것 같아.", answers: ["It seems that he's sick.", "It seems like he's sick.", "It seems that he is sick."],
        wrong: { "it seems that he sick": "sick 앞에 is가 필요해요. he's sick이에요.", "it seem that he is sick": "It 뒤에는 동사에 s를 붙여요. seems예요." },
        tip: { en: "He doesn't look well.", why: "‘몸이 안 좋아 보여’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "가게가 문 닫은 것 같아.", answers: ["It seems that the store is closed.", "It seems like the store is closed.", "It seems that the shop is closed."],
        wrong: { "it seems that the store closed": "‘문 닫은 상태’는 is closed예요." },
        tip: { en: "The store looks closed.", why: "look도 ‘~해 보이다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "다들 좋아하는 것 같아.", answers: ["It seems that everyone likes it.", "It seems like everyone likes it.", "It seems that everybody likes it."],
        wrong: { "it seems that everyone like it": "everyone 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "It's a big hit.", why: "hit은 ‘인기 작품’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "우리 너무 일찍 온 것 같아.", answers: ["It seems that we came too early.", "It seems like we came too early.", "It seems that we're too early."],
        wrong: { "it seems that we come too early": "지난 일이라 came을 써요." },
        tip: { en: "We're early.", why: "‘우리 일찍 왔네’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그녀가 화난 것 같아.", answers: ["It seems that she's angry.", "It seems like she's angry.", "It seems that she's upset."],
        ctx: { lead: "he's busy 대신 ‘그녀가 화났다(she's angry)’로 바꿔 보세요.", en: "It seems that he's busy." },
        wrong: { "it seems that she angry": "angry 앞에 is가 필요해요. she's angry예요." },
        tip: { en: "She looks mad.", why: "mad는 ‘화난’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "버스를 놓친 것 같아.", answers: ["It seems that I missed the bus.", "It seems like I missed the bus."],
        dialog: { a: "Why are you still here?", aKo: "왜 아직 여기 있어?" },
        wrong: { "it seems that i miss the bus": "지난 일이라 missed를 써요." },
        tip: { en: "I think I missed the bus.", why: "I think로 말해도 돼요." } }
    ]
  };
})(window.EP);
