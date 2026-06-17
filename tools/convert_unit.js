import { z } from "zod";
import { defineTool } from "../utils/func-tool.js";

const ALIASES = {
  c: "C", "°c": "C", 攝氏: "C",
  f: "F", "°f": "F", 華氏: "F",
  km: "km", 公里: "km",
  mile: "mile", 英里: "mile",
  kg: "kg", 公斤: "kg",
  lb: "lb", 磅: "lb",
};

const GROUPS = {
  C: "temperature",
  F: "temperature",
  km: "distance",
  mile: "distance",
  kg: "weight",
  lb: "weight",
};

function normalize(unit) {
  return ALIASES[String(unit).trim().toLowerCase()] ?? null;
}

const TABLE = {
  "C->F": (v) => v * 9 / 5 + 32,
  "F->C": (v) => (v - 32) * 5 / 9,
  "km->mile": (v) => v * 0.621371,
  "mile->km": (v) => v / 0.621371,
  "kg->lb": (v) => v * 2.20462,
  "lb->kg": (v) => v / 2.20462,
};

function convertUnit({ value, from_unit, to_unit }) {
  const from = normalize(from_unit);
  const to = normalize(to_unit);

  if (!from || !to) {
    return { error: `不支援的單位：${from_unit} 或 ${to_unit}` };
  }

  if (GROUPS[from] !== GROUPS[to]) {
    return { error: `不支援的單位組合：${from_unit} -> ${to_unit}` };
  }

  const calc = TABLE[`${from}->${to}`];
  if (!calc) {
    return { error: `不支援的換算組合：${from_unit} -> ${to_unit}` };
  }

  const result = Math.round(calc(value) * 10000) / 10000;
  return { value, from_unit: from, to_unit: to, result };
}

export const convertUnitTool = defineTool({
  name: "convert_unit",
  description: "進行單位換算，支援攝氏↔華氏、公里↔英里、公斤↔磅。",
  fn: convertUnit,
  parameters: z.object({
    value: z.number().describe("要換算的數值，如 25"),
    from_unit: z.string().describe("原始單位，如 攝氏 / C / 公里 / 公斤"),
    to_unit: z.string().describe("目標單位，如 華氏 / F / 英里 / 磅"),
  }),
});
