/* 세션 190. Why not ~? (명사) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[190] = {
    no: 190, form: "Why not ~? (명사)", stem: "Why not", meaning: "~는 왜 안 돼요?",
    hint: "Why not + 명사/대명사?",
    intro: {
      blocks: [["Why not", "왜 안 돼"], ["~?", "명사"]],
      lines: [
        "Why not + 명사?는 ‘~는 왜 안 돼? / ~는 어때?’예요. 다른 선택지를 툭 던질 때 써요.",
        "Why not?만 쓰면 ‘왜 안 돼?’ 또는 ‘좋지, 그러자!’예요.",
        "Why not me?(나는 왜 안 돼?)처럼 대명사도 써요."
      ],
      examples: [
        { en: "Why not today?", ko: "오늘은 왜 안 돼?" },
        { en: "Why not me?", ko: "나는 왜 안 돼?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "오늘은 왜 안 돼?", before: "Why not", after: "?", answers: ["today"],
        wrong: { "the today": "today 앞에는 the를 붙이지 않아요." },
        tip: { en: "Let's do it today.", why: "‘오늘 하자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나는 왜 안 돼?", before: "Why not", after: "?", answers: ["me"],
        wrong: { "i": "not 뒤에는 I가 아니라 me를 써요.", "my": "not 뒤에는 my가 아니라 me를 써요." },
        tip: { en: "Pick me!", why: "‘나 골라!’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "좋지, 그러자!", before: "Why", after: "!", answers: ["not"],
        wrong: { "no": "‘좋지, 그러자!’는 Why not!이에요." },
        tip: { en: "Sure, let's do it!", why: "‘그래, 하자!’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "빨간색은 왜 안 돼?", before: "Why not the red", after: "?", answers: ["one"],
        wrong: { "ones": "하나를 가리켜서 one이에요." },
        tip: { en: "Red looks good on you.", why: "‘빨강 잘 어울려’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "둘 다는 왜 안 돼?", before: "Why not", after: "?", answers: ["both"],
        wrong: { "two": "‘둘 다’는 both예요." },
        tip: { en: "You can have both.", why: "‘둘 다 가져도 돼’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이번 주말은 왜 안 돼?", answers: ["Why not this weekend?"],
        wrong: { "why not at this weekend": "this weekend 앞에는 at을 붙이지 않아요.", "why not the this weekend": "this 앞에는 the를 붙이지 않아요." },
        tip: { en: "Are you busy this weekend?", why: "‘이번 주말 바빠?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "치킨은 왜 안 돼?", answers: ["Why not chicken?"],
        wrong: { "why not a chicken": "음식으로서 chicken은 a를 붙이지 않아요." },
        tip: { en: "Everyone loves chicken.", why: "‘다들 치킨 좋아해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 사람은 왜 안 돼?", answers: ["Why not him?", "Why not her?"],
        wrong: { "why not he": "not 뒤에는 he가 아니라 him을 써요." },
        tip: { en: "He's perfect for the job.", why: "‘그 일에 딱이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "지금은 왜 안 돼?", answers: ["Why not now?", "Why not right now?"],
        wrong: { "why not the now": "now 앞에는 the를 붙이지 않아요." },
        tip: { en: "Let's do it now.", why: "‘지금 하자’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "내일은 왜 안 돼?", answers: ["Why not tomorrow?"],
        ctx: { lead: "today 대신 ‘내일(tomorrow)’로 바꿔 보세요.", en: "Why not today?" },
        wrong: { "why not the tomorrow": "tomorrow 앞에는 the를 붙이지 않아요." },
        tip: { en: "Tomorrow works too.", why: "‘내일도 괜찮아’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그래, 좋아!", answers: ["Why not!", "Sure, why not!", "Why not? Let's go!"],
        dialog: { a: "Want to grab a drink after work?", aKo: "퇴근하고 한잔할래?" },
        wrong: { "why no": "‘좋지, 그러자!’는 Why not!이에요." },
        tip: { en: "Sounds great!", why: "‘좋아!’라는 말이에요." } }
    ]
  };
})(window.EP);
