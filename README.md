@yoc-test-studio ➜ /workspaces/AI-Agent-HW (hw3) $ node scripts/embed-devtools.js 
讀到 5 筆資料
已建立 collection: devtools
進度：5 / 5
完成！
@yoc-test-studio ➜ /workspaces/AI-Agent-HW (hw3) $ node main.js

=== 問題：哪個工具可以在終端機裡幫我自動寫程式？ ===

1. Codex CLI
   分數：0.537
   說明：OpenAI 推出的開源終端機程式開發代理，可以直接在指令列裡讀檔、改檔、執行測試與跑指令。它把大型語言模型包成一個會自己動手的 coding agent，適合用來修 bug、加功能或重構，並支援不同的自動化權限模式。

2. Claude Code
   分數：0.518
   說明：Anthropic 的終端機 agentic coding 工具，由 Claude 模型驅動。它能理解整個專案結構、跨多個檔案進行修改、執行 Git 操作，也可以透過 MCP 連接外部工具，常被用來做大型重構與自動化開發任務。

3. Google ADK
   分數：0.344
   說明：Google 開源的 AI agent 開發框架（Agent Development Kit），提供建立、編排與評估多代理系統的元件。它支援工具呼叫、工作流控制與部署到 Vertex AI，讓開發者用程式化的方式組裝出複雜的 agent 應用。


=== 問題：我想連接外部資料或工具給 AI 用，有什麼標準做法？ ===

1. Model Context Protocol
   分數：0.494
   說明：由 Anthropic 提出的開放協定（MCP），高老師比喻他是一個希望大家車同軌書同文的作法，定義 AI 應用如何連接外部工具、資料庫與服務。透過 MCP server，AI 可以用統一介面取得即時資料或執行動作，是把 agent 接上真實世界的重要基礎建設。

2. Google ADK
   分數：0.479
   說明：Google 開源的 AI agent 開發框架（Agent Development Kit），提供建立、編排與評估多代理系統的元件。它支援工具呼叫、工作流控制與部署到 Vertex AI，讓開發者用程式化的方式組裝出複雜的 agent 應用。

3. Claude Code
   分數：0.458
   說明：Anthropic 的終端機 agentic coding 工具，由 Claude 模型驅動。它能理解整個專案結構、跨多個檔案進行修改、執行 Git 操作，也可以透過 MCP 連接外部工具，常被用來做大型重構與自動化開發任務。


=== 問題：有沒有可以編排多個 AI agent 分工合作的框架？ ===

1. OpenAI Agents SDK
   分數：0.661
   說明：OpenAI 的多代理開發框架，用 Agent、Handoff、Guardrail 等概念把工作拆給不同代理處理，並內建工具呼叫與追蹤功能。適合把單純的聊天機器人升級成會分工、會使用工具的 AI agent。

2. Google ADK
   分數：0.572
   說明：Google 開源的 AI agent 開發框架（Agent Development Kit），提供建立、編排與評估多代理系統的元件。它支援工具呼叫、工作流控制與部署到 Vertex AI，讓開發者用程式化的方式組裝出複雜的 agent 應用。

3. Model Context Protocol
   分數：0.495
   說明：由 Anthropic 提出的開放協定（MCP），高老師比喻他是一個希望大家車同軌書同文的作法，定義 AI 應用如何連接外部工具、資料庫與服務。透過 MCP server，AI 可以用統一介面取得即時資料或執行動作，是把 agent 接上真實世界的重要基礎建設。