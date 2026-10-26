/* 포르투갈어(유럽) 세션 1. Sou ~.
   형식은 영어 세션(js/data/pattern1.js)과 같다. 문장 필드 이름도 en 그대로 (배우는 언어의 문장).
   subject: 정답 앞에 넣어도 되는 주어 (예: "eu" → Sou estudante.와 Eu sou estudante. 둘 다 정답). 주어 eu·nós·tu는 빼도 늘 정답
   wrong 키: 소문자, 문장부호 없음, 악센트·하이픈은 그대로 (js/grade-pt.js normalize)
   성별에 따라 형태가 바뀌는 말은 두 형태를 다 정답으로 둔다 (첫 번째가 대표 정답) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[1] = {
    no: 1, form: "Sou ~.", stem: "Sou", subject: "eu", meaning: "나는 ~예요 (이름·국적·직업)",
    hint: "Sou + 이름/국적/직업",
    intro: {
      blocks: [["Sou", "나는 ~이다 (ser)"], ["~", "이름·국적·직업"]],
      lines: [
        "Sou는 ser(~이다) 동사의 ‘나’ 형태예요. 주어 Eu는 보통 빼요.",
        "이름, 국적, 직업처럼 잘 바뀌지 않는 것을 말할 때 써요.",
        "직업 앞에는 um/uma를 붙이지 않아요: Sou professor."
      ],
      examples: [
        { en: "Sou estudante.", ko: "나는 학생이에요." },
        { en: "Sou de Seul.", ko: "나는 서울 출신이에요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나는 한국 사람이에요.", before: "", after: "coreano.", answers: ["Sou"],
        wrong: { "estou": "국적처럼 바뀌지 않는 것은 estar가 아니라 ser(sou)로 말해요.", "é": "é는 ‘그/그녀는 ~이다’예요. ‘나는’은 sou예요." },
        tip: { en: "Sou da Coreia do Sul.", why: "‘한국 출신이에요’라고 말할 수도 있어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나는 선생님이에요.", before: "Sou", after: ".", answers: ["professor", "professora"],
        wrong: { "um professor": "직업 앞에는 um/uma를 붙이지 않아요.", "uma professora": "직업 앞에는 um/uma를 붙이지 않아요." },
        tip: { en: "Trabalho como professor.", why: "‘선생님으로 일해요’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나는 리스본 출신이에요.", before: "Sou", after: "Lisboa.", answers: ["de"],
        wrong: { "da": "도시 이름 Lisboa 앞에는 관사가 없어서 그냥 de예요.", "em": "출신은 de로 말해요. em은 ‘~에(서)’예요." },
        tip: { en: "Nasci em Lisboa.", why: "‘리스본에서 태어났어요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나는 키가 커요.", before: "Sou", after: ".", answers: ["alto", "alta"],
        wrong: { "grande": "사람 키가 크다는 alto(alta)로 말해요. grande는 덩치·크기예요." },
        tip: { en: "Sou bastante alto.", why: "bastante는 ‘꽤’라는 뜻이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나는 포르투갈어 학생이에요.", before: "Sou estudante de", after: ".", answers: ["português"],
        wrong: { "portuguesa": "언어 이름은 남성형이에요: português." },
        tip: { en: "Estou a aprender português.", why: "‘포르투갈어를 배우고 있어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나는 학생이에요.", answers: ["Sou estudante."],
        wrong: { "sou um estudante": "직업·신분 앞에는 um/uma를 붙이지 않아요.", "estou estudante": "신분은 estar가 아니라 ser(sou)로 말해요." },
        tip: { en: "Ando na universidade.", why: "‘대학에 다녀요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나는 한국 출신이에요.", answers: ["Sou da Coreia.", "Sou da Coreia do Sul."],
        wrong: { "sou de coreia": "Coreia 앞에는 관사 a가 붙어서 de + a = da예요." },
        tip: { en: "Venho da Coreia.", why: "vir(오다)로 ‘한국에서 왔어요’라고 해요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나는 의사예요.", answers: ["Sou médico.", "Sou médica."],
        wrong: { "sou um médico": "직업 앞에는 um/uma를 붙이지 않아요.", "estou médico": "직업은 estar가 아니라 ser(sou)로 말해요." },
        tip: { en: "Trabalho num hospital.", why: "‘병원에서 일해요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나는 수줍음이 많아요.", answers: ["Sou tímido.", "Sou tímida."],
        wrong: { "estou tímido": "성격은 ser(sou)로 말해요. estou는 지금 잠깐의 상태예요." },
        tip: { en: "Sou um pouco tímido.", why: "um pouco는 ‘조금’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나는 서울 출신이에요.", answers: ["Sou de Seul."],
        ctx: { lead: "Lisboa 대신 ‘서울(Seul)’을 넣어 보세요.", en: "Sou de Lisboa." },
        wrong: { "sou da seul": "도시 이름 앞에는 보통 관사 없이 de를 써요." },
        tip: { en: "Nasci em Seul.", why: "‘서울에서 태어났어요’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "저는 민지예요.", answers: ["Sou a Minji.", "Sou Minji."],
        dialog: { a: "Como se chama?", aKo: "이름이 뭐예요?" },
        wrong: { "estou a minji": "이름은 estar가 아니라 ser(sou)로 말해요." },
        tip: { en: "Chamo-me Minji.", why: "‘제 이름은 민지예요’라는 말이에요." } }
    ]
  };
})(window.EP);
