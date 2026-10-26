/* 포르투갈어(유럽) 세션 90. Há algum ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[90] = {
    no: 90, form: "Há algum ~?", stem: "Há algum/Há alguma/Há alguns/Não há nenhum/Não há nenhuma/há algum/há alguma", meaning: "~ 있어요? (어떤 ~라도)",
    hint: "Há algum/alguma + 명사?",
    intro: {
      blocks: [["Há", "있다"], ["algum / alguma", "어떤 ~라도"], ["~", "명사"]],
      lines: [
        "Há algum + 남성 명사? / Há alguma + 여성 명사?는 ‘(어떤) ~라도 있어요?’예요: Há algum restaurante aqui perto?",
        "‘하나도 없어요’는 Não há nenhum / nenhuma예요.",
        "여럿이면 Há alguns / algumas ~?예요."
      ],
      examples: [
        { en: "Há algum restaurante aqui perto?", ko: "이 근처에 식당 있어요?" },
        { en: "Não há nenhuma farmácia.", ko: "약국이 하나도 없어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "근처에 카페 있어요?", before: "Há", after: "café aqui perto?", answers: ["algum"],
        wrong: { "alguma": "café는 남성 명사라 algum이에요.", "algún": "algún은 스페인어예요. 포르투갈어는 algum이에요." },
        tip: { en: "Sabe se há um café por aqui?", why: "por aqui는 ‘이 근처에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "여기 약국 있어요?", before: "Há", after: "farmácia aqui?", answers: ["alguma"],
        wrong: { "algum": "farmácia는 여성 명사라 alguma예요." },
        tip: { en: "Onde há uma farmácia?", why: "‘약국 어디 있어요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "하나도 없어요.", before: "Não há", after: ".", answers: ["nenhum", "nenhuma"],
        wrong: { "ningún": "ningún은 스페인어예요. 포르투갈어는 nenhum이에요." },
        tip: { en: "Não há nada.", why: "‘아무것도 없어요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "질문 있으세요?", before: "Há alguma", after: "?", answers: ["pergunta", "dúvida"],
        wrong: { "pregunta": "pregunta는 스페인어예요. 포르투갈어는 pergunta예요." },
        tip: { en: "Alguém tem perguntas?", why: "alguém은 ‘누군가’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "무슨 문제 있어요?", before: "Há algum", after: "?", answers: ["problema"],
        wrong: { "problemas": "algum 뒤에는 하나만: problema예요." },
        tip: { en: "Passa-se alguma coisa?", why: "‘무슨 일 있어요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "근처에 슈퍼 있어요?", answers: ["Há algum supermercado aqui perto?"],
        wrong: { "há alguma supermercado aqui perto": "supermercado는 남성 명사라 algum이에요." },
        tip: { en: "Onde fica o supermercado mais próximo?", why: "mais próximo는 ‘가장 가까운’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "빈 테이블 있어요?", answers: ["Há alguma mesa livre?"],
        wrong: { "há algum mesa livre": "mesa는 여성 명사라 alguma예요." },
        tip: { en: "Têm mesa?", why: "‘자리 있어요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이 근처에 ATM 있어요?", answers: ["Há algum multibanco aqui perto?"],
        wrong: { "há algum cajero aqui perto": "cajero는 스페인어예요. 포르투갈에서는 multibanco예요." },
        tip: { en: "Onde há um multibanco?", why: "multibanco는 포르투갈의 ATM이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "근처에 호텔이 하나도 없어요.", answers: ["Não há nenhum hotel aqui perto."],
        wrong: { "não há algum hotel aqui perto": "‘하나도 없다’는 não há nenhum이에요." },
        tip: { en: "Não há hotéis por aqui.", why: "por aqui는 ‘이 근처에’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 근처에 주차장 있어요?", answers: ["Há algum parque de estacionamento aqui perto?"],
        ctx: { lead: "restaurante 대신 ‘주차장(parque de estacionamento)’을 넣어 보세요.", en: "Há algum restaurante aqui perto?" },
        wrong: { "há alguma parque de estacionamento aqui perto": "parque는 남성 명사라 algum이에요." },
        tip: { en: "Onde posso estacionar?", why: "‘어디에 주차할 수 있어요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 이 근처에 약국 있어요?", answers: ["Sim, há alguma farmácia aqui perto?"],
        dialog: { a: "Posso ajudar?", aKo: "도와드릴까요?" },
        wrong: { "sim há algum farmácia aqui perto": "farmácia는 여성 명사라 alguma예요." },
        tip: { en: "Sim, sabe onde há uma farmácia?", why: "sabe onde는 ‘어디인지 아세요’예요." } }
    ]
  };
})(window.EP);
