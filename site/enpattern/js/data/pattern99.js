/* 세션 99. It doesn't seem that ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[99] = {
    no: 99, form: "It doesn't seem that ~.", stem: "It doesn't seem", meaning: "~인 것 같지는 않아요.",
    hint: "It doesn't seem that + 주어 + 동사",
    intro: {
      blocks: [["It doesn't seem", "~인 것 같지 않다"], ["that ~", "주어 + 동사"]],
      lines: [
        "It doesn't seem that ~은 ‘~인 것 같지는 않아’예요.",
        "doesn't 뒤에는 seem에 s를 붙이지 않아요.",
        "말할 때는 It doesn't seem like ~도 많이 써요."
      ],
      examples: [
        { en: "It doesn't seem that he cares.", ko: "걔는 신경 안 쓰는 것 같아." },
        { en: "It doesn't seem that it'll stop.", ko: "그칠 것 같지 않아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그가 올 것 같지 않아.", before: "It doesn't seem", after: "he's coming.", answers: ["that", "like"],
        wrong: { "what": "‘~인 것 같지 않아’는 It doesn't seem that이에요." },
        tip: { en: "I don't think he's coming.", why: "I don't think로 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그게 효과 있는 것 같지 않아.", before: "It doesn't", after: "that it works.", answers: ["seem"],
        wrong: { "seems": "doesn't 뒤에는 seem에 s를 붙이지 않아요." },
        tip: { en: "It's not working.", why: "‘효과 없어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그녀가 신경 쓰는 것 같지 않아.", before: "It", after: "seem that she cares.", answers: ["doesn't"],
        wrong: { "is not": "seem 앞에서는 isn't가 아니라 doesn't를 써요.", "do not": "It 뒤에는 doesn't를 써요." },
        tip: { en: "She doesn't care.", why: "‘신경 안 써’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "비가 그칠 것 같지 않아.", before: "It doesn't seem that the rain will", after: ".", answers: ["stop"],
        wrong: { "stops": "will 뒤에는 동사 원래 모양 stop을 써요." },
        tip: { en: "It's going to rain all day.", why: "‘하루 종일 비 오겠다’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그게 큰 문제 같지는 않아.", before: "It doesn't seem that it's a big", after: ".", answers: ["problem", "deal"],
        tip: { en: "It's no big deal.", why: "no big deal은 ‘별일 아니다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그가 거짓말하는 것 같지 않아.", answers: ["It doesn't seem that he's lying.", "It doesn't seem like he's lying."],
        wrong: { "it does not seems that he is lying": "doesn't 뒤에는 seem에 s를 붙이지 않아요.", "it is not seem that he is lying": "seem 앞에서는 isn't가 아니라 doesn't를 써요." },
        tip: { en: "He sounds honest.", why: "‘솔직하게 들려’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그들이 서두르는 것 같지 않아.", answers: ["It doesn't seem that they're in a hurry.", "It doesn't seem like they're in a hurry.", "It doesn't seem that they're hurrying."],
        wrong: { "it does not seem that they in a hurry": "they 뒤에 are가 필요해요. they're예요." },
        tip: { en: "They're taking their time.", why: "take one's time은 ‘천천히 하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그게 쉬울 것 같지 않아.", answers: ["It doesn't seem that it'll be easy.", "It doesn't seem like it'll be easy.", "It doesn't seem that it will be easy."],
        wrong: { "it does not seem that it will easy": "will 뒤에 be를 붙여요. will be easy예요." },
        tip: { en: "It won't be easy.", why: "‘쉽지 않을 거야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아무도 모르는 것 같아.", answers: ["It doesn't seem that anyone knows.", "It doesn't seem like anyone knows.", "It doesn't seem that anybody knows."],
        wrong: { "it does not seem that anyone know": "anyone 뒤에는 동사에 s를 붙여요. knows예요." },
        tip: { en: "Nobody seems to know.", why: "nobody는 ‘아무도 ~ 않다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그녀가 우리를 기억하는 것 같지 않아.", answers: ["It doesn't seem that she remembers us.", "It doesn't seem like she remembers us."],
        ctx: { lead: "he cares 대신 ‘그녀가 우리를 기억한다(she remembers us)’로 바꿔 보세요.", en: "It doesn't seem that he cares." },
        wrong: { "it does not seem that she remember us": "she 뒤에는 동사에 s를 붙여요. remembers예요." },
        tip: { en: "She forgot us.", why: "‘우리를 잊었어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 그런 것 같지 않아.", answers: ["No, it doesn't seem that way.", "No, it doesn't seem like it.", "No, it doesn't seem so."],
        dialog: { a: "Is he angry with me?", aKo: "걔 나한테 화났어?" },
        wrong: { "no it does not seems like it": "doesn't 뒤에는 seem에 s를 붙이지 않아요." },
        tip: { en: "No, I don't think so.", why: "‘아니, 그런 것 같지 않아’의 다른 말이에요." } }
    ]
  };
})(window.EP);
