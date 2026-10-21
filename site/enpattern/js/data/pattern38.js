/* 세션 38. I wasn't ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[38] = {
    no: 38, form: "I wasn't ~ing.", stem: "I wasn't", meaning: "나는 ~하고 있지 않았어요.",
    hint: "I wasn't + 동사-ing",
    intro: {
      blocks: [["I wasn't", "나는 ~가 아니었다"], ["~ing", "~하고 있는"]],
      lines: [
        "I wasn't + 동사-ing는 ‘~하고 있지 않았어 / ~하던 게 아니야’예요.",
        "오해를 풀 때 자주 써요. (I wasn't laughing at you: 너 보고 웃은 거 아니야)",
        "didn't가 아니라 wasn't예요. (I didn't sleeping ×)"
      ],
      examples: [
        { en: "I wasn't sleeping.", ko: "나 자고 있던 거 아니야." },
        { en: "I wasn't listening.", ko: "나 안 듣고 있었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 너 비웃은 거 아니야.", before: "I", after: "laughing at you.", answers: ["wasn't"],
        wrong: { "did not": "‘~하던 게 아니야’는 didn't가 아니라 wasn't를 써요.", "am not": "지난 일이라 wasn't를 써요.", "were not": "weren't는 you, we, they와 써요. I 뒤에는 wasn't예요." },
        tip: { en: "I wasn't making fun of you.", why: "make fun of는 ‘놀리다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 거짓말하던 거 아니야.", before: "I wasn't", after: ".", answers: ["lying"],
        wrong: { "lie": "wasn't 뒤에는 동사에 ing를 붙여요. lying이에요.", "lieing": "lie는 ie를 y로 바꿔 lying이에요." },
        tip: { en: "I was telling the truth.", why: "‘나 사실대로 말했어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그때 일 안 하고 있었어.", before: "I wasn't", after: "then.", answers: ["working"],
        wrong: { "work": "wasn't 뒤에는 동사에 ing를 붙여요. working이에요." },
        tip: { en: "I was off then.", why: "be off는 ‘쉬는 날이다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 너 따라가던 거 아니야.", before: "I", after: "following you.", answers: ["wasn't"],
        wrong: { "did not": "‘~하던 게 아니야’는 didn't가 아니라 wasn't를 써요.", "am not": "지난 일이라 wasn't를 써요." },
        tip: { en: "It was just a coincidence.", why: "coincidence는 ‘우연’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 집중 안 하고 있었어.", before: "I wasn't", after: "attention.", answers: ["paying"],
        wrong: { "pay": "wasn't 뒤에는 동사에 ing를 붙여요. paying이에요." },
        tip: { en: "My mind was somewhere else.", why: "‘딴생각하고 있었어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 너 무시하던 거 아니야.", answers: ["I wasn't ignoring you."],
        wrong: { "i did not ignoring you": "‘~하던 게 아니야’는 didn't가 아니라 wasn't를 써요.", "i was not ignore you": "wasn't 뒤에는 동사에 ing를 붙여요. ignoring이에요." },
        tip: { en: "I didn't mean to ignore you.", why: "‘무시하려던 건 아니었어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 네 얘기 하던 거 아니야.", answers: ["I wasn't talking about you."],
        wrong: { "i was not talking about your": "‘너에 대해’는 about you예요.", "i did not talking about you": "‘~하던 게 아니야’는 didn't가 아니라 wasn't를 써요." },
        tip: { en: "It wasn't about you.", why: "‘너에 관한 게 아니었어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그때 운전하고 있지 않았어.", answers: ["I wasn't driving then.", "I wasn't driving at the time."],
        wrong: { "i was not drive then": "wasn't 뒤에는 동사에 ing를 붙여요. driving이에요." },
        tip: { en: "Someone else was driving.", why: "‘다른 사람이 운전하고 있었어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 진지하게 말한 거 아니야.", answers: ["I wasn't being serious."], alts: ["I wasn't serious."],
        wrong: { "i did not being serious": "‘~하던 게 아니야’는 didn't가 아니라 wasn't를 써요." },
        tip: { en: "I was just kidding.", why: "‘그냥 농담이었어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 TV 안 보고 있었어.", answers: ["I wasn't watching TV."],
        ctx: { lead: "‘~하고 있지 않았어’로 바꿔 보세요.", en: "I was watching TV." },
        wrong: { "i did not watching tv": "‘~하고 있지 않았어’는 didn't가 아니라 wasn't를 써요.", "i was not watch tv": "wasn't 뒤에는 동사에 ing를 붙여요. watching이에요." },
        tip: { en: "The TV was just on.", why: "‘TV는 그냥 켜져 있었어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 안 울고 있었어.", answers: ["No, I wasn't crying.", "No, I wasn't."],
        dialog: { a: "Were you crying?", aKo: "너 울고 있었어?" },
        wrong: { "no i did not crying": "‘~하고 있지 않았어’는 didn't가 아니라 wasn't를 써요.", "no i was not cry": "wasn't 뒤에는 동사에 ing를 붙여요. crying이에요." },
        tip: { en: "No, something got in my eye.", why: "‘눈에 뭐가 들어갔어’라는 핑계예요." } }
    ]
  };
})(window.EP);
