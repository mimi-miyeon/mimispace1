/* 포르투갈어(유럽) 세션 47. É ~. (형식은 pattern1.js 위쪽 설명과 같다)
   주어(그것)를 말하지 않는 문장이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[47] = {
    no: 47, form: "É ~.", stem: "É", meaning: "(그건) ~해요",
    hint: "É + 형용사",
    intro: {
      blocks: [["É", "(그것은) ~이다"], ["~", "형용사 / 명사"]],
      lines: [
        "É는 ser의 ‘그것·그/그녀’ 형태예요. ‘(그건) ~해요’라고 늘 그런 성질을 말해요: É caro.",
        "주어(그것)는 보통 말하지 않아요: É muito bom!(정말 좋아요!)",
        "지금 잠깐의 상태는 está예요(다음 세션): Está frio."
      ],
      examples: [
        { en: "É muito caro.", ko: "너무 비싸요." },
        { en: "É bonito!", ko: "예뻐요!" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그거 쉬워.", before: "", after: "fácil.", answers: ["É"],
        wrong: { "está": "늘 그런 성질은 é예요.", "es": "es는 스페인어예요. 포르투갈어는 é예요." },
        tip: { en: "Isso é canja!", why: "é canja는 포르투갈식 ‘식은 죽 먹기’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 사실이야.", before: "É", after: ".", answers: ["verdade"],
        wrong: { "verdad": "verdad는 스페인어예요. 포르투갈어는 verdade예요." },
        tip: { en: "É mesmo assim.", why: "‘정말 그래’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "멀어요?", before: "É", after: "?", answers: ["longe"],
        wrong: { "lejos": "lejos는 스페인어예요. 포르투갈어는 longe예요.", "perto": "perto는 ‘가까운’이에요. ‘먼’은 longe예요." },
        tip: { en: "Fica longe?", why: "fica longe는 ‘(위치가) 멀어요’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그건 불가능해.", before: "É", after: ".", answers: ["impossível"],
        wrong: { "imposible": "imposible은 스페인어예요. 포르투갈어는 impossível이에요." },
        tip: { en: "Não pode ser.", why: "‘그럴 리 없어’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이 도시 정말 예쁘다.", before: "Esta cidade", after: "muito bonita.", answers: ["é"],
        wrong: { "está": "도시가 예쁜 건 늘 그런 성질이라 é예요." },
        tip: { en: "Que cidade tão bonita!", why: "que ... tão은 ‘정말 ~한 ...!’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그거 중요해.", answers: ["É importante."],
        wrong: { "es importante": "es는 스페인어예요. 포르투갈어는 é예요." },
        tip: { en: "Isso é muito importante.", why: "isso는 ‘그것’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어려워요.", answers: ["É difícil."],
        wrong: { "es difícil": "es는 스페인어예요. 포르투갈어는 é예요." },
        tip: { en: "Não é fácil.", why: "‘쉽지 않아요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 좋은 생각이야.", answers: ["É uma boa ideia."],
        wrong: { "é um boa ideia": "ideia는 여성 명사라 uma boa예요." },
        tip: { en: "Boa ideia!", why: "짧게 이렇게 말해도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가까워요.", answers: ["É perto."], alts: ["Fica perto."],
        wrong: { "es cerca": "es cerca는 스페인어예요. 포르투갈어는 é perto예요." },
        tip: { en: "É aqui ao lado.", why: "ao lado는 ‘바로 옆’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "아주 싸요.", answers: ["É muito barato."],
        ctx: { lead: "caro 대신 ‘싼(barato)’을 넣어 보세요.", en: "É muito caro." },
        wrong: { "é muy barato": "muy는 스페인어예요. 포르투갈어는 muito예요." },
        tip: { en: "É baratíssimo.", why: "-íssimo를 붙이면 ‘아주 ~한’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 정말 예뻐!", answers: ["Sim, é muito bonito!", "Sim, é lindo!"],
        dialog: { a: "Gostas do meu vestido novo?", aKo: "내 새 원피스 마음에 들어?" },
        wrong: { "sim é muy bonito": "muy는 스페인어예요. 포르투갈어는 muito예요." },
        tip: { en: "Adoro! É lindo!", why: "lindo는 ‘아주 예쁜’이에요." } }
    ]
  };
})(window.EP);
