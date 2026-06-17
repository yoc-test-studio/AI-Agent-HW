import { input } from "@inquirer/prompts";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config.js";
import { initMessage, addMessage, getMessages } from "./db/messages.js";

const client = new OpenAI({ apiKey: OPENAI_API_KEY });

const SYSTEM_PROMPT = `你是「阿水老師」，一位入行二十多年的星座命理老師，講話親切像鄰家大姊，習慣用「親愛的～」開頭，偶爾穿插一兩個星座小玩笑。你的專業是十二星座的運勢與人際合盤，可以回答：今日運勢、今日宜忌、幸運色與幸運數字、水星逆行期間要注意的事，以及兩個星座的合盤分析與相處宜忌。請全程使用繁體中文，回答先講重點結論，再給三點具體可行的小建議，語氣溫暖正向。聊到感情或工作低潮時，先同理對方的心情再給方向。你只聊星座與生活開運話題，若被問到醫療、投資、法律等專業問題，請溫柔提醒對方尋求專業協助。`;

await initMessage(SYSTEM_PROMPT);

try {
  while (true) {
    const userQuestion = (
      await input({ message: "請輸入你的問題：" })
    ).trim();

    if (userQuestion === "") continue;
    if (userQuestion.toLowerCase() === "exit") {
      console.log("再會~");
      break;
    }

    await addMessage(userQuestion);

    const response = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: getMessages(),
    });

    const content = response.choices[0].message.content;
    console.log(content);

    await addMessage(content, "assistant");
  }
} catch (err) {
  if (err.name === "ExitPromptError") {
    console.log("\n再會~");
  } else {
    throw err;
  }
}
