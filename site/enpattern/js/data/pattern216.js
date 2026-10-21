/* 세션 216. In case ~, */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[216] = {
    no: 216, form: "In case ~,", stem: "in case", meaning: "~할 경우에 대비해서.",
    hint: "In case + 주어 + 동사",
    intro: {
      blocks: [["In case ~", "~할 경우에 대비해서"], ["주어 + 동사", "할 일"]],
      lines: [
        "in case + 주어 + 동사는 ‘~할 경우를 대비해서’예요. 미리 준비할 때 써요.",
        "in case 뒤에는 will 없이 현재형을 써요. (in case it rains)",
        "문장 앞에도, 뒤에도 써요. (Take an umbrella in case it rains.)"
      ],
      examples: [
        { en: "Take an umbrella in case it rains.", ko: "비 올지 모르니까 우산 챙겨." },
        { en: "In case you forget, here's my number.", ko: "혹시 잊을까 봐, 이거 내 번호야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "비 올지 모르니까 우산 챙겨.", before: "Take an umbrella in", after: "it rains.", answers: ["case"],
        wrong: { "cause": "‘~할 경우에 대비해서’는 in case예요." },
        tip: { en: "It looks cloudy.", why: "‘흐려 보여’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "혹시 잊을까 봐, 이거 내 번호야.", before: "In case you", after: ", here's my number.", answers: ["forget"],
        wrong: { "will forget": "in case 뒤에는 will 없이 현재형을 써요.", "forgot": "앞으로의 일이라 forget을 써요." },
        tip: { en: "Call me anytime.", why: "‘언제든 전화해’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "배고플지 모르니까 간식 챙겨.", before: "Bring a snack", after: "case you get hungry.", answers: ["in"],
        wrong: { "on": "‘~할 경우에 대비해서’는 in case예요." },
        tip: { en: "Just in case.", why: "‘혹시 모르니까’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "추울지 모르니까 재킷 가져가.", before: "Take a jacket in case it", after: "cold.", answers: ["gets"],
        wrong: { "get": "it 뒤에는 동사에 s를 붙여요. gets예요.", "will get": "in case 뒤에는 will 없이 현재형을 써요." },
        tip: { en: "It gets chilly at night.", why: "chilly는 ‘쌀쌀한’이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "혹시 모르니까.", before: "Just in", after: ".", answers: ["case"],
        wrong: { "cases": "‘혹시 모르니까’는 just in case예요." },
        tip: { en: "Better safe than sorry.", why: "‘조심해서 나쁠 거 없어’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "늦을지 모르니까 일찍 나가.", answers: ["Leave early in case you're late.", "Leave early in case there's traffic.", "Leave early in case you get stuck in traffic."],
        wrong: { "leave early in case you will be late": "in case 뒤에는 will 없이 현재형을 써요.", "leave early in cause you are late": "‘~할 경우에 대비해서’는 in case예요." },
        tip: { en: "Traffic is bad today.", why: "‘오늘 차 막혀’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "필요할지 모르니까 이거 가져가.", answers: ["Take this in case you need it.", "Take this in case you need it later."],
        wrong: { "take this in case you will need it": "in case 뒤에는 will 없이 현재형을 써요." },
        tip: { en: "You never know.", why: "‘혹시 모르잖아’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그녀가 전화할지 모르니까 폰 켜 둬.", answers: ["Keep your phone on in case she calls."],
        wrong: { "keep your phone on in case she call": "she 뒤에는 동사에 s를 붙여요. calls예요." },
        tip: { en: "Don't miss her call.", why: "‘전화 놓치지 마’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "길을 잃을지 모르니까 지도 챙겨.", answers: ["Bring a map in case you get lost.", "Take a map in case you get lost."],
        wrong: { "bring a map in case you will get lost": "in case 뒤에는 will 없이 현재형을 써요." },
        tip: { en: "Use your phone's map.", why: "‘폰 지도 써’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "눈 올지 모르니까 우산 챙겨.", answers: ["Take an umbrella in case it snows."],
        ctx: { lead: "rains 대신 ‘눈이 오다(snows)’로 바꿔 보세요.", en: "Take an umbrella in case it rains." },
        wrong: { "take an umbrella in case it snow": "it 뒤에는 동사에 s를 붙여요. snows예요." },
        tip: { en: "It might snow.", why: "might는 ‘~할지도 몰라’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "혹시 모르니까 하나 더 사.", answers: ["Buy one more just in case.", "Buy another one just in case.", "Get one more just in case."],
        dialog: { a: "Should I buy two batteries?", aKo: "배터리 두 개 살까?" },
        wrong: { "buy one more just in cases": "‘혹시 모르니까’는 just in case예요." },
        tip: { en: "Better safe than sorry.", why: "‘조심해서 나쁠 거 없어’라는 말이에요." } }
    ]
  };
})(window.EP);
