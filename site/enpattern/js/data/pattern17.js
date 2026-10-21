/* 세션 17. I can't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[17] = {
    no: 17, form: "I can't ~.", stem: "I can't", meaning: "나는 ~할 수 없어요.",
    hint: "I can't + 동사",
    intro: {
      blocks: [["I", "나는"], ["can't", "~할 수 없다"], ["~", "동사"]],
      lines: [
        "can't는 cannot을 줄인 말이에요. ‘~할 수 없어 / ~ 못 해’예요.",
        "can't 뒤에도 동사 원래 모양을 써요. to는 붙이지 않아요.",
        "don't can이 아니라 can't예요."
      ],
      examples: [
        { en: "I can't see.", ko: "나 안 보여." },
        { en: "I can't sleep.", ko: "나 잠이 안 와." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 지금 말 못 해.", before: "I", after: "talk now.", answers: ["can't"],
        wrong: { "do not": "‘~ 못 해’는 don't가 아니라 can't로 말해요.", "not": "‘못 해’는 not만 쓰지 않고 can't를 써요.", "could not": "couldn't는 ‘~할 수 없었다’예요. 지금은 can't예요." },
        tip: { en: "I'm busy right now.", why: "‘지금 바빠’로 이유를 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 그거 못 믿겠어.", before: "I can't", after: "it.", answers: ["believe"],
        wrong: { "believes": "can't 뒤에는 동사 원래 모양 believe를 써요.", "to believe": "can't 뒤에는 to를 쓰지 않아요." },
        tip: { en: "No way!", why: "‘말도 안 돼!’라는 짧은 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 거기 못 가.", before: "I", after: "go there.", answers: ["can't"],
        wrong: { "do not": "‘못 가’는 can't예요. don't go는 ‘안 가’예요.", "am not": "‘못 가’는 am not이 아니라 can't로 말해요." },
        tip: { en: "I won't make it there.", why: "make it은 ‘가다, 도착하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 네 말이 안 들려.", before: "I can't", after: "you.", answers: ["hear"],
        wrong: { "listen": "listen은 ‘귀 기울여 듣다’예요. ‘들리지 않다’는 hear를 써요." },
        tip: { en: "Can you speak up?", why: "speak up은 ‘더 크게 말하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 열쇠를 못 찾겠어.", before: "I", after: "find my keys.", answers: ["can't"],
        wrong: { "do not": "‘못 찾겠어’는 don't가 아니라 can't로 말해요." },
        tip: { en: "I lost my keys.", why: "‘열쇠 잃어버렸어’로 말해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 운전 못 해.", answers: ["I can't drive."],
        wrong: { "i do not can drive": "‘못 해’는 don't can이 아니라 can't예요.", "i cannot to drive": "can't 뒤에는 to를 쓰지 않아요." },
        tip: { en: "I'm not able to drive.", why: "be able to도 ‘~할 수 있다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그거 못 먹어.", answers: ["I can't eat that.", "I can't eat it."],
        wrong: { "i cannot eating that": "can't 뒤에는 동사 원래 모양 eat을 써요." },
        tip: { en: "I can't have that.", why: "have는 ‘먹다, 마시다’라는 뜻으로도 써요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 오늘 너 못 만나.", answers: ["I can't meet you today.", "I can't see you today.", "Today I can't meet you.", "Today I can't see you."],
        wrong: { "i do not meet you today": "‘못 만나’는 can't로 말해요. don't는 ‘안 만나’예요." },
        tip: { en: "Today doesn't work for me.", why: "‘오늘은 안 돼’라는 표현이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 더는 못 기다려.", answers: ["I can't wait anymore.", "I can't wait any longer."],
        wrong: { "i cannot waiting anymore": "can't 뒤에는 동사 원래 모양 wait을 써요." },
        tip: { en: "I've waited long enough.", why: "‘충분히 오래 기다렸어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 수영 못 해.", answers: ["I can't swim."],
        ctx: { lead: "‘할 수 없다’로 바꿔 보세요.", en: "I can swim." },
        wrong: { "i do not can swim": "‘못 해’는 don't can이 아니라 can't예요.", "i do not swim": "‘수영 못 해’는 can't swim이에요. don't swim은 ‘수영 안 해’예요." },
        tip: { en: "I don't know how to swim.", why: "‘수영하는 법을 몰라’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 오늘 밤엔 못 가.", answers: ["Sorry, I can't go tonight.", "I'm sorry, I can't go tonight.", "Sorry, I can't tonight.", "Sorry, I can't make it tonight."],
        dialog: { a: "Let's go to the movies tonight.", aKo: "오늘 밤에 영화 보러 가자." },
        wrong: { "sorry i do not go tonight": "‘못 가’는 can't로 말해요. don't go는 ‘안 가’예요." },
        tip: { en: "Sorry, I have plans tonight.", why: "‘오늘 밤 약속 있어’로 이유를 말해요." } }
    ]
  };
})(window.EP);
