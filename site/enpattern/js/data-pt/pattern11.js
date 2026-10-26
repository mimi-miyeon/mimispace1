/* 포르투갈어(유럽) 세션 11. Chamo-me ~. (형식은 pattern1.js 위쪽 설명과 같다)
   stem: 다른 사람(chama-se), não가 앞에 와서 대명사가 앞으로 간 모양(me chamo)도 핵심 부분으로 */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[11] = {
    no: 11, form: "Chamo-me ~.", stem: "Chamo-me/Chama-se/me chamo", subject: "eu", meaning: "제 이름은 ~예요",
    hint: "Chamo-me + 이름",
    intro: {
      blocks: [["Chamo-me", "나를 ~라고 부른다"], ["~", "이름"]],
      lines: [
        "chamar-se(~라고 불리다)로 이름을 말해요. 직역하면 ‘나를 ~라고 불러요’예요.",
        "포르투갈에서는 me를 동사 뒤에 하이픈으로 붙여요: Chamo-me. Me chamo는 브라질식이에요.",
        "단, não가 앞에 오면 me가 동사 앞으로 가요: Não me chamo Ana."
      ],
      examples: [
        { en: "Chamo-me Ana.", ko: "제 이름은 아나예요." },
        { en: "Chamo-me Pedro Silva.", ko: "제 이름은 페드루 실바예요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "제 이름은 민지예요.", before: "", after: "Minji.", answers: ["Chamo-me"],
        wrong: { "me chamo": "포르투갈에서는 me를 동사 뒤에 붙여요: chamo-me. me chamo는 브라질식이에요.", "chamo": "chamar-se는 me가 꼭 필요해요: chamo-me." },
        tip: { en: "O meu nome é Minji.", why: "‘제 이름은 ~예요’를 이렇게도 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그 사람 이름은 주앙이에요.", before: "Ele", after: "João.", answers: ["chama-se"],
        wrong: { "chamo-me": "‘그는’이면 chama-se예요. chamo-me는 ‘나는’이에요.", "se chama": "포르투갈에서는 se를 동사 뒤에 붙여요: chama-se." },
        tip: { en: "O nome dele é João.", why: "dele는 ‘그의’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "성함이 어떻게 되세요?", before: "Como se", after: "?", answers: ["chama"],
        wrong: { "chamo": "상대에게 물을 때는 chama예요. chamo는 ‘나는’이에요.", "llama": "llama는 스페인어예요. 포르투갈어는 chama예요." },
        tip: { en: "Qual é o seu nome?", why: "‘성함이 뭐예요?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 이름이 뭐야?", before: "Como te", after: "?", answers: ["chamas"],
        wrong: { "chama": "친구(tu)에게는 chamas예요. chama는 존댓말이에요.", "chamo": "chamo는 ‘나는’이에요. 친구에게는 chamas예요." },
        tip: { en: "Qual é o teu nome?", why: "teu는 친구에게 쓰는 ‘너의’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "제 성은 김이에요.", before: "O meu apelido", after: "Kim.", answers: ["é"],
        wrong: { "está": "이름이나 성은 바뀌지 않는 것이라 é예요." },
        tip: { en: "Sou a Minji Kim.", why: "이름과 성을 함께 말할 수도 있어요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "제 이름은 서연이에요.", answers: ["Chamo-me Seoyeon."],
        wrong: { "chamo seoyeon": "chamar-se는 me가 꼭 필요해요: chamo-me." },
        tip: { en: "O meu nome é Seoyeon.", why: "‘제 이름은 ~예요’를 이렇게도 말해요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그녀 이름은 마리아예요.", answers: ["Ela chama-se Maria.", "Chama-se Maria."], subject: "",
        wrong: { "ela se chama maria": "포르투갈에서는 se를 동사 뒤에 붙여요: chama-se.", "ela chamo-me maria": "‘그녀는’이면 chama-se예요. chamo-me는 ‘나는’이에요." },
        tip: { en: "O nome dela é Maria.", why: "dela는 ‘그녀의’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "제 이름은 루이스예요. 만나서 반가워요.", answers: ["Chamo-me Luís. Muito prazer."],
        wrong: { "chamo-me luís mucho gusto": "mucho gusto는 스페인어예요. 포르투갈어는 muito prazer예요." },
        tip: { en: "Sou o Luís. Prazer.", why: "Prazer만 말해도 ‘반가워요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "제 이름은 마리아가 아니에요.", answers: ["Não me chamo Maria."],
        wrong: { "não chamo-me maria": "não가 앞에 오면 me를 동사 앞으로 옮겨요: não me chamo." },
        tip: { en: "O meu nome não é Maria.", why: "‘제 이름은 마리아가 아니에요’를 이렇게도 말해요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "제 이름은 지수예요.", answers: ["Chamo-me Jisu."],
        ctx: { lead: "Ana 대신 ‘지수(Jisu)’를 넣어 보세요.", en: "Chamo-me Ana." },
        wrong: { "chamo-me a jisu": "chamar-se 뒤에는 이름 앞에 관사를 붙이지 않아요." },
        tip: { en: "Sou a Jisu.", why: "sou로 이름을 말해도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "내 이름은 하나야. 너는?", answers: ["Chamo-me Hana. E tu?"],
        dialog: { a: "Como te chamas?", aKo: "너 이름이 뭐야?" },
        wrong: { "chamo-me hana e você": "친구(tu)가 물었으니 E tu?로 되물어요." },
        tip: { en: "Sou a Hana. E tu?", why: "sou로 이름을 말해도 돼요." } }
    ]
  };
})(window.EP);
