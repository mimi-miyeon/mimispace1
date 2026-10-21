/* 세션 15. All you need is ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[15] = {
    no: 15, form: "All you need is ~.", stem: "All you need is", meaning: "당신에게 필요한 건 ~ 뿐이에요.",
    hint: "All you need is + 명사",
    intro: {
      blocks: [["All", "~하는 전부"], ["you need", "네가 필요한"], ["is ~", "~이다"]],
      lines: [
        "All you need is ~는 ‘너한테 필요한 건 ~뿐이야’예요.",
        "All you need가 한 덩어리 주어라서 뒤에 is를 써요. (are 아님)",
        "is 뒤에는 필요한 것(time, a pen)을 붙여요."
      ],
      examples: [
        { en: "All you need is love.", ko: "필요한 건 사랑뿐이야." },
        { en: "All you need is a pen.", ko: "펜 하나면 돼." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "필요한 건 시간뿐이야.", before: "All you need", after: "time.", answers: ["is"],
        wrong: { "are": "All you need는 한 덩어리라서 are가 아니라 is를 써요.", "be": "‘~이다’는 be가 아니라 is를 써요." },
        tip: { en: "Just give it time.", why: "‘시간을 좀 줘 봐’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너한테 필요한 건 휴식이야.", before: "All you", after: "is some rest.", answers: ["need"],
        wrong: { "needs": "you 뒤에는 needs가 아니라 need예요." },
        tip: { en: "You just need some rest.", why: "just는 ‘그냥, 그저’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "필요한 건 용기뿐이야.", before: "", after: "you need is courage.", answers: ["All"],
        wrong: { "only": "‘필요한 건 ~뿐’은 Only가 아니라 All you need is로 말해요." },
        tip: { en: "Just be brave.", why: "‘그냥 용기를 내’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "필요한 건 휴대폰 하나야.", before: "All you need is a", after: ".", answers: ["phone"],
        wrong: { "phones": "a는 ‘하나’라서 phone에 s를 붙이지 않아요." },
        tip: { en: "You only need a phone.", why: "only는 ‘~만’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "필요한 건 좋은 신발이야.", before: "All you need is good", after: ".", answers: ["shoes"],
        wrong: { "shoe": "신발은 보통 한 켤레라 shoes로 써요." },
        tip: { en: "Good shoes are enough.", why: "enough는 ‘충분한’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "필요한 건 연습뿐이야.", answers: ["All you need is practice.", "All you need is some practice.", "All you need is more practice."],
        wrong: { "all you need are practice": "All you need는 한 덩어리라서 are가 아니라 is를 써요.", "all you needs is practice": "you 뒤에는 needs가 아니라 need예요." },
        tip: { en: "Just keep practicing.", why: "keep ~ing는 ‘계속 ~하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "필요한 건 계획 하나야.", answers: ["All you need is a plan.", "All you need is one plan."],
        wrong: { "all you need is plan": "plan은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "You just need a plan.", why: "just는 ‘그냥, 그저’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "필요한 건 좋은 친구야.", answers: ["All you need is a good friend.", "All you need is good friends."],
        wrong: { "all you need is good friend": "friend는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "A good friend is all you need.", why: "순서를 바꿔 말해도 같은 뜻이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "필요한 건 따뜻한 커피 한 잔이야.",
        answers: ["All you need is a cup of hot coffee.", "All you need is a hot cup of coffee.", "All you need is a cup of warm coffee.", "All you need is a warm cup of coffee.", "All you need is a hot coffee."],
        wrong: { "all you need is a cup of hot coffees": "커피 한 잔은 a cup of coffee예요. coffee에 s를 붙이지 않아요." },
        tip: { en: "A cup of hot coffee will do.", why: "will do는 ‘그거면 돼’라는 뜻이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "필요한 건 인내심뿐이야.", answers: ["All you need is patience.", "All you need is a little patience.", "All you need is some patience."],
        ctx: { lead: "love 대신 ‘인내심(patience)’을 넣어 보세요.", en: "All you need is love." },
        wrong: { "all you need is a patience": "patience는 셀 수 없는 말이라 a를 붙이지 않아요." },
        tip: { en: "Just be patient.", why: "patient는 ‘참을성 있는’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "필요한 건 푹 자는 거야.",
        answers: ["All you need is a good night's sleep.", "All you need is good sleep.", "All you need is some sleep.", "All you need is a good sleep."],
        dialog: { a: "I'm nervous about the test.", aKo: "시험 때문에 긴장돼." },
        wrong: { "all you need are some sleep": "All you need는 한 덩어리라서 are가 아니라 is를 써요." },
        tip: { en: "Just get some sleep.", why: "get some sleep은 ‘잠을 좀 자다’예요." } }
    ]
  };
})(window.EP);
