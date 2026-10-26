/* 포르투갈어(유럽) 세션 33. Porque é que ~? (형식은 pattern1.js 위쪽 설명과 같다)
   대답(Porque ~)도 함께 연습한다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[33] = {
    no: 33, form: "Porque é que ~?", stem: "Porque é que/Porque/Porquê", meaning: "왜 ~해요?",
    hint: "Porque é que + 문장?",
    intro: {
      blocks: [["Porque é que", "왜"], ["~", "문장"]],
      lines: [
        "‘왜 ~해요?’는 Porque é que ~?예요: Porque é que estás triste?",
        "대답할 때 ‘~해서요’도 porque예요: Porque estou cansado.",
        "한마디로 ‘왜?’는 Porquê?예요 (악센트 있음). 포르투갈에서는 porque를 붙여 써요."
      ],
      examples: [
        { en: "Porque é que estás cansado?", ko: "왜 피곤해?" },
        { en: "Porque estou com sono.", ko: "졸려서요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "왜 안 왔어?", before: "", after: "é que não vieste?", answers: ["Porque"],
        wrong: { "por que": "포르투갈에서는 porque를 붙여 써요. por que는 브라질 표기예요.", "porquê": "문장 앞에서는 악센트 없는 porque예요. porquê는 한마디로 ‘왜?’할 때예요." },
        tip: { en: "Porque não vieste?", why: "é que를 빼도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "피곤해서요.", before: "", after: "estou cansado.", answers: ["Porque"],
        wrong: { "porquê": "대답의 ‘~해서’는 악센트 없는 porque예요." },
        tip: { en: "É que estou cansado.", why: "é que로 시작하면 ‘사실은 ~해서요’ 느낌이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "왜?", before: "", after: "?", answers: ["Porquê"],
        wrong: { "porque": "한마디로 ‘왜?’라고 할 때는 악센트가 있는 porquê예요." },
        tip: { en: "Mas porquê?", why: "mas는 ‘근데’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "왜 포르투갈어 배워요?", before: "Porque é que", after: "português?", answers: ["aprende", "estuda"],
        wrong: { "aprender": "물을 때는 활용한 동사를 써요: aprende." },
        tip: { en: "Porque estuda português?", why: "é que를 빼도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "날씨가 좋아서 산책했어.", before: "Fui passear", after: "estava bom tempo.", answers: ["porque"],
        wrong: { "para": "para는 ‘~하려고’예요. ‘~해서’는 porque예요." },
        tip: { en: "Como estava bom tempo, fui passear.", why: "como로 시작하면 ‘~해서’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "왜 웃어?", answers: ["Porque é que estás a rir?", "Porque estás a rir?"],
        wrong: { "porque é que estás riendo": "riendo는 스페인어예요. 포르투갈에서는 estás a rir예요." },
        tip: { en: "Estás a rir de quê?", why: "‘뭐 때문에 웃어?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "왜 안 가요?", answers: ["Porque é que não vai?", "Porque não vai?"],
        wrong: { "por que não vai": "포르투갈에서는 porque를 붙여 써요." },
        tip: { en: "Porque não quer ir?", why: "‘왜 가기 싫어요?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "비가 와서요.", answers: ["Porque está a chover."],
        wrong: { "porque está chovendo": "-ndo는 브라질식이에요. 포르투갈에서는 está a chover예요." },
        tip: { en: "É que está a chover.", why: "é que로 시작하면 ‘사실은 ~해서요’ 느낌이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "왜 그렇게 생각해요?", answers: ["Porque é que pensa isso?", "Porque pensa isso?", "Porque é que acha isso?", "Porque acha isso?"],
        wrong: { "por que é que pensa isso": "포르투갈에서는 porque를 붙여 써요." },
        tip: { en: "Porque diz isso?", why: "‘왜 그런 말을 해요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "왜 슬퍼?", answers: ["Porque é que estás triste?", "Porque estás triste?"],
        ctx: { lead: "cansado 대신 ‘슬픈(triste)’을 넣어 보세요.", en: "Porque é que estás cansado?" },
        wrong: { "porque é que és triste": "지금 기분은 estar예요: estás triste." },
        tip: { en: "Porque estás tão triste?", why: "tão는 ‘그렇게’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어? 왜?", answers: ["Porquê?"],
        dialog: { a: "Hoje não vou trabalhar.", aKo: "나 오늘 일 안 가." },
        wrong: { "porque": "한마디로 ‘왜?’라고 할 때는 악센트가 있는 porquê예요." },
        tip: { en: "A sério? Porquê?", why: "a sério는 ‘정말?’이에요." } }
    ]
  };
})(window.EP);
