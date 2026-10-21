/* 세션 8. Were you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[8] = {
    no: 8, form: "Were you ~?", stem: "Were you", meaning: "당신은 ~였나요?",
    hint: "Were you + 형용사/명사?",
    intro: {
      blocks: [["Were", "~였니?"], ["you", "너는"], ["~", "어떤 상태"]],
      lines: [
        "Were you ~?는 ‘너 ~였어? / ~했어?’라고 지난 상태를 묻는 말이에요.",
        "You were busy.에서 Were를 앞으로 보내면 묻는 말이 돼요.",
        "you와는 was가 아니라 were를 써요."
      ],
      examples: [
        { en: "Were you hungry?", ko: "너 배고팠어?" },
        { en: "Were you at home?", ko: "너 집에 있었어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 어제 아팠어?", before: "", after: "you sick yesterday?", answers: ["Were"],
        wrong: { "was": "you와는 was가 아니라 were를 써요.", "did": "‘아팠어?’는 상태라서 Did가 아니라 Were로 물어요.", "are": "어제 일이라 과거형 Were로 물어요." },
        tip: { en: "Were you feeling sick yesterday?", why: "feeling을 넣으면 ‘몸이 안 좋았어?’ 느낌이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 화났었어?", before: "Were you", after: "?", answers: ["angry", "mad"],
        wrong: { "anger": "anger는 ‘화’라는 명사예요. ‘화난’은 angry예요." },
        tip: { en: "Were you upset?", why: "upset은 ‘속상한, 언짢은’이에요. 조금 부드러워요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 그때 학생이었어?", before: "Were", after: "a student then?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "Were you still in school then?", why: "in school은 ‘학교에 다니는’이라는 뜻이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 어제 집에 있었어?", before: "", after: "you at home yesterday?", answers: ["Were"],
        wrong: { "was": "you와는 was가 아니라 were를 써요.", "did": "‘집에 있었어?’는 Did가 아니라 Were로 물어요.", "are": "어제 일이라 과거형 Were로 물어요." },
        tip: { en: "Did you stay home yesterday?", why: "stay home은 ‘집에 있다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 놀랐어?", before: "Were you", after: "?", answers: ["surprised"],
        wrong: { "surprising": "surprising은 ‘놀라게 하는(것)’이에요. 네가 놀랐으면 surprised예요." },
        tip: { en: "Did that surprise you?", why: "‘그게 너를 놀라게 했어?’처럼 물어도 돼요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 피곤했어?", answers: ["Were you tired?"],
        wrong: { "was you tired": "you와는 was가 아니라 were를 써요.", "did you tired": "tired는 상태라서 Did가 아니라 Were로 물어요.", "you were tired": "묻는 말은 Were를 앞으로 보내요." },
        tip: { en: "Did you get tired?", why: "‘피곤해졌어?’처럼 get을 써도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 그 회의에 있었어?", answers: ["Were you at the meeting?", "Were you in the meeting?", "Were you at that meeting?"],
        wrong: { "did you at the meeting": "‘~에 있었어?’는 Did가 아니라 Were로 물어요.", "was you at the meeting": "you와는 was가 아니라 were를 써요." },
        tip: { en: "Did you go to the meeting?", why: "‘회의에 갔어?’로 물어도 같은 뜻이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 무서웠어?", answers: ["Were you scared?", "Were you afraid?"],
        wrong: { "were you scary": "scary는 ‘무서운(것)’이에요. 네가 무서웠으면 scared예요." },
        tip: { en: "Did it scare you?", why: "‘그게 너를 무섭게 했어?’처럼 물어도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 어렸을 때 키 컸어?",
        answers: ["Were you tall as a kid?", "Were you tall as a child?", "Were you tall when you were a kid?", "Were you tall when you were a child?", "Were you tall when you were young?", "Were you tall when you were little?"],
        wrong: { "was you tall as a kid": "you와는 was가 아니라 were를 써요." },
        tip: { en: "Were you a tall kid?", why: "‘키 큰 아이였어?’처럼 명사로 물어도 돼요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 어제 바빴어?", answers: ["Were you busy yesterday?"],
        ctx: { lead: "묻는 말로 바꿔 보세요.", en: "You were busy yesterday." },
        wrong: { "you were busy yesterday": "묻는 말은 Were를 앞으로 보내요.", "did you busy yesterday": "busy는 상태라서 Did가 아니라 Were로 물어요." },
        tip: { en: "Did you have a busy day yesterday?", why: "‘어제 바쁜 하루였어?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "와, 너 신났었어?", answers: ["Wow, were you excited?", "Were you excited?"],
        dialog: { a: "I went to a concert last night.", aKo: "나 어젯밤에 콘서트 갔어." },
        wrong: { "wow were you exciting": "exciting은 ‘신나게 하는(것)’이에요. 네가 신났으면 excited예요." },
        tip: { en: "Wow, did you have fun?", why: "have fun은 ‘재밌게 놀다’예요." } }
    ]
  };
})(window.EP);
