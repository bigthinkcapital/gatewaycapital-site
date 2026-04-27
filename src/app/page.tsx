import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'
import StatsSection from '@/components/StatsSection'
import ApplyForm from '@/components/ApplyForm'

export const metadata: Metadata = {
  title: 'Gateway Capital | Small Business Loans & Funding Marketplace',
  description:
    'Gateway Capital matches small businesses with top lenders competing to fund them. One application — SBA loans, term loans, lines of credit, equipment financing, invoice financing, and working capital. Apply in 2 minutes.',
}

/* ── Animated hero widget ─────────────────────────────────────────── */
function MatchingWidget() {
  const offers = [
    { label: 'A', amount: '$250,000', rate: '6.2% APR', speed: '24hr', match: 98, best: true,  color: '#1e3369' },
    { label: 'B', amount: '$220,000', rate: '7.8% APR', speed: '48hr', match: 91, best: false, color: '#64748b' },
    { label: 'C', amount: '$275,000', rate: '8.5% APR', speed: '72hr', match: 85, best: false, color: '#64748b' },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">

      {/* Floating badge top-right */}
      <div className="absolute -top-4 -right-2 z-10 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2">
        <span className="text-orange-400 text-base">⚡</span>
        <div>
          <div className="text-xs font-bold text-slate-800 leading-tight">Live Matching Engine</div>
          <div className="text-[10px] text-slate-400">50+ lenders · Real-time routing</div>
        </div>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">

        {/* Progress bar header */}
        <div className="h-1.5 bg-slate-100">
          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 animate-pulse" style={{ width: '85%' }} />
        </div>

        <div className="p-5">
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">
            Your Offer Match Preview
          </div>

          {/* Offer rows */}
          <div className="space-y-2.5 mb-4">
            {offers.map((o) => (
              <div
                key={o.label}
                className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                  o.best ? 'bg-blue-50 border border-blue-100' : 'bg-slate-50 border border-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: o.color }}
                  >
                    {o.label}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${o.best ? 'text-slate-900' : 'text-slate-700'}`}>
                      {o.amount}
                    </div>
                    <div className="text-[11px] text-slate-400">{o.rate} · {o.speed}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${o.best ? 'text-blue-600' : 'text-slate-400'}`}>
                    {o.match}% match
                  </span>
                  {o.best && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Best
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Animated bar chart */}
          <div className="bg-slate-50 rounded-xl p-3 mb-4">
            <div className="flex items-end justify-between gap-1.5 h-14">
              {[38, 55, 72, 61, 84, 70, 90, 78, 95, 88, 100, 92].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 10 ? '#1e3369' : i >= 8 ? '#3b5ea6' : '#93b4d8',
                    opacity: 0.7 + (i / 10) * 0.3,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-slate-400">Matching across network</span>
              <span className="text-[10px] font-bold text-emerald-600">50+ lenders scanned</span>
            </div>
            <div className="h-1 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>

          {/* CTA button */}
          <Link
            href="/apply"
            className="flex items-center justify-between w-full text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all hover:opacity-90"
            style={{ backgroundColor: '#1e3369' }}
          >
            <div>
              <div>Get My Real Offers</div>
              <div className="text-xs font-normal opacity-70">Free · No hard credit pull · 2 min</div>
            </div>
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">→</span>
          </Link>
        </div>
      </div>

      {/* Floating Trustpilot badge */}
      <div className="absolute -bottom-4 left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2">
        <span className="text-yellow-400 text-base">★</span>
        <div>
          <div className="text-xs font-bold text-slate-800 leading-tight">4.8 Trustpilot Rating</div>
          <div className="text-[10px] text-slate-400">3,200+ verified reviews</div>
        </div>
      </div>
    </div>
  )
}

/* ── Money counter animation component ───────────────────────────── */
function MoneyTicker() {
  return (
    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1.5 mb-6">
      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
      <span className="text-xs font-semibold text-emerald-700">Matching businesses to lenders in real time</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <SmartBar />
      <Nav />
      <MobileCTA />

      <main>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="min-h-[calc(100vh-100px)] bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 px-5 pt-20 pb-24 flex items-center">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — headline + CTAs */}
            <div>
              <MoneyTicker />

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-slate-900 tracking-tight leading-[1.05] mb-6">
                One application.<br />
                <span style={{ color: '#2563eb' }}>Multiple offers.</span><br />
                You pick the best.
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Gateway Capital matches your business to lenders and brokers who compete for you — so you always get the best available terms. Up to{' '}
                <strong className="text-slate-700">$5 million</strong> across 6+ products.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#1e3369' }}
                >
                  Get My Offers →
                </Link>
                <Link
                  href="/#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  See How It Works
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  { icon: '⭐', text: '4.8 Trustpilot' },
                  { icon: '✅', text: 'BBB Accredited' },
                  { icon: '🔒', text: 'No Hard Credit Pull' },
                  { icon: '🏦', text: '50+ Lender Partners' },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-1.5">
                    <span className="text-sm">{b.icon}</span>
                    <span className="text-xs font-semibold text-slate-500">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — animated matching widget */}
            <div className="hidden lg:block pt-6 pb-6">
              <MatchingWidget />
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────────── */}
        <StatsSection />

        {/* ── HOW IT WORKS ──────────────────────────────────────── */}
        <section id="how-it-works" className="py-20 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />The Process<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                How Gateway Capital works
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                We do the shopping. You do the picking.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'One 2-minute application', desc: 'Tell us about your business, your revenue, and what you need. No hard credit pull. No commitment.' },
                { num: '02', title: 'We match & route', desc: 'Our engine instantly matches your profile to lenders and brokers in our network who specialize in your funding type.' },
                { num: '03', title: 'Pick your best offer', desc: 'Review competing offers side by side. Transparent rates, terms, and fees. You choose — we fund in as little as 24 hours.' },
              ].map(step => (
                <div key={step.num} className="relative bg-slate-50 border border-slate-200 rounded-2xl p-7">
                  <div className="font-display font-extrabold text-4xl mb-4" style={{ color: '#1e336920' }}>{step.num}</div>
                  <div className="font-display font-bold text-base text-slate-900 mb-2">{step.title}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ──────────────────────────────────────────── */}
        <section className="py-20 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                6 products. One application.
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Not sure which is right? Apply once — our engine recommends the best fit and routes you to the right lenders.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '🏛️', name: 'SBA Loans', slug: 'sba-loans', desc: 'Lowest rates available. Up to $5M, up to 25-year terms.', tag: 'From 6.5% APR' },
                { icon: '📈', name: 'Term Loans', slug: 'term-loans', desc: 'Fixed payments, fast approval, same-day funding available.', tag: 'From 7.9% APR' },
                { icon: '💳', name: 'Lines of Credit', slug: 'lines-of-credit', desc: 'Revolving access up to $1M. Pay only on what you use.', tag: 'From 8.5% APR' },
                { icon: '⚙️', name: 'Equipment Financing', slug: 'equipment-financing', desc: '100% financing. The asset is the collateral.', tag: 'From 5.9% APR' },
                { icon: '📋', name: 'Invoice Financing', slug: 'invoice-financing', desc: 'Advance up to 90% of outstanding invoices today.', tag: '1–5% fee' },
                { icon: '⚡', name: 'Working Capital', slug: 'working-capital', desc: 'Same-day funding. Revenue-based repayment.', tag: 'Same day' },
              ].map(p => (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <div className="font-display font-bold text-base text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{p.name}</div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{p.desc}</p>
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{p.tag}</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                View all funding products →
              </Link>
            </div>
          </div>
        </section>

        {/* ── LENDER NETWORK ────────────────────────────────────── */}
        <section className="py-16 bg-white px-5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
              <span className="w-5 h-px bg-blue-600" />Our Network<span className="w-5 h-px bg-blue-600" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-3">
              50+ lenders compete for your business
            </h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto">
              Banks, credit unions, SBA lenders, alternative lenders, and specialist brokers — all in one network, all competing to fund you.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
              {[
                { label: 'SBA Lenders', count: '12+' },
                { label: 'Alt Lenders', count: '20+' },
                { label: 'Equipment Specialists', count: '8+' },
                { label: 'Invoice Factors', count: '10+' },
              ].map(n => (
                <div key={n.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                  <div className="font-display font-extrabold text-2xl mb-1" style={{ color: '#1e3369' }}>{n.count}</div>
                  <div className="text-xs text-slate-500 font-medium">{n.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ───────────────────────────────────────────── */}
        <section className="py-20 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Reviews<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-2">
                4.8 stars across 3,200+ reviews
              </h2>
              <p className="text-slate-500">Real businesses, real results.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { name: 'Marcus T.', biz: 'Restaurant Owner, Atlanta', review: 'Applied on a Monday, had three offers by Tuesday afternoon. Took the SBA loan at 6.9% — saved us from a much worse option we were about to accept.', stars: 5 },
                { name: 'Sarah K.', biz: 'Construction Co., Denver', review: 'The matching engine is no joke. Sent our profile to lenders who actually work with contractors. Funded $400K equipment loan in 48 hours.', stars: 5 },
                { name: 'David R.', biz: 'Med Spa Owner, Miami', review: "Tried two banks first — both said no. Gateway matched us to a lender who specializes in healthcare. Funded in a week. Couldn't be happier.", stars: 5 },
              ].map(r => (
                <div key={r.name} className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-0.5 mb-3 text-yellow-400 text-sm">
                    {'★'.repeat(r.stars)}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">&ldquo;{r.review}&rdquo;</p>
                  <div className="font-bold text-sm text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.biz}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY GATEWAY ───────────────────────────────────────── */}
        <section id="why-us" className="py-20 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Why Gateway<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                The smarter way to find business funding
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '🎯', title: 'Precision matching', desc: 'Our engine analyzes your profile and routes to lenders with the highest probability of approving and funding you.' },
                { icon: '⚡', title: 'Speed', desc: 'Same-day funding available on select products. Most businesses see offers within hours of applying.' },
                { icon: '💰', title: 'Competition', desc: 'Multiple lenders compete for your business. You always see the best available offer, not just the first one.' },
                { icon: '🔒', title: 'No hard credit pull', desc: 'We match you first, check credit later — after you\'ve seen offers and chosen to proceed.' },
                { icon: '📊', title: 'Full transparency', desc: 'Every offer shows full APR, fees, prepayment terms, and total cost. No surprises at signing.' },
                { icon: '🤝', title: 'Dedicated specialists', desc: 'A funding specialist guides you through every offer and answers every question — at no cost to you.' },
              ].map(f => (
                <div key={f.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <div className="font-display font-bold text-sm text-slate-900 mb-2">{f.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLY CTA ─────────────────────────────────────────── */}
        <section className="py-20 px-5" style={{ backgroundColor: '#1e3369' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-4xl text-white tracking-tight mb-3">
              Ready to find your best offer?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              One application. Matched to 50+ lenders. Funded in as little as 24 hours.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-white font-bold text-base px-9 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ color: '#1e3369' }}
            >
              Apply Free — 2 Minutes →
            </Link>
            <p className="text-blue-300 text-xs mt-4">No hard credit pull · No commitment · No cost to you</p>
          </div>
        </section>

        {/* ── APPLY FORM SECTION ────────────────────────────────── */}
        <section id="apply" className="py-20 bg-slate-50 px-5">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-2">
                Start your application
              </h2>
              <p className="text-slate-500">2 minutes. No hard credit pull. See your matches instantly.</p>
            </div>
            <ApplyForm />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
