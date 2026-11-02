# UI/UX & Interaction Design Standards

Guidelines adopted from Justin Hartman's UI/UX Design Library for all interfaces in this repository:

1. **Touch Ergonomics & Sizing**:
   - Every clickable button, tile, or input trigger must have a minimum target of 44x44px (recommended 48x48px).
   - Maintain at least 8px spacing between interactive elements to prevent misclicks.
2. **Visual Hierarchy & White Space**:
   - Group related elements into card containers with subtle borders.
   - Use consistent spacing scale: 4px, 8px, 16px, 24px, 32px.
   - White space is structural; avoid cluttering cards with redundant decorations.
3. **Contrast & Legibility (WCAG 2.2 AAA)**:
   - High contrast between math formulas and background.
   - Tabular numerals (`font-mono`) for counters, timers, and coin displays.
4. **Micro-Interactions & State Transitions**:
   - Provide tactile feedback on press (`active:scale-95`).
   - Define clear 4-state lifecycles: Idle, Hover/Active, Feedback, Disabled.
