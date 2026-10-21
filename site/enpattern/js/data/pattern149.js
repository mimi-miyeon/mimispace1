/* 세션 149. May I ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[149] = {
    no: 149, form: "May I ~?", stem: "May I", meaning: "~해도 될까요?",
    hint: "May I + 동사?",
    intro: {
      blocks: [["May I", "제가 ~해도 될까요"], ["~?", "동사"]],
      lines: [
        "May I + 동사?는 ‘~해도 될까요?’예요. Can I?보다 공손해요.",
        "May I 뒤에는 동사 원래 모양을 써요.",
        "가게, 회사, 처음 만난 사람에게 쓰기 좋아요."
      ],
      examples: [
        { en: "May I come in?", ko: "들어가도 될까요?" },
        { en: "May I ask your name?", ko: "성함을 여쭤봐도 될까요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "들어가도 될까요?", before: "May I", after: "in?", answers: ["come"],
        wrong: { "coming": "May I 뒤에는 동사 원래 모양 come을 써요.", "go": "상대가 있는 곳으로 ‘들어가다’는 come in이에요." },
        tip: { en: "Is it okay to come in?", why: "‘들어가도 괜찮아요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "성함을 여쭤봐도 될까요?", before: "May I ask your", after: "?", answers: ["name"],
        wrong: { "names": "이름 하나라 name이에요." },
        tip: { en: "What's your name?", why: "‘이름이 뭐예요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 입어 봐도 될까요?", before: "May I try this", after: "?", answers: ["on"],
        wrong: { "in": "‘입어 보다’는 try on이에요." },
        tip: { en: "Where's the fitting room?", why: "fitting room은 ‘탈의실’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "여기 앉아도 될까요?", before: "", after: "I sit here?", answers: ["May"],
        wrong: { "do": "‘~해도 될까요?’는 May I예요." },
        tip: { en: "Is this seat taken?", why: "‘이 자리 있어요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "메뉴 좀 볼 수 있을까요?", before: "May I", after: "the menu?", answers: ["see"],
        wrong: { "look": "‘~을 보다’는 see the menu예요." },
        tip: { en: "Can I get a menu?", why: "‘메뉴 좀 주세요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "질문 하나 해도 될까요?", answers: ["May I ask a question?", "May I ask you a question?"],
        wrong: { "may i asking a question": "May I 뒤에는 동사 원래 모양 ask를 써요.", "may i ask question": "question은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "I have a question.", why: "‘질문이 있어요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "전화 좀 써도 될까요?", answers: ["May I use your phone?", "May I use the phone?"],
        wrong: { "may i using your phone": "May I 뒤에는 동사 원래 모양 use를 써요." },
        tip: { en: "Can I borrow your phone?", why: "borrow는 ‘빌리다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "주문 받아도 될까요?", answers: ["May I take your order?"],
        wrong: { "may i take your orders": "주문 하나라 order예요." },
        tip: { en: "Are you ready to order?", why: "‘주문하시겠어요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "누구라고 전해 드릴까요?", answers: ["May I ask who's calling?", "May I ask who is calling?"],
        wrong: { "may i ask who calling": "who 뒤에 is가 필요해요. who's calling이에요." },
        tip: { en: "Who's speaking?", why: "‘누구세요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나가도 될까요?", answers: ["May I go out?", "May I leave?"],
        ctx: { lead: "come in 대신 ‘나가다(go out)’로 바꿔 보세요.", en: "May I come in?" },
        wrong: { "may i going out": "May I 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I need some air.", why: "‘바람 좀 쐬고 싶어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 영수증 받을 수 있을까요?", answers: ["Yes, may I have a receipt?", "Yes, may I get a receipt?", "May I have a receipt?"],
        dialog: { a: "Here's your change.", aKo: "거스름돈 여기 있습니다." },
        wrong: { "yes may i have receipt": "receipt는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Receipt, please.", why: "‘영수증 주세요’라는 말이에요." } }
    ]
  };
})(window.EP);
