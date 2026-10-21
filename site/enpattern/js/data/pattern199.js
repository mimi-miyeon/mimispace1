/* 세션 199. What is it that you want ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[199] = {
    no: 199, form: "What is it that you want ~?", stem: "What is it that you want/What is it that you really want", meaning: "당신이 정말 ~하고 싶은 게 뭐예요?",
    hint: "What is it that you want to + 동사?",
    intro: {
      blocks: [["What is it", "그게 무엇이니"], ["that you want ~?", "네가 원하는 것이"]],
      lines: [
        "What is it that you want (to ~)?는 ‘네가 정말 원하는 게 뭐야?’예요. 강조해서 물어요.",
        "What do you want?보다 진지하고 강하게 들려요.",
        "to를 붙이면 ‘정말 ~하고 싶은 게 뭐야?’예요."
      ],
      examples: [
        { en: "What is it that you want?", ko: "네가 정말 원하는 게 뭐야?" },
        { en: "What is it that you want to do?", ko: "네가 정말 하고 싶은 게 뭐야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "네가 정말 원하는 게 뭐야?", before: "What is it that you", after: "?", answers: ["want"],
        wrong: { "wants": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Tell me what you want.", why: "‘원하는 걸 말해 줘’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "네가 정말 하고 싶은 게 뭐야?", before: "What is it that you want to", after: "?", answers: ["do"],
        wrong: { "doing": "to 뒤에는 동사 원래 모양 do를 써요." },
        tip: { en: "Follow your heart.", why: "‘마음 가는 대로 해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네가 정말 말하고 싶은 게 뭐야?", before: "What is it", after: "you want to say?", answers: ["that"],
        wrong: { "what": "‘~하는 게’는 that이에요." },
        tip: { en: "Just say it.", why: "‘그냥 말해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "네가 정말 알고 싶은 게 뭐야?", before: "What is it that you want to", after: "?", answers: ["know"],
        wrong: { "knowing": "to 뒤에는 동사 원래 모양 know를 써요." },
        tip: { en: "Ask me anything.", why: "‘뭐든 물어봐’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 정말 사고 싶은 게 뭐야?", before: "What is", after: "that you want to buy?", answers: ["it"],
        wrong: { "this": "강조할 때는 What is it that이에요." },
        tip: { en: "What's on your wish list?", why: "wish list는 ‘갖고 싶은 것 목록’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "네가 정말 바꾸고 싶은 게 뭐야?", answers: ["What is it that you want to change?"],
        wrong: { "what is it that you want to changing": "to 뒤에는 동사 원래 모양 change를 써요.", "what is it that you wants to change": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Change starts with you.", why: "‘변화는 너로부터 시작해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "네가 정말 배우고 싶은 게 뭐야?", answers: ["What is it that you want to learn?"],
        wrong: { "what is it that you want to learning": "to 뒤에는 동사 원래 모양 learn을 써요." },
        tip: { en: "It's never too late to learn.", why: "‘배우기에 늦은 때는 없어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네가 나한테 정말 원하는 게 뭐야?", answers: ["What is it that you want from me?"],
        wrong: { "what is it that you want to me": "‘나한테서 원하다’는 want from me예요." },
        tip: { en: "What do you expect from me?", why: "expect는 ‘기대하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네가 정말 되고 싶은 게 뭐야?", answers: ["What is it that you want to be?", "What is it that you want to become?"],
        wrong: { "what is it that you want to being": "to 뒤에는 be를 써요." },
        tip: { en: "Dream big.", why: "‘크게 꿈꿔’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "네가 정말 보고 싶은 게 뭐야?", answers: ["What is it that you want to see?", "What is it that you want to watch?"],
        ctx: { lead: "do 대신 ‘보다(see)’로 바꿔 보세요.", en: "What is it that you want to do?" },
        wrong: { "what is it that you want to seeing": "to 뒤에는 동사 원래 모양 see를 써요." },
        tip: { en: "Pick anything.", why: "‘아무거나 골라’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "그럼 네가 정말 원하는 게 뭐야?", answers: ["Then what is it that you want?", "What is it that you want?", "So what is it that you want?", "Then what is it that you really want?", "What is it that you really want?"],
        dialog: { a: "I don't want to go to college.", aKo: "나 대학 가고 싶지 않아." },
        wrong: { "then what is it that you wants": "you 뒤에는 동사에 s를 붙이지 않아요." },
        tip: { en: "Then what do you want?", why: "‘그럼 뭘 원해?’라는 말이에요." } }
    ]
  };
})(window.EP);
