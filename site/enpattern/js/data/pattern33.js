/* 세션 33. I'm sorry, but ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[33] = {
    no: 33, form: "I'm sorry, but ~.", stem: "I'm sorry, but", meaning: "미안하지만, ~.",
    hint: "I'm sorry, but + 주어 + 동사",
    intro: {
      blocks: [["I'm sorry,", "미안하지만"], ["but", "그런데"], ["~", "주어 + 동사"]],
      lines: [
        "I'm sorry, but ~는 ‘미안하지만 ~’이에요. 거절하거나 부탁할 때 앞에 붙여 부드럽게 해요.",
        "but 뒤에는 ‘주어 + 동사’로 하고 싶은 말을 써요.",
        "Excuse me, but ~도 비슷하게 써요."
      ],
      examples: [
        { en: "I'm sorry, but I can't.", ko: "미안하지만 못 해." },
        { en: "I'm sorry, but you're wrong.", ko: "미안하지만 네가 틀렸어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "미안하지만 나 지금 바빠.", before: "I'm sorry,", after: "I'm busy now.", answers: ["but"],
        wrong: { "and": "‘미안하지만’은 and가 아니라 but이에요.", "so": "‘미안하지만’은 so가 아니라 but이에요." },
        tip: { en: "I'm a bit busy right now.", why: "a bit은 ‘조금’이에요. 더 부드러워요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "미안하지만 나 그거 몰라.", before: "I'm", after: "but I don't know.", answers: ["sorry"],
        wrong: { "sad": "sad는 ‘슬픈’이에요. ‘미안하지만’은 I'm sorry, but이에요." },
        tip: { en: "I'm not sure.", why: "‘잘 모르겠어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "미안하지만 이 자리 주인 있어.", before: "I'm sorry, but this seat is", after: ".", answers: ["taken"],
        wrong: { "took": "‘자리 주인 있어’는 is taken이에요.", "take": "‘자리 주인 있어’는 is taken이에요." },
        tip: { en: "Someone's sitting here.", why: "‘여기 누가 앉아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "미안하지만 나 오늘 못 가.", before: "I'm sorry, but I", after: "make it today.", answers: ["can't"],
        wrong: { "do not": "‘못 가’는 don't가 아니라 can't예요." },
        tip: { en: "I'm afraid I can't make it today.", why: "I'm afraid도 정중하게 거절할 때 써요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "미안하지만 네 말이 안 들려.", before: "", after: "sorry, but I can't hear you.", answers: ["I'm"],
        wrong: { "i": "‘미안해’는 I sorry가 아니라 I'm sorry예요." },
        tip: { en: "Could you speak up?", why: "speak up은 ‘더 크게 말하다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "미안하지만 나 그날 시간 없어.", answers: ["I'm sorry, but I'm not free that day.", "I'm sorry, but I'm busy that day.", "I'm sorry, but I don't have time that day."],
        wrong: { "i am sorry and i am not free that day": "‘미안하지만’은 and가 아니라 but이에요." },
        tip: { en: "Sorry, that day doesn't work for me.", why: "doesn't work for me는 ‘나한테 안 맞아’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "미안하지만 그거 내 거야.", answers: ["I'm sorry, but that's mine.", "I'm sorry, but it's mine."],
        wrong: { "i am sorry but that is my": "‘내 것’은 my가 아니라 mine이에요." },
        tip: { en: "Excuse me, that's mine.", why: "Excuse me로 말을 꺼내도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "미안하지만 이거 내가 시킨 거 아니야.", answers: ["I'm sorry, but I didn't order this.", "I'm sorry, but this isn't what I ordered."],
        wrong: { "i am sorry but i do not order this": "시킨 건 지난 일이라 didn't를 써요.", "i am sorry but i did not ordered this": "didn't 뒤에는 동사 원래 모양 order를 써요." },
        tip: { en: "Excuse me, this isn't my order.", why: "Excuse me로 말을 꺼내도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "미안하지만 나 이제 가야 해.", answers: ["I'm sorry, but I have to go now.", "I'm sorry, but I need to go now.", "I'm sorry, but I have to leave now."],
        wrong: { "i am sorry but i have to going now": "to 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Sorry, I've got to run.", why: "got to run은 ‘얼른 가 봐야 해’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "미안하지만 나 동의 안 해.", answers: ["I'm sorry, but I don't agree.", "I'm sorry, but I disagree."],
        ctx: { lead: "I can't 대신 ‘동의 안 해’로 바꿔 보세요.", en: "I'm sorry, but I can't." },
        wrong: { "i am sorry but i am not agree": "agree는 동사라서 am not이 아니라 don't agree예요." },
        tip: { en: "I see it differently.", why: "‘나는 다르게 봐’라는 부드러운 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안하지만 나도 돈이 없어.", answers: ["I'm sorry, but I don't have any money.", "I'm sorry, but I don't have any money either.", "I'm sorry, but I don't have money either.", "I'm sorry, but I have no money."],
        dialog: { a: "Can you lend me some money?", aKo: "돈 좀 빌려줄 수 있어?" },
        wrong: { "i am sorry but i do not have no money": "don't와 no를 같이 쓰면 부정이 두 번이 돼요. any를 써요." },
        tip: { en: "Sorry, I'm broke too.", why: "broke는 ‘빈털터리인’이에요." } }
    ]
  };
})(window.EP);
