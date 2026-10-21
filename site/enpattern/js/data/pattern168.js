/* 세션 168. How much does it ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[168] = {
    no: 168, form: "How much does it ~?", stem: "How much does it", meaning: "그건 얼마나 ~해요?",
    hint: "How much does it + 동사?",
    intro: {
      blocks: [["How much", "얼마나"], ["does it ~?", "그것이 ~하니?"]],
      lines: [
        "How much does it + 동사?는 ‘그거 얼마나 ~해?’예요.",
        "How much does it cost?(얼마예요?)가 가장 많이 써요.",
        "does 뒤에는 동사 원래 모양을 써요. (costs ×)"
      ],
      examples: [
        { en: "How much does it cost?", ko: "그거 얼마예요?" },
        { en: "How much does it weigh?", ko: "그거 무게가 얼마나 돼?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그거 얼마예요?", before: "How much does it", after: "?", answers: ["cost"],
        wrong: { "costs": "does 뒤에는 동사 원래 모양 cost를 써요." },
        tip: { en: "How much is it?", why: "‘얼마예요?’를 짧게 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 무게가 얼마나 돼?", before: "How much does it", after: "?", answers: ["weigh"],
        wrong: { "weight": "weight는 ‘무게’라는 명사예요. 동사는 weigh예요." },
        tip: { en: "Is it heavy?", why: "‘무거워?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "고치는 데 얼마나 들어요?", before: "How much does it cost to", after: "it?", answers: ["fix"],
        wrong: { "fixing": "to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "What's the repair cost?", why: "repair cost는 ‘수리비’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그거 가격이 얼마나 해요?", before: "How much", after: "it cost?", answers: ["does"],
        wrong: { "is": "cost가 동사라 does를 써요.", "do": "it 앞에는 does를 써요." },
        tip: { en: "What's the price?", why: "price는 ‘가격’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "배송비가 얼마예요?", before: "How much does it cost to", after: "it?", answers: ["ship"],
        wrong: { "shipping": "to 뒤에는 동사 원래 모양 ship을 써요." },
        tip: { en: "Is shipping free?", why: "‘배송 무료예요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "하룻밤에 얼마예요?", answers: ["How much does it cost per night?", "How much does it cost a night?", "How much does it cost for one night?"],
        wrong: { "how much does it costs per night": "does 뒤에는 동사 원래 모양 cost를 써요.", "how much is it cost per night": "cost가 동사라 does를 써요." },
        tip: { en: "What's the nightly rate?", why: "rate는 ‘요금’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "거기 가는 데 얼마나 들어요?", answers: ["How much does it cost to get there?", "How much does it cost to go there?"],
        wrong: { "how much does it cost to getting there": "to 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Is it expensive to get there?", why: "‘거기 가는 거 비싸?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 빌리는 데 얼마예요?", answers: ["How much does it cost to rent it?", "How much does it cost to rent?"],
        wrong: { "how much does it cost to borrow it": "돈 내고 빌리는 건 rent예요." },
        tip: { en: "Is there a deposit?", why: "deposit은 ‘보증금’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "주차하는 데 얼마예요?", answers: ["How much does it cost to park?", "How much does it cost to park here?"],
        wrong: { "how much does it cost to parking": "to 뒤에는 동사 원래 모양 park를 써요." },
        tip: { en: "Is parking free?", why: "‘주차 무료예요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그거 보내는 데 얼마예요?", answers: ["How much does it cost to send it?", "How much does it cost to send?"],
        ctx: { lead: "fix 대신 ‘보내다(send)’로 바꿔 보세요.", en: "How much does it cost to fix it?" },
        wrong: { "how much does it cost to sending it": "to 뒤에는 동사 원래 모양 send를 써요." },
        tip: { en: "What's the postage?", why: "postage는 ‘우편 요금’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋네요. 얼마예요?", answers: ["Nice. How much does it cost?", "How much does it cost?", "Great. How much does it cost?"],
        dialog: { a: "This is our newest model.", aKo: "이게 저희 최신 모델이에요." },
        wrong: { "nice how much does it costs": "does 뒤에는 동사 원래 모양 cost를 써요." },
        tip: { en: "Nice. What's the price?", why: "price는 ‘가격’이에요." } }
    ]
  };
})(window.EP);
