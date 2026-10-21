/* 세션 10. I was wondering if ~. (‘~인지 궁금했어’로 쓴다. 정중한 부탁은 세션 144에서) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[10] = {
    no: 10, form: "I was wondering if ~.", stem: "I was wondering if", meaning: "나는 ~인지 궁금해 하고 있었어요.",
    hint: "I was wondering if + 주어 + 동사",
    intro: {
      blocks: [["I was wondering", "나는 궁금했다"], ["if", "~인지"], ["~", "주어 + 동사"]],
      lines: [
        "I was wondering if ~는 ‘~인지 궁금했어’예요. 바로 묻는 것보다 부드러워요.",
        "if 뒤에는 묻는 순서가 아니라 ‘주어 + 동사’ 순서로 써요. (if you are)",
        "지난 일처럼 말하지만, 지금 궁금한 것을 물을 때도 써요."
      ],
      examples: [
        { en: "I was wondering if it would rain.", ko: "비가 올지 궁금했어." },
        { en: "I was wondering if you liked it.", ko: "네가 그거 마음에 들어 했는지 궁금했어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 시간 있는지 궁금했어.", before: "I was wondering", after: "you were free.", answers: ["if", "whether"],
        wrong: { "that": "‘~인지’는 that이 아니라 if를 써요.", "what": "‘~인지 아닌지’는 if를 써요. what은 ‘무엇’이에요." },
        tip: { en: "Are you free by any chance?", why: "by any chance는 ‘혹시’라는 뜻이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그게 맞는지 궁금했어.", before: "I was", after: "if that was right.", answers: ["wondering"],
        wrong: { "wonder": "was 뒤에는 wondering을 써요. (was wondering)", "wondered": "was 뒤에는 wondering을 써요. (was wondering)" },
        tip: { en: "I wasn't sure if that was right.", why: "‘맞는지 확실하지 않았어’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "네가 나 도와줄 수 있는지 궁금했어.", before: "I was wondering if you", after: "help me.", answers: ["could", "can"],
        wrong: { "will": "‘도와줄 수 있는지’는 can이나 could로 써요." },
        tip: { en: "Could you help me?", why: "직접 부탁할 때는 이렇게 짧게 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그 가게 문 열었는지 궁금했어.", before: "I was wondering", after: "the store was open.", answers: ["if", "whether"],
        wrong: { "that": "‘~인지’는 that이 아니라 if를 써요." },
        tip: { en: "Is the store open?", why: "바로 물을 때는 Is를 앞으로 보내요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 내 메시지 받았는지 궁금했어.", before: "I was wondering if you", after: "my message.", answers: ["got", "received"],
        wrong: { "get": "받은 건 지난 일이라 과거형 got을 써요." },
        tip: { en: "Did you get my message?", why: "바로 물을 때는 Did로 시작해요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 바쁜지 궁금했어.", answers: ["I was wondering if you were busy.", "I was wondering if you are busy."],
        wrong: { "i was wondering if were you busy": "if 뒤에는 묻는 순서가 아니라 you were 순서예요.", "i was wondering you were busy": "‘~인지’를 말하려면 if를 넣어요." },
        tip: { en: "Are you busy right now?", why: "바로 물을 때는 Are를 앞으로 보내요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그게 사실인지 궁금했어.", answers: ["I was wondering if it was true.", "I was wondering if that was true.", "I was wondering if it is true.", "I was wondering if that is true."],
        wrong: { "i was wondering if was it true": "if 뒤에는 묻는 순서가 아니라 it was 순서예요.", "i was wondering if was that true": "if 뒤에는 묻는 순서가 아니라 that was 순서예요." },
        tip: { en: "Is that really true?", why: "바로 물을 때는 Is를 앞으로 보내요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 내일 오는지 궁금했어.",
        answers: ["I was wondering if you were coming tomorrow.", "I was wondering if you are coming tomorrow.", "I was wondering if you would come tomorrow.", "I was wondering if you will come tomorrow."],
        wrong: { "i was wondering if are you coming tomorrow": "if 뒤에는 묻는 순서가 아니라 you are 순서예요." },
        tip: { en: "Are you coming tomorrow?", why: "바로 물을 때는 Are를 앞으로 보내요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "네가 나 기억하는지 궁금했어.", answers: ["I was wondering if you remembered me.", "I was wondering if you remember me."],
        wrong: { "i was wondering if do you remember me": "if 뒤에는 do 없이 you remember 순서로 써요." },
        tip: { en: "Do you remember me?", why: "바로 물을 때는 Do로 시작해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 괜찮은지 궁금했어.",
        answers: ["I was wondering if you were okay.", "I was wondering if you are okay.", "I was wondering if you were OK.", "I was wondering if you are OK.", "I was wondering if you were all right.", "I was wondering if you are all right."],
        ctx: { lead: "바로 묻는 말을 부드럽게 바꿔 보세요.", en: "Are you okay?" },
        wrong: { "i was wondering if are you okay": "if 뒤에는 묻는 순서가 아니라 you are 순서예요." },
        tip: { en: "I just wanted to check on you.", why: "check on은 ‘괜찮은지 살피다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "이번 주말에 너 시간 있는지 궁금했어.",
        answers: ["I was wondering if you were free this weekend.", "I was wondering if you are free this weekend.", "I was wondering if you had time this weekend.", "I was wondering if you have time this weekend."],
        dialog: { a: "Hey, what's up?", aKo: "어, 무슨 일이야?" },
        wrong: { "i was wondering if are you free this weekend": "if 뒤에는 묻는 순서가 아니라 you are 순서예요." },
        tip: { en: "Are you free this weekend?", why: "바로 물을 때는 Are를 앞으로 보내요." } }
    ]
  };
})(window.EP);
