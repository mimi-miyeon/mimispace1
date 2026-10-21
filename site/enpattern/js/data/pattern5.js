/* 세션 5. I didn't have any ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[5] = {
    no: 5, form: "I didn't have any ~.", stem: "I didn't have any", meaning: "나는 ~가 없었어요.",
    hint: "I didn't have any + 명사",
    intro: {
      blocks: [["I", "나는"], ["didn't", "~하지 않았다"], ["have", "가지고 있다"], ["any", "조금도"], ["~", "무엇"]],
      lines: [
        "didn't(did not)는 지난 일에 ‘~하지 않았다’예요. 그래서 ‘없었다’가 돼요.",
        "didn't 뒤에는 had가 아니라 원래 모양 have를 써요.",
        "any를 붙이면 ‘하나도 없었다’는 느낌이에요."
      ],
      examples: [
        { en: "I didn't have any free time.", ko: "나 자유 시간이 하나도 없었어." },
        { en: "I didn't have any friends there.", ko: "나 거기 친구가 하나도 없었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 어제 시간이 하나도 없었어.", before: "I", after: "have any time yesterday.", answers: ["didn't"],
        wrong: { "do not": "어제 일이라 과거형 didn't를 써요.", "does not": "어제 일이라 과거형 didn't를 써요. I 뒤에는 does도 쓰지 않아요.", "was not": "have를 부정할 때는 wasn't가 아니라 didn't를 써요." },
        tip: { en: "I had no time yesterday.", why: "didn't ~ any 대신 had no로도 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 질문이 하나도 없었어.", before: "I didn't", after: "any questions.", answers: ["have"],
        wrong: { "had": "didn't 뒤에는 원래 모양 have를 써요. 과거는 didn't가 이미 나타내요.", "has": "didn't 뒤에는 원래 모양 have를 써요." },
        tip: { en: "Everything was clear.", why: "‘다 이해됐어’로 바꾼 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 지난주에 수업이 하나도 없었어.", before: "I didn't have", after: "classes last week.", answers: ["any"],
        wrong: { "some": "‘하나도 없었다’는 부정이라 some이 아니라 any를 써요.", "no": "didn't와 no를 같이 쓰면 부정이 두 번이 돼요. any를 써요." },
        tip: { en: "I had no classes last week.", why: "didn't ~ any 대신 had no로도 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 집에 음식이 하나도 없었어.", before: "I didn't have any", after: "at home.", answers: ["food"],
        wrong: { "foods": "food는 보통 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "There was no food at home.", why: "There was no ~는 ‘~가 없었다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 거기서 문제가 하나도 없었어.", before: "I didn't have any", after: "there.", answers: ["problems"],
        wrong: { "problem": "any 뒤에 셀 수 있는 말은 보통 여러 개(problems)로 써요." },
        tip: { en: "Everything went fine there.", why: "‘거기서 다 괜찮았어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 숙제가 하나도 없었어.", answers: ["I didn't have any homework."],
        wrong: { "i did not had any homework": "didn't 뒤에는 원래 모양 have를 써요.", "i did not have any homeworks": "homework는 셀 수 없는 말이라 s를 붙이지 않아요.", "i do not have any homework": "지난 일이라 과거형 didn't를 써요." },
        tip: { en: "I had no homework.", why: "didn't ~ any 대신 had no로도 말해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 어제 일이 하나도 없었어.", answers: ["I didn't have any work yesterday.", "Yesterday I didn't have any work."],
        wrong: { "i did not have any works yesterday": "‘일’이라는 뜻의 work는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "I was free all day yesterday.", why: "‘어제 하루 종일 한가했어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 지난 주말에 계획이 하나도 없었어.", answers: ["I didn't have any plans last weekend.", "Last weekend I didn't have any plans."],
        wrong: { "i did not have any plan last weekend": "any 뒤에 셀 수 있는 말은 보통 여러 개(plans)로 써요." },
        tip: { en: "I had nothing planned last weekend.", why: "‘계획된 게 없었어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 어렸을 때 장난감이 하나도 없었어.",
        answers: ["I didn't have any toys as a kid.", "I didn't have any toys as a child.", "I didn't have any toys when I was a kid.", "I didn't have any toys when I was a child.", "I didn't have any toys when I was young.", "When I was a kid, I didn't have any toys.", "When I was young, I didn't have any toys."],
        wrong: { "i did not have any toy as a kid": "any 뒤에 셀 수 있는 말은 보통 여러 개(toys)로 써요." },
        tip: { en: "I had no toys as a kid.", why: "didn't ~ any 대신 had no로도 말해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 아이디어가 하나도 없었어.", answers: ["I didn't have any ideas."],
        ctx: { lead: "지난 일로 바꿔 보세요.", en: "I don't have any ideas." },
        wrong: { "i do not have any ideas": "지난 일이라 과거형 didn't를 써요.", "i did not had any ideas": "didn't 뒤에는 원래 모양 have를 써요." },
        tip: { en: "Nothing came to mind.", why: "‘아무 생각도 안 났어’라는 표현이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "돈이 하나도 없었어.", answers: ["I didn't have any money.", "Because I didn't have any money."],
        dialog: { a: "Why didn't you buy it?", aKo: "왜 그거 안 샀어?" },
        wrong: { "i did not have no money": "didn't와 no를 같이 쓰면 부정이 두 번이 돼요. any를 써요.", "i did not had any money": "didn't 뒤에는 원래 모양 have를 써요." },
        tip: { en: "I was out of money.", why: "out of money는 ‘돈이 다 떨어졌다’는 뜻이에요." } }
    ]
  };
})(window.EP);
