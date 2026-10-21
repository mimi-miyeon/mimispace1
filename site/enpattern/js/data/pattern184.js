/* 세션 184. What about ~ing? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[184] = {
    no: 184, form: "What about ~ing?", stem: "What about", meaning: "~하는 건 어때요?",
    hint: "What about + 동사-ing?",
    intro: {
      blocks: [["What about", "~은 어때"], ["~ing?", "~하는 것"]],
      lines: [
        "What about + 동사-ing?는 ‘~하는 건 어때?’예요. How about과 거의 같아요.",
        "about 뒤에는 동사에 ing를 붙여요.",
        "What about은 다른 방법을 하나 더 제안할 때 자주 써요."
      ],
      examples: [
        { en: "What about going tomorrow?", ko: "내일 가는 건 어때?" },
        { en: "What about calling him?", ko: "그에게 전화하는 건 어때?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내일 가는 건 어때?", before: "What about", after: "tomorrow?", answers: ["going"],
        wrong: { "go": "about 뒤에는 동사에 ing를 붙여요. going이에요.", "to go": "about 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Tomorrow works for me.", why: "work는 ‘괜찮다’라는 뜻도 있어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그에게 전화하는 건 어때?", before: "What about", after: "him?", answers: ["calling"],
        wrong: { "call": "about 뒤에는 동사에 ing를 붙여요. calling이에요." },
        tip: { en: "Give him a call.", why: "give a call은 ‘전화하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "버스 타는 건 어때?", before: "What", after: "taking the bus?", answers: ["about"],
        wrong: { "for": "‘~하는 건 어때?’는 What about이에요." },
        tip: { en: "The bus is cheaper.", why: "‘버스가 더 싸’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "집에 있는 건 어때?", before: "What about", after: "home?", answers: ["staying"],
        wrong: { "stay": "about 뒤에는 동사에 ing를 붙여요. staying이에요." },
        tip: { en: "Let's stay in.", why: "stay in은 ‘집에 있다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "다른 걸 해 보는 건 어때?", before: "", after: "about trying something else?", answers: ["What"],
        wrong: { "how": "여기서는 What about이에요." },
        tip: { en: "Let's switch it up.", why: "switch it up은 ‘바꿔 보다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이메일 보내는 건 어때?", answers: ["What about sending an email?", "What about sending her an email?", "What about emailing her?"],
        wrong: { "what about send an email": "about 뒤에는 동사에 ing를 붙여요. sending이에요.", "what about sending a email": "email 앞에는 an을 붙여요." },
        tip: { en: "Just email them.", why: "‘그냥 이메일 보내’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 운전하는 건 어때?", answers: ["What about me driving?", "What about if I drive?"], alts: ["What about if I drive?"],
        wrong: { "what about i driving": "about 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "Let me drive.", why: "‘내가 운전할게’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "일찍 출발하는 건 어때?", answers: ["What about leaving early?", "What about starting early?"],
        wrong: { "what about leave early": "about 뒤에는 동사에 ing를 붙여요. leaving이에요." },
        tip: { en: "Let's beat the traffic.", why: "beat the traffic은 ‘차 막히기 전에 가다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가격을 낮추는 건 어때?", answers: ["What about lowering the price?", "What about cutting the price?"],
        wrong: { "what about lower the price": "about 뒤에는 동사에 ing를 붙여요. lowering이에요." },
        tip: { en: "It's too expensive.", why: "‘너무 비싸’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그녀에게 묻는 건 어때?", answers: ["What about asking her?"],
        ctx: { lead: "calling him 대신 ‘그녀에게 묻기(asking her)’로 바꿔 보세요.", en: "What about calling him?" },
        wrong: { "what about ask her": "about 뒤에는 동사에 ing를 붙여요. asking이에요." },
        tip: { en: "She knows everything.", why: "‘그녀는 다 알아’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 다음 주에 가는 건 어때?", answers: ["Then what about going next week?", "What about going next week?", "So what about going next week?"],
        dialog: { a: "I'm busy this week.", aKo: "나 이번 주 바빠." },
        wrong: { "then what about go next week": "about 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "Next week works.", why: "‘다음 주 괜찮아’라는 말이에요." } }
    ]
  };
})(window.EP);
