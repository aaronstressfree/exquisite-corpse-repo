import { useMemo } from 'react'

const REPO = 'aaronstressfree/exquisite-corpse-repo'
const ADD_PANEL_URL = `https://github.com/${REPO}#how-to-add-a-panel`

// Every numbered .html file in /panels is a self-contained mini web app,
// contributed blind by a different person. We load each as a raw string and
// render it inside a sandboxed iframe, so a broken or wild panel can never
// break the build or its neighbors. (panels/template.html is ignored.)
const panelModules = import.meta.glob('../panels/[0-9]*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function loadPanels() {
  return Object.entries(panelModules)
    .map(([path, html]) => {
      const file = path.split('/').pop()
      const match = file.match(/^(\d+)[-_](.+)\.html$/i)
      return {
        file,
        num: match ? match[1] : '00',
        author: (match ? match[2] : file.replace(/\.html$/, '')).replace(/[-_]/g, ' '),
        html,
      }
    })
    .sort((a, b) => parseInt(a.num, 10) - parseInt(b.num, 10) || a.file.localeCompare(b.file))
}

export default function App() {
  const panels = useMemo(loadPanels, [])

  return (
    <div className="corpse">
      <header className="hero">
        <h1>Exquisite&nbsp;Corpse</h1>
        <p className="tagline">
          A web app built one blind panel at a time. Every section below was added by a
          different person who saw only the panel directly above theirs.
        </p>
        <p className="count">
          {panels.length} {panels.length === 1 ? 'panel' : 'panels'} and counting
        </p>
        <a className="cta" href={ADD_PANEL_URL} target="_blank" rel="noreferrer">
          + Add your panel
        </a>
        <div className="scroll-hint">scroll ↓</div>
      </header>

      {panels.map((p) => (
        <section className="panel" key={p.file}>
          <div className="panel-caption">
            <span className="panel-num">{p.num}</span>
            <span className="panel-author">{p.author}</span>
          </div>
          <iframe
            className="panel-frame"
            title={p.file}
            srcDoc={p.html}
            sandbox="allow-scripts allow-popups allow-modals allow-forms"
            loading="lazy"
          />
        </section>
      ))}

      <footer className="outro">
        <p>the corpse is never finished</p>
        <a className="cta" href={ADD_PANEL_URL} target="_blank" rel="noreferrer">
          + Add the next panel
        </a>
      </footer>
    </div>
  )
}
