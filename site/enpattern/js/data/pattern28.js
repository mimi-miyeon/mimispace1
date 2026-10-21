/* 세션 28. You don't have to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[28] = {
    no: 28, form: "You don't have to ~.", stem: "You don't have to", meaning: "당신이 ~할 필요는 없어요.",
    hint: "You don't have to + 동사",
    intro: {
      blocks: [["You", "너는"], ["don't have to", "~하지 않아도 된다"], ["~", "동사"]],
      lines: [
        "You don't have to ~는 ‘너 ~ 안 해도 돼’예요.",
        "‘하면 안 된다’가 아니라 ‘할 필요 없다’는 뜻이에요. 하지 말라고 할 때는 Don't ~예요.",
        "to 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "You don't have to hurry.", ko: "서두르지 않아도 돼." },
        { en: "You don't have to worry.", ko: "걱정 안 해도 돼." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 일찍 안 와도 돼.", before: "You", after: "have to come early.", answers: ["don't"],
        wrong: { "does not": "you 뒤에는 doesn't가 아니라 don't예요.", "not": "have to 앞에는 not만 쓰지 않고 don't를 붙여요.", "must not": "must not은 ‘하면 안 돼’예요. ‘안 해도 돼’는 don't have to예요." },
        tip: { en: "No need to come early.", why: "No need to는 ‘~할 필요 없어’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 사과 안 해도 돼.", before: "You don't", after: "to say sorry.", answers: ["have", "need"],
        wrong: { "has": "don't 뒤에는 동사 원래 모양 have를 써요." },
        tip: { en: "No need to apologize.", why: "apologize는 ‘사과하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 나 기다리지 않아도 돼.", before: "You don't have to", after: "for me.", answers: ["wait"],
        wrong: { "waiting": "to 뒤에는 동사 원래 모양 wait을 써요." },
        tip: { en: "Go ahead without me.", why: "‘나 없이 먼저 가’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 신발 안 벗어도 돼.", before: "You don't have", after: "take off your shoes.", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Shoes are fine.", why: "‘신발 신어도 괜찮아’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 오늘 요리 안 해도 돼.", before: "", after: "don't have to cook today.", answers: ["You"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "Let's eat out today.", why: "‘오늘 외식하자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 나 태워 주지 않아도 돼.", answers: ["You don't have to give me a ride.", "You don't have to drive me."],
        wrong: { "you do not have to giving me a ride": "to 뒤에는 동사 원래 모양 give를 써요.", "you must not give me a ride": "must not은 ‘하면 안 돼’예요. ‘안 해도 돼’는 don't have to예요." },
        tip: { en: "You don't need to give me a ride.", why: "don't need to도 ‘~할 필요 없어’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 지금 대답 안 해도 돼.", answers: ["You don't have to answer now.", "You don't have to answer right now."],
        wrong: { "you does not have to answer now": "you 뒤에는 doesn't가 아니라 don't예요.", "you do not have answer now": "‘~할 필요 없어’는 have 뒤에 to를 붙여요." },
        tip: { en: "Take your time.", why: "‘천천히 해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 다 먹지 않아도 돼.", answers: ["You don't have to eat it all.", "You don't have to finish it.", "You don't have to eat everything.", "You don't have to finish everything."],
        wrong: { "you do not have to eating it all": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "Just eat what you want.", why: "‘먹고 싶은 만큼만 먹어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 고맙다고 안 해도 돼.", answers: ["You don't have to thank me."],
        wrong: { "you do not have to thanks me": "to 뒤에는 동사 원래 모양 thank를 써요." },
        tip: { en: "Don't mention it.", why: "‘별말을 다 해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 돈 안 내도 돼.", answers: ["You don't have to pay."],
        ctx: { lead: "‘안 해도 돼’로 바꿔 보세요.", en: "You have to pay." },
        wrong: { "you have not to pay": "‘안 해도 돼’는 don't have to예요.", "you must not pay": "must not은 ‘내면 안 돼’예요. ‘안 내도 돼’는 don't have to예요." },
        tip: { en: "It's on me.", why: "‘내가 낼게’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 아무것도 안 가져와도 돼.", answers: ["No, you don't have to bring anything."],
        dialog: { a: "Should I bring anything?", aKo: "나 뭐 가져가야 해?" },
        wrong: { "no you do not have to bring something": "‘아무것도’는 부정문에서 anything을 써요.", "no you do not have to bringing anything": "to 뒤에는 동사 원래 모양 bring을 써요." },
        tip: { en: "No, just bring yourself.", why: "‘몸만 와’라는 말이에요." } }
    ]
  };
})(window.EP);
