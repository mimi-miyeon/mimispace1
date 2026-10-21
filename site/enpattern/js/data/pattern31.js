/* 세션 31. I'm sorry for/about ~. (핵심 부분 두 형태) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[31] = {
    no: 31, form: "I'm sorry for/about ~.", stem: "I'm sorry for/I'm sorry about", meaning: "~해서 미안해요.",
    hint: "I'm sorry for + 명사/동사-ing",
    intro: {
      blocks: [["I'm sorry", "미안해"], ["for / about", "~에 대해"], ["~", "명사 / 동사-ing"]],
      lines: [
        "I'm sorry for ~는 ‘~해서 미안해’예요. 미안한 일을 for 뒤에 붙여요.",
        "for 뒤에는 명사(the mess)나 동사-ing(being late)를 써요.",
        "about도 비슷하게 써요. 일어난 일 자체를 말할 때 자주 써요."
      ],
      examples: [
        { en: "I'm sorry for being late.", ko: "늦어서 미안해." },
        { en: "I'm sorry about yesterday.", ko: "어제 일은 미안해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "기다리게 해서 미안해.", before: "I'm sorry", after: "making you wait.", answers: ["for"],
        wrong: { "to": "‘~해서 미안해’는 sorry for + 동사-ing예요.", "that": "that 뒤에는 ‘주어 + 동사’가 와요. 여기는 for예요." },
        tip: { en: "Thanks for waiting.", why: "‘기다려 줘서 고마워’로 바꿔 말해도 좋아요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "소리 질러서 미안해.", before: "I'm sorry for", after: ".", answers: ["yelling", "shouting"],
        wrong: { "yell": "for 뒤에는 동사에 ing를 붙여요. yelling이에요.", "shout": "for 뒤에는 동사에 ing를 붙여요. shouting이에요." },
        tip: { en: "I shouldn't have yelled.", why: "‘소리 지르지 말았어야 했는데’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어질러 놔서 미안해.", before: "I'm sorry for the", after: ".", answers: ["mess"],
        wrong: { "messy": "messy는 ‘지저분한’이에요. ‘어질러 놓은 것’은 mess예요." },
        tip: { en: "Sorry about the mess.", why: "I'm을 빼고 Sorry만 써도 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "말 안 해서 미안해.", before: "I'm sorry for not", after: "you.", answers: ["telling"],
        wrong: { "tell": "for not 뒤에도 동사에 ing를 붙여요. telling이에요." },
        tip: { en: "I should have told you.", why: "‘말했어야 했는데’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그 일은 미안해.", before: "I'm", after: "about that.", answers: ["sorry"],
        wrong: { "sad": "sad는 ‘슬픈’이에요. ‘미안한’은 sorry예요." },
        tip: { en: "My bad.", why: "‘내 잘못이야’라는 가벼운 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "실수해서 미안해.", answers: ["I'm sorry for my mistake.", "I'm sorry for making a mistake.", "I'm sorry for the mistake.", "I'm sorry about the mistake.", "I'm sorry about my mistake."],
        wrong: { "i am sorry for make a mistake": "for 뒤에는 동사에 ing를 붙여요. making이에요.", "i am sorry to make a mistake": "이미 한 일에 미안할 때는 sorry for + 동사-ing예요." },
        tip: { en: "My mistake.", why: "‘내 실수야’라는 짧은 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "답장 늦어서 미안해.", answers: ["I'm sorry for the late reply.", "I'm sorry for replying late.", "I'm sorry for my late reply.", "I'm sorry for the late response."],
        wrong: { "i am sorry for reply late": "for 뒤에는 동사에 ing를 붙여요. replying이에요." },
        tip: { en: "Sorry for the slow reply.", why: "slow reply도 ‘늦은 답장’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그렇게 말해서 미안해.", answers: ["I'm sorry for saying that.", "I'm sorry about saying that."],
        wrong: { "i am sorry for say that": "for 뒤에는 동사에 ing를 붙여요. saying이에요.", "i am sorry for telling that": "‘그런 말을 하다’는 tell이 아니라 say that이에요." },
        tip: { en: "I didn't mean to say that.", why: "‘그렇게 말하려던 건 아니었어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "방해해서 미안해.", answers: ["I'm sorry for bothering you.", "I'm sorry for interrupting.", "I'm sorry for interrupting you.", "I'm sorry for disturbing you."],
        wrong: { "i am sorry for bother you": "for 뒤에는 동사에 ing를 붙여요. bothering이에요." },
        tip: { en: "Sorry to bother you.", why: "sorry to + 동사도 자주 써요. 세션 34에서 배워요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "시끄럽게 해서 미안해.", answers: ["I'm sorry for the noise.", "I'm sorry about the noise.", "I'm sorry for being noisy.", "I'm sorry for being loud."],
        ctx: { lead: "being late 대신 ‘소음(the noise)’으로 바꿔 보세요.", en: "I'm sorry for being late." },
        wrong: { "i am sorry for noisy": "noisy는 ‘시끄러운’이에요. for 뒤에는 the noise나 being noisy를 써요." },
        tip: { en: "Sorry about the noise.", why: "I'm을 빼고 Sorry만 써도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "잊어버려서 미안해.", answers: ["I'm sorry for forgetting.", "I'm sorry for forgetting your birthday."],
        alts: ["I'm so sorry for forgetting.", "I'm really sorry for forgetting.", "I'm so sorry for forgetting your birthday.", "I'm really sorry for forgetting your birthday."],
        dialog: { a: "You forgot my birthday!", aKo: "너 내 생일 잊어버렸지!" },
        wrong: { "i am sorry for forget": "for 뒤에는 동사에 ing를 붙여요. forgetting이에요.", "i am sorry for forgeting": "forget은 t를 한 번 더 써서 forgetting이에요." },
        tip: { en: "I can't believe I forgot.", why: "‘내가 잊다니 믿을 수가 없어’라는 말이에요." } }
    ]
  };
})(window.EP);
