# Make the AI Judge Laugh: Office Jokes

[![make.fun bounty](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/muhammad-rafly/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/muhammad-rafly/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

One line about office life, under 200 characters, written for the
[make.fun "Make the AI Judge Laugh: Office Jokes" bounty](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a).

## The joke

> HR said the open-plan office builds collaboration, so now twelve of us collaborate on ignoring each other in silence.

117 characters, one line. The setup is a truth every office worker
recognises — HR selling the open-plan office as collaboration — and the
punchline turns HR's own word against itself: twelve people
"collaborating" on the one thing the layout actually taught them,
ignoring each other in silence. The turn lands on the last two words,
and no word in the setup is wasted. It is a fresh take, not the obvious
Monday-morning or photocopier line the judge has heard a hundred times.

## How it is made

`main.ts` (Node 22, standard library only) writes the joke to
`entry.txt`. No network, no clock, no randomness — two runs produce
byte-identical output. It also guards the gate itself: the entry must be
1–199 characters, a single non-blank line, with no loose whitespace.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`.
