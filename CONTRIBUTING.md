# Contributing

There is one file that matters: [CORPSE.md](CORPSE.md). Everything else is scaffolding.

## The fast path

```bash
# 1. fork on github, then clone your fork
git clone https://github.com/<you>/exquisite-corpse-repo.git
cd exquisite-corpse-repo

# 2. read ONLY the last line of CORPSE.md, then append yours
#    (open it in any editor and add a line at the very bottom)

# 3. commit and push to your fork
git add CORPSE.md
git commit -m "add a line"
git push

# 4. open a pull request -> it merges itself
```

## Rules of the game

- **Read only the last line.** The point is to build blind.
- **One line per turn.** Leave room for the next person.
- **Build on what is there.** Continue the scene, do not restart it.
- **Be a decent human.** Nothing hateful or harassing. Your name is on the commit.

## "My PR will not merge"

Someone added a line at the same time as you. Get the latest and re-add yours at the new bottom:

```bash
git remote add upstream https://github.com/aaronstressfree/exquisite-corpse-repo.git
git fetch upstream
git rebase upstream/main   # fix the conflict by keeping both lines, yours last
git push --force-with-lease
```

Then the auto-merge picks it up again.
