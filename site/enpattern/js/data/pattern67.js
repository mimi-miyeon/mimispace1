/* 세션 67. Did you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[67] = {
    no: 67, form: "Did you ~?", stem: "Did you", meaning: "~했어요?",
    hint: "Did you + 동사?",
    intro: {
      blocks: [["Did you", "너는 ~했니?"], ["~", "동사"]],
      lines: [
        "Did you + 동사?는 ‘너 ~했어?’라고 지난 일을 묻는 말이에요.",
        "Did가 과거를 나타내서 뒤에는 동사 원래 모양을 써요. (Did you eat?)",
        "Were you ate?가 아니라 Did you eat?이에요."
      ],
      examples: [
        { en: "Did you eat?", ko: "밥 먹었어?" },
        { en: "Did you sleep well?", ko: "잘 잤어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 그거 봤어?", before: "", after: "you see that?", answers: ["Did"],
        wrong: { "do": "지난 일이라 Did로 물어요.", "were": "행동을 물을 때는 Were가 아니라 Did로 시작해요." },
        tip: { en: "Did you catch that?", why: "catch는 ‘알아듣다’라는 뜻도 있어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 내 메시지 받았어?", before: "Did you", after: "my message?", answers: ["get"],
        wrong: { "got": "Did 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Did my message come through?", why: "come through는 ‘도착하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 걔한테 말했어?", before: "Did you", after: "her?", answers: ["tell"],
        wrong: { "told": "Did 뒤에는 동사 원래 모양 tell을 써요.", "say": "‘~에게 말하다’는 say가 아니라 tell이에요." },
        tip: { en: "Does she know?", why: "‘걔 알아?’라고 물어도 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 재밌게 놀았어?", before: "Did", after: "have fun?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "How was it?", why: "‘어땠어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 문 잠갔어?", before: "Did you", after: "the door?", answers: ["lock"],
        wrong: { "locked": "Did 뒤에는 동사 원래 모양 lock을 써요." },
        tip: { en: "Is the door locked?", why: "‘문 잠겼어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 어제 운동했어?", answers: ["Did you work out yesterday?", "Did you exercise yesterday?"],
        wrong: { "did you worked out yesterday": "Did 뒤에는 동사 원래 모양 work를 써요.", "were you work out yesterday": "행동을 물을 때는 Were가 아니라 Did로 시작해요." },
        tip: { en: "Did you go to the gym yesterday?", why: "‘어제 헬스장 갔어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그거 다 끝냈어?", answers: ["Did you finish it?", "Did you finish everything?", "Did you finish it all?"],
        wrong: { "did you finished it": "Did 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "Are you done?", why: "‘다 했어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 열쇠 찾았어?", answers: ["Did you find your keys?", "Did you find the keys?", "Did you find your key?"],
        wrong: { "did you found your keys": "Did 뒤에는 동사 원래 모양 find를 써요." },
        tip: { en: "Any luck with your keys?", why: "Any luck?은 ‘찾았어? 잘 됐어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 그 사람 만났어?", answers: ["Did you meet him?", "Did you see him?", "Did you meet her?", "Did you see her?"],
        wrong: { "did you met him": "Did 뒤에는 동사 원래 모양 meet을 써요." },
        tip: { en: "Have you met him?", why: "‘그 사람 만나 봤어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 엄마한테 전화했어?", answers: ["Did you call Mom?", "Did you call your mom?", "Did you call your mother?"],
        ctx: { lead: "eat 대신 ‘엄마한테 전화하다(call Mom)’로 바꿔 보세요.", en: "Did you eat?" },
        wrong: { "did you called mom": "Did 뒤에는 동사 원래 모양 call을 써요.", "did you call to mom": "call 뒤에는 to 없이 바로 사람을 써요." },
        tip: { en: "Have you called Mom yet?", why: "yet은 ‘벌써, 아직’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "바다에서 수영했어?", answers: ["Did you swim in the ocean?", "Did you swim in the sea?", "Did you go swimming?"],
        dialog: { a: "I went to Jeju last week.", aKo: "나 지난주에 제주도 갔었어." },
        wrong: { "did you swam in the ocean": "Did 뒤에는 동사 원래 모양 swim을 써요." },
        tip: { en: "How was the beach?", why: "‘바다 어땠어?’라는 말이에요." } }
    ]
  };
})(window.EP);
