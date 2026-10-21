/* 세션 66. I didn't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[66] = {
    no: 66, form: "I didn't ~.", stem: "I didn't", meaning: "나는 ~하지 않았어요.",
    hint: "I didn't + 동사",
    intro: {
      blocks: [["I", "나는"], ["didn't", "~하지 않았다"], ["~", "동사"]],
      lines: [
        "I didn't + 동사는 ‘나 ~ 안 했어’예요. 지난 일을 부정해요.",
        "didn't 뒤에는 과거형이 아니라 동사 원래 모양을 써요. (I didn't go)",
        "상태(피곤했다)를 부정할 때는 wasn't, 행동을 부정할 때는 didn't예요."
      ],
      examples: [
        { en: "I didn't sleep well.", ko: "나 잠 잘 못 잤어." },
        { en: "I didn't see him.", ko: "나 그 사람 못 봤어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 그거 안 했어.", before: "I", after: "do it.", answers: ["didn't"],
        wrong: { "do not": "지난 일이라 didn't를 써요.", "was not": "행동을 부정할 때는 wasn't가 아니라 didn't를 써요.", "not": "동사 앞에는 not만 쓰지 않고 didn't를 써요." },
        tip: { en: "It wasn't me.", why: "‘내가 안 그랬어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 아침 안 먹었어.", before: "I didn't", after: "breakfast.", answers: ["eat", "have"],
        wrong: { "ate": "didn't 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "I skipped breakfast.", why: "skip은 ‘거르다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그 말 안 했어.", before: "I didn't", after: "that.", answers: ["say"],
        wrong: { "said": "didn't 뒤에는 동사 원래 모양 say를 써요." },
        tip: { en: "I never said that.", why: "never는 ‘한 번도 안’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 어제 안 나갔어.", before: "I", after: "go out yesterday.", answers: ["didn't"],
        wrong: { "do not": "지난 일이라 didn't를 써요.", "was not": "행동을 부정할 때는 wasn't가 아니라 didn't를 써요." },
        tip: { en: "I stayed home yesterday.", why: "‘어제 집에 있었어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 네 메시지 못 봤어.", before: "I didn't", after: "your message.", answers: ["see", "get"],
        wrong: { "saw": "didn't 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "I missed your message.", why: "miss는 ‘놓치다’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 숙제 안 했어.", answers: ["I didn't do my homework.", "I didn't do the homework."],
        wrong: { "i did not did my homework": "didn't 뒤에는 동사 원래 모양 do를 써요.", "i was not do my homework": "행동을 부정할 때는 wasn't가 아니라 didn't를 써요." },
        tip: { en: "I forgot my homework.", why: "‘숙제 깜빡했어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그 영화 안 봤어.", answers: ["I didn't see that movie.", "I didn't watch that movie.", "I didn't see the movie.", "I didn't watch the movie."],
        wrong: { "i did not saw that movie": "didn't 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "I haven't seen that movie.", why: "‘그 영화 아직 못 봤어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 너한테 화 안 냈어.", answers: ["I didn't get angry at you.", "I didn't get mad at you."],
        wrong: { "i was not get angry at you": "행동을 부정할 때는 didn't를 써요.", "i did not angry at you": "angry 앞에 get이 필요해요. didn't get angry예요." },
        tip: { en: "I wasn't mad at you.", why: "‘너한테 화 안 났었어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 돈 안 냈어.", answers: ["I didn't pay.", "I didn't pay for it."],
        wrong: { "i did not paid": "didn't 뒤에는 동사 원래 모양 pay를 써요." },
        tip: { en: "Someone else paid.", why: "‘다른 사람이 냈어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 걔한테 전화 안 했어.", answers: ["I didn't call her."],
        ctx: { lead: "‘~ 안 했어’로 바꿔 보세요.", en: "I called her." },
        wrong: { "i did not called her": "didn't 뒤에는 동사 원래 모양 call을 써요.", "i do not call her": "지난 일이라 didn't를 써요." },
        tip: { en: "I haven't called her yet.", why: "‘아직 전화 안 했어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 나 안 깼어.", answers: ["No, I didn't break it.", "No, I didn't."],
        dialog: { a: "Did you break this cup?", aKo: "네가 이 컵 깼어?" },
        wrong: { "no i did not broke it": "didn't 뒤에는 동사 원래 모양 break를 써요." },
        tip: { en: "No, it wasn't me.", why: "‘아니, 나 아니야’라는 말이에요." } }
    ]
  };
})(window.EP);
