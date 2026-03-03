# Wainaina Thomas — UX Portfolio

A complete, production-ready portfolio website for a junior UX designer based in Nairobi, Kenya.

## Features

- **Semantic HTML5**: Clean, accessible markup structure.
- **CSS Custom Properties**: A flexible, maintainable design system built with CSS variables.
- **Vanilla JavaScript**: Lightweight JS for scroll animations, a mobile menu, smooth scrolling, and a live Nairobi timezone clock.
- **Mobile-First Responsive Design**: Fluid typography and layout that scales perfectly from mobile (375px) to desktop (1440px+).
- **Accessibility**: 
  - `prefers-reduced-motion` support for all animations
  - Full keyboard navigation support (visible focus states)
  - Appropriate ARIA labels for interactive elements
  - WCAG AA compliant color contrast
- **Performance**: Zero external library dependencies (no React, Vue, jQuery, Tailwind, etc.), optimized assets, and lazy-loading for images below the fold.
- **SEO Ready**: Proper meta tags, structured data (JSON-LD), and semantic heading hierarchy.

## Project Structure

```
portfolio/
├── index.html            # Homepage (Hero, Selected Work)
├── about.html            # About page (Origin Story, Methodology)
├── case-study-nnm.html   # Nairobi National Museum case study
├── css/
│   └── style.css         # Complete design system and styling
├── js/
│   └── main.js           # Scroll animations, menu, and utilities
├── assets/               # General images and icons
└── assets/nnm/           # Case study specific images and videos
```

## Running Locally

Since this is a static site with no build tools or dev server dependencies, you can run it in multiple ways:

1. **Simple File Open**: Just double-click `index.html` to open it in your default browser.
2. **VS Code Live Server**: If you use VS Code, install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
3. **Python HTTP Server**: 
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your browser.
4. **Node.js `serve`**:
   ```bash
   npx serve .
   ```

## Design System

The site matches the provided Figma specifications:
- **Typography**: Josefin Sans (Navigation and Headers) & Kumbh Sans (Body and Subheaders)
- **Base Grid**: 8px spacing system
- **Primary Colors**: Off-white background (`#FAFAFA`), Near-black text (`#1A1A1A`), Green accent (`#3e8439`)

## Deployment

This site is ready to be deployed to any static hosting provider such as:
- **Netlify**: Drag and drop the folder, or connect to a Git repository.
- **Vercel**: Run `vercel` in the project directory, or connect to a Git repository.
- **GitHub Pages**: Push to a repository and enable Pages in the settings.

No build step is required for deployment. Just serve the root directory.
