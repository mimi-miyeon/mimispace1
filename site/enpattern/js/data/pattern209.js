/* 세션 209. I told you ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[209] = {
    no: 209, form: "I told you ~.", stem: "I told you", meaning: "내가 ~라고 했잖아요.",
    hint: "I told you (that) + 주어 + 동사",
    intro: {
      blocks: [["I told you", "내가 너한테 말했다"], ["(that) ~", "~라고"]],
      lines: [
        "I told you (that) ~는 ‘내가 ~라고 했잖아’예요.",
        "told는 tell의 과거예요. 말할 때는 that을 빼기도 해요.",
        "I told you so.는 ‘거봐, 내가 그랬잖아’예요."
      ],
      examples: [
        { en: "I told you so.", ko: "거봐, 내가 그랬잖아." },
        { en: "I told you it was hard.", ko: "어렵다고 했잖아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "거봐, 내가 그랬잖아.", before: "I told you", after: ".", answers: ["so"],
        wrong: { "that": "‘내가 그랬잖아’는 I told you so예요." },
        tip: { en: "See? I was right.", why: "‘봐? 내 말이 맞았지’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어렵다고 했잖아.", before: "I", after: "you it was hard.", answers: ["told"],
        wrong: { "tell": "지난 일이라 told를 써요.", "said": "said 뒤에는 you를 바로 쓰지 않아요. told you예요." },
        tip: { en: "Didn't I warn you?", why: "warn은 ‘경고하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "늦을 거라고 했잖아.", before: "I told you I'd be", after: ".", answers: ["late"],
        wrong: { "lately": "‘늦은’은 late예요." },
        tip: { en: "Sorry for the wait.", why: "‘기다리게 해서 미안’이라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "조심하라고 했잖아.", before: "I told you to be", after: ".", answers: ["careful"],
        wrong: { "carefully": "be 뒤에는 형용사 careful을 써요." },
        tip: { en: "Are you okay?", why: "‘괜찮아?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "비 올 거라고 했잖아.", before: "I told", after: "it would rain.", answers: ["you"],
        wrong: { "your": "told 뒤에는 you를 써요." },
        tip: { en: "Good thing I brought an umbrella.", why: "‘우산 가져와서 다행이다’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그가 올 거라고 했잖아.", answers: ["I told you he would come.", "I told you he'd come.", "I told you that he would come."],
        wrong: { "i tell you he would come": "지난 일이라 told를 써요.", "i said you he would come": "said 뒤에는 you를 바로 쓰지 않아요. told you예요." },
        tip: { en: "Here he is.", why: "‘여기 왔네’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 비싸다고 했잖아.", answers: ["I told you it was expensive.", "I told you that it was expensive."],
        wrong: { "i told you it is expensive": "지난 말이라 was를 써요." },
        tip: { en: "Too pricey?", why: "‘너무 비싸?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 바쁘다고 했잖아.", answers: ["I told you I was busy.", "I told you I'm busy."],
        wrong: { "i told you i busy": "busy 앞에 was가 필요해요." },
        tip: { en: "Let's talk later.", why: "‘나중에 얘기하자’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그거 만지지 말라고 했잖아.", answers: ["I told you not to touch it.", "I told you not to touch that."],
        wrong: { "i told you do not touch it": "‘~하지 말라고 했잖아’는 told you not to예요." },
        tip: { en: "Hands off!", why: "‘손 대지 마!’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "추울 거라고 했잖아.", answers: ["I told you it would be cold.", "I told you it'd be cold."],
        ctx: { lead: "hard 대신 ‘추울 거라고(it would be cold)’로 바꿔 보세요.", en: "I told you it was hard." },
        wrong: { "i told you it will be cold": "지난 말이라 would를 써요." },
        tip: { en: "Wear a jacket.", why: "‘재킷 입어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "봐, 내 말이 맞지.", answers: ["See, I told you so.", "I told you so.", "See? I told you so."],
        dialog: { a: "You were right. The movie was boring.", aKo: "네 말이 맞았어. 영화 지루했어." },
        wrong: { "see i tell you so": "지난 일이라 told를 써요." },
        tip: { en: "See? I was right.", why: "‘봐? 내 말이 맞았지’라는 말이에요." } }
    ]
  };
})(window.EP);
