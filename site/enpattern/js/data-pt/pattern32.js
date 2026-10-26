/* 포르투갈어(유럽) 세션 32. Quando ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[32] = {
    no: 32, form: "Quando ~?", stem: "Quando", meaning: "언제 ~해요?",
    hint: "Quando + 동사?",
    intro: {
      blocks: [["Quando", "언제"], ["~", "동사 + 무엇"]],
      lines: [
        "Quando ~?는 ‘언제 ~해요?’예요: Quando chegas?",
        "말할 때는 Quando é que ~?도 많이 써요: Quando é que vens?",
        "대답에서 quando는 ‘~할 때’예요: Quando chego, ligo-te."
      ],
      examples: [
        { en: "Quando é o jantar?", ko: "저녁 식사 언제예요?" },
        { en: "Quando é que voltas?", ko: "너 언제 돌아와?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 언제 와?", before: "Quando", after: "?", answers: ["vens", "chegas"],
        wrong: { "vem": "친구(tu)에게는 vens예요.", "venho": "venho는 ‘나는’이에요." },
        tip: { en: "A que horas chegas?", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "생일이 언제예요?", before: "Quando", after: "o seu aniversário?", answers: ["é"],
        wrong: { "está": "날짜를 물을 때는 é예요." },
        tip: { en: "Quando faz anos?", why: "fazer anos는 포르투갈식 ‘생일을 맞다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "언제 출발해요?", before: "Quando é que", after: "?", answers: ["parte", "sai"],
        wrong: { "partir": "물을 때는 활용한 동사를 써요: parte." },
        tip: { en: "A que horas parte?", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "다음 버스 언제 와요?", before: "Quando passa o", after: "autocarro?", answers: ["próximo"],
        wrong: { "próxima": "autocarro는 남성 명사라 próximo예요." },
        tip: { en: "A que horas é o próximo autocarro?", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "언제 끝나요?", before: "Quando", after: "?", answers: ["acaba", "termina"],
        wrong: { "acabo": "acabo는 ‘나는’이에요. ‘그것이’는 acaba예요." },
        tip: { en: "A que horas acaba?", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 언제 포르투갈에 와?", answers: ["Quando vens a Portugal?", "Quando é que vens a Portugal?"],
        wrong: { "quando vens em portugal": "‘~에 오다’는 em이 아니라 a예요." },
        tip: { en: "Quando é que nos visitas?", why: "visitar는 ‘방문하다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "회의 언제예요?", answers: ["Quando é a reunião?"],
        wrong: { "quando está a reunião": "날짜·때를 물을 때는 é예요." },
        tip: { en: "A que horas é a reunião?", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "언제 시간 돼요?", answers: ["Quando é que tem tempo?", "Quando tem tempo?"],
        wrong: { "quando é que tem tiempo": "tiempo는 스페인어예요. 포르투갈어는 tempo예요." },
        tip: { en: "Quando está livre?", why: "livre는 ‘한가한’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "가게 언제 열어요?", answers: ["Quando abre a loja?"],
        wrong: { "quando abre o loja": "loja는 여성 명사라 a loja예요." },
        tip: { en: "A que horas abre a loja?", why: "a que horas는 ‘몇 시에’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "파티 언제예요?", answers: ["Quando é a festa?"],
        ctx: { lead: "o jantar 대신 ‘파티(a festa)’를 넣어 보세요.", en: "Quando é o jantar?" },
        wrong: { "quando é o festa": "festa는 여성 명사라 a festa예요." },
        tip: { en: "Em que dia é a festa?", why: "em que dia는 ‘며칠에, 무슨 요일에’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "언제?", answers: ["Quando?", "Quando é que vais?", "Quando vais?"],
        dialog: { a: "Vou de férias.", aKo: "나 휴가 가." },
        wrong: { "cuándo": "cuándo는 스페인어예요. 포르투갈어는 quando예요." },
        tip: { en: "Vais quando?", why: "말할 때는 quando를 뒤에 붙이기도 해요." } }
    ]
  };
})(window.EP);
