# 作業3：迷你知識庫 — AI 開發工具介紹

用課程教的 Embeddings + 向量資料庫（Qdrant），建立一個收錄 5 種 AI 開發工具的小型知識庫，並用語意搜尋測試。

> 把作業範例的「VS Code / Git / Docker / Postman / npm」換成這學期一直在碰的 AI agent 開發工具，主題更貼近這堂課。

## 知識庫內容（5 筆）

1. **Codex CLI** — OpenAI 的開源終端機程式開發代理
2. **Claude Code** — Anthropic 的終端機 agentic coding 工具
3. **Google ADK** — Google 開源的 AI agent 開發框架
4. **OpenAI Agents SDK** — 多代理工作流開發框架
5. **Model Context Protocol（MCP）** — 連接 AI 與外部工具的開放協定

## 檔案說明

- `lib/openai.js`、`lib/qdrant.js`：Embeddings 與向量資料庫操作（建立向量、建 collection、語意搜尋）
- `data/devtools.js`：5 筆知識內容
- `scripts/init-knowledge.js`：知識庫初始化（把 5 筆資料 embedding 後寫入 Qdrant）
- `scripts/search-test.js`：搜尋測試（用 3 種不同問法查詢）

## 執行方式

先用 Docker 把 Qdrant 跑起來（課程用的向量資料庫）：

```bash
docker run -p 6333:6333 qdrant/qdrant
```

再安裝與執行：

```bash
npm install
cp .env.example .env      # 填入 OPENAI_API_KEY
npm run init              # 建立知識庫
npm run search            # 用 3 個問題測試搜尋
```

## 搜尋結果（3 種問法，含相似度分數）

用三種「不直接講工具名稱」的問法，驗證語意搜尋能找到正確的工具：

| 查詢 | 期望命中 |
| --- | --- |
| 哪個工具可以在終端機裡幫我自動寫程式？ | Codex CLI / Claude Code |
| 我想連接外部資料或工具給 AI 用，有什麼標準做法？ | MCP |
| 有沒有可以編排多個 AI agent 分工合作的框架？ | OpenAI Agents SDK / Google ADK |

執行 `npm run search` 後，把實際的相似度分數貼在這裡：

```
（在此貼上 npm run search 的輸出，每個查詢前三名與 score）
```

> 截圖請放在 `screenshots/`。
