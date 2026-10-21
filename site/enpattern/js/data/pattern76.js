/* 세션 76. Thank you for ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[76] = {
    no: 76, form: "Thank you for ~.", stem: "Thank you for", meaning: "~에 감사해요.",
    hint: "Thank you for + 명사/동사-ing",
    intro: {
      blocks: [["Thank you", "고마워"], ["for ~", "~해서, ~에 대해"]],
      lines: [
        "Thank you for ~는 ‘~해 줘서 고마워’예요.",
        "for 뒤에는 명사(the gift)나 동사-ing(helping)를 써요.",
        "친한 사이에는 Thanks for ~라고 짧게 말해요."
      ],
      examples: [
        { en: "Thank you for the gift.", ko: "선물 고마워." },
        { en: "Thank you for helping me.", ko: "도와줘서 고마워." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "와 줘서 고마워.", before: "Thank you", after: "coming.", answers: ["for"],
        wrong: { "to": "‘~해 줘서 고마워’는 Thank you for + 동사-ing예요." },
        tip: { en: "Glad you could make it.", why: "make it은 ‘와 주다, 참석하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "기다려 줘서 고마워.", before: "Thank you for", after: ".", answers: ["waiting"],
        wrong: { "wait": "for 뒤에는 동사에 ing를 붙여요. waiting이에요." },
        tip: { en: "Sorry to keep you waiting.", why: "‘기다리게 해서 미안해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "저녁 고마워.", before: "Thank you for", after: ".", answers: ["dinner"],
        wrong: { "dinners": "저녁 한 끼라 dinner예요." },
        tip: { en: "Dinner was great.", why: "‘저녁 정말 좋았어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "들어 줘서 고마워.", before: "Thank you for", after: ".", answers: ["listening"],
        wrong: { "listen": "for 뒤에는 동사에 ing를 붙여요. listening이에요.", "hearing": "‘귀 기울여 들어 주다’는 listening이에요." },
        tip: { en: "I appreciate you listening.", why: "appreciate는 ‘고마워하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "모든 거 고마워.", before: "", after: "you for everything.", answers: ["Thank"],
        wrong: { "thanks": "Thanks 뒤에는 you를 쓰지 않아요. Thank you예요." },
        tip: { en: "I owe you one.", why: "‘신세 졌어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "초대해 줘서 고마워.", answers: ["Thank you for inviting me.", "Thank you for the invitation."], alts: ["Thanks for inviting me."],
        wrong: { "thank you for invite me": "for 뒤에는 동사에 ing를 붙여요. inviting이에요.", "thank you to invite me": "‘~해 줘서 고마워’는 Thank you for + 동사-ing예요." },
        tip: { en: "Thanks for having me.", why: "have me는 ‘나를 맞아 주다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "태워 줘서 고마워.", answers: ["Thank you for the ride.", "Thank you for giving me a ride.", "Thank you for driving me."], alts: ["Thanks for the ride."],
        wrong: { "thank you for give me a ride": "for 뒤에는 동사에 ing를 붙여요. giving이에요." },
        tip: { en: "Thanks for the lift.", why: "lift도 ‘태워 주기’라는 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이해해 줘서 고마워.", answers: ["Thank you for understanding.", "Thank you for your understanding."],
        wrong: { "thank you for understand": "for 뒤에는 동사에 ing를 붙여요. understanding이에요." },
        tip: { en: "I appreciate your patience.", why: "patience는 ‘참아 줌, 인내’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "전화해 줘서 고마워.", answers: ["Thank you for calling.", "Thank you for calling me.", "Thank you for the call."],
        wrong: { "thank you for call": "for 뒤에는 동사에 ing를 붙여요. calling이에요." },
        tip: { en: "It was good to hear from you.", why: "hear from은 ‘~에게서 연락을 받다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "조언 고마워.", answers: ["Thank you for the advice.", "Thank you for your advice."],
        ctx: { lead: "the gift 대신 ‘조언(the advice)’으로 바꿔 보세요.", en: "Thank you for the gift." },
        wrong: { "thank you for the advices": "advice는 셀 수 없는 말이라 s를 붙이지 않아요." },
        tip: { en: "That's really helpful.", why: "‘정말 도움이 돼’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와, 신경 써 줘서 고마워.", answers: ["Wow, thank you for thinking of me.", "Thank you for thinking of me.", "Wow, thank you for caring."],
        dialog: { a: "Here, I made you some soup.", aKo: "자, 너 주려고 수프 만들었어." },
        wrong: { "wow thank you for think of me": "for 뒤에는 동사에 ing를 붙여요. thinking이에요." },
        tip: { en: "You're so sweet.", why: "sweet은 ‘다정한’이에요." } }
    ]
  };
})(window.EP);
