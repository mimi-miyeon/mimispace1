/* 세션 68. I didn't have to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[68] = {
    no: 68, form: "I didn't have to ~.", stem: "I didn't have to", meaning: "난 ~하지 않아도 됐어요.",
    hint: "I didn't have to + 동사",
    intro: {
      blocks: [["I didn't have to", "~할 필요가 없었다"], ["~", "동사"]],
      lines: [
        "I didn't have to ~는 ‘~ 안 해도 됐어’예요. 할 필요가 없었던 지난 일을 말해요.",
        "don't have to(안 해도 돼)의 과거예요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "I didn't have to wait.", ko: "나 안 기다려도 됐어." },
        { en: "I didn't have to pay.", ko: "나 돈 안 내도 됐어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 일찍 안 일어나도 됐어.", before: "I", after: "have to get up early.", answers: ["didn't"],
        wrong: { "do not": "지난 일이라 didn't를 써요.", "was not": "‘안 해도 됐어’는 didn't have to예요." },
        tip: { en: "I got to sleep in.", why: "get to는 ‘~할 수 있게 되다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 오늘 일 안 해도 됐어.", before: "I didn't", after: "to work today.", answers: ["have"],
        wrong: { "had": "didn't 뒤에는 원래 모양 have를 써요.", "has": "didn't 뒤에는 원래 모양 have를 써요." },
        tip: { en: "I had the day off today.", why: "day off는 ‘쉬는 날’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 줄 안 서도 됐어.", before: "I didn't have to", after: "in line.", answers: ["wait", "stand"],
        wrong: { "waiting": "to 뒤에는 동사 원래 모양 wait을 써요." },
        tip: { en: "There was no line.", why: "‘줄이 없었어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 아무것도 안 사도 됐어.", before: "I didn't have to", after: "anything.", answers: ["buy"],
        wrong: { "bought": "to 뒤에는 동사 원래 모양 buy를 써요." },
        tip: { en: "I had everything already.", why: "‘이미 다 있었어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 요리 안 해도 됐어.", before: "I didn't have", after: "cook.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "We ate out.", why: "‘우리 외식했어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 아무 말도 안 해도 됐어.", answers: ["I didn't have to say anything."],
        wrong: { "i did not have to say something": "부정문에서 ‘아무것도’는 anything을 써요.", "i did not had to say anything": "didn't 뒤에는 원래 모양 have를 써요." },
        tip: { en: "I just stayed quiet.", why: "‘그냥 조용히 있었어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 택시 안 타도 됐어.", answers: ["I didn't have to take a taxi.", "I didn't have to get a taxi."],
        wrong: { "i did not have to took a taxi": "to 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "My friend gave me a ride.", why: "‘친구가 태워 줬어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 거기 안 가도 됐어.", answers: ["I didn't have to go there."],
        wrong: { "i do not have to go there": "지난 일이라 didn't를 써요.", "i did not have to went there": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "It got canceled.", why: "‘그거 취소됐어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 다시 안 해도 됐어.", answers: ["I didn't have to do it again."],
        wrong: { "i did not have to doing it again": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Once was enough.", why: "‘한 번으로 충분했어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 걔한테 전화 안 해도 됐어.", answers: ["I didn't have to call him."],
        ctx: { lead: "‘~ 안 해도 됐어’로 바꿔 보세요.", en: "I had to call him." },
        wrong: { "i did not had to call him": "didn't 뒤에는 원래 모양 have를 써요.", "i had not to call him": "‘안 해도 됐어’는 didn't have to예요." },
        tip: { en: "He called me first.", why: "‘걔가 먼저 전화했어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 공부 많이 안 해도 됐어.", answers: ["No, I didn't have to study much.", "No, I didn't have to study a lot."],
        dialog: { a: "Was the exam hard?", aKo: "시험 어려웠어?" },
        wrong: { "no i did not have to studied much": "to 뒤에는 동사 원래 모양 study를 써요." },
        tip: { en: "No, it was easy.", why: "‘아니, 쉬웠어’라는 말이에요." } }
    ]
  };
})(window.EP);
