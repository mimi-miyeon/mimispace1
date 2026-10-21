/* 세션 114. I would ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[114] = {
    no: 114, form: "I would ~.", stem: "I would/I'd", meaning: "나는 ~하곤 했어요.",
    hint: "I would + 동사",
    intro: {
      blocks: [["I would", "나는 ~하곤 했다"], ["~", "동사"]],
      lines: [
        "I would + 동사는 ‘(예전에) ~하곤 했어’예요. 옛날 습관을 떠올리며 말할 때 써요.",
        "‘어렸을 때(When I was young)’처럼 과거 때를 함께 말해요.",
        "would 뒤에는 동사 원래 모양을 써요. 상태(살았다, 좋아했다)에는 used to를 써요."
      ],
      examples: [
        { en: "When I was a kid, I would play outside all day.", ko: "어릴 때 하루 종일 밖에서 놀곤 했어." },
        { en: "In college, I would study all night.", ko: "대학 때 밤새 공부하곤 했어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어릴 때 하루 종일 밖에서 놀곤 했어.", before: "When I was a kid, I", after: "play outside all day.", answers: ["would"],
        wrong: { "will": "지난 습관은 will이 아니라 would예요." },
        tip: { en: "I was always outside.", why: "‘맨날 밖에 있었어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "여름이면 할머니 댁에 가곤 했어.", before: "Every summer, I would", after: "my grandma.", answers: ["visit"],
        wrong: { "visited": "would 뒤에는 동사 원래 모양 visit을 써요." },
        tip: { en: "I spent summers at Grandma's.", why: "‘여름은 할머니 댁에서 보냈어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "대학 때 밤새 공부하곤 했어.", before: "In college, I would", after: "all night.", answers: ["study"],
        wrong: { "studied": "would 뒤에는 동사 원래 모양 study를 써요.", "studying": "would 뒤에는 동사 원래 모양 study를 써요." },
        tip: { en: "I pulled all-nighters.", why: "pull an all-nighter는 ‘밤새우다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "주말이면 늦잠을 자곤 했어.", before: "On weekends, I", after: "sleep in.", answers: ["would"],
        wrong: { "will": "지난 습관은 will이 아니라 would예요." },
        tip: { en: "I never got up early.", why: "‘절대 일찍 안 일어났어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "아빠가 책을 읽어 주시곤 했어.", before: "My dad would", after: "me books.", answers: ["read"],
        wrong: { "reads": "would 뒤에는 동사 원래 모양 read를 써요." },
        tip: { en: "My dad read to me.", why: "read to는 ‘~에게 읽어 주다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어릴 때 매일 TV를 보곤 했어.", answers: ["When I was a kid, I would watch TV every day.", "When I was young, I would watch TV every day.", "When I was little, I would watch TV every day."], alts: ["When I was a kid, I used to watch TV every day.", "When I was young, I used to watch TV every day."],
        wrong: { "when i was a kid i will watch tv every day": "지난 습관은 will이 아니라 would예요.", "when i was a kid i would watched tv every day": "would 뒤에는 동사 원래 모양 watch를 써요." },
        tip: { en: "I watched a lot of TV as a kid.", why: "as a kid는 ‘어렸을 때’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "학교 끝나면 축구를 하곤 했어.", answers: ["After school, I would play soccer.", "I would play soccer after school."], alts: ["After school, I used to play soccer.", "I used to play soccer after school."],
        wrong: { "after school i would played soccer": "would 뒤에는 동사 원래 모양 play를 써요." },
        tip: { en: "I was always on the field.", why: "field는 ‘운동장’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "비 오는 날이면 집에서 책을 읽곤 했어.", answers: ["On rainy days, I would read at home.", "On rainy days, I would read books at home."],
        wrong: { "on rainy days i will read at home": "지난 습관은 will이 아니라 would예요." },
        tip: { en: "I loved rainy days.", why: "‘비 오는 날이 좋았어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "일요일마다 엄마랑 요리하곤 했어.", answers: ["On Sundays, I would cook with my mom.", "Every Sunday, I would cook with my mom."],
        wrong: { "on sundays i would cooked with my mom": "would 뒤에는 동사 원래 모양 cook을 써요." },
        tip: { en: "Sunday was cooking day.", why: "‘일요일은 요리하는 날이었어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어릴 때 일찍 자곤 했어.", answers: ["When I was a kid, I would go to bed early.", "When I was a kid, I would sleep early."],
        ctx: { lead: "play outside all day 대신 ‘일찍 자다(go to bed early)’로 바꿔 보세요.", en: "When I was a kid, I would play outside all day." },
        wrong: { "when i was a kid i would went to bed early": "would 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "I had an early bedtime.", why: "bedtime은 ‘잘 시간’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어릴 때 바닷가에 가곤 했어.", answers: ["When I was young, I would go to the beach.", "When I was a kid, I would go to the beach."], alts: ["When I was young, I used to go to the beach.", "When I was a kid, I used to go to the beach."],
        dialog: { a: "What did you do in summer as a kid?", aKo: "어릴 때 여름에 뭐 했어?" },
        wrong: { "when i was young i will go to the beach": "지난 습관은 will이 아니라 would예요." },
        tip: { en: "We went every summer.", why: "‘매년 여름 갔어’라는 말이에요." } }
    ]
  };
})(window.EP);
