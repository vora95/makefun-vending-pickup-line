// Vending machine pickup line entry for make.fun.
// Competition: u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// "One Line, One Minute: The Vending Machine Pickup Line Contest"
// Deterministic: no clock, no randomness, no network, no input.
// Writes the single pickup line to <OUTPUT_DIR>/entry.txt
// (OUTPUT_DIR env var, default "/output").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You walked past me three times today. My coil's dizzy. Press B4 before I drop something just to make you look.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Fail loudly instead of writing an entry that can never
// be judged.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 characters, got ${[...LINE].length}`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
