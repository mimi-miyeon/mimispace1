/* 세션 169. How much do you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[169] = {
    no: 169, form: "How much do you ~?", stem: "How much do you", meaning: "당신은 얼마나 ~합니까?",
    hint: "How much do you + 동사?",
    intro: {
      blocks: [["How much", "얼마나 (많이)"], ["do you ~?", "너는 ~하니?"]],
      lines: [
        "How much do you + 동사?는 ‘얼마나 (많이) ~해?’예요. 양이나 금액을 물어요.",
        "do you 뒤에는 동사 원래 모양을 써요.",
        "How much do I owe you?는 ‘내가 얼마 주면 돼?’예요."
      ],
      examples: [
        { en: "How much do you know?", ko: "너 얼마나 알아?" },
        { en: "How much do you need?", ko: "얼마나 필요해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "얼마나 필요해?", before: "How much do you", after: "?", answers: ["need"],
        wrong: { "needs": "do you 뒤에는 동사 원래 모양 need를 써요." },
        tip: { en: "Is this enough?", why: "‘이거면 충분해?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 얼마나 알아?", before: "How much do you", after: "?", answers: ["know"],
        wrong: { "knows": "do you 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "Tell me what you know.", why: "‘아는 거 말해 줘’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "내가 얼마 주면 돼?", before: "How much do I", after: "you?", answers: ["owe"],
        wrong: { "pay to": "‘갚을 돈이 있다’는 owe예요." },
        tip: { en: "What's my share?", why: "share는 ‘몫’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "한 달에 얼마나 써?", before: "How much do you", after: "a month?", answers: ["spend"],
        wrong: { "use": "돈을 ‘쓰다’는 spend예요." },
        tip: { en: "What's your budget?", why: "budget은 ‘예산’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그를 얼마나 사랑해?", before: "How", after: "do you love him?", answers: ["much"],
        wrong: { "many": "정도를 물을 때는 How much예요." },
        tip: { en: "Do you really love him?", why: "‘진짜 사랑해?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "하루에 얼마나 마셔?", answers: ["How much do you drink a day?", "How much do you drink every day?"],
        wrong: { "how many do you drink a day": "양을 물을 때는 How much예요.", "how much you drink a day": "물을 때는 do를 붙여요. do you예요." },
        tip: { en: "Stay hydrated.", why: "hydrated는 ‘수분이 충분한’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 사람한테 얼마나 빚졌어?", answers: ["How much do you owe him?", "How much do you owe her?"],
        wrong: { "how much do you owes him": "do you 뒤에는 동사 원래 모양 owe를 써요." },
        tip: { en: "Pay him back soon.", why: "pay back은 ‘갚다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "한 달에 얼마나 벌어?", answers: ["How much do you make a month?", "How much do you earn a month?"],
        wrong: { "how much do you makes a month": "do you 뒤에는 동사 원래 모양 make를 써요." },
        tip: { en: "That's a personal question.", why: "‘사적인 질문이네’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 얼마에 팔아요?", answers: ["How much do you sell it for?", "How much do you charge for it?", "How much do you sell this for?"],
        wrong: { "how much do you sell it": "‘~에 팔다’는 끝에 for를 붙여요. sell it for예요." },
        tip: { en: "What's the price?", why: "price는 ‘가격’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 얼마나 원해?", answers: ["How much do you want?"],
        ctx: { lead: "need 대신 ‘원하다(want)’로 바꿔 보세요.", en: "How much do you need?" },
        wrong: { "how much do you wants": "do you 뒤에는 동사 원래 모양 want를 써요." },
        tip: { en: "Say when.", why: "‘됐으면 말해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "잠은 얼마나 자?", answers: ["How much do you sleep?"], alts: ["How much sleep do you get?"],
        dialog: { a: "I'm always tired.", aKo: "나 항상 피곤해." },
        wrong: { "how much do you sleeping": "do you 뒤에는 동사 원래 모양 sleep을 써요." },
        tip: { en: "You need more sleep.", why: "‘잠 더 자야 해’라는 말이에요." } }
    ]
  };
})(window.EP);
