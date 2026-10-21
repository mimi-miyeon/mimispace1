/* 세션 155. When was the last time ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[155] = {
    no: 155, form: "When was the last time ~?", stem: "When was the last time", meaning: "마지막으로 ~한 게 언제예요?",
    hint: "When was the last time + 주어 + 동사(과거형)?",
    intro: {
      blocks: [["When was the last time", "마지막이 언제였니"], ["~?", "주어 + 과거 동사"]],
      lines: [
        "When was the last time + 주어 + 과거 동사?는 ‘마지막으로 ~한 게 언제야?’예요.",
        "time 뒤에는 ‘주어 + 과거 동사’를 써요. (you saw, you ate)",
        "오랜만인 일을 물을 때 써요."
      ],
      examples: [
        { en: "When was the last time you saw him?", ko: "마지막으로 걔 본 게 언제야?" },
        { en: "When was the last time you ate?", ko: "마지막으로 먹은 게 언제야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "마지막으로 걔 본 게 언제야?", before: "When was the last time you", after: "him?", answers: ["saw"],
        wrong: { "see": "지난 일이라 saw를 써요.", "seen": "you 뒤에는 saw를 써요." },
        tip: { en: "Have you seen him lately?", why: "lately는 ‘최근에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "마지막으로 먹은 게 언제야?", before: "When was the last time you", after: "?", answers: ["ate"],
        wrong: { "eat": "지난 일이라 ate를 써요.", "eated": "eat의 과거는 ate예요." },
        tip: { en: "You must be hungry.", why: "‘배고프겠다’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "마지막으로 휴가 간 게 언제야?", before: "When was the last", after: "you took a vacation?", answers: ["time"],
        wrong: { "day": "‘마지막으로 ~한 때’는 the last time이에요." },
        tip: { en: "You need a break.", why: "‘너 쉬어야 해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "마지막으로 운동한 게 언제야?", before: "When", after: "the last time you worked out?", answers: ["was"],
        wrong: { "is": "지난 일이라 was를 써요." },
        tip: { en: "Let's go to the gym.", why: "‘헬스장 가자’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "마지막으로 울었던 게 언제야?", before: "When was the last time you", after: "?", answers: ["cried"],
        wrong: { "cry": "지난 일이라 cried를 써요.", "cryed": "cry는 y를 i로 바꿔 cried예요." },
        tip: { en: "I can't remember.", why: "‘기억도 안 나’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "마지막으로 부모님께 전화한 게 언제야?", answers: ["When was the last time you called your parents?"],
        wrong: { "when was the last time you call your parents": "지난 일이라 called를 써요.", "when is the last time you called your parents": "지난 일이라 was를 써요." },
        tip: { en: "Call your mom.", why: "‘엄마한테 전화해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "마지막으로 책 읽은 게 언제야?", answers: ["When was the last time you read a book?"],
        wrong: { "when was the last time you readed a book": "read의 과거는 그대로 read예요." },
        tip: { en: "Read any good books lately?", why: "‘요즘 좋은 책 읽었어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "마지막으로 푹 잔 게 언제야?", answers: ["When was the last time you slept well?", "When was the last time you got a good night's sleep?"],
        wrong: { "when was the last time you sleeped well": "sleep의 과거는 slept예요." },
        tip: { en: "You look exhausted.", why: "exhausted는 ‘지친’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "마지막으로 병원 간 게 언제야?", answers: ["When was the last time you saw a doctor?", "When was the last time you went to the doctor?", "When was the last time you went to the hospital?"],
        wrong: { "when was the last time you go to the doctor": "지난 일이라 went를 써요." },
        tip: { en: "Get a checkup.", why: "checkup은 ‘건강 검진’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "마지막으로 걔랑 얘기한 게 언제야?", answers: ["When was the last time you talked to him?", "When was the last time you talked to her?", "When was the last time you spoke to him?"],
        ctx: { lead: "saw him 대신 ‘걔랑 얘기했다(talked to him)’로 바꿔 보세요.", en: "When was the last time you saw him?" },
        wrong: { "when was the last time you talk to him": "지난 일이라 talked를 써요." },
        tip: { en: "Have you heard from him?", why: "hear from은 ‘~에게서 연락 받다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "마지막으로 거기 간 게 언제야?", answers: ["When was the last time you went there?", "When was the last time you were there?"],
        dialog: { a: "I miss my hometown.", aKo: "고향이 그리워." },
        wrong: { "when was the last time you go there": "지난 일이라 went를 써요." },
        tip: { en: "Has it changed a lot?", why: "‘많이 변했어?’라는 말이에요." } }
    ]
  };
})(window.EP);
