/* 세션 13. I need you to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[13] = {
    no: 13, form: "I need you to ~.", stem: "I need you to", meaning: "나는 당신이 ~해 주었으면 해요.",
    hint: "I need you to + 동사",
    intro: {
      blocks: [["I need", "나는 필요하다"], ["you", "네가"], ["to ~", "~하는 것"]],
      lines: [
        "I need you to ~는 ‘네가 ~해 줘야 해’라는 부탁이에요.",
        "need 뒤에 부탁할 사람(you)을 쓰고, 그 사람이 할 일을 to + 동사로 붙여요.",
        "Please보다 조금 더 진지하게 부탁할 때 써요."
      ],
      examples: [
        { en: "I need you to help me.", ko: "네가 나 좀 도와줘야 해." },
        { en: "I need you to be careful.", ko: "너 조심해야 해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네가 이거 좀 봐 줘야 해.", before: "I need you", after: "look at this.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Can you take a look at this?", why: "take a look은 ‘한번 보다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 나 기다려 줘야 해.", before: "I need", after: "to wait for me.", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. 부탁하는 사람은 you로 써요." },
        tip: { en: "Please wait for me.", why: "짧게 부탁할 때는 Please를 써요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네가 오늘 일찍 와 줘야 해.", before: "I", after: "you to come early today.", answers: ["need"],
        wrong: { "needs": "I 뒤에는 needs가 아니라 need예요.", "want": "want는 ‘원하다’예요. 이번 패턴은 ‘필요하다’ need예요." },
        tip: { en: "Please come early today.", why: "짧게 부탁할 때는 Please를 써요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네가 조용히 해 줘야 해.", before: "I need you to", after: "quiet.", answers: ["be"],
        wrong: { "being": "to 뒤에는 동사 원래 모양 be를 써요.", "are": "to 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "Please keep it down.", why: "keep it down은 ‘소리를 줄이다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 이 가방 좀 들어 줘야 해.", before: "I need you to", after: "this bag.", answers: ["carry", "hold"],
        wrong: { "carrying": "to 뒤에는 동사 원래 모양 carry를 써요." },
        tip: { en: "Can you hold this bag for me?", why: "for me를 붙이면 ‘나 대신’이라는 느낌이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네가 내 말 좀 들어 줘야 해.", answers: ["I need you to listen to me."],
        wrong: { "i need you listen to me": "할 일 앞에 to를 붙여요. need you to listen이에요.", "i need you to listen me": "‘~의 말을 듣다’는 listen 뒤에 to를 붙여요." },
        tip: { en: "Please hear me out.", why: "hear out은 ‘끝까지 들어 주다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네가 나 좀 태워 줘야 해.", answers: ["I need you to give me a ride.", "I need you to drive me."],
        wrong: { "i need you to give me ride": "ride는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Can you give me a ride?", why: "‘태워 줄래?’로 부드럽게 물어도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네가 이거 비밀로 해 줘야 해.", answers: ["I need you to keep this a secret.", "I need you to keep this secret.", "I need you to keep it a secret.", "I need you to keep it secret."],
        wrong: { "i need you to keep this secretly": "‘비밀로 하다’는 keep ~ a secret처럼 secret을 써요." },
        tip: { en: "Don't tell anyone.", why: "‘아무한테도 말하지 마’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네가 내일 여기 와 줘야 해.", answers: ["I need you to come here tomorrow.", "I need you to be here tomorrow."],
        wrong: { "i need you to came here tomorrow": "to 뒤에는 동사 원래 모양 come을 써요.", "i need you come here tomorrow": "할 일 앞에 to를 붙여요. need you to come이에요." },
        tip: { en: "Please be here tomorrow.", why: "짧게 부탁할 때는 Please를 써요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 나한테 전화해 줘야 해.", answers: ["I need you to call me."],
        ctx: { lead: "help me 대신 ‘나한테 전화해’로 바꿔 보세요.", en: "I need you to help me." },
        wrong: { "i need you to call to me": "call 뒤에는 to 없이 바로 사람을 써요.", "i need you call me": "할 일 앞에 to를 붙여요. need you to call이에요." },
        tip: { en: "Give me a call.", why: "give ~ a call은 ‘전화하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네가 이 문 좀 열어 줘야 해.", answers: ["I need you to open this door.", "I need you to open the door."],
        dialog: { a: "What can I do for you?", aKo: "내가 뭐 해 줄까?" },
        wrong: { "i need you to opening this door": "to 뒤에는 동사 원래 모양 open을 써요.", "i need your to open this door": "부탁하는 사람은 your가 아니라 you로 써요." },
        tip: { en: "Could you open the door?", why: "Could you는 정중하게 부탁하는 말이에요." } }
    ]
  };
})(window.EP);
