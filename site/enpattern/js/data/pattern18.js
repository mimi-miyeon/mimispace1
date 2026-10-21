/* 세션 18. Can I/you ~? (형태가 둘: stem을 /로 나눠 적는다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[18] = {
    no: 18, form: "Can I/you ~?", stem: "Can I/Can you", meaning: "제가/당신이 ~할 수 있나요?",
    hint: "Can I/you + 동사?",
    intro: {
      blocks: [["Can", "~할 수 있니?"], ["I / you", "내가 / 네가"], ["~", "동사"]],
      lines: [
        "Can I ~?는 ‘내가 ~해도 돼?’, Can you ~?는 ‘~해 줄 수 있어?’예요.",
        "I can ~에서 Can을 앞으로 보내면 묻는 말이 돼요.",
        "Can 뒤에도 동사 원래 모양을 써요. to는 붙이지 않아요."
      ],
      examples: [
        { en: "Can I go now?", ko: "나 이제 가도 돼?" },
        { en: "Can you help me?", ko: "나 좀 도와줄 수 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 들어가도 돼?", before: "", after: "I come in?", answers: ["Can"],
        wrong: { "do": "‘~해도 돼?’는 Do가 아니라 Can으로 물어요.", "am": "‘~해도 돼?’는 Am이 아니라 Can으로 물어요." },
        tip: { en: "May I come in?", why: "May I는 더 공손하게 묻는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "문 좀 닫아 줄 수 있어?", before: "Can", after: "close the door?", answers: ["you"],
        wrong: { "i": "‘네가 해 줄 수 있어?’는 Can you예요. Can I는 ‘내가 해도 돼?’예요.", "your": "your는 ‘너의’예요. ‘네가’는 you예요." },
        tip: { en: "Could you close the door?", why: "Could you는 더 정중한 부탁이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 질문 하나 해도 돼?", before: "Can", after: "ask a question?", answers: ["I"],
        wrong: { "you": "‘내가 해도 돼?’는 Can I예요. Can you는 ‘네가 해 줄 수 있어?’예요.", "me": "‘내가’는 me가 아니라 I예요." },
        tip: { en: "I have a question.", why: "‘질문 있어’로 바로 말해도 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나한테 소금 좀 건네줄 수 있어?", before: "Can you", after: "me the salt?", answers: ["pass", "give"],
        wrong: { "passed": "Can 뒤에는 동사 원래 모양 pass를 써요.", "passing": "Can 뒤에는 동사 원래 모양 pass를 써요." },
        tip: { en: "Pass me the salt, please.", why: "please를 붙여 짧게 부탁해도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 이거 입어 봐도 돼?", before: "Can I", after: "this on?", answers: ["try"],
        wrong: { "wear": "‘입어 보다’는 try on이에요. wear는 ‘입고 있다’예요.", "trying": "Can 뒤에는 동사 원래 모양 try를 써요." },
        tip: { en: "May I try this on?", why: "May I는 더 공손하게 묻는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 화장실 써도 돼?", answers: ["Can I use the bathroom?", "Can I use the restroom?", "Can I use your bathroom?"],
        wrong: { "can you use the bathroom": "‘내가 써도 돼?’는 Can I예요. Can you는 ‘네가 할 수 있어?’예요.", "can i using the bathroom": "Can 뒤에는 동사 원래 모양 use를 써요." },
        tip: { en: "May I use the bathroom?", why: "May I는 더 공손하게 묻는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 좀 깨워 줄 수 있어?", answers: ["Can you wake me up?"],
        wrong: { "can i wake me up": "‘네가 해 줄 수 있어?’는 Can you예요.", "can you wake up me": "me 같은 말은 wake와 up 사이에 넣어 wake me up으로 써요." },
        tip: { en: "Could you wake me up?", why: "Could you는 더 정중한 부탁이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 창문 열어도 돼?", answers: ["Can I open the window?"],
        wrong: { "can you open the window": "‘내가 열어도 돼?’는 Can I예요. Can you는 ‘네가 열어 줄래?’예요.", "can i to open the window": "Can 뒤에는 to를 쓰지 않아요." },
        tip: { en: "Do you mind if I open the window?", why: "‘창문 열어도 괜찮을까?’라는 정중한 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "천천히 말해 줄 수 있어?", answers: ["Can you speak slowly?", "Can you speak more slowly?", "Can you talk slowly?", "Can you talk more slowly?"],
        wrong: { "can i speak slowly": "‘네가 해 줄 수 있어?’는 Can you예요." },
        tip: { en: "Could you slow down a little?", why: "slow down은 ‘속도를 늦추다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 여기 앉아도 돼?", answers: ["Can I sit here?"],
        ctx: { lead: "‘해도 돼?’라고 묻는 말로 바꿔 보세요.", en: "I can sit here." },
        wrong: { "i can sit here": "묻는 말은 Can을 앞으로 보내요.", "can you sit here": "‘내가 앉아도 돼?’는 Can I예요." },
        tip: { en: "Is this seat taken?", why: "‘이 자리 주인 있어요?’라고 묻는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "우유 좀 사다 줄 수 있어?", answers: ["Can you buy some milk?", "Can you get some milk?", "Can you buy me some milk?", "Can you get me some milk?", "Can you pick up some milk?"],
        dialog: { a: "I'm going to the store.", aKo: "나 가게 가." },
        wrong: { "can i buy some milk": "‘네가 해 줄 수 있어?’는 Can you예요.", "can you buy some milks": "milk는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "Could you grab some milk?", why: "grab은 ‘얼른 사 오다’라는 느낌이에요." } }
    ]
  };
})(window.EP);
