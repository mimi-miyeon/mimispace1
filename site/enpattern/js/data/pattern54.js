/* 세션 54. What are you ~ing? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[54] = {
    no: 54, form: "What are you ~ing?", stem: "What are you", meaning: "당신은 무엇을 ~하고 있어요?",
    hint: "What are you + 동사-ing?",
    intro: {
      blocks: [["What", "무엇을"], ["are you ~ing", "너는 ~하고 있니"]],
      lines: [
        "What are you ~ing?는 ‘너 뭐 ~하고 있어?’예요.",
        "Are you ~ing? 앞에 What을 붙이면 ‘무엇을’ 묻는 말이 돼요.",
        "What이 ‘무엇을’이라서 뒤에 it을 다시 쓰지 않아요."
      ],
      examples: [
        { en: "What are you doing?", ko: "너 뭐 해?" },
        { en: "What are you looking at?", ko: "너 뭐 보고 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 뭐 먹고 있어?", before: "What are you", after: "?", answers: ["eating"],
        wrong: { "eat": "are you 뒤에는 동사에 ing를 붙여요. eating이에요." },
        tip: { en: "What's that you're eating?", why: "‘먹고 있는 그거 뭐야?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 뭐 읽고 있어?", before: "", after: "are you reading?", answers: ["What"],
        wrong: { "how": "‘무엇을’은 How가 아니라 What이에요." },
        tip: { en: "Is that a good book?", why: "‘그 책 재밌어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 뭐 찾고 있어?", before: "What are you looking", after: "?", answers: ["for"],
        wrong: { "at": "look at은 ‘보다’예요. ‘찾다’는 look for예요." },
        tip: { en: "Did you lose something?", why: "‘뭐 잃어버렸어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 무슨 생각 하고 있어?", before: "What are you", after: "about?", answers: ["thinking"],
        wrong: { "think": "are you 뒤에는 동사에 ing를 붙여요. thinking이에요." },
        tip: { en: "What's on your mind?", why: "‘무슨 생각 해?’라는 자연스러운 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 뭐 듣고 있어?", before: "What", after: "you listening to?", answers: ["are"],
        wrong: { "do": "~ing로 물을 때는 do가 아니라 are예요.", "is": "you와는 is가 아니라 are를 써요." },
        tip: { en: "What song is this?", why: "‘이거 무슨 노래야?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 요즘 뭐 공부하고 있어?", answers: ["What are you studying these days?", "What are you studying lately?"],
        wrong: { "what do you studying these days": "~ing로 물을 때는 do가 아니라 are예요.", "what you are studying these days": "묻는 말은 What 뒤에 are you 순서예요." },
        tip: { en: "What are you into these days?", why: "be into는 ‘~에 빠져 있다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 뭐 만들고 있어?", answers: ["What are you making?"],
        wrong: { "what are you make": "are you 뒤에는 동사에 ing를 붙여요. making이에요." },
        tip: { en: "What's that you're making?", why: "‘만들고 있는 그거 뭐야?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 무슨 말 하는 거야?", answers: ["What are you talking about?"],
        wrong: { "what are you talking": "‘~에 대해 말하다’는 talk about이에요. 끝에 about을 붙여요." },
        tip: { en: "What do you mean?", why: "‘무슨 뜻이야?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 거기서 뭐 하고 있어?", answers: ["What are you doing there?", "What are you doing over there?"],
        wrong: { "what do you doing there": "~ing로 물을 때는 do가 아니라 are예요." },
        tip: { en: "Why are you there?", why: "‘왜 거기 있어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 뭐 쓰고 있어?", answers: ["What are you writing?"],
        ctx: { lead: "doing 대신 ‘쓰다(writing)’로 바꿔 보세요.", en: "What are you doing?" },
        wrong: { "what are you writeing": "e로 끝나는 동사는 e를 빼고 ing를 붙여요. writing이에요.", "what are you write": "are you 뒤에는 동사에 ing를 붙여요. writing이에요." },
        tip: { en: "Are you writing something?", why: "‘뭐 쓰는 중이야?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "왜? 뭐 하고 있는데?", answers: ["Why? What are you doing?", "What are you doing?"],
        dialog: { a: "Shh! I'm busy.", aKo: "쉿! 나 바빠." },
        wrong: { "why what you are doing": "묻는 말은 What 뒤에 are you 순서예요." },
        tip: { en: "Busy with what?", why: "‘뭐 때문에 바빠?’라는 말이에요." } }
    ]
  };
})(window.EP);
