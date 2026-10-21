/* 세션 60. What do you think ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[60] = {
    no: 60, form: "What do you think ~?", stem: "What do you think", meaning: "~을 어떻게 생각해요?",
    hint: "What do you think of/about + 명사/대명사?",
    intro: {
      blocks: [["What", "무엇을"], ["do you think", "너는 생각하니"], ["of / about ~", "~에 대해"]],
      lines: [
        "What do you think of ~?는 ‘~ 어때? / ~ 어떻게 생각해?’예요.",
        "of나 about 뒤에 명사를 붙여요. (What do you think of my hair?)",
        "‘어떻게’라고 해서 How로 시작하지 않아요. (How do you think ×)"
      ],
      examples: [
        { en: "What do you think of this?", ko: "이거 어때?" },
        { en: "What do you think about my plan?", ko: "내 계획 어떻게 생각해?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "내 새 차 어때?", before: "What do you think", after: "my new car?", answers: ["of", "about"],
        wrong: { "for": "‘~에 대해’는 for가 아니라 of나 about이에요." },
        tip: { en: "How do you like my new car?", why: "How do you like ~?도 ‘~ 어때?’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이 노래 어떻게 생각해?", before: "", after: "do you think of this song?", answers: ["What"],
        wrong: { "how": "‘어떻게 생각해?’는 How가 아니라 What do you think예요." },
        tip: { en: "Do you like this song?", why: "‘이 노래 좋아?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이 색깔 어때?", before: "What do you", after: "of this color?", answers: ["think"],
        wrong: { "thinks": "do you 뒤에는 동사 원래 모양 think를 써요." },
        tip: { en: "Does this color look good?", why: "‘이 색 괜찮아 보여?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내 아이디어 어때?", before: "What", after: "you think about my idea?", answers: ["do"],
        wrong: { "are": "‘생각해?’는 are가 아니라 do로 물어요." },
        tip: { en: "Is my idea any good?", why: "any good은 ‘괜찮은’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 새 사장님 어때?", before: "What do you think of our new", after: "?", answers: ["boss"],
        wrong: { "bosses": "사장님 한 명이라 boss예요." },
        tip: { en: "How's our new boss?", why: "How's ~?도 ‘~ 어때?’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "내 머리 어때?", answers: ["What do you think of my hair?", "What do you think about my hair?"],
        wrong: { "how do you think of my hair": "‘어떻게 생각해?’는 How가 아니라 What do you think예요.", "what do you think my hair": "think 뒤에 of나 about을 붙여요." },
        tip: { en: "How does my hair look?", why: "‘내 머리 어때 보여?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 식당 어때?", answers: ["What do you think of this restaurant?", "What do you think about this restaurant?", "What do you think of this place?"],
        wrong: { "how do you think of this restaurant": "‘어떻게 생각해?’는 How가 아니라 What do you think예요." },
        tip: { en: "Do you like this place?", why: "‘여기 마음에 들어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "새 직장 어때?", answers: ["What do you think of your new job?", "What do you think about your new job?"],
        wrong: { "what do you think of you new job": "‘너의’는 you가 아니라 your예요." },
        tip: { en: "How's your new job?", why: "How's ~?도 ‘~ 어때?’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "서울 어떻게 생각해?", answers: ["What do you think of Seoul?", "What do you think about Seoul?"],
        wrong: { "how do you think about seoul": "‘어떻게 생각해?’는 How가 아니라 What do you think예요." },
        tip: { en: "How do you like Seoul?", why: "How do you like ~?도 ‘~ 어때?’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 셔츠 어때?", answers: ["What do you think of this shirt?", "What do you think about this shirt?"],
        ctx: { lead: "this 대신 ‘이 셔츠(this shirt)’로 바꿔 보세요.", en: "What do you think of this?" },
        wrong: { "what do you think this shirt": "think 뒤에 of나 about을 붙여요." },
        tip: { en: "Does this shirt look okay?", why: "‘이 셔츠 괜찮아 보여?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어떻게 생각해?", answers: ["What do you think?", "What do you think of it?", "What do you think about it?"],
        dialog: { a: "I just read your report.", aKo: "네 보고서 방금 읽었어." },
        wrong: { "how do you think": "‘어떻게 생각해?’는 How가 아니라 What do you think예요." },
        tip: { en: "Is it okay?", why: "‘괜찮아?’라는 짧은 말이에요." } }
    ]
  };
})(window.EP);
