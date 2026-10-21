/* 세션 86. This/That is ~. (명사) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[86] = {
    no: 86, form: "This/That is ~. (명사)", stem: "This is/That is", meaning: "이것은/저것은 ~입니다.",
    hint: "This/That is + 명사",
    intro: {
      blocks: [["This / That", "이것 / 저것"], ["is", "~이다"], ["~", "명사"]],
      lines: [
        "This is ~는 ‘이건 ~야’, That is ~는 ‘저건(그건) ~야’예요.",
        "가까운 건 this, 먼 건 that이에요. 사람을 소개할 때도 써요. (This is my friend.)",
        "명사 하나 앞에는 a / an이나 my 같은 말을 붙여요."
      ],
      examples: [
        { en: "This is my brother.", ko: "이쪽은 내 남동생이야." },
        { en: "That is a good idea.", ko: "그거 좋은 생각이다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이건 내 차야.", before: "This", after: "my car.", answers: ["is"],
        wrong: { "are": "this는 하나라서 is를 써요.", "am": "this 뒤에는 is를 써요." },
        tip: { en: "This car is mine.", why: "mine은 ‘내 것’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "저건 우리 학교야.", before: "", after: "is our school.", answers: ["That"],
        wrong: { "there": "‘저건’은 There가 아니라 That이에요." },
        tip: { en: "That's where I go to school.", why: "‘저기가 내 학교야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이분은 우리 선생님이야.", before: "This is our", after: ".", answers: ["teacher"],
        wrong: { "teachers": "한 분이라 teacher예요." },
        tip: { en: "Meet our teacher.", why: "Meet ~는 ‘~를 소개할게’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그건 좋은 질문이다.", before: "That is a good", after: ".", answers: ["question"],
        wrong: { "questions": "a 뒤에는 question 하나만 써요." },
        tip: { en: "Good question.", why: "‘좋은 질문이야’라는 짧은 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이건 선물이야.", before: "This is", after: "gift.", answers: ["a"],
        wrong: { "an": "gift는 자음 소리로 시작해서 an이 아니라 a를 써요." },
        tip: { en: "This is for you.", why: "‘이거 너 주는 거야’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이쪽은 내 친구 민수야.", answers: ["This is my friend Minsu.", "This is my friend, Minsu."],
        wrong: { "this are my friend minsu": "this는 한 사람이라 is를 써요.", "he is my friend minsu": "사람을 소개할 때는 This is ~예요." },
        tip: { en: "Meet my friend Minsu.", why: "Meet ~는 ‘~를 소개할게’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그건 내 실수야.", answers: ["That is my mistake."], alts: ["That was my mistake."],
        wrong: { "that is my mistakes": "실수 하나라 mistake예요." },
        tip: { en: "My bad.", why: "‘내 잘못이야’라는 가벼운 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이건 내 첫 해외여행이야.", answers: ["This is my first trip abroad.", "This is my first trip overseas.", "This is my first overseas trip."],
        wrong: { "this is my first trip to abroad": "abroad 앞에는 to를 쓰지 않아요." },
        tip: { en: "It's my first time abroad.", why: "first time은 ‘처음’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그건 비밀이야.", answers: ["That is a secret."],
        wrong: { "that is a secrets": "비밀 하나라 secret이에요." },
        tip: { en: "I can't tell you.", why: "‘말해 줄 수 없어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이쪽은 내 여동생이야.", answers: ["This is my sister.", "This is my little sister.", "This is my younger sister."],
        ctx: { lead: "my brother 대신 ‘내 여동생(my sister)’으로 바꿔 보세요.", en: "This is my brother." },
        wrong: { "this is my sisters": "한 명이라 sister예요.", "she is my sister": "사람을 소개할 때는 This is ~예요." },
        tip: { en: "Meet my sister.", why: "Meet ~는 ‘~를 소개할게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그거 내 거야.", answers: ["That is mine.", "That is my bag."],
        dialog: { a: "Whose bag is this?", aKo: "이거 누구 가방이야?" },
        wrong: { "that is my": "‘내 것’은 my가 아니라 mine이에요.", "that is me bag": "‘나의’는 me가 아니라 my예요." },
        tip: { en: "It's mine.", why: "It's로 말해도 돼요." } }
    ]
  };
})(window.EP);
