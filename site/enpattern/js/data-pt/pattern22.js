/* 포르투갈어(유럽) 세션 22. Estive ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[22] = {
    no: 22, form: "Estive ~.", stem: "Estive/Estivemos", subject: "eu", meaning: "~에 있었어요 / ~했었어요 (지난 상태)",
    hint: "Estive + 장소/상태",
    intro: {
      blocks: [["Estive", "나는 (그때) ~에 있었다"], ["~", "장소 / 상태"]],
      lines: [
        "Estive는 estar의 ‘나’ 과거형이에요. 지난 일의 장소나 상태를 말해요.",
        "Estive em casa(집에 있었어요), Estive doente(아팠어요)처럼 써요.",
        "‘~에 가 본 적 있어요’도 Já estive em ~로 말해요."
      ],
      examples: [
        { en: "Estive em casa todo o dia.", ko: "하루 종일 집에 있었어요." },
        { en: "Já estive em Paris.", ko: "파리에 가 본 적 있어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 어제 아팠어.", before: "Ontem", after: "doente.", answers: ["estive"],
        wrong: { "estou": "estou는 지금이에요. 지난 일은 estive예요.", "fui": "아팠던 상태는 ser가 아니라 estar예요: estive doente." },
        tip: { en: "Ontem não me senti bem.", why: "‘어제 몸이 안 좋았어요’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 사무실에 있었어.", before: "Estive", after: "escritório.", answers: ["no"],
        wrong: { "na": "escritório는 남성 명사라 no예요.", "em": "escritório 앞에는 관사 o가 붙어서 em + o = no예요." },
        tip: { en: "Estive a trabalhar no escritório.", why: "estive a는 ‘(한동안) ~하고 있었다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "우리 일주일 동안 마데이라에 있었어.", before: "", after: "uma semana na Madeira.", answers: ["Estivemos"],
        wrong: { "estive": "‘우리는’이면 estivemos예요. estive는 ‘나는’이에요." },
        tip: { en: "Passámos uma semana na Madeira.", why: "passar는 ‘(시간을) 보내다’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 일본에 가 본 적 있어.", before: "Já estive no", after: ".", answers: ["Japão"],
        wrong: { "japón": "Japón은 스페인어예요. 포르투갈어는 Japão이에요." },
        tip: { en: "Já fui ao Japão.", why: "já fui도 ‘가 본 적 있어요’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 아주 바빴어.", before: "Estive muito", after: ".", answers: ["ocupado", "ocupada"],
        wrong: { "ocupar": "‘바쁜’은 형용사 ocupado(ocupada)를 써요." },
        tip: { en: "Tive muito trabalho.", why: "tive는 ter의 ‘나’ 과거형이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 주말에 집에 있었어.", answers: ["Estive em casa no fim de semana.", "No fim de semana estive em casa."],
        wrong: { "estive na casa no fim de semana": "‘집에’는 관사 없이 em casa예요." },
        tip: { en: "Fiquei em casa no fim de semana.", why: "fiquei는 ‘머물렀어요’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 브라질에 가 본 적 있어.", answers: ["Já estive no Brasil."],
        wrong: { "já estive em brasil": "Brasil은 관사 o가 붙어서 em + o = no Brasil이에요." },
        tip: { en: "Já fui ao Brasil.", why: "já fui도 ‘가 본 적 있어요’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 하루 종일 피곤했어.", answers: ["Estive cansado o dia todo.", "Estive cansada o dia todo.", "Estive cansado todo o dia.", "Estive cansada todo o dia."],
        wrong: { "fui cansado o dia todo": "피곤한 상태는 ser가 아니라 estar예요: estive." },
        tip: { en: "Andei cansado o dia todo.", why: "andar도 ‘(계속) ~한 상태였다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 거기 없었어.", answers: ["Não estive lá."],
        wrong: { "não estou lá": "지난 일은 estive예요. estou는 지금이에요." },
        tip: { en: "Não estava lá.", why: "estava도 ‘(그때) 있었다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 런던에 가 본 적 있어.", answers: ["Já estive em Londres."],
        ctx: { lead: "Paris 대신 ‘런던(Londres)’을 넣어 보세요.", en: "Já estive em Paris." },
        wrong: { "já estive no londres": "Londres는 관사 없이 em Londres예요." },
        tip: { en: "Já fui a Londres.", why: "já fui도 ‘가 본 적 있어요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "병원에 있었어.", answers: ["Estive no hospital."],
        dialog: { a: "Onde estiveste ontem?", aKo: "어제 어디 있었어?" },
        wrong: { "estive na hospital": "hospital은 남성 명사라 no예요." },
        tip: { en: "Fui ao hospital.", why: "‘병원에 갔었어’라는 말이에요." } }
    ]
  };
})(window.EP);
