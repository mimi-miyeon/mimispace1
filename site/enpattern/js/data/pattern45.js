/* 세션 45. It's nice to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[45] = {
    no: 45, form: "It's nice to ~.", stem: "It's nice to", meaning: "~해서 기쁩니다.",
    hint: "It's nice to + 동사",
    intro: {
      blocks: [["It's nice", "좋다"], ["to ~", "~하는 것이"]],
      lines: [
        "It's nice to + 동사는 ‘~해서 좋다 / 반갑다’예요.",
        "It이 ‘to 뒤의 일’을 대신 가리켜요. 그래서 It's로 시작해요.",
        "처음 만났을 때 쓰는 Nice to meet you는 It's를 뺀 말이에요."
      ],
      examples: [
        { en: "It's nice to be here.", ko: "여기 오니까 좋다." },
        { en: "It's nice to see you.", ko: "보니까 반갑다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "집에 오니까 좋다.", before: "It's nice", after: "be home.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "There's no place like home.", why: "‘집만 한 곳이 없다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "쉬니까 좋다.", before: "It's nice to", after: "a break.", answers: ["take", "have"],
        wrong: { "taking": "to 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "I needed this break.", why: "‘이 휴식이 필요했어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네 목소리 들으니 좋다.", before: "It's", after: "to hear your voice.", answers: ["nice", "good", "great"],
        wrong: { "nicely": "‘좋은’은 nicely가 아니라 nice예요." },
        tip: { en: "I missed your voice.", why: "‘네 목소리 그리웠어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "가끔 혼자 있는 게 좋아.", before: "It's nice to be", after: "sometimes.", answers: ["alone"],
        wrong: { "lonely": "lonely는 ‘외로운’이에요. ‘혼자인’은 alone이에요." },
        tip: { en: "I enjoy my alone time.", why: "alone time은 ‘혼자만의 시간’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "다시 보니까 반갑다.", before: "", after: "nice to see you again.", answers: ["It's"],
        wrong: { "i am": "‘반갑다’는 It's nice to예요. I'm nice는 ‘나는 착해’예요." },
        tip: { en: "Good to see you again.", why: "Good to see you도 ‘반가워’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "밖에 나오니까 좋다.", answers: ["It's nice to be outside.", "It's nice to be out.", "It's nice to get out."],
        wrong: { "it is nice to outside": "to 뒤에 be를 붙여 be outside예요." },
        tip: { en: "Fresh air feels great.", why: "‘바깥 공기 좋다’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "친구들이랑 이야기하니까 좋다.", answers: ["It's nice to talk with friends.", "It's nice to talk to friends.", "It's nice to talk with my friends."],
        wrong: { "it is nice to talking with friends": "to 뒤에는 동사 원래 모양 talk를 써요." },
        tip: { en: "I love catching up with friends.", why: "catch up with는 ‘밀린 얘기를 나누다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "집밥 먹으니까 좋다.", answers: ["It's nice to eat a home-cooked meal.", "It's nice to have a home-cooked meal.", "It's nice to eat home cooking."],
        wrong: { "it is nice to eating home cooking": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "Nothing beats home cooking.", why: "‘집밥이 최고야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "일찍 자니까 좋다.", answers: ["It's nice to go to bed early.", "It's nice to sleep early."],
        wrong: { "it is nice to going to bed early": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I feel so rested.", why: "‘푹 쉰 느낌이야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "같이 일하게 돼서 좋아.", answers: ["It's nice to work with you."],
        ctx: { lead: "see you 대신 ‘같이 일하다(work with you)’로 바꿔 보세요.", en: "It's nice to see you." },
        wrong: { "it is nice to work you": "‘~와 같이 일하다’는 work with예요." },
        tip: { en: "I enjoy working with you.", why: "enjoy 뒤에는 ~ing를 붙여요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "만나서 반가워, 준.", answers: ["It's nice to meet you, Jun.", "It's nice to meet you."],
        dialog: { a: "Hi, I'm Jun.", aKo: "안녕, 난 준이야." },
        wrong: { "it is nice to meeting you": "to 뒤에는 동사 원래 모양 meet을 써요.", "i am nice to meet you": "‘반가워’는 It's nice to meet you예요. I'm nice는 ‘나는 착해’예요." },
        tip: { en: "Nice to meet you, Jun.", why: "It's를 빼고 짧게 말해도 돼요." } }
    ]
  };
})(window.EP);
