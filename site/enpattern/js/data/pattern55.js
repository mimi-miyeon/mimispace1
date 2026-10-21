/* 세션 55. Why are you ~ing? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[55] = {
    no: 55, form: "Why are you ~ing?", stem: "Why are you", meaning: "당신은 왜 ~하고 있나요?",
    hint: "Why are you + 동사-ing?",
    intro: {
      blocks: [["Why", "왜"], ["are you ~ing", "너는 ~하고 있니"]],
      lines: [
        "Why are you ~ing?는 ‘너 왜 ~하고 있어?’예요. 지금 하는 행동의 이유를 물어요.",
        "Are you ~ing? 앞에 Why를 붙이면 돼요.",
        "Why do you ~?는 평소 습관을, Why are you ~ing?는 지금 하는 일을 물어요."
      ],
      examples: [
        { en: "Why are you crying?", ko: "너 왜 울어?" },
        { en: "Why are you smiling?", ko: "너 왜 웃어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 왜 소리 질러?", before: "Why are you", after: "?", answers: ["yelling", "shouting"],
        wrong: { "yell": "are you 뒤에는 동사에 ing를 붙여요. yelling이에요." },
        tip: { en: "Calm down.", why: "‘진정해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 왜 나 쳐다봐?", before: "", after: "are you looking at me?", answers: ["Why"],
        wrong: { "what": "‘왜’는 What이 아니라 Why예요.", "how": "‘왜’는 How가 아니라 Why예요." },
        tip: { en: "Is something on my face?", why: "‘내 얼굴에 뭐 묻었어?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 왜 짐 싸고 있어?", before: "Why are you", after: "your bags?", answers: ["packing"],
        wrong: { "pack": "are you 뒤에는 동사에 ing를 붙여요. packing이에요." },
        tip: { en: "Are you going somewhere?", why: "‘어디 가?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 왜 그렇게 서둘러?", before: "Why", after: "you rushing?", answers: ["are"],
        wrong: { "do": "지금 하는 일을 물을 때는 do가 아니라 are예요." },
        tip: { en: "What's the rush?", why: "‘왜 그렇게 급해?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 왜 여기 서 있어?", before: "Why are", after: "standing here?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "Are you waiting for someone?", why: "‘누구 기다려?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 왜 아직 일하고 있어?", answers: ["Why are you still working?"],
        wrong: { "why do you still working": "지금 하는 일을 물을 때는 do가 아니라 are예요.", "why you are still working": "묻는 말은 Why 뒤에 are you 순서예요." },
        tip: { en: "Still at work?", why: "‘아직 일해?’라는 짧은 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 왜 우산 들고 있어?", answers: ["Why are you carrying an umbrella?", "Why are you holding an umbrella?"],
        wrong: { "why are you carrying a umbrella": "umbrella는 모음 소리로 시작해서 an을 써요." },
        tip: { en: "Why the umbrella?", why: "‘웬 우산이야?’라는 짧은 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 왜 그 사람 기다리고 있어?", answers: ["Why are you waiting for him?", "Why are you waiting for her?"],
        wrong: { "why are you waiting him": "‘~를 기다리다’는 wait for예요." },
        tip: { en: "Why wait for him?", why: "‘왜 그 사람을 기다려?’를 짧게 말해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 왜 내 휴대폰 쓰고 있어?", answers: ["Why are you using my phone?"],
        wrong: { "why are you using me phone": "‘나의’는 me가 아니라 my예요." },
        tip: { en: "Why do you have my phone?", why: "‘왜 내 폰을 갖고 있어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 왜 떨고 있어?", answers: ["Why are you shaking?"],
        ctx: { lead: "crying 대신 ‘떨다(shaking)’로 바꿔 보세요.", en: "Why are you crying?" },
        wrong: { "why are you shake": "are you 뒤에는 동사에 ing를 붙여요. shaking이에요." },
        tip: { en: "Are you cold?", why: "‘추워?’라고 물어봐도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "왜 웃는 거야?", answers: ["Why are you laughing?"],
        dialog: { a: "Ha ha ha!", aKo: "하하하!" },
        wrong: { "why do you laughing": "지금 하는 일을 물을 때는 do가 아니라 are예요.", "why are you laugh": "are you 뒤에는 동사에 ing를 붙여요. laughing이에요." },
        tip: { en: "What's so funny?", why: "‘뭐가 그렇게 웃겨?’라는 말이에요." } }
    ]
  };
})(window.EP);
