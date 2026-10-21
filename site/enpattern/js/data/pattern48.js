/* 세션 48. Are you going to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[48] = {
    no: 48, form: "Are you going to ~?", stem: "Are you going to", meaning: "당신은 ~할 거예요?",
    hint: "Are you going to + 동사?",
    intro: {
      blocks: [["Are you", "너는 ~이니?"], ["going to ~", "~할 거다"]],
      lines: [
        "Are you going to ~?는 ‘너 ~할 거야?’라고 계획을 묻는 말이에요.",
        "You're going to에서 Are를 앞으로 보내면 묻는 말이 돼요.",
        "Do you going to가 아니라 Are you going to예요."
      ],
      examples: [
        { en: "Are you going to come?", ko: "너 올 거야?" },
        { en: "Are you going to eat that?", ko: "너 그거 먹을 거야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 파티에 갈 거야?", before: "", after: "you going to go to the party?", answers: ["Are"],
        wrong: { "do": "going to로 물을 때는 Do가 아니라 Are로 시작해요.", "is": "you와는 is가 아니라 are를 써요." },
        tip: { en: "Are you coming to the party?", why: "가까운 계획은 Are you ~ing?로도 물어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 그거 살 거야?", before: "Are you going", after: "buy it?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "Are you getting it?", why: "get도 ‘사다’라는 뜻이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 오늘 밤에 공부할 거야?", before: "Are you", after: "to study tonight?", answers: ["going"],
        wrong: { "go": "‘~할 거야?’는 Are you going to예요." },
        tip: { en: "Do you plan to study tonight?", why: "plan to는 ‘~할 계획이다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 그 사람한테 말할 거야?", before: "Are you going to", after: "him?", answers: ["tell"],
        wrong: { "say": "‘~에게 말하다’는 say가 아니라 tell이에요.", "telling": "to 뒤에는 동사 원래 모양 tell을 써요." },
        tip: { en: "Will you tell him?", why: "Will you도 ‘~할 거야?’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 여기 오래 있을 거야?", before: "Are you going to", after: "here long?", answers: ["stay"],
        wrong: { "staying": "to 뒤에는 동사 원래 모양 stay를 써요." },
        tip: { en: "How long are you staying?", why: "‘얼마나 있을 거야?’라고 물어요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 그 일 받아들일 거야?", answers: ["Are you going to take the job?", "Are you going to accept the job?"],
        wrong: { "do you going to take the job": "going to로 물을 때는 Do가 아니라 Are로 시작해요.", "you are going to take the job": "묻는 말은 Are를 앞으로 보내요." },
        tip: { en: "Will you take the job?", why: "Will you도 ‘~할 거야?’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 내일 일찍 일어날 거야?", answers: ["Are you going to get up early tomorrow?", "Are you going to wake up early tomorrow?"],
        wrong: { "are you going to getting up early tomorrow": "to 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "Are you getting up early tomorrow?", why: "가까운 계획은 Are you ~ing?로도 물어요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 그 사람이랑 결혼할 거야?", answers: ["Are you going to marry him?", "Are you going to marry her?", "Are you going to get married to him?"],
        wrong: { "are you going to marry with him": "‘~와 결혼하다’는 marry 뒤에 with 없이 바로 사람을 써요." },
        tip: { en: "Are you two getting married?", why: "get married는 ‘결혼하다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 차 팔 거야?", answers: ["Are you going to sell your car?", "Are you going to sell the car?"],
        wrong: { "are you going to sell you car": "‘너의’는 you가 아니라 your예요." },
        tip: { en: "Are you selling your car?", why: "가까운 계획은 Are you ~ing?로도 물어요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 그 사람 도와줄 거야?", answers: ["Are you going to help him?"],
        ctx: { lead: "묻는 말로 바꿔 보세요.", en: "You're going to help him." },
        wrong: { "you are going to help him": "묻는 말은 Are를 앞으로 보내요.", "do you going to help him": "going to로 물을 때는 Do가 아니라 Are로 시작해요." },
        tip: { en: "Will you help him?", why: "Will you도 ‘~할 거야?’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 회사 그만둘 거야?", answers: ["Are you going to quit your job?", "Are you going to quit?"],
        dialog: { a: "I'm so tired of my job.", aKo: "나 내 일이 너무 지겨워." },
        wrong: { "are you going to quitting your job": "to 뒤에는 동사 원래 모양 quit을 써요.", "are you going to stop your job": "‘일을 그만두다’는 quit your job이에요." },
        tip: { en: "Are you thinking of quitting?", why: "think of ~ing는 ‘~할까 생각하다’예요." } }
    ]
  };
})(window.EP);
