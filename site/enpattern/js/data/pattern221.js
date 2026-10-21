/* 세션 221. Do you ever ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[221] = {
    no: 221, form: "Do you ever ~?", stem: "Do you ever", meaning: "~하긴 해요?",
    hint: "Do you ever + 동사?",
    intro: {
      blocks: [["Do you ever", "너 ~하기는 하니"], ["~?", "동사"]],
      lines: [
        "Do you ever + 동사?는 ‘너 ~하긴 해? / ~할 때 있어?’예요. 습관이나 경험을 물어요.",
        "ever 뒤에는 동사 원래 모양을 써요.",
        "Do you ever feel ~?(~한 기분 들 때 있어?)도 많이 써요."
      ],
      examples: [
        { en: "Do you ever cook?", ko: "너 요리하긴 해?" },
        { en: "Do you ever feel lonely?", ko: "외로울 때 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 요리하긴 해?", before: "Do you ever", after: "?", answers: ["cook"],
        wrong: { "cooking": "ever 뒤에는 동사 원래 모양 cook을 써요." },
        tip: { en: "Can you cook?", why: "‘요리할 줄 알아?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "외로울 때 있어?", before: "Do you ever", after: "lonely?", answers: ["feel"],
        wrong: { "feeling": "ever 뒤에는 동사 원래 모양 feel을 써요." },
        tip: { en: "Are you okay?", why: "‘괜찮아?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 운동하긴 해?", before: "Do you", after: "work out?", answers: ["ever"],
        wrong: { "never": "물을 때는 ever를 써요." },
        tip: { en: "Do you go to the gym?", why: "‘헬스장 다녀?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 쉬긴 해?", before: "Do you ever take a", after: "?", answers: ["break"],
        wrong: { "rest": "‘쉬다’는 take a break예요." },
        tip: { en: "You work too hard.", why: "‘너 일 너무 열심히 해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 일찍 일어날 때 있어?", before: "", after: "you ever get up early?", answers: ["Do"],
        wrong: { "are": "get이 동사라 Do를 써요.", "did": "습관을 물을 때는 Do예요." },
        tip: { en: "Are you a morning person?", why: "‘아침형이야?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 혼자 영화 볼 때 있어?", answers: ["Do you ever watch movies alone?", "Do you ever go to the movies alone?", "Do you ever see movies alone?"],
        wrong: { "do you ever watching movies alone": "ever 뒤에는 동사 원래 모양 watch를 써요.", "do you never watch movies alone": "물을 때는 ever를 써요." },
        tip: { en: "I like going alone.", why: "‘혼자 가는 거 좋아해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그 사람 생각할 때 있어?", answers: ["Do you ever think about him?", "Do you ever think about her?"],
        wrong: { "do you ever think him": "‘~에 대해 생각하다’는 think about이에요." },
        tip: { en: "Do you miss him?", why: "‘그 사람 보고 싶어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 늦잠 잘 때 있어?", answers: ["Do you ever oversleep?", "Do you ever sleep in?"],
        wrong: { "do you ever oversleeping": "ever 뒤에는 동사 원래 모양 oversleep을 써요." },
        tip: { en: "Set two alarms.", why: "‘알람 두 개 맞춰’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 일기 쓰긴 해?", answers: ["Do you ever write in a diary?", "Do you ever keep a diary?", "Do you ever keep a journal?"],
        wrong: { "do you ever write a diary in": "‘일기 쓰다’는 keep a diary예요." },
        tip: { en: "Writing helps.", why: "‘글 쓰는 게 도움 돼’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 운전하긴 해?", answers: ["Do you ever drive?"],
        ctx: { lead: "cook 대신 ‘운전하다(drive)’로 바꿔 보세요.", en: "Do you ever cook?" },
        wrong: { "do you ever driving": "ever 뒤에는 동사 원래 모양 drive를 써요." },
        tip: { en: "Do you have a car?", why: "‘차 있어?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "진짜? 너 쉬긴 해?", answers: ["Really? Do you ever rest?", "Do you ever rest?", "Really? Do you ever take a break?", "Do you ever take a break?"],
        dialog: { a: "I work seven days a week.", aKo: "나 일주일 내내 일해." },
        wrong: { "really do you ever resting": "ever 뒤에는 동사 원래 모양 rest를 써요." },
        tip: { en: "You need a day off.", why: "day off는 ‘쉬는 날’이에요." } }
    ]
  };
})(window.EP);
