/* 포르투갈어(유럽) 세션 2. Estou ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[2] = {
    no: 2, form: "Estou ~.", stem: "Estou", subject: "eu", meaning: "나는 (지금) ~해요 / ~에 있어요",
    hint: "Estou + 상태/장소",
    intro: {
      blocks: [["Estou", "나는 (지금) ~이다 (estar)"], ["~", "상태·장소"]],
      lines: [
        "Estou는 estar 동사의 ‘나’ 형태예요. 지금의 상태나 있는 곳을 말해요.",
        "피곤하다, 바쁘다처럼 바뀌는 상태는 sou가 아니라 estou예요.",
        "있는 곳은 em과 함께 써요: em + o = no, em + a = na."
      ],
      examples: [
        { en: "Estou cansado.", ko: "나 피곤해." },
        { en: "Estou em casa.", ko: "나 집에 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 지금 피곤해.", before: "", after: "cansado.", answers: ["Estou"],
        wrong: { "sou": "피곤한 건 지금의 상태라 ser(sou)가 아니라 estar(estou)예요.", "está": "está는 ‘그/그녀는’이에요. ‘나는’은 estou예요." },
        tip: { en: "Estou exausto.", why: "exausto는 ‘녹초가 된’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 집에 있어.", before: "Estou em", after: ".", answers: ["casa"],
        wrong: { "a casa": "‘집에’는 관사 없이 em casa라고 해요." },
        tip: { en: "Estou em casa agora.", why: "agora는 ‘지금’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 사무실에 있어.", before: "Estou", after: "escritório.", answers: ["no"],
        wrong: { "em": "escritório 앞에는 관사 o가 붙어서 em + o = no예요.", "na": "escritório는 남성 명사라 na가 아니라 no예요." },
        tip: { en: "Ainda estou no trabalho.", why: "ainda는 ‘아직’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 해변에 있어.", before: "Estou", after: "praia.", answers: ["na"],
        wrong: { "no": "praia는 여성 명사라 no가 아니라 na예요.", "em": "praia 앞에는 관사 a가 붙어서 em + a = na예요." },
        tip: { en: "Estou na praia com amigos.", why: "com amigos는 ‘친구들이랑’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 배고파.", before: "Estou", after: "fome.", answers: ["com"],
        wrong: { "de": "‘배고프다’는 estar com fome예요. com(~와 함께)을 써요." },
        tip: { en: "Tenho fome.", why: "ter(가지다)로도 ‘배고파요’라고 해요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 바빠.", answers: ["Estou ocupado.", "Estou ocupada."],
        wrong: { "sou ocupado": "지금 바쁜 건 상태라 estou예요." },
        tip: { en: "Tenho muito trabalho.", why: "‘일이 많아요’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 리스본에 있어.", answers: ["Estou em Lisboa."],
        wrong: { "estou na lisboa": "도시 이름 Lisboa 앞에는 관사가 없어서 em 그대로 써요.", "sou em lisboa": "있는 곳은 ser가 아니라 estar(estou)로 말해요." },
        tip: { en: "Estou cá em Lisboa.", why: "cá는 ‘여기’예요. 포르투갈에서 자주 써요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 기분 좋아.", answers: ["Estou contente.", "Estou feliz."],
        wrong: { "sou contente": "지금 기분은 상태라 estou예요." },
        tip: { en: "Estou muito bem.", why: "‘아주 잘 지내요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 아파.", answers: ["Estou doente."],
        wrong: { "sou doente": "지금 아픈 건 상태라 estou예요. sou doente는 ‘병약한 사람’이에요." },
        tip: { en: "Não me sinto bem.", why: "‘몸이 안 좋아요’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 역에 있어.", answers: ["Estou na estação."],
        ctx: { lead: "praia 대신 ‘역(estação)’을 넣어 보세요.", en: "Estou na praia." },
        wrong: { "estou no estação": "estação는 여성 명사라 no가 아니라 na예요." },
        tip: { en: "Já estou na estação.", why: "já는 ‘벌써, 이미’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "잘 지내요, 고마워요.", answers: ["Estou bem, obrigado.", "Estou bem, obrigada."],
        dialog: { a: "Como está?", aKo: "어떻게 지내세요?" },
        wrong: { "sou bem obrigado": "안부는 지금의 상태라 estou bem이라고 해요." },
        tip: { en: "Tudo bem, obrigado.", why: "‘다 좋아요’라는 가벼운 대답이에요." } }
    ]
  };
})(window.EP);
