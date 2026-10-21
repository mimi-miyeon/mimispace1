/* 세션 81. There is/are ~. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[81] = {
    no: 81, form: "There is/are ~.", stem: "There is/There are", meaning: "~(이)가 있어요.",
    hint: "There is/are + 명사",
    intro: {
      blocks: [["There is / are", "~이 있다"], ["~", "명사"]],
      lines: [
        "There is/are ~는 ‘~이 있어’예요. 어디에 무엇이 있는지 말해요.",
        "하나(셀 수 없는 것 포함)면 There is, 여러 개면 There are를 써요.",
        "말할 때는 There is를 There's로 줄여요."
      ],
      examples: [
        { en: "There is a cafe near here.", ko: "이 근처에 카페 있어." },
        { en: "There are many people here.", ko: "여기 사람 많다." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "냉장고에 우유 있어.", before: "There", after: "milk in the fridge.", answers: ["is"],
        wrong: { "are": "milk는 셀 수 없는 말이라 There is예요.", "have": "‘~이 있어’는 There is예요." },
        tip: { en: "We have milk in the fridge.", why: "We have로도 ‘~ 있어’라고 말해요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "책상 위에 책이 두 권 있어.", before: "There", after: "two books on the desk.", answers: ["are"],
        wrong: { "is": "여러 개(two books)는 There are예요." },
        tip: { en: "I see two books on the desk.", why: "‘책상 위에 책 두 권 보여’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "문제가 하나 있어.", before: "There is a", after: ".", answers: ["problem"],
        wrong: { "problems": "a 뒤에는 problem 하나만 써요." },
        tip: { en: "We have a problem.", why: "We have로도 ‘~ 있어’라고 말해요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "근처에 공원 있어.", before: "", after: "is a park nearby.", answers: ["There"],
        wrong: { "it": "‘~이 있어’는 It이 아니라 There is예요.", "here": "‘~이 있어’는 Here가 아니라 There is예요." },
        tip: { en: "A park is close by.", why: "close by는 ‘가까이에’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "방에 사람이 많아.", before: "There are a lot of", after: "in the room.", answers: ["people"],
        wrong: { "peoples": "people은 이미 여러 명이라 s를 붙이지 않아요.", "person": "a lot of 뒤에는 여러 명인 people을 써요." },
        tip: { en: "The room is crowded.", why: "crowded는 ‘붐비는’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "이 근처에 편의점 있어.", answers: ["There is a convenience store near here.", "There is a convenience store nearby."],
        wrong: { "there are a convenience store near here": "가게 하나는 There is예요.", "it is a convenience store near here": "‘~이 있어’는 It is가 아니라 There is예요." },
        tip: { en: "There's a store around the corner.", why: "around the corner는 ‘모퉁이 돌면’이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "오늘 수업이 세 개 있어.", answers: ["There are three classes today."],
        wrong: { "there is three classes today": "여러 개(three classes)는 There are예요." },
        tip: { en: "I have three classes today.", why: "I have로도 ‘~ 있어’라고 말해요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내 수프에 머리카락이 있어.", answers: ["There is a hair in my soup."],
        wrong: { "there are a hair in my soup": "하나는 There is예요." },
        tip: { en: "I found a hair in my soup.", why: "‘수프에서 머리카락 나왔어’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "벽에 사진이 많아.", answers: ["There are many pictures on the wall.", "There are a lot of pictures on the wall.", "There are lots of pictures on the wall."],
        wrong: { "there is many pictures on the wall": "여러 개는 There are예요.", "there are many picture on the wall": "many 뒤에는 여러 개(pictures)로 써요." },
        tip: { en: "The wall is full of pictures.", why: "be full of는 ‘~로 가득하다’예요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "이 근처에 은행 있어.", answers: ["There is a bank near here.", "There is a bank nearby."],
        ctx: { lead: "a cafe 대신 ‘은행(a bank)’으로 바꿔 보세요.", en: "There is a cafe near here." },
        wrong: { "there are a bank near here": "하나는 There is예요." },
        tip: { en: "You can find a bank nearby.", why: "‘근처에서 은행 찾을 수 있어’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "응, 식탁에 사과 몇 개 있어.", answers: ["Yes, there are some apples on the table.", "Yeah, there are some apples on the table."],
        dialog: { a: "Is there anything to eat?", aKo: "먹을 거 있어?" },
        wrong: { "yes there is some apples on the table": "여러 개(apples)는 There are예요." },
        tip: { en: "Yes, we have some apples.", why: "We have로도 ‘~ 있어’라고 말해요." } }
    ]
  };
})(window.EP);
