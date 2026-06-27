# exquisite-corpse-repo

A web app built one blind panel at a time, by whoever shows up.

This is the [Exquisite Corpse](https://en.wikipedia.org/wiki/Exquisite_corpse) game played as a website. In the old Surrealist version a sheet of paper is folded so each person draws a section while seeing only a sliver of what came before, and the full creature is revealed at the end. Here the sheet is a scrolling web page, each section is a tiny self-contained web app, and the players are whoever opens a pull request. The result is one long, gloriously incoherent site stitched together from contributions that were each made nearly blind.

## The one rule

**Before you build your panel, look only at the panel directly above yours.** That is the highest-numbered file in [`panels/`](panels/). Build off that one, and that one only. Git will happily show you the whole site. Resist. The fun is in each person riffing on a single fragment and seeing what monster emerges.

## How it works

Every numbered `.html` file in [`panels/`](panels/) is a standalone mini web app. The home page auto-discovers all of them, sorts them by number, and renders each inside its own sandboxed full-screen iframe in a scroll-snap stack. You scroll down through the corpse one panel at a time.

Because each panel is just a string rendered in a sandboxed iframe:

- A broken panel can't break the build or the site. Worst case, that one panel looks broken.
- A panel can't touch the page around it, the other panels, or your data. It runs scripts in isolation.
- There is nothing to wire up. Drop a file in `panels/`, and it appears.

## How to add a panel

No permission needed, no invite. Pull requests **merge automatically** the moment you open one (see [.github/workflows/auto-merge.yml](.github/workflows/auto-merge.yml)), and the live site rebuilds itself. You are never waiting on anyone.

1. **Fork** this repo.
2. Find the highest-numbered file in [`panels/`](panels/). **Look at only that one.**
3. Copy [`panels/template.html`](panels/template.html) to `panels/NN-yourname.html`, where `NN` is the next two-digit number (`02`, `03`, ...).
4. Build your panel: a single self-contained HTML file with inline CSS and JS. Make it riff on the panel above yours. It can be anything that fits in a full-screen frame: a scene, a toy, a game, a poem, a glitch.
5. Open a **pull request**. It merges itself, the site redeploys, and your panel is now canon.

> Prefer to skip the fork? If you have push access, just add your `panels/NN-yourname.html` file straight to `main`. Same rule applies.

### Panel rules

- **One file**, `panels/NN-yourname.html`, self-contained. No extra assets, no dependencies, no edits to anything outside `panels/`.
- It renders in `sandbox="allow-scripts allow-popups allow-modals allow-forms"`. Scripts run; network calls to this site and access to the parent do not. Assume no outside resources.
- Design for a full viewport (it fills the screen). Handle being any size.
- Keep it the kind of thing you'd show a friend. Your name is on the commit.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. Add a file to `panels/` and it shows up on save.

## Stack

Vite + React for the shell that stacks the panels. The panels themselves are plain HTML. Deploys on Vercel; every merged PR triggers a fresh deploy.

Now go look at the last panel.
