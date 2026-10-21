/* 세션 77. I appreciate ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[77] = {
    no: 77, form: "I appreciate ~.", stem: "I appreciate", meaning: "~에 감사합니다.",
    hint: "I appreciate + 명사",
    intro: {
      blocks: [["I appreciate", "고맙게 생각한다"], ["~", "명사"]],
      lines: [
        "I appreciate ~는 ‘~ 고마워 / 감사해’예요. Thank you보다 조금 더 정중해요.",
        "뒤에 고마운 것을 명사로 바로 써요. (I appreciate your help.)",
        "for를 붙이지 않아요. (I appreciate for ×)"
      ],
      examples: [
        { en: "I appreciate your help.", ko: "도와줘서 고마워." },
        { en: "I appreciate it.", ko: "고마워요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "시간 내줘서 고마워.", before: "I appreciate your", after: ".", answers: ["time"],
        wrong: { "times": "‘시간’은 time이에요. s를 붙이지 않아요." },
        tip: { en: "Thanks for your time.", why: "Thanks for ~도 ‘~ 고마워’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "정말 고마워.", before: "I really appreciate", after: ".", answers: ["it", "that"],
        wrong: { "for it": "appreciate 뒤에는 for를 쓰지 않아요." },
        tip: { en: "Thanks a lot.", why: "‘정말 고마워’라는 짧은 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네 친절 고마워.", before: "I", after: "your kindness.", answers: ["appreciate"],
        wrong: { "appreciates": "I 뒤에는 appreciates가 아니라 appreciate예요.", "thank": "thank 뒤에는 사람이 와요. 고마운 일을 말할 때는 appreciate예요." },
        tip: { en: "You're so kind.", why: "‘너 정말 친절하다’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "솔직하게 말해 줘서 고마워.", before: "I appreciate your", after: ".", answers: ["honesty"],
        wrong: { "honest": "honest는 ‘솔직한’이에요. ‘솔직함’은 honesty예요." },
        tip: { en: "Thanks for being honest.", why: "be honest는 ‘솔직하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이해해 줘서 고마워.", before: "I appreciate", after: "understanding.", answers: ["your"],
        wrong: { "you": "‘너의’는 you가 아니라 your예요." },
        tip: { en: "Thanks for understanding.", why: "Thanks for ~도 ‘~ 고마워’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "응원해 줘서 고마워.", answers: ["I appreciate your support."],
        wrong: { "i appreciate for your support": "appreciate 뒤에는 for를 쓰지 않아요.", "i appreciate you support": "‘너의’는 you가 아니라 your예요." },
        tip: { en: "Thanks for supporting me.", why: "support는 ‘응원하다, 지지하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "애써 줘서 고마워.", answers: ["I appreciate your effort.", "I appreciate your efforts.", "I appreciate your hard work."],
        wrong: { "i appreciate for your effort": "appreciate 뒤에는 for를 쓰지 않아요." },
        tip: { en: "You worked so hard.", why: "‘너 정말 애썼다’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "제안해 줘서 고마워.", answers: ["I appreciate the offer.", "I appreciate your offer."],
        wrong: { "i appreciate for the offer": "appreciate 뒤에는 for를 쓰지 않아요." },
        tip: { en: "Thanks for offering.", why: "Thanks for ~도 ‘~ 고마워’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "걱정해 줘서 고마워.", answers: ["I appreciate your concern."],
        wrong: { "i appreciate for your concern": "appreciate 뒤에는 for를 쓰지 않아요." },
        tip: { en: "Thanks for worrying about me.", why: "worry about은 ‘~을 걱정하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "기다려 줘서 고마워.", answers: ["I appreciate your patience."],
        ctx: { lead: "help 대신 ‘인내(patience)’로 바꿔 보세요.", en: "I appreciate your help." },
        wrong: { "i appreciate your patient": "patient는 ‘참을성 있는’이에요. ‘인내’는 patience예요." },
        tip: { en: "Thanks for waiting.", why: "Thanks for ~도 ‘~ 고마워’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "정말? 정말 고마워.", answers: ["Really? I appreciate it.", "Really? I appreciate that."], alts: ["Really? I really appreciate it."],
        dialog: { a: "I can lend you my laptop.", aKo: "내 노트북 빌려줄 수 있어." },
        wrong: { "really i appreciate for it": "appreciate 뒤에는 for를 쓰지 않아요." },
        tip: { en: "Really? You're a lifesaver.", why: "lifesaver는 ‘구세주’예요." } }
    ]
  };
})(window.EP);
