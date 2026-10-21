/* 세션 24. I love it when ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[24] = {
    no: 24, form: "I love it when ~.", stem: "I love it when", meaning: "나는 ~하는 것이 너무 좋아요.",
    hint: "I love it when + 주어 + 동사",
    intro: {
      blocks: [["I love it", "나는 그게 너무 좋다"], ["when", "~할 때"], ["~", "주어 + 동사"]],
      lines: [
        "I love it when ~는 ‘~할 때가 너무 좋아’예요.",
        "when 뒤에는 ‘주어 + 동사’로 문장을 써요. (when it rains)",
        "it, he, she 같은 한 사람·한 가지가 주어면 동사에 s를 붙여요. (it snows)"
      ],
      examples: [
        { en: "I love it when it snows.", ko: "눈 올 때가 너무 좋아." },
        { en: "I love it when you smile.", ko: "네가 웃을 때가 너무 좋아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "비 올 때가 너무 좋아.", before: "I love it", after: "it rains.", answers: ["when"],
        wrong: { "that": "‘~할 때’는 that이 아니라 when을 써요.", "what": "‘~할 때’는 what이 아니라 when을 써요." },
        tip: { en: "Rainy days are the best.", why: "‘비 오는 날이 최고야’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 요리해 줄 때가 너무 좋아.", before: "I love it when you", after: "for me.", answers: ["cook"],
        wrong: { "cooks": "you 뒤에는 동사에 s를 붙이지 않아요.", "cooking": "when 뒤에는 ‘주어 + 동사’를 써요. you cook이에요." },
        tip: { en: "Your cooking is the best.", why: "‘네 요리가 최고야’라는 칭찬이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "날씨가 따뜻할 때가 너무 좋아.", before: "I love it when it", after: "warm.", answers: ["is"],
        wrong: { "are": "it 뒤에는 are가 아니라 is를 써요.", "be": "when 뒤에는 ‘주어 + 동사’를 써요. it is예요." },
        tip: { en: "I love warm weather.", why: "‘따뜻한 날씨가 너무 좋아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "친구들이 놀러 올 때가 너무 좋아.", before: "I", after: "it when friends visit.", answers: ["love"],
        wrong: { "loves": "I 뒤에는 loves가 아니라 love예요." },
        tip: { en: "It's great when friends come over.", why: "come over는 ‘놀러 오다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "버스가 바로 올 때가 너무 좋아.", before: "I love it when the bus", after: "right away.", answers: ["comes"],
        wrong: { "come": "the bus는 하나라서 동사에 s를 붙여요. comes예요.", "coming": "when 뒤에는 ‘주어 + 동사’를 써요. the bus comes예요." },
        tip: { en: "Perfect timing!", why: "‘타이밍 완벽해!’라는 짧은 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "주말에 늦잠 잘 때가 너무 좋아.", answers: ["I love it when I sleep in on weekends.", "I love it when I sleep late on weekends."],
        wrong: { "i love it when i sleeping in on weekends": "when 뒤에는 ‘주어 + 동사’를 써요. I sleep이에요." },
        tip: { en: "Sleeping in on weekends is the best.", why: "sleep in은 ‘늦잠 자다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "엄마가 전화할 때가 너무 좋아.", answers: ["I love it when my mom calls.", "I love it when my mom calls me.", "I love it when Mom calls."],
        wrong: { "i love it when my mom call": "my mom은 한 사람이라 동사에 s를 붙여요. calls예요." },
        tip: { en: "Mom's calls always make me happy.", why: "‘엄마 전화는 늘 날 기쁘게 해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "일이 일찍 끝날 때가 너무 좋아.", answers: ["I love it when work ends early.", "I love it when work finishes early.", "I love it when I finish work early.", "I love it when I get off work early."],
        wrong: { "i love it when work end early": "work는 하나라서 동사에 s를 붙여요. ends예요." },
        tip: { en: "Leaving work early is the best.", why: "‘일찍 퇴근하는 게 최고야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "사람들이 내 이름을 기억할 때가 너무 좋아.", answers: ["I love it when people remember my name."],
        wrong: { "i love it when people remembers my name": "people은 여러 명이라 동사에 s를 붙이지 않아요." },
        tip: { en: "It feels nice when people remember my name.", why: "feels nice는 ‘기분이 좋다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "해가 날 때가 너무 좋아.", answers: ["I love it when the sun comes out.", "I love it when it's sunny.", "I love it when the sun is out."],
        ctx: { lead: "it snows 대신 ‘해가 나다(the sun comes out)’로 바꿔 보세요.", en: "I love it when it snows." },
        wrong: { "i love it when the sun come out": "the sun은 하나라서 동사에 s를 붙여요. comes예요." },
        tip: { en: "I love sunny days.", why: "sunny day는 ‘맑은 날’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "고마워! 네가 이럴 때가 너무 좋아.", answers: ["Thanks! I love it when you do that.", "Thank you! I love it when you do that.", "Thanks! I love it when you do this."],
        dialog: { a: "I brought you some coffee.", aKo: "너 주려고 커피 가져왔어." },
        wrong: { "thanks i love it when you does that": "you 뒤에는 does가 아니라 do예요." },
        tip: { en: "Thanks! You're so sweet.", why: "sweet은 ‘다정한’이에요." } }
    ]
  };
})(window.EP);
