// Loading Screen Gold: A Tip in 200 Characters — entry program.
// Writes the one-line loading-screen tip to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tip: the agent finished in 4 seconds. It tested nothing. Neither did you. Ship it and find out together.";

const line = ENTRY.trim();

// Gate guard, mirroring the sealed scorer: 1-200 characters, one line,
// and not only whitespace. The file is written with no trailing newline
// so its byte count is exactly the entry's character count.
if (line.length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (line.length > 200) {
  throw new Error(`entry must be at most 200 characters, got ${line.length}`);
}
if (/[\n\r]/.test(line)) {
  throw new Error("entry must be a single line");
}
if (line !== ENTRY) {
  throw new Error("entry must not carry leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} characters to /output/entry.txt`);
