/* 세션 201. What makes you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[201] = {
    no: 201, form: "What makes you ~?", stem: "What makes you", meaning: "왜 ~해요? (무엇이 당신을 ~하게 해요?)",
    hint: "What makes you + 동사/형용사?",
    intro: {
      blocks: [["What makes you", "무엇이 너를 ~하게 하니"], ["~?", "동사 / 형용사"]],
      lines: [
        "What makes you + 동사?는 ‘왜 ~해? (뭐 때문에 ~하는 거야?)’예요. Why보다 부드러워요.",
        "makes 뒤의 you 다음에는 동사 원래 모양이나 형용사를 써요. (What makes you think so?)",
        "What makes you happy?처럼 형용사도 써요."
      ],
      examples: [
        { en: "What makes you think so?", ko: "왜 그렇게 생각해?" },
        { en: "What makes you happy?", ko: "넌 뭐 할 때 행복해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "왜 그렇게 생각해?", before: "What makes you", after: "so?", answers: ["think"],
        wrong: { "thinking": "you 뒤에는 동사 원래 모양 think를 써요.", "to think": "makes you 뒤에는 to 없이 동사 원래 모양을 써요." },
        tip: { en: "Why do you think so?", why: "Why로 물어도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "넌 뭐 할 때 행복해?", before: "What makes you", after: "?", answers: ["happy"],
        wrong: { "happily": "you 뒤에는 형용사 happy를 써요." },
        tip: { en: "What do you enjoy?", why: "‘뭐 하는 거 좋아해?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "왜 그렇게 말해?", before: "What", after: "you say that?", answers: ["makes"],
        wrong: { "make": "What 뒤에는 동사에 s를 붙여요. makes예요." },
        tip: { en: "Why would you say that?", why: "‘왜 그런 말을 해?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "뭐 때문에 그렇게 화났어?", before: "What makes you so", after: "?", answers: ["angry", "mad", "upset"],
        wrong: { "anger": "you 뒤에는 형용사 angry를 써요." },
        tip: { en: "What's bothering you?", why: "‘뭐가 신경 쓰여?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "왜 그녀를 좋아해?", before: "What makes", after: "like her?", answers: ["you"],
        wrong: { "your": "makes 뒤에는 you를 써요." },
        tip: { en: "Why do you like her?", why: "Why로 물어도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "왜 그렇게 확신해?", answers: ["What makes you so sure?"],
        wrong: { "what make you so sure": "What 뒤에는 동사에 s를 붙여요. makes예요.", "what makes you so surely": "you 뒤에는 형용사 sure를 써요." },
        tip: { en: "How do you know?", why: "‘어떻게 알아?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "왜 떠나고 싶어?", answers: ["What makes you want to leave?"],
        wrong: { "what makes you to want to leave": "makes you 뒤에는 to 없이 동사 원래 모양을 써요.", "what makes you wants to leave": "you 뒤에는 동사 원래 모양 want를 써요." },
        tip: { en: "Why do you want to leave?", why: "Why로 물어도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "넌 뭐 할 때 웃어?", answers: ["What makes you laugh?", "What makes you smile?"],
        wrong: { "what makes you laughing": "you 뒤에는 동사 원래 모양 laugh를 써요." },
        tip: { en: "What's funny to you?", why: "‘뭐가 웃겨?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "뭐가 그렇게 특별해?", answers: ["What makes you so special?"], alts: ["What makes it so special?"],
        wrong: { "what makes you so specially": "형용사 special을 써요." },
        tip: { en: "What's so special?", why: "‘뭐가 그렇게 특별해?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "왜 그렇게 믿어?", answers: ["What makes you believe that?", "What makes you believe so?"],
        ctx: { lead: "think so 대신 ‘그렇게 믿다(believe that)’로 바꿔 보세요.", en: "What makes you think so?" },
        wrong: { "what makes you believing that": "you 뒤에는 동사 원래 모양 believe를 써요." },
        tip: { en: "Why do you believe that?", why: "Why로 물어도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "왜 그런 생각을 해?", answers: ["What makes you think that?", "What makes you think so?", "Why? What makes you think that?"],
        dialog: { a: "I don't think he likes me.", aKo: "걔가 날 안 좋아하는 것 같아." },
        wrong: { "what make you think that": "What 뒤에는 동사에 s를 붙여요. makes예요." },
        tip: { en: "Really? Why?", why: "‘진짜? 왜?’라는 말이에요." } }
    ]
  };
})(window.EP);
