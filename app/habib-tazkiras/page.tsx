'use client';

import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Scissors,
  Crown,
  Sparkles,
  Gem,
  Hand,
  Flower2,
  Phone,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  Snowflake,
} from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { NumberTicker } from '@/components/ui/number-ticker';
import { BlurFade } from '@/components/ui/blur-fade';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { ShinyButton } from '@/components/ui/shiny-button';
import { PricingModule, type Plan } from '@/components/ui/pricing-module';

// ── Real 21st.dev / Magic UI components used on this page ──────────────────
// Magic UI Marquee ............ https://21st.dev/r/magicui/marquee
// Magic UI Bento Grid ......... https://21st.dev/r/magicui/bento-grid
// Magic UI Number Ticker ...... https://21st.dev/r/magicui/number-ticker
// Magic UI Blur Fade .......... https://21st.dev/r/magicui/blur-fade
// Magic UI Animated Gradient Text ... https://21st.dev/r/magicui/animated-gradient-text
// Magic UI Shiny Button ...... https://21st.dev/r/magicui/shiny-button
// Ruixen UI Pricing Module (21st.dev) ... https://21st.dev/@ruixen.ui/components/pricing-module
// (21st.dev's registry requires an authenticated account, so the Magic UI
// components were installed from the magicui.design registry — the same
// components 21st.dev lists — and the Pricing Module was vendored from the
// copy reconstructed from the 21st.dev bundle. See
// components/ui/pricing-module.tsx for provenance.)
// Framer Motion powers the hero entrance and scroll reveals below.

const IMG = {
  hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80',
  barber: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
  gentsBright:
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
  gents: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80',
  hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
  bridal: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
  nails: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
  beauty:
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
};

const PHONE_GEC = '+8801611070703';
const PHONE_GATE = '+8801880011119';
const PHONE_KHULSHI = '+8801854111163';
const FACEBOOK = 'https://www.facebook.com/habibitazkiras';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Bridal', href: '#bridal' },
  { label: 'Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Branches', href: '#branches' },
];

const MARQUEE = [
  'Hair',
  'Bridal Makeup',
  'Hydra Facial',
  'Brazilian NanoSilk',
  'Keratin',
  'Groom Services',
  'Manicure & Pedicure',
  'Hair Spa',
  'Party Makeover',
  'Massage',
];

const SERVICES = [
  {
    title: 'Hair',
    img: IMG.hair,
    icon: Scissors,
    span: 'col-span-1 lg:col-span-2',
    items: [
      'Haircut & styling',
      'Hair colour — global, base & highlights',
      'Brazilian NanoSilk',
      'Keratin treatment',
      'Hair spa & hot oil massage',
      'Shampoo & blow-dry',
    ],
  },
  {
    title: 'Bridal & Party Makeup',
    img: IMG.bridal,
    icon: Crown,
    span: 'col-span-1 lg:col-span-2',
    items: [
      'Bridal makeover',
      'Party makeover',
      'Reception makeover',
      'HD & waterproof base',
      'Lenses & eyelash',
      'Saree / lehenga setting',
    ],
  },
  {
    title: 'Facials & Skin',
    img: IMG.facial,
    icon: Sparkles,
    span: 'col-span-1',
    items: [
      'Hydra Facial',
      'Hydra Platinum Facial',
      'Hydra Power Brightening Facial',
      'Gold Facial',
      'Milk Facial',
      'O3 & Lotus Glow Facials',
    ],
  },
  {
    title: 'Grooming for Men',
    img: IMG.gents,
    icon: Gem,
    span: 'col-span-1',
    items: [
      'Haircut & hair setting',
      'Shave & beard trimming',
      'Face & neck fair polish',
      'Groom packages',
      'Hot oil massage',
      'Hair spa',
    ],
  },
  {
    title: 'Nails & Body',
    img: IMG.nails,
    icon: Hand,
    span: 'col-span-1',
    items: [
      'Manicure',
      'Pedicure & foot spa',
      'Body massage',
      'False nails',
      'Hand & foot care',
      'Relaxing spa rituals',
    ],
  },
  {
    title: 'Beauty Essentials',
    img: IMG.beauty,
    icon: Flower2,
    span: 'col-span-1',
    items: [
      'Threading',
      'Eyebrows & upper lip',
      'Waxing',
      'Henna / mehndi',
      'Face cleansing',
      'Skin-care facials',
    ],
  },
];

const BRIDAL_PLANS: Plan[] = [
  {
    id: 'package-1',
    name: 'Package 1',
    description: 'Junior Hand · Complete bridal package',
    icon: <Crown className="h-8 w-8 text-golddark" />,
    priceMonthly: 7000,
    priceYearly: 7000,
    users: 'Junior Hand',
    features: [
      { label: 'Simple makeup', included: true },
      { label: 'Hairdo', included: true },
      { label: 'Saree / lehenga setting', included: true },
      { label: 'Tassel setting', included: true },
      { label: 'Face cleansing', included: true },
      { label: 'Lenses & eyelash', included: true },
    ],
  },
  {
    id: 'package-2',
    name: 'Package 2',
    description: 'Senior Hand · Complete bridal package',
    icon: <Gem className="h-8 w-8 text-golddark" />,
    priceMonthly: 12000,
    priceYearly: 12000,
    users: 'Senior Hand',
    recommended: true,
    features: [
      { label: 'HD makeup', included: true },
      { label: 'False nail', included: true },
      { label: 'Saree / lehenga setting', included: true },
      { label: 'Skin-care facial', included: true },
      { label: 'Lenses & eyelash', included: true },
      { label: 'Manicure', included: true },
    ],
  },
  {
    id: 'package-3',
    name: 'Package 3',
    description: 'Senior Hand · Complete bridal package',
    icon: <Sparkles className="h-8 w-8 text-golddark" />,
    priceMonthly: 16000,
    priceYearly: 16000,
    users: 'Senior Hand',
    features: [
      { label: 'HD waterproof base makeup', included: true },
      { label: 'False nail', included: true },
      { label: 'Saree / lehenga setting', included: true },
      { label: 'International facial', included: true },
      { label: 'Lenses & eyelash', included: true },
      { label: 'Manicure & pedicure', included: true },
      { label: 'Party makeup included', included: true },
    ],
  },
];

const REVIEWS = [
  'Good service with polite barbers. Haircuts of many types are available which will easily satisfy any customer. Overall experience was very good. Would definitely recommend to try out.',
  'My experience was not the first with Habib Tazkira\u2019s and yet again a wonderful one. The interior deco is welcoming and comfortable, the people are welcoming and the barbers themselves work as they know what they are doing.',
  'They have the best pedicure in city. Staff are well behaved and price worthy service.',
  'The design and structure of the place itself is unique, different, modern and cool. Their prices are reasonable on everything.',
];

// Scroll reveal built on Magic UI's BlurFade. When the visitor prefers
// reduced motion, the reveal is skipped entirely and content renders as-is.
function Fade({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <BlurFade delay={delay} inView className={className}>
      {children}
    </BlurFade>
  );
}

export default function HabibTazkiras() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  const heroAnim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: 'easeOut' as const },
        };

  return (
    <main className="bg-paper font-sans text-ink">
      {/* Preload the hero photo so the first paint is never a black box. */}
      <link rel="preload" as="image" href={IMG.hero} fetchPriority="high" />

      {/* ── Top bar ─────────────────────────────── */}
      <div className="bg-ink text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] sm:justify-between sm:text-xs">
          <span className="flex items-center gap-1.5 text-goldlight">
            <Clock className="h-3.5 w-3.5" /> Open daily · 10:00 AM – 9:00 PM
          </span>
          <span className="hidden md:inline">GEC Circle · 2 No Gate · Khulshi — Chittagong</span>
          <a href={`tel:${PHONE_GEC}`} className="flex items-center gap-1.5 text-goldlight hover:text-gold">
            <Phone className="h-3.5 w-3.5" /> Book: 01611-070703
          </a>
        </div>
      </div>

      {/* ── Header ──────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gold/25 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-gold bg-ink font-display text-xl font-bold text-goldlight">
              HT
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-wide sm:text-xl">
                HABIB TAZKIRA&rsquo;S
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-golddark">
                Relax · Revive · Restore
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-ink/75 transition hover:text-golddark">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_GEC}`}
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-goldlight transition hover:bg-coal sm:inline-block"
            >
              Book Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-ink/10 bg-paper px-6 py-4 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-ink/5 py-3 text-base font-semibold last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_GEC}`}
              className="mt-4 block rounded-full bg-ink py-3 text-center font-bold text-goldlight"
            >
              Call to Book — 01611-070703
            </a>
          </nav>
        )}
      </header>

      {/* ── Hero ────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#2B2115] via-ink to-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={IMG.hero}
            alt="Inside Habib Tazkira's salon — styling chairs and mirrors"
            fetchPriority="high"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 md:pb-28">
          <motion.p
            {...heroAnim(0)}
            className="text-xs font-bold uppercase tracking-[0.3em] text-goldlight"
          >
            A franchise salon of Jawed Habib, Mumbai
          </motion.p>
          <motion.h1
            {...heroAnim(0.1)}
            className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Relax.{' '}
            <AnimatedGradientText colorFrom="#9A7B3F" colorTo="#E7CE8F">
              Revive.
            </AnimatedGradientText>{' '}
            Restore.
          </motion.h1>
          <motion.p
            {...heroAnim(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85"
          >
            Chittagong&rsquo;s finest hair, beauty &amp; makeup salon — for men and women. Precision
            haircuts, bridal makeovers, facials and spa rituals, by artists trained in the
            scientific methods of hair and beauty.
          </motion.p>
          <motion.div {...heroAnim(0.3)} className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_GEC}`}
              className="rounded-full bg-gold px-7 py-3.5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-goldlight"
            >
              Call to Book
            </a>
            <a
              href="#bridal"
              className="rounded-full border border-goldlight/70 px-7 py-3.5 font-bold text-goldlight transition hover:-translate-y-0.5 hover:bg-goldlight hover:text-ink"
            >
              See Bridal Packages
            </a>
          </motion.div>
          <motion.div
            {...heroAnim(0.4)}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4"
          >
            <div>
              <p className="font-display text-3xl font-bold text-goldlight">
                <NumberTicker value={510} className="text-goldlight dark:text-goldlight" />
                K
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">
                Facebook followers
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-goldlight">
                <NumberTicker value={4.2} decimalPlaces={1} className="text-goldlight dark:text-goldlight" /> ★
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">
                from ~1,630 reviews
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-goldlight">
                <NumberTicker value={3} className="text-goldlight dark:text-goldlight" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">
                Branches in Chittagong
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-goldlight">
                <NumberTicker value={7} className="text-goldlight dark:text-goldlight" /> days
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">
                Open 10 AM – 9 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee (Magic UI) ──────────────────── */}
      <div className="overflow-hidden border-y border-gold/30 bg-gold py-1">
        <Marquee pauseOnHover className="[--duration:32s]">
          {MARQUEE.map((m) => (
            <span
              key={m}
              className="mx-4 flex items-center gap-8 text-sm font-extrabold uppercase tracking-[0.22em] text-ink"
            >
              {m} <span className="text-golddark">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── About ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Fade>
            <div className="relative">
              <img
                src={IMG.barber}
                alt="Barber giving a precise beard trim at Habib Tazkira's"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-2 rounded-2xl bg-ink px-6 py-5 text-cream shadow-2xl sm:right-6">
                <p className="font-display text-2xl font-bold text-goldlight">Look Better.</p>
                <p className="font-display text-2xl font-bold">Feel Better.</p>
              </div>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-golddark">The Salon</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                An experience you&rsquo;ll love to revisit.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                Habib Tazkira&rsquo;s is an own-brand hair, beauty and makeup salon — a franchise
                salon chain of Jawed Habib, Mumbai, and the finest hair and beauty salon in
                Bangladesh. Our customers become our brand lovers.
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                From precision haircuts and keratin treatments to bridal makeovers, rejuvenating
                facials, pedicures and hair spa — every service is designed to bring out the best
                in you. Our artists are meticulously trained in the scientific methods of hair
                cutting and styling.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'For men & women',
                  'Walk-ins welcome',
                  'Card payments accepted',
                  'Trained, professional artists',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-semibold">
                    <span className="mt-0.5 text-golddark">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-gold/60 bg-cream px-4 py-2 text-sm font-bold text-golddark">
                  ONE Bank cards — 15% off all services
                </span>
                <span className="rounded-full border border-gold/60 bg-cream px-4 py-2 text-sm font-bold text-golddark">
                  Dhaka Bank cards — 20% off
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Services (Magic UI Bento Grid) ──────── */}
      <section id="services" className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Fade>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-goldlight">Services</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Everything for your hair, skin &amp; look.
            </h2>
            <p className="mt-4 max-w-2xl text-cream/70">
              Six worlds of care under one roof — at GEC, 2 No Gate and Khulshi. The bridal
              packages below show the exact published prices; other services are priced when you
              book — call the salon to confirm today&rsquo;s price.
            </p>
          </Fade>
          <BentoGrid className="mt-12 grid-cols-1 auto-rows-auto sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Fade key={s.title} delay={0.06 * i} className={s.span}>
                <BentoCard
                  name={s.title}
                  className="h-full border-white/10 bg-coal text-cream dark:bg-coal"
                  background={
                    <div className="relative h-44 overflow-hidden sm:h-52">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
                    </div>
                  }
                  Icon={s.icon}
                  description={s.items.join(' · ')}
                  href={`tel:${PHONE_GEC}`}
                  cta="Call to book"
                />
              </Fade>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ── Bridal pricing (21st.dev Pricing Module, Ruixen UI) ── */}
      <section id="bridal" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Fade>
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-golddark">
            Bridal Packages
          </p>
        </Fade>
        <Fade delay={0.1}>
          <PricingModule
            title="Your bridal look, perfected."
            subtitle="Three complete bridal packages — every one includes makeup, hairdo, saree or lehenga setting, lenses and eyelash. Book early; bridal dates fill fast."
            showToggle={false}
            pricePrefix="৳"
            priceNote="One-time package"
            buttonLabel="Call to Book"
            recommendedLabel="Most Popular"
            plans={BRIDAL_PLANS}
            onPlanClick={() => {
              window.location.href = `tel:${PHONE_GEC}`;
            }}
            className="bg-paper px-0 py-10 md:px-0"
          />
        </Fade>
        <p className="text-center text-sm text-ink/60">
          Bridal packages as published by the salon. Final look is customised to you — call the
          salon to fix your date.
        </p>
      </section>

      {/* ── Winter Care offer ───────────────────── */}
      <section id="offers" className="bg-gradient-to-br from-ink via-coal to-ink py-16 text-cream md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Fade>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-goldlight">
                  <Snowflake className="h-3.5 w-3.5" /> This season · November 2026
                </span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                  Winter Care Offer — for men.
                </h2>
                <p className="mt-4 leading-relaxed text-cream/75">
                  Winter dries the skin and dulls the hair. Two simple combos — a fresh cut, a
                  clean shave and a glowing facial — at a winter price.
                </p>
                <p className="mt-4 text-sm font-semibold text-goldlight">
                  Available at all three branches · Walk-ins welcome
                </p>
              </div>
            </Fade>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  name: 'Combo-1',
                  was: '৳1,299',
                  now: '৳899',
                  items: ['Haircut', 'Shave / trim', 'Milk Facial'],
                },
                {
                  name: 'Combo-2',
                  was: '৳2,299',
                  now: '৳1,499',
                  items: ['Haircut', 'Shave / trim', 'Gold Facial'],
                },
              ].map((c, i) => (
                <Fade key={c.name} delay={0.08 * i}>
                  <article className="h-full rounded-2xl border border-gold/40 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-gold/70">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-goldlight">
                      {c.name}
                    </p>
                    <p className="mt-3 text-lg text-cream/60 line-through">{c.was}</p>
                    <p className="font-display text-5xl font-bold text-goldlight">{c.now}</p>
                    <ul className="mt-5 space-y-2 text-sm text-cream/80">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="text-goldlight">✓</span> {it}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── More packages ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Fade>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-golddark">
            Packages &amp; Seasonal Offers
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            More ways to glow — at honest prices.
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            Prices as published by the salon, with the month each offer ran. Call to confirm
            today&rsquo;s offer before you visit.
          </p>
        </Fade>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              tag: 'Pujo Dhamaka · Oct 2026',
              title: 'Pujo Package 1 — Men',
              price: '৳1,999',
              was: '৳3,000',
              items: ['Haircut, shampoo, blow-dry', 'Hair set', 'Shave / beard trim', 'Lotus Papiya glow facial'],
            },
            {
              tag: 'Pujo Dhamaka · Oct 2026',
              title: 'Pujo Package 2 — Men',
              price: '৳3,199',
              was: '৳5,500',
              items: ['Everything in Package 1', 'Hydra Platinum Facial', 'Festive glow finish', ''],
            },
            {
              tag: 'Eid Exclusive · Mar 2026',
              title: 'Eid Package — Women',
              price: '৳4,999',
              was: '৳8,450',
              items: ['Hydra Power Brightening facial', 'Pedicure & manicure', 'Stylish haircut', 'Hot oil massage, shampoo, eyebrows, upper lip'],
            },
            {
              tag: 'Eid Exclusive · Mar 2026',
              title: 'Eid Elite Combo — Men',
              price: '৳4,999',
              was: '৳7,800',
              items: ['Haircut, shampoo, blow-dry', 'Gel setting, beard trim / shave', 'Face & neck fair polish', 'Manicure, pedicure & Hydra Power Brightening Facial'],
            },
            {
              tag: 'Ramadan Offer · Feb 2026',
              title: 'Ramadan Glow — Men',
              price: '৳999',
              was: '৳3,100',
              items: ['Haircut, shampoo, blow-dry', 'Hair setting', 'Shave / beard trim', 'Lotus Party Glow Facial'],
            },
            {
              tag: 'Special Discount · Jan 2026',
              title: 'Party Makeover',
              price: '৳1,199',
              was: null,
              items: ['Full party makeover', 'Makeup, hair & setting', 'Ready for the evening', ''],
            },
          ].map((o, i) => (
            <Fade key={o.title} delay={0.05 * (i % 3)}>
              <article className="h-full rounded-2xl border border-ink/12 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-golddark">
                  {o.tag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">{o.title}</h3>
                <p className="mt-3">
                  {o.was && <span className="mr-2 text-lg text-ink/45 line-through">{o.was}</span>}
                  <span className="font-display text-4xl font-bold">{o.price}</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {o.items.filter(Boolean).map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-0.5 text-golddark">✓</span> {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Fade>
          ))}
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────── */}
      <section id="gallery" className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Fade>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-goldlight">Gallery</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              The salon experience.
            </h2>
            <p className="mt-4 max-w-2xl text-cream/70">
              Precision cuts, glowing skin, bridal glamour — this is what a visit feels like.
              The photos shown are representative of the services offered at the salon.
            </p>
          </Fade>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              { src: IMG.hero, cap: 'The salon floor' },
              { src: IMG.gentsBright, cap: 'Gents grooming' },
              { src: IMG.bridal, cap: 'Bridal makeup' },
              { src: IMG.facial, cap: 'Facials & skin care' },
              { src: IMG.hair, cap: 'Hair styling' },
              { src: IMG.nails, cap: 'Nails & care' },
            ].map((g, i) => (
              <Fade key={g.cap} delay={0.05 * i}>
                <figure className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={g.src}
                    alt={g.cap}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-3 pt-10 text-sm font-bold">
                    {g.cap}
                  </figcaption>
                </figure>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews (Magic UI Marquee) ──────────── */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Fade>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-golddark">
                Customer Reviews
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                Loved across Chittagong.
              </h2>
              <div className="mt-8 flex items-end gap-3">
                <span className="font-display text-7xl font-bold">
                  <NumberTicker value={4.2} decimalPlaces={1} className="text-ink dark:text-ink" />
                </span>
                <div className="pb-2">
                  <p className="flex items-center gap-1 text-2xl tracking-wide text-gold">
                    <Star className="h-5 w-5 fill-gold" />
                    <Star className="h-5 w-5 fill-gold" />
                    <Star className="h-5 w-5 fill-gold" />
                    <Star className="h-5 w-5 fill-gold" />
                    <Star className="h-5 w-5" />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink/60">from ~1,630 reviews</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-ink/70">
                Customers praise the service, the staff and the salon itself — and call it the best
                men&rsquo;s salon in the city. Reviews below are published customer reviews from
                Google and review sites.
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/40 bg-cream px-5 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-goldlight">
                  MS
                </span>
                <div>
                  <p className="font-bold">Md Shahed</p>
                  <p className="text-sm text-ink/60">★★★★★ · Google review</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="space-y-4">
              <Marquee pauseOnHover className="[--duration:45s]">
                {REVIEWS.map((q, i) => (
                  <blockquote
                    key={i}
                    className="mx-2 flex w-[300px] flex-col justify-between rounded-2xl border border-ink/12 bg-white p-6 shadow-sm sm:w-[380px]"
                  >
                    <p className="leading-relaxed text-ink/80">&ldquo;{q}&rdquo;</p>
                    <footer className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-bold text-golddark">Customer review</span>
                      <span className="tracking-wide text-gold">★★★★★</span>
                    </footer>
                  </blockquote>
                ))}
              </Marquee>
              <Marquee pauseOnHover reverse className="[--duration:45s]">
                {[...REVIEWS].reverse().map((q, i) => (
                  <blockquote
                    key={i}
                    className="mx-2 flex w-[300px] flex-col justify-between rounded-2xl border border-ink/12 bg-white p-6 shadow-sm sm:w-[380px]"
                  >
                    <p className="leading-relaxed text-ink/80">&ldquo;{q}&rdquo;</p>
                    <footer className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-bold text-golddark">Customer review</span>
                      <span className="tracking-wide text-gold">★★★★★</span>
                    </footer>
                  </blockquote>
                ))}
              </Marquee>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Branches ────────────────────────────── */}
      <section id="branches" className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Fade>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-golddark">Visit Us</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Three branches. One standard.
            </h2>
            <p className="mt-4 max-w-2xl text-ink/70">
              All branches open daily, 10:00 AM – 9:00 PM. Call the branch to book — or just walk in.
            </p>
          </Fade>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'GEC Circle — Main',
                section: 'Gents & Ladies',
                address: '3rd Floor, Equity Centrium, O.R. Nizam Road, GEC Circle, Chittagong 4000',
                phone: PHONE_GEC,
                display: '01611-070703',
              },
              {
                name: '2 No Gate — Nasirabad',
                section: 'Gents',
                address: '3rd Floor, Yakub Trade Center, beside Badshah Miah Petrol Pump, 2 No Gate, Chittagong',
                phone: PHONE_GATE,
                display: '01880-011119',
              },
              {
                name: 'Khulshi',
                section: 'Gents',
                address: 'Full street address available from the branch — call for directions.',
                phone: PHONE_KHULSHI,
                display: '01854-11 11 63',
              },
            ].map((b, i) => (
              <Fade key={b.name} delay={0.08 * i}>
                <article className="h-full rounded-2xl border border-ink/12 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-golddark">
                    <MapPin className="h-3.5 w-3.5" /> {b.section}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{b.name}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{b.address}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink/60">
                    <Clock className="h-4 w-4" /> Open daily · 10:00 AM – 9:00 PM
                  </p>
                  <a
                    href={`tel:${b.phone}`}
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-center font-bold text-goldlight transition hover:bg-coal"
                  >
                    <Phone className="h-4 w-4" /> Call {b.display}
                  </a>
                </article>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ─────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-16 text-center text-cream md:py-24">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${IMG.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4">
          <Fade>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-goldlight">
              Book Your Appointment
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
              Ready for your new look?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
              Call your nearest branch, message the salon on Facebook, or simply walk in. Your chair
              is waiting.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ShinyButton
                className="rounded-full border-gold bg-gold px-8 py-3.5 font-bold text-ink"
                onClick={() => {
                  window.location.href = `tel:${PHONE_GEC}`;
                }}
              >
                Call 01611-070703
              </ShinyButton>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-goldlight/70 px-8 py-3.5 font-bold text-goldlight transition hover:bg-goldlight hover:text-ink"
              >
                Message on Facebook
              </a>
            </div>
            <p className="mt-6 text-sm text-cream/60">
              Walk-ins welcome · Card payments accepted · Open daily 10 AM – 9 PM
            </p>
          </Fade>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="bg-ink pb-10 pt-14 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center border border-gold bg-coal font-display text-xl font-bold text-goldlight">
                  HT
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-lg font-bold tracking-wide">
                    HABIB TAZKIRA&rsquo;S
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-goldlight/70">
                    Relax · Revive · Restore
                  </span>
                </span>
              </div>
              <p className="mt-5 max-w-sm leading-relaxed text-cream/65">
                A franchise salon of Jawed Habib, Mumbai — hair, beauty and makeup for men and
                women in Chittagong.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-goldlight">Explore</p>
              <ul className="mt-4 space-y-2.5 font-medium text-cream/75">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="transition hover:text-goldlight">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-goldlight">Contact</p>
              <ul className="mt-4 space-y-2.5 text-cream/75">
                <li>GEC Circle — 01611-070703</li>
                <li>2 No Gate — 01880-011119</li>
                <li>Khulshi — 01854-11 11 63</li>
                <li>Open daily · 10:00 AM – 9:00 PM</li>
                <li>
                  <a href={FACEBOOK} target="_blank" rel="noreferrer" className="font-semibold text-goldlight hover:underline">
                    facebook.com/habibitazkiras
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="gold-line mt-12 opacity-40" />
          <p className="mt-6 text-center text-sm text-cream/45">
            © 2026 Habib Tazkira&rsquo;s · A franchise salon of Jawed Habib, Mumbai · Chittagong, Bangladesh
          </p>
        </div>
      </footer>
    </main>
  );
}
