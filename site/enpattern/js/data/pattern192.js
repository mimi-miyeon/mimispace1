/* 세션 192. Would you like to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[192] = {
    no: 192, form: "Would you like to ~?", stem: "Would you like to", meaning: "~하실래요?",
    hint: "Would you like to + 동사?",
    intro: {
      blocks: [["Would you like", "원하시나요"], ["to ~?", "~하는 것을"]],
      lines: [
        "Would you like to + 동사?는 ‘~하실래요? / ~할래?’예요. 공손하게 제안하거나 초대해요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "대답은 I'd love to! (좋아요!)처럼 해요."
      ],
      examples: [
        { en: "Would you like to come in?", ko: "들어오실래요?" },
        { en: "Would you like to join us?", ko: "저희랑 같이 하실래요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "들어오실래요?", before: "Would you like to", after: "in?", answers: ["come"],
        wrong: { "coming": "to 뒤에는 동사 원래 모양 come을 써요." },
        tip: { en: "Please, come in.", why: "‘들어오세요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "저희랑 같이 하실래요?", before: "Would you like to", after: "us?", answers: ["join"],
        wrong: { "join with": "join 뒤에는 with 없이 바로 us를 써요.", "joining": "to 뒤에는 동사 원래 모양 join을 써요." },
        tip: { en: "Come join us.", why: "‘같이 해요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "메시지 남기실래요?", before: "Would you like to", after: "a message?", answers: ["leave"],
        wrong: { "leaving": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "Can I take a message?", why: "‘메모 남겨 드릴까요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "앉으실래요?", before: "Would you like", after: "sit down?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Have a seat.", why: "‘앉으세요’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "입어 보실래요?", before: "Would you like to try it", after: "?", answers: ["on"],
        wrong: { "in": "‘입어 보다’는 try on이에요." },
        tip: { en: "The fitting room is there.", why: "fitting room은 ‘탈의실’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "저녁 같이 드실래요?", answers: ["Would you like to have dinner with me?", "Would you like to have dinner together?", "Would you like to eat dinner with me?"],
        wrong: { "would you like to having dinner with me": "to 뒤에는 동사 원래 모양 have를 써요.", "would you like have dinner with me": "like 뒤에 to를 붙여요." },
        tip: { en: "Are you free for dinner?", why: "‘저녁 시간 돼?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "춤추실래요?", answers: ["Would you like to dance?"],
        wrong: { "would you like to dancing": "to 뒤에는 동사 원래 모양 dance를 써요." },
        tip: { en: "Shall we dance?", why: "‘춤출까요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "뭐 좀 드실래요?", answers: ["Would you like to eat something?", "Would you like to have something to eat?"],
        wrong: { "would you like to eat anything something": "‘뭐 좀’은 something이에요." },
        tip: { en: "Are you hungry?", why: "‘배고파요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "창가 자리에 앉으실래요?", answers: ["Would you like to sit by the window?"],
        wrong: { "would you like to sit by window": "window 앞에 the를 붙여요." },
        tip: { en: "Window seat?", why: "‘창가 자리요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "같이 가실래요?", answers: ["Would you like to come with us?", "Would you like to come with me?", "Would you like to come along?"],
        ctx: { lead: "come in 대신 ‘같이 가다(come with us)’로 바꿔 보세요.", en: "Would you like to come in?" },
        wrong: { "would you like to come with we": "with 뒤에는 we가 아니라 us를 써요." },
        tip: { en: "Tag along!", why: "tag along은 ‘따라가다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "오늘 밤에 영화 보실래요?", answers: ["Would you like to watch a movie tonight?", "Would you like to see a movie tonight?", "Would you like to go to the movies tonight?"],
        dialog: { a: "I'm free tonight.", aKo: "저 오늘 밤에 시간 있어요." },
        wrong: { "would you like to watching a movie tonight": "to 뒤에는 동사 원래 모양 watch를 써요." },
        tip: { en: "Movie tonight?", why: "‘오늘 밤 영화?’라는 말이에요." } }
    ]
  };
})(window.EP);
