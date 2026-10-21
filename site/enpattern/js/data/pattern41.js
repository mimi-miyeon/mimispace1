/* 세션 41. I'm glad to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[41] = {
    no: 41, form: "I'm glad to ~.", stem: "I'm glad to", meaning: "나는 ~해서 기뻐요.",
    hint: "I'm glad to + 동사",
    intro: {
      blocks: [["I'm glad", "나는 기쁘다"], ["to ~", "~하게 돼서"]],
      lines: [
        "I'm glad to + 동사는 ‘~하게 돼서 기뻐’예요.",
        "to 뒤에는 동사 원래 모양을 써요. (to see, to hear)",
        "처음 만났을 때 Glad to meet you(만나서 반가워)처럼도 써요."
      ],
      examples: [
        { en: "I'm glad to see you.", ko: "너 보니까 반갑다." },
        { en: "I'm glad to hear that.", ko: "그 말 들으니 기쁘다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "도와줄 수 있어서 기뻐.", before: "I'm glad", after: "help.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Happy to help.", why: "‘기꺼이 도울게’라는 짧은 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "여기 오게 돼서 기뻐.", before: "I'm glad to", after: "here.", answers: ["come"],
        wrong: { "coming": "to 뒤에는 동사 원래 모양 come을 써요.", "came": "to 뒤에는 동사 원래 모양 come을 써요." },
        tip: { en: "I'm happy to be here.", why: "be here는 ‘여기 있다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너랑 같이 일하게 돼서 기뻐.", before: "I'm", after: "to work with you.", answers: ["glad", "happy"],
        wrong: { "good": "‘기뻐’는 good이 아니라 glad예요." },
        tip: { en: "Looking forward to working with you.", why: "‘같이 일하는 게 기대돼’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "좋은 소식 들어서 기뻐.", before: "I'm glad to", after: "the good news.", answers: ["hear"],
        wrong: { "listen": "‘소식을 듣다’는 listen이 아니라 hear예요.", "hearing": "to 뒤에는 동사 원래 모양 hear를 써요." },
        tip: { en: "That's great news!", why: "‘좋은 소식이다!’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이 팀에 들어오게 돼서 기뻐.", before: "", after: "glad to join this team.", answers: ["I'm"],
        wrong: { "i": "‘기뻐’는 I 뒤에 am을 붙여 I'm glad예요." },
        tip: { en: "Happy to be on board.", why: "on board는 ‘함께하게 된’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "다시 만나서 반가워.", answers: ["I'm glad to see you again.", "I'm glad to meet you again."],
        wrong: { "i am glad to seeing you again": "to 뒤에는 동사 원래 모양 see를 써요.", "i glad to see you again": "‘기뻐’는 I 뒤에 am을 붙여 I'm glad예요." },
        tip: { en: "Good to see you again.", why: "Good to see you도 ‘반가워’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "같이 가게 돼서 기뻐.", answers: ["I'm glad to go with you.", "I'm glad to come with you."],
        wrong: { "i am glad to going with you": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I'm excited to go with you.", why: "excited는 ‘신나는’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네 소식 들어서 기뻐.", answers: ["I'm glad to hear from you."],
        wrong: { "i am glad to hearing from you": "to 뒤에는 동사 원래 모양 hear를 써요." },
        tip: { en: "It's great to hear from you.", why: "hear from은 ‘~에게서 연락을 받다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너랑 얘기하게 돼서 기뻐.", answers: ["I'm glad to talk to you.", "I'm glad to talk with you."],
        wrong: { "i am glad to talk you": "‘~와 얘기하다’는 talk 뒤에 to나 with를 붙여요." },
        tip: { en: "It's nice talking to you.", why: "‘얘기 나눠서 좋다’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "집에 와서 기뻐.", answers: ["I'm glad to be home.", "I'm glad to be back home."],
        ctx: { lead: "see you 대신 ‘집에 있다(be home)’로 바꿔 보세요.", en: "I'm glad to see you." },
        wrong: { "i am glad to home": "home 앞에 be를 붙여 be home이에요." },
        tip: { en: "It feels good to be home.", why: "‘집에 오니 좋다’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "만나서 반가워.", answers: ["I'm glad to meet you.", "I'm glad to meet you, Mina."],
        dialog: { a: "This is my friend, Mina.", aKo: "이쪽은 내 친구 미나야." },
        wrong: { "i am glad to meeting you": "to 뒤에는 동사 원래 모양 meet을 써요.", "i am glad meet you": "할 일 앞에 to를 붙여요. glad to meet이에요." },
        tip: { en: "Nice to meet you, Mina.", why: "처음 만났을 때 가장 흔한 인사예요." } }
    ]
  };
})(window.EP);
