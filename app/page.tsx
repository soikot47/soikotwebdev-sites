import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-cream">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">SoikotWebDev</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-6xl">
          Client websites.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/70">
          Finished websites built for real businesses — before the first message, so the
          business sees the work, not a promise.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/habib-tazkiras/"
            className="group rounded-2xl border border-gold/30 bg-coal p-8 transition hover:border-gold"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Site 01 — Salon, Chittagong
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold">Habib Tazkira&rsquo;s</h2>
            <p className="mt-2 text-cream/70">
              Hair, beauty &amp; bridal salon — 510K followers, 3 branches, franchise of
              Jawed Habib.
            </p>
            <span className="mt-5 inline-block font-bold text-goldlight group-hover:underline">
              View the website &rarr;
            </span>
          </Link>
          <div className="rounded-2xl border border-white/10 bg-coal/50 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cream/50">
              Site 02 — coming next
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream/50">
              Next business
            </h2>
            <p className="mt-2 text-cream/50">
              The next site is chosen from the ranked target list and built the same way —
              full research first, then a complete website.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
