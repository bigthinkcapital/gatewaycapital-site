import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Business Funding Products | Gateway Capital',
  description:
    'Gateway Capital matches your business to the right lenders across SBA loans, term loans, lines of credit, equipment financing, invoice financing, and merchant cash advances. Apply in 2 minutes.',
  keywords: [
    'business funding products', 'SBA loans', 'term loans', 'business line of credit',
    'equipment financing', 'invoice financing', 'merchant cash advance', 'small business loans',
  ],
  openGraph: {
    title: 'Business Funding Products | Gateway Capital',
    description: 'SBA loans, term loans, lines of credit, equipment financing and more. Get matched in minutes.',
    type: 'website',
  },
}

const SERVICES = [
  {
    icon: '🏛️', name: 'SBA Loans', slug: 'sba-loans',
    tagline: 'Government-backed. Lowest rates available.',
    desc: 'SBA loans offer the most favorable terms of any business financing — low rates, long repayment periods, and large amounts backed by the U.S. Small Business Administration.',
    amount: 'Up to $5M', speed: '2–4 weeks', rate: 'From 6.5% APR',
    best: ['Established businesses (2+ years)', 'Expansion & real estate', 'Long-term capital needs'],
  },
  {
    icon: '📈', name: 'Term Loans', slug: 'term-loans',
    tagline: 'Fixed capital. Predictable payments.',
    desc: 'A lump sum of capital repaid over a fixed term with predictable monthly payments. Ideal for large one-time investments where you know exactly how much you need.',
    amount: '$25K – $2M', speed: 'Same day – 5 days', rate: 'From 7% APR',
    best: ['Expansion or renovation', 'Hiring and payroll', 'One-time equipment purchase'],
  },
  {
    icon: '💳', name: 'Lines of Credit', slug: 'lines-of-credit',
    tagline: 'Draw what you need. Pay only for what you use.',
    desc: 'A revolving credit facility that lets you draw funds as needed and repay — giving you ongoing access to capital without taking on a fixed loan.',
    amount: 'Up to $1M', speed: '24–48 hours', rate: 'From 8% APR',
    best: ['Seasonal cash flow gaps', 'Ongoing working capital', 'Unexpected expenses'],
  },
  {
    icon: '⚙️', name: 'Equipment Financing', slug: 'equipment-financing',
    tagline: 'Finance equipment. Keep cash liquid.',
    desc: 'Finance up to 100% of equipment purchase price with the asset serving as collateral. Easier qualification, competitive rates, and no large cash outlay.',
    amount: 'Up to $5M', speed: '24–72 hours', rate: 'From 1.75%/mo',
    best: ['Heavy machinery & vehicles', 'Restaurant & medical equipment', 'Technology infrastructure'],
  },
  {
    icon: '📋', name: 'Invoice Financing', slug: 'invoice-financing',
    tagline: 'Get paid today. Stop waiting 90 days.',
    desc: 'Advance up to 90% of your outstanding invoices immediately. Convert receivables into working capital same day without taking on traditional debt.',
    amount: 'Up to 90% of invoice', speed: '24 hours', rate: '1–3% per month',
    best: ['B2B businesses with net terms', 'Seasonal revenue gaps', 'Rapid growth phases'],
  },
  {
    icon: '⚡', name: 'Merchant Cash Advance', slug: 'merchant-cash-advance',
    tagline: 'Fastest capital. Flexible repayment.',
    desc: 'Advance based on future credit card and debit card sales. Repay automatically as a percentage of daily revenue — payments flex with your business.',
    amount: '$5K – $750K', speed: 'Same day', rate: '1.1x – 1.5x factor rate',
    best: ['High card-volume businesses', 'Immediate capital needs', 'Lower credit score applicants'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <SmartBar />
      <Nav />
      <MobileCTA />
      <main className="pt-[100px]">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-white">One application. Every product. Best terms.</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-5">
              Every funding product,{' '}
              <span className="text-blue-400">matched to your business</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Gateway Capital matches you to the right product from our network of 50+ lenders and brokers. One application, competing offers, you choose the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">
                Get Matched Now →
              </Link>
              <Link href="#products" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">
                Browse Products
              </Link>
            </div>
          </div>
        </section>

        {/* Quick nav strip */}
        <div className="bg-white border-b border-slate-200 overflow-x-auto">
          <div className="flex min-w-max mx-auto divide-x divide-slate-200">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex flex-col items-center gap-1.5 px-6 py-4 hover:bg-blue-50 transition-colors group flex-shrink-0">
                <span className="text-xl">{s.icon}</span>
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors whitespace-nowrap">{s.name}</span>
                <span className="text-xs text-blue-600 font-semibold">{s.amount}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Product cards */}
        <section id="products" className="py-20 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Choose your product or let us <span className="text-blue-600">match you</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">Click any product to learn how it works, who it&apos;s best for, and how to qualify.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {SERVICES.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/8 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition-colors">{s.icon}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1">{s.name}</h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">{s.tagline}</div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                    <div><div className="text-xs text-slate-400">Amount</div><div className="text-xs font-bold text-slate-700 mt-0.5">{s.amount}</div></div>
                    <div><div className="text-xs text-slate-400">Speed</div><div className="text-xs font-bold text-slate-700 mt-0.5">{s.speed}</div></div>
                    <div><div className="text-xs text-slate-400">Rate</div><div className="text-xs font-bold text-blue-600 mt-0.5">{s.rate}</div></div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-xl text-white mb-1">Not sure which product fits?</div>
                <p className="text-slate-400 text-sm">Apply once — our matching engine figures out which products and lenders fit your profile, then surfaces competing offers.</p>
              </div>
              <Link href="/apply" className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all whitespace-nowrap">
                Let Us Match You →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Quick Comparison<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">All products at a glance</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-bold text-xs uppercase tracking-wider">Product</th>
                    <th className="text-left px-4 py-4 font-bold text-xs uppercase tracking-wider">Amount</th>
                    <th className="text-left px-4 py-4 font-bold text-xs uppercase tracking-wider">Speed</th>
                    <th className="text-left px-4 py-4 font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Best For</th>
                    <th className="px-4 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SERVICES.map((s, i) => (
                    <tr key={s.slug} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{s.icon}</span>
                          <div>
                            <div className="font-bold text-slate-900">{s.name}</div>
                            <div className="text-xs text-blue-600 font-semibold">{s.rate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 font-semibold text-slate-700 whitespace-nowrap">{s.amount}</td>
                      <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{s.speed}</td>
                      <td className="px-4 py-4 text-slate-500 text-xs hidden sm:table-cell">{s.best[0]}</td>
                      <td className="px-4 py-4">
                        <Link href={`/services/${s.slug}`} className="text-xs font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap">Learn more →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to find your best offer?</h2>
            <p className="text-blue-200 mb-7">One application routes to every relevant lender in our network. Competing offers, you choose the best terms.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
              Apply Free — 2 Minutes →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
