/* 세션 224. I'm supposed to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[224] = {
    no: 224, form: "I'm supposed to ~.", stem: "I'm supposed to/I'm not supposed to/I was supposed to", meaning: "내가 ~하기로 되어 있어요.",
    hint: "I'm supposed to + 동사",
    intro: {
      blocks: [["I'm supposed", "나는 ~하기로 되어 있다"], ["to ~", "~하는 것"]],
      lines: [
        "I'm supposed to + 동사는 ‘나 ~하기로 되어 있어 / ~해야 해’예요. 약속이나 규칙을 말해요.",
        "supposed는 끝의 d가 약하게 들려요. (서포즈드 투 → 서포스투)",
        "I was supposed to ~는 ‘~하기로 했었는데 (못 했어)’예요."
      ],
      examples: [
        { en: "I'm supposed to meet him at 5.", ko: "나 5시에 그 사람 만나기로 했어." },
        { en: "I'm not supposed to eat sugar.", ko: "나 설탕 먹으면 안 돼." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 5시에 그 사람 만나기로 했어.", before: "I'm supposed to", after: "him at five.", answers: ["meet"],
        wrong: { "meeting": "to 뒤에는 동사 원래 모양 meet을 써요." },
        tip: { en: "I have plans at five.", why: "‘5시에 약속 있어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 설탕 먹으면 안 돼.", before: "I'm not supposed to", after: "sugar.", answers: ["eat"],
        wrong: { "eating": "to 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "Doctor's orders.", why: "‘의사 지시야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 오늘 일하기로 되어 있어.", before: "I'm", after: "to work today.", answers: ["supposed"],
        wrong: { "suppose": "‘~하기로 되어 있다’는 supposed to예요. d를 붙여요." },
        tip: { en: "I can't take the day off.", why: "‘하루 못 쉬어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 어제 전화하기로 했었는데.", before: "I", after: "supposed to call yesterday.", answers: ["was"],
        wrong: { "am": "지난 일이라 was를 써요." },
        tip: { en: "I totally forgot.", why: "‘완전히 깜빡했어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 여기 있으면 안 돼.", before: "I'm not supposed", after: "be here.", answers: ["to"],
        wrong: { "for": "동사 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Let's go before someone sees.", why: "‘누가 보기 전에 가자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 9시까지 거기 가기로 되어 있어.", answers: ["I'm supposed to be there by nine.", "I'm supposed to be there by 9.", "I'm supposed to get there by nine."],
        wrong: { "i am suppose to be there by nine": "‘~하기로 되어 있다’는 supposed to예요. d를 붙여요.", "i am supposed to be there until nine": "‘~까지(늦지 않게)’는 by예요." },
        tip: { en: "I can't be late.", why: "‘늦으면 안 돼’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그거 말하면 안 돼.", answers: ["I'm not supposed to say that.", "I'm not supposed to tell you.", "I'm not supposed to say it."],
        wrong: { "i am not supposed to saying that": "to 뒤에는 동사 원래 모양 say를 써요." },
        tip: { en: "It's a secret.", why: "‘비밀이야’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 이거 끝내기로 되어 있어.", answers: ["I'm supposed to finish this today."],
        wrong: { "i am supposed to finishing this today": "to 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "It's due today.", why: "due는 ‘마감인’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 일찍 오기로 했었는데.", answers: ["I was supposed to come early.", "I was supposed to be here early."],
        wrong: { "i am supposed to come early": "지난 일이라 was를 써요." },
        tip: { en: "Sorry I'm late.", why: "‘늦어서 미안’이라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 7시에 그녀를 데리러 가기로 했어.", answers: ["I'm supposed to pick her up at seven.", "I'm supposed to pick her up at 7."],
        ctx: { lead: "meet him at five 대신 ‘7시에 그녀를 데리러 가다(pick her up at seven)’로 바꿔 보세요.", en: "I'm supposed to meet him at 5." },
        wrong: { "i am supposed to pick up her at seven": "her 같은 말은 pick과 up 사이에 넣어요. pick her up이에요." },
        tip: { en: "I have to go soon.", why: "‘곧 가야 해’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 집에 가기로 되어 있어.", answers: ["Sorry, I'm supposed to go home.", "I'm sorry, I'm supposed to go home.", "Sorry, I'm supposed to be home."],
        dialog: { a: "Let's grab dinner.", aKo: "저녁 먹자." },
        wrong: { "sorry i am supposed to go to home": "home 앞에는 to를 붙이지 않아요." },
        tip: { en: "Sorry, maybe next time.", why: "‘미안, 다음에’라는 말이에요." } }
    ]
  };
})(window.EP);
