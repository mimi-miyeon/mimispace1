/* 세션 230. The last thing I want to do is ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[230] = {
    no: 230, form: "The last thing I want to do is ~.", stem: "The last thing I want to do is/The last thing I want", meaning: "~은 정말 하고 싶지 않아요.",
    hint: "The last thing I want to do is + 동사",
    intro: {
      blocks: [["The last thing I want to do", "내가 가장 하기 싫은 일은"], ["is ~", "~하는 것이다"]],
      lines: [
        "The last thing I want to do is + 동사는 ‘~하는 건 정말 하기 싫어’예요. ‘가장 마지막으로 하고 싶은 일’이라는 뜻이에요.",
        "is 뒤에는 동사 원래 모양을 써요. (to를 붙이기도 해요)",
        "The last thing I want is ~(내가 제일 원하지 않는 건 ~야)도 써요."
      ],
      examples: [
        { en: "The last thing I want to do is fight.", ko: "싸우는 건 정말 하기 싫어." },
        { en: "The last thing I want to do is hurt you.", ko: "너한테 상처 주는 건 정말 싫어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "싸우는 건 정말 하기 싫어.", before: "The last thing I want to do is", after: ".", answers: ["fight"],
        wrong: { "fighting": "is 뒤에는 동사 원래 모양 fight를 써요." },
        tip: { en: "Let's talk calmly.", why: "‘차분하게 얘기하자’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너한테 상처 주는 건 정말 싫어.", before: "The last thing I want to do is", after: "you.", answers: ["hurt"],
        wrong: { "hurting": "is 뒤에는 동사 원래 모양 hurt를 써요." },
        tip: { en: "I care about you.", why: "‘널 아껴’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "일하는 건 정말 하기 싫어.", before: "The", after: "thing I want to do is work.", answers: ["last"],
        wrong: { "least": "‘가장 하기 싫은 일’은 the last thing이에요.", "first": "‘가장 하기 싫은 일’은 the last thing이에요." },
        tip: { en: "I need a break.", why: "‘쉬어야 해’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "늦는 건 정말 싫어.", before: "The last thing I want to do is be", after: ".", answers: ["late"],
        wrong: { "lately": "‘늦은’은 late예요." },
        tip: { en: "Let's leave now.", why: "‘지금 출발하자’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 실망시키는 건 정말 싫어.", before: "The last thing I want to do is let you", after: ".", answers: ["down"],
        wrong: { "done": "‘실망시키다’는 let down이에요." },
        tip: { en: "I won't let you down.", why: "‘실망시키지 않을게’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "다시 시작하는 건 정말 하기 싫어.", answers: ["The last thing I want to do is start over.", "The last thing I want to do is start again."],
        wrong: { "the last thing i want to do is starting over": "is 뒤에는 동사 원래 모양 start를 써요.", "the last thing i want to do start over": "do 뒤에 is가 필요해요." },
        tip: { en: "Let's save our work.", why: "‘작업 저장하자’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "요리하는 건 정말 하기 싫어.", answers: ["The last thing I want to do is cook."],
        wrong: { "the last thing i want to do is cooking": "is 뒤에는 동사 원래 모양 cook을 써요." },
        tip: { en: "Let's order in.", why: "order in은 ‘배달시키다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그에게 전화하는 건 정말 하기 싫어.", answers: ["The last thing I want to do is call him."],
        wrong: { "the last thing i want to do is calling him": "is 뒤에는 동사 원래 모양 call을 써요." },
        tip: { en: "I'll text him instead.", why: "‘대신 문자할게’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "그녀를 화나게 하는 건 정말 싫어.", answers: ["The last thing I want to do is make her angry.", "The last thing I want to do is upset her."],
        wrong: { "the last thing i want to do is make her angrily": "make her 뒤에는 형용사 angry를 써요." },
        tip: { en: "I'll be careful.", why: "‘조심할게’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "기다리는 건 정말 하기 싫어.", answers: ["The last thing I want to do is wait."],
        ctx: { lead: "fight 대신 ‘기다리다(wait)’로 바꿔 보세요.", en: "The last thing I want to do is fight." },
        wrong: { "the last thing i want to do is waiting": "is 뒤에는 동사 원래 모양 wait를 써요." },
        tip: { en: "I hate waiting.", why: "‘기다리는 거 싫어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 쇼핑은 정말 하기 싫어.", answers: ["No, the last thing I want to do is go shopping.", "The last thing I want to do is go shopping.", "No, the last thing I want to do is shop."],
        dialog: { a: "Want to go shopping after work?", aKo: "퇴근하고 쇼핑 갈래?" },
        wrong: { "no the last thing i want to do is going shopping": "is 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "No, I'm exhausted.", why: "‘아니, 나 녹초야’라는 말이에요." } }
    ]
  };
})(window.EP);
