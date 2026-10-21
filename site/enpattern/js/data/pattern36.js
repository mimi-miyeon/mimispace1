/* 세션 36. I'm ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[36] = {
    no: 36, form: "I'm ~ing.", stem: "I'm", meaning: "나는 ~하고 있어요.",
    hint: "I'm + 동사-ing",
    intro: {
      blocks: [["I'm", "나는 ~이다"], ["~ing", "~하고 있는"]],
      lines: [
        "I'm + 동사-ing는 ‘지금 ~하고 있어 / ~하는 중이야’예요.",
        "I'm은 I am을 줄인 말이에요. am을 빼면 안 돼요. (I working ×)",
        "가까운 계획도 이렇게 말해요. (I'm leaving tomorrow: 나 내일 떠나)"
      ],
      examples: [
        { en: "I'm eating lunch.", ko: "나 점심 먹는 중이야." },
        { en: "I'm working from home today.", ko: "나 오늘 재택근무 해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 지금 요리하고 있어.", before: "I'm", after: "now.", answers: ["cooking"],
        wrong: { "cook": "I'm 뒤에는 동사에 ing를 붙여요. cooking이에요.", "cooked": "I'm 뒤에는 동사에 ing를 붙여요. cooking이에요." },
        tip: { en: "I'm making dinner.", why: "make dinner는 ‘저녁을 만들다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 버스 기다리고 있어.", before: "I'm", after: "for the bus.", answers: ["waiting"],
        wrong: { "wait": "I'm 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "I'm at the bus stop.", why: "‘나 버스 정류장이야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 지금 운전 중이야.", before: "", after: "driving right now.", answers: ["I'm"],
        wrong: { "i": "‘~하는 중이야’는 I 뒤에 am을 붙여 I'm이에요.", "i was": "지금 하는 중이라 I'm이에요. I was는 지난 일이에요." },
        tip: { en: "I'm behind the wheel.", why: "behind the wheel은 ‘운전 중인’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 집에 가는 중이야.", before: "I'm", after: "home.", answers: ["going"],
        wrong: { "go": "I'm 뒤에는 동사에 ing를 붙여요. going이에요." },
        tip: { en: "I'm on my way home.", why: "on my way는 ‘가는 길’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 너한테 말하고 있잖아.", before: "I", after: "talking to you.", answers: ["am"],
        wrong: { "is": "I 뒤에는 is가 아니라 am이에요.", "are": "I 뒤에는 are가 아니라 am이에요." },
        tip: { en: "Listen to me.", why: "‘내 말 좀 들어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 지금 샤워하고 있어.", answers: ["I'm taking a shower now.", "I'm taking a shower right now.", "I'm showering now."],
        alts: ["I'm in the shower now.", "I'm in the shower right now."],
        wrong: { "i taking a shower now": "‘~하고 있어’는 I 뒤에 am을 붙여 I'm이에요.", "i am take a shower now": "I'm 뒤에는 동사에 ing를 붙여요. taking이에요." },
        tip: { en: "I'm in the shower.", why: "‘샤워 중이야’를 짧게 말해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 영어 공부하고 있어.", answers: ["I'm studying English."],
        wrong: { "i studying english": "‘~하고 있어’는 I 뒤에 am을 붙여 I'm이에요.", "i am studing english": "study는 y를 그대로 두고 ing를 붙여 studying이에요." },
        tip: { en: "I'm learning English.", why: "learn은 ‘배우다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 뭐 좀 찾고 있어.", answers: ["I'm looking for something."],
        wrong: { "i am finding something": "‘찾는 중’은 looking for예요. find는 ‘찾아내다’예요.", "i looking for something": "‘~하고 있어’는 I 뒤에 am을 붙여 I'm이에요." },
        tip: { en: "I'm searching for something.", why: "search for도 ‘찾다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 내일 떠나.", answers: ["I'm leaving tomorrow."],
        wrong: { "i leaving tomorrow": "I 뒤에 am을 붙여 I'm leaving이에요.", "i am leave tomorrow": "I'm 뒤에는 동사에 ing를 붙여요. leaving이에요." },
        tip: { en: "I'm heading out tomorrow.", why: "head out은 ‘떠나다, 출발하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 음악 듣고 있어.", answers: ["I'm listening to music."],
        ctx: { lead: "eating lunch 대신 ‘음악 듣기(listening to music)’로 바꿔 보세요.", en: "I'm eating lunch." },
        wrong: { "i am listening music": "‘음악을 듣다’는 listen 뒤에 to를 붙여요.", "i am hearing music": "‘음악을 듣다’는 hear가 아니라 listen to예요." },
        tip: { en: "I've got my music on.", why: "‘음악 틀어 놨어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나 가는 중이야.", answers: ["I'm coming.", "I'm coming now."], alts: ["I'm on my way."],
        dialog: { a: "Where are you?", aKo: "어디야?" },
        wrong: { "i coming": "‘~하는 중이야’는 I 뒤에 am을 붙여 I'm이에요.", "i am come": "I'm 뒤에는 동사에 ing를 붙여요. coming이에요." },
        tip: { en: "I'm almost there.", why: "‘거의 다 왔어’라는 말이에요." } }
    ]
  };
})(window.EP);
