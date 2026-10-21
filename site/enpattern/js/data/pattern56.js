/* 세션 56. Do you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[56] = {
    no: 56, form: "Do you ~?", stem: "Do you", meaning: "당신은 ~해요?",
    hint: "Do you + 동사?",
    intro: {
      blocks: [["Do you", "너는 ~하니?"], ["~", "동사"]],
      lines: [
        "Do you + 동사?는 ‘너 ~해?’라고 평소 습관이나 사실을 묻는 말이에요.",
        "Do 뒤에는 you, 그 뒤에 동사 원래 모양을 써요.",
        "Are you like?가 아니라 Do you like?예요. 동사로 물을 때는 Do를 써요."
      ],
      examples: [
        { en: "Do you like coffee?", ko: "너 커피 좋아해?" },
        { en: "Do you live near here?", ko: "너 이 근처 살아?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 운동해?", before: "", after: "you work out?", answers: ["Do"],
        wrong: { "are": "동사로 물을 때는 Are가 아니라 Do로 시작해요.", "does": "Does는 he, she에게 물을 때 써요. you는 Do예요." },
        tip: { en: "Do you exercise?", why: "exercise도 ‘운동하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 이 노래 알아?", before: "Do you", after: "this song?", answers: ["know"],
        wrong: { "knows": "Do you 뒤에는 동사 원래 모양 know를 써요.", "knowing": "Do you 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "Have you heard this song?", why: "‘이 노래 들어 봤어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 매일 요리해?", before: "Do", after: "cook every day?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "How often do you cook?", why: "‘얼마나 자주 요리해?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 여기서 일해?", before: "Do you", after: "here?", answers: ["work"],
        wrong: { "working": "Do you 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Is this where you work?", why: "‘여기가 너 일하는 곳이야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 고양이 키워?", before: "Do you", after: "a cat?", answers: ["have"],
        wrong: { "has": "Do you 뒤에는 동사 원래 모양 have를 써요." },
        tip: { en: "Do you have any pets?", why: "pet은 ‘반려동물’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 매운 거 잘 먹어?", answers: ["Do you like spicy food?", "Do you eat spicy food?"],
        wrong: { "are you like spicy food": "동사로 물을 때는 Are가 아니라 Do로 시작해요.", "do you likes spicy food": "Do you 뒤에는 동사 원래 모양 like를 써요." },
        tip: { en: "Can you handle spicy food?", why: "handle은 ‘감당하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 차 있어?", answers: ["Do you have a car?"],
        wrong: { "are you have a car": "동사로 물을 때는 Are가 아니라 Do로 시작해요.", "do you has a car": "Do you 뒤에는 동사 원래 모양 have를 써요." },
        tip: { en: "Do you own a car?", why: "own은 ‘소유하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 아침 먹어?", answers: ["Do you eat breakfast?", "Do you have breakfast?"],
        wrong: { "do you eat a breakfast": "breakfast 앞에는 a를 붙이지 않아요." },
        tip: { en: "Are you a breakfast person?", why: "‘아침 챙겨 먹는 편이야?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 그 사람 믿어?", answers: ["Do you trust him?", "Do you believe him?", "Do you trust her?", "Do you believe her?"],
        wrong: { "are you trust him": "동사로 물을 때는 Are가 아니라 Do로 시작해요." },
        tip: { en: "Can you trust him?", why: "‘그 사람 믿을 수 있어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 영어 할 줄 알아?", answers: ["Do you speak English?"],
        ctx: { lead: "like coffee 대신 ‘영어를 하다(speak English)’로 바꿔 보세요.", en: "Do you like coffee?" },
        wrong: { "are you speak english": "동사로 물을 때는 Are가 아니라 Do로 시작해요.", "do you speaking english": "Do you 뒤에는 동사 원래 모양 speak를 써요." },
        tip: { en: "Can you speak English?", why: "Can you도 ‘할 줄 알아?’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 매일 가?", answers: ["Do you go every day?", "Do you go there every day?"],
        dialog: { a: "I'm going to the gym.", aKo: "나 헬스장 가." },
        wrong: { "are you go every day": "동사로 물을 때는 Are가 아니라 Do로 시작해요.", "do you going every day": "Do you 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "How often do you go?", why: "‘얼마나 자주 가?’라는 말이에요." } }
    ]
  };
})(window.EP);
