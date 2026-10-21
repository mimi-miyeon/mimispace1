/* 세션 142. I'll see if ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[142] = {
    no: 142, form: "I'll see if ~.", stem: "I'll see if", meaning: "~인지 확인할게요.",
    hint: "I'll see if + 주어 + 동사",
    intro: {
      blocks: [["I'll see", "내가 알아볼게"], ["if ~", "~인지"]],
      lines: [
        "I'll see if + 주어 + 동사는 ‘~인지 알아볼게 / 확인해 볼게’예요.",
        "if는 여기서 ‘~인지’라는 뜻이에요.",
        "I'll see what I can do.(내가 할 수 있는 걸 해 볼게)도 자주 써요."
      ],
      examples: [
        { en: "I'll see if he's home.", ko: "걔 집에 있는지 볼게." },
        { en: "I'll see if I can help.", ko: "내가 도울 수 있는지 볼게." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "걔 집에 있는지 볼게.", before: "I'll see", after: "he's home.", answers: ["if"],
        wrong: { "that": "‘~인지’는 if예요." },
        tip: { en: "I'll check if he's home.", why: "check도 ‘확인하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 갈 수 있는지 볼게.", before: "I'll see if I", after: "come.", answers: ["can"],
        wrong: { "could": "지금 확인할 일이라 can을 써요." },
        tip: { en: "I'll let you know.", why: "‘알려 줄게’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "자리 있는지 확인할게요.", before: "I'll", after: "if there's a table.", answers: ["see"],
        wrong: { "look": "‘~인지 확인할게’는 I'll see if예요." },
        tip: { en: "Let me check.", why: "‘확인해 볼게요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "아직 열려 있는지 볼게.", before: "I'll see if it's still", after: ".", answers: ["open"],
        wrong: { "opened": "‘열려 있는’은 open이에요." },
        tip: { en: "I'll call them.", why: "‘전화해 볼게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "남은 거 있는지 볼게.", before: "", after: "see if there's any left.", answers: ["I'll"],
        wrong: { "i": "‘~할게’는 I'll이에요." },
        tip: { en: "I'll check the fridge.", why: "‘냉장고 볼게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그가 시간 있는지 볼게.", answers: ["I'll see if he's free.", "I'll see if he has time.", "I'll see if he's available."],
        wrong: { "i will see if he free": "free 앞에 is가 필요해요. he's free예요.", "i see if he is free": "‘~할게’는 I'll이에요." },
        tip: { en: "I'll ask him.", why: "‘물어볼게’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내가 도울 수 있는지 볼게.", answers: ["I'll see if I can help.", "I'll see if I can help you."],
        wrong: { "i will see if i can helping": "can 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "I'll see what I can do.", why: "‘할 수 있는 걸 해 볼게’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그게 재고 있는지 확인할게요.", answers: ["I'll see if it's in stock.", "I'll see if we have it in stock.", "I'll see if we have it."],
        wrong: { "i will see if it is in stocks": "‘재고 있는’은 in stock이에요." },
        tip: { en: "One moment, please.", why: "‘잠시만요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그녀가 오는지 볼게.", answers: ["I'll see if she's coming.", "I'll see if she can come."],
        wrong: { "i will see if she coming": "she 뒤에 is가 필요해요. she's coming이에요." },
        tip: { en: "I'll text her.", why: "‘문자 해 볼게’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그게 작동하는지 볼게.", answers: ["I'll see if it works."],
        ctx: { lead: "he's home 대신 ‘그게 작동한다(it works)’로 바꿔 보세요.", en: "I'll see if he's home." },
        wrong: { "i will see if it work": "it 뒤에는 동사에 s를 붙여요. works예요." },
        tip: { en: "Let me test it.", why: "‘테스트해 볼게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "알겠어, 내가 바꿀 수 있는지 볼게.", answers: ["Okay, I'll see if I can change it.", "I'll see if I can change it.", "Sure, I'll see if I can change it."],
        dialog: { a: "Can you change my seat?", aKo: "내 자리 좀 바꿔 줄 수 있어?" },
        wrong: { "okay i will see if i can changing it": "can 뒤에는 동사 원래 모양 change를 써요." },
        tip: { en: "No problem.", why: "‘문제없어’라는 말이에요." } }
    ]
  };
})(window.EP);
