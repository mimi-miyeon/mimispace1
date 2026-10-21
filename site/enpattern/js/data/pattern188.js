/* 세션 188. Why don't I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[188] = {
    no: 188, form: "Why don't I ~?", stem: "Why don't I", meaning: "내가 ~하는 거 어때요?",
    hint: "Why don't I + 동사?",
    intro: {
      blocks: [["Why don't I", "내가 ~할까"], ["~?", "동사"]],
      lines: [
        "Why don't I + 동사?는 ‘내가 ~할까? / 내가 ~하는 거 어때?’예요. 내가 하겠다고 나서요.",
        "don't I 뒤에는 동사 원래 모양을 써요.",
        "Let me ~와 비슷하지만 더 부드러워요."
      ],
      examples: [
        { en: "Why don't I drive?", ko: "내가 운전할까?" },
        { en: "Why don't I call you later?", ko: "내가 나중에 전화할까?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 운전할까?", before: "Why don't I", after: "?", answers: ["drive"],
        wrong: { "driving": "don't I 뒤에는 동사 원래 모양 drive를 써요." },
        tip: { en: "Let me drive.", why: "‘내가 운전할게’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 나중에 전화할까?", before: "Why don't I", after: "you later?", answers: ["call"],
        wrong: { "calling": "don't I 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "I'll call you later.", why: "‘나중에 전화할게’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 데리러 갈까?", before: "Why don't I pick you", after: "?", answers: ["up"],
        wrong: { "out": "‘데리러 가다’는 pick up이에요." },
        tip: { en: "I'll come get you.", why: "come get은 ‘데리러 가다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 저녁 만들까?", before: "Why don't", after: "make dinner?", answers: ["I"],
        wrong: { "me": "don't 뒤에는 me가 아니라 I를 써요." },
        tip: { en: "Dinner's on me.", why: "‘저녁은 내가 할게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 확인해 볼까?", before: "Why", after: "I check?", answers: ["don't"],
        wrong: { "not": "‘내가 ~할까?’는 Why don't I예요." },
        tip: { en: "Let me check.", why: "‘확인해 볼게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 계산할까?", answers: ["Why don't I pay?", "Why don't I get the check?", "Why don't I get this?"],
        wrong: { "why do not i paying": "don't I 뒤에는 동사 원래 모양 pay를 써요.", "why do not me pay": "don't 뒤에는 me가 아니라 I를 써요." },
        tip: { en: "It's on me.", why: "‘내가 쏠게’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 도와줄까?", answers: ["Why don't I help you?", "Why don't I help?"],
        wrong: { "why do not i helping you": "don't I 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Let me help.", why: "‘내가 도와줄게’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 그거 보내 줄까?", answers: ["Why don't I send it to you?", "Why don't I send it?", "Why don't I send you it?"],
        wrong: { "why do not i sending it to you": "don't I 뒤에는 동사 원래 모양 send를 써요." },
        tip: { en: "I'll email it to you.", why: "‘이메일로 보내 줄게’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내가 표 예매할까?", answers: ["Why don't I book the tickets?", "Why don't I get the tickets?", "Why don't I buy the tickets?"],
        wrong: { "why do not i booking the tickets": "don't I 뒤에는 동사 원래 모양 book을 써요." },
        tip: { en: "I'll handle the tickets.", why: "handle은 ‘처리하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 커피 사 올까?", answers: ["Why don't I get coffee?", "Why don't I get some coffee?", "Why don't I buy coffee?"],
        ctx: { lead: "drive 대신 ‘커피를 사 오다(get coffee)’로 바꿔 보세요.", en: "Why don't I drive?" },
        wrong: { "why do not i getting coffee": "don't I 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Coffee's on me.", why: "‘커피는 내가 살게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 내가 들어 줄까?", answers: ["Then why don't I carry it?", "Why don't I carry it?", "Then why don't I carry that?", "Why don't I carry that?"],
        dialog: { a: "This box is so heavy.", aKo: "이 상자 진짜 무거워." },
        wrong: { "then why do not i carrying it": "don't I 뒤에는 동사 원래 모양 carry를 써요." },
        tip: { en: "Here, let me take it.", why: "‘이리 줘, 내가 들게’라는 말이에요." } }
    ]
  };
})(window.EP);
