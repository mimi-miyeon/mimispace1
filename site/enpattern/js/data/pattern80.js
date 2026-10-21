/* 세션 80. It will be appreciated if ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[80] = {
    no: 80, form: "It will be appreciated if ~.", stem: "It will be appreciated if", meaning: "~해 주시면 감사하겠습니다.",
    hint: "It will be appreciated if + 주어 + 동사",
    intro: {
      blocks: [["It will be appreciated", "감사하겠다"], ["if ~", "~해 주시면"]],
      lines: [
        "It will be appreciated if ~는 ‘~해 주시면 감사하겠습니다’예요. 이메일이나 공지처럼 정중한 글에 써요.",
        "if 뒤에는 ‘주어 + 동사’를 쓰고, 앞으로의 일이라도 현재형을 써요. (if you reply)",
        "말할 때는 I'd appreciate it if ~를 더 자주 써요."
      ],
      examples: [
        { en: "It will be appreciated if you reply soon.", ko: "빨리 답장 주시면 감사하겠습니다." },
        { en: "It will be appreciated if you arrive on time.", ko: "제시간에 와 주시면 감사하겠습니다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "조용히 해 주시면 감사하겠습니다.", before: "It will be appreciated", after: "you keep quiet.", answers: ["if"],
        wrong: { "that": "‘~해 주시면’은 that이 아니라 if를 써요.", "when": "‘~해 주시면’은 when이 아니라 if를 써요." },
        tip: { en: "Please keep quiet.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "파일을 보내 주시면 감사하겠습니다.", before: "It will be appreciated if you", after: "the file.", answers: ["send"],
        wrong: { "will send": "if 뒤에는 앞으로의 일도 현재형 send를 써요.", "sent": "if 뒤에는 현재형 send를 써요." },
        tip: { en: "Please send me the file.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "도와주시면 감사하겠습니다.", before: "It will be", after: "if you help.", answers: ["appreciated"],
        wrong: { "appreciate": "‘감사하게 여겨지다’는 be appreciated예요.", "appreciating": "‘감사하게 여겨지다’는 be appreciated예요." },
        tip: { en: "I'd appreciate your help.", why: "I'd appreciate는 말할 때 자주 써요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "미리 알려 주시면 감사하겠습니다.", before: "It will be appreciated if you let us know in", after: ".", answers: ["advance"],
        wrong: { "before": "‘미리’는 in advance예요." },
        tip: { en: "Please let us know early.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "줄을 서 주시면 감사하겠습니다.", before: "It", after: "be appreciated if you wait in line.", answers: ["will"],
        wrong: { "is will": "It 뒤에는 will be appreciated예요." },
        tip: { en: "Please wait in line.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "회의에 와 주시면 감사하겠습니다.", answers: ["It will be appreciated if you come to the meeting.", "It will be appreciated if you attend the meeting."],
        wrong: { "it will be appreciated if you will come to the meeting": "if 뒤에는 앞으로의 일도 현재형 come을 써요." },
        tip: { en: "Please join the meeting.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 양식을 작성해 주시면 감사하겠습니다.", answers: ["It will be appreciated if you fill out this form.", "It will be appreciated if you complete this form.", "It will be appreciated if you fill in this form."],
        wrong: { "it will be appreciated if you fill this form": "‘작성하다’는 fill out이에요." },
        tip: { en: "Please fill out this form.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오늘까지 답해 주시면 감사하겠습니다.", answers: ["It will be appreciated if you reply by today.", "It will be appreciated if you answer by today.", "It will be appreciated if you respond by today."],
        wrong: { "it will be appreciated if you reply until today": "마감 ‘~까지’는 until이 아니라 by예요." },
        tip: { en: "Please reply by today.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "휴대폰을 꺼 주시면 감사하겠습니다.", answers: ["It will be appreciated if you turn off your phone.", "It will be appreciated if you turn off your phones.", "It will be appreciated if you turn your phone off."],
        wrong: { "it will be appreciated if you turn on your phone": "‘끄다’는 turn on이 아니라 turn off예요." },
        tip: { en: "Please turn off your phone.", why: "Please로 짧게 부탁해도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "다시 확인해 주시면 감사하겠습니다.", answers: ["It will be appreciated if you check again.", "It will be appreciated if you check it again."],
        ctx: { lead: "reply soon 대신 ‘다시 확인하다(check again)’로 바꿔 보세요.", en: "It will be appreciated if you reply soon." },
        wrong: { "it will be appreciated if you will check again": "if 뒤에는 앞으로의 일도 현재형 check를 써요." },
        tip: { en: "Please double-check.", why: "double-check는 ‘다시 확인하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "의견을 주시면 감사하겠습니다.", answers: ["It will be appreciated if you give us your opinion.", "It will be appreciated if you share your opinion.", "It will be appreciated if you give us feedback.", "It will be appreciated if you share your thoughts."],
        dialog: { a: "Is there anything I can do?", aKo: "제가 할 수 있는 일이 있을까요?" },
        wrong: { "it will be appreciated if you will give us feedback": "if 뒤에는 앞으로의 일도 현재형 give를 써요." },
        tip: { en: "Your feedback would help a lot.", why: "feedback은 ‘의견’이에요." } }
    ]
  };
})(window.EP);
