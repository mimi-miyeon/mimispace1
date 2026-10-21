/* 세션 128. I'm looking forward to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[128] = {
    no: 128, form: "I'm looking forward to ~.", stem: "I'm looking forward to", meaning: "나는 ~을 고대하고 있어요.",
    hint: "I'm looking forward to + 명사/동사-ing",
    intro: {
      blocks: [["I'm looking forward", "나는 기대하고 있다"], ["to ~", "~을"]],
      lines: [
        "I'm looking forward to ~는 ‘~이 정말 기대돼’예요.",
        "여기 to 뒤에는 명사나 동사-ing를 써요. (to see ×, to seeing ○)",
        "편지나 메일 끝에 I'm looking forward to hearing from you.(답장 기다릴게요)를 자주 써요."
      ],
      examples: [
        { en: "I'm looking forward to the trip.", ko: "여행 정말 기대돼." },
        { en: "I'm looking forward to seeing you.", ko: "너 만나는 거 기대돼." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "주말이 기대돼.", before: "I'm looking forward to the", after: ".", answers: ["weekend"],
        wrong: { "weekends": "이번 주말 하나라 weekend예요." },
        tip: { en: "I can't wait for the weekend.", why: "can't wait는 ‘몹시 기다려지다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 만나는 거 기대돼.", before: "I'm looking forward to", after: "you.", answers: ["seeing"],
        wrong: { "see": "여기 to 뒤에는 동사에 ing를 붙여요. seeing이에요." },
        tip: { en: "See you soon.", why: "‘곧 봐’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "콘서트가 정말 기대돼.", before: "I'm looking", after: "to the concert.", answers: ["forward"],
        wrong: { "for": "‘기대하다’는 look forward to예요." },
        tip: { en: "It's going to be awesome.", why: "awesome은 ‘끝내주는’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "방학이 기대돼.", before: "I'm looking forward", after: "the vacation.", answers: ["to"],
        wrong: { "for": "‘~이 기대돼’는 look forward to예요." },
        tip: { en: "Only two more weeks.", why: "‘2주만 더’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 해 보는 거 기대돼.", before: "I'm looking forward to", after: "it.", answers: ["trying"],
        wrong: { "try": "여기 to 뒤에는 동사에 ing를 붙여요. trying이에요." },
        tip: { en: "I've heard great things.", why: "‘좋은 얘기 많이 들었어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "여행이 정말 기대돼.", answers: ["I'm looking forward to the trip."], alts: ["I'm really looking forward to the trip."],
        wrong: { "i am looking forward the trip": "forward 뒤에 to를 붙여요.", "i am looking forward to trip": "trip 앞에 the를 붙여요." },
        tip: { en: "I've already packed.", why: "‘벌써 짐 쌌어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "답장 기다릴게요.", answers: ["I'm looking forward to hearing from you.", "I'm looking forward to your reply."],
        wrong: { "i am looking forward to hear from you": "여기 to 뒤에는 동사에 ing를 붙여요. hearing이에요." },
        tip: { en: "Please get back to me.", why: "get back to는 ‘다시 연락하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너랑 일하는 거 기대돼.", answers: ["I'm looking forward to working with you."],
        wrong: { "i am looking forward to work with you": "여기 to 뒤에는 동사에 ing를 붙여요. working이에요." },
        tip: { en: "It'll be fun.", why: "‘재밌을 거야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "저녁 식사가 기대돼.", answers: ["I'm looking forward to dinner.", "I'm looking forward to the dinner."],
        wrong: { "i am looking forward dinner": "forward 뒤에 to를 붙여요." },
        tip: { en: "I'm starving.", why: "starving은 ‘배고파 죽겠는’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "파티가 기대돼.", answers: ["I'm looking forward to the party."],
        ctx: { lead: "the trip 대신 ‘파티(the party)’로 바꿔 보세요.", en: "I'm looking forward to the trip." },
        wrong: { "i am looking forward to party": "party 앞에 the를 붙여요." },
        tip: { en: "I can't wait for the party.", why: "can't wait는 ‘몹시 기다려지다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 다들 만나는 거 기대돼.", answers: ["Yes, I'm looking forward to seeing everyone.", "Yeah, I'm looking forward to seeing everyone.", "Yes, I'm looking forward to seeing everybody."],
        dialog: { a: "Are you coming to the reunion?", aKo: "동창회 올 거야?" },
        wrong: { "yes i am looking forward to see everyone": "여기 to 뒤에는 동사에 ing를 붙여요. seeing이에요." },
        tip: { en: "It's been so long.", why: "‘진짜 오랜만이야’라는 말이에요." } }
    ]
  };
})(window.EP);
