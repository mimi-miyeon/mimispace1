/* 세션 7. I wasn't ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[7] = {
    no: 7, form: "I wasn't ~.", stem: "I wasn't", meaning: "나는 ~(이)가 아니었어요.",
    hint: "I wasn't + 형용사/명사",
    intro: {
      blocks: [["I", "나는"], ["wasn't", "~가 아니었다, ~하지 않았다"], ["~", "어떤 상태"]],
      lines: [
        "wasn't는 was not을 줄인 말이에요. ‘~가 아니었어 / ~하지 않았어’예요.",
        "뒤에 hungry 같은 형용사나 a student 같은 명사를 붙여요.",
        "상태를 부정할 때는 didn't가 아니라 wasn't예요."
      ],
      examples: [
        { en: "I wasn't sleepy.", ko: "나 안 졸렸어." },
        { en: "I wasn't there.", ko: "나 거기 없었어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 안 피곤했어.", before: "I", after: "tired.", answers: ["wasn't"],
        wrong: { "did not": "‘피곤하지 않았다’는 상태라서 didn't가 아니라 wasn't를 써요.", "was": "‘안 피곤했다’는 부정이라 was 뒤에 not을 붙여요.", "am not": "지난 일이라 과거형 wasn't를 써요.", "were not": "weren't는 you, we, they와 써요. I 뒤에는 wasn't예요." },
        tip: { en: "I felt fine.", why: "‘괜찮았어’로 짧게 말해도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 화 안 났어.", before: "I wasn't", after: ".", answers: ["angry", "mad"],
        wrong: { "anger": "anger는 ‘화’라는 명사예요. ‘화난’은 angry예요." },
        tip: { en: "I wasn't mad at all.", why: "at all을 붙이면 ‘전혀’라는 뜻이 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 어제 학교에 없었어.", before: "I", after: "at school yesterday.", answers: ["wasn't"],
        wrong: { "did not": "‘~에 있지 않았다’는 didn't가 아니라 wasn't로 말해요.", "am not": "어제 일이라 과거형 wasn't를 써요." },
        tip: { en: "I missed school yesterday.", why: "miss school은 ‘학교에 빠지다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 혼자가 아니었어.", before: "I wasn't", after: ".", answers: ["alone"],
        wrong: { "lonely": "lonely는 ‘외로운’이에요. ‘혼자인’은 alone이에요." },
        tip: { en: "I was with friends.", why: "누구랑 있었는지 말하는 표현이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 그때 준비가 안 돼 있었어.", before: "I wasn't", after: "then.", answers: ["ready"],
        wrong: { "prepare": "prepare는 ‘준비하다’라는 동사예요. ‘준비된’은 ready예요." },
        tip: { en: "I wasn't prepared then.", why: "prepared도 ‘준비된’이라는 뜻이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 배 안 고팠어.", answers: ["I wasn't hungry."],
        wrong: { "i did not hungry": "hungry는 상태라서 didn't가 아니라 wasn't를 써요.", "i am not hungry": "지난 일이라 과거형 wasn't를 써요." },
        tip: { en: "I was full.", why: "‘배불렀어’로 반대로 말해도 같은 뜻이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 그 파티에 없었어.", answers: ["I wasn't at the party.", "I wasn't at that party."],
        wrong: { "i did not at the party": "‘~에 있지 않았다’는 didn't가 아니라 wasn't로 말해요.", "i was not in the party": "파티에 있었다고 할 때는 in이 아니라 at을 써요." },
        tip: { en: "I didn't go to the party.", why: "‘파티에 안 갔어’로 말해도 같은 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 그거 확실하지 않았어.", answers: ["I wasn't sure about it.", "I wasn't sure about that.", "I wasn't sure."],
        wrong: { "i did not sure about it": "sure는 상태라서 didn't가 아니라 wasn't를 써요." },
        tip: { en: "I didn't know for sure.", why: "for sure는 ‘확실히’라는 뜻이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 그때 학생이 아니었어.", answers: ["I wasn't a student then.", "I wasn't a student at the time.", "I wasn't a student back then."],
        wrong: { "i was not student then": "student는 셀 수 있는 말이라 a를 붙여요.", "i did not a student then": "‘~가 아니었다’는 didn't가 아니라 wasn't로 말해요." },
        tip: { en: "I was already working then.", why: "‘그때 이미 일하고 있었어’로 바꾼 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 안 긴장했어.", answers: ["I wasn't nervous."],
        ctx: { lead: "‘~하지 않았어’로 바꿔 보세요.", en: "I was nervous." },
        wrong: { "i did not nervous": "nervous는 상태라서 didn't가 아니라 wasn't를 써요." },
        tip: { en: "I was calm.", why: "‘차분했어’로 반대로 말해도 같은 뜻이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니, 집에 없었어.", answers: ["No, I wasn't home.", "No, I wasn't at home."],
        dialog: { a: "Were you at home last night?", aKo: "어젯밤에 집에 있었어?" },
        wrong: { "no i did not home": "‘집에 있지 않았다’는 wasn't로 말해요.", "no i am not home": "어젯밤 일이라 과거형 wasn't를 써요." },
        tip: { en: "No, I was out.", why: "be out은 ‘밖에 나가 있다’라는 뜻이에요." } }
    ]
  };
})(window.EP);
