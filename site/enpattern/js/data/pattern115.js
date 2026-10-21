/* 세션 115. I'm not ~ I used to be. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[115] = {
    no: 115, form: "I'm not ~ I used to be.", stem: "I used to be", meaning: "나는 예전의 ~가 아니에요.",
    hint: "I'm not + 명사 + I used to be",
    intro: {
      blocks: [["I'm not ~", "나는 ~가 아니다"], ["I used to be", "예전의 내가"]],
      lines: [
        "I'm not + what/who + I used to be는 ‘나는 예전의 내가 아니야’예요.",
        "I'm not the person I used to be(예전의 그 사람이 아니야)처럼 명사를 넣어요.",
        "비교급과도 써요. (I'm not as young as I used to be: 예전만큼 젊지 않아)"
      ],
      examples: [
        { en: "I'm not who I used to be.", ko: "나는 예전의 내가 아니야." },
        { en: "I'm not as fast as I used to be.", ko: "나 예전만큼 빠르지 않아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나는 예전의 내가 아니야.", before: "I'm not who I", after: "to be.", answers: ["used"],
        wrong: { "use": "‘예전에 ~였다’는 used to예요." },
        tip: { en: "I've changed.", why: "‘나 변했어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 예전만큼 젊지 않아.", before: "I'm not as young as I used to", after: ".", answers: ["be"],
        wrong: { "was": "to 뒤에는 동사 원래 모양 be를 써요." },
        tip: { en: "I'm getting old.", why: "‘나이 들고 있어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나는 예전의 그 사람이 아니야.", before: "I'm not the", after: "I used to be.", answers: ["person", "man", "woman"],
        wrong: { "people": "한 사람은 person이에요." },
        tip: { en: "I'm a different person now.", why: "‘이제 다른 사람이야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 예전만큼 강하지 않아.", before: "I'm not as", after: "as I used to be.", answers: ["strong"],
        wrong: { "stronger": "as ~ as 사이에는 원래 모양 strong을 써요." },
        tip: { en: "I've lost some strength.", why: "strength는 ‘힘’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 예전만큼 바쁘지 않아.", before: "I'm", after: "as busy as I used to be.", answers: ["not"],
        wrong: { "no": "‘~하지 않아’는 not을 써요." },
        tip: { en: "I have more free time now.", why: "‘이제 여유 시간이 더 많아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 예전만큼 빠르지 않아.", answers: ["I'm not as fast as I used to be."],
        wrong: { "i am not as faster as i used to be": "as ~ as 사이에는 원래 모양 fast를 써요.", "i am not as fast as i use to be": "‘예전에 ~였다’는 used to예요. d를 붙여요." },
        tip: { en: "I've slowed down.", why: "slow down은 ‘느려지다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 예전만큼 수줍음이 많지 않아.", answers: ["I'm not as shy as I used to be."],
        wrong: { "i am not as shy as i used to": "used to 뒤에 be를 붙여요." },
        tip: { en: "I've come out of my shell.", why: "come out of one's shell은 ‘껍질을 깨고 나오다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 예전만큼 화를 잘 내지 않아.", answers: ["I'm not as angry as I used to be.", "I'm not as short-tempered as I used to be."],
        wrong: { "i am not as angrier as i used to be": "as ~ as 사이에는 원래 모양 angry를 써요." },
        tip: { en: "I've calmed down a lot.", why: "calm down은 ‘차분해지다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 예전만큼 순진하지 않아.", answers: ["I'm not as naive as I used to be."],
        wrong: { "i am not as more naive as i used to be": "as ~ as 사이에는 원래 모양 naive를 써요." },
        tip: { en: "I know better now.", why: "know better는 ‘더 잘 알다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 예전만큼 마르지 않았어.", answers: ["I'm not as thin as I used to be.", "I'm not as skinny as I used to be.", "I'm not as slim as I used to be."],
        ctx: { lead: "fast 대신 ‘마른(thin)’으로 바꿔 보세요.", en: "I'm not as fast as I used to be." },
        wrong: { "i am not as thinner as i used to be": "as ~ as 사이에는 원래 모양 thin을 써요." },
        tip: { en: "I've put on weight.", why: "put on weight는 ‘살이 찌다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 나 예전만큼 건강하지 않아.", answers: ["No, I'm not as healthy as I used to be.", "No, I'm not as fit as I used to be."],
        dialog: { a: "Do you still run marathons?", aKo: "아직 마라톤 뛰어?" },
        wrong: { "no i am not as healthier as i used to be": "as ~ as 사이에는 원래 모양 healthy를 써요." },
        tip: { en: "No, my knees hurt now.", why: "‘아니, 이제 무릎이 아파’라는 말이에요." } }
    ]
  };
})(window.EP);
