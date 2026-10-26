/* 포르투갈어(유럽) 세션 38. Conheço ~. (형식은 pattern1.js 위쪽 설명과 같다)
   상대에게 묻는 문장(Conhece ~?)은 문제에 subject: "" */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[38] = {
    no: 38, form: "Conheço ~.", stem: "Conheço/Conheces/Conhece", subject: "eu", meaning: "(사람·장소를) 알아요",
    hint: "Conheço + 사람/장소",
    intro: {
      blocks: [["Conheço", "나는 (겪어서) 안다"], ["~", "사람 / 장소"]],
      lines: [
        "Conheço는 conhecer의 ‘나’ 형태예요. 사람이나 장소를 ‘(만나 봐서, 가 봐서) 알아요’예요.",
        "사실이나 방법을 아는 건 sei예요: Sei onde fica. / Conheço o Porto.",
        "친구에게는 Conheces ~?, 존댓말로는 Conhece ~?로 물어요."
      ],
      examples: [
        { en: "Conheço bem Lisboa.", ko: "리스본을 잘 알아요." },
        { en: "Conheço o teu irmão.", ko: "네 형(남동생) 알아." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 그 식당 알아.", before: "", after: "esse restaurante.", answers: ["Conheço"],
        wrong: { "sei": "장소·사람을 아는 건 conheço예요. sei는 사실·방법이에요." },
        tip: { en: "Já fui a esse restaurante.", why: "‘그 식당 가 봤어’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 마리아 알아?", before: "", after: "a Maria?", answers: ["Conheces"],
        wrong: { "sabes": "사람을 아는 건 conheces예요.", "conheço": "conheço는 ‘나는’이에요." },
        tip: { en: "Sabes quem é a Maria?", why: "‘마리아가 누군지 알아?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 포르투는 아직 몰라(가 본 적 없어).", before: "Ainda não", after: "o Porto.", answers: ["conheço"],
        wrong: { "sei": "장소를 아는 건 conheço예요." },
        tip: { en: "Ainda não fui ao Porto.", why: "‘포르투에 아직 안 가 봤어’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "우리 이미 아는 사이예요.", before: "Já nos", after: ".", answers: ["conhecemos"],
        wrong: { "conhecemo-nos": "já가 앞에 오면 nos가 동사 앞으로 와요: já nos conhecemos." },
        tip: { en: "Nós já nos conhecemos.", why: "nós(우리는)를 앞에 넣어도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "이 동네 잘 아세요?", before: "Conhece bem este", after: "?", answers: ["bairro"],
        wrong: { "barrio": "barrio는 스페인어예요. 포르투갈어는 bairro예요." },
        tip: { en: "É daqui?", why: "‘여기 분이세요?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 그 사람 아버지 알아.", answers: ["Conheço o pai dele."],
        wrong: { "sei o pai dele": "사람을 아는 건 conheço예요." },
        tip: { en: "Já conheci o pai dele.", why: "conheci는 ‘알게 됐다, 만났다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 이 노래 알아.", answers: ["Conheço esta canção."],
        wrong: { "conheço este canção": "canção는 여성 명사라 esta예요." },
        tip: { en: "Já ouvi esta canção.", why: "‘이 노래 들어 봤어’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 여기 아무도 몰라.", answers: ["Não conheço ninguém aqui."],
        wrong: { "conheço ninguém aqui": "‘아무도 ~ 않다’는 não ... ninguém이에요." },
        tip: { en: "Aqui não conheço ninguém.", why: "aqui를 앞에 말해도 돼요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "좋은 식당 아세요?", answers: ["Conhece um bom restaurante?"], subject: "",
        wrong: { "sabe um bom restaurante": "장소를 아는 건 conhece예요." },
        tip: { en: "Pode recomendar um restaurante?", why: "recomendar는 ‘추천하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 알파마 잘 알아.", answers: ["Conheço bem Alfama.", "Conheço bem a Alfama."],
        ctx: { lead: "Lisboa 대신 ‘알파마(Alfama)’를 넣어 보세요.", en: "Conheço bem Lisboa." },
        wrong: { "sei bem alfama": "장소를 아는 건 conheço예요." },
        tip: { en: "Conheço Alfama como a palma da mão.", why: "‘손바닥 보듯 잘 안다’는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 알아. 내 이웃이야.", answers: ["Sim, conheço. É o meu vizinho.", "Sim, conheço. É meu vizinho."],
        dialog: { a: "Conheces o Rui?", aKo: "후이 알아?" },
        wrong: { "sim sei é o meu vizinho": "사람을 아는 건 conheço예요." },
        tip: { en: "Conheço, sim. Mora ao meu lado.", why: "ao meu lado는 ‘내 옆에’예요." } }
    ]
  };
})(window.EP);
