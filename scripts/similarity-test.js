import { embed, cosineSimilarity } from "../lib/embedding.js";

const groups = [
  {
    title: "第 1 組：意思相同（相近）的句子",
    sentences: [
      "中華隊大勝韓國隊。",
      "中華隊大敗韓國隊。",
      "中華隊贏了韓國隊。",
    ],
  },
  {
    title: "第 2 組：意思不同的句子",
    sentences: [
      "中華隊大勝韓國隊。",
      "中華隊輸給韓國隊。",
      "韓國瑜輸給中華民國人民。",
    ],
  },
  {
    title: "第 3 組：自己設計",
    sentences: [
      "中華隊大勝韓國隊。",
      "欠錢還錢",
      "我借他五百塊。",

    ],
  }
];

for (const group of groups) {
  console.log(`\n=== ${group.title} ===`);
  const vectors = await Promise.all(group.sentences.map(embed));

  for (let i = 0; i < group.sentences.length; i++) {
    for (let j = i + 1; j < group.sentences.length; j++) {
      const sim = cosineSimilarity(vectors[i], vectors[j]);
      console.log(`  句${i + 1} 與 句${j + 1} 相似度 = ${sim.toFixed(4)}`);
    }
  }
  group.sentences.forEach((s, i) => console.log(`  句${i + 1}：${s}`));
}
