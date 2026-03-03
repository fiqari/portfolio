---
name: Static Analysis Preference
description: Guidelines to prefer static code analysis over browser screenshotting for verifying UI, UX, and accessibility issues.
---

# Static Analysis Preference

When validating code changes, auditing WCAG accessibility (such as contrast ratios or ARIA tags), or checking UI/UX responsiveness, **always prefer static code analysis** over using the `browser_subagent` to capture screenshots. Using the browser subagent takes significantly more time and should be avoided for routine checks.

## Core Directives

1. **Review Code Directly:** Use `grep_search`, `view_file`, and `codebase_search` to inspect HTML, CSS, and JSX/TSX files.
2. **Mathematical Contrast Verification:** Instead of taking a screenshot to see if colors are accessible, read the exact hex codes or RGB values from the CSS/Tailwind files and compute/verify the contrast ratio mathematically.
3. **Validate Responsiveness in CSS:** Check responsive behavior by reading media queries, grid setups (`grid-template-columns`), flexbox layouts, and clamp functions within the stylesheets.
4. **Audit Accessibility Statically:** Verify semantic HTML tags (`<main>`, `<nav>`), `alt` attributes on images, and `aria-*` tags by directly reading the component files.
5. **Reserve the Browser:** Only use the `browser_subagent` if explicitly requested by the user, or if an issue is fundamentally impossible to debug statically (like complex dynamic viewport sizing bugs).
