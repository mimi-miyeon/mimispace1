/* 세션 3. I don't have ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[3] = {
    no: 3, form: "I don't have ~.", stem: "I don't have", meaning: "나는 ~을 가지고 있지 않아요.",
    hint: "I don't have + 명사",
    intro: {
      blocks: [["I", "나는"], ["don't", "~하지 않다"], ["have", "가지고 있다"], ["~", "무엇"]],
      lines: [
        "have 앞에 don't(do not)를 붙이면 ‘없다’가 돼요.",
        "‘하나도 없다’는 any를 붙여 I don't have any ~로 말해요.",
        "he, she가 주어면 doesn't have예요. I 뒤에는 don't예요."
      ],
      examples: [
        { en: "I don't have a car.", ko: "나 차 없어." },
        { en: "I don't have a key.", ko: "나 열쇠 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 펜 없어.", before: "I", after: "have a pen.", answers: ["don't"],
        wrong: { "does not": "doesn't는 he, she가 주어일 때 써요. I 뒤에는 don't예요.", "not": "have 같은 동사 앞에는 not만 쓰지 않고 don't(do not)를 써요.", "am not": "‘없다’는 am not이 아니라 don't have로 말해요." },
        tip: { en: "I don't have a pen on me.", why: "on me를 붙이면 ‘지금 가진 게 없다’는 뜻이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 우산 없어.", before: "I don't", after: "an umbrella.", answers: ["have"],
        wrong: { "has": "don't 뒤에는 동사 원래 모양 have를 써요.", "having": "don't 뒤에는 동사 원래 모양 have를 써요." },
        tip: { en: "I didn't bring an umbrella.", why: "‘우산을 안 가져왔어’로 말해도 같은 상황이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 돈이 하나도 없어.", before: "I don't have", after: "money.", answers: ["any"],
        wrong: { "some": "‘하나도 없다’는 부정이라 some이 아니라 any를 써요.", "no": "don't와 no를 같이 쓰면 부정이 두 번이 돼요. any를 써요." },
        tip: { en: "I have no money.", why: "don't ~ any 대신 no 한 단어로도 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 형제 없어.", before: "I don't have any", after: ".", answers: ["brothers"],
        wrong: { "brother": "any 뒤에 셀 수 있는 말은 보통 여러 개(brothers)로 써요." },
        tip: { en: "I'm an only child.", why: "형제자매가 없다면 ‘외동이야’라고도 해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 오늘 수업 없어.", before: "I don't have", after: "today.", answers: ["class", "classes"],
        tip: { en: "There's no class today.", why: "There's no ~도 ‘~가 없다’예요. 뒤에서 배워요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 계획 없어.", answers: ["I don't have a plan.", "I don't have any plans.", "I don't have plans."],
        wrong: { "i do not has a plan": "don't 뒤에는 has가 아니라 have를 써요.", "i have not a plan": "‘없다’는 have 앞에 don't를 붙여 I don't have로 말해요." },
        tip: { en: "I have nothing planned.", why: "‘계획된 게 없어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 남자친구 없어.", answers: ["I don't have a boyfriend."],
        wrong: { "i do not have boyfriend": "boyfriend는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "I'm single.", why: "‘나 싱글이야’로 짧게 말할 수 있어요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 숙제 없어.", answers: ["I don't have homework today.", "I don't have any homework today.", "Today I don't have homework.", "Today I don't have any homework."],
        wrong: { "i do not have a homework today": "homework는 셀 수 없는 말이라 a를 붙이지 않아요." },
        tip: { en: "I have no homework today.", why: "don't ~ any 대신 no 한 단어로도 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 휴대폰 충전기 없어.", answers: ["I don't have a phone charger.", "I don't have a charger."],
        wrong: { "i do not have phone charger": "charger는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "I didn't bring my charger.", why: "‘충전기를 안 가져왔어’로 말해도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 시간 없어.", answers: ["I don't have time.", "I don't have any time."],
        ctx: { lead: "‘없다’로 바꿔 보세요.", en: "I have time." },
        wrong: { "i do not have a time": "time이 ‘시간 여유’라는 뜻일 때는 a를 붙이지 않아요.", "i have not time": "‘없다’는 have 앞에 don't를 붙여 I don't have로 말해요." },
        tip: { en: "I'm busy right now.", why: "‘시간 없어’를 ‘지금 바빠’로 말하는 표현이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 없어.", answers: ["No, I don't have one.", "No, I don't have a pet."],
        dialog: { a: "Do you have a pet?", aKo: "반려동물 키워?" },
        wrong: { "no i do not have it": "‘없어’는 one으로 받아요. it은 바로 그 물건을 가리킬 때 써요." },
        tip: { en: "No, I don't.", why: "Do you have ~?에는 No, I don't.로 답해도 돼요." } }
    ]
  };
})(window.EP);
