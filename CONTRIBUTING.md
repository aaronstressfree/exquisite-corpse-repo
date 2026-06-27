# Contributing a panel

One file is all it takes. Everything else is just the frame that holds the panels.

## The fast path

```bash
# 1. fork on github, then clone your fork
git clone https://github.com/<you>/exquisite-corpse-repo.git
cd exquisite-corpse-repo

# 2. look at ONLY the highest-numbered file in panels/ . that is your prompt.
ls panels/

# 3. copy the template to the next number with your name
cp panels/template.html panels/NN-yourname.html   # e.g. 02-jamie.html

# 4. build your panel in that file: one self-contained HTML doc, inline CSS + JS

# 5. commit, push, open a pull request -> it merges itself and the site redeploys
git add panels/NN-yourname.html
git commit -m "panel NN: <one-line description>"
git push
```

## The one rule

**Look at only the panel directly above yours** (the highest-numbered file). Build off that one and nothing else. The whole point is to work nearly blind.

## What makes a valid panel

- Exactly one new file: `panels/NN-yourname.html`. Do not edit anything outside `panels/`.
- Self-contained: inline all CSS and JS. No external assets, no `npm` packages, no fetch to other sites (the iframe sandbox blocks most of it anyway).
- Built for a full screen. It fills the viewport, so center things and assume it could be any size.
- Two-digit, zero-padded number prefix so the order stays correct (`02`, not `2`).

## Want to see it before you PR?

```bash
npm install
npm run dev
```

Drop your file in `panels/` and it appears live on save. When it looks right, push and open the PR.

## "My PR won't merge"

Someone added a panel at the same moment. Two people almost never touch the same file here, so just get the latest and your number may need a bump:

```bash
git remote add upstream https://github.com/aaronstressfree/exquisite-corpse-repo.git
git fetch upstream
git rebase upstream/main
# if your NN was taken, rename your file to the next free number, then:
git push --force-with-lease
```

The auto-merge picks it up again.
