/* 세션 123. If you want, I could ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[123] = {
    no: 123, form: "If you want, I could ~.", stem: "If you want, I could", meaning: "원한다면 내가 ~해 줄 수 있어요.",
    hint: "If you want, I could + 동사",
    intro: {
      blocks: [["If you want,", "네가 원하면"], ["I could ~", "내가 ~해 줄 수 있어"]],
      lines: [
        "If you want, I could + 동사는 ‘원하면 내가 ~해 줄 수 있어’예요. 부드럽게 도움을 제안해요.",
        "could 뒤에는 동사 원래 모양을 써요.",
        "can보다 could가 더 조심스럽고 공손하게 들려요."
      ],
      examples: [
        { en: "If you want, I could help.", ko: "원하면 내가 도와줄 수 있어." },
        { en: "If you want, I could drive you.", ko: "원하면 내가 태워 줄 수 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "원하면 내가 도와줄 수 있어.", before: "If you want, I could", after: "you.", answers: ["help"],
        wrong: { "helping": "could 뒤에는 동사 원래 모양 help를 써요." },
        tip: { en: "Need a hand?", why: "‘도움 필요해?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "원하면 내가 태워 줄 수 있어.", before: "If you want, I could give you a", after: ".", answers: ["ride"],
        wrong: { "riding": "‘태워 주다’는 give a ride예요." },
        tip: { en: "I'm going that way.", why: "‘나 그쪽으로 가’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "원하면 내가 같이 가 줄 수 있어.", before: "If you want, I", after: "come with you.", answers: ["could"],
        wrong: { "will": "부드럽게 제안할 때는 could를 써요." },
        tip: { en: "You won't be alone.", why: "‘너 혼자 아니야’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "원하면 내가 그거 고쳐 줄 수 있어.", before: "If you", after: ", I could fix it.", answers: ["want"],
        wrong: { "wants": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Let me take a look.", why: "‘내가 한번 볼게’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "원하면 내가 저녁 만들어 줄 수 있어.", before: "If you want, I could", after: "dinner.", answers: ["make", "cook"],
        wrong: { "making": "could 뒤에는 동사 원래 모양 make를 써요." },
        tip: { en: "Let me cook tonight.", why: "‘오늘 밤엔 내가 요리할게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "원하면 내가 그거 들어 줄 수 있어.", answers: ["If you want, I could carry it.", "If you want, I could carry that."],
        wrong: { "if you want i could carrying it": "could 뒤에는 동사 원래 모양 carry를 써요.", "if you wants i could carry it": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Let me get that.", why: "‘그거 내가 들게’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "원하면 내가 너 데리러 갈 수 있어.", answers: ["If you want, I could pick you up."],
        wrong: { "if you want i could pick up you": "you 같은 말은 pick과 up 사이에 넣어요. pick you up이에요." },
        tip: { en: "I'll come get you.", why: "come get은 ‘데리러 가다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "원하면 내가 그거 설명해 줄 수 있어.", answers: ["If you want, I could explain it.", "If you want, I could explain it to you."],
        wrong: { "if you want i could explain you it": "explain 뒤에는 바로 you를 쓰지 않아요. explain it to you예요." },
        tip: { en: "It's easy once you get it.", why: "‘이해하면 쉬워’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "원하면 내가 내일 다시 올 수 있어.", answers: ["If you want, I could come back tomorrow."],
        wrong: { "if you want i could came back tomorrow": "could 뒤에는 동사 원래 모양 come을 써요." },
        tip: { en: "No rush.", why: "‘서두를 필요 없어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "원하면 내가 같이 있어 줄 수 있어.", answers: ["If you want, I could stay with you.", "If you want, I could stay."],
        ctx: { lead: "help 대신 ‘같이 있다(stay with you)’로 바꿔 보세요.", en: "If you want, I could help." },
        wrong: { "if you want i could staying with you": "could 뒤에는 동사 원래 모양 stay를 써요." },
        tip: { en: "I'm here for you.", why: "‘내가 곁에 있어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "원하면 내가 빌려줄 수 있어.", answers: ["If you want, I could lend you mine.", "If you want, I could lend you one.", "If you want, I could lend it to you."],
        dialog: { a: "I forgot my umbrella.", aKo: "나 우산 깜빡했어." },
        wrong: { "if you want i could borrow you mine": "‘빌려주다’는 lend예요. borrow는 ‘빌리다’예요." },
        tip: { en: "You can use mine.", why: "‘내 거 써도 돼’라는 말이에요." } }
    ]
  };
})(window.EP);
