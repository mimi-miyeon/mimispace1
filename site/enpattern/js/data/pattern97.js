/* 세션 97. You seem to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[97] = {
    no: 97, form: "You seem to ~.", stem: "You seem to", meaning: "당신은 ~해 보여요.",
    hint: "You seem to + 동사",
    intro: {
      blocks: [["You seem", "너는 ~인 것 같다"], ["to ~", "~하는 것"]],
      lines: [
        "You seem to + 동사는 ‘너 ~하는 것 같아’예요. 상대를 보고 느낀 걸 부드럽게 말해요.",
        "You 뒤에는 seem에 s를 붙이지 않아요.",
        "to 뒤에는 동사 원래 모양을 써요. (You seem to know: 너 아는 것 같아)"
      ],
      examples: [
        { en: "You seem to know a lot.", ko: "너 많이 아는 것 같아." },
        { en: "You seem to be tired.", ko: "너 피곤해 보여." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 그녀를 좋아하는 것 같아.", before: "You seem", after: "like her.", answers: ["to"],
        wrong: { "for": "동사 앞에는 for가 아니라 to를 써요." },
        tip: { en: "I think you like her.", why: "I think로 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 바빠 보여.", before: "You seem to", after: "busy.", answers: ["be"],
        wrong: { "is": "to 뒤에는 동사 원래 모양 be를 써요.", "are": "to 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "You look busy.", why: "look도 ‘~해 보이다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 길을 아는 것 같아.", before: "You seem to", after: "the way.", answers: ["know"],
        wrong: { "knows": "to 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "You know this area well.", why: "area는 ‘지역’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 즐기는 것 같아.", before: "You", after: "to enjoy it.", answers: ["seem"],
        wrong: { "seems": "You 뒤에는 seem에 s를 붙이지 않아요." },
        tip: { en: "You look like you're having fun.", why: "have fun은 ‘즐겁게 지내다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 뭔가 걱정하는 것 같아.", before: "You seem to be", after: "about something.", answers: ["worried"],
        wrong: { "worry": "be 뒤에는 ‘걱정하는’ worried를 써요.", "worrying": "‘걱정하는’ 상태는 worried예요." },
        tip: { en: "What's on your mind?", why: "‘무슨 생각 해?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 화난 것 같아.", answers: ["You seem to be angry.", "You seem to be upset.", "You seem to be mad."], alts: ["You seem angry.", "You seem upset."],
        wrong: { "you seems to be angry": "You 뒤에는 seem에 s를 붙이지 않아요.", "you seem to angry": "to 뒤에 be를 붙여요. to be angry예요." },
        tip: { en: "Are you mad at me?", why: "‘나한테 화났어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그거 잘 아는 것 같아.", answers: ["You seem to know it well.", "You seem to know a lot about it."],
        wrong: { "you seem to knows it well": "to 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "You're an expert.", why: "expert는 ‘전문가’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 요즘 행복해 보여.", answers: ["You seem to be happy these days.", "You seem to be happy lately."], alts: ["You seem happy these days.", "You seem happy lately."],
        wrong: { "you seem to be happily these days": "‘행복한’은 happy예요." },
        tip: { en: "You look happy these days.", why: "look도 ‘~해 보이다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 뭔가 숨기는 것 같아.", answers: ["You seem to be hiding something."],
        wrong: { "you seem to hiding something": "to 뒤에 be를 붙여요. to be hiding이에요." },
        tip: { en: "What are you hiding?", why: "‘뭘 숨기는 거야?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 많이 먹는 것 같아.", answers: ["You seem to eat a lot."],
        ctx: { lead: "know 대신 ‘먹다(eat)’로 바꿔 보세요.", en: "You seem to know a lot." },
        wrong: { "you seem to eats a lot": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "You've got a big appetite.", why: "appetite는 ‘식욕’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 진짜 피곤해 보여.", answers: ["You seem to be really tired.", "You seem to be very tired."], alts: ["You seem really tired.", "You seem very tired."],
        dialog: { a: "I only slept two hours.", aKo: "나 두 시간밖에 못 잤어." },
        wrong: { "you seem to be really tiring": "tiring은 ‘피곤하게 하는’이에요. 피곤하면 tired예요." },
        tip: { en: "You need some rest.", why: "‘좀 쉬어야겠다’라는 말이에요." } }
    ]
  };
})(window.EP);
