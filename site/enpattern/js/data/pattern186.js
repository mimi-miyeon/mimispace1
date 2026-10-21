/* 세션 186. Why don't you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[186] = {
    no: 186, form: "Why don't you ~?", stem: "Why don't you", meaning: "~하는 게 어때요?",
    hint: "Why don't you + 동사?",
    intro: {
      blocks: [["Why don't you", "너 ~하지 그래"], ["~?", "동사"]],
      lines: [
        "Why don't you + 동사?는 ‘~하는 게 어때? / ~하지 그래?’예요. 상대에게 권해요.",
        "‘왜 안 해?’가 아니라 제안이에요.",
        "don't you 뒤에는 동사 원래 모양을 써요."
      ],
      examples: [
        { en: "Why don't you take a break?", ko: "좀 쉬지 그래?" },
        { en: "Why don't you ask him?", ko: "그에게 물어보지 그래?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "좀 쉬지 그래?", before: "Why don't you", after: "a break?", answers: ["take"],
        wrong: { "taking": "don't you 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "You need a break.", why: "‘너 쉬어야 해’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그에게 물어보지 그래?", before: "Why don't you", after: "him?", answers: ["ask"],
        wrong: { "asking": "don't you 뒤에는 동사 원래 모양 ask를 써요." },
        tip: { en: "He might know.", why: "‘그가 알지도 몰라’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "이거 입어 보지 그래?", before: "Why", after: "you try this on?", answers: ["don't"],
        wrong: { "not": "‘~하지 그래?’는 Why don't you예요." },
        tip: { en: "It'll look good on you.", why: "look good on은 ‘~에게 어울리다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "일찍 자지 그래?", before: "Why don't you go to bed", after: "?", answers: ["early"],
        wrong: { "earlier": "‘일찍’은 early예요." },
        tip: { en: "Get some sleep.", why: "‘좀 자’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "앉지 그래?", before: "Why don't", after: "sit down?", answers: ["you"],
        wrong: { "your": "don't 뒤에는 you를 써요." },
        tip: { en: "Have a seat.", why: "‘앉아’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "의사한테 가 보지 그래?", answers: ["Why don't you see a doctor?", "Why don't you go to the doctor?"],
        wrong: { "why do not you seeing a doctor": "don't you 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "You should see a doctor.", why: "should는 ‘~하는 게 좋겠다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그녀에게 전화하지 그래?", answers: ["Why don't you call her?"],
        wrong: { "why do not you calling her": "don't you 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "Just give her a call.", why: "‘그냥 전화해’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "우리랑 같이 가지 그래?", answers: ["Why don't you come with us?", "Why don't you join us?"],
        wrong: { "why do not you come with we": "with 뒤에는 we가 아니라 us를 써요." },
        tip: { en: "It'll be fun.", why: "‘재밌을 거야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "다시 해 보지 그래?", answers: ["Why don't you try again?"],
        wrong: { "why do not you trying again": "don't you 뒤에는 동사 원래 모양 try를 써요." },
        tip: { en: "Don't give up.", why: "‘포기하지 마’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "물 좀 마시지 그래?", answers: ["Why don't you drink some water?", "Why don't you have some water?"],
        ctx: { lead: "take a break 대신 ‘물 좀 마시다(drink some water)’로 바꿔 보세요.", en: "Why don't you take a break?" },
        wrong: { "why do not you drinking some water": "don't you 뒤에는 동사 원래 모양 drink를 써요." },
        tip: { en: "Stay hydrated.", why: "hydrated는 ‘수분이 충분한’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 사과하지 그래?", answers: ["Then why don't you apologize?", "Why don't you apologize?", "Then why don't you say sorry?", "Why don't you say sorry?"],
        dialog: { a: "I feel bad about what I said.", aKo: "내가 한 말 때문에 마음이 안 좋아." },
        wrong: { "then why do not you apologizing": "don't you 뒤에는 동사 원래 모양 apologize를 써요." },
        tip: { en: "Just say you're sorry.", why: "‘그냥 미안하다고 해’라는 말이에요." } }
    ]
  };
})(window.EP);
