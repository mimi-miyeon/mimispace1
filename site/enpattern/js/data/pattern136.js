/* 세션 136. Do you mind ~ing? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[136] = {
    no: 136, form: "Do you mind ~ing?", stem: "Do you mind", meaning: "~해 주실래요?",
    hint: "Do you mind + 동사-ing?",
    intro: {
      blocks: [["Do you mind", "꺼리나요"], ["~ing?", "~하는 것을"]],
      lines: [
        "Do you mind + 동사-ing?는 ‘~해 줄래요? / ~해도 괜찮을까요?’예요. 공손한 부탁이에요.",
        "mind 뒤에는 to가 아니라 동사-ing를 써요.",
        "‘괜찮아요(해 줄게요)’는 No, not at all.이에요. mind가 ‘꺼리다’라서 No가 승낙이에요."
      ],
      examples: [
        { en: "Do you mind waiting?", ko: "좀 기다려 줄래요?" },
        { en: "Do you mind closing the door?", ko: "문 좀 닫아 줄래요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "창문 좀 열어 줄래요?", before: "Do you mind", after: "the window?", answers: ["opening"],
        wrong: { "open": "mind 뒤에는 동사에 ing를 붙여요. opening이에요.", "to open": "mind 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Could you open the window?", why: "Could you도 공손한 부탁이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "좀 기다려 줄래요?", before: "Do you mind", after: "?", answers: ["waiting"],
        wrong: { "wait": "mind 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "Just a moment, please.", why: "‘잠깐만요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "좀 조용히 해 줄래요?", before: "Do you", after: "keeping it down?", answers: ["mind"],
        wrong: { "minds": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Please keep it down.", why: "keep it down은 ‘소리를 줄이다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그거 다시 말해 줄래요?", before: "Do you mind", after: "that again?", answers: ["saying"],
        wrong: { "say": "mind 뒤에는 동사에 ing를 붙여요. saying이에요." },
        tip: { en: "Come again?", why: "‘뭐라고요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "사진 좀 찍어 줄래요?", before: "", after: "you mind taking a picture?", answers: ["Do"],
        wrong: { "are": "‘~해 줄래요?’는 Do you mind예요." },
        tip: { en: "Could you take our picture?", why: "‘우리 사진 좀 찍어 줄래요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "문 좀 닫아 줄래요?", answers: ["Do you mind closing the door?", "Do you mind shutting the door?"],
        wrong: { "do you mind close the door": "mind 뒤에는 동사에 ing를 붙여요. closing이에요.", "do you mind to close the door": "mind 뒤에는 to 대신 동사-ing를 써요." },
        tip: { en: "Could you close the door?", why: "Could you도 공손한 부탁이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "자리 좀 옮겨 줄래요?", answers: ["Do you mind moving over?", "Do you mind changing seats?", "Do you mind moving?"],
        wrong: { "do you mind move over": "mind 뒤에는 동사에 ing를 붙여요. moving이에요." },
        tip: { en: "Could you scoot over?", why: "scoot over는 ‘옆으로 비키다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "음악 좀 줄여 줄래요?", answers: ["Do you mind turning the music down?", "Do you mind turning down the music?"],
        wrong: { "do you mind turn down the music": "mind 뒤에는 동사에 ing를 붙여요. turning이에요." },
        tip: { en: "It's a bit loud.", why: "‘좀 시끄러워요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 좀 도와줄래요?", answers: ["Do you mind helping me?", "Do you mind giving me a hand?"],
        wrong: { "do you mind help me": "mind 뒤에는 동사에 ing를 붙여요. helping이에요." },
        tip: { en: "Can you help me out?", why: "help out은 ‘도와주다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "천천히 말해 줄래요?", answers: ["Do you mind speaking slowly?", "Do you mind speaking more slowly?", "Do you mind talking slowly?"],
        ctx: { lead: "waiting 대신 ‘천천히 말하기(speaking slowly)’로 바꿔 보세요.", en: "Do you mind waiting?" },
        wrong: { "do you mind speak slowly": "mind 뒤에는 동사에 ing를 붙여요. speaking이에요." },
        tip: { en: "Slow down, please.", why: "‘천천히 해 주세요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "에어컨 좀 꺼 줄래요?", answers: ["Do you mind turning off the air conditioner?", "Do you mind turning off the AC?", "Do you mind turning the AC off?"],
        dialog: { a: "Are you cold?", aKo: "추워요?" },
        wrong: { "do you mind turn off the air conditioner": "mind 뒤에는 동사에 ing를 붙여요. turning이에요." },
        tip: { en: "It's freezing in here.", why: "‘여기 엄청 추워요’라는 말이에요." } }
    ]
  };
})(window.EP);
