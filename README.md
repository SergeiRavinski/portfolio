# Sergei Ravinski — Portfolio

A personal portfolio showcasing projects and experience with modern web technologies, built with Next.js, Sanity as a headless CMS, Tailwind CSS, and interactive animations using Framer Motion and GSAP.

![Screenshot of the website](/public/screenshot-frontpage.png)

## Tech Stack

### Frontend

- Next.js with App Router
- React.js
- TypeScript
- Tailwind CSS
- GSAP & Motion for smooth animations
- Mapbox GL JS for geolocation and maps
- Dark mode via next-themes
- Zustand

### Backend / CMS

- Sanity.io
- Portable Text editor
- Dynamic content via GROQ
- Visual editing

### Testing

- Vitest + Testing Library

### CI/CD

- GitHub Actions

### Deployment

- Vercel

## Features

- Interactive animations with GSAP and Motion
- Dynamic content pages powered by Sanity CMS
- Visual Editing mode for live content previews
- Light/dark mode toggle
- Global state management with Zustand
- Contact form with SendGrid
- Map integration using Mapbox
- Optimized images & server components with Next.js

**Project Structure**

```bash
    portfolio/
    │
    ├─ .github/workflows/
    │ └─ pr.yaml
	|
	├─ public/
	|
  	├─ src/
    │ ├─ app/
	│ │ ├─ (about-page)/
    │ │ ├─ (contact-page)/
    │ │ ├─ (portfolio-page)/
    │ │ ├─ api/
    │ │ ├─ studio/
    │ │ ├─ globals.css
    │ │ ├─ layout.tsx
    │ │ └─ not-found.tsx
	| |
    │ ├─ components/
    │ ├─ helpers/
    │ ├─ hooks/
    │ ├─ sanity/
    │ ├─ stores/
    │ ├─ theme/
    │ └─ types/
	|
    ├─ tests/
	│ ├─ components/
	│ ├─ helpers/
    │ └─ setup.ts
	|
    ├─ next.config.ts
    ├─ package.json
    ├─ README.md
    ├─ sanity.cli.ts
    ├─ sanity.config.ts
    ├─ sanity.types.ts
    ├─ tsconfig.json
    └─ vitest.config.ts

```

## Local Development

- Install dependencies

```bash
npm install
```

- Set up environment variables
- Run development server

```bash
http://localhost:3000
```

## Testing

```bash
npm run test
```
