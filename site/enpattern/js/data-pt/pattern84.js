/* 포르투갈어(유럽) 세션 84. Tem ~? (가게에서) (형식은 pattern1.js 위쪽 설명과 같다)
   상대(가게)에게 묻는 말이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[84] = {
    no: 84, form: "Tem ~?", stem: "Tem/Têm/Tens", meaning: "~ 있어요? (가게에서)",
    hint: "Tem + 명사?",
    intro: {
      blocks: [["Tem", "(당신은) 가지고 있나요"], ["~", "무엇"]],
      lines: [
        "가게나 식당에서 ‘~ 있어요?’는 Tem ~?예요: Tem pão?",
        "가게 전체(여러분)에게 물을 때는 Têm ~?도 써요: Têm mesa para dois?",
        "친구에게는 Tens ~?(~ 있어?)예요. 어떤 장소에 뭐가 있는지는 Há ~?(세션 7)예요."
      ],
      examples: [
        { en: "Tem pão?", ko: "빵 있어요?" },
        { en: "Têm mesa para dois?", ko: "두 명 자리 있어요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이거 다른 사이즈 있어요?", before: "", after: "isto noutro tamanho?", answers: ["Tem", "Têm"],
        wrong: { "tiene": "tiene는 스페인어예요. 포르투갈어는 tem이에요." },
        tip: { en: "Há outro tamanho?", why: "há로 물을 수도 있어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "펜 있어?", before: "", after: "uma caneta?", answers: ["Tens"],
        wrong: { "tem": "친구(tu)에게는 tens예요. tem은 존댓말이에요." },
        tip: { en: "Emprestas-me uma caneta?", why: "emprestar는 ‘빌려주다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "채식 요리 있어요?", before: "Têm pratos", after: "?", answers: ["vegetarianos"],
        wrong: { "vegetarianas": "pratos는 남성이라 vegetarianos예요." },
        tip: { en: "Há opções vegetarianas?", why: "opções는 ‘선택지’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "잔돈 있어요?", before: "Tem", after: "?", answers: ["troco"],
        wrong: { "cambio": "cambio는 스페인어예요. 잔돈은 troco예요." },
        tip: { en: "Tem dinheiro trocado?", why: "dinheiro trocado는 ‘잔돈’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "와이파이 있어요?", before: "", after: "wi-fi?", answers: ["Têm", "Tem"],
        wrong: { "tienen": "tienen은 스페인어예요. 포르투갈어는 têm이에요." },
        tip: { en: "Há wi-fi aqui?", why: "há로 물을 수도 있어요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "물 있어요?", answers: ["Tem água?", "Têm água?"],
        wrong: { "tiene água": "tiene는 스페인어예요. 포르투갈어는 tem이에요." },
        tip: { en: "Queria uma água, por favor.", why: "queria는 정중한 ‘주세요’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이거 더 작은 거 있어요?", answers: ["Tem isto mais pequeno?", "Têm isto mais pequeno?"],
        wrong: { "tem isto más pequeno": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Tem um tamanho abaixo?", why: "um tamanho abaixo는 ‘한 치수 작은 것’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "오늘 빈방 있어요?", answers: ["Têm quartos livres para hoje?", "Tem quartos livres para hoje?", "Têm quartos para hoje?"],
        wrong: { "têm quartos libres para hoje": "libres는 스페인어예요. 포르투갈어는 livres예요." },
        tip: { en: "Há disponibilidade para hoje?", why: "disponibilidade는 ‘(빈) 자리’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "충전기 있어?", answers: ["Tens um carregador?"],
        wrong: { "tens um cargador": "cargador는 스페인어예요. 포르투갈어는 carregador예요." },
        tip: { en: "Emprestas-me o carregador?", why: "emprestar는 ‘빌려주다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "우유 있어요?", answers: ["Tem leite?", "Têm leite?"],
        ctx: { lead: "pão 대신 ‘우유(leite)’를 넣어 보세요.", en: "Tem pão?" },
        wrong: { "tiene leche": "스페인어예요. 포르투갈어는 tem leite예요." },
        tip: { en: "Ainda há leite?", why: "‘아직 우유 있어요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니요. 두 명 자리 있어요?", answers: ["Não. Têm mesa para dois?", "Não. Tem mesa para dois?", "Não. Têm mesa para duas pessoas?"],
        dialog: { a: "Boa noite. Têm reserva?", aKo: "안녕하세요. 예약하셨어요?" },
        wrong: { "não tienen mesa para dos": "스페인어예요. 포르투갈어는 têm mesa para dois예요." },
        tip: { en: "Não. Há lugar para dois?", why: "lugar는 ‘자리’예요." } }
    ]
  };
})(window.EP);
