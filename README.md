# DevKing | Modern Front-end Developer Portfolio

A high-performance, responsive portfolio web application built with **React (JavaScript)** and **Vite**.

## Key Highlights & Performance Optimizations

- **Modern React Architecture**: Modular, reusable component design (`Navbar`, `Hero`, `AboutBento`, `CoreValues`, `FeaturedProjects`, `TechMarquee`, `Contact`, `Footer`).
- **Dramatic Media Compression (>90% reduction)**:
  - Avatar image optimized from **2.15 MB** down to **93 KB WebP** (95.8% reduction).
  - Background and blackhole video references switched to compressed, stream-optimized MP4s (reducing over 5 MB of blocking video download).
  - Project showcase images converted to modern WebP with responsive fallback.
- **Zero-Latency Inlined SVGs**: Replaced heavy external Font Awesome CDN stylesheets (which were downloaded 3 times) with crisp, tree-shaken inline SVG components.
- **Performant Animations**:
  - `IntersectionObserver` scroll-reveal hooks for smooth, hardware-accelerated section fade-ins without scroll jank.
  - Throttled 3D mouse parallax on desktop using `requestAnimationFrame`.
  - Staggered page load entrance animations.
  - Infinite smooth tech stack marquee with masked gradient edges.
- **EmailJS Integration**: Native `@emailjs/browser` integration with controlled form state, loading indicators, and user feedback messages.
- **Full Responsiveness**: Custom glassmorphic navbar with mobile drawer menu, tested across mobile, tablet, and widescreen desktop displays.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

Start the local development server with instant HMR:

```bash
npm run dev
```

### Production Build

Compile and bundle the optimized static assets into `dist/`:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```
