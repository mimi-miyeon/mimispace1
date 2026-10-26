/* 포르투갈어(유럽) 세션 7. Há ~? / Há ~. (형식은 pattern1.js 위쪽 설명과 같다)
   há는 주어가 없어서 subject를 두지 않는다 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[7] = {
    no: 7, form: "Há ~?", stem: "Há", meaning: "~ 있어요? / ~이 있어요",
    hint: "Há + 명사",
    intro: {
      blocks: [["Há", "~이 있다 (haver)"], ["~", "무엇"]],
      lines: [
        "Há는 haver 동사로 ‘(어떤 곳에) ~이 있다’예요. 주어 없이 써요.",
        "물을 때는 끝만 올려요: Há uma farmácia aqui perto?",
        "h는 소리 나지 않아요. 그래도 h와 악센트 á까지 꼭 써요."
      ],
      examples: [
        { en: "Há um café aqui perto?", ko: "이 근처에 카페 있어요?" },
        { en: "Há muita gente.", ko: "사람이 많아요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "이 근처에 약국 있어요?", before: "", after: "uma farmácia aqui perto?", answers: ["Há"],
        wrong: { "a": "há(있다)는 h와 악센트까지 써야 해요. a는 다른 말이에요.", "tem": "브라질에서는 tem도 쓰지만, 포르투갈에서는 há예요.", "está": "‘~ 있어요?’는 há예요. está는 정해진 것이 어디 있는지 물을 때 써요." },
        tip: { en: "Sabe se há uma farmácia aqui?", why: "‘여기 약국 있는지 아세요?’라는 정중한 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "냉장고에 우유 있어요.", before: "Há leite", after: "frigorífico.", answers: ["no"],
        wrong: { "na": "frigorífico는 남성 명사라 na가 아니라 no예요.", "em": "frigorífico 앞에 관사 o가 붙어서 em + o = no예요." },
        tip: { en: "Ainda há leite?", why: "‘아직 우유 있어요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "문제없어요.", before: "Não", after: "problema.", answers: ["há"],
        wrong: { "tem": "포르투갈에서는 ‘없다’도 não há로 말해요.", "a": "há(있다)는 h와 악센트까지 써야 해요. a는 다른 말이에요." },
        tip: { en: "Não faz mal.", why: "‘괜찮아요, 상관없어요’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "방에 의자가 두 개 있어요.", before: "Há", after: "cadeiras no quarto.", answers: ["duas"],
        wrong: { "dois": "cadeira는 여성 명사라 duas예요." },
        tip: { en: "No quarto há duas cadeiras.", why: "장소를 앞에 말해도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "여기 와이파이 있어요?", before: "Há", after: "aqui?", answers: ["wi-fi", "wifi"],
        tip: { en: "Têm wi-fi?", why: "가게에 ‘와이파이 있어요?’라고 물을 때도 써요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 근처에 슈퍼마켓 있어요?", answers: ["Há um supermercado aqui perto?"],
        wrong: { "tem um supermercado aqui perto": "포르투갈에서는 ‘~ 있어요?’를 há로 물어요.", "a um supermercado aqui perto": "há(있다)는 h와 악센트까지 써야 해요. a는 다른 말이에요." },
        tip: { en: "Há algum supermercado perto daqui?", why: "perto daqui도 ‘이 근처’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "오늘 사람이 많아요.", answers: ["Hoje há muita gente.", "Há muita gente hoje."],
        wrong: { "hoje há muitas gentes": "gente는 그대로 ‘사람들’이라는 뜻이라 s를 붙이지 않아요: muita gente." },
        tip: { en: "Hoje está cheio.", why: "‘오늘 꽉 찼어요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "문제가 있어요.", answers: ["Há um problema."],
        wrong: { "tem um problema": "‘(일에) 문제가 있다’는 há로 말해요. tem은 ‘그/그녀가 가지고 있다’예요." },
        tip: { en: "Temos um problema.", why: "‘우리 문제가 생겼어요’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "냉장고에 아무것도 없어요.", answers: ["Não há nada no frigorífico."],
        wrong: { "não há nada na frigorífico": "frigorífico는 남성 명사라 no예요.", "há nada no frigorífico": "‘아무것도 없다’는 não há nada예요. não가 꼭 필요해요." },
        tip: { en: "O frigorífico está vazio.", why: "vazio는 ‘비어 있는’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 근처에 은행 있어요?", answers: ["Há um banco aqui perto?"],
        ctx: { lead: "farmácia 대신 ‘은행(banco)’을 넣어 보세요.", en: "Há uma farmácia aqui perto?" },
        wrong: { "há uma banco aqui perto": "banco는 남성 명사라 um이에요." },
        tip: { en: "Há algum banco por aqui?", why: "por aqui는 ‘이 근처에’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 있어요.", answers: ["Sim, há.", "Há, sim."],
        dialog: { a: "Há mesas livres?", aKo: "빈 테이블 있어요?" },
        wrong: { "sim tem": "포르투갈에서는 há로 물으면 há로 대답해요.", "sim está": "‘있다’는 está가 아니라 há예요." },
        tip: { en: "Há, sim. Por aqui.", why: "por aqui는 ‘이쪽으로’예요." } }
    ]
  };
})(window.EP);
