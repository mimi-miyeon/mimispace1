/* 포르투갈어(유럽) 세션 93. Fica a ~. (거리) (형식은 pattern1.js 위쪽 설명과 같다) */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[93] = {
    no: 93, form: "Fica a ~.", stem: "Fica a/fica a/Fica/fica", meaning: "~ 거리에 있어요",
    hint: "Fica a + 시간/거리",
    intro: {
      blocks: [["Fica", "(위치가) 있다"], ["a", "~ 떨어진"], ["~", "시간 / 거리"]],
      lines: [
        "Fica a + 시간·거리는 ‘~ 거리에 있어요’예요: Fica a dez minutos daqui.(여기서 10분 거리예요)",
        "Fica perto(가까워요), Fica longe(멀어요)도 자주 써요.",
        "‘걸어서’는 a pé예요: Fica a cinco minutos a pé."
      ],
      examples: [
        { en: "Fica a dez minutos daqui.", ko: "여기서 10분 거리예요." },
        { en: "Fica a cinco minutos a pé.", ko: "걸어서 5분이에요." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "여기서 멀어요?", before: "Fica", after: "daqui?", answers: ["longe"],
        wrong: { "lejos": "lejos는 스페인어예요. 포르투갈어는 longe예요." },
        tip: { en: "É longe daqui?", why: "é longe도 ‘멀어요?’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "걸어서 15분이에요.", before: "Fica a quinze minutos a", after: ".", answers: ["pé"],
        wrong: { "pie": "pie는 스페인어예요. 포르투갈어는 a pé예요." },
        tip: { en: "São quinze minutos a pé.", why: "são + 시간도 써요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "바로 옆이에요.", before: "Fica mesmo ao", after: ".", answers: ["lado"],
        wrong: { "lau": "포르투갈어로 ‘옆’은 lado예요." },
        tip: { en: "É aqui ao lado.", why: "ao lado는 ‘옆에’예요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "역에서 2km 거리예요.", before: "Fica a dois", after: "da estação.", answers: ["quilómetros"],
        wrong: { "kilómetros": "포르투갈 표기는 quilómetros예요." },
        tip: { en: "São dois quilómetros.", why: "são + 거리도 써요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "차로 30분 거리예요.", before: "Fica a meia hora de", after: ".", answers: ["carro"],
        wrong: { "coche": "coche는 스페인어예요. 포르투갈어는 carro예요." },
        tip: { en: "De carro, é meia hora.", why: "de carro는 ‘차로’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "해변은 여기서 20분 거리예요.", answers: ["A praia fica a vinte minutos daqui."], alts: ["A praia está a vinte minutos daqui."],
        wrong: { "a praia fica a veinte minutos daqui": "veinte는 스페인어예요. 포르투갈어는 vinte예요." },
        tip: { en: "A praia é perto, a vinte minutos.", why: "perto는 ‘가까운’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "아주 가까워요.", answers: ["Fica muito perto."],
        wrong: { "fica muy perto": "muy는 스페인어예요. 포르투갈어는 muito예요." },
        tip: { en: "É já ali.", why: "‘바로 저기예요’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "호텔이 시내에서 멀어요?", answers: ["O hotel fica longe do centro?"],
        wrong: { "o hotel fica lejos do centro": "lejos는 스페인어예요. 포르투갈어는 longe예요." },
        tip: { en: "O hotel é longe do centro?", why: "é longe도 ‘멀어요’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "역 바로 앞이에요.", answers: ["Fica mesmo em frente à estação."],
        wrong: { "fica mesmo enfrente à estação": "‘앞에’는 em frente예요. 띄어 써요." },
        tip: { en: "É mesmo à frente da estação.", why: "à frente de도 ‘~ 앞에’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "여기서 한 시간 거리예요.", answers: ["Fica a uma hora daqui."],
        ctx: { lead: "dez minutos 대신 ‘한 시간(uma hora)’을 넣어 보세요.", en: "Fica a dez minutos daqui." },
        wrong: { "fica a um hora daqui": "hora는 여성 명사라 uma예요." },
        tip: { en: "É a uma hora daqui.", why: "é a도 ‘~ 거리예요’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "아니요, 걸어서 5분이에요.", answers: ["Não, fica a cinco minutos a pé."],
        dialog: { a: "O museu é longe?", aKo: "박물관 멀어요?" },
        wrong: { "não fica a cinco minutos de pé": "‘걸어서’는 a pé예요. de pé는 ‘서서’예요." },
        tip: { en: "Não, é já ali.", why: "‘아니요, 바로 저기예요’라는 말이에요." } }
    ]
  };
})(window.EP);
