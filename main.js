import { searchDevtools } from "./lib/qdrant.js";

const queries = [
  "哪個工具可以在終端機裡幫我自動寫程式？",
  "我想連接外部資料或工具給 AI 用，有什麼標準做法？",
  "有沒有可以編排多個 AI agent 分工合作的框架？",
];

for (const query of queries) {
  console.log(`\n=== 問題：${query} ===`);
  const results = await searchDevtools(query, 3);

  for (const [i, r] of results.entries()) {
    console.log(`\n${i + 1}. ${r.name}`);
    console.log(`   分數：${r.score.toFixed(3)}`);
    console.log(`   說明：${r.description}`);
  }
  console.log();
}
