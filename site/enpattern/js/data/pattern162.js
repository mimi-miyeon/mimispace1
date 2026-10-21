/* 세션 162. What do you want to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[162] = {
    no: 162, form: "What do you want to ~?", stem: "What do you want to", meaning: "무엇을 ~하고 싶어요?",
    hint: "What do you want to + 동사?",
    intro: {
      blocks: [["What do you want", "너는 무엇을 원하니"], ["to ~?", "~하는 것을"]],
      lines: [
        "What do you want to + 동사?는 ‘뭐 ~하고 싶어? / 뭐 ~할래?’예요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "말할 때는 What do you wanna ~?로 줄여 들리기도 해요."
      ],
      examples: [
        { en: "What do you want to eat?", ko: "뭐 먹고 싶어?" },
        { en: "What do you want to do?", ko: "뭐 하고 싶어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "뭐 먹고 싶어?", before: "What do you want to", after: "?", answers: ["eat"],
        wrong: { "eating": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "What are you hungry for?", why: "‘뭐가 당겨?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "뭐 하고 싶어?", before: "What do you want to", after: "?", answers: ["do"],
        wrong: { "doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Any ideas?", why: "‘좋은 생각 있어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "뭐 마실래?", before: "What do you", after: "to drink?", answers: ["want"],
        wrong: { "wants": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Can I get you a drink?", why: "‘마실 거 갖다줄까?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뭐 보고 싶어?", before: "What do you want", after: "watch?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Movie or TV?", why: "‘영화 아니면 TV?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "커서 뭐 되고 싶어?", before: "What do you want to", after: "when you grow up?", answers: ["be"],
        wrong: { "become": "아이에게 물을 때는 보통 be를 써요." },
        tip: { en: "What's your dream job?", why: "dream job은 ‘꿈의 직업’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "생일에 뭐 받고 싶어?", answers: ["What do you want to get for your birthday?"], alts: ["What do you want for your birthday?"],
        wrong: { "what do you want to get to your birthday": "‘생일에’는 for your birthday예요.", "what do you want to getting for your birthday": "to 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Any birthday wishes?", why: "wish는 ‘소원’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "뭐 사고 싶어?", answers: ["What do you want to buy?"],
        wrong: { "what do you want to buying": "to 뒤에는 동사 원래 모양 buy를 써요.", "what you want to buy": "물을 때는 do를 붙여요. What do you예요." },
        tip: { en: "Window shopping?", why: "window shopping은 ‘구경만 하기’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나한테 뭐 말하고 싶어?", answers: ["What do you want to tell me?", "What do you want to say to me?"],
        wrong: { "what do you want to tell to me": "tell 뒤에는 to 없이 바로 me를 써요." },
        tip: { en: "I'm listening.", why: "‘듣고 있어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "뭐 배우고 싶어?", answers: ["What do you want to learn?"],
        wrong: { "what do you want to learning": "to 뒤에는 동사 원래 모양 learn을 써요." },
        tip: { en: "Any new hobbies?", why: "‘새 취미 있어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "뭐 듣고 싶어?", answers: ["What do you want to listen to?", "What do you want to hear?"],
        ctx: { lead: "eat 대신 ‘듣다(listen to)’로 바꿔 보세요.", en: "What do you want to eat?" },
        wrong: { "what do you want to listen": "‘~을 듣다’는 listen to예요. 끝에 to를 붙여요." },
        tip: { en: "Pick a song.", why: "‘노래 골라’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아! 뭐 하고 싶어?", answers: ["Great! What do you want to do?", "Okay! What do you want to do?", "What do you want to do?", "Sure! What do you want to do?"],
        dialog: { a: "Let's hang out this Saturday.", aKo: "이번 토요일에 놀자." },
        wrong: { "great what do you want to doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Sounds good! Any plans?", why: "‘좋아! 계획 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
