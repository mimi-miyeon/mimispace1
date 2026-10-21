/* 세션 51. Are you ~? (명사) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[51] = {
    no: 51, form: "Are you ~? (명사)", stem: "Are you", meaning: "당신은 ~예요?",
    hint: "Are you + 명사?",
    intro: {
      blocks: [["Are you", "너는 ~이니?"], ["~", "명사"]],
      lines: [
        "Are you + 명사?는 ‘너 ~이야?’라고 누구인지, 무엇인지 묻는 말이에요.",
        "You are a student.에서 Are를 앞으로 보내면 묻는 말이 돼요.",
        "명사 하나 앞에는 a / an을 붙여요. (a student, an artist)"
      ],
      examples: [
        { en: "Are you a student?", ko: "너 학생이야?" },
        { en: "Are you Jun's brother?", ko: "너 준이 형이야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 간호사야?", before: "Are you a", after: "?", answers: ["nurse"],
        wrong: { "nurses": "a는 ‘하나’라서 s를 붙이지 않아요." },
        tip: { en: "Do you work as a nurse?", why: "work as는 ‘~로 일하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 미나 친구야?", before: "Are you Mina's", after: "?", answers: ["friend"],
        wrong: { "friends": "‘친구 한 명’이라 friend예요." },
        tip: { en: "How do you know Mina?", why: "‘미나랑 어떻게 알아?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 화가야?", before: "Are you", after: "artist?", answers: ["an"],
        wrong: { "a": "artist는 모음 소리로 시작해서 a가 아니라 an을 써요." },
        tip: { en: "Do you paint?", why: "‘그림 그려?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 이 가게 주인이야?", before: "", after: "you the owner of this store?", answers: ["Are"],
        wrong: { "do": "‘~이야?’는 Do가 아니라 Are로 물어요.", "is": "you와는 is가 아니라 are를 써요." },
        tip: { en: "Do you own this store?", why: "own은 ‘소유하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 요리사야?", before: "Are", after: "a chef?", answers: ["you"],
        wrong: { "your": "your는 ‘너의’예요. ‘너는’은 you예요." },
        tip: { en: "Do you cook for a living?", why: "for a living은 ‘직업으로’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 대학생이야?", answers: ["Are you a college student?", "Are you a university student?"],
        wrong: { "are you college student": "student는 셀 수 있는 말이라 a를 붙여요.", "you are a college student": "묻는 말은 Are를 앞으로 보내요.", "do you a college student": "‘~이야?’는 Do가 아니라 Are로 물어요." },
        tip: { en: "Are you in college?", why: "in college는 ‘대학에 다니는’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 외동이야?", answers: ["Are you an only child?"],
        wrong: { "are you a only child": "only는 모음 소리로 시작해서 a가 아니라 an을 써요.", "are you only child": "child는 셀 수 있는 말이라 an을 붙여요." },
        tip: { en: "Do you have any siblings?", why: "siblings는 ‘형제자매’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 아침형 인간이야?", answers: ["Are you a morning person?"],
        wrong: { "are you morning person": "person은 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Do you like getting up early?", why: "‘일찍 일어나는 거 좋아해?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 그 사람 남자친구야?", answers: ["Are you her boyfriend?"],
        wrong: { "are you she boyfriend": "‘그녀의’는 she가 아니라 her예요." },
        tip: { en: "Are you two dating?", why: "date는 ‘사귀다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 의사야?", answers: ["Are you a doctor?"],
        ctx: { lead: "a student 대신 ‘의사(a doctor)’로 바꿔 보세요.", en: "Are you a student?" },
        wrong: { "are you doctor": "doctor는 셀 수 있는 말이라 a를 붙여요." },
        tip: { en: "Do you work in a hospital?", why: "‘병원에서 일해?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아, 새로 온 디자이너야?", answers: ["Oh, are you the new designer?", "Are you the new designer?"],
        dialog: { a: "Hi, I'm here for the meeting.", aKo: "안녕하세요, 회의 때문에 왔어요." },
        wrong: { "oh are you new designer": "‘그 새 디자이너’는 the new designer예요." },
        tip: { en: "Oh, you must be the new designer.", why: "must be는 ‘분명 ~겠다’예요." } }
    ]
  };
})(window.EP);
