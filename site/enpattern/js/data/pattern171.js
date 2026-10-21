/* 세션 171. How long is ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[171] = {
    no: 171, form: "How long is ~?", stem: "How long is/How long's", meaning: "~는 얼마나 길어요?",
    hint: "How long is + 명사?",
    intro: {
      blocks: [["How long", "얼마나 긴"], ["is ~?", "~는?"]],
      lines: [
        "How long is + 명사?는 ‘~는 얼마나 길어? / 얼마나 걸려?’예요.",
        "길이와 시간 모두 물어요. (How long is the movie?: 영화 몇 시간이야?)",
        "여러 개는 How long are ~?예요."
      ],
      examples: [
        { en: "How long is the movie?", ko: "영화 얼마나 길어?" },
        { en: "How long is the flight?", ko: "비행 시간이 얼마나 돼?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "영화 얼마나 길어?", before: "How long is the", after: "?", answers: ["movie"],
        wrong: { "movies": "the 뒤에 영화 하나라 movie예요." },
        tip: { en: "What time does it end?", why: "‘몇 시에 끝나?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "비행 시간이 얼마나 돼?", before: "How", after: "is the flight?", answers: ["long"],
        wrong: { "much": "시간의 길이는 How long이에요.", "many": "시간의 길이는 How long이에요." },
        tip: { en: "When do we land?", why: "land는 ‘착륙하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이 다리 얼마나 길어?", before: "How long", after: "this bridge?", answers: ["is"],
        wrong: { "are": "다리 하나라 is를 써요.", "does": "‘얼마나 길어?’는 How long is예요." },
        tip: { en: "It looks really long.", why: "‘진짜 길어 보여’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "점심시간이 얼마나 돼?", before: "How long is your lunch", after: "?", answers: ["break"],
        wrong: { "time": "‘점심시간’은 lunch break가 자연스러워요." },
        tip: { en: "Do you have time for coffee?", why: "‘커피 마실 시간 돼?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "수업 얼마나 길어?", before: "", after: "long is the class?", answers: ["How"],
        wrong: { "what": "길이를 물을 때는 How long이에요." },
        tip: { en: "When does class end?", why: "‘수업 언제 끝나?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "줄이 얼마나 길어?", answers: ["How long is the line?", "How long's the line?"],
        wrong: { "how long are the line": "줄 하나라 is를 써요.", "how much is the line": "길이를 물을 때는 How long이에요." },
        tip: { en: "Is there a wait?", why: "wait은 ‘대기’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "공연 얼마나 길어?", answers: ["How long is the show?", "How long is the performance?"],
        wrong: { "how long is show": "show 앞에 the를 붙여요." },
        tip: { en: "Is there an intermission?", why: "intermission은 ‘중간 휴식’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 강 얼마나 길어?", answers: ["How long is this river?", "How long is the river?"],
        wrong: { "how long is this rivers": "this 뒤에는 하나만 써요." },
        tip: { en: "It's the longest river here.", why: "‘여기서 제일 긴 강이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "휴가가 얼마나 돼?", answers: ["How long is your vacation?", "How long is your holiday?"],
        wrong: { "how long is you vacation": "‘네’는 your예요." },
        tip: { en: "Lucky you!", why: "‘좋겠다!’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "회의 얼마나 길어?", answers: ["How long is the meeting?"],
        ctx: { lead: "the movie 대신 ‘회의(the meeting)’로 바꿔 보세요.", en: "How long is the movie?" },
        wrong: { "how long is meeting": "meeting 앞에 the를 붙여요." },
        tip: { en: "I have another meeting.", why: "‘다른 회의 있어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그거 얼마나 길어?", answers: ["How long is it?", "How long's it?"],
        dialog: { a: "Let's watch this documentary.", aKo: "이 다큐 보자." },
        wrong: { "how long it is": "물을 때는 is를 앞에 써요. How long is it이에요." },
        tip: { en: "Is it a long one?", why: "‘긴 거야?’라는 말이에요." } }
    ]
  };
})(window.EP);
