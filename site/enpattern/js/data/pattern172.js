/* 세션 172. How long does it take to get to ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[172] = {
    no: 172, form: "How long does it take to get to ~?", stem: "How long does it take to get to/How long does it take to get there/How long does it take to get home", meaning: "~까지 얼마나 걸리나요?",
    hint: "How long does it take to get to + 장소?",
    intro: {
      blocks: [["How long does it take", "얼마나 걸리니"], ["to get to ~?", "~까지 가는 데"]],
      lines: [
        "How long does it take to get to + 장소?는 ‘~까지 가는 데 얼마나 걸려?’예요.",
        "get to는 ‘~에 도착하다’예요. there나 home 앞에는 to를 빼요.",
        "탈것을 붙이면 by bus, by car처럼 말해요."
      ],
      examples: [
        { en: "How long does it take to get to the airport?", ko: "공항까지 얼마나 걸려?" },
        { en: "How long does it take to get to school?", ko: "학교까지 얼마나 걸려?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "공항까지 얼마나 걸려?", before: "How long does it take to get", after: "the airport?", answers: ["to"],
        wrong: { "at": "‘~까지 가다’는 get to예요." },
        tip: { en: "Should we leave now?", why: "‘지금 출발해야 해?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "역까지 얼마나 걸려요?", before: "How long does it", after: "to get to the station?", answers: ["take"],
        wrong: { "takes": "does 뒤에는 동사 원래 모양 take를 써요.", "spend": "시간이 ‘걸리다’는 take예요." },
        tip: { en: "Is it walking distance?", why: "walking distance는 ‘걸어갈 거리’예요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "회사까지 얼마나 걸려?", before: "How long does it take to", after: "to work?", answers: ["get"],
        wrong: { "go": "‘~까지 가다’는 get to가 자연스러워요." },
        tip: { en: "How's your commute?", why: "commute는 ‘출퇴근길’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "거기까지 얼마나 걸려?", before: "How long does it take to get", after: "?", answers: ["there"],
        wrong: { "to there": "there 앞에는 to를 붙이지 않아요." },
        tip: { en: "Is it far?", why: "‘멀어?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "시내까지 얼마나 걸려요?", before: "How", after: "does it take to get to downtown?", answers: ["long"],
        wrong: { "much": "시간을 물을 때는 How long이에요." },
        tip: { en: "Is there a shuttle?", why: "shuttle은 ‘셔틀버스’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "학교까지 얼마나 걸려?", answers: ["How long does it take to get to school?"],
        wrong: { "how long does it take to get to the school": "‘학교에 가다’는 the 없이 get to school이에요.", "how long does it takes to get to school": "does 뒤에는 동사 원래 모양 take를 써요." },
        tip: { en: "Do you walk to school?", why: "‘학교 걸어가?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "버스로 거기까지 얼마나 걸려?", answers: ["How long does it take to get there by bus?"],
        wrong: { "how long does it take to get there with bus": "‘버스로’는 by bus예요." },
        tip: { en: "Is the bus faster?", why: "‘버스가 더 빨라?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "집까지 얼마나 걸려?", answers: ["How long does it take to get home?"],
        wrong: { "how long does it take to get to home": "home 앞에는 to를 붙이지 않아요." },
        tip: { en: "Do you live far?", why: "‘멀리 살아?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "호텔까지 얼마나 걸려요?", answers: ["How long does it take to get to the hotel?"],
        wrong: { "how long does it take to get to hotel": "hotel 앞에 the를 붙여요." },
        tip: { en: "Can you call a taxi?", why: "‘택시 불러 줄래요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "해변까지 얼마나 걸려?", answers: ["How long does it take to get to the beach?"],
        ctx: { lead: "the airport 대신 ‘해변(the beach)’으로 바꿔 보세요.", en: "How long does it take to get to the airport?" },
        wrong: { "how long does it take to get to beach": "beach 앞에 the를 붙여요." },
        tip: { en: "Is the beach close?", why: "‘해변 가까워?’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "좋아. 거기까지 얼마나 걸려?", answers: ["Okay. How long does it take to get there?", "How long does it take to get there?", "Great. How long does it take to get there?"],
        dialog: { a: "Let's go to the new mall.", aKo: "새로 생긴 쇼핑몰 가자." },
        wrong: { "okay how long does it take to get to there": "there 앞에는 to를 붙이지 않아요." },
        tip: { en: "Is it far from here?", why: "‘여기서 멀어?’라는 말이에요." } }
    ]
  };
})(window.EP);
