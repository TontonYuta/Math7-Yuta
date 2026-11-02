---
name: ui-ux-design-library
description: Comprehensive UI/UX and interaction design standards based on Justin Hartman's UI/UX Design Library (UXPin, IxDF, NN/g, Apple HIG). Enforces visual hierarchy, purposeful white space, card-based layouts, tactile micro-interactions, WCAG 2.2 AAA contrast, touch ergonomics, and crisp typography.
---

# UI/UX & Interaction Design Standards

Standard operating procedures for user interface, interaction design, visual hierarchy, and usability based on Justin Hartman's curated UI/UX Design Library.

## 1. Visual Hierarchy & The Zen of White Space
- **Negative Space as Structure**: White space is not empty space; it dictates grouping and cognitive pacing.
- **Micro vs. Macro White Space**:
  - Macro space separates distinct content zones (cards, header, action bars). Use standard spacing scale: 16px, 24px, 32px, 48px.
  - Micro space separates tightly related elements (label to input, icon to text). Use 4px, 8px, 12px.
- **Visual Anchor Point**: Each view must have exactly one primary focal point (Hero action or active challenge), followed by clear secondary and tertiary elements.

## 2. Card-Based Design Patterns & Consistency
- **Content Chunking**: Encapsulate related data and actions inside distinct, bordered containers with subtle elevation or border contrast.
- **Tactile Affordances**:
  - Interactive cards must show explicit hover/focus states (`hover:border-amber-400`, `active:scale-95`).
  - Disabled or locked states must use lowered opacity (0.5 - 0.6) and `cursor-not-allowed` without disappearing.
- **Predictable Action Placement**:
  - Primary forward action sits on the bottom right or centered at the base.
  - Destructive or back actions sit on the top left or bottom secondary position.

## 3. Color Theory & Accessibility (WCAG 2.2 AAA)
- **60-30-10 Rule**:
  - 60% Dominant canvas / neutral background (e.g., deep stone/slate).
  - 30% Structural elements (cards, headers, navigation).
  - 10% Intentional accent color (amber/gold for math rewards, emerald for success, rose for alerts).
- **Text Contrast**:
  - Body text against dark background must maintain $\ge 7:1$ contrast ratio (e.g., `text-stone-100` or `text-amber-100` on `bg-stone-900`).
  - Secondary labels must remain $\ge 4.5:1$ (`text-stone-300` / `text-stone-400`).

## 4. Interaction Design (IxD) & Micro-Interactions
- **Immediate State Feedback**: Every button press or choice submission must immediately change visual state within 100ms (scale down, glow, or active ring).
- **Explicit 4-State Cycle**:
  - `Idle`: Clean borders, clear call-to-action.
  - `Active / Hover`: Subtle elevation, border highlight.
  - `Feedback / Resolved`: Emerald flash for correct, gentle shake for incorrect.
  - `Disabled / Locked`: Clear lock badge, muted tone.

## 5. Touch Ergonomics & Fitts's Law
- **Touch Target Threshold**: All interactive targets (buttons, tiles, modal triggers) must be at least $44 \times 44\text{px}$ (preferably $48 \times 48\text{px}$).
- **Thumb Zone Optimization**: Primary action buttons on mobile must stay within the bottom two-thirds of the viewport.
- **Spacing Buffer**: Minimum $8\text{px}$ gap between clickable elements to prevent misclicks.

## 6. Typography & Educational Legibility
- **Optical Hierarchy**:
  - Headings: Bold, legible sentence or uppercase tracking, never overlapping.
  - Math & Formulas: Rendered via KaTeX in dedicated high-contrast containers with generous line-height ($1.6$).
  - Numbers & Counters: Use tabular figures (`font-mono`) to prevent layout shifts.
