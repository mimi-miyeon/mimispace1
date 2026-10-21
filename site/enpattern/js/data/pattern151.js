/* 세션 151. When is ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[151] = {
    no: 151, form: "When is ~?", stem: "When is/When's", meaning: "~가 언제예요?",
    hint: "When is + 명사?",
    intro: {
      blocks: [["When is", "언제이다"], ["~?", "명사"]],
      lines: [
        "When is + 명사?는 ‘~가 언제야?’예요. 날짜나 시간을 물어요.",
        "When is는 When's로 줄여 말하기도 해요.",
        "여러 개를 물을 때는 When are ~?예요. (When are your exams?)"
      ],
      examples: [
        { en: "When is your birthday?", ko: "생일이 언제야?" },
        { en: "When is the meeting?", ko: "회의가 언제야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "생일이 언제야?", before: "When is your", after: "?", answers: ["birthday"],
        wrong: { "birth": "‘생일’은 birthday예요." },
        tip: { en: "When were you born?", why: "‘언제 태어났어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "회의가 언제야?", before: "When", after: "the meeting?", answers: ["is"],
        wrong: { "are": "meeting 하나라 is를 써요.", "does": "‘~가 언제야?’는 When is예요." },
        tip: { en: "What time is the meeting?", why: "What time은 ‘몇 시’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "다음 기차가 언제예요?", before: "When is the next", after: "?", answers: ["train"],
        wrong: { "trains": "the next 뒤에는 하나만 써요. train이에요." },
        tip: { en: "What time does the next train leave?", why: "leave는 ‘출발하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "마감이 언제야?", before: "When is the", after: "?", answers: ["deadline"],
        wrong: { "dead line": "‘마감’은 deadline이에요. 한 단어예요." },
        tip: { en: "When is it due?", why: "due는 ‘마감인’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "결혼식이 언제야?", before: "", after: "is the wedding?", answers: ["When"],
        wrong: { "where": "날짜를 물을 때는 When이에요." },
        tip: { en: "What's the date of the wedding?", why: "date는 ‘날짜’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "시험이 언제야?", answers: ["When is the exam?", "When is the test?", "When's the exam?", "When's the test?"],
        wrong: { "when does the exam": "‘~가 언제야?’는 When is예요.", "when is exam": "exam 앞에 the를 붙여요." },
        tip: { en: "When do you take the exam?", why: "take an exam은 ‘시험 보다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "체크아웃이 언제예요?", answers: ["When is checkout?", "When is check-out?", "When's checkout?", "When is the checkout time?"],
        wrong: { "when are checkout": "checkout은 하나라 is를 써요." },
        tip: { en: "What time is checkout?", why: "What time은 ‘몇 시’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네 휴가가 언제야?", answers: ["When is your vacation?", "When's your vacation?", "When is your holiday?"],
        wrong: { "when is you vacation": "‘네’는 your예요." },
        tip: { en: "When are you off?", why: "be off는 ‘쉬다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가장 좋은 때가 언제야?", answers: ["When is the best time?", "When's the best time?"],
        wrong: { "when is best time": "best 앞에 the를 붙여요." },
        tip: { en: "What's a good time?", why: "‘언제가 좋아?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "콘서트가 언제야?", answers: ["When is the concert?", "When's the concert?"],
        ctx: { lead: "the meeting 대신 ‘콘서트(the concert)’로 바꿔 보세요.", en: "When is the meeting?" },
        wrong: { "when is concert": "concert 앞에 the를 붙여요." },
        tip: { en: "What date is the concert?", why: "date는 ‘날짜’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "파티가 언제야?", answers: ["When is the party?", "When's the party?"],
        dialog: { a: "I'm having a party.", aKo: "나 파티 열 거야." },
        wrong: { "when does the party": "‘~가 언제야?’는 When is예요." },
        tip: { en: "What day is the party?", why: "‘파티가 무슨 요일이야?’라는 말이에요." } }
    ]
  };
})(window.EP);
