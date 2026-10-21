/* 세션 200. What is the best way to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[200] = {
    no: 200, form: "What is the best way to ~?", stem: "What is the best way to/What's the best way to", meaning: "~하는 가장 좋은 방법이 뭐예요?",
    hint: "What is the best way to + 동사?",
    intro: {
      blocks: [["What is the best way", "가장 좋은 방법이 뭐니"], ["to ~?", "~하는"]],
      lines: [
        "What is the best way to + 동사?는 ‘~하는 제일 좋은 방법이 뭐야?’예요.",
        "best 앞에는 꼭 the를 붙여요. to 뒤에는 동사 원래 모양을 써요.",
        "말할 때는 What's the best way to ~?로 줄여요."
      ],
      examples: [
        { en: "What's the best way to learn English?", ko: "영어 배우는 제일 좋은 방법이 뭐야?" },
        { en: "What's the best way to get there?", ko: "거기 가는 제일 좋은 방법이 뭐야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "영어 배우는 제일 좋은 방법이 뭐야?", before: "What's the best way to", after: "English?", answers: ["learn"],
        wrong: { "learning": "to 뒤에는 동사 원래 모양 learn을 써요." },
        tip: { en: "Practice every day.", why: "‘매일 연습해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "거기 가는 제일 좋은 방법이 뭐야?", before: "What's the best way to get", after: "?", answers: ["there"],
        wrong: { "to there": "there 앞에는 to를 붙이지 않아요." },
        tip: { en: "Should I take the subway?", why: "‘지하철 타야 해?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "돈 모으는 제일 좋은 방법이 뭐야?", before: "What's the", after: "way to save money?", answers: ["best"],
        wrong: { "good": "‘제일 좋은’은 best예요.", "most good": "‘제일 좋은’은 best예요." },
        tip: { en: "Make a budget.", why: "budget은 ‘예산’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "살 빼는 제일 좋은 방법이 뭐야?", before: "What's the best", after: "to lose weight?", answers: ["way"],
        wrong: { "ways": "the best 뒤에는 하나만 써요. way예요." },
        tip: { en: "Eat less, move more.", why: "‘덜 먹고 더 움직여’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너한테 연락하는 제일 좋은 방법이 뭐야?", before: "What's the best way", after: "reach you?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Just text me.", why: "‘그냥 문자 해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "스트레스 푸는 제일 좋은 방법이 뭐야?", answers: ["What's the best way to relieve stress?", "What's the best way to deal with stress?", "What's the best way to reduce stress?"],
        wrong: { "what is best way to relieve stress": "best 앞에 the를 붙여요.", "what is the best way to relieving stress": "to 뒤에는 동사 원래 모양 relieve를 써요." },
        tip: { en: "Go for a walk.", why: "‘산책해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "시간 아끼는 제일 좋은 방법이 뭐야?", answers: ["What's the best way to save time?"],
        wrong: { "what is the best way to saving time": "to 뒤에는 동사 원래 모양 save를 써요." },
        tip: { en: "Plan ahead.", why: "plan ahead는 ‘미리 계획하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "친구 사귀는 제일 좋은 방법이 뭐야?", answers: ["What's the best way to make friends?"],
        wrong: { "what is the best way to make friend": "‘친구를 사귀다’는 make friends예요." },
        tip: { en: "Join a club.", why: "club은 ‘동아리’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "일찍 일어나는 제일 좋은 방법이 뭐야?", answers: ["What's the best way to wake up early?", "What's the best way to get up early?"],
        wrong: { "what is the best way to waking up early": "to 뒤에는 동사 원래 모양 wake를 써요." },
        tip: { en: "Go to bed early.", why: "‘일찍 자’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "요리 배우는 제일 좋은 방법이 뭐야?", answers: ["What's the best way to learn cooking?", "What's the best way to learn to cook?", "What's the best way to learn how to cook?"],
        ctx: { lead: "English 대신 ‘요리(cooking)’로 바꿔 보세요.", en: "What's the best way to learn English?" },
        wrong: { "what is the best way to learning cooking": "to 뒤에는 동사 원래 모양 learn을 써요." },
        tip: { en: "Start with simple recipes.", why: "recipe는 ‘요리법’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "공항 가는 제일 좋은 방법이 뭐야?", answers: ["What's the best way to get to the airport?", "What is the best way to get to the airport?", "What's the best way to go to the airport?"],
        dialog: { a: "I'm flying out tomorrow morning.", aKo: "나 내일 아침 비행기야." },
        wrong: { "what is the best way to get to airport": "airport 앞에 the를 붙여요." },
        tip: { en: "Is there a train?", why: "‘기차 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
