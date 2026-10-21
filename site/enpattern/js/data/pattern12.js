/* 세션 12. We need to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[12] = {
    no: 12, form: "We need to ~.", stem: "We need to", meaning: "우리는 ~할 필요가 있어요.",
    hint: "We need to + 동사",
    intro: {
      blocks: [["We", "우리는"], ["need to", "~해야 한다"], ["~", "할 일"]],
      lines: [
        "need to + 동사는 ‘~해야 해’예요. 할 일을 말할 때 need 뒤에 to를 붙여요.",
        "We를 주어로 쓰면 ‘우리 ~해야 해’가 돼요.",
        "to 뒤에는 동사 원래 모양을 써요. (to go, to talk)"
      ],
      examples: [
        { en: "We need to talk.", ko: "우리 얘기 좀 해야 해." },
        { en: "We need to be quiet.", ko: "우리 조용히 해야 해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "우리 버스 타야 해.", before: "We need", after: "take the bus.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "We have to take the bus.", why: "have to도 ‘~해야 해’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "우리 일찍 일어나야 해.", before: "We", after: "to get up early.", answers: ["need"],
        wrong: { "needs": "we 뒤에는 needs가 아니라 need예요.", "are need": "need는 동사라서 앞에 are를 쓰지 않아요." },
        tip: { en: "We should get up early.", why: "should는 ‘~하는 게 좋아’예요. 조금 부드러워요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 장 봐야 해.", before: "We need to", after: "groceries.", answers: ["buy", "get"],
        wrong: { "buying": "to 뒤에는 동사 원래 모양을 써요.", "bought": "to 뒤에는 동사 원래 모양을 써요." },
        tip: { en: "We need to go grocery shopping.", why: "go grocery shopping은 ‘장 보러 가다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 더 연습해야 해.", before: "We need to", after: "more.", answers: ["practice"],
        wrong: { "practicing": "to 뒤에는 동사 원래 모양 practice를 써요." },
        tip: { en: "We have to practice more.", why: "have to도 ‘~해야 해’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 이거 빨리 끝내야 해.", before: "", after: "need to finish this quickly.", answers: ["We"],
        wrong: { "us": "‘우리는’이 주어일 때는 us가 아니라 we예요.", "our": "our는 ‘우리의’예요. ‘우리는’은 we예요." },
        tip: { en: "We have to wrap this up fast.", why: "wrap up은 ‘마무리하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "우리 지금 출발해야 해.", answers: ["We need to leave now.", "We need to go now."],
        wrong: { "we need leave now": "‘~해야 해’는 need 뒤에 to를 붙여요.", "we needs to leave now": "we 뒤에는 needs가 아니라 need예요." },
        tip: { en: "We have to leave now.", why: "have to도 ‘~해야 해’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "우리 방 청소해야 해.", answers: ["We need to clean the room.", "We need to clean our room.", "We need to clean up the room."],
        wrong: { "we need to cleaning the room": "to 뒤에는 동사 원래 모양 clean을 써요." },
        tip: { en: "The room needs cleaning.", why: "‘방이 청소가 필요해’처럼 방을 주어로 말해요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리 내일 다시 만나야 해.", answers: ["We need to meet again tomorrow.", "We need to meet tomorrow again."],
        wrong: { "we need to meeting again tomorrow": "to 뒤에는 동사 원래 모양 meet을 써요." },
        tip: { en: "Let's meet again tomorrow.", why: "Let's는 ‘~하자’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "우리 돈을 아껴야 해.", answers: ["We need to save money.", "We need to save some money."],
        wrong: { "we need to saving money": "to 뒤에는 동사 원래 모양 save를 써요.", "we need to save moneys": "money는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "We should spend less.", why: "‘돈을 덜 써야 해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "우리 서둘러야 해.", answers: ["We need to hurry.", "We need to hurry up."],
        ctx: { lead: "I 대신 ‘우리’로 바꿔 보세요.", en: "I need to hurry." },
        wrong: { "us need to hurry": "‘우리는’이 주어일 때는 us가 아니라 we예요.", "we need hurry": "‘~해야 해’는 need 뒤에 to를 붙여요." },
        tip: { en: "We have to hurry.", why: "have to도 ‘~해야 해’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "우리 택시 타야 해.", answers: ["We need to take a taxi.", "We need to get a taxi.", "We need to take a cab."],
        dialog: { a: "It's already eight.", aKo: "벌써 8시야." },
        wrong: { "we need take a taxi": "‘~해야 해’는 need 뒤에 to를 붙여요.", "we need to take taxi": "taxi는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Let's grab a taxi.", why: "grab은 ‘얼른 잡다’라는 느낌이에요." } }
    ]
  };
})(window.EP);
