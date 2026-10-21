# Portfolio Website — Claude Context

## What This Is

Samer Odeh's personal portfolio website — a single-page resume/portfolio built with React and Vite. It showcases his experience, projects, technical skills, and contact info. Auto-deploys to Vercel on every push to `main`.

**Live URL:** `https://samerodehdev.vercel.app`

> The old `samerodeh.dev` domain does **not** resolve. Use `samerodehdev.vercel.app` everywhere (canonical URL, `robots.txt`, `sitemap.xml`, OG/Twitter image URLs, JSON-LD `url`).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (JSX) |
| Build tool | Vite 4 |
| Routing | React Router DOM v6 |
| Animations | Framer Motion 11 |
| 3D / WebGL | Three.js (`HeroSculpture`) |
| Styling | Plain CSS (no preprocessor, no CSS modules) |
| Fonts | Bricolage Grotesque, DM Sans, JetBrains Mono (Google Fonts) |
| Deployment | Vercel (auto-deploy from `main`) |

## Project Structure

```
src/
  App.jsx              # Root — BrowserRouter + routes
  App.css              # .app, .container (max-width 1280px)
  index.css            # Design tokens (:root) + base styles
  main.jsx             # React entry point
  resumeContent.jsx    # SINGLE SOURCE OF TRUTH for resume content

  components/
    Navbar.jsx / .css  # Fixed top nav (78px) — logo, links, resume download
    HeroSculpture.jsx  # Three.js knot sculpture in the hero

  pages/
    Home.jsx / .css    # The entire site: hero, work, experience, capabilities, contact
```

The old dark-theme site (`ParticleNet`, `StarField`, `TiltCard`, `ScrollToTop`, and the
standalone `Experiences` / `SkillsProjects` / `Contact` pages) was **deleted**. Do not
restore it. `/experiences`, `/skills-projects`, and `/contact` are now redirect routes
handled in `App.jsx` via `<Navigate>`.

## Design System

Tokens live in `src/index.css` as CSS custom properties on `:root`.

**Color scheme — light "paper" editorial:**
- `--paper: #f5f6f3` — page background
- `--ink: #172021` — primary text, logo mark, dark buttons
- `--teal: #225b5e` — signature accent (headline emphasis, links)
- `--muted: #667271` — secondary text
- `--line: #d9dfdb` — hairline borders

**Typography:**
- Display headings: `Bricolage Grotesque` via `--display`
- Body: `DM Sans`
- Labels / eyebrows / metadata: `JetBrains Mono` (uppercase, wide letter-spacing)

Section anchors used by the navbar: `#top`, `#about`, `#projects`, `#experience`, `#contact`.

## Hero

`HeroSculpture.jsx` renders a Three.js trefoil-knot sculpture with a wireframe overlay,
mouse-parallax rotation, and a graceful no-WebGL fallback. It sits in `.hero-art`
(right column of `.hero-grid`, a 1.02fr / 0.98fr split on desktop, stacked below 740px).

## Animation System

Home.jsx uses a shared `<Reveal>` wrapper built on Framer Motion:

```jsx
function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const reduced = useReducedMotion()
  const Component = motion[as]
  return <Component className={className} initial={reduced ? false : { opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.78, delay, ease }}>
    {children}</Component>
}
```

- `ease = [0.22, 1, 0.36, 1]` — shared cubic-bezier for the whole site.
- `viewport={{ once: true }}` — reveal fires once on scroll-into-view.
- `useReducedMotion()` disables the entrance animation for users who ask for less motion.
- A `.reading-progress` bar tracks scroll progress via `useScroll` + `useSpring`.

## Resume Download (top-left)

The Navbar's top-left cluster (`.nav-left`) holds the logo plus a **Download Resume** button.

- The PDF lives at `public/samer_resume_cs.pdf` and is served at `/samer_resume_cs.pdf`.
- The link uses the `download` attribute with the friendly filename `Samer_Odeh_Resume.pdf`.
- Desktop: the button sits next to the logo in the top-left (`.nav-resume`).
- Mobile (≤680px): the top-left button is hidden and the link moves into the dropdown
  menu as `.nav-resume-mobile`.
- To swap in a new resume, replace the file in `public/` (keep the same filename, or
  update `RESUME_URL` in `Navbar.jsx`).

## Social Preview Image

`public/og-image.jpg` is a 1200×630 render of the site used for `og:image` and
`twitter:image`. Regenerate it the same way if the design changes: screenshot the page at
1200px wide, crop the top 630px, and encode as JPEG.

## Key Conventions

- **No em-dashes (`—`) in content text.** Use `:` or `,` instead. Date ranges use an
  en-dash (`–`).
- Section eyebrow format: `01` / `02` in mono, with a teal overline and a large display title.
- No TypeScript — plain JSX throughout.
- No CSS modules — all styles are global CSS files imported per component.
- Content is data, not markup: edit `src/resumeContent.jsx` to change facts.

## Dev Commands

```bash
npm run dev      # Start Vite dev server (default port 3000)
npm run build    # Production build → dist/
npm run preview  # Serve the dist/ build locally
```

> On Windows + OneDrive, `npm run dev` can fail with `EPERM ... rmdir node_modules/.vite/deps`
> (OneDrive file locking). Use `npm run build && npm run preview` to verify changes.

## Content Data

All resume content (`experiences`, `projects`) lives in `src/resumeContent.jsx`.
`Home.jsx` is the entire live site and imports from there — there is no CMS.
The `Emphasized` helper renders `**bold**` markers from the resume as `<strong>`.

## Deployment

Vercel auto-deploys from the `main` branch. Vercel runs `npm run build` itself, but
`dist/` is also committed to the repo. The commit status on `main` reports the Vercel
deploy result. Check deployments with:

```bash
gh api repos/samerodeh/portfolio_website/deployments --jq '.[] | {sha: .sha[0:7], environment, created_at}'
```
