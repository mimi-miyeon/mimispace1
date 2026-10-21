/* 세션 110. Let's go for ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[110] = {
    no: 110, form: "Let's go for ~.", stem: "Let's go for", meaning: "~하러 가요.",
    hint: "Let's go for + 명사(구)",
    intro: {
      blocks: [["Let's go", "가자"], ["for ~", "~하러"]],
      lines: [
        "Let's go for + 명사는 ‘~하러 가자’예요. 가볍게 뭔가 하러 나가자고 할 때 써요.",
        "for 뒤에는 a walk, a drink 같은 명사를 써요.",
        "Let's go for it!은 ‘한번 해 보자!’라는 뜻이에요."
      ],
      examples: [
        { en: "Let's go for a walk.", ko: "산책하러 가자." },
        { en: "Let's go for a drink.", ko: "한잔하러 가자." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "산책하러 가자.", before: "Let's go for a", after: ".", answers: ["walk"],
        wrong: { "walking": "a 뒤에는 명사 walk를 써요." },
        tip: { en: "Let's get some fresh air.", why: "fresh air는 ‘신선한 공기’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "드라이브하러 가자.", before: "Let's go", after: "a drive.", answers: ["for"],
        wrong: { "to": "‘~하러 가자’는 go for a drive예요." },
        tip: { en: "Let's take a drive.", why: "take a drive도 ‘드라이브하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "한잔하러 가자.", before: "Let's go for a", after: ".", answers: ["drink"],
        wrong: { "drinking": "a 뒤에는 명사 drink를 써요." },
        tip: { en: "Let's grab a drink.", why: "grab은 ‘간단히 하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "커피 마시러 가자.", before: "Let's go for", after: "coffee.", answers: ["a", "some"],
        tip: { en: "Coffee break?", why: "‘커피 타임?’이라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "한번 해 보자!", before: "Let's go for", after: "!", answers: ["it"],
        wrong: { "this": "‘한번 해 보자’는 Let's go for it이에요." },
        tip: { en: "Let's give it a try!", why: "give it a try는 ‘시도해 보다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "점심 먹으러 가자.", answers: ["Let's go for lunch."],
        wrong: { "let us go for a lunch": "lunch 앞에는 보통 a를 붙이지 않아요.", "let us go to lunch for": "‘점심 먹으러 가자’는 go for lunch예요." },
        tip: { en: "Let's grab lunch.", why: "grab lunch는 ‘간단히 점심 먹다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "수영하러 가자.", answers: ["Let's go for a swim."],
        wrong: { "let us go for swim": "swim 앞에 a를 붙여요. a swim이에요." },
        tip: { en: "Let's go swimming.", why: "go swimming도 같은 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "저녁 먹고 산책하러 가자.", answers: ["Let's go for a walk after dinner."],
        wrong: { "let us go for walk after dinner": "walk 앞에 a를 붙여요. a walk예요." },
        tip: { en: "Let's walk off dinner.", why: "walk off는 ‘걸어서 소화시키다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "달리기하러 가자.", answers: ["Let's go for a run.", "Let's go for a jog."],
        wrong: { "let us go for running": "for 뒤에는 a run을 써요." },
        tip: { en: "Let's go running.", why: "go running도 같은 뜻이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "자전거 타러 가자.", answers: ["Let's go for a ride.", "Let's go for a bike ride."],
        ctx: { lead: "a walk 대신 ‘한 바퀴 타기(a ride)’로 바꿔 보세요.", en: "Let's go for a walk." },
        wrong: { "let us go for ride": "ride 앞에 a를 붙여요. a ride예요." },
        tip: { en: "Let's go biking.", why: "go biking도 같은 뜻이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아, 아이스크림 먹으러 가자.", answers: ["Okay, let's go for ice cream.", "Sure, let's go for ice cream.", "Let's go for ice cream.", "Let's go for some ice cream."],
        dialog: { a: "It's so hot today.", aKo: "오늘 진짜 덥다." },
        wrong: { "okay let us go for an ice creams": "ice cream은 보통 s를 붙이지 않아요." },
        tip: { en: "I'd love some ice cream.", why: "‘아이스크림 좋지’라는 말이에요." } }
    ]
  };
})(window.EP);
