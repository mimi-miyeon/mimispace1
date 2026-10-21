/* 세션 63. Don't be ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[63] = {
    no: 63, form: "Don't be ~.", stem: "Don't be", meaning: "~해지지 마세요.",
    hint: "Don't be + 형용사",
    intro: {
      blocks: [["Don't be", "~하지 마"], ["~", "형용사"]],
      lines: [
        "Don't be + 형용사는 ‘~하게 굴지 마 / ~해하지 마’예요.",
        "형용사 앞에는 꼭 be를 넣어요. (Don't sad ×, Don't be sad ○)",
        "위로할 때 자주 써요. (Don't be sad.)"
      ],
      examples: [
        { en: "Don't be sad.", ko: "슬퍼하지 마." },
        { en: "Don't be shy.", ko: "부끄러워하지 마." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "화내지 마.", before: "Don't be", after: ".", answers: ["angry", "mad"],
        wrong: { "anger": "anger는 ‘화’라는 명사예요. ‘화난’은 angry예요." },
        tip: { en: "Calm down.", why: "‘진정해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "무서워하지 마.", before: "Don't", after: "scared.", answers: ["be"],
        wrong: { "is": "Don't 뒤에는 원래 모양 be를 써요.", "are": "Don't 뒤에는 원래 모양 be를 써요." },
        tip: { en: "There's nothing to be afraid of.", why: "‘무서워할 거 없어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "바보같이 굴지 마.", before: "Don't be", after: ".", answers: ["silly", "stupid"],
        wrong: { "fool": "fool은 ‘바보’라는 명사예요. ‘바보 같은’은 silly예요." },
        tip: { en: "Stop being silly.", why: "‘바보같이 굴지 좀 마’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "긴장하지 마.", before: "", after: "be nervous.", answers: ["Don't"],
        wrong: { "not": "‘~하지 마’는 Not이 아니라 Don't로 시작해요." },
        tip: { en: "Relax.", why: "‘긴장 풀어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "질투하지 마.", before: "Don't be", after: ".", answers: ["jealous"],
        wrong: { "jealousy": "jealousy는 ‘질투’라는 명사예요. ‘질투하는’은 jealous예요." },
        tip: { en: "No need to be jealous.", why: "No need to는 ‘~할 필요 없어’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그렇게 심각하게 굴지 마.", answers: ["Don't be so serious.", "Don't be too serious."],
        wrong: { "do not so serious": "형용사 앞에 be를 넣어요. Don't be so serious예요.", "do not be so seriously": "be 뒤에는 형용사 serious를 써요." },
        tip: { en: "Lighten up.", why: "‘좀 가볍게 생각해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "실망하지 마.", answers: ["Don't be disappointed."],
        wrong: { "do not be disappointing": "disappointing은 ‘실망스러운’이에요. 네가 실망하면 disappointed예요.", "do not disappointed": "형용사 앞에 be를 넣어요. Don't be disappointed예요." },
        tip: { en: "Cheer up.", why: "‘기운 내’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이기적으로 굴지 마.", answers: ["Don't be selfish."],
        wrong: { "do not selfish": "형용사 앞에 be를 넣어요. Don't be selfish예요." },
        tip: { en: "Think about others too.", why: "‘다른 사람도 생각해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "미안해하지 마.", answers: ["Don't be sorry."],
        wrong: { "do not sorry": "형용사 앞에 be를 넣어요. Don't be sorry예요." },
        tip: { en: "It's not your fault.", why: "‘네 잘못 아니야’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "무례하게 굴지 마.", answers: ["Don't be rude."],
        ctx: { lead: "sad 대신 ‘무례한(rude)’으로 바꿔 보세요.", en: "Don't be sad." },
        wrong: { "do not rude": "형용사 앞에 be를 넣어요. Don't be rude예요.", "do not be rudely": "be 뒤에는 형용사 rude를 써요." },
        tip: { en: "Be polite.", why: "polite는 ‘예의 바른’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 자신한테 너무 모질게 굴지 마.", answers: ["Don't be so hard on yourself.", "Don't be too hard on yourself."],
        dialog: { a: "I can't do this. I'm so stupid.", aKo: "나 이거 못 하겠어. 나 너무 바보 같아." },
        wrong: { "do not be so hard to yourself": "‘~에게 모질게 굴다’는 hard on이에요." },
        tip: { en: "You're doing fine.", why: "‘너 잘하고 있어’라는 말이에요." } }
    ]
  };
})(window.EP);
