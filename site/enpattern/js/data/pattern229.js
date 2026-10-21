/* 세션 229. I don't know why ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[229] = {
    no: 229, form: "I don't know why ~.", stem: "I don't know why", meaning: "왜 ~인지 모르겠어요.",
    hint: "I don't know why + 주어 + 동사",
    intro: {
      blocks: [["I don't know", "나는 모르겠다"], ["why ~", "왜 ~인지"]],
      lines: [
        "I don't know why + 주어 + 동사는 ‘왜 ~인지 모르겠어’예요.",
        "why 뒤에는 ‘주어 + 동사’ 순서로 써요. (why he is ○, why is he ×)",
        "I don't know why.만 써도 ‘왜 그런지 모르겠어’예요."
      ],
      examples: [
        { en: "I don't know why he's angry.", ko: "걔가 왜 화났는지 모르겠어." },
        { en: "I don't know why I did that.", ko: "내가 왜 그랬는지 모르겠어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "걔가 왜 화났는지 모르겠어.", before: "I don't know why he's", after: ".", answers: ["angry", "mad", "upset"],
        wrong: { "anger": "he's 뒤에는 형용사 angry를 써요." },
        tip: { en: "Did I do something?", why: "‘내가 뭐 했나?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "내가 왜 그랬는지 모르겠어.", before: "I don't know why I", after: "that.", answers: ["did"],
        wrong: { "do": "지난 일이라 did를 써요." },
        tip: { en: "It was a mistake.", why: "‘실수였어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "왜 안 되는지 모르겠어.", before: "I don't know", after: "it doesn't work.", answers: ["why"],
        wrong: { "what": "이유를 말할 때는 why예요.", "how": "이유를 말할 때는 why예요." },
        tip: { en: "Let's try again.", why: "‘다시 해 보자’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "왜 그런지 모르겠어.", before: "I don't", after: "why.", answers: ["know"],
        wrong: { "knows": "don't 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "Beats me.", why: "‘나도 몰라’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그녀가 왜 우는지 모르겠어.", before: "I don't know why she's", after: ".", answers: ["crying"],
        wrong: { "cry": "she's 뒤에는 동사에 ing를 붙여요. crying이에요." },
        tip: { en: "Let's ask her.", why: "‘물어보자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "왜 이렇게 피곤한지 모르겠어.", answers: ["I don't know why I'm so tired."],
        wrong: { "i do not know why am i so tired": "why 뒤에는 ‘주어 + 동사’ 순서로 써요. why I'm이에요.", "i do not know why i so tired": "tired 앞에 am이 필요해요." },
        tip: { en: "Maybe you need sleep.", why: "‘잠이 필요한가 봐’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "걔가 왜 안 왔는지 모르겠어.", answers: ["I don't know why he didn't come.", "I don't know why she didn't come."],
        wrong: { "i do not know why did he not come": "why 뒤에는 ‘주어 + 동사’ 순서로 써요." },
        tip: { en: "Maybe he was busy.", why: "‘바빴나 봐’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "왜 다들 웃는지 모르겠어.", answers: ["I don't know why everyone is laughing.", "I don't know why everyone's laughing.", "I don't know why everybody is laughing."],
        wrong: { "i do not know why is everyone laughing": "why 뒤에는 ‘주어 + 동사’ 순서로 써요." },
        tip: { en: "What's so funny?", why: "‘뭐가 그렇게 웃겨?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "왜 그걸 샀는지 모르겠어.", answers: ["I don't know why I bought it.", "I don't know why I bought that."],
        wrong: { "i do not know why i buy it": "지난 일이라 bought를 써요." },
        tip: { en: "Impulse buy.", why: "impulse buy는 ‘충동구매’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "걔가 왜 늦었는지 모르겠어.", answers: ["I don't know why he's late.", "I don't know why he was late."],
        ctx: { lead: "angry 대신 ‘늦은(late)’으로 바꿔 보세요.", en: "I don't know why he's angry." },
        wrong: { "i do not know why is he late": "why 뒤에는 ‘주어 + 동사’ 순서로 써요." },
        tip: { en: "He's always late.", why: "‘걔는 맨날 늦어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "모르겠어. 왜 꺼졌는지 모르겠어.", answers: ["I don't know. I don't know why it turned off.", "I don't know why it turned off.", "I don't know why it shut down."],
        dialog: { a: "What happened to the computer?", aKo: "컴퓨터 왜 그래?" },
        wrong: { "i do not know why did it turn off": "why 뒤에는 ‘주어 + 동사’ 순서로 써요." },
        tip: { en: "Let's restart it.", why: "restart는 ‘다시 켜다’예요." } }
    ]
  };
})(window.EP);
