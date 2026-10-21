/* 세션 138. I don't mind ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[138] = {
    no: 138, form: "I don't mind ~.", stem: "I don't mind", meaning: "~는 상관없어요.",
    hint: "I don't mind + 명사/동사-ing/if + 주어 + 동사",
    intro: {
      blocks: [["I don't mind", "나는 상관없다"], ["~", "명사 / 동사-ing"]],
      lines: [
        "I don't mind ~는 ‘~해도 괜찮아 / 상관없어’예요.",
        "뒤에는 명사, 동사-ing(waiting), if + 주어 + 동사를 써요.",
        "I don't mind.만 써도 ‘난 상관없어’예요."
      ],
      examples: [
        { en: "I don't mind waiting.", ko: "기다려도 괜찮아." },
        { en: "I don't mind if you smoke.", ko: "너 담배 피워도 상관없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "기다려도 괜찮아.", before: "I don't mind", after: ".", answers: ["waiting"],
        wrong: { "wait": "mind 뒤에는 동사에 ing를 붙여요. waiting이에요.", "to wait": "mind 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Take your time.", why: "‘천천히 해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 걸어도 괜찮아.", before: "I don't mind", after: ".", answers: ["walking"],
        wrong: { "walk": "mind 뒤에는 동사에 ing를 붙여요. walking이에요." },
        tip: { en: "It's a nice day for a walk.", why: "‘걷기 좋은 날이야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "난 상관없어.", before: "I don't", after: ".", answers: ["mind"],
        wrong: { "care": "‘상관없어(괜찮아)’는 I don't mind예요." },
        tip: { en: "Either is fine.", why: "‘둘 다 좋아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네가 늦어도 괜찮아.", before: "I don't mind", after: "you're late.", answers: ["if"],
        wrong: { "that": "‘~해도 괜찮아’는 I don't mind if예요." },
        tip: { en: "No worries.", why: "‘걱정 마’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 매운 거 괜찮아.", before: "I", after: "mind spicy food.", answers: ["don't"],
        wrong: { "am not": "mind 앞에는 don't를 써요.", "do": "‘괜찮아’는 don't mind예요." },
        tip: { en: "I can handle spice.", why: "handle은 ‘감당하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 일찍 일어나는 거 괜찮아.", answers: ["I don't mind getting up early.", "I don't mind waking up early."],
        wrong: { "i do not mind get up early": "mind 뒤에는 동사에 ing를 붙여요. getting이에요.", "i do not mind to get up early": "mind 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "I'm an early bird.", why: "early bird는 ‘아침형 인간’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 설거지해도 괜찮아.", answers: ["I don't mind doing the dishes.", "I don't mind washing the dishes."],
        wrong: { "i do not mind do the dishes": "mind 뒤에는 동사에 ing를 붙여요. doing이에요." },
        tip: { en: "Leave it to me.", why: "‘나한테 맡겨’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네가 창문 열어도 괜찮아.", answers: ["I don't mind if you open the window."],
        wrong: { "i do not mind if you opening the window": "if you 뒤에는 동사 원래 모양 open을 써요." },
        tip: { en: "Go ahead.", why: "‘그렇게 해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 운전해도 괜찮아.", answers: ["I don't mind driving."],
        wrong: { "i do not mind drive": "mind 뒤에는 동사에 ing를 붙여요. driving이에요." },
        tip: { en: "I like driving.", why: "‘운전하는 거 좋아해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 혼자 가도 괜찮아.", answers: ["I don't mind going alone.", "I don't mind going by myself."],
        ctx: { lead: "waiting 대신 ‘혼자 가기(going alone)’로 바꿔 보세요.", en: "I don't mind waiting." },
        wrong: { "i do not mind go alone": "mind 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "I'll be fine.", why: "‘나 괜찮을 거야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "난 상관없어. 네가 골라.", answers: ["I don't mind. You choose.", "I don't mind. You pick."],
        dialog: { a: "Pizza or pasta?", aKo: "피자 먹을래 파스타 먹을래?" },
        wrong: { "i do not care you choose": "‘상관없어(괜찮아)’는 I don't mind예요." },
        tip: { en: "Anything is fine.", why: "‘아무거나 좋아’라는 말이에요." } }
    ]
  };
})(window.EP);
