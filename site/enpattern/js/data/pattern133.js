/* 세션 133. There is no reason to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[133] = {
    no: 133, form: "There is no reason to ~.", stem: "There's no reason to/There is no reason to", meaning: "~할 이유가 없어요.",
    hint: "There is no reason to + 동사",
    intro: {
      blocks: [["There's no reason", "이유가 없다"], ["to ~", "~할"]],
      lines: [
        "There is no reason to + 동사는 ‘~할 이유가 없어’예요. 상대를 안심시킬 때 자주 써요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "There's no reason to worry.(걱정할 필요 없어)가 대표 표현이에요."
      ],
      examples: [
        { en: "There's no reason to worry.", ko: "걱정할 이유 없어." },
        { en: "There's no reason to hurry.", ko: "서두를 이유 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "걱정할 이유 없어.", before: "There's no reason to", after: ".", answers: ["worry"],
        wrong: { "worrying": "to 뒤에는 동사 원래 모양 worry를 써요." },
        tip: { en: "Relax.", why: "‘긴장 풀어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "화낼 이유 없어.", before: "There's no reason to be", after: ".", answers: ["angry", "mad", "upset"],
        wrong: { "anger": "be 뒤에는 ‘화난’ angry를 써요." },
        tip: { en: "Calm down.", why: "‘진정해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "미안해할 이유 없어.", before: "There's no reason to be", after: ".", answers: ["sorry"],
        wrong: { "sorrow": "‘미안한’은 sorry예요." },
        tip: { en: "It's not your fault.", why: "fault는 ‘잘못’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "서두를 이유 없어.", before: "There's no", after: "to hurry.", answers: ["reason"],
        wrong: { "reasons": "no 뒤에 reason 하나로 써요." },
        tip: { en: "Take your time.", why: "‘천천히 해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "거짓말할 이유 없어.", before: "There's no reason", after: "lie.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Just tell the truth.", why: "‘그냥 사실대로 말해’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "긴장할 이유 없어.", answers: ["There's no reason to be nervous."],
        wrong: { "there is no reason to nervous": "nervous 앞에 be를 붙여요.", "there is no reason to be nerve": "‘긴장한’은 nervous예요." },
        tip: { en: "You'll do great.", why: "‘잘할 거야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그만둘 이유 없어.", answers: ["There's no reason to quit.", "There's no reason to give up."],
        wrong: { "there is no reason to quitting": "to 뒤에는 동사 원래 모양 quit을 써요." },
        tip: { en: "Keep going.", why: "‘계속해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "겁먹을 이유 없어.", answers: ["There's no reason to be scared.", "There's no reason to be afraid."],
        wrong: { "there is no reason to be scary": "scary는 ‘무서운’이에요. 겁먹으면 scared예요." },
        tip: { en: "It's safe.", why: "‘안전해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그걸 다시 할 이유 없어.", answers: ["There's no reason to do it again."],
        wrong: { "there is no reason to doing it again": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Once is enough.", why: "‘한 번이면 충분해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "울 이유 없어.", answers: ["There's no reason to cry."],
        ctx: { lead: "worry 대신 ‘울다(cry)’로 바꿔 보세요.", en: "There's no reason to worry." },
        wrong: { "there is no reason to crying": "to 뒤에는 동사 원래 모양 cry를 써요." },
        tip: { en: "Everything's fine.", why: "‘다 괜찮아’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 당황할 이유 없어.", answers: ["No, there's no reason to panic.", "No, there's no reason to worry."],
        dialog: { a: "Should we panic? The bus is late.", aKo: "당황해야 해? 버스가 늦어." },
        wrong: { "no there is no reason to panicking": "to 뒤에는 동사 원래 모양 panic을 써요." },
        tip: { en: "No, we have plenty of time.", why: "plenty of는 ‘충분한’이에요." } }
    ]
  };
})(window.EP);
