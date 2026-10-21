/* 세션 58. Do you think ~? */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[58] = {
    no: 58, form: "Do you think ~?", stem: "Do you think", meaning: "~라고 생각해요?",
    hint: "Do you think (that) + 주어 + 동사?",
    intro: {
      blocks: [["Do you think", "너는 생각하니"], ["~", "주어 + 동사"]],
      lines: [
        "Do you think ~?는 ‘~라고 생각해? / ~일까?’라고 의견을 묻는 말이에요.",
        "think 뒤에는 ‘주어 + 동사’ 순서로 써요. (Do you think it's true?)",
        "think 뒤 문장은 묻는 순서로 바꾸지 않아요. (Do you think is it ×)"
      ],
      examples: [
        { en: "Do you think it's true?", ko: "그거 사실일까?" },
        { en: "Do you think he'll come?", ko: "걔 올 것 같아?" }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "비 올 것 같아?", before: "Do you", after: "it will rain?", answers: ["think"],
        wrong: { "thinking": "Do you 뒤에는 동사 원래 모양 think를 써요.", "thinks": "Do you 뒤에는 동사 원래 모양 think를 써요." },
        tip: { en: "Is it going to rain?", why: "‘비 올까?’라고 바로 물어도 돼요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "이거 괜찮을까?", before: "Do you think this", after: "okay?", answers: ["is"],
        wrong: { "are": "this 뒤에는 is를 써요.", "be": "think 뒤에는 ‘주어 + 동사’예요. this is예요." },
        tip: { en: "Does this look okay?", why: "‘이거 괜찮아 보여?’라는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "걔가 날 좋아할까?", before: "Do you think she", after: "me?", answers: ["likes"],
        wrong: { "like": "she 뒤에는 동사에 s를 붙여요. likes예요." },
        tip: { en: "Does she like me?", why: "‘걔 날 좋아해?’라고 바로 물어도 돼요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "내가 틀렸다고 생각해?", before: "", after: "you think I'm wrong?", answers: ["Do"],
        wrong: { "are": "‘생각해?’는 Are가 아니라 Do로 물어요." },
        tip: { en: "Am I wrong?", why: "‘내가 틀렸어?’라고 바로 물어도 돼요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "우리 늦을까?", before: "Do you think", after: "will be late?", answers: ["we"],
        wrong: { "us": "‘우리가’는 us가 아니라 we예요." },
        tip: { en: "Are we going to be late?", why: "‘우리 늦겠어?’라는 말이에요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "그거 좋은 생각 같아?", answers: ["Do you think it's a good idea?", "Do you think that's a good idea?"],
        wrong: { "do you think is it a good idea": "think 뒤에는 ‘주어 + 동사’ 순서예요. it's a good idea예요.", "are you think it is a good idea": "‘생각해?’는 Are가 아니라 Do로 물어요." },
        tip: { en: "Is that a good idea?", why: "‘그거 좋은 생각이야?’라고 바로 물어도 돼요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "그 사람이 우리 도와줄까?", answers: ["Do you think he'll help us?", "Do you think she'll help us?"],
        wrong: { "do you think will he help us": "think 뒤에는 ‘주어 + 동사’ 순서예요. he will help예요." },
        tip: { en: "Will he help us?", why: "‘그 사람이 도와줄까?’라고 바로 물어도 돼요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "내가 할 수 있을까?", answers: ["Do you think I can do it?", "Do you think I can do this?"],
        wrong: { "do you think can i do it": "think 뒤에는 ‘주어 + 동사’ 순서예요. I can do it이에요." },
        tip: { en: "Can I really do this?", why: "‘나 정말 할 수 있을까?’라는 말이에요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "이거 비싼 것 같아?", answers: ["Do you think it's expensive?", "Do you think this is expensive?"],
        wrong: { "do you think is it expensive": "think 뒤에는 ‘주어 + 동사’ 순서예요. it's expensive예요." },
        tip: { en: "Is it too expensive?", why: "‘너무 비싸?’라는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "걔가 알 것 같아?", answers: ["Do you think she knows?", "Do you think he knows?"],
        ctx: { lead: "he'll come 대신 ‘그녀가 알다(she knows)’로 바꿔 보세요.", en: "Do you think he'll come?" },
        wrong: { "do you think she know": "she 뒤에는 동사에 s를 붙여요. knows예요.", "do you think does she know": "think 뒤에는 does 없이 she knows 순서예요." },
        tip: { en: "Does she know?", why: "‘걔 알아?’라고 바로 물어도 돼요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "눈 올 것 같아?", answers: ["Do you think it'll snow?", "Do you think it's going to snow?"],
        dialog: { a: "Look at the sky.", aKo: "하늘 좀 봐." },
        wrong: { "do you think will it snow": "think 뒤에는 ‘주어 + 동사’ 순서예요. it will snow예요." },
        tip: { en: "Is it going to snow?", why: "‘눈 올까?’라고 바로 물어도 돼요." } }
    ]
  };
})(window.EP);
