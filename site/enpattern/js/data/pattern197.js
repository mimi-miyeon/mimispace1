/* 세션 197. What is your ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[197] = {
    no: 197, form: "What is your ~?", stem: "What is your/What's your", meaning: "당신의 ~은 뭐예요?",
    hint: "What is your + 명사?",
    intro: {
      blocks: [["What is", "무엇이니"], ["your ~?", "너의 ~는"]],
      lines: [
        "What is your + 명사?는 ‘네 ~은 뭐야?’예요. 정보를 물을 때 써요.",
        "말할 때는 What's your ~?로 줄여요.",
        "이름, 번호, 주소, 직업 등을 물어요."
      ],
      examples: [
        { en: "What's your name?", ko: "이름이 뭐예요?" },
        { en: "What's your phone number?", ko: "전화번호가 뭐예요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이름이 뭐예요?", before: "What's your", after: "?", answers: ["name"],
        wrong: { "names": "이름 하나라 name이에요." },
        tip: { en: "May I have your name?", why: "‘성함을 여쭤봐도 될까요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "전화번호가 뭐예요?", before: "What's your phone", after: "?", answers: ["number"],
        wrong: { "numbers": "번호 하나라 number예요." },
        tip: { en: "Can I get your number?", why: "‘번호 줄래요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "직업이 뭐예요?", before: "What's", after: "job?", answers: ["your"],
        wrong: { "you": "‘너의’는 your예요." },
        tip: { en: "What do you do?", why: "‘무슨 일 해요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "주소가 뭐예요?", before: "What is your", after: "?", answers: ["address"],
        wrong: { "adress": "‘주소’는 address예요. d가 두 개예요." },
        tip: { en: "Where do you live?", why: "‘어디 살아요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "계획이 뭐야?", before: "What's your", after: "?", answers: ["plan"],
        wrong: { "planning": "‘계획’은 plan이에요." },
        tip: { en: "What are you going to do?", why: "‘뭐 할 거야?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이메일 주소가 뭐예요?", answers: ["What's your email address?", "What's your email?", "What is your email address?"],
        wrong: { "what is you email address": "‘너의’는 your예요.", "what is your e mail adress": "‘주소’는 address예요." },
        tip: { en: "Can I get your email?", why: "‘이메일 줄래요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "비결이 뭐야?", answers: ["What's your secret?", "What is your secret?"],
        wrong: { "what is your secrets": "비결 하나라 secret이에요." },
        tip: { en: "How do you do it?", why: "‘어떻게 하는 거야?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "혈액형이 뭐야?", answers: ["What's your blood type?", "What is your blood type?"],
        wrong: { "what is your blood types": "혈액형 하나라 blood type이에요." },
        tip: { en: "I'm type A.", why: "‘나 A형이야’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "의견이 뭐야?", answers: ["What's your opinion?", "What is your opinion?"],
        wrong: { "what is your opinions": "의견 하나라 opinion이에요." },
        tip: { en: "What do you think?", why: "‘어떻게 생각해?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "목표가 뭐야?", answers: ["What's your goal?", "What is your goal?"],
        ctx: { lead: "name 대신 ‘목표(goal)’로 바꿔 보세요.", en: "What's your name?" },
        wrong: { "what is your goals": "목표 하나라 goal이에요." },
        tip: { en: "What are you aiming for?", why: "aim for는 ‘목표로 하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "반가워요! 이름이 뭐예요?", answers: ["Nice to meet you! What's your name?", "What's your name?", "Nice to meet you! What is your name?"],
        dialog: { a: "Hi, I'm new here.", aKo: "안녕하세요, 저 여기 처음 왔어요." },
        wrong: { "nice to meet you what is you name": "‘너의’는 your예요." },
        tip: { en: "Nice to meet you!", why: "‘만나서 반가워요!’라는 말이에요." } }
    ]
  };
})(window.EP);
