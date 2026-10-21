/* 세션 218. It's so much better to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[218] = {
    no: 218, form: "It's so much better to ~.", stem: "It's so much better to/It's much better to", meaning: "~하는 편이 훨씬 나아요.",
    hint: "It's so much better to + 동사",
    intro: {
      blocks: [["It's so much better", "훨씬 낫다"], ["to ~", "~하는 것이"]],
      lines: [
        "It's so much better to + 동사는 ‘~하는 게 훨씬 나아’예요.",
        "so much는 better를 강조해요. (훨씬)",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "It's so much better to walk.", ko: "걷는 게 훨씬 나아." },
        { en: "It's so much better to ask first.", ko: "먼저 물어보는 게 훨씬 나아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "걷는 게 훨씬 나아.", before: "It's so much better to", after: ".", answers: ["walk"],
        wrong: { "walking": "to 뒤에는 동사 원래 모양 walk를 써요." },
        tip: { en: "Walking is healthy.", why: "‘걷기는 건강에 좋아’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "먼저 물어보는 게 훨씬 나아.", before: "It's so much better to ask", after: ".", answers: ["first"],
        wrong: { "firstly": "‘먼저’는 first예요." },
        tip: { en: "Better safe than sorry.", why: "‘조심해서 나쁠 거 없어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "집에서 먹는 게 훨씬 나아.", before: "It's so much", after: "to eat at home.", answers: ["better"],
        wrong: { "good": "‘훨씬 나아’는 비교급 better예요.", "best": "둘을 비교할 때는 better예요." },
        tip: { en: "Home cooking is the best.", why: "‘집밥이 최고야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "일찍 가는 게 훨씬 나아.", before: "It's so", after: "better to go early.", answers: ["much"],
        wrong: { "many": "better를 강조할 때는 much예요.", "very": "better를 강조할 때는 much예요." },
        tip: { en: "Beat the crowds.", why: "‘사람 몰리기 전에 가’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "솔직한 게 훨씬 나아.", before: "It's so much better to be", after: ".", answers: ["honest"],
        wrong: { "honesty": "be 뒤에는 형용사 honest를 써요." },
        tip: { en: "Honesty is the best policy.", why: "‘정직이 최선이야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "미리 예약하는 게 훨씬 나아.", answers: ["It's so much better to book ahead.", "It's so much better to book in advance.", "It's so much better to make a reservation."],
        wrong: { "it is so much better to booking ahead": "to 뒤에는 동사 원래 모양 book을 써요.", "it is so many better to book ahead": "better를 강조할 때는 much예요." },
        tip: { en: "It fills up fast.", why: "fill up은 ‘꽉 차다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "직접 말하는 게 훨씬 나아.", answers: ["It's so much better to tell them in person.", "It's so much better to say it in person.", "It's so much better to talk in person."],
        wrong: { "it is so much better to telling them in person": "to 뒤에는 동사 원래 모양 tell을 써요." },
        tip: { en: "Don't just text.", why: "‘문자만 하지 마’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "같이 하는 게 훨씬 나아.", answers: ["It's so much better to do it together."],
        wrong: { "it is so much better to doing it together": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Teamwork wins.", why: "‘팀워크가 이겨’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "지하철 타는 게 훨씬 나아.", answers: ["It's so much better to take the subway."],
        wrong: { "it is so much better to take subway": "subway 앞에 the를 붙여요." },
        tip: { en: "Traffic is terrible.", why: "‘차가 엄청 막혀’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "일찍 자는 게 훨씬 나아.", answers: ["It's so much better to go to bed early.", "It's so much better to sleep early."],
        ctx: { lead: "walk 대신 ‘일찍 자다(go to bed early)’로 바꿔 보세요.", en: "It's so much better to walk." },
        wrong: { "it is so much better to going to bed early": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Sleep is important.", why: "‘잠은 중요해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그래도 직접 보는 게 훨씬 나아.", answers: ["But it's so much better to see it in person.", "It's so much better to see it in person.", "Still, it's so much better to see it in person."],
        dialog: { a: "I can just watch the concert online.", aKo: "콘서트 그냥 온라인으로 보면 돼." },
        wrong: { "but it is so much better to seeing it in person": "to 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "Nothing beats the real thing.", why: "‘진짜를 이길 건 없어’라는 말이에요." } }
    ]
  };
})(window.EP);
