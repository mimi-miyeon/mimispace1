/* 포르투갈어(유럽) 세션 86. Queria marcar ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[86] = {
    no: 86, form: "Queria marcar ~.", stem: "Queria marcar/marcar", subject: "eu", meaning: "~을 예약하고 싶어요",
    hint: "Queria marcar + 명사",
    intro: {
      blocks: [["Queria", "~하고 싶은데요"], ["marcar", "(약속을) 잡다"], ["~", "무엇"]],
      lines: [
        "포르투갈에서는 진료·미용실·상담 같은 약속을 marcar로 잡아요: Queria marcar uma consulta.",
        "식당·호텔은 reservar도 써요: Queria reservar uma mesa.",
        "친구와 ‘약속을 정하다’도 marcar예요: Vamos marcar um café?(커피 약속 잡을까?)"
      ],
      examples: [
        { en: "Queria marcar uma consulta.", ko: "진료 예약하고 싶어요." },
        { en: "Vamos marcar um jantar?", ko: "저녁 약속 잡을까?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "머리 자르는 거 예약하고 싶어요.", before: "Queria", after: "um corte de cabelo.", answers: ["marcar"],
        wrong: { "reservar": "미용실·진료 약속은 보통 marcar예요." },
        tip: { en: "Queria cortar o cabelo.", why: "cortar o cabelo는 ‘머리를 자르다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "다음 주로 진료 예약하고 싶어요.", before: "Queria marcar uma", after: "para a próxima semana.", answers: ["consulta"],
        wrong: { "cita": "cita는 스페인어예요. 진료 예약은 consulta예요." },
        tip: { en: "Há vagas para a próxima semana?", why: "vagas는 ‘빈자리’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "커피 약속 잡을까?", before: "Vamos", after: "um café?", answers: ["marcar", "combinar"],
        wrong: { "tomar": "약속을 ‘잡다’는 marcar예요. tomar um café는 ‘커피 마시다’예요." },
        tip: { en: "Combinamos um café?", why: "combinar는 ‘약속하다, 정하다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "몇 시로 예약하고 싶으세요?", before: "Para que horas quer", after: "?", answers: ["marcar"],
        wrong: { "marca": "quer 뒤에는 동사원형을 써요: marcar." },
        tip: { en: "A que horas lhe dá jeito?", why: "dar jeito는 ‘편하다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "예약을 바꾸고 싶어요.", before: "Queria mudar a", after: ".", answers: ["marcação", "reserva"],
        wrong: { "cita": "cita는 스페인어예요. 포르투갈어는 marcação예요." },
        tip: { en: "Posso mudar a hora?", why: "‘시간 바꿀 수 있어요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "치과 예약하고 싶어요.", answers: ["Queria marcar uma consulta no dentista.", "Queria marcar uma consulta no dentista, por favor."],
        wrong: { "queria marcar uma cita no dentista": "cita는 스페인어예요. 포르투갈어는 consulta예요." },
        tip: { en: "Preciso de ir ao dentista.", why: "‘치과 가야 해요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "금요일로 예약할 수 있어요?", answers: ["Posso marcar para sexta-feira?", "Posso marcar para sexta?"],
        wrong: { "posso marcar para viernes": "viernes는 스페인어예요. 포르투갈어는 sexta-feira예요." },
        tip: { en: "Sexta-feira dá?", why: "dar는 ‘가능하다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "두 명 자리 예약하고 싶어요.", answers: ["Queria marcar uma mesa para dois."], alts: ["Queria reservar uma mesa para dois."],
        wrong: { "queria marcar uma mesa para dos": "dos는 스페인어예요. 포르투갈어는 dois예요." },
        tip: { en: "Têm mesa para dois?", why: "‘두 명 자리 있어요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "커피 약속 잡자.", answers: ["Vamos marcar um café."], subject: "",
        wrong: { "vamos marcamos um café": "vamos 뒤에는 동사원형을 써요: marcar." },
        tip: { en: "Temos de combinar um café.", why: "combinar는 ‘약속하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "미팅 잡고 싶어요.", answers: ["Queria marcar uma reunião."],
        ctx: { lead: "consulta 대신 ‘미팅(reunião)’을 넣어 보세요.", en: "Queria marcar uma consulta." },
        wrong: { "queria marcar um reunião": "reunião는 여성 명사라 uma예요." },
        tip: { en: "Podemos marcar uma reunião?", why: "‘미팅 잡을 수 있을까요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "안녕하세요, 진료 예약하고 싶어요.", answers: ["Bom dia, queria marcar uma consulta."], alts: ["Bom dia, queria fazer uma marcação."],
        dialog: { a: "Clínica Dentária, bom dia.", aKo: "치과입니다, 안녕하세요." },
        wrong: { "bom dia queria marcar una consulta": "una는 스페인어예요. 포르투갈어는 uma예요." },
        tip: { en: "Bom dia, era para marcar uma consulta.", why: "era para ~는 전화로 용건을 말할 때 써요." } }
    ]
  };
})(window.EP);
