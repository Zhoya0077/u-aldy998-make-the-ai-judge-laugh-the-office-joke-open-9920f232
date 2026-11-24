// Office Joke Open — writes one single-line office joke to entry.txt.
// The judge scores the text, not the program, so the entry is kept exact:
// one line, no trailing newline, well inside the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The printer jammed on page one of my resignation letter — even the hardware is begging me to stay.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${[...JOKE].length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
