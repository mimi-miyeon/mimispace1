/* 세션 42. I'm glad to be ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[42] = {
    no: 42, form: "I'm glad to be ~.", stem: "I'm glad to be", meaning: "나는 ~해서 기뻐요.",
    hint: "I'm glad to be + 형용사/장소",
    intro: {
      blocks: [["I'm glad", "나는 기쁘다"], ["to be ~", "~인 상태여서"]],
      lines: [
        "I'm glad to be ~는 ‘~여서 기뻐’예요. 내 상태나 있는 곳을 말해요.",
        "be 뒤에 here, back, home이나 형용사를 붙여요.",
        "be는 꼭 원래 모양으로 써요. (to am ×)"
      ],
      examples: [
        { en: "I'm glad to be here.", ko: "여기 오게 돼서 기뻐." },
        { en: "I'm glad to be safe.", ko: "무사해서 다행이야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "다시 학교에 와서 기뻐.", before: "I'm glad to", after: "back at school.", answers: ["be"],
        wrong: { "am": "to 뒤에는 원래 모양 be를 써요.", "being": "to 뒤에는 원래 모양 be를 써요." },
        tip: { en: "It's good to be back at school.", why: "It's good to be ~도 같은 뜻이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네 친구라서 기뻐.", before: "I'm glad to be", after: "friend.", answers: ["your"],
        wrong: { "you": "‘너의’는 you가 아니라 your예요." },
        tip: { en: "I'm lucky to have you as a friend.", why: "lucky는 ‘운이 좋은’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "끝나서 기뻐.", before: "I'm glad to be", after: ".", answers: ["done", "finished"],
        wrong: { "do": "‘끝난’은 do가 아니라 done이에요." },
        tip: { en: "Finally, it's over!", why: "‘드디어 끝났다!’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "집에 와서 기뻐.", before: "I'm", after: "to be home.", answers: ["glad", "happy"],
        wrong: { "good": "‘기뻐’는 good이 아니라 glad예요." },
        tip: { en: "Home sweet home.", why: "‘역시 집이 최고’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "건강해서 기뻐.", before: "", after: "glad to be healthy.", answers: ["I'm"],
        wrong: { "i": "‘기뻐’는 I 뒤에 am을 붙여 I'm glad예요." },
        tip: { en: "I feel great these days.", why: "‘요즘 컨디션 좋아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 팀의 일원이라서 기뻐.", answers: ["I'm glad to be part of this team.", "I'm glad to be a part of this team.", "I'm glad to be on this team."],
        wrong: { "i am glad to part of this team": "to 뒤에 be를 붙여 be part of예요." },
        tip: { en: "I'm proud to be on this team.", why: "proud는 ‘자랑스러운’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "다시 일하게 돼서 기뻐.", answers: ["I'm glad to be back at work.", "I'm glad to be back to work."],
        wrong: { "i am glad to back at work": "to 뒤에 be를 붙여 be back이에요." },
        tip: { en: "Back to work again!", why: "‘다시 일하러 왔다!’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "살아 있어서 다행이야.", answers: ["I'm glad to be alive."],
        wrong: { "i am glad to be live": "‘살아 있는’은 live가 아니라 alive예요." },
        tip: { en: "I'm lucky to be alive.", why: "lucky는 ‘운이 좋은’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너랑 같이 있어서 기뻐.", answers: ["I'm glad to be with you.", "I'm glad to be here with you."],
        wrong: { "i am glad to with you": "to 뒤에 be를 붙여 be with you예요." },
        tip: { en: "I love spending time with you.", why: "spend time with는 ‘~와 시간을 보내다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "돌아와서 기뻐.", answers: ["I'm glad to be back."],
        ctx: { lead: "here 대신 ‘돌아온(back)’으로 바꿔 보세요.", en: "I'm glad to be here." },
        wrong: { "i am glad to back": "to 뒤에 be를 붙여 be back이에요.", "i am glad to am back": "to 뒤에는 원래 모양 be를 써요." },
        tip: { en: "It's good to be back.", why: "It's good to be ~도 같은 뜻이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "고마워! 여기 와서 기뻐.", answers: ["Thanks! I'm glad to be here.", "Thank you! I'm glad to be here."], alts: ["Thanks! I'm so glad to be here.", "Thanks! I'm really glad to be here."],
        dialog: { a: "Welcome to Seoul!", aKo: "서울에 온 걸 환영해!" },
        wrong: { "thanks i am glad to here": "to 뒤에 be를 붙여 be here예요." },
        tip: { en: "Thanks! I'm so excited to be here.", why: "excited는 ‘신나는’이에요." } }
    ]
  };
})(window.EP);
