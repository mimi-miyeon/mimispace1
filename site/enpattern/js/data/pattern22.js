/* 세션 22. I like ~ing. */
(function (EP) {
  "use strict";
  (EP.sessions = EP.sessions || {})[22] = {
    no: 22, form: "I like ~ing.", stem: "I like", meaning: "나는 ~하는 것을 좋아해요.",
    hint: "I like + 동사-ing",
    intro: {
      blocks: [["I like", "나는 좋아한다"], ["~ing", "~하는 것"]],
      lines: [
        "like 뒤에 동사-ing를 붙이면 ‘~하는 걸 좋아해’예요.",
        "동사에 ing를 붙이면 ‘~하는 것’이라는 말이 돼요. (read → reading)",
        "e로 끝나면 e를 빼고(dance → dancing), 짧은 단어는 끝 글자를 한 번 더 써요(swim → swimming)."
      ],
      examples: [
        { en: "I like reading.", ko: "나 책 읽는 거 좋아해." },
        { en: "I like cooking for friends.", ko: "나 친구들한테 요리해 주는 거 좋아해." }
      ]
    },
    items: [
      { id: "b1", type: "blank", kind: "빈칸 입력", ko: "나 걷는 거 좋아해.", before: "I like", after: ".", answers: ["walking"],
        wrong: { "walk": "like 뒤에 할 일을 말할 때는 ing를 붙여요. walking이에요.", "walks": "like 뒤에 할 일을 말할 때는 ing를 붙여요. walking이에요." },
        tip: { en: "I love going for walks.", why: "go for a walk는 ‘산책하다’예요." } },
      { id: "b2", type: "blank", kind: "빈칸 입력", ko: "나 노래하는 거 좋아해.", before: "I", after: "singing.", answers: ["like"],
        wrong: { "likes": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요.", "am": "‘좋아해’는 am이 아니라 like예요. I'm singing은 ‘노래하는 중이야’예요." },
        tip: { en: "I love singing.", why: "love는 like보다 더 좋아한다는 말이에요." } },
      { id: "b3", type: "blank", kind: "빈칸 입력", ko: "나 수영하는 거 좋아해.", before: "I like", after: ".", answers: ["swimming"],
        wrong: { "swiming": "swim처럼 짧은 단어는 m을 한 번 더 써서 swimming이에요.", "swim": "like 뒤에 할 일을 말할 때는 ing를 붙여요. swimming이에요." },
        tip: { en: "I enjoy swimming.", why: "enjoy도 뒤에 ~ing를 붙여요." } },
      { id: "b4", type: "blank", kind: "빈칸 입력", ko: "나 사진 찍는 거 좋아해.", before: "I like", after: "pictures.", answers: ["taking"],
        wrong: { "take": "like 뒤에 할 일을 말할 때는 ing를 붙여요. taking이에요.", "takeing": "e로 끝나는 동사는 e를 빼고 ing를 붙여요. taking이에요." },
        tip: { en: "I'm into photography.", why: "photography는 ‘사진 찍기’예요." } },
      { id: "b5", type: "blank", kind: "빈칸 입력", ko: "나 혼자 여행하는 거 좋아해.", before: "I", after: "traveling alone.", answers: ["like"],
        wrong: { "likes": "likes는 he, she가 주어일 때 써요. I 뒤에는 like예요.", "am": "‘좋아해’는 am이 아니라 like예요. I'm traveling은 ‘여행 중이야’예요." },
        tip: { en: "I enjoy traveling by myself.", why: "by myself는 ‘혼자서’예요." } },
      { id: "s1", type: "sentence", kind: "문장 입력", ko: "나 영화 보는 거 좋아해.", answers: ["I like watching movies."], alts: ["I like to watch movies."],
        wrong: { "i like watch movies": "like 뒤에 할 일을 말할 때는 ing를 붙여요. watching이에요." },
        tip: { en: "I enjoy watching movies.", why: "enjoy도 뒤에 ~ing를 붙여요." } },
      { id: "s2", type: "sentence", kind: "문장 입력", ko: "나 친구들이랑 노는 거 좋아해.", answers: ["I like hanging out with friends.", "I like hanging out with my friends."],
        alts: ["I like to hang out with friends.", "I like to hang out with my friends."],
        wrong: { "i like hang out with friends": "like 뒤에 할 일을 말할 때는 ing를 붙여요. hanging이에요." },
        tip: { en: "I love spending time with friends.", why: "spend time with는 ‘~와 시간을 보내다’예요." } },
      { id: "s3", type: "sentence", kind: "문장 입력", ko: "나 아침에 달리는 거 좋아해.", answers: ["I like running in the morning.", "I like jogging in the morning."], alts: ["I like to run in the morning."],
        wrong: { "i like runing in the morning": "run처럼 짧은 단어는 n을 한 번 더 써서 running이에요.", "i like run in the morning": "like 뒤에 할 일을 말할 때는 ing를 붙여요. running이에요." },
        tip: { en: "I enjoy morning runs.", why: "morning run은 ‘아침 달리기’예요." } },
      { id: "s4", type: "sentence", kind: "문장 입력", ko: "나 새로운 음식 먹어 보는 거 좋아해.", answers: ["I like trying new food.", "I like trying new foods."],
        alts: ["I like to try new food.", "I like to try new foods."],
        wrong: { "i like try new food": "like 뒤에 할 일을 말할 때는 ing를 붙여요. trying이에요." },
        tip: { en: "I love trying new food.", why: "love는 like보다 더 좋아한다는 말이에요." } },
      { id: "s5", type: "sentence", kind: "바꿔 만들기", ko: "나 그림 그리는 거 좋아해.", answers: ["I like drawing.", "I like painting."], alts: ["I like to draw.", "I like to paint."],
        ctx: { lead: "reading 대신 ‘그림 그리다(draw)’를 넣어 보세요.", en: "I like reading." },
        wrong: { "i like draw": "like 뒤에 할 일을 말할 때는 ing를 붙여요. drawing이에요." },
        tip: { en: "Drawing is my hobby.", why: "hobby는 ‘취미’예요." } },
      { id: "s6", type: "sentence", kind: "대화 완성", ko: "나 집에서 쉬는 거 좋아해.", answers: ["I like relaxing at home.", "I like resting at home.", "I like staying home.", "I like staying at home."],
        alts: ["I like to relax at home.", "I like to stay home.", "I like to stay at home."],
        dialog: { a: "What do you do on weekends?", aKo: "주말에 뭐 해?" },
        wrong: { "i like relax at home": "like 뒤에 할 일을 말할 때는 ing를 붙여요. relaxing이에요." },
        tip: { en: "I'm a homebody.", why: "homebody는 ‘집에 있는 걸 좋아하는 사람’이에요." } }
    ]
  };
})(window.EP);
