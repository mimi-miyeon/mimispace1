/* 포르투갈어(유럽) 세션 77. Se calhar ~. (형식은 pattern1.js 위쪽 설명과 같다)
   문장 앞에 붙는 말이라 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[77] = {
    no: 77, form: "Se calhar ~.", stem: "Se calhar/se calhar", meaning: "아마 ~할지도 몰라요",
    hint: "Se calhar + 문장",
    intro: {
      blocks: [["Se calhar", "아마, 어쩌면"], ["~", "문장"]],
      lines: [
        "Se calhar는 포르투갈에서 아주 자주 쓰는 ‘아마, 어쩌면’이에요: Se calhar chove.(비 올지도 몰라)",
        "뒤 문장은 그대로 현재형이나 vou + 동사원형을 써요: Se calhar vou amanhã.",
        "talvez(아마)도 같은 뜻이지만, talvez 뒤에는 동사 모양이 바뀌어서 처음엔 se calhar가 쉬워요."
      ],
      examples: [
        { en: "Se calhar chove amanhã.", ko: "내일 비 올지도 몰라요." },
        { en: "Se calhar vou ao Porto.", ko: "어쩌면 포르투에 갈지도 몰라요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "아마 그 사람 안 올지도 몰라.", before: "", after: "calhar ele não vem.", answers: ["Se"],
        wrong: { "si": "si는 스페인어예요. 포르투갈어는 se예요." },
        tip: { en: "Talvez ele não venha.", why: "talvez도 ‘아마’예요. 뒤 동사 모양이 바뀌어요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어쩌면 내일 시간 있을지도 몰라.", before: "Se calhar amanhã", after: "tempo.", answers: ["tenho"],
        wrong: { "tengo": "tengo는 스페인어예요. 포르투갈어는 tenho예요." },
        tip: { en: "Pode ser que tenha tempo amanhã.", why: "pode ser que는 ‘~일 수도 있다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "아마 네 말이 맞을 거야.", before: "Se calhar tens", after: ".", answers: ["razão"],
        wrong: { "razón": "razón은 스페인어예요. 포르투갈어는 razão예요." },
        tip: { en: "Talvez tenhas razão.", why: "talvez 뒤에는 tenhas처럼 모양이 바뀌어요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어쩌면 나 늦을지도 몰라.", before: "Se calhar chego", after: ".", answers: ["atrasado", "atrasada", "tarde"],
        wrong: { "retrasado": "retrasado는 스페인어예요. 포르투갈어는 atrasado예요." },
        tip: { en: "Pode ser que me atrase.", why: "atrasar-se는 ‘늦다’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "아마 벌써 문 닫았을 거야.", before: "Se calhar já", after: ".", answers: ["fechou"],
        wrong: { "cerró": "cerró는 스페인어예요. 포르투갈어는 fechou예요." },
        tip: { en: "Deve estar fechado.", why: "deve는 ‘~일 거야(추측)’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어쩌면 이사할지도 몰라.", answers: ["Se calhar mudo de casa.", "Se calhar vou mudar de casa."],
        wrong: { "se calhar mudar de casa": "se calhar 뒤에는 활용한 동사를 써요: mudo." },
        tip: { en: "Estou a pensar mudar de casa.", why: "‘이사할까 생각 중이야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "아마 그 사람 집에 있을 거야.", answers: ["Se calhar ele está em casa.", "Se calhar está em casa."],
        wrong: { "se calhar ele é em casa": "있는 곳은 está예요." },
        tip: { en: "Ele deve estar em casa.", why: "deve는 ‘~일 거야(추측)’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어쩌면 그게 더 나을지도 몰라.", answers: ["Se calhar é melhor."],
        wrong: { "se calhar é mais bom": "bom의 비교는 melhor예요." },
        tip: { en: "Talvez seja melhor.", why: "talvez 뒤에는 seja처럼 모양이 바뀌어요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "아마 나 못 갈 것 같아.", answers: ["Se calhar não posso ir.", "Se calhar não vou poder ir."],
        wrong: { "se calhar no puedo ir": "no puedo는 스페인어예요. 포르투갈어는 não posso예요." },
        tip: { en: "Acho que não vou conseguir ir.", why: "acho que는 ‘~인 것 같아’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어쩌면 신트라에 갈지도 몰라요.", answers: ["Se calhar vou a Sintra."],
        ctx: { lead: "Porto 대신 ‘신트라(Sintra)’를 넣어 보세요.", en: "Se calhar vou ao Porto." },
        wrong: { "se calhar vou à sintra": "Sintra 앞에는 관사가 없어서 a예요." },
        tip: { en: "Talvez vá a Sintra.", why: "talvez 뒤에는 vá처럼 모양이 바뀌어요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "글쎄, 갈지도 몰라.", answers: ["Não sei, se calhar vou.", "Se calhar vou."],
        dialog: { a: "Vens à festa?", aKo: "파티 와?" },
        wrong: { "não sei si calhar vou": "si는 스페인어예요. 포르투갈어는 se예요." },
        tip: { en: "Ainda não sei, talvez.", why: "talvez만 말해도 ‘아마’예요." } }
    ]
  };
})(window.EP);
