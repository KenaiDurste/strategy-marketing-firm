# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owner-operators of local restaurants and food businesses across the US — single locations, small groups, and food brands where the person approving ad spend is usually the same person running the floor. They are time-poor, evaluate on whether the room filled and the orders came in, and are typically skeptical of agencies because a previous one billed a retainer and reported impressions.

The site is read in short bursts, often on a phone, between shifts. The reader is deciding one thing: whether it is worth one conversation.

## Product Purpose

Strategy Marketing Firm plans and runs paid advertising for restaurants and food businesses — paid ad strategy, campaign build, ad creative, and measurement.

Success for the client is measurable demand: orders, covers, and repeat visits attributable to spend. Success for the firm is a client who stays past the free four weeks because the numbers earned it.

## Positioning

Advertising that is planned in sequence rather than reacted to — the chess premise the whole site is built on. Campaigns are structured as a sequence of moves set up in advance, not a series of responses to last week's results.

The commercial position is the harder thing for a neighbor to copy: the firm takes no fee for the first four weeks (the client buys only their own ad spend), then charges a percentage of ad spend rather than a fixed retainer. The firm only makes money when the client is spending, and only keeps the client if the spending works.

## Operating Context

- Clients bring their own creative in the majority of cases; the firm builds campaigns around the assets the business already has. AI-generated creative is available as an option, not the default.
- Ad spend is paid by the client directly to the platform, never routed through the firm.
- Engagement opens with "For the Love of the Game": four weeks, no fee, client covers ad spend only.
- After four weeks: 15% of ad spend.
- Optimized performance assumes a $50/day minimum on ad spend.
- Delivery is remote across the US. There is no office visit in the sales process.
- The two people the client meets in the first conversation are the two people who do the work. There is no account layer.

## Capabilities and Constraints

**Confirmed platforms:** Meta (Facebook/Instagram) and Google (Search/PMax/YouTube).

**Undecided:** a third advertising platform was indicated but not named. Do not name or imply a third platform anywhere on the site until it is confirmed.

**Team:** two people — Kenai Dursteler and Ryken Dursteler. No bench, no contractors currently claimed.

**Services sold:** paid ad strategy, digital campaigns, campaign build, ad creative, measurement. Nothing else. Do not reintroduce web design, branding, SEO, or general "marketing services."

**Not offered:** retainer-based engagements, sprints, launches, or any engagement model besides the one above. These were deliberately removed.

**Contact:** `hello@strategymarketingfirm.com` is published across the site but the domain has no MX records, so the mailbox does not yet exist. Phone `+1 (385) 236-1960` is a Google Voice line and is live.

**Technical:** static HTML, no build step, no forms, no database, no third-party scripts. Deployed on Vercel from GitHub. The zero-input attack surface is deliberate — adding a contact form is a product decision, not a detail.

## Brand Commitments

- Name: Strategy Marketing Firm.
- The chess metaphor is binding: the knight is the mark, and the strategic-sequence framing carries the copy.
- Voice is plain and declarative, short sentences, no agency vocabulary. "Senior," and corporate register generally, was explicitly rejected. The firm is positioned as new and interesting, not established and safe.
- The firm's newness is stated honestly rather than disguised.

## Evidence on Hand

**There are no results yet.** No clients, no case studies, no testimonials, no metrics, no logos, no named engagements.

This is the single hardest constraint on the site and it is not negotiable: nothing may be fabricated to fill the gap. Credibility is carried by the terms (free first four weeks, percentage of spend) and by the clarity of the method, because those are things the firm can actually stand behind today.

Real assets that do exist: the knight mark and its rendered 3D turntable (`assets/img/knight-spin/`), the two real bios on `team.html`, and the Google Voice line.

## Product Principles

1. **Never invent proof.** No testimonials, no metrics, no client names, no implied volume. Where proof would normally sit, use terms and method instead.
2. **The offer is the credibility.** Four weeks free and a percentage of spend do the work a case study would do elsewhere. Keep the terms unmissable rather than tucked into fine print.
3. **Sell only what is actually run.** Paid ad strategy and digital campaigns on confirmed platforms. Every added capability is a promise someone has to keep.
4. **Two people is a feature.** The absence of an account layer is the differentiator, not an embarrassment to be papered over.
5. **Speak to a restaurant owner between shifts.** Short, concrete, phone-first. If a sentence would not survive being read in a walk-in cooler, it is too long.

## Accessibility & Inclusion

The site is read predominantly on phones in variable light and short attention windows. Existing commitments to preserve: visible focus states on all interactive controls, reduced-motion accommodation for the scroll-driven hero (the `prefers-reduced-motion` block must remain last in the stylesheet), and text contrast held against the navy surface.
