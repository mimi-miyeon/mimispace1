/* 포르투갈어(유럽) 세션 34. Qual é ~? (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[34] = {
    no: 34, form: "Qual é ~?", stem: "Qual é/Quais são/Qual", meaning: "~이 뭐예요? / 어느 거예요?",
    hint: "Qual é + o/a + 명사?",
    intro: {
      blocks: [["Qual", "어느 것, 무엇"], ["é", "~이다"], ["~", "o/a + 명사"]],
      lines: [
        "Qual é ~?는 정해진 것 중에서 ‘뭐예요?, 어느 거예요?’예요: Qual é o seu nome?",
        "이름·번호·주소처럼 답이 하나인 것을 물을 때는 o que é가 아니라 qual é예요.",
        "여럿이면 Quais são ~?예요."
      ],
      examples: [
        { en: "Qual é o seu nome?", ko: "성함이 뭐예요?" },
        { en: "Qual é a sua morada?", ko: "주소가 뭐예요?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "휴대폰 번호가 뭐예요?", before: "Qual é o seu número de", after: "?", answers: ["telemóvel", "telefone"],
        wrong: { "celular": "celular는 브라질 말이에요. 포르투갈에서는 telemóvel이에요." },
        tip: { en: "Pode dar-me o seu número?", why: "‘번호 좀 주실래요?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어느 게 네 거야?", before: "", after: "é o teu?", answers: ["Qual"],
        wrong: { "o que": "여럿 중 ‘어느 거’는 qual이에요." },
        tip: { en: "Qual deles é o teu?", why: "qual deles는 ‘그중 어느 것’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "좋아하는 색이 뭐야?", before: "Qual é a tua cor", after: "?", answers: ["preferida", "favorita"],
        wrong: { "preferido": "cor는 여성 명사라 preferida예요." },
        tip: { en: "De que cor gostas mais?", why: "‘무슨 색을 제일 좋아해?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "와이파이 비밀번호가 뭐예요?", before: "Qual é a", after: "do wi-fi?", answers: ["senha", "palavra-passe"],
        wrong: { "contraseña": "contraseña는 스페인어예요. 포르투갈어는 senha 또는 palavra-passe예요." },
        tip: { en: "Tem a senha do wi-fi?", why: "‘와이파이 비밀번호 있어요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "네가 제일 좋아하는 음식들이 뭐야?", before: "", after: "são as tuas comidas preferidas?", answers: ["Quais"],
        wrong: { "qual": "여럿이면 quais예요." },
        tip: { en: "O que gostas mais de comer?", why: "‘뭐 먹는 걸 제일 좋아해?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 이메일 주소 뭐야?", answers: ["Qual é o teu email?", "Qual é o teu e-mail?", "Qual é o teu endereço de email?"],
        wrong: { "o que é o teu email": "답이 하나인 것을 물을 때는 qual é예요." },
        tip: { en: "Dás-me o teu email?", why: "‘이메일 알려 줄래?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "제일 가까운 역이 어느 거예요?", answers: ["Qual é a estação mais próxima?"],
        wrong: { "qual é o estação mais próxima": "estação는 여성 명사라 a estação예요." },
        tip: { en: "Onde fica a estação mais próxima?", why: "onde fica는 ‘어디에 있어요’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "네 계획이 뭐야?", answers: ["Qual é o teu plano?"],
        wrong: { "o que é o teu plano": "답이 하나인 것을 물을 때는 qual é예요." },
        tip: { en: "Qual é a tua ideia?", why: "ideia는 ‘생각’이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "차이가 뭐예요?", answers: ["Qual é a diferença?"],
        wrong: { "qual é o diferença": "diferença는 여성 명사라 a diferença예요." },
        tip: { en: "Qual é a diferença entre os dois?", why: "entre os dois는 ‘둘 사이에’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "직업이 뭐예요?", answers: ["Qual é a sua profissão?"],
        ctx: { lead: "nome 대신 ‘직업(profissão)’을 넣어 보세요.", en: "Qual é o seu nome?" },
        wrong: { "qual é o seu profissão": "profissão는 여성 명사라 a sua예요." },
        tip: { en: "O que faz na vida?", why: "‘무슨 일 하세요?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "어느 게 더 싸요?", answers: ["Qual é o mais barato?", "Qual é mais barato?"],
        dialog: { a: "Temos dois quartos livres.", aKo: "빈방이 두 개 있어요." },
        wrong: { "o que é o mais barato": "둘 중 ‘어느 것’은 qual이에요." },
        tip: { en: "Qual deles é mais barato?", why: "qual deles는 ‘그중 어느 것’이에요." } }
    ]
  };
})(window.EP);
