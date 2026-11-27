# SoikotWebDev — Demo Factory

Finished demo websites for real client businesses, built BEFORE first contact.
One Next.js app, one route per business, static export, auto-deployed on every push.

## Live demos

| # | Business | Route | WhatsApp |
|---|----------|-------|----------|
| 01 | Habib Tazkira's — salon, Chittagong (510K FB) | `/habib-tazkiras/` | 01611070703 (public booking number; WhatsApp not explicitly confirmed) |

## How it works

- Each demo is a route under `app/<business-slug>/`, built from that business's own
  public information only — services, real prices, offers, addresses, phones, hours,
  reviews. Nothing invented. Sections with no real public content get an honest
  empty state, never fake content.
- Design is fresh per client, from the client's own logo and brand colours.
  Tech stack stays the same: Next.js 14 + Tailwind, static export (`output: 'export'`).
- Images are remote Unsplash URLs (verified live + visually checked). No binary
  assets are committed, so the repo stays pushable through the GitHub connector.
- Components follow 21st.dev patterns, rebuilt dark to match each brand — demo #1
  uses the 21st.dev Pricing Module pattern (3-tier cards, popular highlight, feature
  checklists) for the bridal packages.

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.
No Vercel, no OTP code.

- GitHub Pages URL: `https://soikot47.github.io/soikotwebdev-sites/habib-tazkiras/`
- One-time setup (repo Settings → Pages → Source: **GitHub Actions**).
- Long-term host recommendation: Cloudflare Pages (free tier: unlimited static
  bandwidth, 500 builds/month) pointed at this same repo — same auto-deploy, and
  the site then lives at its own `<project>.pages.dev` root with no base path.

## Add a new demo

1. Research the business first (Facebook, Instagram, WhatsApp profile, posts, prices,
   offers, address, phone, hours, reviews, logo, brand colours). Record sources.
2. Copy `app/habib-tazkiras/` to `app/<new-slug>/` as a starting point, then redesign
   it fresh from the new client's brand — never ship a re-skin.
3. Add the route to `app/page.tsx`, push, and the live link is ready to send.

## Rules (standing)

- Portfolio link is ONLY https://livespacebd.com — never any vercel.app address.
- Never invent prices, reviews, statistics, or follower counts.
- No "demo", "lorem", "placeholder", or "sample" words anywhere on a client page.
- Never send anything to a client from here — the owner sends the first message
  himself from his personal WhatsApp.
