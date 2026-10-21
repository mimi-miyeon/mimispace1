/* 세션 124. If you want me to ..., you have to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[124] = {
    no: 124, form: "If you want me to ..., you have to ~.", stem: "If you want me to", meaning: "내가 ...하길 바란다면, 당신이 ~해야 해요.",
    hint: "If you want me to + 동사, you have to + 동사",
    intro: {
      blocks: [["If you want me to ...", "내가 ...하길 원하면"], ["you have to ~", "너는 ~해야 해"]],
      lines: [
        "If you want me to A, you have to B는 ‘내가 A 하길 바라면 너는 B 해야 해’예요. 조건을 걸 때 써요.",
        "want me to 뒤와 have to 뒤에 모두 동사 원래 모양을 써요.",
        "want 뒤에 me를 넣어야 ‘내가 ~하길’이 돼요."
      ],
      examples: [
        { en: "If you want me to help, you have to ask nicely.", ko: "내가 돕길 바라면 예쁘게 부탁해야 해." },
        { en: "If you want me to come, you have to pay.", ko: "내가 오길 바라면 네가 돈 내야 해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내가 도와주길 바라면 예쁘게 부탁해야 해.", before: "If you want me to help, you have to", after: "nicely.", answers: ["ask"],
        wrong: { "asking": "have to 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "Say please.", why: "‘부탁한다고 말해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 가길 바라면 너도 와야 해.", before: "If you want me", after: "go, you have to come too.", answers: ["to"],
        wrong: { "for": "want me 뒤에는 to를 붙여요." },
        tip: { en: "Let's go together.", why: "‘같이 가자’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 요리하길 바라면 네가 설거지해야 해.", before: "If you want me to cook, you have to", after: "the dishes.", answers: ["do"],
        wrong: { "wash": "‘설거지하다’는 do the dishes예요." },
        tip: { en: "That's fair.", why: "‘그게 공평해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 기다리길 바라면 일찍 와야 해.", before: "If you want", after: "to wait, you have to come early.", answers: ["me"],
        wrong: { "my": "want 뒤에는 my가 아니라 me를 써요.", "i": "want 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "Don't be late.", why: "‘늦지 마’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "내가 믿길 바라면 사실대로 말해야 해.", before: "If you want me to believe you, you", after: "to tell the truth.", answers: ["have"],
        wrong: { "has": "you 뒤에는 has가 아니라 have예요." },
        tip: { en: "Be honest with me.", why: "‘나한테 솔직해져’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내가 운전하길 바라면 지도를 봐 줘야 해.", answers: ["If you want me to drive, you have to read the map.", "If you want me to drive, you have to check the map."],
        wrong: { "if you want me drive you have to read the map": "want me 뒤에 to를 붙여요. want me to drive예요.", "if you want me to drive you have to reading the map": "have to 뒤에는 동사 원래 모양 read를 써요." },
        tip: { en: "I'll drive, you navigate.", why: "navigate는 ‘길 안내하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 비밀 지키길 바라면 다 말해 줘야 해.", answers: ["If you want me to keep it a secret, you have to tell me everything.", "If you want me to keep the secret, you have to tell me everything."],
        wrong: { "if you want i to keep it a secret you have to tell me everything": "want 뒤에는 I가 아니라 me를 써요." },
        tip: { en: "My lips are sealed.", why: "‘입 꾹 다물게’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 오길 바라면 네가 돈 내야 해.", answers: ["If you want me to come, you have to pay."],
        wrong: { "if you want me to come you have to paying": "have to 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "It's your treat.", why: "treat은 ‘한턱’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "내가 일찍 일어나길 바라면 깨워 줘야 해.", answers: ["If you want me to get up early, you have to wake me up.", "If you want me to wake up early, you have to wake me up."],
        wrong: { "if you want me to get up early you have to wake up me": "me 같은 말은 wake와 up 사이에 넣어요. wake me up이에요." },
        tip: { en: "Set an alarm for me.", why: "‘알람 맞춰 줘’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내가 오길 바라면 데리러 와야 해.", answers: ["If you want me to come, you have to pick me up."],
        ctx: { lead: "pay 대신 ‘데리러 오다(pick me up)’로 바꿔 보세요.", en: "If you want me to come, you have to pay." },
        wrong: { "if you want me to come you have to pick up me": "me 같은 말은 pick과 up 사이에 넣어요. pick me up이에요." },
        tip: { en: "I don't have a car.", why: "‘나 차 없어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내가 하길 바라면 이유를 말해 줘야 해.", answers: ["If you want me to do it, you have to tell me why.", "If you want me to do it, you have to give me a reason."],
        dialog: { a: "Just do it for me.", aKo: "그냥 나 위해서 해 줘." },
        wrong: { "if you want me do it you have to tell me why": "want me 뒤에 to를 붙여요. want me to do예요." },
        tip: { en: "Why should I?", why: "‘내가 왜?’라는 말이에요." } }
    ]
  };
})(window.EP);
