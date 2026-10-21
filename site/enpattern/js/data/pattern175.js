/* 세션 175. How long will you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[175] = {
    no: 175, form: "How long will you ~?", stem: "How long will you", meaning: "얼마나 오래 ~할 거예요?",
    hint: "How long will you + 동사?",
    intro: {
      blocks: [["How long", "얼마나 오래"], ["will you ~?", "너는 ~할 거니?"]],
      lines: [
        "How long will you + 동사?는 ‘얼마나 오래 ~할 거야?’예요. 앞으로의 기간을 물어요.",
        "will you 뒤에는 동사 원래 모양을 써요.",
        "How long will you be ~?(얼마나 ~에 있을 거야?)도 많이 써요."
      ],
      examples: [
        { en: "How long will you stay?", ko: "얼마나 머물 거야?" },
        { en: "How long will you be away?", ko: "얼마나 자리를 비울 거야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "얼마나 머물 거야?", before: "How long will you", after: "?", answers: ["stay"],
        wrong: { "staying": "will you 뒤에는 동사 원래 모양 stay를 써요." },
        tip: { en: "When are you leaving?", why: "‘언제 떠나?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "얼마나 자리를 비울 거야?", before: "How long will you be", after: "?", answers: ["away"],
        wrong: { "out of": "‘자리를 비우다’는 be away예요." },
        tip: { en: "When will you be back?", why: "‘언제 돌아와?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "얼마나 기다릴 거야?", before: "How long", after: "you wait?", answers: ["will"],
        wrong: { "do": "앞으로의 일이라 will을 써요." },
        tip: { en: "Don't wait too long.", why: "‘너무 오래 기다리지 마’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "거기 얼마나 있을 거야?", before: "How long will you", after: "there?", answers: ["be"],
        wrong: { "are": "will you 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "Text me when you arrive.", why: "‘도착하면 문자 해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "얼마나 걸릴 거야?", before: "How", after: "will you be?", answers: ["long"],
        wrong: { "much": "기간을 물을 때는 How long이에요." },
        tip: { en: "Will you be long?", why: "‘오래 걸려?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "서울에 얼마나 머물 거예요?", answers: ["How long will you stay in Seoul?", "How long will you be in Seoul?"],
        wrong: { "how long will you staying in seoul": "will you 뒤에는 동사 원래 모양 stay를 써요.", "how long you will stay in seoul": "물을 때는 will을 you 앞에 써요." },
        tip: { en: "Enjoy your stay.", why: "‘즐거운 시간 보내세요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "휴가 얼마나 갈 거야?", answers: ["How long will you be on vacation?", "How long will you be away on vacation?"],
        wrong: { "how long will you on vacation": "will you 뒤에 be를 붙여요." },
        tip: { en: "Have a great vacation.", why: "‘휴가 잘 보내’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 일 얼마나 할 거야?", answers: ["How long will you work there?", "How long will you do that job?", "How long will you keep that job?"],
        wrong: { "how long will you working there": "will you 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Do you like your job?", why: "‘일 마음에 들어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "회사 얼마나 쉴 거야?", answers: ["How long will you be off work?", "How long will you be off?", "How long will you take off?"],
        wrong: { "how long will you off work": "will you 뒤에 be를 붙여요." },
        tip: { en: "Enjoy your time off.", why: "time off는 ‘쉬는 기간’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "얼마나 공부할 거야?", answers: ["How long will you study?"],
        ctx: { lead: "stay 대신 ‘공부하다(study)’로 바꿔 보세요.", en: "How long will you stay?" },
        wrong: { "how long will you studying": "will you 뒤에는 동사 원래 모양 study를 써요." },
        tip: { en: "Don't stay up too late.", why: "stay up은 ‘안 자고 깨어 있다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "얼마나 있을 거야?", answers: ["How long will you be there?", "How long will you stay?", "How long will you stay there?"],
        dialog: { a: "I'm going to Canada next week.", aKo: "나 다음 주에 캐나다 가." },
        wrong: { "how long will you there": "will you 뒤에 be를 붙여요." },
        tip: { en: "When do you come back?", why: "‘언제 돌아와?’라는 말이에요." } }
    ]
  };
})(window.EP);
