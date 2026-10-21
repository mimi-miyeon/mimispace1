/* 세션 185. What about ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[185] = {
    no: 185, form: "What about ~?", stem: "What about", meaning: "~는 어떻게 해요?",
    hint: "What about + 명사?",
    intro: {
      blocks: [["What about", "~는 어떻게 해"], ["~?", "명사"]],
      lines: [
        "What about + 명사?는 ‘~는 어떡해? / ~는 어떻게 돼?’예요. 빠진 걸 짚을 때 써요.",
        "What about you?는 ‘너는?’이에요.",
        "How about은 제안, What about은 걱정·확인할 때 더 자주 써요."
      ],
      examples: [
        { en: "What about the kids?", ko: "애들은 어떡해?" },
        { en: "What about dinner?", ko: "저녁은 어떻게 해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "애들은 어떡해?", before: "What about the", after: "?", answers: ["kids"],
        wrong: { "kid": "아이들 여럿이라 kids예요." },
        tip: { en: "Who will watch the kids?", why: "‘애들은 누가 봐?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "저녁은 어떻게 해?", before: "What", after: "dinner?", answers: ["about"],
        wrong: { "for": "‘~는 어떻게 해?’는 What about이에요." },
        tip: { en: "Are we eating out?", why: "‘외식해?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너는?", before: "What about", after: "?", answers: ["you"],
        wrong: { "your": "about 뒤에는 your가 아니라 you를 써요." },
        tip: { en: "And you?", why: "‘너는?’을 짧게 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "돈은 어떡해?", before: "What about the", after: "?", answers: ["money"],
        wrong: { "moneys": "money는 s를 붙이지 않아요." },
        tip: { en: "Who's paying?", why: "‘누가 내?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네 숙제는 어떡하고?", before: "", after: "about your homework?", answers: ["What"],
        wrong: { "how": "걱정을 짚을 때는 What about이에요." },
        tip: { en: "Did you finish it?", why: "‘다 했어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "개는 어떡해?", answers: ["What about the dog?", "What about our dog?", "What about my dog?"],
        wrong: { "what about dog": "dog 앞에 the를 붙여요.", "how about the dog": "걱정을 짚을 때는 What about이 자연스러워요." },
        tip: { en: "Who will feed the dog?", why: "feed는 ‘먹이를 주다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "내일 회의는 어떻게 돼?", answers: ["What about the meeting tomorrow?", "What about tomorrow's meeting?"],
        wrong: { "what about the meeting at tomorrow": "tomorrow 앞에는 at을 붙이지 않아요." },
        tip: { en: "Is it canceled?", why: "‘취소됐어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네 여자 친구는?", answers: ["What about your girlfriend?"],
        wrong: { "what about you girlfriend": "‘네’는 your예요." },
        tip: { en: "Is she coming too?", why: "‘그녀도 와?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "주차는 어떻게 해?", answers: ["What about parking?"],
        wrong: { "what about the parkings": "parking은 s를 붙이지 않아요." },
        tip: { en: "Is there a parking lot?", why: "parking lot은 ‘주차장’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "짐은 어떡해?", answers: ["What about the luggage?", "What about our luggage?", "What about the bags?"],
        ctx: { lead: "the kids 대신 ‘짐(the luggage)’으로 바꿔 보세요.", en: "What about the kids?" },
        wrong: { "what about the luggages": "luggage는 s를 붙이지 않아요." },
        tip: { en: "Can we leave our bags here?", why: "‘가방 여기 둬도 돼?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아. 근데 비는 어떡해?", answers: ["Okay. But what about the rain?", "But what about the rain?", "What about the rain?"],
        dialog: { a: "Let's have a picnic tomorrow.", aKo: "내일 소풍 가자." },
        wrong: { "okay but what about rain the": "‘비는?’은 what about the rain이에요." },
        tip: { en: "Let's bring umbrellas.", why: "‘우산 챙기자’라는 말이에요." } }
    ]
  };
})(window.EP);
