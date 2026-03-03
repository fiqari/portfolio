---
name: CSS Layout Best Practices
description: Core architectural rules for responsive layouts, specifically prohibiting the 100vw hack due to scrollbar pixel overlaps on Windows environments.
---

# CSS Layout Best Practices

When writing CSS or restructuring layouts, strictly adhere to the following architectural guidelines to ensure cross-platform consistency.

## The Viewport Scrollbar Rule

**NEVER use `100vw` to break elements out of a container.**

**Why:** On Windows/Linux environments, the vertical browser scrollbar consumes physical pixel space (usually ~15px). `100vw` calculates physical screen width ignoring the scrollbar, meaning `100vw` elements will literally bleed off the right edge of the screen, breaking padding math and triggering unexpected horizontal scroll.

### ❌ Incorrect Pattern (The 100vw Hack)
```css
.breakout-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

### ✅ Correct Pattern (CSS Variable Negation)
To visually stretch a background edge-to-edge on mobile while keeping it inside a padded container, use `calc()` to invert the container's lateral padding.

```css
/* Assuming the parent container applies: padding-inline: var(--side-padding); */
.breakout-section {
  /* Invert the parent's padding to touch the screen edge */
  margin-inline: calc(var(--side-padding) * -1);
  /* Re-apply the padding internally so the text aligns with the rest of the flow */
  padding-inline: var(--side-padding);
}
```

## Responsive Grid Guidelines
- Utilize `grid-template-columns` with `fr` (fractional units).
- Refrain from doubling up padding on container children (`.col-*`). The wrapper `.container` should handle all exterior constraints.
