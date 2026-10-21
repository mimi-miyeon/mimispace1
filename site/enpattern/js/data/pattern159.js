/* 세션 159. I've ~(p.p.). */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[159] = {
    no: 159, form: "I've ~(p.p.).", stem: "I've", meaning: "난 ~해 본 적이 있어요.",
    hint: "I've + 과거분사",
    intro: {
      blocks: [["I've", "나는 ~한 적 있다"], ["~(p.p.)", "과거분사"]],
      lines: [
        "I've + 과거분사는 ‘나 ~해 본 적 있어 / 막 ~했어’예요.",
        "I've는 I have를 줄인 말이에요. 과거분사는 보통 ed를 붙여요. (tried)",
        "모양이 바뀌는 것도 있어요. (see → seen, eat → eaten, meet → met)"
      ],
      examples: [
        { en: "I've seen that movie.", ko: "나 그 영화 봤어." },
        { en: "I've tried it before.", ko: "나 그거 전에 해 봤어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 그 영화 봤어.", before: "I've", after: "that movie.", answers: ["seen"],
        wrong: { "saw": "I've 뒤에는 saw가 아니라 seen을 써요.", "see": "I've 뒤에는 과거분사 seen을 써요." },
        tip: { en: "I watched it last year.", why: "‘작년에 봤어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 그거 전에 해 봤어.", before: "I've", after: "it before.", answers: ["tried"],
        wrong: { "try": "I've 뒤에는 과거분사 tried를 써요.", "tryed": "try는 y를 i로 바꿔 tried예요." },
        tip: { en: "I did it before.", why: "‘전에 했어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 그 사람 만난 적 있어.", before: "I've", after: "him.", answers: ["met"],
        wrong: { "meet": "I've 뒤에는 과거분사 met을 써요.", "meeted": "meet의 과거분사는 met이에요." },
        tip: { en: "I know him.", why: "‘그 사람 알아’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 그 노래 들어 봤어.", before: "I've", after: "that song.", answers: ["heard"],
        wrong: { "hear": "I've 뒤에는 과거분사 heard를 써요.", "heared": "hear의 과거분사는 heard예요." },
        tip: { en: "It sounds familiar.", why: "familiar는 ‘익숙한’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 벌써 먹었어.", before: "", after: "already eaten.", answers: ["I've"],
        wrong: { "i": "I 뒤에 have가 필요해요. I've예요." },
        tip: { en: "I'm full.", why: "‘배불러’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 그 책 읽어 봤어.", answers: ["I've read that book.", "I've read the book."], alts: ["I read that book."],
        wrong: { "i have readed that book": "read의 과거분사는 그대로 read예요." },
        tip: { en: "It was good.", why: "‘좋았어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그거 먹어 봤어.", answers: ["I've eaten it.", "I've tried it.", "I've eaten that.", "I've tried that."],
        wrong: { "i have ate it": "I've 뒤에는 ate가 아니라 eaten을 써요." },
        tip: { en: "It's delicious.", why: "‘맛있어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 일 끝냈어.", answers: ["I've finished my work.", "I've finished work."],
        wrong: { "i have finish my work": "I've 뒤에는 과거분사 finished를 써요." },
        tip: { en: "I'm done for the day.", why: "done for the day는 ‘오늘 일 끝’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그거 여러 번 해 봤어.", answers: ["I've done it many times.", "I've done that many times.", "I've done it a lot."],
        wrong: { "i have did it many times": "I've 뒤에는 did가 아니라 done을 써요." },
        tip: { en: "I'm good at it.", why: "‘나 그거 잘해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 그 사진 봤어.", answers: ["I've seen that picture.", "I've seen the picture.", "I've seen that photo."],
        ctx: { lead: "that movie 대신 ‘그 사진(that picture)’으로 바꿔 보세요.", en: "I've seen that movie." },
        wrong: { "i have saw that picture": "I've 뒤에는 saw가 아니라 seen을 써요." },
        tip: { en: "It's a famous photo.", why: "‘유명한 사진이야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나 그 사람 만나 봤어.", answers: ["Yes, I've met him.", "Yeah, I've met him.", "Yes, I've met her."],
        dialog: { a: "Do you know Tom?", aKo: "톰 알아?" },
        wrong: { "yes i have meet him": "I've 뒤에는 과거분사 met을 써요." },
        tip: { en: "Yes, he's really nice.", why: "‘응, 진짜 좋은 사람이야’라는 말이에요." } }
    ]
  };
})(window.EP);
