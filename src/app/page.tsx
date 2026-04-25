import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'
import StatsSection from '@/components/StatsSection'

export const metadata: Metadata = {
  title: 'Gateway Capital | Small Business Funding — Up to $5M',
  description: 'Gateway Capital is your gateway to business funding. SBA loans, term loans, lines of credit, equipment financing and more. Apply in 2 minutes. Decisions in 24 hours.',
}

const PRODUCTS = [
  { icon: '🏛️', name: 'SBA Loans', desc: 'Government-backed financing with the lowest long-term rates available to small businesses.', amount: 'Up to $5M', tag: 'Lowest Rates', tagColor: 'text-emerald-600 bg-emerald-50' },
  { icon: '📈', name: 'Term Loans', desc: 'Fixed capital for large investments — expansion, hiring, renovations. Same-day funding available.', amount: '$25K – $2M', tag: 'Same Day', tagColor: 'text-blue-600 bg-blue-50' },
  { icon: '💳', name: 'Lines of Credit', desc: 'Revolving credit you draw as needed. Pay interest only on what you use.', amount: 'Up to $1M', tag: 'Revolving', tagColor: 'text-violet-600 bg-violet-50' },
  { icon: '⚙️', name: 'Equipment Financing', desc: 'Finance up to 100% of equipment costs. The asset is the collateral — keep cash liquid.', amount: 'Up to $5M', tag: '100% Financing', tagColor: 'text-orange-600 bg-orange-50' },
  { icon: '📋', name: 'Invoice Financing', desc: 'Stop waiting 30–90 days to get paid. Unlock the cash in your outstanding invoices.', amount: 'Up to 90%', tag: '24-Hour Funding', tagColor: 'text-emerald-600 bg-emerald-50' },
  { icon: '⚡', name: 'Merchant Cash Advance', desc: 'Fast capital based on future revenue. Repay as a % of daily sales — no fixed payment.', amount: '$5K – $750K', tag: 'Fastest Option', tagColor: 'text-amber-600 bg-amber-50' },
]

const STEPS = [
  { num: '01', title: 'Apply in 2 Minutes', desc: 'Basic business info. No hard credit pull to start.' },
  { num: '02', title: 'Get Matched', desc: 'We identify the best products and lenders for your profile.' },
  { num: '03', title: 'Review Your Offer', desc: 'Multiple competitive offers — every term explained clearly.' },
  { num: '04', title: 'Get Funded', desc: 'Funds hit your account — same day or within 24 hours.' },
]

const REVIEWS = [
  { text: 'Quick and seamless from start to finish. Jesse listened to exactly what we needed and found the perfect plan.', author: 'Maria T.', biz: 'Restaurant Owner, FL' },
  { text: "Within 32 hours we were approved and funded. I truly believe that was because of our agent's dedication.", author: 'David K.', biz: 'IT Services, TX' },
  { text: 'Fast, efficient, money deposited faster than expected. Will definitely be back for future funding.', author: 'Alex R.', biz: 'Retail Business, NY' },
  { text: 'Five days from first call to funding. Helpful and quick the whole way through. Highly recommend.', author: 'Carlos M.', biz: 'Construction, CA' },
  { text: 'Got us the loan expeditiously and smoothly. Now our growth has no ceiling.', author: 'Jennifer W.', biz: 'E-commerce, GA' },
]

export default function HomePage() {
  return (
    <>
      <SmartBar />
      <Nav />
      <MobileCTA />

      {/* pt-[100px] = 36px SmartBar + 64px Nav */}
      <main className="pt-[100px]">

        {/* ── HERO ── */}
        <section className="relative min-h-[calc(100vh-100px)] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-white overflow-hidden pb-24 pt-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: 'radial-gradient(circle, #1B4FD8 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-3 py-1.5 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Funding decisions in under 24 hours</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-slate-900 leading-[1.05] tracking-tight mb-5">
                Your Gateway to{' '}
                <span className="text-blue-600">Business</span>{' '}
                Funding
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Access up to <strong className="text-slate-700">$5 million</strong> across 6+ funding products — matched by real specialists and funded in as little as 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
                >
                  Get Funded Today →
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 transition-all hover:border-blue-200"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {['⭐ 4.8 Trustpilot', '✅ BBB Accredited', '🔒 No Hard Credit Pull', '⚡ Same-Day Funding'].map(t => (
                  <span key={t} className="text-xs font-medium text-slate-500">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — card */}
            <div className="relative">
              <div className="absolute -top-4 right-0 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3 z-10">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">Same-Day Funding</div>
                  <div className="text-xs text-slate-400">For qualifying businesses</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-blue-600/10 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-3xl" />
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">Funding Preview</div>
                <div className="font-display font-extrabold text-5xl text-slate-900 tracking-tight mb-5">
                  $<span className="text-blue-600">250,000</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[{ val: '24hr', label: 'Avg. Funding' }, { val: '6+', label: 'Products' }, { val: '3,200+', label: 'Funded' }, { val: '$500M+', label: 'Deployed' }].map(s => (
                    <div key={s.label} className="bg-blue-50 rounded-xl p-3">
                      <div className="font-display font-bold text-xl text-blue-600 leading-none mb-1">{s.val}</div>
                      <div className="text-xs text-slate-500">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                    <span>Match strength</span>
                    <span className="text-emerald-600 font-semibold">87% matched</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                  </div>
                </div>
                <Link
                  href="/apply"
                  className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 rounded-xl px-5 py-3.5 transition-all group"
                >
                  <div>
                    <div className="text-sm font-bold text-white">Start Your Application</div>
                    <div className="text-xs text-blue-200">Free · No hard credit pull</div>
                  </div>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              <div className="absolute -bottom-4 left-0 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3 z-10">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">Fortune Best Workplace</div>
                  <div className="text-xs text-slate-400">#19 Nationally · 2025</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsSection />

        {/* ── PRODUCTS ── */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                The right capital for <span className="text-blue-600">every business</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">One application. Multiple lenders. Matched to the best product for your situation.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {PRODUCTS.map(p => (
                <Link key={p.name} href="/apply"
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

            <div className="bg-blue-600 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-xl text-white mb-1">Not sure which product fits?</div>
                <p className="text-blue-200 text-sm">Our specialists find the right match — one conversation is all it takes.</p>
              </div>
              <Link href="/apply" className="shrink-0 bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap">
                Apply Free — We&apos;ll Match You →
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />How It Works<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Funded in <span className="text-blue-600">4 simple steps</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative bg-white rounded-2xl p-6 border border-slate-200">
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10 text-slate-300 text-lg font-bold">→</div>
                  )}
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm mb-4">{step.num}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Start Step 1 Now — It&apos;s Free →
              </Link>
              <p className="mt-3 text-xs text-slate-400">No hard credit pull · No commitment · 2 minutes</p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section id="why-us" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Client Stories<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Real businesses. <span className="text-blue-600">Real results.</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="font-bold text-slate-800">4.8</span>
                <span className="text-slate-400 text-sm">· 3,200+ verified reviews</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {REVIEWS.map(r => (
                <div key={r.author} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-yellow-400 text-sm mb-3 tracking-wider">★★★★★</div>
                  <p className="text-sm text-slate-600 italic leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <div className="font-semibold text-sm text-slate-800">{r.author}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{r.biz}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 flex flex-wrap items-center justify-around gap-4">
              {[
                { icon: '🏆', name: 'Fortune Best Workplaces', sub: 'Financial Services · #30' },
                { icon: '⭐', name: '4.8 Trustpilot', sub: '3,200+ Reviews' },
                { icon: '✅', name: 'BBB Accredited', sub: 'Standards for Trust' },
                { icon: '🔒', name: 'Bank-Level Security', sub: '256-bit SSL' },
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

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Your next level starts today.
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Join 3,200+ businesses that have opened the gateway to growth. Apply in 2 minutes — no hard credit pull.
            </p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all hover:shadow-2xl hover:-translate-y-1">
              Apply Now — It&apos;s Free →
            </Link>
            <p className="mt-4 text-blue-300/70 text-sm">Decisions within 24 hours · Up to $5M · 6+ products</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
