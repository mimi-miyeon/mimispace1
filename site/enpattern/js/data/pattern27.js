/* 세션 27. I have to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[27] = {
    no: 27, form: "I have to ~.", stem: "I have to", meaning: "나는 ~해야 해요.",
    hint: "I have to + 동사",
    intro: {
      blocks: [["I", "나는"], ["have to", "~해야 한다"], ["~", "동사"]],
      lines: [
        "have to + 동사는 ‘~해야 해’예요. 일상에서 must보다 자주 써요.",
        "여기서 have는 ‘가지다’가 아니라 to와 한 덩어리로 ‘~해야 하다’예요.",
        "he, she 뒤에는 has to예요. I 뒤에는 have to예요."
      ],
      examples: [
        { en: "I have to work today.", ko: "나 오늘 일해야 해." },
        { en: "I have to go to the bank.", ko: "나 은행 가야 해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 지금 가야 해.", before: "I have", after: "go now.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I've got to go now.", why: "have got to도 ‘~해야 해’예요. 말할 때 자주 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 숙제해야 해.", before: "I", after: "to do my homework.", answers: ["have"],
        wrong: { "has": "has to는 he, she가 주어일 때 써요. I 뒤에는 have to예요.", "am": "‘~해야 해’는 am이 아니라 have to예요." },
        tip: { en: "I need to do my homework.", why: "need to도 ‘~해야 해’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 내일 일찍 출근해야 해.", before: "I have to", after: "to work early tomorrow.", answers: ["go"],
        wrong: { "going": "to 뒤에는 동사 원래 모양 go를 써요.", "went": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I start work early tomorrow.", why: "‘내일 일찍 일 시작해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 내 방 치워야 해.", before: "I have to", after: "my room.", answers: ["clean"],
        wrong: { "cleaning": "to 뒤에는 동사 원래 모양 clean을 써요." },
        tip: { en: "My room is a mess.", why: "mess는 ‘엉망’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 오늘 밤 야근해야 해.", before: "I", after: "to work late tonight.", answers: ["have"],
        wrong: { "has": "has to는 he, she가 주어일 때 써요. I 뒤에는 have to예요." },
        tip: { en: "I'm working late tonight.", why: "‘오늘 밤 늦게까지 일해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 장 봐야 해.", answers: ["I have to go grocery shopping.", "I have to buy groceries.", "I have to get groceries."],
        wrong: { "i have to buying groceries": "to 뒤에는 동사 원래 모양 buy를 써요.", "i has to buy groceries": "has to는 he, she가 주어일 때 써요. I 뒤에는 have to예요." },
        tip: { en: "I need to pick up some groceries.", why: "pick up은 ‘사 오다’라는 뜻으로도 써요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 다시 해야 해.", answers: ["I have to do it again.", "I have to try again.", "I have to do it over."],
        wrong: { "i have to doing it again": "to 뒤에는 동사 원래 모양 do를 써요.", "i have do it again": "‘~해야 해’는 have 뒤에 to를 붙여요." },
        tip: { en: "I need to start over.", why: "start over는 ‘처음부터 다시 하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 내일 병원 가야 해.", answers: ["I have to go to the hospital tomorrow.", "I have to see a doctor tomorrow.", "I have to go to the doctor tomorrow.", "Tomorrow I have to go to the hospital."],
        wrong: { "i have to go hospital tomorrow": "‘병원에 가다’는 go to the hospital이에요." },
        tip: { en: "I have a doctor's appointment tomorrow.", why: "appointment는 ‘예약, 약속’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 이메일 답장해야 해.",
        answers: ["I have to reply to an email.", "I have to answer an email.", "I have to reply to the email.", "I have to answer the email.", "I have to reply to some emails.", "I have to answer some emails."],
        wrong: { "i have to reply an email": "‘~에 답장하다’는 reply 뒤에 to를 붙여요." },
        tip: { en: "I need to get back to an email.", why: "get back to는 ‘~에 답하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 집에 가야 해.", answers: ["I have to go home."],
        ctx: { lead: "work today 대신 ‘집에 가다(go home)’로 바꿔 보세요.", en: "I have to work today." },
        wrong: { "i have to go to home": "home 앞에는 to를 쓰지 않아요. go home이에요.", "i have to going home": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I should get going.", why: "get going은 ‘이제 가 보다’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 공부해야 해.", answers: ["Sorry, I have to study.", "I'm sorry, I have to study.", "Sorry, I have to study tonight."],
        dialog: { a: "Do you want to watch a movie tonight?", aKo: "오늘 밤에 영화 볼래?" },
        wrong: { "sorry i has to study": "has to는 he, she가 주어일 때 써요. I 뒤에는 have to예요.", "sorry i have to studying": "to 뒤에는 동사 원래 모양 study를 써요." },
        tip: { en: "Sorry, I've got to study.", why: "have got to도 ‘~해야 해’예요." } }
    ]
  };
})(window.EP);
