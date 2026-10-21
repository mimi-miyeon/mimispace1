/* 세션 161. What do you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[161] = {
    no: 161, form: "What do you ~?", stem: "What do you", meaning: "무엇을 ~해요?",
    hint: "What do you + 동사?",
    intro: {
      blocks: [["What", "무엇을"], ["do you ~?", "너는 ~하니?"]],
      lines: [
        "What do you + 동사?는 ‘너 뭘 ~해?’예요.",
        "do you 뒤에는 동사 원래 모양을 써요.",
        "What do you do?는 ‘무슨 일 해요? (직업)’라는 뜻이에요."
      ],
      examples: [
        { en: "What do you think?", ko: "어떻게 생각해?" },
        { en: "What do you do?", ko: "무슨 일 해요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어떻게 생각해?", before: "What do you", after: "?", answers: ["think"],
        wrong: { "thinking": "do you 뒤에는 동사 원래 모양 think를 써요." },
        tip: { en: "What's your opinion?", why: "opinion은 ‘의견’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "무슨 일 해요?", before: "What do you", after: "?", answers: ["do"],
        wrong: { "work": "직업을 물을 때는 What do you do예요." },
        tip: { en: "What's your job?", why: "‘직업이 뭐예요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "아침에 뭐 먹어?", before: "What do you", after: "for breakfast?", answers: ["eat", "have"],
        wrong: { "eating": "do you 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "Do you skip breakfast?", why: "skip은 ‘거르다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "주말에 뭐 해?", before: "What", after: "you do on weekends?", answers: ["do"],
        wrong: { "are": "동사 do가 있으니 What do you예요.", "does": "you 앞에는 do를 써요." },
        tip: { en: "Any weekend plans?", why: "‘주말 계획 있어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 뭐라고 불러?", before: "", after: "do you call it?", answers: ["What"],
        wrong: { "how": "‘뭐라고 불러?’는 What do you call it이에요." },
        tip: { en: "What's it called?", why: "‘그거 이름이 뭐야?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 뭐 원해?", answers: ["What do you want?"],
        wrong: { "what you want": "물을 때는 do를 붙여요. What do you예요.", "what do you wants": "do you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "What would you like?", why: "would like는 더 공손해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이거 뭐라고 생각해?", answers: ["What do you think of this?", "What do you think about this?"],
        wrong: { "what do you think for this": "‘~을 어떻게 생각해?’는 think of예요." },
        tip: { en: "How do you like it?", why: "‘마음에 들어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 뭐 마셔?", answers: ["What do you drink?", "What do you want to drink?"],
        wrong: { "what do you drinking": "do you 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "Coffee or tea?", why: "‘커피 아니면 차?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 그거 무슨 뜻이야?", answers: ["What do you mean?", "What do you mean by that?"],
        wrong: { "what do you meaning": "do you 뒤에는 동사 원래 모양 mean을 써요.", "what is you mean": "‘무슨 뜻이야?’는 What do you mean이에요." },
        tip: { en: "I don't get it.", why: "‘이해가 안 돼’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 뭐 알아?", answers: ["What do you know?"],
        ctx: { lead: "think 대신 ‘알다(know)’로 바꿔 보세요.", en: "What do you think?" },
        wrong: { "what do you knows": "do you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Tell me everything.", why: "‘다 말해 봐’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 쉬는 시간에 뭐 해?", answers: ["What do you do in your free time?", "What do you do in your spare time?"],
        dialog: { a: "I like hiking. What about you?", aKo: "나는 등산 좋아해. 너는?" },
        wrong: { "what do you do in your free times": "free time은 s를 붙이지 않아요." },
        tip: { en: "Any hobbies?", why: "‘취미 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
