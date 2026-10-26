/* 포르투갈어(유럽) 세션 89. É possível ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[89] = {
    no: 89, form: "É possível ~?", stem: "É possível/é possível", meaning: "~할 수 있어요? (가능해요?)",
    hint: "É possível + 동사원형?",
    intro: {
      blocks: [["É possível", "~이 가능하다"], ["~", "동사원형"]],
      lines: [
        "É possível + 동사원형?은 ‘~하는 게 가능해요?’라는 정중한 질문이에요: É possível mudar a data?",
        "가능하면 É possível., 안 되면 Não é possível.이에요.",
        "Posso ~?보다 조금 더 공식적이에요. 호텔·가게·사무실에서 좋아요."
      ],
      examples: [
        { en: "É possível mudar a data?", ko: "날짜 바꾸는 게 가능해요?" },
        { en: "Não é possível.", ko: "안 돼요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "카드로 계산 가능해요?", before: "É", after: "pagar com cartão?", answers: ["possível"],
        wrong: { "posible": "posible은 스페인어예요. 포르투갈어는 possível이에요." },
        tip: { en: "Aceitam cartão?", why: "‘카드 받아요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "방 바꾸는 게 가능해요?", before: "É possível", after: "de quarto?", answers: ["mudar", "trocar"],
        wrong: { "cambiar": "cambiar는 스페인어예요. 포르투갈어는 mudar예요." },
        tip: { en: "Posso mudar de quarto?", why: "‘방 바꿔도 돼요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그건 불가능해요.", before: "Não é", after: ".", answers: ["possível"],
        wrong: { "posible": "posible은 스페인어예요. 포르투갈어는 possível이에요." },
        tip: { en: "É impossível.", why: "impossível은 ‘불가능한’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "체크아웃 늦게 하는 거 가능해요?", before: "É possível fazer o check-out mais", after: "?", answers: ["tarde"],
        wrong: { "tardes": "‘늦게’는 tarde예요. tardes는 ‘오후들’이에요." },
        tip: { en: "Posso sair mais tarde?", why: "sair는 ‘나가다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "예약을 취소하는 게 가능해요?", before: "É possível", after: "a reserva?", answers: ["cancelar", "anular"],
        wrong: { "cancelo": "possível 뒤에는 동사원형을 써요: cancelar." },
        tip: { en: "Queria cancelar a reserva.", why: "‘예약 취소하고 싶어요’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "시간 바꾸는 게 가능해요?", answers: ["É possível mudar a hora?", "É possível mudar o horário?"],
        wrong: { "é possível cambiar a hora": "cambiar는 스페인어예요. 포르투갈어는 mudar예요." },
        tip: { en: "Posso mudar a hora?", why: "posso는 ‘제가 ~해도 돼요’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "오늘 받을 수 있어요?", answers: ["É possível receber hoje?"],
        wrong: { "é posible receber hoje": "posible은 스페인어예요. 포르투갈어는 possível이에요." },
        tip: { en: "Chega hoje?", why: "‘오늘 도착해요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "이거 반품 가능해요?", answers: ["É possível devolver isto?", "É possível trocar isto?"],
        wrong: { "é possível devolvo isto": "possível 뒤에는 동사원형을 써요: devolver." },
        tip: { en: "Aceitam devoluções?", why: "devolução는 ‘반품’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "오늘은 안 돼요.", answers: ["Hoje não é possível.", "Não é possível hoje."],
        wrong: { "hoje não es possível": "es는 스페인어예요. 포르투갈어는 é예요." },
        tip: { en: "Hoje não dá.", why: "não dá는 ‘안 돼’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "일찍 들어가는 게 가능해요?", answers: ["É possível entrar mais cedo?"],
        ctx: { lead: "mudar a data 대신 ‘일찍 들어가다(entrar mais cedo)’를 넣어 보세요.", en: "É possível mudar a data?" },
        wrong: { "é possível entrar más cedo": "más는 스페인어예요. 포르투갈어는 mais예요." },
        tip: { en: "Posso entrar mais cedo?", why: "posso는 ‘제가 ~해도 돼요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "짐 맡기는 건 가능해요?", answers: ["É possível deixar a bagagem?", "É possível deixar as malas?"],
        dialog: { a: "O quarto só fica pronto às três.", aKo: "방은 3시에야 준비돼요." },
        wrong: { "é possível dejar a bagagem": "dejar는 스페인어예요. 포르투갈어는 deixar예요." },
        tip: { en: "Posso deixar as malas aqui?", why: "posso는 ‘제가 ~해도 돼요’예요." } }
    ]
  };
})(window.EP);
