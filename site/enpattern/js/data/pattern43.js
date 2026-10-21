/* 세션 43. I'm glad that ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[43] = {
    no: 43, form: "I'm glad that ~.", stem: "I'm glad that", meaning: "나는 ~해서 기뻐요.",
    hint: "I'm glad (that) + 주어 + 동사",
    intro: {
      blocks: [["I'm glad", "나는 기쁘다"], ["that", "~해서"], ["~", "주어 + 동사"]],
      lines: [
        "I'm glad that ~는 ‘~해서 기뻐 / 다행이야’예요.",
        "that 뒤에는 ‘주어 + 동사’로 문장을 써요. (that you came)",
        "말할 때는 that을 자주 빼요. (I'm glad you came)"
      ],
      examples: [
        { en: "I'm glad that you came.", ko: "네가 와서 기뻐." },
        { en: "I'm glad that you like it.", ko: "네가 좋아하니 기뻐." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네가 괜찮아서 다행이야.", before: "I'm glad", after: "you're okay.", answers: ["that"],
        wrong: { "to": "‘주어 + 동사’ 앞에는 to가 아니라 that을 써요.", "for": "‘주어 + 동사’ 앞에는 for가 아니라 that을 써요." },
        tip: { en: "What a relief.", why: "‘휴, 다행이다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 전화해 줘서 기뻐.", before: "I'm glad that you", after: ".", answers: ["called"],
        wrong: { "call": "지난 일이라 과거형 called를 써요.", "calling": "that 뒤에는 ‘주어 + 동사’예요. 지난 일이라 called를 써요." },
        tip: { en: "Thanks for calling.", why: "‘전화해 줘서 고마워’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "다 잘돼서 다행이야.", before: "I'm glad that everything", after: "out well.", answers: ["worked"],
        wrong: { "work": "지난 일이라 과거형 worked를 써요." },
        tip: { en: "All's well that ends well.", why: "‘끝이 좋으면 다 좋아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리가 만나서 기뻐.", before: "I'm", after: "that we met.", answers: ["glad", "happy"],
        wrong: { "good": "‘기뻐’는 good이 아니라 glad예요." },
        tip: { en: "Meeting you was the best.", why: "‘너를 만난 게 최고였어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 여기 있어서 기뻐.", before: "", after: "glad that you're here.", answers: ["I'm"],
        wrong: { "i": "‘기뻐’는 I 뒤에 am을 붙여 I'm glad예요." },
        tip: { en: "It's great to have you here.", why: "have you here는 ‘네가 여기 있다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네가 그 일 구해서 기뻐.", answers: ["I'm glad that you got the job."], alts: ["I'm glad you got the job."],
        wrong: { "i am glad that you get the job": "지난 일이라 과거형 got을 써요.", "i am glad to you got the job": "‘주어 + 동사’ 앞에는 to가 아니라 that을 써요." },
        tip: { en: "Congratulations on the job!", why: "‘취업 축하해!’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "비가 그쳐서 다행이야.", answers: ["I'm glad that it stopped raining.", "I'm glad that the rain stopped."], alts: ["I'm glad it stopped raining.", "I'm glad the rain stopped."],
        wrong: { "i am glad that it stop raining": "지난 일이라 과거형 stopped를 써요." },
        tip: { en: "Finally, the rain stopped.", why: "finally는 ‘드디어’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네가 즐거웠다니 기뻐.", answers: ["I'm glad that you had fun.", "I'm glad that you enjoyed it."], alts: ["I'm glad you had fun.", "I'm glad you enjoyed it."],
        wrong: { "i am glad that you have fun": "지난 일이라 과거형 had를 써요.", "i am glad that you enjoyed": "enjoy 뒤에는 무엇을 즐겼는지 it 같은 말을 붙여요." },
        tip: { en: "I'm happy you had a good time.", why: "have a good time은 ‘즐겁게 보내다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "우리가 일찍 출발해서 다행이야.", answers: ["I'm glad that we left early."], alts: ["I'm glad we left early."],
        wrong: { "i am glad that we leave early": "지난 일이라 과거형 left를 써요." },
        tip: { en: "Good thing we left early.", why: "Good thing은 ‘~해서 다행이다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 무사해서 다행이야.", answers: ["I'm glad that you're safe."], alts: ["I'm glad you're safe."],
        ctx: { lead: "you came 대신 ‘네가 안전하다(you're safe)’로 바꿔 보세요.", en: "I'm glad that you came." },
        wrong: { "i am glad that you safe": "safe는 ‘안전한’이라 앞에 are를 붙여요. you're safe예요." },
        tip: { en: "Thank goodness you're safe.", why: "Thank goodness는 ‘정말 다행이다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네가 붙어서 기뻐.", answers: ["I'm glad that you passed.", "I'm glad that you passed the test."], alts: ["I'm glad you passed.", "I'm glad you passed the test."],
        dialog: { a: "I passed the test!", aKo: "나 시험 붙었어!" },
        wrong: { "i am glad that you pass": "지난 일이라 과거형 passed를 써요." },
        tip: { en: "Congratulations!", why: "‘축하해!’라는 말이에요." } }
    ]
  };
})(window.EP);
