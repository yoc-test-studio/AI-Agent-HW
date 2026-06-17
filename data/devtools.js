export const devtools = [
  {
    id: 1,
    name: "Codex CLI",
    description:
      "OpenAI 推出的開源終端機程式開發代理，可以直接在指令列裡讀檔、改檔、執行測試與跑指令。它把大型語言模型包成一個會自己動手的 coding agent，適合用來修 bug、加功能或重構，並支援不同的自動化權限模式。",
  },
  {
    id: 2,
    name: "Claude Code",
    description:
      "Anthropic 的終端機 agentic coding 工具，由 Claude 模型驅動。它能理解整個專案結構、跨多個檔案進行修改、執行 Git 操作，也可以透過 MCP 連接外部工具，常被用來做大型重構與自動化開發任務。",
  },
  {
    id: 3,
    name: "Google ADK（Agent Development Kit）",
    description:
      "Google 開源的 AI agent 開發框架，提供建立、編排與評估多代理系統的元件。它支援工具呼叫、工作流控制與部署到 Vertex AI，讓開發者用程式化的方式組裝出複雜的 agent 應用。",
  },
  {
    id: 4,
    name: "OpenAI Agents SDK",
    description:
      "OpenAI 的多代理開發框架，用 Agent、Handoff、Guardrail 等概念把工作拆給不同的代理處理，並內建工具呼叫與追蹤功能。適合用來把單純的聊天機器人升級成會分工、會使用工具的 AI agent。",
  },
  {
    id: 5,
    name: "Model Context Protocol（MCP）",
    description:
      "由 Anthropic 提出的開放協定，定義 AI 應用如何連接外部工具、資料庫與服務。透過 MCP server，AI 可以用統一的介面取得即時資料或執行動作，是把 agent 接上真實世界的重要基礎建設。",
  },
];
