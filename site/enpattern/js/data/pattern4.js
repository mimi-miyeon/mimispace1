/* 세션 4. Do you have any ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[4] = {
    no: 4, form: "Do you have any ~?", stem: "Do you have any", meaning: "~ 있어요?",
    hint: "Do you have any + 명사?",
    intro: {
      blocks: [["Do you", "너는 ~하니?"], ["have", "가지고 있다"], ["any", "조금이라도"], ["~", "무엇"]],
      lines: [
        "Do you have ~?는 ‘~ 있어?’라고 묻는 말이에요.",
        "any를 붙이면 ‘혹시 조금이라도 있어?’라는 느낌이에요.",
        "셀 수 있는 말은 여러 개(snacks), 셀 수 없는 말은 그대로(milk) 써요."
      ],
      examples: [
        { en: "Do you have any questions?", ko: "질문 있어?" },
        { en: "Do you have any plans tonight?", ko: "오늘 밤에 계획 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "혹시 젓가락 있어?", before: "", after: "you have any chopsticks?", answers: ["Do"],
        wrong: { "are": "have 같은 동사로 물을 때는 Are가 아니라 Do로 시작해요.", "have": "‘~ 있어?’는 Do you have ~로 물어요.", "does": "Does는 he, she에게 물을 때 써요. you에게는 Do예요." },
        tip: { en: "Are there any chopsticks?", why: "‘여기 젓가락 있어?’처럼 물을 때 써요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "혹시 질문 있어?", before: "Do you have", after: "questions?", answers: ["any", "some"],
        wrong: { "a": "a는 ‘하나’예요. 여러 개인 questions 앞에는 any를 써요." },
        tip: { en: "Any questions?", why: "짧게 Any questions?만 말해도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 형제 있어?", before: "Do you", after: "any brothers or sisters?", answers: ["have"],
        wrong: { "has": "Do 뒤에는 동사 원래 모양 have를 써요.", "having": "Do 뒤에는 동사 원래 모양 have를 써요." },
        tip: { en: "Do you have siblings?", why: "siblings는 ‘형제자매’를 한 단어로 말한 거예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "혹시 반려동물 키워?", before: "Do you have any", after: "?", answers: ["pets"],
        wrong: { "pet": "any 뒤에 셀 수 있는 말은 보통 여러 개(pets)로 써요." },
        tip: { en: "Do you have a pet?", why: "한 마리를 떠올리며 a pet으로 물어도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "오늘 수업 있어?", before: "Do you have any", after: "today?", answers: ["classes"],
        wrong: { "class": "any 뒤에 셀 수 있는 말은 보통 여러 개(classes)로 써요." },
        tip: { en: "Do you have class today?", why: "‘수업 듣는 날이야?’라는 뜻으로 class만 써도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "혹시 간식 있어?", answers: ["Do you have any snacks?"],
        wrong: { "do you have any snack": "any 뒤에 셀 수 있는 말은 보통 여러 개(snacks)로 써요.", "you have any snacks": "묻는 말은 Do로 시작해요.", "are you have any snacks": "have로 물을 때는 Are가 아니라 Do로 시작해요." },
        tip: { en: "Are there any snacks?", why: "‘간식 남은 거 있어?’처럼 물을 때 써요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "혹시 아이디어 있어?", answers: ["Do you have any ideas?"],
        wrong: { "do you have any idea": "any 뒤에 셀 수 있는 말은 보통 여러 개(ideas)로 써요. Do you have any idea는 ‘알기나 해?’라는 다른 뜻이 돼요." },
        tip: { en: "Any ideas?", why: "짧게 Any ideas?만 말해도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우유 좀 있어?", answers: ["Do you have any milk?"], alts: ["Do you have some milk?"],
        wrong: { "do you have any milks": "milk는 셀 수 없는 말이라 s를 붙이지 않아요.", "do you have a milk": "milk는 셀 수 없는 말이라 a를 붙이지 않아요." },
        tip: { en: "Is there any milk left?", why: "left를 붙이면 ‘남아 있어?’라는 뜻이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "주말에 계획 있어?", answers: ["Do you have any plans this weekend?", "Do you have any plans for the weekend?", "Do you have any plans for this weekend?"],
        wrong: { "do you have any plan this weekend": "any 뒤에 셀 수 있는 말은 보통 여러 개(plans)로 써요." },
        tip: { en: "Are you free this weekend?", why: "‘주말에 시간 돼?’로 물어보는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "혹시 동전 있어?", answers: ["Do you have any coins?"],
        ctx: { lead: "questions 대신 ‘동전(coins)’을 넣어 보세요.", en: "Do you have any questions?" },
        wrong: { "do you have any coin": "any 뒤에 셀 수 있는 말은 보통 여러 개(coins)로 써요." },
        tip: { en: "Got any coins?", why: "친구끼리는 Do you have를 빼고 이렇게도 물어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "혹시 보드게임 있어?", answers: ["Do you have any board games?"],
        dialog: { a: "I'm so bored.", aKo: "나 너무 심심해." },
        wrong: { "do you have any board game": "any 뒤에 셀 수 있는 말은 보통 여러 개(games)로 써요." },
        tip: { en: "Got any board games?", why: "친구끼리는 Do you have를 빼고 이렇게도 물어요." } }
    ]
  };
})(window.EP);
