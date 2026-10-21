/* 세션 153. When do you want to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[153] = {
    no: 153, form: "When do you want to ~?", stem: "When do you want to", meaning: "언제 ~하고 싶어요?",
    hint: "When do you want to + 동사?",
    intro: {
      blocks: [["When do you want", "너는 언제 원하니"], ["to ~?", "~하는 것을"]],
      lines: [
        "When do you want to + 동사?는 ‘언제 ~하고 싶어? / 언제 ~할래?’예요.",
        "약속 시간을 정할 때 많이 써요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "When do you want to meet?", ko: "언제 만날래?" },
        { en: "When do you want to go?", ko: "언제 가고 싶어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "언제 만날래?", before: "When do you want to", after: "?", answers: ["meet"],
        wrong: { "meeting": "to 뒤에는 동사 원래 모양 meet을 써요." },
        tip: { en: "When are you free?", why: "‘언제 시간 돼?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "언제 출발할래?", before: "When do you want", after: "leave?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "What time should we go?", why: "‘몇 시에 갈까?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "언제 먹을래?", before: "When do you", after: "to eat?", answers: ["want"],
        wrong: { "wants": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Are you hungry?", why: "‘배고파?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "언제 시작할래?", before: "When do you want to", after: "?", answers: ["start", "begin"],
        wrong: { "starting": "to 뒤에는 동사 원래 모양 start를 써요." },
        tip: { en: "Ready when you are.", why: "‘네가 준비되면 나도 돼’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "언제 이사하고 싶어?", before: "When", after: "you want to move?", answers: ["do"],
        wrong: { "are": "want가 동사라 do를 써요." },
        tip: { en: "When's moving day?", why: "moving day는 ‘이삿날’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "언제 영화 볼래?", answers: ["When do you want to watch a movie?", "When do you want to see a movie?", "When do you want to go to the movies?"],
        wrong: { "when do you want to watching a movie": "to 뒤에는 동사 원래 모양 watch를 써요.", "when you want to watch a movie": "물을 때는 do를 붙여요. When do you예요." },
        tip: { en: "Are you free this weekend?", why: "‘이번 주말에 시간 돼?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "언제 결혼하고 싶어?", answers: ["When do you want to get married?"],
        wrong: { "when do you want to marry": "‘결혼하다’는 get married가 자연스러워요." },
        tip: { en: "Do you have any plans?", why: "‘계획 있어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "언제 다시 올래?", answers: ["When do you want to come back?", "When do you want to come again?"],
        wrong: { "when do you want to came back": "to 뒤에는 동사 원래 모양 come을 써요." },
        tip: { en: "Come back anytime.", why: "‘언제든 다시 와’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "언제 그거 끝내고 싶어?", answers: ["When do you want to finish it?", "When do you want to get it done?"],
        wrong: { "when do you want to finishing it": "to 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "What's your deadline?", why: "deadline은 ‘마감’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "언제 얘기할래?", answers: ["When do you want to talk?"],
        ctx: { lead: "meet 대신 ‘얘기하다(talk)’로 바꿔 보세요.", en: "When do you want to meet?" },
        wrong: { "when do you want to talking": "to 뒤에는 동사 원래 모양 talk를 써요." },
        tip: { en: "Let's talk later.", why: "‘나중에 얘기하자’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아! 언제 갈래?", answers: ["Great! When do you want to go?", "Okay! When do you want to go?", "When do you want to go?", "Sure! When do you want to go?"],
        dialog: { a: "Let's go to the beach.", aKo: "바다 가자." },
        wrong: { "great when do you want to going": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Sounds fun! When?", why: "‘재밌겠다! 언제?’라는 말이에요." } }
    ]
  };
})(window.EP);
