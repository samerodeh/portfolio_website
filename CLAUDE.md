# Portfolio Website — Claude Context

## What This Is

Samer Odeh's personal portfolio website — a single-page resume/portfolio built with React and Vite. It showcases his experience, projects, technical skills, and contact info. Deployed on Netlify at `https://jovial-mermaid-852a8b.netlify.app`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (JSX) |
| Build tool | Vite 4 |
| Routing | React Router DOM v6 |
| Animations | Framer Motion 11 |
| 3D / WebGL | Three.js |
| Styling | Plain CSS (no preprocessor, no CSS modules) |
| Fonts | Bricolage Grotesque, DM Sans, JetBrains Mono (Google Fonts) |
| Deployment | Netlify |

## Project Structure

```
src/
  App.jsx              # Root — mounts ParticleNet globally, defines routes
  App.css              # Global layout (.app, .main-content, .container)
  index.css            # Design tokens (:root CSS variables) + body/html base styles
  main.jsx             # React entry point

  components/
    Navbar.jsx / .css  # Fixed top nav
    ScrollToTop.jsx    # Resets scroll on route change
    StarField.jsx      # Three.js star field — used only in the hero section
    ParticleNet.jsx    # Three.js connected-node particle network — fixed backdrop for all pages

  pages/
    Home.jsx / .css    # Main resume page (hero, experience, projects, skills, education, contact)
    Experiences.jsx / .css
    SkillsProjects.jsx / .css
    Contact.jsx / .css
```

## Design System

All design tokens live in `src/index.css` as CSS custom properties on `:root`.

**Color scheme — dark theme:**
- `--bg: #080808` — near-black page background
- `--surface: #111111` — card backgrounds
- `--surface-2: #1c1c1c` — chip/inset backgrounds
- `--border: rgba(255,255,255,0.07)` — subtle borders
- `--ink: #f0f0f0` — primary text
- `--text: rgba(255,255,255,0.68)` — body text
- `--muted: rgba(255,255,255,0.42)` — meta text
- `--accent: #e50914` — signature red
- `--accent-deep: #ff4a52` — brighter red for dark-bg links/text
- `--accent-wash: rgba(229,9,20,0.12)` — red tint wash

**Typography:**
- Display headings: `Bricolage Grotesque` via `--font-display`
- Body: `DM Sans` via `--font-body`
- Monospace / chips: `JetBrains Mono` via `--font-mono`

**Section titles** use a CSS gradient text (`#d8d8de → #ff4a52`) via `-webkit-background-clip: text`.

## Three.js Setup

### StarField (`src/components/StarField.jsx`)
- Mounted inside `.hero-section` as `position: absolute; inset: 0; z-index: 0`
- 2200 glowing white points (PointsMaterial + CanvasTexture radial glow + AdditiveBlending)
- Slow rotation + mouse parallax
- Respects `prefers-reduced-motion`

### ParticleNet (`src/components/ParticleNet.jsx`)
- Mounted in `App.jsx` above `.app` — renders globally on all pages
- `position: fixed; inset: 0; z-index: -1` — sits behind all content
- 85 nodes with connecting LineSegments when within distance threshold (`MAX_DIST = 3.8`)
- Positions update each frame; line geometry rebuilt via `setDrawRange`
- Respects `prefers-reduced-motion`

**Important CSS gotcha:** The `html` element must have `background: #080808` (set in `index.css`). All page-level containers (`body`, `.app`, `.section`) must be `background: transparent` so the fixed canvas shows through. The three other page CSS files (`Experiences.css`, `SkillsProjects.css`, `Contact.css`) previously set `.section { background: #f8f9fa }` globally — these are now `transparent`.

## Animation System

All animations use the same shared constants for visual consistency:

```js
const EASE = [0.22, 1, 0.36, 1]                            // custom cubic-bezier
const up = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: EASE } } }
const container = (stagger = 0.15, delay = 0.05) => ({ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } })
const VP = { once: true, amount: 0.15 }                    // viewport trigger
```

- **All stagger values are 0.15** across all sections for uniform pacing.
- **Duration is 1.0s** (slow, deliberate entrance).
- **`y: 32`** offset gives a noticeable-but-not-jarring slide.
- Hero content uses `animate="show"` (mounts immediately); all other sections use `whileInView` + `viewport`.
- All four page components (Home, Experiences, SkillsProjects, Contact) use these same variants.

## Hero-to-Experience Transition

The `.hero-bottom-fade` div (last child of `.hero-section`) creates a smooth visual bridge:

```css
.hero-bottom-fade {
  position: absolute; bottom: 0; left: 0; right: 0; height: 220px;
  background: linear-gradient(to bottom, transparent 0%, #080808 100%);
  pointer-events: none; z-index: 3;
}
```

This fades the starfield out at the hero's bottom edge, blending into the dark page background below.

## Resume Button Scroll Behavior

The Navbar "Resume" link (`Navbar.jsx`) smooth-scrolls to `#experience` when already on `/`.
When navigating from another page, it routes to `/#experience`.
`Home.jsx` has a `useEffect` on `location.hash` that calls `scrollIntoView({ behavior: 'smooth' })` when hash is `#experience`.

## Key Conventions

- **No em-dashes (`—`) in content text.** Use `:` or `,` instead. The only acceptable dashes are in date ranges (e.g., `Jan 2026 — Present`), which use `·` for section eyebrows.
- Section eyebrow format: `// 01 · Career`, `// 02 · Selected work`, etc.
- All animations use Framer Motion with `viewport={{ once: true }}` — they fire once on scroll-into-view.
- No TypeScript — plain JSX throughout.
- No CSS modules — all styles are global CSS files imported per component.

## Dev Commands

```bash
npm run dev      # Start Vite dev server (default port 3000)
npm run build    # Production build → dist/
npm run preview  # Serve the dist/ build locally
```

## Content Data

All resume content (`experiences`, `certifications`, `projects`, `skillGroups`, `education`, `secondaryContacts`) is defined as plain JS arrays/objects at the top of `src/pages/Home.jsx`. To update content, edit those data structures — no CMS or external data source. Source of truth for the facts is Samer's master resume (`~/.claude/skills/edit-resume/resume/master-resume.md` and the exported `~/OneDrive/Desktop/resumes/samer_resume.pdf`).

`Home.jsx` is the entire live site. The `/experiences`, `/skills-projects`, and `/contact` routes in `App.jsx` still exist but are **not linked from the Navbar**; their page components carry a mirrored copy of the same content kept in sync manually.

## Deployment

Netlify auto-deploys from the main branch. The `dist/` folder is the build output. A `netlify.toml` or redirect config may be needed for client-side routing (React Router).
