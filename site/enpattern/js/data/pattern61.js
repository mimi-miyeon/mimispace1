/* 세션 61. Be ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[61] = {
    no: 61, form: "Be ~.", stem: "Be", meaning: "~하세요.",
    hint: "Be + 형용사",
    intro: {
      blocks: [["Be", "~해, ~하게 있어"], ["~", "형용사"]],
      lines: [
        "Be + 형용사는 ‘~해 / ~하게 있어’라고 부탁하거나 조언하는 말이에요.",
        "주어 없이 Be로 바로 시작해요. (Be careful.)",
        "부드럽게 하려면 앞이나 뒤에 please를 붙여요."
      ],
      examples: [
        { en: "Be careful.", ko: "조심해." },
        { en: "Be quiet, please.", ko: "조용히 해 줘." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "솔직하게 말해.", before: "", after: "honest.", answers: ["Be"],
        wrong: { "is": "부탁하는 말은 주어 없이 Be로 시작해요.", "are": "부탁하는 말은 주어 없이 Be로 시작해요." },
        tip: { en: "Tell me the truth.", why: "‘사실대로 말해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "착하게 굴어.", before: "Be", after: ".", answers: ["nice", "good", "kind"],
        wrong: { "nicely": "Be 뒤에는 형용사 nice를 써요." },
        tip: { en: "Play nice.", why: "‘사이좋게 지내’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "제시간에 와.", before: "Be on", after: ".", answers: ["time"],
        wrong: { "the time": "‘제시간에’는 on time이에요." },
        tip: { en: "Don't be late.", why: "‘늦지 마’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "참을성 있게 기다려.", before: "Be", after: ".", answers: ["patient"],
        wrong: { "patience": "patience는 ‘인내심’이에요. ‘참을성 있는’은 patient예요." },
        tip: { en: "Hang in there.", why: "‘조금만 참아’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "자신감을 가져.", before: "", after: "confident.", answers: ["Be"],
        wrong: { "have": "‘자신감 있게 해’는 Be confident예요." },
        tip: { en: "Believe in yourself.", why: "‘너 자신을 믿어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "운전 조심해.", answers: ["Be careful when you drive.", "Be careful on the road.", "Be careful driving."], alts: ["Drive carefully.", "Drive safely."],
        wrong: { "be carefully when you drive": "Be 뒤에는 형용사 careful을 써요." },
        tip: { en: "Drive safe.", why: "‘안전 운전해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "걔한테 잘해 줘.", answers: ["Be nice to her.", "Be kind to her.", "Be nice to him.", "Be kind to him."],
        wrong: { "be nice for her": "‘~에게 잘하다’는 nice to예요.", "is nice to her": "부탁하는 말은 주어 없이 Be로 시작해요." },
        tip: { en: "Treat her well.", why: "treat well은 ‘잘 대해 주다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "진지하게 좀 해.", answers: ["Be serious.", "Be serious, please."],
        wrong: { "be seriously": "Be 뒤에는 형용사 serious를 써요." },
        tip: { en: "Stop joking around.", why: "joke around는 ‘장난치다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "현실적으로 생각해.", answers: ["Be realistic."],
        wrong: { "be reality": "reality는 ‘현실’이에요. ‘현실적인’은 realistic이에요." },
        tip: { en: "Think about it realistically.", why: "realistically는 ‘현실적으로’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "준비하고 있어.", answers: ["Be ready."],
        ctx: { lead: "careful 대신 ‘준비된(ready)’으로 바꿔 보세요.", en: "Be careful." },
        wrong: { "be prepare": "prepare는 ‘준비하다’라는 동사예요. ‘준비된’은 ready예요." },
        tip: { en: "Get ready.", why: "‘준비해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋겠다! 조심해.", answers: ["Nice! Be careful.", "Sounds fun! Be careful.", "Be careful."],
        dialog: { a: "I'm going hiking tomorrow.", aKo: "나 내일 등산 가." },
        wrong: { "nice be carefully": "Be 뒤에는 형용사 careful을 써요." },
        tip: { en: "Have fun and stay safe!", why: "stay safe는 ‘안전하게 지내’예요." } }
    ]
  };
})(window.EP);
