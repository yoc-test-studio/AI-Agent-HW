import { z } from "zod";
import { defineTool } from "../utils/func-tool.js";

const YOUBIKE_API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

async function getYoubikeByArea({ area, limit = 5 }) {
  const res = await fetch(YOUBIKE_API);
  if (!res.ok) {
    return { error: `YouBike API 錯誤：${res.status}` };
  }

  const data = await res.json();
  const keyword = area.replace(/台北市|臺北市/g, "").trim();

  const stations = data
    .filter((s) => s.act === "1" && s.sarea.includes(keyword))
    .map((s) => ({
      name: s.sna.replace(/^YouBike2\.0_/, ""),
      area: s.sarea,
      address: s.ar,
      available_rent: s.available_rent_bikes,
      available_return: s.available_return_bikes,
      total: s.Quantity,
    }))
    .sort((a, b) => b.available_rent - a.available_rent)
    .slice(0, limit);

  if (stations.length === 0) {
    return {
      error: `查不到「${area}」的站點，請改用台北市的行政區名稱，例如大安區、信義區。`,
    };
  }

  return stations;
}

export const youbikeTool = defineTool({
  name: "get_youbike_by_area",
  description:
    "用台北市的行政區名稱查詢該區可借的 YouBike 站點（例如大安區、信義區）。注意：傳整個「台北市」會查不到。",
  fn: getYoubikeByArea,
  parameters: z.object({
    area: z.string().describe("台北市行政區名稱，例如大安區、信義區、中正區"),
    limit: z.number().default(5).describe("回傳站點數量上限，預設 5"),
  }),
});
