/* 세션 214. I'm frustrated that ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[214] = {
    no: 214, form: "I'm frustrated that ~.", stem: "I'm frustrated that/I'm frustrated", meaning: "난 ~해서 속상해요.",
    hint: "I'm frustrated that + 주어 + 동사",
    intro: {
      blocks: [["I'm frustrated", "나는 답답하다"], ["that ~", "~해서"]],
      lines: [
        "I'm frustrated that ~는 ‘~해서 답답해 / 속상해’예요. 뜻대로 안 될 때 써요.",
        "that 뒤에는 ‘주어 + 동사’를 써요.",
        "with를 쓰면 대상이에요. (I'm frustrated with myself: 나 자신한테 답답해)"
      ],
      examples: [
        { en: "I'm frustrated that it's not working.", ko: "이게 안 돼서 답답해." },
        { en: "I'm frustrated that nobody listens.", ko: "아무도 안 들어서 속상해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이게 안 돼서 답답해.", before: "I'm frustrated", after: "it's not working.", answers: ["that"],
        wrong: { "what": "‘~해서’는 that이에요." },
        tip: { en: "This is driving me crazy.", why: "drive crazy는 ‘미치게 하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "아무도 안 들어서 속상해.", before: "I'm frustrated that nobody", after: ".", answers: ["listens"],
        wrong: { "listen": "nobody 뒤에는 동사에 s를 붙여요. listens예요." },
        tip: { en: "No one hears me.", why: "‘아무도 내 말 안 들어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 자신한테 답답해.", before: "I'm frustrated", after: "myself.", answers: ["with"],
        wrong: { "at": "‘~에게 답답하다’는 frustrated with예요." },
        tip: { en: "I can do better.", why: "‘더 잘할 수 있는데’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "또 늦어서 속상해.", before: "I'm", after: "that I'm late again.", answers: ["frustrated"],
        wrong: { "frustrating": "frustrating은 ‘답답하게 하는’이에요. 내가 답답하면 frustrated예요." },
        tip: { en: "Not again!", why: "‘또야!’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "진전이 없어서 답답해.", before: "I'm frustrated that I'm not making any", after: ".", answers: ["progress"],
        wrong: { "progresses": "progress는 s를 붙이지 않아요." },
        tip: { en: "I feel stuck.", why: "stuck은 ‘막힌’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그가 날 안 믿어서 속상해.", answers: ["I'm frustrated that he doesn't believe me.", "I'm frustrated that he doesn't trust me."],
        wrong: { "i am frustrating that he does not believe me": "내가 답답하면 frustrated예요.", "i am frustrated that he do not believe me": "he 뒤에는 doesn't를 써요." },
        tip: { en: "Why won't he trust me?", why: "‘왜 날 안 믿지?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "시간이 부족해서 답답해.", answers: ["I'm frustrated that I don't have enough time.", "I'm frustrated that there isn't enough time."],
        wrong: { "i am frustrated that i do not have time enough": "‘충분한 시간’은 enough time이에요." },
        tip: { en: "There's never enough time.", why: "‘시간은 늘 부족해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "일이 잘 안 풀려서 속상해.", answers: ["I'm frustrated that things aren't going well.", "I'm frustrated that things aren't working out."],
        wrong: { "i am frustrated that things are not go well": "are 뒤에는 going을 써요." },
        tip: { en: "It'll get better.", why: "‘나아질 거야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그녀가 또 잊어버려서 답답해.", answers: ["I'm frustrated that she forgot again."],
        wrong: { "i am frustrated that she forget again": "지난 일이라 forgot을 써요." },
        tip: { en: "She always forgets.", why: "‘그녀는 맨날 잊어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "인터넷이 안 돼서 답답해.", answers: ["I'm frustrated that the internet isn't working.", "I'm frustrated that the Wi-Fi isn't working.", "I'm frustrated that the internet is down."],
        ctx: { lead: "it's 대신 ‘인터넷이(the internet isn't)’로 바꿔 보세요.", en: "I'm frustrated that it's not working." },
        wrong: { "i am frustrated that the internet not working": "not 앞에 is가 필요해요. isn't working이에요." },
        tip: { en: "Let me restart the router.", why: "router는 ‘공유기’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 나아지지 않아서 답답해.", answers: ["Yes, I'm frustrated that it's not getting better.", "Yeah, I'm frustrated that it's not getting better.", "I'm frustrated that it's not getting better."],
        dialog: { a: "Is your back still hurting?", aKo: "허리 아직 아파?" },
        wrong: { "yes i am frustrated that it is not get better": "is 뒤에는 getting을 써요." },
        tip: { en: "Yes, I've tried everything.", why: "‘응, 별걸 다 해 봤어’라는 말이에요." } }
    ]
  };
})(window.EP);
