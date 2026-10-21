/* 세션 52. Are you ~? (형용사) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[52] = {
    no: 52, form: "Are you ~? (형용사)", stem: "Are you", meaning: "당신은 ~해요?",
    hint: "Are you + 형용사?",
    intro: {
      blocks: [["Are you", "너는 ~하니?"], ["~", "형용사"]],
      lines: [
        "Are you + 형용사?는 ‘너 ~해?’라고 기분이나 상태를 묻는 말이에요.",
        "형용사 앞에는 a를 붙이지 않아요. (Are you tired?)",
        "Do you tired?가 아니라 Are you tired?예요."
      ],
      examples: [
        { en: "Are you okay?", ko: "너 괜찮아?" },
        { en: "Are you hungry?", ko: "너 배고파?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 피곤해?", before: "", after: "you tired?", answers: ["Are"],
        wrong: { "do": "형용사로 물을 때는 Do가 아니라 Are로 시작해요.", "is": "you와는 is가 아니라 are를 써요." },
        tip: { en: "You look tired.", why: "‘피곤해 보여’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 준비됐어?", before: "Are you", after: "?", answers: ["ready"],
        wrong: { "prepare": "prepare는 ‘준비하다’라는 동사예요. ‘준비된’은 ready예요." },
        tip: { en: "Ready to go?", why: "Are you를 빼고 짧게 물어도 돼요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 화났어?", before: "Are", after: "angry?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "Are you mad at me?", why: "mad at은 ‘~에게 화난’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 확실해?", before: "Are you", after: "?", answers: ["sure"],
        wrong: { "surely": "‘확실한’은 surely가 아니라 sure예요." },
        tip: { en: "Are you positive?", why: "positive도 ‘확신하는’이라는 뜻이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 지금 바빠?", before: "Are you", after: "right now?", answers: ["busy"],
        wrong: { "business": "business는 ‘사업’이에요. ‘바쁜’은 busy예요." },
        tip: { en: "Do you have a minute?", why: "‘잠깐 시간 돼?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 무서워?", answers: ["Are you scared?", "Are you afraid?"],
        wrong: { "are you scary": "scary는 ‘무서운(것)’이에요. 네가 무서우면 scared예요.", "do you scared": "형용사로 물을 때는 Do가 아니라 Are로 시작해요." },
        tip: { en: "Does it scare you?", why: "‘그게 무섭니?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 오늘 밤에 한가해?", answers: ["Are you free tonight?"],
        wrong: { "do you free tonight": "형용사로 물을 때는 Do가 아니라 Are로 시작해요.", "you are free tonight": "묻는 말은 Are를 앞으로 보내요." },
        tip: { en: "Do you have plans tonight?", why: "‘오늘 밤 약속 있어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 아직 졸려?", answers: ["Are you still sleepy?", "Are you still tired?"],
        wrong: { "are you still sleep": "‘졸린’은 sleep이 아니라 sleepy예요." },
        tip: { en: "Still sleepy?", why: "Are you를 빼고 짧게 물어도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 그거에 관심 있어?", answers: ["Are you interested in that?", "Are you interested in it?"],
        wrong: { "are you interesting in that": "interesting은 ‘흥미로운’이에요. 네가 관심 있으면 interested예요.", "are you interested on that": "‘~에 관심 있는’은 interested in이에요." },
        tip: { en: "Does that interest you?", why: "interest는 ‘관심을 끌다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 긴장돼?", answers: ["Are you nervous?"],
        ctx: { lead: "okay 대신 ‘긴장한(nervous)’으로 바꿔 보세요.", en: "Are you okay?" },
        wrong: { "do you nervous": "형용사로 물을 때는 Do가 아니라 Are로 시작해요." },
        tip: { en: "Feeling nervous?", why: "Are you를 빼고 짧게 물어도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "진짜? 너 괜찮아?", answers: ["Really? Are you okay?", "Really? Are you all right?", "Really? Are you OK?"],
        dialog: { a: "I lost my wallet.", aKo: "나 지갑 잃어버렸어." },
        wrong: { "really do you okay": "‘괜찮아?’는 Do가 아니라 Are로 물어요." },
        tip: { en: "Oh no! What happened?", why: "‘이런! 어떻게 된 거야?’라는 말이에요." } }
    ]
  };
})(window.EP);
