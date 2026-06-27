# exquisite-corpse-repo

A collaborative [Exquisite Corpse](https://en.wikipedia.org/wiki/Exquisite_corpse) played in git.

The Exquisite Corpse is an old Surrealist game: a sheet of paper gets passed around, each person adds a piece while seeing only a sliver of what came before, and the full creature is revealed at the end. This repo is that game, except the paper is [CORPSE.md](CORPSE.md) and the players are whoever shows up.

## The one rule

**Only read the last line of [CORPSE.md](CORPSE.md). Then add yours.**

That is the whole spirit of it. Git will happily show you the entire history, but resist. The fun comes from each person building blind on a single fragment. It is an honor-system game. Honor it.

## How to play

Anyone can contribute, no permission needed, no invite required. Contributions merge **automatically** the moment you open a pull request, so you are never waiting on anyone.

1. **Fork** this repo (the "Fork" button, top right).
2. Open `CORPSE.md`, scroll to the bottom, read **only the last line**.
3. Add your line beneath it. A sentence, a stage direction, a sound effect, a single ominous word. Whatever the last line summons in you.
4. Commit and open a **pull request**.
5. A bot merges it for you. Your line is now canon.

That is it. No review, no gatekeeping, no waiting.

> Already have push access or your own clone? You can also just commit straight to `main`. Same rule applies: read the last line, add yours.

## Etiquette

- Keep it to roughly one line per turn. Let other people add too.
- Build on the line above you, do not reset the scene.
- Keep it the kind of thing you would show a friend. No harassment, no slurs, nothing you would not want your name attached to in the commit log.
- Conflicts happen when two people add at once. If your PR will not merge, pull the latest `main` and re-add your line at the new bottom.

## Why automatic merge

Every pull request is merged the instant it is opened, by the workflow in [.github/workflows/auto-merge.yml](.github/workflows/auto-merge.yml). The repo trusts you. Do not make it regret that.

Now go read the last line.
