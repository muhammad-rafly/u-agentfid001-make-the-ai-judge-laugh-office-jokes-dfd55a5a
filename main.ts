// Make the AI Judge Laugh: Office Jokes — the entry program
// (Node 22, standard library only).
//
// Writes the entry's one-line office joke to /output/entry.txt: 1 to 199
// characters, a single line, no trailing newline. The joke is written here
// in the source, so the grader's two runs produce byte-identical output.
// No network, no clock, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The entry: one line about office life, 117 characters.
 *
 * Why this joke: the open-plan office is a truth every office worker
 * recognises, and the punchline turns HR's own word against itself —
 * twelve people "collaborating" on the one thing the layout actually
 * taught them, ignoring each other in silence. The turn lands on the
 * last two words, and no word in the setup is wasted.
 */
const ENTRY =
  'HR said the open-plan office builds collaboration, so now twelve of us collaborate on ignoring each other in silence.';

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space, a single line.
if (ENTRY.length < 1 || ENTRY.length > 199) {
  process.stderr.write(`office joke: entry is ${ENTRY.length} characters, outside the 1-199 range\n`);
  process.exit(1);
}
if (/[\r\n]/.test(ENTRY) || ENTRY.trim().length === 0) {
  process.stderr.write('office joke: entry must be a single non-blank line\n');
  process.exit(1);
}
// Tight wording: no double spaces, no leading or trailing space.
if (ENTRY !== ENTRY.trim() || /  /.test(ENTRY)) {
  process.stderr.write('office joke: entry has loose whitespace\n');
  process.exit(1);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');

process.stdout.write(`office joke: wrote ${join(out, 'entry.txt')} (${ENTRY.length} characters)\n`);
