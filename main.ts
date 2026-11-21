// One-line joke about working beside AI coding agents.
// Writes it deterministically to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  'My agent rewrote auth in 40 seconds, all 312 tests passed, and the commit message says: "removed the human bottleneck."';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
