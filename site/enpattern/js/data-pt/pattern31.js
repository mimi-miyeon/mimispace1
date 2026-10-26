/* 포르투갈어(유럽) 세션 31. O que é ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[31] = {
    no: 31, form: "O que é ~?", stem: "O que é/O que são", meaning: "~이 뭐예요?",
    hint: "O que é + 명사?",
    intro: {
      blocks: [["O que", "무엇"], ["é", "~이다"], ["~", "물건·말"]],
      lines: [
        "O que é ~?는 ‘~이 뭐예요?’예요: O que é isto?",
        "동사 문장 앞에서는 O que é que ~?: O que é que queres?(뭐 원해?)",
        "여럿이면 O que são ~?예요."
      ],
      examples: [
        { en: "O que é isto?", ko: "이게 뭐예요?" },
        { en: "O que é que vais fazer?", ko: "뭐 할 거야?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "저기 저게 뭐예요?", before: "O que é", after: "ali?", answers: ["aquilo"],
        wrong: { "isso": "멀리 있는 ‘저것’은 aquilo예요. isso는 ‘(상대 가까이) 그것’이에요." },
        tip: { en: "Aquilo ali é o quê?", why: "말할 때는 o quê를 뒤에 붙이기도 해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이 요리 뭐예요?", before: "O que é este", after: "?", answers: ["prato"],
        wrong: { "plato": "plato는 스페인어예요. 포르투갈어는 prato예요." },
        tip: { en: "Como se chama este prato?", why: "‘이 요리 이름이 뭐예요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 뭐 하고 싶어?", before: "O que é que", after: "fazer?", answers: ["queres"],
        wrong: { "quer": "친구(tu)에게는 queres예요.", "quero": "quero는 ‘나는’이에요." },
        tip: { en: "O que te apetece fazer?", why: "apetecer는 ‘~이 당기다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "이것들 뭐예요?", before: "O que", after: "estas coisas?", answers: ["são"],
        wrong: { "é": "여럿이면 são이에요." },
        tip: { en: "Para que servem estas coisas?", why: "‘이것들은 뭐에 써요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "무슨 일이야?", before: "O que é que se", after: "?", answers: ["passa"],
        wrong: { "pasa": "pasa는 스페인어예요. 포르투갈어는 passa예요." },
        tip: { en: "O que aconteceu?", why: "‘무슨 일 있었어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그게 뭐예요?", answers: ["O que é isso?"],
        wrong: { "o que está isso": "‘뭐예요?’는 o que é예요." },
        tip: { en: "O que é que é isso?", why: "말할 때는 é que를 넣기도 해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "‘bica’가 뭐예요?", answers: ["O que é uma bica?", "O que é a bica?"],
        wrong: { "o que é um bica": "bica는 여성 명사라 uma예요." },
        tip: { en: "O que quer dizer bica?", why: "quer dizer는 ‘뜻하다’예요. bica는 리스본식 에스프레소예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 뭐 먹고 싶어?", answers: ["O que é que queres comer?"], alts: ["O que queres comer?"],
        wrong: { "o que é que quer comer": "친구(tu)에게는 queres예요." },
        tip: { en: "O que te apetece comer?", why: "apetecer는 ‘~이 당기다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "포르투갈 사람들은 아침에 뭐 먹어요?", answers: ["O que é que os portugueses comem ao pequeno-almoço?"],
        alts: ["O que comem os portugueses ao pequeno-almoço?"],
        wrong: { "o que é que os portugueses come ao pequeno-almoço": "os portugueses는 여럿이라 comem이에요." },
        tip: { en: "Como é o pequeno-almoço português?", why: "‘포르투갈 아침 식사는 어때요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 소리 뭐예요?", answers: ["O que é este barulho?"],
        ctx: { lead: "isto 대신 ‘이 소리(este barulho)’를 넣어 보세요.", en: "O que é isto?" },
        wrong: { "o que é esta barulho": "barulho는 남성 명사라 este예요." },
        tip: { en: "Que barulho é este?", why: "‘이게 무슨 소리예요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "뭔데?", answers: ["O que é?", "O que é que é?"],
        dialog: { a: "Tenho uma coisa para ti.", aKo: "너 줄 게 있어." },
        wrong: { "o que está": "‘뭐예요?’는 o que é예요." },
        tip: { en: "A sério? O que é?", why: "a sério는 ‘정말?’이에요." } }
    ]
  };
})(window.EP);
