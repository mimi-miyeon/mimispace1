/* 세션 157. Have you ~(p.p.)? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[157] = {
    no: 157, form: "Have you ~(p.p.)?", stem: "Have you", meaning: "~해 본 적 있어요?",
    hint: "Have you + 과거분사?",
    intro: {
      blocks: [["Have you", "너 ~한 적 있니"], ["~(p.p.)?", "과거분사"]],
      lines: [
        "Have you + 과거분사?는 ‘~해 본 적 있어? / ~했어?’예요.",
        "과거분사는 보통 ed를 붙여요. (tried, watched) 모양이 바뀌는 것도 있어요. (eat → eaten, see → seen)",
        "ever를 넣으면 ‘한 번이라도’예요. (Have you ever tried it?)"
      ],
      examples: [
        { en: "Have you eaten?", ko: "밥 먹었어?" },
        { en: "Have you ever tried kimchi?", ko: "김치 먹어 본 적 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "밥 먹었어?", before: "Have you", after: "?", answers: ["eaten"],
        wrong: { "eat": "Have you 뒤에는 과거분사 eaten을 써요.", "ate": "Have you 뒤에는 ate가 아니라 eaten을 써요." },
        tip: { en: "Did you eat?", why: "Did you로 물어도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그 영화 봤어?", before: "Have you", after: "that movie?", answers: ["seen"],
        wrong: { "saw": "Have you 뒤에는 saw가 아니라 seen을 써요.", "see": "Have you 뒤에는 과거분사 seen을 써요." },
        tip: { en: "Did you see that movie?", why: "Did you로 물어도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "요가 해 본 적 있어?", before: "Have you ever", after: "yoga?", answers: ["tried"],
        wrong: { "try": "Have you 뒤에는 과거분사 tried를 써요.", "tryed": "try는 y를 i로 바꿔 tried예요." },
        tip: { en: "Yoga is relaxing.", why: "relaxing은 ‘편안한’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 책 읽어 봤어?", before: "Have you", after: "that book?", answers: ["read"],
        wrong: { "readed": "read의 과거분사는 그대로 read예요." },
        tip: { en: "It's a great book.", why: "‘좋은 책이야’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "숙제 끝냈어?", before: "", after: "you finished your homework?", answers: ["Have"],
        wrong: { "did": "finished 앞에는 Have를 써요.", "do": "finished 앞에는 Have를 써요." },
        tip: { en: "Are you done with homework?", why: "be done with는 ‘~을 끝내다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "김치 먹어 본 적 있어?", answers: ["Have you ever tried kimchi?", "Have you ever eaten kimchi?", "Have you tried kimchi?", "Have you eaten kimchi?"],
        wrong: { "have you ever try kimchi": "Have you 뒤에는 과거분사 tried를 써요.", "did you ever tried kimchi": "‘~해 본 적 있어?’는 Have you + 과거분사예요." },
        tip: { en: "You should try kimchi.", why: "‘김치 먹어 봐’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 사람 만나 본 적 있어?", answers: ["Have you met him?", "Have you ever met him?", "Have you met her?"],
        wrong: { "have you meet him": "Have you 뒤에는 과거분사 met을 써요." },
        tip: { en: "Do you know him?", why: "‘그 사람 알아?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 노래 들어 봤어?", answers: ["Have you heard this song?", "Have you ever heard this song?"],
        wrong: { "have you hear this song": "Have you 뒤에는 과거분사 heard를 써요.", "have you listened this song": "‘노래를 들어 봤어?’는 heard this song이에요." },
        tip: { en: "It's so catchy.", why: "catchy는 ‘귀에 쏙 들어오는’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "눈 본 적 있어?", answers: ["Have you ever seen snow?", "Have you seen snow?"],
        wrong: { "have you ever saw snow": "Have you 뒤에는 saw가 아니라 seen을 써요." },
        tip: { en: "It never snows there.", why: "‘거기 눈 안 와’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그 드라마 봤어?", answers: ["Have you watched that show?", "Have you watched that drama?", "Have you seen that show?"],
        ctx: { lead: "eaten 대신 ‘그 드라마를 봤다(watched that show)’로 바꿔 보세요.", en: "Have you eaten?" },
        wrong: { "have you watch that show": "Have you 뒤에는 과거분사 watched를 써요." },
        tip: { en: "Is it any good?", why: "‘괜찮아?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응! 너 스키 타 본 적 있어?", answers: ["Yes! Have you ever skied?", "Yeah! Have you ever skied?", "Have you ever skied?", "Have you ever tried skiing?", "Yes! Have you ever tried skiing?"],
        dialog: { a: "Do you like winter?", aKo: "겨울 좋아해?" },
        wrong: { "yes have you ever ski": "Have you 뒤에는 과거분사 skied를 써요." },
        tip: { en: "Let's go skiing.", why: "‘스키 타러 가자’라는 말이에요." } }
    ]
  };
})(window.EP);
