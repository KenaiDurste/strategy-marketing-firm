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
  board-rule:
    backgroundColor: "{colors.navy-400}"
    height: "12px"
---

# Design System: Strategy Marketing Firm

## Overview

**Creative North Star: "The Lit Knight on a Dark Board"**

One piece, one field, and nothing else in the room. The site is drenched in a single indigo-navy ground (`navy`) from the header to the footer bar, interrupted only by off-white relief blocks that read as squares cut out of the same board. There is no accent hue anywhere in the build — the only colors that are not navy, off-white, or text are the three flat planes of the knight mark itself (`white`, `facet-light`, `facet-mid`), which is what makes the mark feel lit rather than decorated. Ornament is limited to one device: the 12px checker band (`board-rule`) that runs the full width between sections, a board edge seen side-on.

The density is editorial, not agency. Type carries the argument: Archivo held at weight 800 and width 112% for every heading, set tight (-0.03em to -0.04em) and balanced, against Schibsted Grotesk at a comfortable 1.6 for reading. Services are a set of ruled editorial rows, not a card grid; the process is a numbered ordinal list because the order genuinely is the information. The build refuses the agency template it was briefed against: no eyebrow kickers above headings, no stat band, no four identical service cards, and no rounded, shadowed containers.

Motion is the argument, not the garnish. The hero holds the knight high and centered over a hidden name, and the scroll lifts the piece away to reveal it. Below that, a 5-unit scrubbed sequence walks the knight across the board taking five pieces, one per beat, each capture landing a headline, a notation label, and a piece in the tray. Every one of those behaviors has a documented static and reduced-motion fallback, because the content has to survive without any of it.

**Key Characteristics:**
- Drenched navy ground; off-white blocks are relief, never a second theme
- No third hue — the greys are the mark's own facet planes
- Zero corner radius, zero box-shadow; depth is tonal
- Archivo expanded-and-heavy for structure, Schibsted Grotesk for reading
- Board-edge checker rules as the only ornament
- Scroll-scrubbed sequence with a full static fallback

## Colors

A single drenched indigo world with off-white relief and no accent hue; the only chromatic variety is the knight mark's own facet ramp.

### Primary
- **Drenched Indigo** (`navy`): The page ground. Body background, header (at 88% with a 14px backdrop blur), mobile nav panel, and the color that text and buttons invert to on light surfaces. It is the default state of every surface, not a section treatment.
- **Board Shadow** (`navy-900`): The one step darker. Used for the two surfaces that must recede from the ground: the `.gambit` scroll stage and the site footer.
- **Rule Indigo** (`navy-600`): Every hairline on a dark surface — header underline, section dividers, list rules, footer bar — plus the resting fill of the pieces waiting to be taken and the portrait tile background.
- **Edge Indigo** (`navy-400`): The lightest ground step. The checker band on dark, the file letters under the board line, and the outline of the nav toggle and ghost strokes.

### Neutral
- **Relief Off-White** (`off-white`): The relief blocks — `.section--light` and the contact band — and the text color of buttons that invert on those blocks.
- **Struck White** (`white`): Reserved for emphasis, never for large fields. Button fills, the nav underline, focus outlines, selection background, footer group labels, and the knight's lit planes.
- **Facet Light** (`facet-light`): The mark's mid plane, borrowed for type that belongs to the mark's world — the second line of the hero title, member initials, the scroll cue's gradient tick, and the chess notation labels.
- **Facet Mid** (`facet-mid`): The mark's shadow plane. Small tracked labels only: service tags, step numerals, member roles, and the checker band where it follows a light section.
- **On-Navy Primary** (`on-navy`): Default body text on the ground.
- **On-Navy Secondary** (`on-navy-2`): Supporting copy on the ground — ledes, service descriptions, bios, resting nav links, footer text.
- **On-Light Primary** (`on-light`): Heading and body text on relief blocks.
- **On-Light Secondary** (`on-light-2`): Supporting copy on relief blocks; the light-surface counterpart to every `on-navy-2` and `facet-mid` assignment.

### Named Rules

**The Drenched Ground Rule.** Navy is the page, not a section. New surfaces inherit it; a light block must earn its place as relief, and two light blocks never sit adjacent without navy between them.

**The No Third Hue Rule.** There is no accent color and there will not be one. Emphasis comes from `white` against navy, or from inverting the surface. The greys in the palette are the knight's facet planes — use them on the mark, on labels adjacent to the mark, and nowhere as a brand accent.

**The Paired Surface Rule.** Every color assignment on the dark ground needs its light-surface counterpart, scoped with `:is(.section--light, .contact)` — `.contact` is a relief block that is deliberately not a `.section--light`, so a selector that only targets `.section--light` will leave the contact band unreadable.

**The Facet Floor Rule.** `facet-mid` on navy is contrast-adequate for tracked labels and numerals at 0.75–0.8125rem, and that is its entire remit. Paragraph copy on navy uses `on-navy-2`; do not promote `facet-mid` to running text.

## Typography

**Display Font:** Archivo (variable width 100–125, weight 400–900), with Helvetica Neue / Arial fallback
**Body Font:** Schibsted Grotesk (400 / 500 / 700), with Helvetica Neue / Arial fallback

**Character:** Archivo is used in one register only — weight 800 at width 112%, tracked tight and negative. It reads as a piece cut from a solid block, wide and unhurried. Schibsted Grotesk carries every sentence at a plain 400/1.6, so that the moment type gets heavy and wide, you know it is structure and not prose.

### Hierarchy
- **Display**: The hero wordmark and the five scroll-sequence beat headlines. One per full-viewport stage; it is scaled to be read across a room.
- **Headline**: The page title on secondary pages (`.h-xl`), used once per page inside `.page-head`.
- **Title**: Every section heading (`.h-lg`), constrained by `.measure` (68ch) or a per-instance `max-width` in the 14–18ch range so it breaks into two or three deliberate lines.
- **Subtitle**: The service row heading — the only Archivo size that sits inside a body-copy rhythm.
- **Lede**: The opening paragraph under a heading, capped at 60ch and set in the secondary text color for its surface.
- **Body**: Running copy at 1.6 line-height; `text-wrap: pretty` is on globally, `text-wrap: balance` on all headings.
- **Label**: Archivo 700 / 112% width / 0.1em tracking, uppercase — buttons and nav links. The tracked, uppercase, actionable register.
- **Micro**: Schibsted Grotesk 500 at 0.2–0.24em tracking, uppercase — the brand subline, the scroll cue, member roles, and footer group labels. Whispered, never a heading.

### Named Rules

**The One Register Rule.** Archivo appears at weight 800 (700 for labels and numerals) and `font-stretch: 112%`, never at another weight or width. A lighter or narrower Archivo reads as a different typeface on this page.

**The Tracked Micro-Label Rule.** Uppercase, widely tracked micro-type is native to this world and is used freely for nav links, buttons, roles, footer group labels, and the scroll cue. What is banned is one specific placement: a tracked kicker sitting immediately above a heading as a section eyebrow. Kickers were removed from every section in the build; the heading opens the section on its own.

**The Sequence Numeral Rule.** Numerals appear as content only where the order is the information — the `.steps` list, and the chess notation labels (`Nxb1`) attached to each capture. Do not number sections, services, or team members; there the count is not an argument.

## Layout

Everything sits in one container: `--shell` at `min(1180px, 100% - 2.5rem)`, centered, applied identically by the header, sections, contact band, and both footer rows so the left edge never shifts down the page. Vertical rhythm is a single token, `--section-y` at `clamp(5rem, 12vw, 9rem)`, applied as `padding-block` to every section; page heads use an asymmetric variant (`clamp(4rem, 10vw, 7rem)` top, `clamp(2.5rem, 6vw, 4rem)` bottom) so a title sits closer to the content it introduces than to the header.

Content grids are two-column and asymmetric, not modular. The positioning split is `1fr 1fr` above 900px; service rows run `7fr 9fr` above 860px so the description column is wider than the heading; process steps run `3.5rem / 14rem / 1fr` above 720px with baseline alignment, putting the numeral in its own narrow gutter; the contact band is `1fr auto` above 880px so the button hangs at the end-aligned right. Everything below its breakpoint collapses to a single stacked column with the same row gap. The only auto-fitting grids are the team roster and the footer, both `repeat(auto-fit, minmax(min(100%, N), 1fr))` — 240px for members, 200px for footer groups — so they reflow without a breakpoint.

Spacing literals cluster tightly: 0.5rem for inline gaps, 0.75rem for icon-to-word, 1.5rem for paragraph separation, 2.5rem for grid gutters, 3rem for the gap under a section heading. Larger gaps are `clamp()`ed against viewport width rather than stepped.

The header is sticky at `top: 0` with a `4.5rem` minimum height, and that number is load-bearing: the hero stage sticks at `top: 4.5rem` and sizes itself `calc(100vh - 4.5rem)`. Two scroll stages set their own height in viewport units to buy scroll distance for a pinned frame — the hero at 265vh and the sequence at 560vh, the latter being exactly five 100vh beats plus a resolving hold. Below 760px the nav becomes a full-width absolute panel under the header.

## Elevation & Depth

There are no shadows in this system — not one `box-shadow` in the stylesheet. Depth is entirely tonal: four indigo steps (`navy-900` behind, `navy` at ground level, `navy-600` for hairlines and resting objects, `navy-400` for the nearest edges) plus the off-white relief blocks, which read as lifted by luminance alone. The two exceptions to flatness are both real optical devices rather than simulated lift: the sticky header composites over the page with `color-mix` at 88% opacity plus a 14px backdrop blur, and the hero stage declares `perspective: 1200px` so the knight's rotation on scroll is genuine 3D rather than a scale trick. The `.gambit` scene sits behind its copy at 0.62 opacity, holding the board back so type stays first.

### Named Rules

**The No Shadow Rule.** Surfaces do not cast. If an element needs to separate from its background, move it a tonal step (`navy-900` / `navy` / `navy-600`) or put a hairline rule on it. Adding a `box-shadow` breaks the flat-plane logic the knight mark is built on.

**The Real Z Rule.** Perspective is permitted where something actually turns in space — the hero knight rotates on X and Y inside a declared `perspective`. It is not a license for tilted cards, faux-3D panels, or lifted hover states.

## Shapes

Every corner in this system is square. There is no `border-radius` anywhere: buttons, the nav toggle, portrait tiles, relief blocks, and the skip link are all hard-cornered rectangles, which is what lets a light section read as a square cut from a board rather than a card floating on it.

Borders are hairlines, 1px, in `navy-600` on dark and `rgba(34, 33, 58, 0.16)` on relief — used as horizontal rules between list rows and section boundaries, and as a 1px `white` or `navy` stroke around buttons so the hover state can drop the fill without the shape moving. The one filled geometric device is the board rule: a 12px band of `repeating` 50%-duty linear gradient at a 96px cycle (112px inside the sequence stage), in `navy-400` on dark and `facet-mid` after a light section. Portrait tiles are `4 / 5` and carry a 44px conic checker at 5% white as their only texture.

The knight is the client's own artwork, not a redraw: `assets/img/knight.png`, cut from the supplied `SMF White.png` sheet at 279×458 and reused at every size — header brand, hero, sequence, favicon. The five captured pieces (`piece-pawn`, `piece-rook`, `piece-bishop`, `piece-queen`, `piece-king`) come from the matching `SMF Black.png` sheet, so the black set and the white knight are the same hand.

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
There are no cards. Groupings are expressed as ruled rows (`.offer__row`, `.steps li`) — a top rule on the container, a bottom rule per row, generous `clamp(1.5rem, 3vw, 3.25rem)` vertical padding, and no background, border box, or radius. The only filled container is the member portrait tile: `navy-600` fill, `4 / 5` ratio, conic checker texture, and oversized `facet-light` initials centered in it.

### Navigation
Uppercase Archivo labels at `on-navy-2`, resolving to `white` on hover and for `[aria-current="page"]`. The active and hover indicator is a 2px `white` underline drawn by a pseudo-element that scales in from the left over 0.4s — the rule is always present at `scaleX(0)`, so the state change is a transform, never a layout change. Below 760px the nav becomes a full-width `navy` panel absolutely positioned under the header, animated with `transform` and `opacity` and toggled by `visibility` with a delayed transition; the burger's single bar crosses into an X via its two pseudo-elements.

### Board Rule (signature)
A 12px full-bleed checker band placed between sections and above the footer, `aria-hidden`. It is the only ornament in the system. On dark it is `navy-400` at a 96px cycle; immediately after a `.section--light` it automatically switches to `facet-mid` so it stays visible against relief.

### The Gambit (signature)
A 560vh section pinned to a 100vh stage, driven by a scrubbed GSAP timeline of exactly five equal units — one per beat. Each unit: the knight flies in from an alternating wing, arcs down onto a slot, the piece there rotates 84° and slides out at 0.16 opacity, a captured silhouette lights up in the tray at the top right, the algebraic notation appears below the board line, and the beat's headline rises into place. The knight mark is never mirrored; direction is carried by the entry arc and a small rotation, so its lit side stays fixed. The fifth unit does not end at the fifth capture — it holds, with the knight settling upward and the tray lifting on a stagger, so the closing frame resolves instead of freezing. Sweep distances are measured in pixels and rebuilt on a debounced resize. Without GSAP or under `prefers-reduced-motion`, `.gambit--static` collapses the whole thing to a stacked, fully visible list of the five beats with the board scene hidden.

### Reveals (signature)
Two variants only: `.r-rise` for headings (opacity plus a 30px rise, `power3.out`, 0.9s) and `.r-fade` for supporting copy (opacity only, `power2.out`, 1.1s). The hidden state is gated behind a `js-reveal` class set by an inline `<head>` script and removed the moment motion is unavailable, so content is never stuck invisible without JS. The observer is an `IntersectionObserver`, not a ScrollTrigger, and it also reveals anything whose `boundingClientRect.bottom < 0` — a scroll restore, a deep link, or a fast flick must not leave a section permanently hidden behind the reader.

## Do's and Don'ts

### Do:
- **Do** treat navy as the page ground and off-white blocks as relief cut out of it; a new section defaults to navy.
- **Do** pair every dark-surface color rule with a `:is(.section--light, .contact)` override — `.contact` is relief but is not `.section--light`.
- **Do** set headings in Archivo 800 at `font-stretch: 112%` with tight negative tracking, and leave `text-wrap: balance` on.
- **Do** use uppercase tracked micro-type for labels, roles, nav and buttons — it is native to this world.
- **Do** express groupings as hairline-ruled rows with generous vertical padding.
- **Do** separate surfaces with a tonal step or a 1px rule.
- **Do** reuse the knight from `assets/img/knight.png`, and place it only on a navy surface.
- **Do** give every scroll-driven behavior a static fallback, and gate hidden states behind `js-reveal`.
- **Do** number a list only where the order carries the argument, as in the process steps.

### Don't:
- **Don't** introduce a third hue. There is no accent color; emphasis is `white` on navy or an inverted surface.
- **Don't** use `facet-mid` for running paragraph copy — it is for tracked labels and numerals at 0.75–0.8125rem only.
- **Don't** add `border-radius`. Every corner in this system is square.
- **Don't** add `box-shadow`, or fake elevation with tilted or lifted cards; perspective is for things that actually turn.
- **Don't** put a tracked kicker above a heading as a section eyebrow — the specific device removed throughout the build. Tracked uppercase micro-type elsewhere is fine.
- **Don't** build a card grid or a stat band for services; use ruled editorial rows.
- **Don't** mirror the knight with `scaleX(-1)`; its lit side is fixed, and direction is carried by the arc.
- **Don't** animate `max-height` or any layout property for the mobile nav; use `transform`/`opacity` with `visibility`, which also keeps closed links out of the tab order.
- **Don't** hard-code a hex where a token exists, and don't invent a new ground step between `navy-600` and `navy-400`.
