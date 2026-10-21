/* 세션 144. I was wondering if ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[144] = {
    no: 144, form: "I was wondering if ~.", stem: "I was wondering if", meaning: "~하는 건지 궁금했어요.",
    hint: "I was wondering if + 주어 + 동사",
    intro: {
      blocks: [["I was wondering", "궁금했어요"], ["if ~", "~해 주실 수 있는지"]],
      lines: [
        "I was wondering if ~는 ‘혹시 ~해 주실 수 있을까 해서요’예요. 아주 공손한 부탁이에요.",
        "보통 if you could + 동사(~해 주실 수 있는지)를 이어서 써요.",
        "was로 과거처럼 말해서 더 부드럽게 들려요."
      ],
      examples: [
        { en: "I was wondering if you could help me.", ko: "혹시 좀 도와주실 수 있을까 해서요." },
        { en: "I was wondering if you're free tonight.", ko: "혹시 오늘 밤 시간 되나 해서요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "혹시 좀 도와주실 수 있을까 해서요.", before: "I was wondering if you", after: "help me.", answers: ["could"],
        wrong: { "can": "더 공손하게는 could를 써요." },
        tip: { en: "Could you help me?", why: "Could you도 공손한 부탁이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "혹시 오늘 밤 시간 되나 해서요.", before: "I was wondering", after: "you're free tonight.", answers: ["if"],
        wrong: { "that": "‘~인지’는 if예요." },
        tip: { en: "Are you free tonight?", why: "‘오늘 밤 시간 돼?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "혹시 펜 좀 빌릴 수 있을까 해서요.", before: "I was wondering if I could", after: "a pen.", answers: ["borrow"],
        wrong: { "lend": "‘빌리다’는 borrow예요. lend는 ‘빌려주다’예요." },
        tip: { en: "Do you have a pen?", why: "‘펜 있어요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "혹시 마감을 연장해 주실 수 있을까 해서요.", before: "I was", after: "if you could extend the deadline.", answers: ["wondering"],
        wrong: { "wonder": "I was 뒤에는 wondering을 써요." },
        tip: { en: "Can I have more time?", why: "‘시간 더 받을 수 있을까요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "혹시 오늘 일찍 가도 될까 해서요.", before: "I", after: "wondering if I could leave early today.", answers: ["was"],
        wrong: { "am": "부탁을 부드럽게 할 때는 was를 써요." },
        tip: { en: "May I leave early?", why: "May I도 공손한 허락 구하기예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "혹시 저 좀 태워 주실 수 있을까 해서요.", answers: ["I was wondering if you could give me a ride.", "I was wondering if you could give me a lift."],
        wrong: { "i was wondering if you could gave me a ride": "could 뒤에는 동사 원래 모양 give를 써요.", "i wondering if you could give me a ride": "I 뒤에 was가 필요해요." },
        tip: { en: "Could you drop me off?", why: "drop off는 ‘내려 주다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "혹시 이거 봐 주실 수 있을까 해서요.", answers: ["I was wondering if you could look at this.", "I was wondering if you could take a look at this.", "I was wondering if you could check this."],
        wrong: { "i was wondering if you could looking at this": "could 뒤에는 동사 원래 모양 look을 써요." },
        tip: { en: "Do you have a minute?", why: "‘잠깐 시간 돼요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "혹시 우리랑 같이 가고 싶은가 해서요.", answers: ["I was wondering if you'd like to join us.", "I was wondering if you want to join us.", "I was wondering if you'd like to come with us."],
        wrong: { "i was wondering if you would like join us": "like 뒤에 to를 붙여요." },
        tip: { en: "Want to come with us?", why: "‘우리랑 같이 갈래?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "혹시 날짜를 바꿀 수 있을까 해서요.", answers: ["I was wondering if I could change the date.", "I was wondering if we could change the date."],
        wrong: { "i was wondering if i could changing the date": "could 뒤에는 동사 원래 모양 change를 써요." },
        tip: { en: "Can we reschedule?", why: "reschedule은 ‘일정을 바꾸다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "혹시 사진 좀 찍어 주실 수 있을까 해서요.", answers: ["I was wondering if you could take a picture.", "I was wondering if you could take our picture.", "I was wondering if you could take a photo."],
        ctx: { lead: "help me 대신 ‘사진을 찍다(take a picture)’로 바꿔 보세요.", en: "I was wondering if you could help me." },
        wrong: { "i was wondering if you could take picture": "picture는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Would you take our picture?", why: "‘사진 좀 찍어 줄래요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 혹시 창가 자리 있을까 해서요.", answers: ["Yes, I was wondering if you have a window seat.", "Yes, I was wondering if there's a window seat.", "I was wondering if you have a window seat."],
        dialog: { a: "Is there anything I can help you with?", aKo: "도와드릴 거 있으세요?" },
        wrong: { "yes i was wondering if you has a window seat": "you 뒤에는 have를 써요." },
        tip: { en: "Window seat, please.", why: "‘창가 자리요’라는 말이에요." } }
    ]
  };
})(window.EP);
