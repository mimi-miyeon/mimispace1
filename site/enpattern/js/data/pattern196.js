/* 세션 196. What is ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[196] = {
    no: 196, form: "What is ~?", stem: "What is/What's", meaning: "~은 뭐예요?",
    hint: "What is + 명사/대명사/형용사?",
    intro: {
      blocks: [["What is", "무엇이니"], ["~?", "명사"]],
      lines: [
        "What is + 명사?는 ‘~은 뭐야?’예요. 말할 때는 What's로 줄여요.",
        "여러 개는 What are ~?예요. (What are those?)",
        "What's that?(저게 뭐야?), What's this?(이게 뭐야?)를 많이 써요."
      ],
      examples: [
        { en: "What is this?", ko: "이게 뭐야?" },
        { en: "What's the problem?", ko: "뭐가 문제야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이게 뭐야?", before: "What is", after: "?", answers: ["this"],
        wrong: { "it this": "‘이게’는 this예요." },
        tip: { en: "What do you call this?", why: "‘이걸 뭐라고 불러?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "뭐가 문제야?", before: "What's the", after: "?", answers: ["problem"],
        wrong: { "problems": "the 뒤에 문제 하나라 problem이에요." },
        tip: { en: "What's wrong?", why: "‘무슨 일이야?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "저게 뭐야?", before: "What", after: "that?", answers: ["is"],
        wrong: { "are": "that 하나라 is를 써요.", "does": "‘~은 뭐야?’는 What is예요." },
        tip: { en: "What's that thing?", why: "thing은 ‘물건’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "비밀번호가 뭐야?", before: "What's the", after: "?", answers: ["password"],
        wrong: { "pass word": "‘비밀번호’는 password예요. 한 단어예요." },
        tip: { en: "What's the Wi-Fi password?", why: "‘와이파이 비번 뭐야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "오늘 날짜가 뭐야?", before: "", after: "the date today?", answers: ["What's"],
        wrong: { "when is": "날짜를 물을 때는 What's the date예요." },
        tip: { en: "What day is it?", why: "‘무슨 요일이야?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그 냄새 뭐야?", answers: ["What's that smell?", "What is that smell?"],
        wrong: { "what is that smells": "that 뒤에는 명사 smell을 써요.", "what are that smell": "smell 하나라 is를 써요." },
        tip: { en: "Something's burning.", why: "‘뭐가 타고 있어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "계획이 뭐야?", answers: ["What's the plan?", "What is the plan?"],
        wrong: { "what is plan": "plan 앞에 the를 붙여요." },
        tip: { en: "What are we doing?", why: "‘우리 뭐 해?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그 소리 뭐야?", answers: ["What's that sound?", "What's that noise?", "What is that sound?"],
        wrong: { "what is that sounds": "that 뒤에는 명사 sound를 써요." },
        tip: { en: "Did you hear that?", why: "‘저거 들었어?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "차이가 뭐야?", answers: ["What's the difference?", "What is the difference?"],
        wrong: { "what is the different": "‘차이’는 명사 difference예요." },
        tip: { en: "Are they the same?", why: "‘그거 똑같아?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그게 뭐야?", answers: ["What's that?", "What is that?", "What's it?"],
        ctx: { lead: "this 대신 ‘그거(that)’로 바꿔 보세요.", en: "What is this?" },
        wrong: { "what are that": "that 하나라 is를 써요." },
        tip: { en: "Show me.", why: "‘보여 줘’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "무슨 일이야?", answers: ["What's wrong?", "What's the matter?", "What is wrong?", "What's the problem?"],
        dialog: { a: "I'm not feeling well.", aKo: "나 몸이 좀 안 좋아." },
        wrong: { "what is wrongs": "‘무슨 일이야?’는 What's wrong이에요." },
        tip: { en: "Are you okay?", why: "‘괜찮아?’라는 말이에요." } }
    ]
  };
})(window.EP);
