/* 세션 167. How many ~ do you have? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[167] = {
    no: 167, form: "How many ~ do you have?", stem: "How many", meaning: "~을 몇 개 가지고 있어요?",
    hint: "How many + 명사 + do you have?",
    intro: {
      blocks: [["How many ~", "몇 개의 ~를"], ["do you have?", "너는 가지고 있니?"]],
      lines: [
        "How many + 복수 명사 + do you have?는 ‘~ 몇 개 있어? / 몇 명 있어?’예요.",
        "How many 뒤에는 셀 수 있는 명사에 s를 붙여요.",
        "가족, 물건, 시간 등을 물을 때 써요. (How many kids do you have?)"
      ],
      examples: [
        { en: "How many kids do you have?", ko: "아이가 몇 명이에요?" },
        { en: "How many books do you have?", ko: "책 몇 권 있어?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "아이가 몇 명이에요?", before: "How many kids do you", after: "?", answers: ["have"],
        wrong: { "has": "you 뒤에는 has가 아니라 have예요." },
        tip: { en: "Do you have children?", why: "children은 ‘아이들’이에요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "형제가 몇 명이야?", before: "How many", after: "do you have?", answers: ["siblings", "brothers"],
        wrong: { "sibling": "How many 뒤에는 여러 개라 siblings예요." },
        tip: { en: "Are you an only child?", why: "only child는 ‘외동’이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "수업이 몇 개야?", before: "How many classes", after: "you have?", answers: ["do"],
        wrong: { "are": "have가 있으니 do를 써요.", "does": "you 앞에는 do를 써요." },
        tip: { en: "Is your schedule busy?", why: "‘시간표 빡빡해?’라는 말이에요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "표 몇 장 있어?", before: "How", after: "tickets do you have?", answers: ["many"],
        wrong: { "much": "셀 수 있는 것은 How many예요." },
        tip: { en: "Do you have extra tickets?", why: "extra는 ‘여분의’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "고양이 몇 마리 키워?", before: "How many", after: "do you have?", answers: ["cats"],
        wrong: { "cat": "How many 뒤에는 여러 개라 cats예요." },
        tip: { en: "Do you have pets?", why: "pet은 ‘반려동물’이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "신발 몇 켤레 있어?", answers: ["How many pairs of shoes do you have?", "How many shoes do you have?"],
        wrong: { "how many pair of shoes do you have": "여러 켤레라 pairs예요.", "how many shoes you have": "물을 때는 do를 붙여요. do you have예요." },
        tip: { en: "You love shoes.", why: "‘너 신발 좋아하잖아’라는 말이에요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "휴가가 며칠이야?", answers: ["How many vacation days do you have?", "How many days off do you have?"],
        wrong: { "how many vacation day do you have": "How many 뒤에는 여러 개라 days예요." },
        tip: { en: "When's your vacation?", why: "‘휴가 언제야?’라는 말이에요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "가방 몇 개 있어요?", answers: ["How many bags do you have?"],
        wrong: { "how many bag do you have": "How many 뒤에는 여러 개라 bags예요." },
        tip: { en: "Any bags to check?", why: "check는 ‘부치다’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "친한 친구 몇 명 있어?", answers: ["How many close friends do you have?", "How many good friends do you have?"],
        wrong: { "how many close friend do you have": "How many 뒤에는 여러 개라 friends예요." },
        tip: { en: "Who's your best friend?", why: "‘제일 친한 친구 누구야?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "개 몇 마리 키워?", answers: ["How many dogs do you have?"],
        ctx: { lead: "kids 대신 ‘개(dogs)’로 바꿔 보세요.", en: "How many kids do you have?" },
        wrong: { "how many dog do you have": "How many 뒤에는 여러 개라 dogs예요." },
        tip: { en: "What breed?", why: "breed는 ‘품종’이에요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "우와! 몇 개 있는데?", answers: ["Wow! How many do you have?", "How many do you have?"],
        dialog: { a: "I collect old coins.", aKo: "나 옛날 동전 모아." },
        wrong: { "wow how many do you has": "you 뒤에는 has가 아니라 have예요." },
        tip: { en: "Wow! Can I see them?", why: "‘와! 봐도 돼?’라는 말이에요." } }
    ]
  };
})(window.EP);
