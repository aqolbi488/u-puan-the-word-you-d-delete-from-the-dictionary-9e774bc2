import { mkdirSync, writeFileSync } from "node:fs";

const word = "spam";

// Gate self-check: exactly one word, 1-77 characters, nothing else attached.
if (!/^\S+$/.test(word) || word.length < 1 || word.length > 77) {
  throw new Error("entry must be exactly one word of 1-77 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
