import { embed, cosineSimilarity } from "../lib/embedding.js";

const groups = [
  {
    title: "第 1 組：意思相近的句子",
    sentences: [
      "我每天早上都要喝一杯咖啡",
      "咖啡的香氣讓我整個人都醒了",
      "沒有咖啡因我就提不起精神",
    ],
  },
  {
    title: "第 2 組：意思不同的句子",
    sentences: [
      "高鐵快要進站了",
      "這部電影的結局好感人",
      "我家的貓把花瓶打翻了",
    ],
  },
  {
    title: "第 3 組：字面很像但意思不同",
    sentences: [
      "下雨天留客，天留我也留。",
      "下雨天留客，天留我不留。",
      "今天雨這麼大，就留下來多住一晚吧。",
    ],
  },
  {
    title: "第 4 組：字面很像但意思不同，跟一個完全不同",
    sentences: [
      "漆黑頭髮，全無麻子，腳不大，周正",
      "漆黑頭髮全無，麻子腳不大，周正",
      "今天雨這麼大，就留下來多住一晚吧。",
    ],
  },
];

async function main() {
  for (const group of groups) {
    console.log(`\n=== ${group.title} ===`);
    const vectors = await Promise.all(group.sentences.map(embed));

    for (let i = 0; i < group.sentences.length; i++) {
      for (let j = i + 1; j < group.sentences.length; j++) {
        const sim = cosineSimilarity(vectors[i], vectors[j]);
        console.log(
          `  句${i + 1} vs 句${j + 1}　相似度 = ${sim.toFixed(4)}`,
        );
      }
    }
    group.sentences.forEach((s, i) => console.log(`  句${i + 1}：${s}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
