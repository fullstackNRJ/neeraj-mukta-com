# Design System Document: The Editorial Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**
This design system is not a template; it is a gallery. It moves beyond the "standard" portfolio by treating digital space as high-end editorial paper. Inspired by the precision of Apple’s hardware and the functional clarity of Google’s Material 3, "The Digital Curator" emphasizes intentionality. 

We break the "generic" look by utilizing a **Bento Box grid**—not as a rigid cage, but as a modular canvas. We prioritize **asymmetric balance** and **tonal depth** over traditional structural lines. Every element should feel like it was placed by a human hand, with breathing room (`spacing-12` or `spacing-16`) that suggests confidence and premium quality.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated range of core neutrals designed to create "Environmental Depth."

### The "No-Line" Rule
Explicitly prohibit the use of `px` (1px solid) borders for sectioning or layout containment. Boundaries must be defined through **Background Color Shifts**. For example, a `surface-container-low` section should sit directly against a `surface` background to create a soft, organic edge.

### Surface Hierarchy & Nesting
Treat the UI as physical layers—stacked sheets of frosted glass or fine linen.
- **Base Layer:** `surface` (#0e0e0e).
- **Secondary Layer:** `surface-container-low` (#131313) for subtle content grouping.
- **Top Layer:** `surface-container-highest` (#252626) for interactive cards or highlighted content.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" feel, floating elements (like the Navigation Bar) should use **Glassmorphism**.
- **Fill:** `surface_variant` at 60% opacity.
- **Effect:** 20px Backdrop Blur.
- **Signature Polish:** Use a linear gradient from `primary` to `primary_container` for high-impact CTAs to inject "visual soul" into the monochrome base.

---

## 3. Typography
We utilize **Inter** to bridge the gap between technical precision and editorial elegance.

*   **Display (Large/Medium):** Reserved for high-impact statements. Use `display-lg` (3.5rem) with `-0.02em` letter spacing to feel "locked in" and authoritative.
*   **Headlines:** Use `headline-md` (1.75rem) to introduce Bento sections.
*   **Body:** `body-lg` (1rem) is the workhorse. Maintain a line-height of 1.6 for maximum readability.
*   **Labels:** `label-sm` (0.6875rem) should be used in ALL CAPS with `+0.05em` letter spacing for metadata or category tags to create a "technical" contrast against the fluid body text.

---

## 4. Elevation & Depth
We eschew traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift.
*   **Ambient Shadows:** If an element must "float" (e.g., a modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(0,0,0, 0.25)`.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders; they disrupt the "paper-like" flow.
*   **Roundedness:** All primary containers must adhere to `lg` (1rem / 16px) radius to maintain the Bento Box aesthetic. Smaller nested elements (chips/buttons) use `md` (0.75rem).

---

## 5. Components

### Navigation Bar (Global)
*   **Style:** A "Floating Island" design. Fixed top, centered, with `lg` corner radius.
*   **Background:** Glassmorphic `surface_container` with 70% opacity and `backdrop-blur`.
*   **Interaction:** On hover, nav items shift from `on_surface_variant` to `primary`.

### Bento Cards
*   **Structure:** No dividers. Use `spacing-6` padding.
*   **Background:** `surface_container_low`.
*   **Transition:** On hover, the background shifts to `surface_container_high` with a subtle `300ms` ease-out.

### Buttons
*   **Primary:** Background `primary`, text `on_primary`. High contrast, no border.
*   **Secondary/Mode Switcher:** `surface_container_highest` background with a `Ghost Border` (15% opacity `outline`).
*   **States:** `0.98` scale transform on click to simulate physical "press."

### Inputs & Fields
*   **Style:** Minimalist underline or "ghost" box. 
*   **Focus State:** The border opacity increases from 15% to 60% using the `primary` token. No heavy outer glows.

### Mode Switcher (Footer)
*   **Execution:** A toggle located in the shared footer. Use a `surface-container-high` track and a `primary` thumb. The transition between Dark Mode (#0A0A0A) and Light Mode (#FFFFFF) must be a `500ms` cross-fade to emphasize the "curated" feel.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical Bento layouts (e.g., a 2x1 cell next to two 1x1 cells) to create visual interest.
*   **Do** use `tertiary` (#eff8ff) sparingly for "Success" or "Special Highlight" moments.
*   **Do** prioritize whitespace. If a section feels crowded, double the spacing token (from `8` to `16`).

### Don't:
*   **Don't** use 1px solid borders at 100% opacity. It makes the UI look like a wireframe.
*   **Don't** use standard "drop shadows." Use tonal shifts (color steps) first.
*   **Don't** use center-aligned text for body copy. Keep it left-aligned for an editorial, "Swiss-style" grid feel.
*   **Don't** add dividers between list items. Use `spacing-3` of vertical gap instead.