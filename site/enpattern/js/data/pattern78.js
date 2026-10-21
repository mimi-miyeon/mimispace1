/* 세션 78. Thanks, but ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[78] = {
    no: 78, form: "Thanks, but ~.", stem: "Thanks, but", meaning: "고맙지만 ~입니다.",
    hint: "Thanks, but + 주어 + 동사",
    intro: {
      blocks: [["Thanks,", "고맙지만"], ["but ~", "그런데 ~"]],
      lines: [
        "Thanks, but ~는 ‘고맙지만 ~’이에요. 제안을 부드럽게 거절할 때 써요.",
        "but 뒤에는 거절하는 이유를 ‘주어 + 동사’로 써요.",
        "Thank you, but ~도 같은 뜻이에요."
      ],
      examples: [
        { en: "Thanks, but I'm full.", ko: "고맙지만 배불러." },
        { en: "Thanks, but I'm okay.", ko: "고맙지만 괜찮아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "고맙지만 나 차 있어.", before: "Thanks,", after: "I have a car.", answers: ["but"],
        wrong: { "and": "‘고맙지만’은 and가 아니라 but이에요.", "so": "‘고맙지만’은 so가 아니라 but이에요." },
        tip: { en: "I'm good, I drove here.", why: "drive here는 ‘차 몰고 왔다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "고맙지만 나 혼자 할 수 있어.", before: "Thanks, but I can do it", after: ".", answers: ["myself"],
        wrong: { "me": "‘나 혼자’는 me가 아니라 myself예요." },
        tip: { en: "I've got it, thanks.", why: "‘내가 할게, 고마워’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "고맙지만 나 커피 안 마셔.", before: "Thanks, but I", after: "drink coffee.", answers: ["don't"],
        wrong: { "am not": "동사를 부정할 때는 am not이 아니라 don't를 써요." },
        tip: { en: "Do you have any tea?", why: "‘혹시 차 있어?’라고 물어봐도 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "고맙지만 나 다른 계획 있어.", before: "Thanks, but I have other", after: ".", answers: ["plans"],
        wrong: { "plan": "other 뒤에 셀 수 있는 말은 보통 여러 개(plans)로 써요." },
        tip: { en: "Maybe next time.", why: "‘다음에’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "고맙지만 됐어.", before: "Thanks, but no", after: ".", answers: ["thanks"],
        wrong: { "thank": "‘됐어요’는 No thanks예요." },
        tip: { en: "I'm good, thanks.", why: "‘괜찮아, 고마워’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "고맙지만 나 지금 바빠.", answers: ["Thanks, but I'm busy now.", "Thanks, but I'm busy right now."], alts: ["Thank you, but I'm busy now.", "Thank you, but I'm busy right now."],
        wrong: { "thanks and i am busy now": "‘고맙지만’은 and가 아니라 but이에요." },
        tip: { en: "Thanks, but now's not a good time.", why: "now's not a good time은 ‘지금은 좀 그래’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "고맙지만 나 이미 먹었어.", answers: ["Thanks, but I already ate.", "Thanks, but I've already eaten.", "Thanks, but I ate already."], alts: ["Thank you, but I already ate."],
        wrong: { "thanks but i already eat": "이미 한 일이라 과거형 ate을 써요." },
        tip: { en: "Thanks, but I'm full.", why: "full은 ‘배부른’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "고맙지만 나 걸어갈게.", answers: ["Thanks, but I'll walk.", "Thanks, but I'm going to walk."],
        wrong: { "thanks and i will walk": "‘고맙지만’은 and가 아니라 but이에요." },
        tip: { en: "Thanks, but it's a short walk.", why: "‘걸어가면 금방이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "고맙지만 나 그거 필요 없어.", answers: ["Thanks, but I don't need it.", "Thanks, but I don't need that."],
        wrong: { "thanks but i am not need it": "동사를 부정할 때는 am not이 아니라 don't를 써요." },
        tip: { en: "Thanks, but I already have one.", why: "‘이미 하나 있어’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "고맙지만 나 운전해야 해.", answers: ["Thanks, but I have to drive.", "Thanks, but I need to drive."],
        ctx: { lead: "I'm full 대신 ‘운전해야 해(I have to drive)’로 바꿔 보세요.", en: "Thanks, but I'm full." },
        wrong: { "thanks but i have to driving": "to 뒤에는 동사 원래 모양 drive를 써요." },
        tip: { en: "Thanks, but I'm driving.", why: "‘운전 중이라서’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "고맙지만 나 다이어트 중이야.", answers: ["Thanks, but I'm on a diet."], alts: ["Thank you, but I'm on a diet."],
        dialog: { a: "Do you want some more cake?", aKo: "케이크 더 먹을래?" },
        wrong: { "thanks but i am diet": "‘다이어트 중’은 on a diet예요." },
        tip: { en: "Thanks, but I'm watching my weight.", why: "watch my weight는 ‘체중 관리하다’예요." } }
    ]
  };
})(window.EP);
