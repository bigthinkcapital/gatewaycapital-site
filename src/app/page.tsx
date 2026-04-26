import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'
import StatsSection from '@/components/StatsSection'

export const metadata: Metadata = {
  title: 'Gateway Capital | Get Matched to Business Lenders — Up to $5M',
  description:
    'Gateway Capital matches your business to the right lenders and brokers — fast. One application, multiple competitive offers, you choose the best. SBA loans, term loans, lines of credit and more. Apply in 2 minutes.',
}

const PRODUCTS = [
  { icon: '🏛️', name: 'SBA Loans', desc: 'We match you with SBA-approved lenders for the lowest long-term rates available — government-backed, specialist-sourced.', amount: 'Up to $5M', tag: 'Lowest Rates', tagColor: 'text-emerald-600 bg-emerald-50' },
  { icon: '📈', name: 'Term Loans', desc: 'Fixed capital from our lender network. We surface competing offers so you get the best rate for expansion, hiring, or growth.', amount: '$25K – $2M', tag: 'Same Day', tagColor: 'text-blue-600 bg-blue-50' },
  { icon: '💳', name: 'Lines of Credit', desc: 'Revolving credit matched to your cash flow needs. Draw what you need, pay interest only on usage — sourced from multiple lenders.', amount: 'Up to $1M', tag: 'Revolving', tagColor: 'text-violet-600 bg-violet-50' },
  { icon: '⚙️', name: 'Equipment Financing', desc: 'We route your application to equipment specialists who finance up to 100% of asset cost — the asset is the collateral.', amount: 'Up to $5M', tag: '100% Financing', tagColor: 'text-orange-600 bg-orange-50' },
  { icon: '📋', name: 'Invoice Financing', desc: 'Stop waiting 30–90 days to get paid. We connect you to invoice specialists who unlock your outstanding receivables same day.', amount: 'Up to 90%', tag: '24-Hour Funding', tagColor: 'text-emerald-600 bg-emerald-50' },
  { icon: '⚡', name: 'Merchant Cash Advance', desc: 'Revenue-based capital matched from our MCA broker network. Fastest path to working capital — repay as a % of daily sales.', amount: '$5K – $750K', tag: 'Fastest Option', tagColor: 'text-amber-600 bg-amber-50' },
]

const STEPS = [
  {
    num: '01',
    title: 'One Application',
    desc: 'Fill out a single 2-minute form. No hard credit pull. Your data is securely routed to our matching engine.',
    icon: '📋',
  },
  {
    num: '02',
    title: 'Smart Matching',
    desc: 'Our algorithm instantly matches your profile to the right lenders and brokers from our vetted network.',
    icon: '⚡',
  },
  {
    num: '03',
    title: 'Multiple Offers',
    desc: 'Receive competitive offers side by side. Our specialists walk you through every term — no surprises.',
    icon: '📊',
  },
  {
    num: '04',
    title: 'You Choose & Get Funded',
    desc: 'Pick the offer that works best for you. Funds hit your account — often same day, always within 24 hours.',
    icon: '✅',
  },
]

const REVIEWS = [
  { text: 'Gateway matched us to three lenders in minutes. We picked the best rate and were funded the next morning. The process was completely transparent.', author: 'Maria T.', biz: 'Restaurant Owner, FL' },
  { text: 'Within 32 hours we had multiple offers on the table and were fully funded. The matching technology is impressive — they knew exactly what we needed.', author: 'David K.', biz: 'IT Services, TX' },
  { text: 'I applied once and got connected to the right lender immediately. Faster and more transparent than anything I had tried before.', author: 'Alex R.', biz: 'Retail Business, NY' },
  { text: 'Five days from application to funding. They matched us to a specialist in construction lending — made all the difference in getting approved.', author: 'Carlos M.', biz: 'Construction, CA' },
  { text: 'The broker they connected us with found terms we never could have sourced on our own. Now our growth has no ceiling.', author: 'Jennifer W.', biz: 'E-commerce, GA' },
]

const LENDER_LOGOS = [
  { name: 'SBA Approved', sub: 'Lender Network' },
  { name: 'Regional Banks', sub: '50+ Partners' },
  { name: 'Alt. Lenders', sub: 'Fast Approval' },
  { name: 'Credit Unions', sub: 'Low Rates' },
  { name: 'Broker Network', sub: 'Nationwide' },
]

export default function HomePage() {
  return (
    <>
      <SmartBar />
      <Nav />
      <MobileCTA />

      <main className="pt-[100px]">

        {/* ── HERO ── */}
        <section className="relative min-h-[calc(100vh-100px)] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-white overflow-hidden pb-24 pt-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #1B4FD8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-3 py-1.5 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Matching businesses to lenders in real time</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-slate-900 leading-[1.05] tracking-tight mb-5">
                One application.{' '}
                <span className="text-blue-600">Multiple offers.</span>{' '}
                You pick the best.
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Gateway Capital intelligently matches your business to the right lenders and brokers from our vetted network — so you get <strong className="text-slate-700">competing offers</strong> and always the best terms. Up to <strong className="text-slate-700">$5 million</strong> across 6+ products.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  Get My Offers →
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 transition-all hover:border-blue-200"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {['⭐ 4.8 Trustpilot', '✅ BBB Accredited', '🔒 No Hard Credit Pull', '🤝 50+ Lender Partners'].map(t => (
                  <span key={t} className="text-xs font-medium text-slate-500">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — Offer matching card */}
            <div className="relative">
              <div className="absolute -top-4 right-0 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3 z-10">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">Live Matching Engine</div>
                  <div className="text-xs text-slate-400">50+ lenders · Real-time routing</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-blue-600/10 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-3xl" />

                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Your Offer Match Preview</div>

                {/* Simulated offer comparison */}
                <div className="space-y-2.5 mb-5">
                  {[
                    { lender: 'Lender A', rate: '6.2%', amount: '$250,000', time: '24hr', match: 98, best: true },
                    { lender: 'Lender B', rate: '7.8%', amount: '$220,000', time: '48hr', match: 91, best: false },
                    { lender: 'Lender C', rate: '8.5%', amount: '$275,000', time: '72hr', match: 85, best: false },
                  ].map(offer => (
                    <div
                      key={offer.lender}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-all ${
                        offer.best
                          ? 'border-blue-200 bg-blue-50'
                          : 'border-slate-100 bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${offer.best ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                          {offer.lender.split(' ')[1]}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-700">{offer.amount}</div>
                          <div className="text-xs text-slate-400">{offer.rate} APR · {offer.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className={`text-xs font-bold ${offer.best ? 'text-blue-600' : 'text-slate-400'}`}>{offer.match}% match</div>
                        </div>
                        {offer.best && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">Best</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>Matching across network</span>
                  <span className="text-emerald-600 font-semibold">50+ lenders scanned</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-5">
                  <div className="h-full w-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
                </div>

                <Link
                  href="/apply"
                  className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 rounded-xl px-5 py-3.5 transition-all group"
                >
                  <div>
                    <div className="text-sm font-bold text-white">Get My Real Offers</div>
                    <div className="text-xs text-blue-200">Free · No hard credit pull · 2 min</div>
                  </div>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              <div className="absolute -bottom-4 left-0 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3 z-10">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">4.8 Trustpilot Rating</div>
                  <div className="text-xs text-slate-400">3,200+ verified reviews</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsSection />

        {/* ── HOW THE MARKETPLACE WORKS ── */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />How It Works<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Our matching engine does the heavy lifting
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-base">
                One application. Intelligent routing. Competing offers from lenders and brokers who actually want your business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10 text-slate-300 text-lg font-bold">→</div>
                  )}
                  <div className="text-2xl mb-3">{step.icon}</div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">Step {step.num}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Start Matching Now — It&apos;s Free →
              </Link>
              <p className="mt-3 text-xs text-slate-400">No hard credit pull · No commitment · See your offers in minutes</p>
            </div>
          </div>
        </section>

        {/* ── LENDER NETWORK ── */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Our Network<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
                50+ lenders and brokers competing for your business
              </h2>
              <p className="text-slate-500 text-sm max-w-lg mx-auto">
                We&apos;ve built relationships with SBA lenders, regional banks, alternative lenders, credit unions, and specialist brokers — so you never have to shop around yourself.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {[
                { icon: '🏛️', name: 'SBA Lenders', sub: 'Government-backed' },
                { icon: '🏦', name: 'Regional Banks', sub: 'Competitive rates' },
                { icon: '⚡', name: 'Alt. Lenders', sub: 'Fast approvals' },
                { icon: '🤝', name: 'Brokers', sub: 'Specialist access' },
                { icon: '💳', name: 'Credit Unions', sub: 'Low-cost capital' },
              ].map(l => (
                <div key={l.name} className="bg-white border border-slate-200 rounded-2xl p-5 text-center hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="text-3xl mb-2">{l.icon}</div>
                  <div className="text-sm font-bold text-slate-800">{l.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{l.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-xl text-white mb-1">Let the lenders compete for you.</div>
                <p className="text-blue-200 text-sm">One application routes to every relevant lender in our network. You see the best offers, not just the first one available.</p>
              </div>
              <Link href="/apply" className="shrink-0 bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap">
                Get My Offers Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Matched to the right product,{' '}
                <span className="text-blue-600">every time</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Our engine routes your profile to lenders who specialize in exactly what you need — not generic offers that don&apos;t fit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {PRODUCTS.map(p => (
                <Link
                  key={p.name}
                  href="/apply"
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/8 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition-colors">{p.icon}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-600">{p.amount}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-xl text-white mb-1">Not sure which product is right?</div>
                <p className="text-slate-400 text-sm">Apply once — our matching engine figures out which lenders and products fit your profile. No guesswork, no wasted time.</p>
              </div>
              <Link href="/apply" className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap">
                Let Us Match You →
              </Link>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section id="why-us" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Client Stories<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Real businesses. <span className="text-blue-600">Better offers.</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="font-bold text-slate-800">4.8</span>
                <span className="text-slate-400 text-sm">· 3,200+ verified reviews</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {REVIEWS.map(r => (
                <div key={r.author} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-yellow-400 text-sm mb-3 tracking-wider">★★★★★</div>
                  <p className="text-sm text-slate-600 italic leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <div className="font-semibold text-sm text-slate-800">{r.author}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{r.biz}</div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl px-6 py-5 flex flex-wrap items-center justify-around gap-4">
              {[
                { icon: '⭐', name: '4.8 Trustpilot Rating', sub: '3,200+ Verified Reviews' },
                { icon: '✅', name: 'BBB Accredited', sub: 'Standards for Trust' },
                { icon: '🔒', name: 'Bank-Level Security', sub: '256-bit SSL Encryption' },
                { icon: '🤝', name: '50+ Lender Partners', sub: 'Vetted & Competing' },
              ].map(a => (
                <div key={a.name} className="flex items-center gap-3">
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800">{a.name}</div>
                    <div className="text-xs text-slate-400">{a.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY GATEWAY ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Why Gateway Capital<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                The smarter way to{' '}
                <span className="text-blue-600">get business funding</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '🧠', title: 'Intelligent Matching', desc: 'Our engine analyzes your profile and routes your application to the lenders and brokers most likely to approve and fund you — instantly.' },
                { icon: '⚖️', title: 'Competing Offers', desc: 'Instead of accepting the first offer you find, lenders in our network compete for your business. You always see multiple options side by side.' },
                { icon: '🔍', title: 'Full Transparency', desc: 'Every rate, fee, and term explained in plain language before you commit to anything. No hidden costs, no fine print surprises.' },
                { icon: '⚡', title: 'Speed Through Tech', desc: 'What used to take weeks of bank visits and paperwork now takes minutes. Our technology eliminates the friction from business lending.' },
                { icon: '🤝', title: 'Expert Guidance', desc: 'Our funding specialists sit on your side of the table — not the lender\'s. They help you understand and negotiate the best deal for you.' },
                { icon: '🔒', title: 'Secure & Private', desc: 'Bank-level 256-bit encryption on every application. We never sell your data. Your information is used only to match you to funding.' },
              ].map(f => (
                <div key={f.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          </div>
          <div className="relative max-w-3xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-white">Matching engine active — offers in minutes</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Let lenders compete<br />for your business.
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              One free application. Matched to 50+ lenders and brokers. You see every offer, choose the best terms, and get funded in as little as 24 hours.
            </p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all hover:shadow-2xl hover:-translate-y-1">
              Get My Offers — It&apos;s Free →
            </Link>
            <p className="mt-4 text-blue-300/70 text-sm">No hard credit pull · No commitment · Decisions within 24 hours</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
