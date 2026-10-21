/* 세션 140. Never mind ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[140] = {
    no: 140, form: "Never mind ~.", stem: "Never mind", meaning: "~는 신경 쓰지 마세요.",
    hint: "Never mind + 동사-ing/that + 주어 + 동사",
    intro: {
      blocks: [["Never mind", "신경 쓰지 마"], ["~", "명사 / 동사-ing"]],
      lines: [
        "Never mind ~는 ‘~는 신경 쓰지 마 / 됐어’예요.",
        "Never mind.만 쓰면 ‘됐어, 신경 쓰지 마’예요.",
        "뒤에는 명사(the cost)나 동사-ing를 써요."
      ],
      examples: [
        { en: "Never mind.", ko: "됐어, 신경 쓰지 마." },
        { en: "Never mind the mess.", ko: "지저분한 건 신경 쓰지 마." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "됐어, 신경 쓰지 마.", before: "Never", after: ".", answers: ["mind"],
        wrong: { "minds": "‘신경 쓰지 마’는 Never mind예요." },
        tip: { en: "Forget it.", why: "‘잊어버려’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "지저분한 건 신경 쓰지 마.", before: "Never mind the", after: ".", answers: ["mess"],
        wrong: { "messy": "the 뒤에는 명사 mess를 써요." },
        tip: { en: "Excuse the mess.", why: "‘지저분해서 미안’이라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "비용은 신경 쓰지 마.", before: "Never mind the", after: ".", answers: ["cost", "price", "money"],
        tip: { en: "It's on me.", why: "‘내가 낼게’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 한 말은 신경 쓰지 마.", before: "Never mind", after: "I said.", answers: ["what"],
        wrong: { "that": "‘내가 한 말’은 what I said예요." },
        tip: { en: "I didn't mean it.", why: "‘진심 아니었어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그건 신경 쓰지 마.", before: "", after: "mind that.", answers: ["Never"],
        wrong: { "do not": "‘신경 쓰지 마’는 Never mind예요." },
        tip: { en: "Don't worry about it.", why: "‘걱정하지 마’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "날씨는 신경 쓰지 마.", answers: ["Never mind the weather."],
        wrong: { "never mind weather": "weather 앞에 the를 붙여요.", "do not mind the weather": "‘신경 쓰지 마’는 Never mind예요." },
        tip: { en: "We'll go anyway.", why: "‘어쨌든 갈 거야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 사람은 신경 쓰지 마.", answers: ["Never mind him.", "Never mind her."],
        wrong: { "never mind he": "mind 뒤에는 he가 아니라 him을 써요." },
        tip: { en: "Just ignore him.", why: "‘그냥 무시해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "됐어, 내가 할게.", answers: ["Never mind, I'll do it.", "Never mind. I'll do it."],
        wrong: { "never mind i do it": "‘내가 할게’는 I'll do it이에요." },
        tip: { en: "Forget it, I've got it.", why: "‘됐어, 내가 할게’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "됐어, 찾았어.", answers: ["Never mind, I found it.", "Never mind. I found it."],
        wrong: { "never mind i find it": "지난 일이라 found를 써요." },
        tip: { en: "Oh, here it is.", why: "‘아, 여기 있다’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "시간은 신경 쓰지 마.", answers: ["Never mind the time."],
        ctx: { lead: "the mess 대신 ‘시간(the time)’으로 바꿔 보세요.", en: "Never mind the mess." },
        wrong: { "never mind time": "time 앞에 the를 붙여요." },
        tip: { en: "We're not in a hurry.", why: "‘우리 안 급해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아, 됐어. 별거 아니야.", answers: ["Oh, never mind. It's nothing.", "Never mind. It's nothing.", "Oh, never mind. It's not important."],
        dialog: { a: "Sorry, what did you say?", aKo: "미안, 뭐라고 했어?" },
        wrong: { "oh never mind it is anything": "‘별거 아니야’는 It's nothing이에요." },
        tip: { en: "Forget I said anything.", why: "‘내가 한 말 잊어’라는 말이에요." } }
    ]
  };
})(window.EP);
