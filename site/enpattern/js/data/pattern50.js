/* 세션 50. What are you going to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[50] = {
    no: 50, form: "What are you going to ~?", stem: "What are you going to", meaning: "당신은 무엇을 ~할 거예요?",
    hint: "What are you going to + 동사?",
    intro: {
      blocks: [["What", "무엇을"], ["are you going to", "너는 ~할 거니"], ["~", "동사"]],
      lines: [
        "What are you going to ~?는 ‘너 뭐 ~할 거야?’예요.",
        "Are you going to ~? 앞에 What을 붙이면 ‘무엇을’ 묻는 말이 돼요.",
        "What이 ‘무엇을’이라서 동사 뒤에 다시 it을 붙이지 않아요. (What are you going to eat?)"
      ],
      examples: [
        { en: "What are you going to do?", ko: "너 뭐 할 거야?" },
        { en: "What are you going to eat?", ko: "너 뭐 먹을 거야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 뭐 입을 거야?", before: "What are you going to", after: "?", answers: ["wear"],
        wrong: { "wearing": "to 뒤에는 동사 원래 모양 wear를 써요.", "put": "‘입다’는 wear예요. put은 on과 같이 써요." },
        tip: { en: "What's your outfit?", why: "outfit은 ‘옷차림’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 뭐 살 거야?", before: "", after: "are you going to buy?", answers: ["What"],
        wrong: { "how": "‘무엇을’은 How가 아니라 What이에요.", "where": "‘무엇을’은 Where가 아니라 What이에요." },
        tip: { en: "What are you getting?", why: "get도 ‘사다’라는 뜻이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 걔한테 뭐라고 할 거야?", before: "What are you going to", after: "him?", answers: ["tell"],
        wrong: { "say": "say 뒤에는 바로 사람을 쓰지 않아요. ‘~에게 말하다’는 tell + 사람이에요." },
        tip: { en: "What will you say to him?", why: "say to + 사람도 ‘~에게 말하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 주말에 뭐 할 거야?", before: "What", after: "you going to do this weekend?", answers: ["are"],
        wrong: { "do": "going to로 물을 때는 do가 아니라 are예요.", "is": "you와는 is가 아니라 are를 써요." },
        tip: { en: "Any plans this weekend?", why: "‘주말에 계획 있어?’라는 짧은 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 뭐 주문할 거야?", before: "What are you", after: "to order?", answers: ["going"],
        wrong: { "go": "‘~할 거야?’는 are you going to예요." },
        tip: { en: "What are you having?", why: "have는 ‘먹다’라는 뜻으로도 써요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 생일에 뭐 할 거야?", answers: ["What are you going to do for your birthday?", "What are you going to do on your birthday?"],
        wrong: { "what do you going to do for your birthday": "going to로 물을 때는 do가 아니라 are예요.", "what you are going to do for your birthday": "묻는 말은 What 뒤에 are you 순서예요." },
        tip: { en: "Any plans for your birthday?", why: "‘생일 계획 있어?’라는 짧은 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그 돈으로 뭐 할 거야?", answers: ["What are you going to do with the money?", "What are you going to do with that money?"],
        wrong: { "what are you going to do by the money": "‘~로 무엇을 하다’는 do with예요." },
        tip: { en: "How are you going to use the money?", why: "use는 ‘쓰다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 저녁으로 뭐 만들 거야?", answers: ["What are you going to make for dinner?", "What are you going to cook for dinner?"],
        wrong: { "what are you going to making for dinner": "to 뒤에는 동사 원래 모양 make를 써요." },
        tip: { en: "What's for dinner?", why: "‘저녁 뭐야?’라는 짧은 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 걔한테 뭐 줄 거야?", answers: ["What are you going to give her?", "What are you going to give him?"],
        wrong: { "what are you going to giving her": "to 뒤에는 동사 원래 모양 give를 써요." },
        tip: { en: "What are you getting her?", why: "get + 사람은 ‘~에게 사 주다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 뭐 볼 거야?", answers: ["What are you going to watch?", "What are you going to see?"],
        ctx: { lead: "do 대신 ‘보다(watch)’로 바꿔 보세요.", en: "What are you going to do?" },
        wrong: { "what are you going to watching": "to 뒤에는 동사 원래 모양 watch를 써요." },
        tip: { en: "What are you watching?", why: "가까운 계획은 ~ing로도 물어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와! 이제 뭐 할 거야?", answers: ["Wow! What are you going to do now?", "What are you going to do now?"],
        dialog: { a: "I finally finished my exams!", aKo: "나 드디어 시험 끝났어!" },
        wrong: { "wow what you are going to do now": "묻는 말은 What 뒤에 are you 순서예요." },
        tip: { en: "Nice! Any plans now?", why: "‘좋다! 이제 계획 있어?’라는 말이에요." } }
    ]
  };
})(window.EP);
