/* 세션 132. There is no way to ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[132] = {
    no: 132, form: "There is no way to ~.", stem: "There's no way to/There is no way to", meaning: "~할 방법이 없어요.",
    hint: "There is no way to + 동사",
    intro: {
      blocks: [["There's no way", "방법이 없다"], ["to ~", "~할"]],
      lines: [
        "There is no way to + 동사는 ‘~할 방법이 없어’예요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "There's no way!만 쓰면 ‘말도 안 돼!’라는 뜻이에요."
      ],
      examples: [
        { en: "There's no way to know.", ko: "알 방법이 없어." },
        { en: "There's no way to fix it.", ko: "그걸 고칠 방법이 없어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "알 방법이 없어.", before: "There's no way to", after: ".", answers: ["know"],
        wrong: { "knowing": "to 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "Who knows?", why: "‘누가 알겠어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그를 막을 방법이 없어.", before: "There's no way to", after: "him.", answers: ["stop"],
        wrong: { "stopping": "to 뒤에는 동사 원래 모양 stop을 써요." },
        tip: { en: "He won't listen.", why: "‘걔 말 안 들어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "확인할 방법이 없어.", before: "There's no", after: "to check.", answers: ["way"],
        wrong: { "road": "‘방법’은 way예요." },
        tip: { en: "We just have to wait.", why: "‘그냥 기다려야 해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "거기 갈 방법이 없어.", before: "There's no way to", after: "there.", answers: ["get"],
        wrong: { "go to": "‘거기 가다’는 get there예요." },
        tip: { en: "It's too far.", why: "‘너무 멀어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이길 방법이 없어.", before: "There's", after: "way to win.", answers: ["no"],
        wrong: { "not": "명사 앞에서는 not이 아니라 no를 써요." },
        tip: { en: "It's hopeless.", why: "hopeless는 ‘가망 없는’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그걸 고칠 방법이 없어.", answers: ["There's no way to fix it.", "There's no way to fix that.", "There is no way to fix it."],
        wrong: { "there is no way to fixing it": "to 뒤에는 동사 원래 모양 fix를 써요.", "there is no way fix it": "way 뒤에 to를 붙여요." },
        tip: { en: "It's beyond repair.", why: "beyond repair는 ‘고칠 수 없는’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그녀에게 연락할 방법이 없어.", answers: ["There's no way to contact her.", "There's no way to reach her."],
        wrong: { "there is no way to contact to her": "contact 뒤에는 to 없이 바로 her를 써요." },
        tip: { en: "Her phone is off.", why: "‘폰이 꺼져 있어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그걸 증명할 방법이 없어.", answers: ["There's no way to prove it.", "There's no way to prove that."],
        wrong: { "there is no way to proving it": "to 뒤에는 동사 원래 모양 prove를 써요." },
        tip: { en: "We have no evidence.", why: "evidence는 ‘증거’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "제시간에 끝낼 방법이 없어.", answers: ["There's no way to finish on time.", "There's no way to finish it on time."],
        wrong: { "there is no way to finish in time it": "‘제시간에’는 on time이에요." },
        tip: { en: "We need more time.", why: "‘시간이 더 필요해’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그걸 숨길 방법이 없어.", answers: ["There's no way to hide it."],
        ctx: { lead: "know 대신 ‘숨기다(hide it)’로 바꿔 보세요.", en: "There's no way to know." },
        wrong: { "there is no way to hiding it": "to 뒤에는 동사 원래 모양 hide를 써요." },
        tip: { en: "Everyone will know.", why: "‘다들 알게 될 거야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 되돌릴 방법이 없어.", answers: ["No, there's no way to undo it.", "No, there's no way to get it back."],
        dialog: { a: "Can you get the deleted file back?", aKo: "삭제한 파일 되살릴 수 있어?" },
        wrong: { "no there is no way to undoing it": "to 뒤에는 동사 원래 모양 undo를 써요." },
        tip: { en: "No, it's gone for good.", why: "for good은 ‘영원히’예요." } }
    ]
  };
})(window.EP);
