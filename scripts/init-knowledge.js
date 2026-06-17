import {
  qdrant,
  embed,
  COLLECTION,
  EMBEDDING_DIM,
} from "../lib/qdrant.js";
import { devtools } from "../data/devtools.js";

async function recreateCollection() {
  const exists = await qdrant.collectionExists(COLLECTION);
  if (exists.exists) {
    await qdrant.deleteCollection(COLLECTION);
  }
  await qdrant.createCollection(COLLECTION, {
    vectors: { size: EMBEDDING_DIM, distance: "Cosine" },
  });
}

async function main() {
  await recreateCollection();
  console.log(`已建立 collection：${COLLECTION}`);

  for (const tool of devtools) {
    const vector = await embed(`${tool.name}。${tool.description}`);
    await qdrant.upsert(COLLECTION, {
      wait: true,
      points: [
        {
          id: tool.id,
          vector,
          payload: { name: tool.name, description: tool.description },
        },
      ],
    });
    console.log(`已加入：${tool.name}`);
  }

  console.log(`完成！共 ${devtools.length} 筆知識。`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
