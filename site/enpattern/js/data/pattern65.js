/* 세션 65. Don't tell me ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[65] = {
    no: 65, form: "Don't tell me ~.", stem: "Don't tell me", meaning: "~라는 건 아니겠지요.",
    hint: "Don't tell me + 주어 + 동사",
    intro: {
      blocks: [["Don't tell me", "설마 ~라는 건 아니지"], ["~", "주어 + 동사"]],
      lines: [
        "Don't tell me ~는 ‘설마 ~라는 건 아니겠지?’예요. 안 좋은 일을 짐작하며 놀랄 때 써요.",
        "뒤에는 ‘주어 + 동사’ 문장을 써요. (Don't tell me you forgot.)",
        "글자 그대로 ‘말하지 마’라는 뜻이 아니에요."
      ],
      examples: [
        { en: "Don't tell me you forgot.", ko: "설마 잊어버린 건 아니지?" },
        { en: "Don't tell me it's broken.", ko: "설마 고장 난 건 아니지?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "설마 또 늦은 건 아니지?", before: "Don't tell", after: "you're late again.", answers: ["me"],
        wrong: { "i": "‘나에게’는 I가 아니라 me예요.", "my": "‘나에게’는 my가 아니라 me예요." },
        tip: { en: "Late again?", why: "‘또 늦었어?’라는 짧은 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "설마 우리 길 잃은 건 아니지?", before: "Don't tell me we're", after: ".", answers: ["lost"],
        wrong: { "lose": "‘길 잃은’은 lost예요." },
        tip: { en: "Are we lost?", why: "‘우리 길 잃었어?’라고 바로 물어도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "설마 걔가 그만둔 건 아니지?", before: "Don't tell me she", after: ".", answers: ["quit"],
        wrong: { "quitted": "quit의 과거형도 quit이에요." },
        tip: { en: "She didn't quit, did she?", why: "끝에 did she?를 붙여 확인해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "설마 그거 다 먹은 건 아니지?", before: "Don't tell me you", after: "it all.", answers: ["ate"],
        wrong: { "eat": "지난 일이라 과거형 ate을 써요.", "eaten": "have 없이 쓸 때는 과거형 ate을 써요." },
        tip: { en: "Is it all gone?", why: "‘다 없어졌어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "설마 그거 잃어버린 건 아니지?", before: "", after: "tell me you lost it.", answers: ["Don't"],
        wrong: { "not": "‘설마 ~는 아니지’는 Don't tell me예요." },
        tip: { en: "Where did you put it?", why: "‘어디 뒀어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "설마 아직 안 끝난 건 아니지?", answers: ["Don't tell me you're not done yet.", "Don't tell me you haven't finished yet.", "Don't tell me you're not finished yet."],
        wrong: { "do not tell me you are not done already": "부정문에서 ‘아직’은 yet이에요." },
        tip: { en: "You're not done yet?", why: "‘아직 안 끝났어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "설마 비 오는 건 아니지?", answers: ["Don't tell me it's raining.", "Don't tell me it's raining again."],
        wrong: { "do not tell me it raining": "it 뒤에 is가 필요해요. it's raining이에요." },
        tip: { en: "Is it raining?", why: "‘비 와?’라고 바로 물어도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "설마 그 사람 말 믿은 건 아니지?", answers: ["Don't tell me you believed him.", "Don't tell me you believed her."],
        wrong: { "do not tell me you believe him": "지난 일이라 과거형 believed를 써요." },
        tip: { en: "You didn't believe him, did you?", why: "끝에 did you?를 붙여 확인해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "설마 그거 다 산 건 아니지?", answers: ["Don't tell me you bought all of that.", "Don't tell me you bought it all.", "Don't tell me you bought all that."],
        wrong: { "do not tell me you buyed it all": "buy의 과거형은 bought예요." },
        tip: { en: "You bought all that?", why: "‘그거 다 샀어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "설마 그거 놓친 건 아니지?", answers: ["Don't tell me you missed it."],
        ctx: { lead: "forgot 대신 ‘놓쳤다(missed it)’로 바꿔 보세요.", en: "Don't tell me you forgot." },
        wrong: { "do not tell me you miss it": "지난 일이라 과거형 missed를 써요." },
        tip: { en: "You didn't miss it, did you?", why: "끝에 did you?를 붙여 확인해요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "설마 사고 낸 건 아니지?", answers: ["Don't tell me you crashed it.", "Don't tell me you had an accident.", "Don't tell me you crashed my car."],
        dialog: { a: "Um... about your car...", aKo: "음... 네 차 말인데..." },
        wrong: { "do not tell me you crash it": "지난 일이라 과거형 crashed를 써요." },
        tip: { en: "What happened to my car?", why: "‘내 차 어떻게 된 거야?’라는 말이에요." } }
    ]
  };
})(window.EP);
