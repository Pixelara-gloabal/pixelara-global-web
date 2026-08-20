# Pixelara Global

A polished, responsive marketing website for Pixelara Global—a digital studio offering business websites, e-commerce storefronts, and custom web applications.

The interface pairs clear package information with a conversion-focused project inquiry flow. It is built with React, TypeScript, Vite, and Tailwind CSS.

## Highlights

- A custom Pixelara SVG mark used across the navigation, footer, and hero
- Responsive, mobile-first layout with accessible navigation
- Clear service, package, process, industry, and portfolio sections
- Interactive package and case-study exploration
- Project inquiry form and WhatsApp contact option
- Motion-safe visual effects that respect reduced-motion preferences

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons

## Getting started

### Prerequisites

Use Node.js 20 or newer and npm.

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Production checks

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` type-checks the application and creates an optimized production bundle in `dist/`.

## Project structure

```text
src/
├── assets/       # Brand artwork and static UI assets
├── components/   # Shared presentational components
├── data/         # Service and package data
├── pages/        # Route-level views
├── sections/     # Home-page sections
├── App.tsx       # Application composition and hash routing
├── main.tsx      # React entry point
└── index.css     # Global styles and visual tokens
```

## Brand asset

The Pixelara brand mark lives at `src/assets/pixelara-mark.svg`. It is bundled locally with the site, so no external image service is required at runtime.

## Deployment

Build the app with `npm run build` and deploy the generated `dist/` directory to any static hosting provider that supports single-page applications. Configure the host to serve `index.html` for client-side routes if you later add path-based routing.

## License

Private project. All rights reserved.
