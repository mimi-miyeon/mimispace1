/* 세션 26. I must ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[26] = {
    no: 26, form: "I must ~.", stem: "I must", meaning: "나는 ~해야 해요.",
    hint: "I must + 동사",
    intro: {
      blocks: [["I", "나는"], ["must", "꼭 ~해야 한다"], ["~", "동사"]],
      lines: [
        "must는 ‘꼭 ~해야 해’예요. 스스로 강하게 다짐하거나 꼭 필요할 때 써요.",
        "must 뒤에는 동사 원래 모양을 써요. to는 붙이지 않아요.",
        "일상 대화에서는 have to를 더 자주 써요. must는 조금 단단한 느낌이에요."
      ],
      examples: [
        { en: "I must hurry.", ko: "나 서둘러야 해." },
        { en: "I must try harder.", ko: "나 더 노력해야 해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 이번엔 꼭 이겨야 해.", before: "I", after: "win this time.", answers: ["must"],
        wrong: { "must to": "must 뒤에는 to를 쓰지 않아요.", "am must": "must 앞에 am을 쓰지 않아요." },
        tip: { en: "I have to win this time.", why: "have to도 ‘~해야 해’예요. 더 자주 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 이거 꼭 기억해야 해.", before: "I must", after: "this.", answers: ["remember"],
        wrong: { "remembering": "must 뒤에는 동사 원래 모양 remember를 써요.", "to remember": "must 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I can't forget this.", why: "‘이거 잊으면 안 돼’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 오늘 이거 끝내야 해.", before: "I", after: "finish this today.", answers: ["must"],
        wrong: { "have": "have로 말하려면 have to finish처럼 to가 필요해요.", "must to": "must 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I have to get this done today.", why: "get ~ done은 ‘~을 끝내다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 담배 끊어야 해.", before: "I must", after: "smoking.", answers: ["quit", "stop"],
        wrong: { "quitting": "must 뒤에는 동사 원래 모양 quit을 써요." },
        tip: { en: "I need to quit smoking.", why: "need to도 ‘~해야 해’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 집중해야 해.", before: "I", after: "focus.", answers: ["must"],
        wrong: { "must to": "must 뒤에는 to를 쓰지 않아요.", "am": "‘~해야 해’는 am이 아니라 must예요." },
        tip: { en: "I need to concentrate.", why: "concentrate도 ‘집중하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 살 빼야 해.", answers: ["I must lose weight.", "I must lose some weight."],
        wrong: { "i must to lose weight": "must 뒤에는 to를 쓰지 않아요.", "i must losing weight": "must 뒤에는 동사 원래 모양 lose를 써요." },
        tip: { en: "I need to lose some weight.", why: "need to도 ‘~해야 해’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 더 열심히 공부해야 해.", answers: ["I must study harder.", "I must study more."],
        wrong: { "i must studying harder": "must 뒤에는 동사 원래 모양 study를 써요.", "i must study more hard": "‘더 열심히’는 more hard가 아니라 harder예요." },
        tip: { en: "I have to study harder.", why: "have to도 ‘~해야 해’예요. 더 자주 써요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 내일 일찍 일어나야 해.", answers: ["I must get up early tomorrow.", "I must wake up early tomorrow.", "Tomorrow I must get up early."],
        wrong: { "i must to get up early tomorrow": "must 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I have an early start tomorrow.", why: "‘내일 일찍 시작해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 엄마한테 전화해야 해.", answers: ["I must call my mom.", "I must call Mom.", "I must call my mother."],
        wrong: { "i must call to my mom": "call 뒤에는 to 없이 바로 사람을 써요.", "i must calls my mom": "must 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "I should call my mom.", why: "should는 ‘~하는 게 좋겠다’예요. 조금 부드러워요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 조심해야 해.", answers: ["I must be careful."],
        ctx: { lead: "hurry 대신 ‘조심하다(be careful)’로 바꿔 보세요.", en: "I must hurry." },
        wrong: { "i must careful": "careful은 ‘조심하는’이라 앞에 be를 붙여요.", "i must to be careful": "must 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I need to watch out.", why: "watch out은 ‘조심하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 지금 가야 해.", answers: ["Sorry, I must go now.", "Sorry, I must go.", "I'm sorry, I must go now.", "Sorry, I must leave now."],
        dialog: { a: "Stay a little longer.", aKo: "좀 더 있다 가." },
        wrong: { "sorry i must going now": "must 뒤에는 동사 원래 모양 go를 써요.", "sorry i must to go now": "must 뒤에는 to를 쓰지 않아요." },
        tip: { en: "Sorry, I have to go.", why: "have to도 ‘~해야 해’예요. 더 자주 써요." } }
    ]
  };
})(window.EP);
