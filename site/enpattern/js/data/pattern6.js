/* 세션 6. I was ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[6] = {
    no: 6, form: "I was ~.", stem: "I was", meaning: "나는 ~였어요.",
    hint: "I was + 형용사/명사",
    intro: {
      blocks: [["I", "나는"], ["was", "~였다, ~했다(상태)"], ["~", "어떤 상태"]],
      lines: [
        "was는 am의 과거형이에요. 지난 상태를 ‘~였어 / ~했어’라고 말해요.",
        "뒤에 tired 같은 형용사나 a student 같은 명사를 붙여요.",
        "I 뒤에는 was예요. were는 you, we, they와 써요."
      ],
      examples: [
        { en: "I was tired.", ko: "나 피곤했어." },
        { en: "I was a student then.", ko: "나 그때 학생이었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 어제 바빴어.", before: "I", after: "busy yesterday.", answers: ["was"],
        wrong: { "am": "어제 일이라 과거형 was를 써요.", "were": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "I had a busy day yesterday.", why: "‘바쁜 하루를 보냈어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 너무 배고팠어.", before: "I", after: "so hungry.", answers: ["was"],
        wrong: { "am": "지난 일이라 과거형 was를 써요.", "were": "were는 you, we, they와 써요. I 뒤에는 was예요.", "did": "‘배고팠다’는 상태라서 did가 아니라 was를 써요." },
        tip: { en: "I was starving.", why: "starving은 ‘배고파 죽겠는’이라는 뜻이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 아까 정말 무서웠어.", before: "I was really", after: "earlier.", answers: ["scared"],
        wrong: { "scary": "scary는 ‘무서운(것)’이에요. 내가 무서웠으면 scared예요." },
        tip: { en: "I was really afraid earlier.", why: "afraid도 ‘무서워하는’이라는 뜻이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 어제 집에 있었어.", before: "I", after: "at home yesterday.", answers: ["was", "stayed"],
        wrong: { "am": "어제 일이라 과거형 was를 써요.", "were": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "I stayed home yesterday.", why: "stay home은 ‘집에 있다’예요. at 없이 써요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 지루했어.", before: "I was", after: ".", answers: ["bored"],
        wrong: { "boring": "boring은 ‘지루하게 만드는(것)’이에요. 내가 지루했으면 bored예요." },
        tip: { en: "It was boring.", why: "‘그게 지루했어’처럼 대상을 주어로 말해도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 늦었어.", answers: ["I was late."],
        wrong: { "i am late": "지난 일이라 과거형 was를 써요.", "i were late": "were는 you, we, they와 써요. I 뒤에는 was예요." },
        tip: { en: "I didn't make it on time.", why: "‘제시간에 못 갔어’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 어젯밤에 너무 졸렸어.",
        answers: ["I was so sleepy last night.", "I was very sleepy last night.", "I was really sleepy last night.", "Last night I was so sleepy.", "Last night I was very sleepy.", "Last night I was really sleepy."],
        wrong: { "i am so sleepy last night": "어젯밤 일이라 과거형 was를 써요." },
        tip: { en: "I could barely stay awake last night.", why: "‘깨어 있기도 힘들었어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그때 열 살이었어.", answers: ["I was ten then.", "I was ten years old then.", "I was ten at the time.", "I was ten years old at the time."],
        wrong: { "i am ten then": "지난 일이라 과거형 was를 써요.", "i was ten year old then": "둘 이상이면 years로 써요. ten years old예요." },
        tip: { en: "I was ten back then.", why: "back then은 ‘그 당시에’라는 뜻이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 정말 놀랐어.", answers: ["I was really surprised.", "I was so surprised.", "I was very surprised."],
        wrong: { "i was really surprising": "surprising은 ‘놀라게 하는(것)’이에요. 내가 놀랐으면 surprised예요." },
        tip: { en: "I couldn't believe it.", why: "‘믿을 수가 없었어’로 놀람을 말해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 어제 아팠어.", answers: ["I was sick yesterday.", "Yesterday I was sick."],
        ctx: { lead: "‘오늘’을 ‘어제’로 바꿔 보세요.", en: "I'm sick today." },
        wrong: { "i am sick yesterday": "어제 일이라 과거형 was를 써요.", "i was sick today": "‘어제’니까 today 대신 yesterday를 써요." },
        tip: { en: "I was ill yesterday.", why: "ill도 ‘아픈’이에요. 조금 더 격식 있는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "미안, 나 회의 중이었어.", answers: ["Sorry, I was in a meeting.", "I'm sorry, I was in a meeting."],
        dialog: { a: "Why didn't you answer my call?", aKo: "왜 내 전화 안 받았어?" },
        wrong: { "sorry i am in a meeting": "전화 온 건 지난 일이라 과거형 was를 써요.", "sorry i was in meeting": "meeting은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Sorry, I was busy.", why: "‘미안, 바빴어’로 짧게 말해도 돼요." } }
    ]
  };
})(window.EP);
