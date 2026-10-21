/* 세션 2. I have some ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[2] = {
    no: 2, form: "I have some ~.", stem: "I have some", meaning: "어떤 ~가 있어요.",
    hint: "I have some + 명사",
    intro: {
      blocks: [["I have", "나는 가지고 있다"], ["some", "좀, 약간의"], ["~", "무엇"]],
      lines: [
        "some은 ‘좀, 약간’이에요. 정확한 양을 말하지 않을 때 써요.",
        "셀 수 있는 말은 여러 개(cookies), 셀 수 없는 말은 그대로(water) 써요.",
        "‘좀 있어’라고 말할 때는 some, 질문이나 ‘없어’에는 보통 any를 써요."
      ],
      examples: [
        { en: "I have some money.", ko: "나 돈 좀 있어." },
        { en: "I have some good news.", ko: "나 좋은 소식 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 쿠키 좀 있어.", before: "I have", after: "cookies.", answers: ["some"],
        wrong: { "any": "any는 보통 질문이나 ‘없어’에 써요. ‘좀 있어’는 some이에요.", "a": "a는 ‘하나’예요. 여러 개인 cookies 앞에는 some을 써요." },
        tip: { en: "I've got some cookies.", why: "have got도 ‘가지고 있다’예요. 말할 때 자주 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 물 좀 있어.", before: "I have some", after: ".", answers: ["water"],
        wrong: { "waters": "water는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "I have a bottle of water.", why: "‘물 한 병’처럼 양을 정확히 말할 수도 있어요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 좋은 생각이 좀 있어.", before: "I", after: "some good ideas.", answers: ["have"],
        wrong: { "has": "has는 he, she처럼 다른 한 사람이 주어일 때 써요. I 뒤에는 have예요.", "am": "‘나는 ~이 있다’는 am이 아니라 have로 말해요." },
        tip: { en: "I have a couple of good ideas.", why: "a couple of는 ‘두어 개’라는 뜻이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 시간 좀 있어.", before: "I have", after: "time.", answers: ["some"],
        wrong: { "any": "any는 보통 질문이나 ‘없어’에 써요. ‘좀 있어’는 some이에요.", "a": "time이 ‘시간 여유’라는 뜻일 때는 a를 쓰지 않아요." },
        tip: { en: "I'm free for a bit.", why: "‘잠깐 시간 돼’라는 느낌의 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 질문이 좀 있어.", before: "I have some", after: ".", answers: ["questions"],
        wrong: { "question": "some 뒤에 셀 수 있는 말은 여러 개(questions)로 써요." },
        tip: { en: "I have a few questions.", why: "a few는 ‘몇 개’예요. 셀 수 있는 것에 써요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 돈 좀 있어.", answers: ["I have some money."],
        wrong: { "i have some moneys": "money는 셀 수 없는 말이라 s를 붙이지 않아요.", "i have any money": "any는 보통 질문이나 ‘없어’에 써요. ‘좀 있어’는 some이에요." },
        tip: { en: "I have a little money.", why: "a little은 ‘조금’이에요. 많지 않다는 느낌이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 사진이 좀 있어.", answers: ["I have some pictures.", "I have some photos."],
        wrong: { "i have some picture": "some 뒤에 셀 수 있는 말은 여러 개(pictures)로 써요.", "i have some photo": "some 뒤에 셀 수 있는 말은 여러 개(photos)로 써요." },
        tip: { en: "I've got some photos.", why: "photo도 ‘사진’이에요. have got도 자주 써요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 일이 좀 있어.", answers: ["I have some work today.", "Today I have some work.", "I have some things to do today."],
        wrong: { "i have some works today": "‘일’이라는 뜻의 work는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "I'm a bit busy today.", why: "‘일이 좀 있어’를 ‘좀 바빠’로 말하는 표현이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 계란이 좀 있어.", answers: ["I have some eggs."],
        wrong: { "i have some egg": "some 뒤에 셀 수 있는 말은 여러 개(eggs)로 써요.", "i have a eggs": "a는 ‘하나’예요. 여러 개에는 some을 써요." },
        tip: { en: "I have a few eggs.", why: "a few는 ‘몇 개’예요. 셀 수 있는 것에 써요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 과일이 좀 있어.", answers: ["I have some fruit.", "I have some fruits."],
        ctx: { lead: "money 대신 ‘과일’을 넣어 보세요.", en: "I have some money." },
        tip: { en: "I've got some fruit.", why: "have got도 ‘가지고 있다’예요. 말할 때 자주 써요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 좀 있어.", answers: ["Yes, I have some."],
        dialog: { a: "Do you have any snacks?", aKo: "간식 있어?" },
        wrong: { "yes i have any": "‘좀 있어’라고 답할 때는 some이에요. any는 질문에 쓰여요." },
        tip: { en: "Yes, I do.", why: "Do you have ~?에는 짧게 Yes, I do.로 대답해도 돼요." } }
    ]
  };
})(window.EP);
