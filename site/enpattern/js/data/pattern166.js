/* 세션 166. How many ~ are there? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[166] = {
    no: 166, form: "How many ~ are there?", stem: "How many", meaning: "~가 몇 개 있어요?",
    hint: "How many + 명사(복수) + are there?",
    intro: {
      blocks: [["How many ~", "몇 개의 ~가"], ["are there?", "있니?"]],
      lines: [
        "How many + 복수 명사 + are there?는 ‘~가 몇 개(몇 명) 있어?’예요.",
        "How many 뒤에는 셀 수 있는 명사에 s를 붙여요. (people은 그대로)",
        "장소를 붙이면 ‘~에 몇 개 있어?’예요. (How many rooms are there in the house?)"
      ],
      examples: [
        { en: "How many people are there?", ko: "사람이 몇 명 있어?" },
        { en: "How many rooms are there?", ko: "방이 몇 개 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "사람이 몇 명 있어?", before: "How many people", after: "there?", answers: ["are"],
        wrong: { "is": "여러 명이라 are를 써요.", "do": "‘~가 몇 명 있어?’는 are there예요." },
        tip: { en: "How big is the group?", why: "‘몇 명이야?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "방이 몇 개 있어?", before: "How many", after: "are there?", answers: ["rooms"],
        wrong: { "room": "How many 뒤에는 여러 개라 rooms예요." },
        tip: { en: "Is it a big house?", why: "‘큰 집이야?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "문제가 몇 개 있어?", before: "How", after: "questions are there?", answers: ["many"],
        wrong: { "much": "셀 수 있는 것은 How many예요." },
        tip: { en: "Is it a long test?", why: "‘시험 길어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "한 반에 학생이 몇 명 있어?", before: "How many students are", after: "in a class?", answers: ["there"],
        wrong: { "their": "‘있다’는 there예요." },
        tip: { en: "Are the classes big?", why: "‘반 인원 많아?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "일주일은 며칠이야?", before: "", after: "many days are there in a week?", answers: ["How"],
        wrong: { "what": "개수를 물을 때는 How many예요." },
        tip: { en: "Seven, of course.", why: "‘당연히 7일이지’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "의자가 몇 개 있어?", answers: ["How many chairs are there?"],
        wrong: { "how many chair are there": "How many 뒤에는 여러 개라 chairs예요.", "how many chairs is there": "여러 개라 are를 써요." },
        tip: { en: "Do we have enough seats?", why: "‘자리 충분해?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "이 건물에 층이 몇 개 있어?", answers: ["How many floors are there in this building?", "How many floors are there?"],
        wrong: { "how much floors are there in this building": "셀 수 있는 것은 How many예요." },
        tip: { en: "Is there an elevator?", why: "‘엘리베이터 있어?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "팀에 몇 명 있어?", answers: ["How many people are there on the team?", "How many people are there in the team?", "How many members are there?"],
        wrong: { "how many peoples are there on the team": "‘사람들’은 people이에요. s를 붙이지 않아요." },
        tip: { en: "How big is your team?", why: "‘팀이 얼마나 커?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "정류장이 몇 개 남았어?", answers: ["How many stops are there left?", "How many more stops are there?"],
        wrong: { "how many stop are there left": "How many 뒤에는 여러 개라 stops예요." },
        tip: { en: "Are we almost there?", why: "‘거의 다 왔어?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "버스가 몇 대 있어?", answers: ["How many buses are there?"],
        ctx: { lead: "people 대신 ‘버스(buses)’로 바꿔 보세요.", en: "How many people are there?" },
        wrong: { "how many bus are there": "How many 뒤에는 여러 개라 buses예요.", "how many buss are there": "bus의 여러 개는 buses예요." },
        tip: { en: "How often do they come?", why: "‘얼마나 자주 와?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "거기 화장실 몇 개 있어?", answers: ["How many bathrooms are there?", "How many restrooms are there?", "How many bathrooms are there in it?"],
        dialog: { a: "I found a nice apartment.", aKo: "나 괜찮은 아파트 찾았어." },
        wrong: { "how many bathroom are there": "How many 뒤에는 여러 개라 bathrooms예요." },
        tip: { en: "Is there a balcony?", why: "balcony는 ‘발코니’예요." } }
    ]
  };
})(window.EP);
