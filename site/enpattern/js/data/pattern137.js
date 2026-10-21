/* 세션 137. Do you mind if I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[137] = {
    no: 137, form: "Do you mind if I ~?", stem: "Do you mind if I", meaning: "제가 ~해도 괜찮을까요?",
    hint: "Do you mind if I + 동사?",
    intro: {
      blocks: [["Do you mind", "꺼리나요"], ["if I ~?", "제가 ~하면"]],
      lines: [
        "Do you mind if I + 동사?는 ‘제가 ~해도 될까요?’예요. 허락을 공손하게 구해요.",
        "if I 뒤에는 동사 원래 모양(현재형)을 써요.",
        "‘괜찮아요’는 No, go ahead. / Not at all.이에요."
      ],
      examples: [
        { en: "Do you mind if I sit here?", ko: "여기 앉아도 될까요?" },
        { en: "Do you mind if I open the window?", ko: "창문 열어도 될까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "여기 앉아도 될까요?", before: "Do you mind if I", after: "here?", answers: ["sit"],
        wrong: { "sitting": "if I 뒤에는 동사 원래 모양 sit을 써요.", "sat": "if I 뒤에는 동사 원래 모양 sit을 써요." },
        tip: { en: "Is this seat taken?", why: "‘이 자리 있어요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "화장실 좀 써도 될까요?", before: "Do you mind if I", after: "the bathroom?", answers: ["use"],
        wrong: { "using": "if I 뒤에는 동사 원래 모양 use를 써요." },
        tip: { en: "May I use the restroom?", why: "May I도 공손한 허락 구하기예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "질문 하나 해도 될까요?", before: "Do you mind", after: "I ask a question?", answers: ["if"],
        wrong: { "that": "‘제가 ~하면’은 if I예요." },
        tip: { en: "Can I ask you something?", why: "‘뭐 좀 물어봐도 돼?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "일찍 가도 될까요?", before: "Do you mind if I leave", after: "?", answers: ["early"],
        wrong: { "earlier": "‘일찍’은 early예요." },
        tip: { en: "I have an appointment.", why: "appointment는 ‘약속’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "사진 찍어도 될까요?", before: "Do you mind if", after: "take a picture?", answers: ["I"],
        wrong: { "me": "if 뒤에는 me가 아니라 I를 써요." },
        tip: { en: "Can I take a photo?", why: "‘사진 찍어도 돼요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "창문 열어도 될까요?", answers: ["Do you mind if I open the window?"],
        wrong: { "do you mind if i opening the window": "if I 뒤에는 동사 원래 모양 open을 써요.", "do you mind if me open the window": "if 뒤에는 me가 아니라 I를 써요." },
        tip: { en: "It's stuffy in here.", why: "stuffy는 ‘답답한’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "친구 데려가도 될까요?", answers: ["Do you mind if I bring a friend?", "Do you mind if I bring my friend?"],
        wrong: { "do you mind if i bring friend": "friend는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Is it okay to bring a friend?", why: "‘친구 데려가도 괜찮아요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "TV 켜도 될까요?", answers: ["Do you mind if I turn on the TV?", "Do you mind if I turn the TV on?"],
        wrong: { "do you mind if i turning on the tv": "if I 뒤에는 동사 원래 모양 turn을 써요." },
        tip: { en: "Can I watch TV?", why: "‘TV 봐도 돼요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이거 빌려도 될까요?", answers: ["Do you mind if I borrow this?", "Do you mind if I borrow it?"],
        wrong: { "do you mind if i lend this": "‘빌리다’는 borrow예요. lend는 ‘빌려주다’예요." },
        tip: { en: "I'll give it back tomorrow.", why: "‘내일 돌려줄게요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "여기 주차해도 될까요?", answers: ["Do you mind if I park here?"],
        ctx: { lead: "sit 대신 ‘주차하다(park)’로 바꿔 보세요.", en: "Do you mind if I sit here?" },
        wrong: { "do you mind if i parking here": "if I 뒤에는 동사 원래 모양 park를 써요." },
        tip: { en: "Is parking okay here?", why: "‘여기 주차 괜찮아요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 근데 전화 한 통 해도 될까요?", answers: ["Yes, but do you mind if I make a call?", "Yes, but do you mind if I make a phone call?", "Sure, but do you mind if I make a call?"],
        dialog: { a: "Are you ready to start the meeting?", aKo: "회의 시작할 준비 됐어요?" },
        wrong: { "yes but do you mind if i make call": "call은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Just one quick call.", why: "‘금방 한 통만요’라는 말이에요." } }
    ]
  };
})(window.EP);
