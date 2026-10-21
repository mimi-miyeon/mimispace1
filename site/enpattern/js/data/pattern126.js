/* 세션 126. I'm looking for ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[126] = {
    no: 126, form: "I'm looking for ~.", stem: "I'm looking for", meaning: "나는 ~을 찾고 있어요.",
    hint: "I'm looking for + 명사/대명사",
    intro: {
      blocks: [["I'm looking", "나는 보고 있다"], ["for ~", "~을 찾아서"]],
      lines: [
        "I'm looking for ~는 ‘~을 찾고 있어’예요. 가게나 길에서 정말 많이 써요.",
        "look for는 ‘찾다(찾는 중)’, find는 ‘찾아내다’예요.",
        "for 뒤에는 찾는 사람이나 물건을 써요."
      ],
      examples: [
        { en: "I'm looking for my keys.", ko: "나 열쇠 찾고 있어." },
        { en: "I'm looking for a job.", ko: "나 일자리 찾고 있어." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 내 폰 찾고 있어.", before: "I'm looking", after: "my phone.", answers: ["for"],
        wrong: { "at": "‘찾고 있어’는 looking for예요. looking at은 ‘보고 있어’예요." },
        tip: { en: "Have you seen my phone?", why: "‘내 폰 봤어?’라는 말이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "화장실 찾고 있어요.", before: "I'm looking for the", after: ".", answers: ["restroom", "bathroom", "toilet"],
        tip: { en: "Where's the restroom?", why: "‘화장실 어디예요?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 일자리 찾고 있어.", before: "I'm looking for a", after: ".", answers: ["job"],
        wrong: { "work": "a 뒤에는 job을 써요. work는 a를 붙이지 않아요." },
        tip: { en: "I'm job hunting.", why: "job hunting은 ‘구직 활동’이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "저 이 주소 찾고 있어요.", before: "I'm", after: "for this address.", answers: ["looking"],
        wrong: { "finding": "‘찾는 중’은 looking for예요. find는 ‘찾아내다’예요.", "look": "I'm 뒤에는 looking을 써요." },
        tip: { en: "Can you help me find it?", why: "‘찾는 거 도와줄래요?’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 새 집 찾고 있어.", before: "I'm looking for a new", after: ".", answers: ["place", "house", "home", "apartment"],
        tip: { en: "I'm house hunting.", why: "house hunting은 ‘집 구하기’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "저 선물 찾고 있어요.", answers: ["I'm looking for a gift.", "I'm looking for a present."],
        wrong: { "i am looking for gift": "gift는 셀 수 있는 말이라 a를 붙여요.", "i am finding a gift": "‘찾는 중’은 looking for예요. find는 ‘찾아내다’예요." },
        tip: { en: "Any recommendations?", why: "‘추천해 줄 거 있어요?’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 내 안경 찾고 있어.", answers: ["I'm looking for my glasses."],
        wrong: { "i am looking for my glass": "‘안경’은 glasses예요.", "i am looking my glasses": "‘찾다’는 look 뒤에 for를 붙여요." },
        tip: { en: "I can't see a thing.", why: "‘하나도 안 보여’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "저 김 선생님을 찾고 있어요.", answers: ["I'm looking for Mr. Kim.", "I'm looking for Ms. Kim.", "I'm looking for Mrs. Kim."],
        wrong: { "i am looking for teacher kim": "영어로는 Mr. Kim이나 Ms. Kim이라고 불러요." },
        tip: { en: "Is Mr. Kim here?", why: "‘김 선생님 계세요?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "저 이것보다 작은 사이즈 찾고 있어요.", answers: ["I'm looking for a smaller size.", "I'm looking for a smaller one."],
        wrong: { "i am looking for a more small size": "small의 비교급은 smaller예요." },
        tip: { en: "Do you have this in small?", why: "‘이거 작은 거 있어요?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 내 지갑 찾고 있어.", answers: ["I'm looking for my wallet.", "I'm looking for my purse."],
        ctx: { lead: "my keys 대신 ‘내 지갑(my wallet)’으로 바꿔 보세요.", en: "I'm looking for my keys." },
        wrong: { "i am looking my wallet": "‘찾다’는 look 뒤에 for를 붙여요." },
        tip: { en: "I lost my wallet.", why: "‘지갑 잃어버렸어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "네, 저 청바지 찾고 있어요.", answers: ["Yes, I'm looking for jeans.", "Yes, I'm looking for some jeans.", "Yeah, I'm looking for jeans.", "Yes, I'm looking for a pair of jeans."],
        dialog: { a: "Can I help you find something?", aKo: "찾으시는 거 있으세요?" },
        wrong: { "yes i am looking for a jeans": "jeans는 a를 붙이지 않아요. some jeans나 a pair of jeans예요." },
        tip: { en: "Just browsing, thanks.", why: "browse는 ‘그냥 구경하다’예요." } }
    ]
  };
})(window.EP);
