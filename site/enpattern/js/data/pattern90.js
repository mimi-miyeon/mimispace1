/* 세션 90. That's because ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[90] = {
    no: 90, form: "That's because ~.", stem: "That's because", meaning: "그것은 ~때문입니다.",
    hint: "That's because + 주어 + 동사",
    intro: {
      blocks: [["That's", "그건 ~이다"], ["because ~", "~ 때문에"]],
      lines: [
        "That's because ~는 ‘그건 ~ 때문이야’예요. 앞에서 말한 일의 이유를 설명해요.",
        "because 뒤에는 ‘주어 + 동사’ 문장을 써요.",
        "명사만 쓸 때는 That's because of ~예요. (because of the rain)"
      ],
      examples: [
        { en: "That's because I was tired.", ko: "그건 내가 피곤했기 때문이야." },
        { en: "That's because it's Monday.", ko: "월요일이라서 그래." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그건 비가 왔기 때문이야.", before: "That's", after: "it rained.", answers: ["because"],
        wrong: { "why": "That's why는 ‘그래서 ~’예요. 이유를 말할 때는 because예요.", "so": "이유를 말할 때는 so가 아니라 because예요." },
        tip: { en: "The rain caused it.", why: "cause는 ‘일으키다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "늦게 자서 그래.", before: "That's because I went to bed", after: ".", answers: ["late"],
        wrong: { "lately": "‘늦게’는 lately가 아니라 late예요." },
        tip: { en: "I stayed up late.", why: "stay up late는 ‘늦게까지 안 자다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그건 네가 안 들었기 때문이야.", before: "That's because you didn't", after: ".", answers: ["listen"],
        wrong: { "listened": "didn't 뒤에는 동사 원래 모양 listen을 써요." },
        tip: { en: "You weren't listening.", why: "‘너 안 듣고 있었잖아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그건 내가 바빴기 때문이야.", before: "", after: "because I was busy.", answers: ["That's"],
        wrong: { "it": "‘그건 ~ 때문이야’는 That's because예요." },
        tip: { en: "I was too busy.", why: "‘너무 바빴어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그건 오늘이 휴일이라서 그래.", before: "That's because today", after: "a holiday.", answers: ["is"],
        wrong: { "are": "today는 하나라서 is를 써요." },
        tip: { en: "It's a holiday today.", why: "‘오늘 휴일이야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그건 내가 아팠기 때문이야.", answers: ["That's because I was sick.", "That's because I was ill."],
        wrong: { "that is because i am sick": "지난 일이라 was를 써요.", "that is why i was sick": "That's why는 ‘그래서 ~’예요. 이유를 말할 때는 because예요." },
        tip: { en: "I was sick, that's why.", why: "끝에 that's why를 붙여도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그건 차가 막혀서 그래.", answers: ["That's because of the traffic.", "That's because the traffic was bad.", "That's because there was a lot of traffic."],
        wrong: { "that is because the traffic": "명사만 쓸 때는 because of예요." },
        tip: { en: "The traffic was terrible.", why: "‘차가 엄청 막혔어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그건 내가 몰랐기 때문이야.", answers: ["That's because I didn't know."],
        wrong: { "that is because i do not know": "지난 일이라 didn't를 써요." },
        tip: { en: "I had no idea.", why: "I had no idea는 ‘전혀 몰랐어’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그건 네가 너무 많이 먹어서 그래.", answers: ["That's because you ate too much."],
        wrong: { "that is because you ate too many": "먹은 양은 many가 아니라 much예요." },
        tip: { en: "You overate.", why: "overeat은 ‘과식하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그건 내가 늦게 일어났기 때문이야.", answers: ["That's because I woke up late.", "That's because I got up late."],
        ctx: { lead: "I was tired 대신 ‘내가 늦게 일어났다(I woke up late)’로 바꿔 보세요.", en: "That's because I was tired." },
        wrong: { "that is because i wake up late": "지난 일이라 과거형 woke를 써요." },
        tip: { en: "I overslept.", why: "oversleep은 ‘늦잠 자다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "다들 휴가 가서 그래.", answers: ["That's because everyone is on vacation.", "That's because everybody is on vacation."],
        dialog: { a: "Why is it so quiet today?", aKo: "오늘 왜 이렇게 조용해?" },
        wrong: { "that is because everyone are on vacation": "everyone은 하나로 봐서 is를 써요." },
        tip: { en: "Everyone's on vacation.", why: "‘다들 휴가 중이야’라는 말이에요." } }
    ]
  };
})(window.EP);
