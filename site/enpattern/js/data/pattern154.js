/* 세션 154. When do you expect to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[154] = {
    no: 154, form: "When do you expect to ~?", stem: "When do you expect to", meaning: "언제 ~할 것 같아요?",
    hint: "When do you expect to + 동사?",
    intro: {
      blocks: [["When do you expect", "언제 예상하니"], ["to ~?", "~할 것을"]],
      lines: [
        "When do you expect to + 동사?는 ‘언제쯤 ~할 것 같아?’예요. 예상 시점을 물어요.",
        "to 뒤에는 동사 원래 모양을 써요.",
        "일정이나 결과를 확인할 때 회사에서도 많이 써요."
      ],
      examples: [
        { en: "When do you expect to finish?", ko: "언제쯤 끝날 것 같아?" },
        { en: "When do you expect to arrive?", ko: "언제쯤 도착할 것 같아?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "언제쯤 끝날 것 같아?", before: "When do you expect to", after: "?", answers: ["finish"],
        wrong: { "finishing": "to 뒤에는 동사 원래 모양 finish를 써요." },
        tip: { en: "How long will it take?", why: "‘얼마나 걸려?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "언제쯤 도착할 것 같아?", before: "When do you expect to", after: "?", answers: ["arrive"],
        wrong: { "arrive at": "도착 장소가 없으면 arrive만 써요." },
        tip: { en: "What's your ETA?", why: "ETA는 ‘도착 예정 시간’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "언제쯤 돌아올 것 같아?", before: "When do you", after: "to be back?", answers: ["expect"],
        wrong: { "expected": "do you 뒤에는 동사 원래 모양 expect를 써요." },
        tip: { en: "When will you be back?", why: "‘언제 돌아와?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "언제쯤 소식 들을 것 같아?", before: "When do you expect to", after: "back?", answers: ["hear"],
        wrong: { "listen": "‘소식을 듣다’는 hear예요." },
        tip: { en: "Any news yet?", why: "‘아직 소식 없어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "언제쯤 졸업할 것 같아?", before: "When do you expect", after: "graduate?", answers: ["to"],
        wrong: { "for": "할 일 앞에는 for가 아니라 to를 써요." },
        tip: { en: "When's graduation?", why: "graduation은 ‘졸업’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "언제쯤 결과가 나올 것 같아?", answers: ["When do you expect to get the results?", "When do you expect to get the result?"],
        wrong: { "when do you expect to getting the results": "to 뒤에는 동사 원래 모양 get을 써요.", "when you expect to get the results": "물을 때는 do를 붙여요. When do you예요." },
        tip: { en: "When will the results come out?", why: "come out은 ‘나오다’예요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "언제쯤 이사할 것 같아?", answers: ["When do you expect to move?", "When do you expect to move out?"],
        wrong: { "when do you expect to moving": "to 뒤에는 동사 원래 모양 move를 써요." },
        tip: { en: "When's moving day?", why: "moving day는 ‘이삿날’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "언제쯤 퇴원할 것 같아?", answers: ["When do you expect to leave the hospital?", "When do you expect to get out of the hospital?"],
        wrong: { "when do you expect to leave hospital the": "‘병원을 나가다’는 leave the hospital이에요." },
        tip: { en: "Get well soon.", why: "‘얼른 나아’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "언제쯤 그 일을 시작할 것 같아?", answers: ["When do you expect to start the job?", "When do you expect to start work?", "When do you expect to start?"],
        wrong: { "when do you expect to starting the job": "to 뒤에는 동사 원래 모양 start를 써요." },
        tip: { en: "When's your first day?", why: "‘첫 출근 언제야?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "언제쯤 떠날 것 같아?", answers: ["When do you expect to leave?"],
        ctx: { lead: "finish 대신 ‘떠나다(leave)’로 바꿔 보세요.", en: "When do you expect to finish?" },
        wrong: { "when do you expect to leaving": "to 뒤에는 동사 원래 모양 leave를 써요." },
        tip: { en: "When are you heading out?", why: "head out은 ‘출발하다’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "언제쯤 고쳐질 것 같아요?", answers: ["When do you expect to fix it?", "When do you expect to have it fixed?", "When do you expect to finish fixing it?"],
        dialog: { a: "We're working on your car now.", aKo: "지금 차 수리 중이에요." },
        wrong: { "when do you expect to fixing it": "to 뒤에는 동사 원래 모양 fix를 써요." },
        tip: { en: "How long will it take?", why: "‘얼마나 걸려요?’라는 말이에요." } }
    ]
  };
})(window.EP);
