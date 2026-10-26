/* 포르투갈어(유럽) 세션 79. Depois de ~. (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[79] = {
    no: 79, form: "Depois de ~.", stem: "Depois de/depois de/Depois do/depois do/depois da/depois", meaning: "~한 뒤에",
    hint: "Depois de + 동사원형",
    intro: {
      blocks: [["Depois de", "~한 뒤에"], ["~", "동사원형 / 명사"]],
      lines: [
        "Depois de + 동사원형은 ‘~한 뒤에’예요: Depois de comer, vou dormir.",
        "명사도 와요: depois do jantar(저녁 먹고 나서). de + o = do, de + a = da.",
        "‘그다음에’ 하나만 말할 때는 depois예요: Primeiro como, depois saio."
      ],
      examples: [
        { en: "Depois de comer, vou dormir.", ko: "먹고 나서 잘 거예요." },
        { en: "Depois do jantar, vimos um filme.", ko: "저녁 먹고 영화 봤어요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "수업 끝나고 만나자.", before: "Encontramo-nos depois", after: "aula.", answers: ["da"],
        wrong: { "de": "aula 앞에 관사 a가 붙어서 de + a = da예요.", "do": "aula는 여성 명사라 da예요." },
        tip: { en: "Vemo-nos no fim da aula.", why: "no fim de는 ‘~ 끝에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "일 끝나고 헬스장 가.", before: "Depois de", after: "vou ao ginásio.", answers: ["trabalhar"],
        wrong: { "trabalho": "de 뒤에는 동사원형을 써요: trabalhar." },
        tip: { en: "Saio do trabalho e vou ao ginásio.", why: "‘퇴근하고 헬스장 가’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "저녁 먹고 산책했어.", before: "Depois do", after: "demos um passeio.", answers: ["jantar"],
        wrong: { "cena": "cena는 스페인어예요. 포르투갈어는 jantar예요." },
        tip: { en: "Fomos passear depois de jantar.", why: "depois de jantar처럼 동사로도 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "그다음엔 뭐 해?", before: "E", after: "o que fazes?", answers: ["depois"],
        wrong: { "después": "después는 스페인어예요. 포르투갈어는 depois예요." },
        tip: { en: "E a seguir?", why: "a seguir는 ‘그다음에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "샤워하고 잘게.", before: "Depois de tomar", after: "vou dormir.", answers: ["banho", "duche"],
        wrong: { "ducha": "ducha는 스페인어예요. 포르투갈어로는 banho(또는 duche)예요." },
        tip: { en: "Tomo banho e vou para a cama.", why: "‘샤워하고 자러 가’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "숙제하고 나서 놀아도 돼.", answers: ["Depois de fazer os trabalhos de casa, podes brincar."],
        wrong: { "depois de fazes os trabalhos de casa podes brincar": "de 뒤에는 동사원형을 써요: fazer." },
        tip: { en: "Primeiro os trabalhos de casa, depois brincas.", why: "primeiro는 ‘먼저’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "점심 먹고 전화할게.", answers: ["Depois do almoço, ligo-te.", "Ligo-te depois do almoço.", "Depois de almoçar, ligo-te."],
        wrong: { "depois do almoço te ligo": "포르투갈에서는 te를 동사 뒤에 붙여요: ligo-te." },
        tip: { en: "Ligo-te à tarde.", why: "à tarde는 ‘오후에’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "졸업하고 포르투갈에 왔어.", answers: ["Depois de acabar o curso, vim para Portugal.", "Depois de terminar o curso, vim para Portugal."],
        wrong: { "depois de acabar o curso vine para portugal": "vine는 스페인어예요. 포르투갈어는 vim이에요." },
        tip: { en: "Vim para Portugal quando acabei o curso.", why: "quando는 ‘~했을 때’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "생각해 보고 대답할게.", answers: ["Respondo-te depois de pensar.", "Depois de pensar, respondo-te."],
        wrong: { "respondo-te depois de penso": "de 뒤에는 동사원형을 써요: pensar." },
        tip: { en: "Deixa-me pensar.", why: "‘생각 좀 해 볼게’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "운동하고 나서 잘 거야.", answers: ["Depois de fazer exercício, vou dormir."],
        ctx: { lead: "comer 대신 ‘운동하다(fazer exercício)’를 넣어 보세요.", en: "Depois de comer, vou dormir." },
        wrong: { "después de fazer exercício vou dormir": "después는 스페인어예요. 포르투갈어는 depois예요." },
        tip: { en: "Faço exercício e depois durmo.", why: "depois는 ‘그다음에’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "일 끝나고 갈게.", answers: ["Vou depois do trabalho.", "Depois do trabalho.", "Depois de trabalhar, vou."],
        dialog: { a: "Quando vens?", aKo: "언제 와?" },
        wrong: { "vou depois da trabalho": "trabalho는 남성 명사라 do예요." },
        tip: { en: "Saio do trabalho e vou ter contigo.", why: "ir ter com은 ‘~를 만나러 가다’예요." } }
    ]
  };
})(window.EP);
