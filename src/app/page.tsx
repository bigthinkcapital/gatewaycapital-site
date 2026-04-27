import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'
import StatsSection from '@/components/StatsSection'
import FloatingSymbols from '@/components/FloatingSymbols'

export const metadata: Metadata = {
  title: 'Gateway Capital | AI-Powered Business Lender Matching',
  description:
    'Gateway Capital uses artificial intelligence to match your business with the right lender or broker — fast, accurate, and tailored to your exact profile. Apply in 2 minutes.',
}

const PRODUCTS = [
  { icon: '🏛️', name: 'SBA Loans', desc: 'Our AI matches you to the right SBA-approved lender for the lowest long-term rates available — government-backed, precision-matched.', amount: 'Up to $5M', tag: 'Lowest Rates', tagColor: 'text-emerald-600 bg-emerald-50' },
  { icon: '📈', name: 'Term Loans', desc: 'Fixed capital, fast funding. Our AI surfaces the lender most likely to approve your profile at the best available rate.', amount: '$25K – $2M', tag: 'Same Day', tagColor: 'text-blue-600 bg-blue-50' },
  { icon: '💳', name: 'Lines of Credit', desc: 'Revolving credit matched to your cash flow needs. AI routes your application to the lender best suited for your business stage.', amount: 'Up to $1M', tag: 'Revolving', tagColor: 'text-violet-600 bg-violet-50' },
  { icon: '⚙️', name: 'Equipment Financing', desc: 'Our AI identifies the equipment specialist who finances your exact asset type — up to 100% of cost, asset as collateral.', amount: 'Up to $5M', tag: '100% Financing', tagColor: 'text-orange-600 bg-orange-50' },
  { icon: '📋', name: 'Invoice Financing', desc: 'Stop waiting to get paid. AI matches you to the invoice specialist who unlocks your receivables the same day.', amount: 'Up to 90%', tag: '24-Hour Funding', tagColor: 'text-emerald-600 bg-emerald-50' },
  { icon: '⚡', name: 'Working Capital', desc: 'Same-day capital, revenue-based repayment. Our AI finds the working capital provider best aligned to your daily revenue.', amount: '$5K – $750K', tag: 'Same Day', tagColor: 'text-amber-600 bg-amber-50' },
]

const STEPS = [
  { num: '01', title: 'You apply in 2 minutes', desc: 'Tell us about your business — revenue, time in business, what you need. No hard credit pull. Completely free.', icon: '📋' },
  { num: '02', title: 'AI analyzes your profile', desc: 'Our artificial intelligence engine scores your application across 40+ data points and identifies the single best-fit lender or broker for your exact situation.', icon: '🤖' },
  { num: '03', title: 'We introduce you', desc: 'We connect you directly to the lender or broker our AI selected — someone who specializes in exactly your funding type, industry, and profile.', icon: '🤝' },
  { num: '04', title: 'You get funded', desc: 'Work directly with your matched lender. Get the offer, sign, and receive funds — often the same day, always within 24 hours.', icon: '✅' },
]

const REVIEWS = [
  { text: 'They matched me to exactly the right SBA lender on the first try. My bank had already turned me down twice. Gateway\'s AI clearly knew something they didn\'t.', author: 'Maria T.', biz: 'Restaurant Owner, FL' },
  { text: 'Within 32 hours of applying I was introduced to a lender who specialized in IT services companies. Funded the same week. The match was incredibly precise.', author: 'David K.', biz: 'IT Services, TX' },
  { text: 'I\'d spent weeks applying to random lenders. Gateway matched me to the right one in minutes. It felt like someone actually read my application.', author: 'Alex R.', biz: 'Retail Business, NY' },
  { text: 'They found a construction lending specialist I never would have found on my own. Five days from first contact to funded. Unreal.', author: 'Carlos M.', biz: 'Construction, CA' },
  { text: 'The broker they connected us with understood our business immediately. Found terms I didn\'t think existed for a company our size.', author: 'Jennifer W.', biz: 'E-commerce, GA' },
]

const AI_FEATURES = [
  { icon: '🧠', title: '40+ data points analyzed', desc: 'Our AI evaluates your industry, revenue, time in business, credit profile, funding amount, and more — instantly.' },
  { icon: '🎯', title: 'Single best-fit match', desc: 'We don\'t send you a list to sort through. Our AI identifies the one lender or broker most likely to fund you on the best terms.' },
  { icon: '⚡', title: 'Results in seconds', desc: 'The matching process happens in real time. Most applicants are connected to their matched lender within minutes of applying.' },
  { icon: '📊', title: 'Learns from outcomes', desc: 'Every funded deal makes the AI smarter. Our model improves continuously based on what actually works for businesses like yours.' },
  { icon: '🏭', title: 'Industry-specific intelligence', desc: 'The AI knows that a restaurant owner needs different things than a tech founder. Your match is tailored to your exact sector.' },
  { icon: '🔄', title: 'Re-matches if needed', desc: 'If your first match isn\'t right, our AI re-evaluates and finds a better fit — at no cost to you.' },
]

export default function HomePage() {
  return (
    <>
      <SmartBar />
      <Nav />
      <MobileCTA />

      <main className="pt-[100px]">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative min-h-[calc(100vh-100px)] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-white overflow-hidden pb-24 pt-12">

          <FloatingSymbols />

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #1B4FD8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center w-full">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-3 py-1.5 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">AI-powered lender matching · Results in seconds</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] text-slate-900 leading-[1.05] tracking-tight mb-5">
                Our AI finds<br />
                <span style={{ color: '#1e3369' }}>the right lender</span><br />
                for your business.
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Gateway Capital uses <strong className="text-slate-700">artificial intelligence</strong> to analyze your business profile and match you with the exact lender or broker who is most likely to fund you — at the best available terms. One application. The right match. Fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                  style={{ backgroundColor: '#1e3369' }}
                >
                  Get My AI Match →
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-7 py-4 rounded-xl border border-slate-200 transition-all hover:border-blue-200"
                >
                  How the AI Works
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {['🤖 AI-Powered Matching', '⭐ 4.8 Trustpilot', '🔒 No Hard Credit Pull', '⚡ Results in Seconds'].map(t => (
                  <span key={t} className="text-xs font-medium text-slate-500">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — AI match card */}
            <div className="relative hidden md:block">
              <div className="absolute -top-4 right-0 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3 z-10">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">AI Matching Engine</div>
                  <div className="text-xs text-slate-400">Analyzing 40+ data points · Real-time</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-blue-600/10 p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-3xl" />

                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Your AI Match Preview</div>

                {/* AI analysis steps */}
                <div className="space-y-3 mb-5">
                  {[
                    { label: 'Industry analysis', val: 'Construction · 3yr', done: true },
                    { label: 'Revenue scoring', val: '$340K/yr · Strong', done: true },
                    { label: 'Product fit', val: 'Equipment Financing', done: true },
                    { label: 'Lender selection', val: 'Matching...', done: false },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none">
                      <span className="text-xs text-slate-500">{row.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-700">{row.val}</span>
                        {row.done
                          ? <span className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-[10px]">✓</span>
                          : <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin inline-block" />
                        }
                      </div>
                    </div>
                  ))}
                </div>

                {/* Match result */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Best Match Found</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0" style={{ backgroundColor: '#1e3369' }}>A</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Equipment Finance Specialist</div>
                      <div className="text-xs text-slate-500">Construction · 5.9% APR · 24–48hr funding</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-lg font-extrabold text-blue-600">98%</div>
                      <div className="text-[10px] text-slate-400">match score</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>AI confidence</span>
                  <span className="text-emerald-600 font-semibold">Very High</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-5">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" style={{ width: '96%' }} />
                </div>

                <Link
                  href="/apply"
                  className="flex items-center justify-between rounded-xl px-5 py-3.5 transition-all group text-white hover:opacity-90"
                  style={{ backgroundColor: '#1e3369' }}
                >
                  <div>
                    <div className="text-sm font-bold">Get My AI Match</div>
                    <div className="text-xs opacity-70">Free · No hard credit pull · 2 min</div>
                  </div>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">→</span>
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

        {/* ── STATS ─────────────────────────────────────────────── */}
        <StatsSection />

        {/* ── HOW THE AI WORKS ──────────────────────────────────── */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />The AI Process<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                How our AI finds <span style={{ color: '#1e3369' }}>your perfect lender</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                No guesswork. No generic lists. Our artificial intelligence analyzes your exact profile and connects you to the one lender or broker built for your situation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10 text-slate-300 text-lg font-bold">→</div>
                  )}
                  <div className="text-2xl mb-3">{step.icon}</div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#1e3369' }}>Step {step.num}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/apply"
                className="inline-flex items-center gap-2 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: '#1e3369' }}
              >
                Let the AI Match Me — Free →
              </Link>
              <p className="mt-3 text-xs text-slate-400">No hard credit pull · No commitment · Matched in seconds</p>
            </div>
          </div>
        </section>

        {/* ── AI FEATURES ───────────────────────────────────────── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />The Intelligence<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                What makes our AI different
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Most lending platforms show you a list and let you figure it out. We use AI to do the analysis and hand you a single, precision match.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {AI_FEATURES.map(f => (
                <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ backgroundColor: '#1e3369' }}>
              <div>
                <div className="font-display font-bold text-xl text-white mb-2">Stop searching. Let AI do it.</div>
                <p className="text-blue-200 text-sm max-w-lg">
                  Our AI has analyzed thousands of funded deals to learn exactly what each lender looks for. It applies that knowledge to your profile in seconds — and points you to the right door.
                </p>
              </div>
              <Link href="/apply" className="shrink-0 bg-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap" style={{ color: '#1e3369' }}>
                Get My Match Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ──────────────────────────────────────────── */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Our AI matches across <span style={{ color: '#1e3369' }}>6 funding products</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Tell us what you need — or let the AI decide. Either way, you get connected to the specialist best equipped to fund you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {PRODUCTS.map(p => (
                <Link key={p.name} href="/apply"
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all hover:-translate-y-1"
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
          </div>
        </section>

        {/* ── REVIEWS ───────────────────────────────────────────── */}
        <section id="why-us" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Results<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                The right match makes <span style={{ color: '#1e3369' }}>all the difference.</span>
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
                  <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                  <p className="text-sm text-slate-600 italic leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <div className="font-semibold text-sm text-slate-800">{r.author}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{r.biz}</div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl px-6 py-5 flex flex-wrap items-center justify-around gap-4">
              {[
                { icon: '🤖', name: 'AI-Powered Matching', sub: '40+ data points analyzed' },
                { icon: '⭐', name: '4.8 Trustpilot', sub: '3,200+ Verified Reviews' },
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

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1e3369' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          </div>
          <div className="relative max-w-3xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
              <span className="text-base">🤖</span>
              <span className="text-xs font-semibold text-white">AI matching engine active — results in seconds</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Let AI find<br />your perfect lender.
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Two minutes. One application. Our AI analyzes your profile and connects you to the right lender or broker — the one most likely to fund you, at the best available terms.
            </p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all hover:shadow-2xl hover:-translate-y-1" style={{ color: '#1e3369' }}>
              Get My AI Match — Free →
            </Link>
            <p className="mt-4 text-blue-300/70 text-sm">No hard credit pull · No commitment · Funded in as little as 24 hours</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
