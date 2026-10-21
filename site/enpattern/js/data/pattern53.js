/* 세션 53. Are you ~ing? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[53] = {
    no: 53, form: "Are you ~ing?", stem: "Are you", meaning: "당신은 ~하는 중이에요?",
    hint: "Are you + 동사-ing?",
    intro: {
      blocks: [["Are you", "너는 ~이니?"], ["~ing", "~하는 중"]],
      lines: [
        "Are you + 동사-ing?는 ‘너 ~하고 있어? / ~하는 중이야?’예요.",
        "You're working.에서 Are를 앞으로 보내면 묻는 말이 돼요.",
        "가까운 계획도 이렇게 물어요. (Are you coming tonight?)"
      ],
      examples: [
        { en: "Are you working now?", ko: "너 지금 일하는 중이야?" },
        { en: "Are you coming tonight?", ko: "너 오늘 밤에 와?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 듣고 있어?", before: "Are you", after: "?", answers: ["listening"],
        wrong: { "listen": "Are you 뒤에는 동사에 ing를 붙여요. listening이에요." },
        tip: { en: "Can you hear me?", why: "‘내 말 들려?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 지금 운전 중이야?", before: "", after: "you driving now?", answers: ["Are"],
        wrong: { "do": "~ing로 물을 때는 Do가 아니라 Are로 시작해요.", "is": "you와는 is가 아니라 are를 써요." },
        tip: { en: "Are you behind the wheel?", why: "behind the wheel은 ‘운전 중인’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 농담하는 거야?", before: "Are you", after: "?", answers: ["kidding", "joking"],
        wrong: { "kid": "Are you 뒤에는 동사에 ing를 붙여요. kidding이에요.", "kiding": "kid는 d를 한 번 더 써서 kidding이에요." },
        tip: { en: "Seriously?", why: "‘진심이야?’라는 짧은 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 누구 기다리고 있어?", before: "Are you waiting", after: "someone?", answers: ["for"],
        wrong: { "to": "‘~를 기다리다’는 wait for예요." },
        tip: { en: "Who are you waiting for?", why: "‘누구 기다려?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 이거 쓰고 있어?", before: "Are", after: "using this?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "Is anyone using this?", why: "‘이거 누가 쓰고 있어요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 아직 자고 있어?", answers: ["Are you still sleeping?"], alts: ["Are you still asleep?"],
        wrong: { "do you still sleeping": "~ing로 물을 때는 Do가 아니라 Are로 시작해요.", "are you still sleep": "Are you 뒤에는 동사에 ing를 붙여요. sleeping이에요." },
        tip: { en: "Still in bed?", why: "‘아직 침대야?’라는 짧은 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 영어 배우는 중이야?", answers: ["Are you learning English?", "Are you studying English?"],
        wrong: { "are you learn english": "Are you 뒤에는 동사에 ing를 붙여요. learning이에요." },
        tip: { en: "Do you study English?", why: "‘영어 공부해?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 이번 주말에 일해?", answers: ["Are you working this weekend?"],
        wrong: { "do you working this weekend": "~ing로 물을 때는 Do가 아니라 Are로 시작해요." },
        tip: { en: "Do you have to work this weekend?", why: "have to는 ‘~해야 하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 나 놀리는 거야?", answers: ["Are you making fun of me?", "Are you teasing me?"],
        wrong: { "are you make fun of me": "Are you 뒤에는 동사에 ing를 붙여요. making이에요." },
        tip: { en: "Is this a joke?", why: "‘이거 장난이야?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 지금 밥 먹고 있어?", answers: ["Are you eating now?", "Are you eating right now?"],
        ctx: { lead: "working 대신 ‘먹다(eating)’로 바꿔 보세요.", en: "Are you working now?" },
        wrong: { "are you eat now": "Are you 뒤에는 동사에 ing를 붙여요. eating이에요." },
        tip: { en: "Are you in the middle of eating?", why: "in the middle of는 ‘한창 ~하는 중’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 지금 오는 중이야?", answers: ["Are you coming now?", "Are you coming right now?"], alts: ["Are you on your way now?"],
        dialog: { a: "I'll be there in ten minutes.", aKo: "10분 뒤에 도착해." },
        wrong: { "do you coming now": "~ing로 물을 때는 Do가 아니라 Are로 시작해요." },
        tip: { en: "Are you on your way?", why: "on your way는 ‘오는 길’이에요." } }
    ]
  };
})(window.EP);
