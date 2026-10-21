/* 세션 75. I hope ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[75] = {
    no: 75, form: "I hope ~.", stem: "I hope", meaning: "~이면 좋겠어요.",
    hint: "I hope + 주어 + 동사",
    intro: {
      blocks: [["I hope", "나는 바란다"], ["~", "주어 + 동사"]],
      lines: [
        "I hope ~는 ‘~이면 좋겠어 / ~하길 바라’예요. 일어날 수 있는 일을 바랄 때 써요.",
        "I wish(사실과 반대)와 달리 hope 뒤에는 보통 현재형을 써요. (I hope you like it.)",
        "앞으로의 일도 현재형이나 will로 써요. (I hope it doesn't rain.)"
      ],
      examples: [
        { en: "I hope you like it.", ko: "네 마음에 들면 좋겠어." },
        { en: "I hope you feel better.", ko: "빨리 낫길 바라." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내일 날씨 좋으면 좋겠다.", before: "I", after: "the weather is nice tomorrow.", answers: ["hope"],
        wrong: { "wish": "일어날 수 있는 일은 wish가 아니라 hope를 써요.", "hopes": "I 뒤에는 hopes가 아니라 hope예요." },
        tip: { en: "Fingers crossed for good weather.", why: "Fingers crossed는 ‘행운을 빌어’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 붙으면 좋겠어.", before: "I hope you", after: ".", answers: ["pass"],
        wrong: { "passed": "앞으로의 일이라 현재형 pass를 써요.", "passing": "hope you 뒤에는 동사 pass를 써요." },
        tip: { en: "Good luck on your test!", why: "‘시험 잘 봐!’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그 사람이 안 늦으면 좋겠다.", before: "I hope he", after: "late.", answers: ["isn't"],
        wrong: { "does not": "late는 형용사라 doesn't가 아니라 isn't를 써요.", "not": "is 뒤에 not을 붙여 isn't late예요." },
        tip: { en: "He'd better be on time.", why: "‘제시간에 와야 할 텐데’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "재밌게 놀길 바라.", before: "I hope you", after: "fun.", answers: ["have"],
        wrong: { "has": "you 뒤에는 has가 아니라 have예요.", "had": "앞으로의 일이라 현재형 have를 써요." },
        tip: { en: "Have fun!", why: "‘재밌게 놀아!’라는 짧은 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "비 안 왔으면 좋겠다.", before: "I hope it", after: "rain.", answers: ["doesn't", "won't"],
        wrong: { "do not": "it 뒤에는 don't가 아니라 doesn't를 써요.", "is not": "rain은 동사라 isn't가 아니라 doesn't를 써요." },
        tip: { en: "Let's hope for sunshine.", why: "‘맑기를 바라자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "다시 만나면 좋겠어.", answers: ["I hope we meet again.", "I hope we can meet again.", "I hope to see you again."],
        wrong: { "i wish we meet again": "일어날 수 있는 일은 wish가 아니라 hope를 써요." },
        tip: { en: "See you again soon!", why: "‘곧 또 보자!’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네가 그 일 구하면 좋겠어.", answers: ["I hope you get the job."],
        wrong: { "i wish you get the job": "일어날 수 있는 일은 wish가 아니라 hope를 써요.", "i hope you gets the job": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Good luck with the job!", why: "‘취업 잘 되길!’이라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "다 잘되길 바라.", answers: ["I hope everything goes well.", "I hope it all goes well.", "I hope everything works out."],
        wrong: { "i hope everything go well": "everything은 하나로 봐서 goes예요." },
        tip: { en: "Good luck with everything.", why: "‘모든 일 잘 되길’이라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 안 늦었으면 좋겠다.", answers: ["I hope I'm not late.", "I hope I'm not too late."],
        wrong: { "i hope i do not late": "late는 형용사라 I'm not late예요." },
        tip: { en: "Am I late?", why: "‘나 늦었어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 즐기면 좋겠어.", answers: ["I hope you enjoy it."],
        ctx: { lead: "like it 대신 ‘즐기다(enjoy it)’로 바꿔 보세요.", en: "I hope you like it." },
        wrong: { "i hope you enjoy": "enjoy 뒤에는 무엇을 즐기는지 it 같은 말을 붙여요.", "i hope you enjoys it": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Enjoy!", why: "‘즐겨!’라는 짧은 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "잘되길 바라!", answers: ["I hope it goes well!", "I hope you do well!"],
        dialog: { a: "I have a job interview tomorrow.", aKo: "나 내일 면접 있어." },
        wrong: { "i wish it goes well": "일어날 수 있는 일은 wish가 아니라 hope를 써요.", "i hope it go well": "it 뒤에는 동사에 s를 붙여요. goes예요." },
        tip: { en: "Good luck tomorrow!", why: "‘내일 잘 봐!’라는 말이에요." } }
    ]
  };
})(window.EP);
