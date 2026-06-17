import { search } from "../lib/qdrant.js";

const queries = [
  "哪個工具可以在終端機裡幫我自動寫程式？",
  "我想連接外部資料或工具給 AI 用，有什麼標準做法？",
  "有沒有可以編排多個 AI agent 分工合作的框架？",
];

async function main() {
  for (const q of queries) {
    console.log(`\n🔍 查詢：${q}`);
    const results = await search(q, 3);
    results.forEach((r, i) => {
      console.log(
        `  ${i + 1}. [${r.score.toFixed(4)}] ${r.name} — ${r.description.slice(0, 30)}...`,
      );
    });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
