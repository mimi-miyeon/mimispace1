/* 세션 19. I can't wait to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[19] = {
    no: 19, form: "I can't wait to ~.", stem: "I can't wait to", meaning: "~하고 싶어 죽겠어요.",
    hint: "I can't wait to + 동사",
    intro: {
      blocks: [["I can't wait", "못 기다리겠다"], ["to ~", "~하는 것을"]],
      lines: [
        "I can't wait to ~는 ‘빨리 ~하고 싶어’라는 설렘을 말해요.",
        "직역하면 ‘~하는 걸 못 기다리겠어’예요. 그만큼 기대된다는 뜻이에요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "I can't wait to see you.", ko: "빨리 너 보고 싶어." },
        { en: "I can't wait to go home.", ko: "빨리 집에 가고 싶어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "빨리 휴가 가고 싶어.", before: "I can't wait", after: "go on vacation.", answers: ["to"],
        wrong: { "for": "‘~하고 싶어’는 wait 뒤에 to + 동사예요. for 뒤에는 명사가 와요." },
        tip: { en: "I'm so excited for my vacation.", why: "excited for는 ‘~이 너무 기대돼’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "빨리 그 영화 보고 싶어.", before: "I can't", after: "to see that movie.", answers: ["wait"],
        wrong: { "waiting": "can't 뒤에는 동사 원래 모양 wait을 써요." },
        tip: { en: "I'm really looking forward to that movie.", why: "look forward to는 ‘~을 기대하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "빨리 결과 알고 싶어.", before: "I can't wait to", after: "the results.", answers: ["know", "see", "hear"],
        wrong: { "knowing": "to 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "I'm curious about the results.", why: "curious는 ‘궁금한’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "빨리 새 집으로 이사 가고 싶어.", before: "I can't wait to", after: "into my new house.", answers: ["move"],
        wrong: { "moving": "to 뒤에는 동사 원래 모양 move를 써요." },
        tip: { en: "I'm excited to move.", why: "excited to는 ‘~하게 돼서 신나’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "빨리 이 책 읽고 싶어.", before: "I", after: "wait to read this book.", answers: ["can't"],
        wrong: { "do not": "‘못 기다리겠어’는 don't가 아니라 can't wait예요.", "can": "‘빨리 ~하고 싶어’는 can이 아니라 can't wait to예요." },
        tip: { en: "I really want to read this book.", why: "‘이 책 정말 읽고 싶어’로 말해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "빨리 가족 만나고 싶어.", answers: ["I can't wait to see my family.", "I can't wait to meet my family."],
        wrong: { "i cannot wait see my family": "‘~하고 싶어’는 wait 뒤에 to를 붙여요.", "i cannot wait to seeing my family": "to 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "I miss my family so much.", why: "miss는 ‘보고 싶다, 그립다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "빨리 그거 먹어 보고 싶어.", answers: ["I can't wait to try it.", "I can't wait to eat it.", "I can't wait to try that.", "I can't wait to eat that."],
        wrong: { "i cannot wait to trying it": "to 뒤에는 동사 원래 모양 try를 써요." },
        tip: { en: "I'm dying to try it.", why: "be dying to는 ‘~하고 싶어 죽겠다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "빨리 여행 가고 싶어.", answers: ["I can't wait to travel.", "I can't wait to go traveling.", "I can't wait to go on a trip.", "I can't wait to take a trip."],
        wrong: { "i cannot wait to go to travel": "travel은 동사라서 go to 없이 travel이라고 써요." },
        tip: { en: "I'm so excited for the trip.", why: "excited for는 ‘~이 너무 기대돼’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "빨리 너한테 말해 주고 싶어.", answers: ["I can't wait to tell you.", "I can't wait to tell you about it."],
        wrong: { "i cannot wait to tell to you": "tell 뒤에는 to 없이 바로 사람을 써요." },
        tip: { en: "I'm dying to tell you.", why: "be dying to는 ‘~하고 싶어 죽겠다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "빨리 시작하고 싶어.", answers: ["I can't wait to start.", "I can't wait to begin.", "I can't wait to get started."],
        ctx: { lead: "see you 대신 ‘시작하다(start)’를 넣어 보세요.", en: "I can't wait to see you." },
        wrong: { "i cannot wait to starting": "to 뒤에는 동사 원래 모양 start를 써요." },
        tip: { en: "Let's get started!", why: "‘시작하자!’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "빨리 가고 싶어!", answers: ["I can't wait to go!", "I can't wait to go there!", "I can't wait to see it!"],
        dialog: { a: "The concert is next week!", aKo: "콘서트 다음 주야!" },
        wrong: { "i cannot wait for go": "‘~하고 싶어’는 wait 뒤에 to + 동사예요." },
        tip: { en: "I can't wait!", why: "뒤를 빼고 짧게 말해도 돼요." } }
    ]
  };
})(window.EP);
