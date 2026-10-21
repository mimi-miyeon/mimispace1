/* 세션 179. What kind of ~ would you like to be? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[179] = {
    no: 179, form: "What kind of ~ would you like to be?", stem: "What kind of", meaning: "어떤 ~이 되고 싶어요?",
    hint: "What kind of + 명사 + would you like to be?",
    intro: {
      blocks: [["What kind of ~", "어떤 종류의 ~"], ["would you like to be?", "되고 싶니?"]],
      lines: [
        "What kind of + 명사 + would you like to be?는 ‘어떤 ~가 되고 싶어?’예요.",
        "would you like to는 want to보다 부드러워요.",
        "대답은 I'd like to be + 명사예요. (I'd like to be a kind teacher.)"
      ],
      examples: [
        { en: "What kind of person would you like to be?", ko: "어떤 사람이 되고 싶어?" },
        { en: "What kind of parent would you like to be?", ko: "어떤 부모가 되고 싶어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "어떤 사람이 되고 싶어?", before: "What kind of", after: "would you like to be?", answers: ["person"],
        wrong: { "people": "한 사람이라 person이에요." },
        tip: { en: "Who's your role model?", why: "role model은 ‘본보기’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "어떤 선생님이 되고 싶어?", before: "What kind of teacher would you like to", after: "?", answers: ["be"],
        wrong: { "become to": "‘~가 되다’는 to be예요." },
        tip: { en: "You'll be a great teacher.", why: "‘좋은 선생님이 될 거야’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "어떤 부모가 되고 싶어?", before: "What kind of parent", after: "you like to be?", answers: ["would"],
        wrong: { "do": "‘~하고 싶어?’는 would you like to예요." },
        tip: { en: "Do you want kids?", why: "‘아이 갖고 싶어?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "어떤 리더가 되고 싶어?", before: "What kind of leader would you", after: "to be?", answers: ["like"],
        wrong: { "want": "would you 뒤에는 like to예요." },
        tip: { en: "Lead by example.", why: "‘솔선수범해’라는 말이에요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "어떤 의사가 되고 싶어?", before: "What", after: "of doctor would you like to be?", answers: ["kind"],
        wrong: { "kinds": "하나를 물을 때는 kind예요." },
        tip: { en: "Help people.", why: "‘사람들을 도와’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "어떤 엄마가 되고 싶어?", answers: ["What kind of mom would you like to be?", "What kind of mother would you like to be?"],
        wrong: { "what kind of mom would you like be": "like 뒤에 to를 붙여요. like to be예요.", "what kind of mom you would like to be": "물을 때는 would를 you 앞에 써요." },
        tip: { en: "You'll be a great mom.", why: "‘좋은 엄마가 될 거야’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "어떤 친구가 되고 싶어?", answers: ["What kind of friend would you like to be?"],
        wrong: { "what kind of friends would you like to be": "한 사람이라 friend예요." },
        tip: { en: "Be there for others.", why: "be there for는 ‘곁에 있어 주다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "어떤 가수가 되고 싶어?", answers: ["What kind of singer would you like to be?"],
        wrong: { "what kind of singer would you like to being": "to 뒤에는 be를 써요." },
        tip: { en: "Sing from your heart.", why: "‘마음으로 노래해’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "어떤 상사가 되고 싶어?", answers: ["What kind of boss would you like to be?", "What kind of manager would you like to be?"],
        wrong: { "what kind of boss do you like to be": "‘되고 싶어?’는 would you like to be예요." },
        tip: { en: "Be fair to everyone.", why: "fair는 ‘공평한’이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "어떤 아빠가 되고 싶어?", answers: ["What kind of dad would you like to be?", "What kind of father would you like to be?"],
        ctx: { lead: "person 대신 ‘아빠(dad)’로 바꿔 보세요.", en: "What kind of person would you like to be?" },
        wrong: { "what kind of dad would you like be": "like 뒤에 to를 붙여요. like to be예요." },
        tip: { en: "You'll be a great dad.", why: "‘좋은 아빠가 될 거야’라는 말이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "멋지다! 어떤 작가가 되고 싶어?", answers: ["Cool! What kind of writer would you like to be?", "What kind of writer would you like to be?", "Wow! What kind of writer would you like to be?"],
        dialog: { a: "I want to be a writer someday.", aKo: "나 언젠가 작가가 되고 싶어." },
        wrong: { "cool what kind of writer would you like to being": "to 뒤에는 be를 써요." },
        tip: { en: "Cool! What do you write?", why: "‘멋지다! 뭐 써?’라는 말이에요." } }
    ]
  };
})(window.EP);
