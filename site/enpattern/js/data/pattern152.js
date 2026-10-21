/* 세션 152. When do you ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[152] = {
    no: 152, form: "When do you ~?", stem: "When do you", meaning: "언제 ~해요?",
    hint: "When do you + 동사?",
    intro: {
      blocks: [["When", "언제"], ["do you ~?", "너는 ~하니?"]],
      lines: [
        "When do you + 동사?는 ‘너 언제 ~해?’예요. 습관이나 정해진 일을 물어요.",
        "do you 뒤에는 동사 원래 모양을 써요.",
        "그 사람(he, she)이면 When does he ~?예요."
      ],
      examples: [
        { en: "When do you get up?", ko: "너 언제 일어나?" },
        { en: "When do you finish work?", ko: "너 일 언제 끝나?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "너 언제 일어나?", before: "When do you", after: "up?", answers: ["get"],
        wrong: { "gets": "do you 뒤에는 동사 원래 모양 get을 써요." },
        tip: { en: "What time do you wake up?", why: "What time은 ‘몇 시’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "너 일 언제 끝나?", before: "When do you", after: "work?", answers: ["finish"],
        wrong: { "finishing": "do you 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "When do you get off work?", why: "get off work는 ‘퇴근하다’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "너 언제 떠나?", before: "When", after: "you leave?", answers: ["do"],
        wrong: { "are": "동사가 있으니 do를 써요. When do you예요.", "does": "you 앞에는 do를 써요." },
        tip: { en: "When's your flight?", why: "flight는 ‘비행편’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "너 보통 언제 운동해?", before: "When do you usually", after: "out?", answers: ["work"],
        wrong: { "works": "do you 뒤에는 동사 원래 모양 work를 써요." },
        tip: { en: "Are you a morning person?", why: "‘아침형이야?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "너 언제 자?", before: "", after: "do you go to bed?", answers: ["When"],
        wrong: { "what": "때를 물을 때는 When이에요." },
        tip: { en: "What's your bedtime?", why: "bedtime은 ‘잘 시간’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "너 언제 점심 먹어?", answers: ["When do you have lunch?", "When do you eat lunch?"],
        wrong: { "when you have lunch": "물을 때는 do를 붙여요. When do you예요.", "when do you having lunch": "do you 뒤에는 동사 원래 모양 have를 써요." },
        tip: { en: "What time is your lunch break?", why: "lunch break는 ‘점심시간’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "너 언제 한국에 돌아와?", answers: ["When do you come back to Korea?", "When do you get back to Korea?"],
        wrong: { "when do you come back korea": "back 뒤에 to를 붙여요. back to Korea예요." },
        tip: { en: "When are you coming back?", why: "‘언제 돌아와?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "너 언제 시간 돼?", answers: ["When do you have time?", "When do you get free time?"], alts: ["When are you free?"],
        wrong: { "when do you has time": "do you 뒤에는 have를 써요." },
        tip: { en: "When are you free?", why: "‘언제 한가해?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "너 언제 출근해?", answers: ["When do you go to work?", "When do you start work?", "When do you leave for work?"],
        wrong: { "when do you go to the work": "‘출근하다’는 go to work예요. the를 붙이지 않아요." },
        tip: { en: "What time do you start?", why: "‘몇 시에 시작해?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "너 언제 숙제해?", answers: ["When do you do your homework?", "When do you do homework?"],
        ctx: { lead: "get up 대신 ‘숙제하다(do your homework)’로 바꿔 보세요.", en: "When do you get up?" },
        wrong: { "when do you do your homeworks": "homework는 s를 붙이지 않아요." },
        tip: { en: "Do you study after dinner?", why: "‘저녁 먹고 공부해?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "너 보통 언제 가?", answers: ["When do you usually go?", "When do you usually go there?"],
        dialog: { a: "I go to the gym every day.", aKo: "나 매일 헬스장 가." },
        wrong: { "when do you usually goes": "do you 뒤에는 동사 원래 모양 go를 써요." },
        tip: { en: "Is it busy in the evening?", why: "‘저녁엔 붐벼?’라는 말이에요." } }
    ]
  };
})(window.EP);
