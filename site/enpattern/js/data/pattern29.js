/* 세션 29. It must be ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[29] = {
    no: 29, form: "It must be ~.", stem: "It must be", meaning: "그것은 ~임에 틀림없어요.",
    hint: "It must be + 형용사/명사",
    intro: {
      blocks: [["It", "그것은"], ["must be", "~임에 틀림없다"], ["~", "형용사/명사"]],
      lines: [
        "It must be ~는 ‘분명 ~일 거야’라고 확신하며 추측하는 말이에요.",
        "세션 26의 must(꼭 해야 해)와 달리, be와 함께 쓰면 ‘틀림없이 ~이다’라는 추측이 돼요.",
        "뒤에 형용사(hard)나 명사(a mistake)를 붙여요."
      ],
      examples: [
        { en: "It must be hard.", ko: "분명 힘들 거야." },
        { en: "It must be a mistake.", ko: "그건 분명 실수일 거야." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "그거 분명 비쌀 거야.", before: "It must", after: "expensive.", answers: ["be"],
        wrong: { "is": "must 뒤에는 is가 아니라 원래 모양 be를 써요.", "being": "must 뒤에는 원래 모양 be를 써요." },
        tip: { en: "That looks expensive.", why: "‘비싸 보인다’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "그거 분명 재밌을 거야.", before: "It", after: "be fun.", answers: ["must"],
        wrong: { "must to": "must 뒤에는 to를 쓰지 않아요.", "is": "‘분명 ~일 거야’는 must be예요." },
        tip: { en: "I bet it's fun.", why: "I bet은 ‘분명 ~일 거야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "그거 분명 네 거일 거야.", before: "It must be", after: ".", answers: ["yours"],
        wrong: { "your": "‘네 것’은 your가 아니라 yours예요.", "you": "‘네 것’은 you가 아니라 yours예요." },
        tip: { en: "I think it's yours.", why: "‘네 거 같아’로 덜 확신해서 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "거기 분명 추울 거야.", before: "", after: "must be cold there.", answers: ["It"],
        wrong: { "is": "‘분명 ~일 거야’는 It must be로 시작해요." },
        tip: { en: "It's probably cold there.", why: "probably는 ‘아마’예요. 확신이 조금 덜해요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "그거 분명 맛있을 거야.", before: "It must be", after: ".", answers: ["delicious", "good", "tasty"],
        tip: { en: "It looks delicious.", why: "‘맛있어 보여’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그거 분명 사실일 거야.", answers: ["It must be true."],
        wrong: { "it must is true": "must 뒤에는 is가 아니라 원래 모양 be를 써요.", "it must true": "true는 ‘사실인’이라 앞에 be를 붙여요." },
        tip: { en: "I'm sure it's true.", why: "I'm sure는 ‘확실해’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그거 분명 새 거일 거야.", answers: ["It must be new.", "It must be a new one."],
        wrong: { "it must new": "new는 ‘새로운’이라 앞에 be를 붙여요." },
        tip: { en: "It looks brand new.", why: "brand new는 ‘완전 새것’이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "그거 분명 그 사람 차일 거야.", answers: ["It must be his car."],
        wrong: { "it must be he car": "‘그의’는 he가 아니라 his예요.", "it must be him car": "‘그의’는 him이 아니라 his예요." },
        tip: { en: "That's probably his car.", why: "probably는 ‘아마’예요. 확신이 조금 덜해요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "거기 분명 붐빌 거야.", answers: ["It must be crowded there.", "It must be busy there."],
        wrong: { "it must crowded there": "crowded는 ‘붐비는’이라 앞에 be를 붙여요.", "it must be crowd there": "‘붐비는’은 crowd가 아니라 crowded예요." },
        tip: { en: "I bet it's packed there.", why: "packed는 ‘꽉 찬’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "그거 분명 좋을 거야.", answers: ["It must be nice.", "It must be good.", "It must be great."],
        ctx: { lead: "hard 대신 ‘좋은(nice)’을 넣어 보세요.", en: "It must be hard." },
        wrong: { "it must nice": "nice는 ‘좋은’이라 앞에 be를 붙여요." },
        tip: { en: "That sounds nice.", why: "‘좋겠다’라는 반응이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "분명 택배일 거야.", answers: ["It must be the delivery.", "It must be a delivery.", "It must be my package.", "It must be a package."],
        dialog: { a: "Someone's at the door.", aKo: "누가 문 앞에 왔어." },
        wrong: { "it must be delivery": "delivery 앞에는 the나 a를 붙여요.", "it must is the delivery": "must 뒤에는 is가 아니라 원래 모양 be를 써요." },
        tip: { en: "That's probably my package.", why: "probably는 ‘아마’예요. 확신이 조금 덜해요." } }
    ]
  };
})(window.EP);
