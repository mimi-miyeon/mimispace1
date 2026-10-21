/* 세션 104. It sounds like ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[104] = {
    no: 104, form: "It sounds like ~.", stem: "It sounds like/Sounds like", meaning: "그건 ~처럼 들려요.",
    hint: "It sounds like + 명사/주어 + 동사",
    intro: {
      blocks: [["It sounds", "~처럼 들린다"], ["like ~", "명사 / 주어 + 동사"]],
      lines: [
        "It sounds like ~는 ‘~처럼 들려 / ~인 것 같네’예요. 들은 얘기에 반응할 때 써요.",
        "like 뒤에는 명사(a plan)나 ‘주어 + 동사’를 써요.",
        "말할 때는 It을 빼고 Sounds like ~라고도 해요."
      ],
      examples: [
        { en: "It sounds like a plan.", ko: "좋은 계획 같네." },
        { en: "It sounds like fun.", ko: "재밌겠다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "재밌겠다.", before: "It sounds like", after: ".", answers: ["fun"],
        wrong: { "funny": "funny는 ‘웃긴’이에요. ‘재밌는 일’은 fun이에요." },
        tip: { en: "I'm in.", why: "‘나도 낄래’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "좋은 생각 같아.", before: "It sounds", after: "a good idea.", answers: ["like"],
        wrong: { "as": "‘~처럼 들려’는 sounds like예요." },
        tip: { en: "Great idea.", why: "‘좋은 생각이야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 힘든 하루 보낸 것 같네.", before: "It sounds like you", after: "a hard day.", answers: ["had"],
        wrong: { "have": "지난 일이라 had를 써요." },
        tip: { en: "What a day.", why: "‘무슨 하루가 이래’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "누가 문 두드리는 것 같아.", before: "It", after: "like someone's knocking.", answers: ["sounds"],
        wrong: { "sound": "It 뒤에는 동사에 s를 붙여요. sounds예요." },
        tip: { en: "Someone's at the door.", why: "‘누가 왔어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "좋은 계획 같네.", before: "It sounds like a", after: ".", answers: ["plan"],
        wrong: { "planning": "‘계획’은 plan이에요." },
        tip: { en: "Let's do it.", why: "‘그렇게 하자’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 감기 걸린 것 같아.", answers: ["It sounds like you have a cold.", "It sounds like you've got a cold.", "Sounds like you have a cold."],
        wrong: { "it sounds like you have cold": "‘감기’는 a cold예요.", "it sound like you have a cold": "It 뒤에는 동사에 s를 붙여요. sounds예요." },
        tip: { en: "You sound sick.", why: "‘목소리가 아파 보여’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "완벽한 계획 같아.", answers: ["It sounds like a perfect plan.", "Sounds like a perfect plan."],
        wrong: { "it sounds like perfect plan": "plan은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "That's perfect.", why: "‘완벽해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그가 화난 것 같아.", answers: ["It sounds like he's angry.", "It sounds like he's upset.", "It sounds like he's mad."],
        wrong: { "it sounds like he angry": "angry 앞에 is가 필요해요. he's angry예요." },
        tip: { en: "He sounds angry.", why: "‘목소리가 화나 보여’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 재밌게 보낸 것 같네.", answers: ["It sounds like you had fun.", "It sounds like you had a good time.", "Sounds like you had fun."],
        wrong: { "it sounds like you have fun": "지난 일이라 had를 써요." },
        tip: { en: "Lucky you!", why: "‘좋았겠다!’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "멋진 생각 같아.", answers: ["It sounds like a great idea.", "Sounds like a great idea."],
        ctx: { lead: "a plan 대신 ‘멋진 생각(a great idea)’으로 바꿔 보세요.", en: "It sounds like a plan." },
        wrong: { "it sounds like great idea": "idea는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "I love it.", why: "‘완전 좋아’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "재밌겠다!", answers: ["It sounds like fun!", "Sounds like fun!"],
        dialog: { a: "Let's go camping this weekend.", aKo: "이번 주말에 캠핑 가자." },
        wrong: { "it sounds like funny": "funny는 ‘웃긴’이에요. ‘재밌는 일’은 fun이에요." },
        tip: { en: "Count me in!", why: "‘나도 끼워 줘!’라는 말이에요." } }
    ]
  };
})(window.EP);
