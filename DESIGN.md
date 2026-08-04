---
name: Strategy Marketing Firm
description: A navy-drenched marketing site that argues by demonstration — the knight takes the board while you scroll.
colors:
  navy: "#2b2a47"
  navy-900: "#1e1d33"
  navy-600: "#3a3860"
  navy-400: "#565383"
  off-white: "#f1f0f5"
  white: "#ffffff"
  facet-light: "#c8c7d6"
  facet-mid: "#9695ae"
  on-navy: "#f1f0f5"
  on-navy-2: "#b6b4cf"
  on-light: "#22213a"
  on-light-2: "#55537a"
  rule-light: "rgba(34, 33, 58, 0.16)"
  piece-shadow: "rgba(30, 29, 51, 0.22)"
  piece-shadow-soft: "rgba(30, 29, 51, 0.2)"
  checker: "rgba(241, 240, 245, 0.05)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 10vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 8.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  subtitle:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  lede:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 112"
  bodyLarge:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    lineHeight: 1.55
  bodySmall:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    lineHeight: 1.6
  microLarge:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
  micro:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.2em"
rounded:
  none: "0"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "3rem"
  section-y: "clamp(5rem, 12vw, 9rem)"
  shell: "min(1180px, 100% - 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.75rem"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
  button-primary-on-light:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.off-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.75rem"
  button-primary-on-light-hover:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
  nav-link:
    textColor: "{colors.on-navy-2}"
    typography: "{typography.label}"
    padding: "0.35rem 0"
  nav-link-active:
    textColor: "{colors.white}"
  site-header:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.none}"
    height: "4.5rem"
  section-ground:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    padding: "clamp(5rem, 12vw, 9rem) 0"
  section-relief:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.on-light}"
    padding: "clamp(5rem, 12vw, 9rem) 0"
  offer-row:
    textColor: "{colors.on-navy-2}"
    rounded: "{rounded.none}"
    padding: "clamp(2rem, 4vw, 3.25rem) 0"
  member-portrait:
    backgroundColor: "{colors.navy-600}"
    textColor: "{colors.facet-light}"
    rounded: "{rounded.none}"
    size: "aspect-ratio 4 / 5"
---

# Design System: Strategy Marketing Firm

## Overview

**Creative North Star: "The Lit Knight on a Dark Board"**

One piece, one field, and nothing else in the room. The site is drenched in a single indigo-navy ground (`navy`) from the header to the footer bar, interrupted by off-white relief blocks laid on it as sheets. There is no accent hue anywhere in the build — the only colors that are not navy, off-white, or text are the three flat planes of the knight mark itself (`white`, `facet-light`, `facet-mid`), which is what makes the mark feel lit rather than decorated. There is no applied ornament at all. The one structural device is the sheet: every block is inset from the window on a darker indigo ground (`navy-900`) with a soft corner, so the page reads as laid on a surface rather than filling the frame. That inset is also what separates the sections — four consecutive off-white captures stop being one field and become four cards with the ground showing between them.

The density is editorial, not agency. Type carries the argument: Archivo held at weight 800 and width 112% for every heading, set tight (-0.03em to -0.04em) and balanced, against Schibsted Grotesk at a comfortable 1.6 for reading. Services are a set of ruled editorial rows, not a card grid; the process is a numbered ordinal list because the order genuinely is the information. The build refuses the agency template it was briefed against: no eyebrow kickers above headings, no stat band, no four identical service cards, and no rounded, shadowed containers inside a block — the radius belongs to the sheet and stops there.

Motion is the argument, not the garnish. The hero holds the knight high and centered over a hidden name, and the scroll lifts the piece away to reveal it. Below that, four capture sections each hold one screen while the knight crosses it and takes a single piece, with that discipline's copy standing over the board; a fifth closes on a lone king that is never taken. Every one of those behaviors has a documented static and reduced-motion fallback, because the content has to survive without any of it.

**Key Characteristics:**
- Drenched navy ground; off-white blocks are relief, never a second theme
- No third hue — the greys are the mark's own facet planes
- Zero corner radius, zero box-shadow; depth is tonal
- Archivo expanded-and-heavy for structure, Schibsted Grotesk for reading
- Inset blocks on a darker ground, with the ground doing the dividing
- Scroll-scrubbed sequence with a full static fallback

## Colors

A single drenched indigo world with off-white relief and no accent hue; the only chromatic variety is the knight mark's own facet ramp.

### Primary
- **Drenched Indigo** (`navy`): The page ground. Body background, header (at 88% with a 14px backdrop blur), mobile nav panel, and the color that text and buttons invert to on light surfaces. It is the default state of every surface, not a section treatment.
- **Board Shadow** (`navy-900`): The one step darker, and now the ground itself — the surface every block is laid on, visible as the margin around and between them. Nothing else uses it.
- **Rule Indigo** (`navy-600`): Every hairline on a dark surface — header underline, section dividers, list rules, footer bar — plus the resting fill of the pieces waiting to be taken and the portrait tile background.
- **Edge Indigo** (`navy-400`): The lightest ground step. The outline of the nav toggle and ghost strokes.

### Neutral
- **Relief Off-White** (`off-white`): The relief blocks — `.section--light` and the contact band — and the text color of buttons that invert on those blocks.
- **Struck White** (`white`): Reserved for emphasis, never for large fields. Button fills, the nav underline, focus outlines, selection background, footer group labels, and the knight's lit planes.
- **Facet Light** (`facet-light`): The mark's mid plane, borrowed for type that belongs to the mark's world — the second line of the hero title, member initials, the scroll cue's gradient tick, and the chess notation labels.
- **Facet Mid** (`facet-mid`): The mark's shadow plane. Small tracked labels only: service tags, step numerals, and member roles.
- **On-Navy Primary** (`on-navy`): Default body text on the ground.
- **On-Navy Secondary** (`on-navy-2`): Supporting copy on the ground — ledes, service descriptions, bios, resting nav links, footer text.
- **On-Light Primary** (`on-light`): Heading and body text on relief blocks.
- **On-Light Secondary** (`on-light-2`): Supporting copy on relief blocks; the light-surface counterpart to every `on-navy-2` and `facet-mid` assignment.

### Named Rules

**The Drenched Ground Rule.** Navy is the page, not a section. New surfaces inherit it; a light block must earn its place as relief, and two light blocks never sit adjacent without navy between them.

**The No Third Hue Rule.** There is no accent color and there will not be one. Emphasis comes from `white` against navy, or from inverting the surface. The greys in the palette are the knight's facet planes — use them on the mark, on labels adjacent to the mark, and nowhere as a brand accent.

**The Paired Surface Rule.** Every color assignment on the dark ground needs its light-surface counterpart, scoped with `:is(.section--light, .contact)` — `.contact` is a relief block that is deliberately not a `.section--light`, so a selector that only targets `.section--light` will leave the contact band unreadable.

The rule covers the focus ring, which is the one place it was missed: `:focus-visible` drew a `white` outline everywhere, and on an off-white block that measures 1.13:1 — no ring at all, on every button and link inside a relief block or a capture. The pairing selector for focus has to include `.capture` as well, since those are relief blocks too: `:is(.section--light, .contact, .capture) :focus-visible { outline-color: var(--navy) }`. The skip link takes the dark ring on its own, because it is a white chip wherever it lands.

**The Facet Floor Rule.** `facet-mid` on navy is contrast-adequate for tracked labels and numerals at 0.75–0.8125rem, and that is its entire remit. Paragraph copy on navy uses `on-navy-2`; do not promote `facet-mid` to running text.

## Typography

**Display Font:** Archivo, with Helvetica Neue / Arial fallback
**Body Font:** Schibsted Grotesk, with Helvetica Neue / Arial fallback

Both are **self-hosted** from `assets/fonts/`, not fetched from `fonts.googleapis.com`. That stylesheet was a render-blocking request to a third origin standing between the page and its first heading; local woff2 behind a `preload` removes the hop entirely.

Both files are variable fonts with their axes pinned to what the design actually uses, which is most of the saving. Archivo shipped the full `wdth 62–125` range for a build that sets 112% and nothing else — pinning that axis and holding `wght` to 700–800 took the latin file from **88KB to 24KB**. Schibsted is held to `wght 400–700`. The `@font-face` descriptors match the pinned files; widening a range in the descriptor does not widen the font, it just asks for an instance that is no longer in the file. Latin and latin-ext are separate faces under their own `unicode-range`, so the extended set only downloads when a page needs it.

**Character:** Archivo is used in one register only — weight 800 at width 112%, tracked tight and negative. It reads as a piece cut from a solid block, wide and unhurried. Schibsted Grotesk carries every sentence at a plain 400/1.6, so that the moment type gets heavy and wide, you know it is structure and not prose.

### Hierarchy
- **Display**: The hero wordmark and the four capture headlines. One per full-viewport stage; it is scaled to be read across a room.
- **Headline**: The page title on secondary pages (`.h-xl`), used once per page inside `.page-head`.
- **Title**: Every section heading (`.h-lg`), constrained by `.measure` (68ch) or a per-instance `max-width` in the 14–18ch range so it breaks into two or three deliberate lines.
- **Subtitle**: The service row heading — the only Archivo size that sits inside a body-copy rhythm.
- **Lede**: The opening paragraph under a heading, capped at 60ch and set in the secondary text color for its surface.
- **Body**: Running copy at 1.6 line-height; `text-wrap: pretty` is on globally, `text-wrap: balance` on all headings.
- **Label**: Archivo 700 / 112% width / 0.1em tracking, uppercase — buttons and nav links. The tracked, uppercase, actionable register.
- **Micro**: Schibsted Grotesk 500 at 0.2–0.24em tracking, uppercase — the brand subline, the scroll cue, member roles, and footer group labels. Whispered, never a heading.

### Named Rules

**The One Register Rule.** Archivo appears at weight 800 (700 for labels and numerals) and `font-stretch: 112%`, never at another weight or width. A lighter or narrower Archivo reads as a different typeface on this page. Every Archivo rule states the width explicitly — the step numeral did not, and was resolving to normal width and relying on the browser's nearest-match instead. With the width axis now pinned in the file there is only one instance to match, but stating it keeps the intent legible and survives a future re-cut.

**The Tracked Micro-Label Rule.** Uppercase, widely tracked micro-type is native to this world and is used freely for nav links, buttons, roles, footer group labels, and the scroll cue. What is banned is one specific placement: a tracked kicker sitting immediately above a heading as a section eyebrow. Kickers were removed from every section in the build; the heading opens the section on its own.

**The Sequence Numeral Rule.** Numerals appear as content only where the order is the information — the `.steps` list. The algebraic notation that once labelled each capture was cut: it crowded the board without adding an argument. Do not number sections, services, or team members; there the count is not an argument.

## Layout

Everything sits in one container: `--shell` at `min(1180px, 100% - 2.5rem)`, centered, applied identically by the header, sections, contact band, and both footer rows so the left edge never shifts down the page. Vertical rhythm is a single token, `--section-y` at `clamp(5rem, 12vw, 9rem)`, applied as `padding-block` to every section; page heads use an asymmetric variant (`clamp(4rem, 10vw, 7rem)` top, `clamp(2.5rem, 6vw, 4rem)` bottom) so a title sits closer to the content it introduces than to the header.

Content grids are two-column and asymmetric, not modular. The positioning split is `1fr 1fr` above 900px; service rows run `7fr 9fr` above 860px so the description column is wider than the heading; process steps run `3.5rem / 14rem / 1fr` above 720px with baseline alignment, putting the numeral in its own narrow gutter; the contact band is `1fr auto` above 880px so the button hangs at the end-aligned right. Everything below its breakpoint collapses to a single stacked column with the same row gap. The only auto-fitting grids are the team roster and the footer, both `repeat(auto-fit, minmax(min(100%, N), 1fr))` — 240px for members, 200px for footer groups — so they reflow without a breakpoint.

Spacing literals cluster tightly and now exist as tokens: `--space-xs` 0.5rem for inline gaps, `--space-sm` 0.75rem for icon-to-word, `--space-md` 1.5rem for paragraph separation, `--space-lg` 2.5rem for grid gutters, `--space-xl` 3rem for the gap under a section heading. Larger gaps are `clamp()`ed against viewport width rather than stepped. Two steps sit off that scale on purpose and are used more than once — 1.75rem under a display heading (`.page-head .lede`, `.capture__tags`) and 2.25rem above a CTA (`.cta-row`, `.capture__cta`).

None of this lives in `style` attributes. Thirteen spacing and measure decisions were carried on the markup, which put them outside the system where nothing could keep them consistent; they are expressed once each in the composition section at the foot of the stylesheet. The remaining inline styles are the nine that carry genuine per-instance data — `--tx`, `--tr`, `--x`, `--r`, the piece positions and proportions — which belong on the element because they differ for every one.

The header sticks at `top: var(--gap)` with a `4.5rem` minimum height, and that number is load-bearing: `--stick` resolves to `calc(4.5rem + var(--gap) * 2)`, and the hero stage and every capture frame stick at exactly that offset. Scroll stages set their own height in viewport units to buy scrubbing distance — the hero at 265svh, and each capture at 200svh over an 80svh sticky frame.

Those are **`svh`, not `vh`**, each with a `vh` line above it as the fallback. `vh` resolves against the *large* viewport on mobile, so every sticky frame was taller than the visible area until the URL bar collapsed — and then the document re-laid itself mid-scroll with a scrubbed timeline attached to it. `svh` is the stable unit: it does not move when the browser chrome does. `dvh` would track the chrome and reintroduce the same reflow. The 120vh overshoot is the scrubbing room; it was 70vh first, which read as the knight snapping across on a fast scroll, and the extra distance is what buys the move its weight. Under `prefers-reduced-motion` that overshoot collapses to `auto`, because the script that would use it has already bailed out. Below 760px the nav becomes a full-width absolute panel under the header.

## Elevation & Depth

There are no shadows in this system — not one `box-shadow` in the stylesheet. Depth is entirely tonal: four indigo steps (`navy-900` behind, `navy` at ground level, `navy-600` for hairlines and resting objects, `navy-400` for the nearest edges) plus the off-white relief blocks, which read as lifted by luminance alone. The two exceptions to flatness are both real optical devices rather than simulated lift: the sticky header composites over the page with `color-mix` at 88% opacity plus a 14px backdrop blur, and the hero stage declares `perspective: 1200px` so the knight's rotation on scroll is genuine 3D rather than a scale trick. The capture scenes sit behind their copy — the dark target at 0.4, the white pieces at 0.3 — holding the board back so type stays first. The one `drop-shadow` in the build is on those white pieces, and it is not elevation: on an off-white ground the mark has almost no contrast, and the shadow is what holds its silhouette.

### Named Rules

**The No Shadow Rule.** Surfaces do not cast. If an element needs to separate from its background, move it a tonal step (`navy-900` / `navy` / `navy-600`) or put a hairline rule on it. Adding a `box-shadow` breaks the flat-plane logic the knight mark is built on.

**The Real Z Rule.** Perspective is permitted where something actually turns in space — the hero knight rotates on X and Y inside a declared `perspective`. It is not a license for tilted cards, faux-3D panels, or lifted hover states.

## Shapes

Corners are square everywhere except one place. Buttons, the nav toggle, portrait tiles, the skip link and every element inside a block are hard-cornered rectangles. The exception is the block itself: the header, the footer, each top-level section and the mobile nav panel carry a `--card` radius, because they are sheets laid on a ground and a sheet has a soft corner. The rule is therefore about level, not taste — **the sheet rounds, its contents never do**. The nav panel qualifies because it is positioned outside the header's box and floats on the ground in its own right, not because it is a menu.

A radius is not a reason to clip. Only the footer carries `overflow: hidden`; the header does not, because nothing inside it paints into its corners and clipping it destroyed the nav panel hanging below. Clipping is also fatal anywhere a descendant sticks — an ancestor with `overflow: hidden` silently kills `position: sticky`, which is every capture frame and the hero stage.

Borders are hairlines, 1px, in `navy-600` on dark and `rgba(34, 33, 58, 0.16)` on relief — used as horizontal rules between list rows and section boundaries, and as a 1px `white` or `navy` stroke around buttons so the hover state can drop the fill without the shape moving. Portrait tiles are `4 / 5` and carry a 44px conic checker at 5% white as their only texture. The 12px checker band that used to run between sections is gone: once the blocks were inset it was doing a job the ground already did, and it read as a stray strip floating in the gap.

Every piece is the client's own artwork, not a redraw. The white knight (`knight-w.png`) and rook (`rook-w.png`) and the dark set (`pc-pawn`, `pc-rook`, `pc-bishop`, `pc-queen`, `pc-king`) are cut from cutouts the client exported, so both sides are the same hand.

Two things about that pipeline are worth keeping. The pieces are **never colour-keyed**: an earlier pass flood-filled the sheet background away, the deepest shadows in the dark set matched that background closely enough to leak, and the result was pieces with holes punched through them — invisible on navy, glaring the moment they sat on off-white. And the supplied cutouts each arrive scaled to fill their own canvas, so their relative heights mean nothing; the set is re-proportioned on import (pawn 1, rook 1.13, knight 1.17, bishop 1.41, queen 1.59, king 1.77) and those ratios are what `--r` carries in the markup.

Two properties of that art drive the rules around it. The pieces' internal separation lines are navy — they are the ground showing through, not drawn strokes — so **the marks are only correct on navy**; on a light surface the collar and base lines open into holes. The favicon therefore ships its own navy square rather than relying on the browser chrome. And each piece keeps its true height against a shared slot width, so a pawn stands short beside a king the way it would on a board; never set a piece's height directly.

Assets are indexed PNGs quantised to 64 colours (212KB for all six, down from 837KB as RGBA). Re-cutting from the sheets is a flood fill seeded from the image border — a global colour key would punch through those navy interior lines.

## Components

### Buttons
- **Shape:** Hard rectangle (0 radius), 1px stroke, `0.95rem 1.75rem` padding, `inline-flex` so it never stretches.
- **Primary (on navy):** Solid `white` fill, navy text, uppercase Archivo label.
- **Primary (on relief):** Automatically inverts via `:is(.section--light, .contact)` — solid navy fill, off-white text. There is no separate class; the surface decides.
- **Hover:** The fill drops to transparent and the text takes the stroke color, over 0.4s on the shared easing. The border never changes width, so nothing shifts.
- **Focus:** 2px `white` outline at 3px offset, from the global `:focus-visible` rule.

### Cards / Containers
Nothing *inside* a block is a card. Groupings are expressed as ruled rows (`.offer__row`, `.steps li`) — a top rule on the container, a bottom rule per row, generous `clamp(1.5rem, 3vw, 3.25rem)` vertical padding, and no background, border box, or radius. The only filled container is the member portrait tile: `navy-600` fill, `4 / 5` ratio, conic checker texture, and oversized `facet-light` initials centered in it.

### Navigation
Uppercase Archivo labels at `on-navy-2`, resolving to `white` on hover and for `[aria-current="page"]`. The active and hover indicator is a 2px `white` underline drawn by a pseudo-element that scales in from the left over 0.4s — the rule is always present at `scaleX(0)`, so the state change is a transform, never a layout change.

Below 760px the nav becomes a `navy` panel absolutely positioned under the header, animated with `transform` and `opacity` and toggled by `visibility` with a delayed transition; the burger's single bar crosses into an X via its two pseudo-elements.

**The panel is its own sheet, and that is not cosmetic.** It hangs below the header's box, and the header carries a radius — so while the header also carried `overflow: hidden`, the panel was clipped out of existence: the burger crossed into its X and nothing appeared. The mobile navigation did not work at all. The header is no longer clipped (nothing inside it paints into the corners), and the panel sits at `calc(100% + var(--gap))` with its own `--card` radius, so it reads as a second sheet laid under the first rather than a flap hanging off it.

Dismissal is four paths, not one. Escape is bound to the **document**, not the panel — activating the toggle leaves focus on the toggle, which is outside the panel, so the one moment a keyboard user wants to dismiss the menu was the one moment nothing was listening. A click on a link closes it, which matters most for the in-page Contact link that used to leave the panel sitting over the section it had just scrolled to. A click outside closes it. And crossing back above 760px closes it, so the panel cannot be stranded open by a rotation.

### The Capture (signature)
Four sections, one piece taken in each, in ascending value: pawn, bishop, rook, queen. Each is a 200vh section over an 80vh sticky frame; the 120vh overshoot is the scrubbing room, and the frame holds the section full-screen for the whole run. It is a sticky frame rather than a ScrollTrigger pin because the knight has to cross the entire width for the move to read, and unheld most of that run played out while the section was still below the fold.

Every timeline is written in fractions of the section's scroll and padded to a total duration of exactly 1, because scrub maps the whole timeline onto the range whatever its length — without the pad the positions quietly stop meaning what they say. The knight charges from an alternating wing, leaning further forward as it closes; at 0.5 it snaps through and the target pivots off its base to 88°. The knight then rights itself on the square it just took. There is no ground rule under the pieces — the hairline that was there read as a stray divider rather than a board edge, and it took the impact's shock beat with it when it went. The pieces share a baseline by alignment alone.

Three constraints on placement. A toppling piece needs roughly its own height of clear floor on the side it falls toward, so the taller pieces stand further in from that edge — the queen cannot sit where the pawn sits. A piece knocked right pivots on its right base corner, not its left, so `data-from` flips `transform-origin`. And the whole board is present from the first frame: fading the knight or the copy in staggers the eye onto the target and makes the scenery read as the subject.

The dark target runs at a higher opacity than the white knight, which looks backwards and is not. Fading a dark piece on a light ground turns it flat grey; matched to the knight's opacity the two collapse into the same tone and the us-and-them reading disappears entirely.

### Checkmate (signature)
The contact block is a mating position: white knight and rook closing on a lone dark king, the only piece on the site never taken. Knight and rook against a bare king is the hardest elementary mate in chess — a forced win most players never learn to execute — which is the argument the section is making. Nothing topples; the king shifts once each way, finds no square, and stays standing.

### Reveals (signature)
Two variants only: `.r-rise` for headings (opacity plus a 30px rise, `power3.out`, 0.9s) and `.r-fade` for supporting copy (opacity only, `power2.out`, 1.1s). The observer is an `IntersectionObserver`, not a ScrollTrigger, and it also reveals anything whose `boundingClientRect.bottom < 0` — a scroll restore, a deep link, or a fast flick must not leave a section permanently hidden behind the reader.

**The hidden state is a promise that a script will run, so it expires on its own.** `js-reveal` is set by an inline `<head>` script and holds every heading and paragraph at `opacity: 0` until the observer releases them. Two failure paths were covered — no JS at all, and GSAP missing — and one was not: if `main.js` itself 404s, is blocked, or throws, nothing else clears the class and the entire page stays invisible permanently. Measured with `main.js` blocked, that was 16 of 16 elements at zero.

The same inline script now arms a 2.5s timer that removes the class, and `main.js` cancels it at each point where it takes the reveals over. Whatever happens to the script, the copy appears; when the script does load, the timer is gone before it could fire and the below-fold reveals still play normally. **Cancel the timer only where you have actually assumed responsibility for the hidden state** — clearing it early re-opens exactly the hole it closes.

## Do's and Don'ts

### Do:
- **Do** treat navy as the page ground and off-white blocks as relief cut out of it; a new section defaults to navy.
- **Do** pair every dark-surface color rule with a `:is(.section--light, .contact)` override — `.contact` is relief but is not `.section--light`.
- **Do** set headings in Archivo 800 at `font-stretch: 112%` with tight negative tracking, and leave `text-wrap: balance` on.
- **Do** use uppercase tracked micro-type for labels, roles, nav and buttons — it is native to this world.
- **Do** express groupings as hairline-ruled rows with generous vertical padding.
- **Do** separate surfaces with a tonal step or a 1px rule.
- **Do** reuse the knight from `assets/img/knight-w.png`. On navy it stands alone; on off-white it needs the `drop-shadow` to hold an edge.
- **Do** give every scroll-driven behavior a static fallback, and gate hidden states behind `js-reveal` — with a timer that releases them if the script never arrives.
- **Do** number a list only where the order carries the argument, as in the process steps.
- **Do** keep the `prefers-reduced-motion` block **last in the stylesheet**. Everything in it overrides a rule declared earlier at equal specificity, so its position is the only thing making it work.
- **Do** size sticky frames and scroll stages in `svh`, with a `vh` line above as the fallback.
- **Do** pair the focus ring with its surface, exactly like every other colour assignment.

### Don't:
- **Don't** introduce a third hue. There is no accent color; emphasis is `white` on navy or an inverted surface.
- **Don't** use `facet-mid` for running paragraph copy — it is for tracked labels and numerals at 0.75–0.8125rem only.
- **Don't** add `border-radius` to anything inside a block. The radius belongs to the sheet — the header, the footer and top-level sections — and nowhere else.
- **Don't** skip a heading level to keep a section visually clean. Where the layout has no room for one, use `.u-visually-hidden` so the document outline still runs h1 → h2 → h3.
- **Don't** put `overflow: hidden` on a section. Every capture frame and the hero stage are `position: sticky`, and a clipping ancestor kills sticky silently.
- **Don't** add `box-shadow`, or fake elevation with tilted or lifted cards; perspective is for things that actually turn.
- **Don't** put a tracked kicker above a heading as a section eyebrow — the specific device removed throughout the build. Tracked uppercase micro-type elsewhere is fine.
- **Don't** build a card grid or a stat band for services; use ruled editorial rows.
- **Don't** mirror the knight with `scaleX(-1)`; its lit side is fixed, and direction is carried by the approach and a small rotation.
- **Don't** key a piece out of its background by colour. The dark set's shadows sit too close to the sheet ground, and the fill leaks through the piece.
- **Don't** animate `max-height` or any layout property for the mobile nav; use `transform`/`opacity` with `visibility`, which also keeps closed links out of the tab order.
- **Don't** hard-code a hex where a token exists, and don't invent a new ground step between `navy-600` and `navy-400`. The four alpha derivations have tokens too — `rule-light`, `piece-shadow`, `piece-shadow-soft`, `checker`.
- **Don't** carry spacing or measure in a `style` attribute. Per-instance *data* belongs there (`--tx`, `--tr`, `--x`, `--r`); per-instance *taste* does not.
- **Don't** declare `scroll-behavior: smooth` globally. On a 13,500px document it turned the Contact link into a three-second ride and left a page loaded straight at `#contact` stranded 700px down, because the fragment resolves before the fonts and the hero have finished laying the document out. Smooth the click in JS and re-apply the fragment once layout settles.
- **Don't** kill all transitions under reduced motion. Restricting `transition-property` to the colour and opacity set removes the movement and keeps the feedback; a blanket `0.01ms` duration turns every hover, focus and active state into a hard cut, which is its own accessibility problem.
- **Don't** leave `will-change` on at rest. It held a compositor layer for the whole session to serve an animation that finishes in the first two screens.
