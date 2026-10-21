/* 세션 203. I'm here to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[203] = {
    no: 203, form: "I'm here to ~.", stem: "I'm here to", meaning: "난 ~하러 왔어요.",
    hint: "I'm here to + 동사",
    intro: {
      blocks: [["I'm here", "나는 여기 왔다"], ["to ~", "~하러"]],
      lines: [
        "I'm here to + 동사는 ‘~하러 왔어요’예요. 방문 목적을 말해요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "가게, 회사, 병원에서 첫마디로 쓰기 좋아요."
      ],
      examples: [
        { en: "I'm here to see Mr. Kim.", ko: "김 선생님 뵈러 왔어요." },
        { en: "I'm here to pick up my order.", ko: "주문한 거 찾으러 왔어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "김 선생님 뵈러 왔어요.", before: "I'm here to", after: "Mr. Kim.", answers: ["see"],
        wrong: { "seeing": "to 뒤에는 동사 원래 모양 see를 써요.", "meet with": "‘~를 뵈러’는 see가 자연스러워요." },
        tip: { en: "I have an appointment.", why: "appointment는 ‘약속’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "주문한 거 찾으러 왔어요.", before: "I'm here to pick", after: "my order.", answers: ["up"],
        wrong: { "out": "‘찾아가다’는 pick up이에요." },
        tip: { en: "I placed an order online.", why: "place an order는 ‘주문하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "도와주러 왔어.", before: "I'm here", after: "help.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "What can I do?", why: "‘뭐 하면 돼?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "서류 내러 왔어요.", before: "I'm here to", after: "these documents.", answers: ["submit"],
        wrong: { "submitting": "to 뒤에는 동사 원래 모양 submit을 써요." },
        tip: { en: "Where do I hand these in?", why: "hand in은 ‘제출하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 데리러 왔어.", before: "", after: "here to pick you up.", answers: ["I'm"],
        wrong: { "i": "‘~하러 왔어’는 I'm here예요. am이 필요해요." },
        tip: { en: "Your ride is here.", why: "ride는 ‘태워 줄 차’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "소포 찾으러 왔어요.", answers: ["I'm here to pick up a package.", "I'm here to pick up my package."],
        wrong: { "i am here to picking up a package": "to 뒤에는 동사 원래 모양 pick을 써요.", "i here to pick up a package": "I 뒤에 am이 필요해요. I'm이에요." },
        tip: { en: "Do you have a package for me?", why: "‘저한테 온 소포 있어요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "체크인하러 왔어요.", answers: ["I'm here to check in."],
        wrong: { "i am here to check": "‘체크인하다’는 check in이에요." },
        tip: { en: "I have a reservation.", why: "reservation은 ‘예약’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "사과하러 왔어.", answers: ["I'm here to apologize.", "I'm here to say sorry."],
        wrong: { "i am here to apologizing": "to 뒤에는 동사 원래 모양 apologize를 써요." },
        tip: { en: "I'm so sorry.", why: "‘정말 미안해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이거 반품하러 왔어요.", answers: ["I'm here to return this."],
        wrong: { "i am here to returning this": "to 뒤에는 동사 원래 모양 return을 써요." },
        tip: { en: "It doesn't fit.", why: "‘안 맞아요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "의사 선생님 뵈러 왔어요.", answers: ["I'm here to see the doctor.", "I'm here to see a doctor."],
        ctx: { lead: "Mr. Kim 대신 ‘의사 선생님(the doctor)’으로 바꿔 보세요.", en: "I'm here to see Mr. Kim." },
        wrong: { "i am here to seeing the doctor": "to 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "I have an appointment.", why: "appointment는 ‘예약’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 계좌 만들러 왔어요.", answers: ["Yes, I'm here to open an account.", "I'm here to open an account.", "Yes, I'm here to open a bank account."],
        dialog: { a: "Can I help you?", aKo: "도와드릴까요?" },
        wrong: { "yes i am here to open a account": "account 앞에는 an을 붙여요." },
        tip: { en: "I'd like to open an account.", why: "‘계좌 열고 싶어요’라는 말이에요." } }
    ]
  };
})(window.EP);
