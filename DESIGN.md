# Design System Document: The Editorial Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system is not a template; it is a gallery. It moves beyond the standard portfolio by treating digital space as high-end editorial paper. Inspired by the precision of Apple’s hardware and the functional clarity of Google’s Material 3, The Digital Curator emphasizes intentionality.

We break the generic look by utilizing a **Bento Box grid** not as a rigid cage, but as a modular canvas. We prioritize **asymmetric balance** and **tonal depth** over traditional structural lines. Every element should feel like it was placed by a human hand, with breathing room such as `spacing-12` or `spacing-16` that suggests confidence and premium quality.

This file is the single source of truth for the portfolio design system. It defines the shared foundation of the site first, then captures persona-specific deviations as explicit mode overrides. The most important override today is **Agency owner mode**, also referred to in product language as the **Agency Partner** persona.

---

## 2. System Structure

### Base System
The shared system governs the global shell, typography rhythm, spacing behavior, default surfaces, navigation language, and the overall editorial tone of the site. This is the default design layer for the homepage and all general-purpose components.

### Mode Variants
Mode variants inherit the base system and override it only where the persona needs a distinct visual or interaction language.

- **Default Portfolio Mode:** The editorial, dark-first Digital Curator expression.
- **Agency Owner Mode:** A more technical, consultancy-oriented variation designed to communicate trust through precision. This mode maps to the Agency card and `/for-agencies` route in the product architecture.

### Implementation Boundary
Dark and light theme switching is a global shell behavior. Persona modes are route-level experiences, not additional theme toggle states. Agency owner mode should therefore be implemented as its own page and component stack, while still inheriting shared design primitives from this document.

---

## 3. Shared Principles

### Bento Composition
Use asymmetrical Bento layouts to create a curated, custom feel. A wide 2x1 card beside two smaller 1x1 cards is preferable to a uniform grid when the content can support it.

### The No-Line Rule
Explicitly prohibit the use of 1px solid, high-contrast borders for sectioning or layout containment. Boundaries must be defined through **background color shifts**. A `surface-container-low` section should sit directly against a `surface` background to create a softer, more organic edge.

### Tonal Depth
Depth should come from stacked surfaces rather than heavy shadows. Prioritize color-step layering first, and use ambient shadow only when an element genuinely needs to float above the rest of the interface.

### Glass As Material
Floating elements such as nav bars, overlays, or elevated CTAs should use glassmorphism with a translucent surface fill and a 20px backdrop blur. The goal is to make the element feel anchored to the content behind it rather than pasted on top.

### Whitespace As Structure
Whitespace is part of the composition, not leftover space. If a section feels crowded, increase padding before adding separators or decoration. Prefer moving from spacing `8` to `12` or `16` before introducing new UI elements.

### Editorial Alignment
Body copy remains left-aligned. Dividers between list items should be avoided in favor of vertical rhythm. The design should feel composed, not boxed in.

---

## 4. Colors & Surface Philosophy
The palette should always create **environmental depth**. We treat the screen as a layered physical object, like stacked sheets of fine paper, frosted glass, or dense editorial stock.

### Shared Surface Hierarchy
- **Base Layer:** `surface` for the page canvas.
- **Section Layer:** `surface-container-low` for grouped content blocks.
- **Interactive Layer:** `surface-container-high` or `surface-container-highest` for cards, controls, and emphasized modules.
- **Accessibility Fallback:** `outline_variant` at 15% opacity for the Ghost Border pattern.

### Default Portfolio Mode Palette
- **Base Layer:** `surface` (#0e0e0e)
- **Secondary Layer:** `surface-container-low` (#131313)
- **Top Layer:** `surface-container-highest` (#252626)
- **Primary Accent:** green-forward `primary`
- **Mood:** editorial, cinematic, premium, restrained

### Agency Owner Mode Override
Agency owner mode shifts the atmosphere from moody editorial to architectural consultancy.

- **Primary:** Navy `primary` (#091426)
- **Base Layer:** `surface` (#f7f9fb)
- **Section Layer:** `surface-container-low` (#f2f4f6)
- **Actionable Cards:** `surface-container-lowest` (#ffffff)
- **Floating Elements:** `surface-container-high` (#e6e8ea)
- **Mood:** precise, high-trust, technical, structured

### The Glass & Gradient Rule
To avoid a flat, out-of-the-box feel, floating elements should use glassmorphism.

- **Fill:** `surface_variant` or the closest mode-specific translucent surface at roughly 60% to 70% opacity
- **Effect:** 20px backdrop blur
- **Signature Polish:** Use a linear gradient from `primary` to `primary_container` for high-impact CTAs

In Agency owner mode, the gradient should feel more like a consultancy signature than an expressive accent. Prefer a subtle transition from `primary` (#091426) to `primary_container` (#1e293b).

---

## 5. Typography
We utilize **Inter** to bridge the gap between technical precision and editorial elegance.

### Shared Type Rules
- **Display:** Reserved for high-impact statements. Use `display-lg` around 3.5rem with `-0.02em` letter spacing to feel locked in and authoritative.
- **Headlines:** Use `headline-md` around 1.75rem to introduce Bento sections.
- **Body:** Use a 1rem workhorse body size with a line-height around 1.6 for readability.
- **Labels:** Use small all-caps labels with `+0.05em` letter spacing for metadata, system tags, and category cues.

Hierarchy is enforced not only by size, but by the negative space around type. Titles should breathe. Use generous top margins and do not crowd headings with supporting UI.

### Default Portfolio Mode Voice
The shared type voice should feel editorial, composed, and quietly premium. Large statements can feel atmospheric and expressive as long as the layout remains restrained.

### Agency Owner Mode Override
Agency owner mode tightens the voice toward **Technical Authority**.

- Headings should default to high-contrast `on_surface` values to maintain a professional tone.
- Labels and metadata should feel closer to documentation than magazine captions.
- Use all-caps `label-md` styling for metrics, operational tags, and proof points.
- Keep letter spacing precise and avoid decorative treatments that weaken clarity.

---

## 6. Elevation & Depth
We eschew traditional drop shadows in favor of **tonal layering**.

### Shared Elevation Rules
- **The Layering Principle:** Place lighter or more elevated containers on top of lower-contrast section backgrounds to create a natural lift.
- **Ambient Shadows:** If an element must float, use one ultra-diffused shadow rather than stacked or sharp shadows.
- **Ghost Border Fallback:** If a border is required for accessibility or definition, use `outline_variant` at 15% opacity.
- **Roundedness:** Primary containers use 16px rounding. Smaller nested elements such as chips and buttons use a smaller nested radius.

### Default Portfolio Mode Shadow Guidance
If a modal or floating panel must detach from the page, use an ultra-diffused shadow around `0 20px 40px rgba(0,0,0,0.25)`.

### Agency Owner Mode Override
Agency owner mode should feel lighter and more architectural.

- Use a soft ambient shadow with a 40px blur, an 8px vertical offset, and `primary` at 4% opacity for floating surfaces.
- Prefer crisp tonal separation over visibly dramatic depth.
- Keep the 16px Bento radius, but tighten smaller internal elements toward an 8px nested rhythm where needed.

---

## 7. Components

### Navigation Bar (Global)
- **Style:** Floating Island design, fixed top, centered, with a 16px corner radius.
- **Background:** Glassmorphic `surface_container` with 70% opacity and backdrop blur.
- **Interaction:** Hover shifts nav items from `on_surface_variant` to `primary`.

Agency owner mode can keep the same structure, but its surrounding page composition should feel more blueprint-like and less cinematic.

### Bento Cards
- **Structure:** No dividers. Use `spacing-6` padding and vertical whitespace to separate content.
- **Base Styling:** Use the current mode’s section or card surface with tonal contrast rather than hard borders.
- **Transition:** Hover should feel subtle and deliberate, typically a background shift toward the next elevated surface tier over about 300ms.

#### Agency Owner Mode Override
- Prefer `surface-container-lowest` card backgrounds for stronger content separation.
- A very soft Ghost Border or 10% outline treatment is acceptable.
- Internal card layout should feel operational and grid-aligned rather than expressive.

### Buttons
- **Primary:** Background `primary`, text `on_primary`, no heavy border.
- **Secondary:** Surface-driven button with Ghost Border treatment.
- **Pressed State:** `0.98` scale transform to create a subtle physical press.

#### Agency Owner Mode Override
- Primary buttons may shift toward `primary_container` on hover.
- A subtle 2px vertical lift is acceptable in Agency owner mode when it reinforces precision rather than playfulness.
- Keep corner radii tighter and more technical in feel.

### Inputs & Fields
- **Style:** Minimalist underline or ghost-box approach.
- **Focus State:** Border opacity increases using the `primary` token. Avoid heavy glows.

#### Agency Owner Mode Override
- Use `surface_container_low` as the field background.
- Labels should read like operational metadata.
- Focus can move to a full-opacity `primary` outline if the result stays clean and sharp.

### Mode Switcher (Footer)
- **Execution:** A toggle located in the shared footer.
- **Track:** `surface-container-high`
- **Thumb:** `primary`
- **Transition:** 500ms cross-fade between dark and light modes

This is a global pattern, not an Agency owner mode control.

### Signature Component: Metric Chip
Metric Chips are not part of the base portfolio language. They are a signature pattern for Agency owner mode.

- **Background:** `secondary_container` (#d0e1fb)
- **Text:** `on_secondary_container` (#54647a)
- **Radius:** `full` (9999px)
- **Purpose:** delivery stats, operational proof points, process markers, technical indicators

Use these sparingly and only where metrics strengthen trust.

---

## 8. Mode Variant: Agency Owner Mode
**Creative North Star: "The Technical Atelier"**

Agency owner mode is the structured consultancy variation of the design system. It is meant for the Agency Partner persona and should communicate **Trust through Precision**. The visual language should feel like an architectural blueprint interpreted through premium digital product design.

### Personality
- technical, calm, exacting
- premium without theatrics
- consultant-grade rather than startup-grade
- editorial in spacing, but operational in hierarchy

### Layout Direction
- Use intentional asymmetry, but keep the logic obvious.
- Let one box span two columns while nearby modules stay constrained.
- Treat whitespace and alignment as proof of competence.

### Content Priorities
- proof of delivery
- process clarity
- systems thinking
- metrics and outcomes
- white-label collaboration trust

### Visual Priorities
- light consultancy surfaces
- navy-led accents
- restrained glass overlays
- stronger card definition
- documentation-like labels and metadata

### What Should Change From The Base System
- The mood shifts from dark editorial to light architectural.
- CTA styling becomes more restrained and trust-oriented.
- Cards can be more structured and evidence-led.
- Metric Chips become a signature pattern.
- Hover and focus behavior should feel sharper and more technical.

### What Should Not Change
- The No-Line Rule remains in force.
- Bento asymmetry remains a core compositional device.
- Tonal layering remains the primary depth system.
- Glassmorphism remains available for floating elements.
- Inter remains the typeface.

---

## 9. Do's and Don'ts

### Do
- Use asymmetrical Bento layouts to create visual interest.
- Prioritize whitespace before adding decoration.
- Use `tertiary` sparingly for success or special highlight moments.
- Align everything to a consistent 16px and 8px spacing rhythm.
- Keep body copy left-aligned for an editorial, Swiss-grid feel.

### Agency Owner Mode Do
- Use the navy palette to establish professional trust.
- Treat metrics as supporting evidence, not dashboard clutter.
- Let labels and chips feel technical and specific.
- Use structured negative space to imply rigor.

### Don't
- Do not use 1px solid borders at 100% opacity.
- Do not default to generic drop shadows.
- Do not center-align long-form body copy.
- Do not add divider lines between list items when spacing can do the job.

### Agency Owner Mode Don't
- Do not use pure black.
- Do not use cheap default shadows like `0 2px 4px rgba(0,0,0,0.5)`.
- Do not overload the page with metric chips or pseudo-dashboard UI.
- Do not blur the distinction between global theme switching and persona-specific design.

---

## 10. Director's Note
The strength of this system lies in restraint. By removing the crutch of borders and heavy shadows, we force the design to rely on alignment, thoughtful typography, sophisticated color shifts, and a confident use of space.

Build the base system with the eye of an editor. Build Agency owner mode with the mind of an architect.