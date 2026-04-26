import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Business Funding Products & Services | Gateway Capital',
  description:
    'Gateway Capital matches businesses to SBA loans, term loans, lines of credit, equipment financing, invoice financing, and working capital. One application, multiple lenders, best terms. Apply in 2 minutes.',
  keywords: [
    'SBA loans', 'business term loans', 'business line of credit',
    'equipment financing', 'invoice financing', 'working capital loans',
    'small business loans', 'business funding products',
  ],
  openGraph: {
    title: 'Business Funding Products & Services | Gateway Capital',
    description: 'One application. Matched to the right lender for your funding product. Apply in 2 minutes.',
    type: 'website',
  },
}

const SERVICES = [
  {
    icon: '🏛️',
    name: 'SBA Loans',
    slug: 'sba-loans',
    tagline: 'Government-backed · Lowest rates · Up to $5M',
    desc: 'The gold standard of small business lending. SBA loans offer the lowest interest rates and longest repayment terms of any business loan — and we match you to SBA-approved lenders who can close fast.',
    amount: 'Up to $5M',
    rate: 'Starting at 6.5% APR',
    term: 'Up to 25 years',
    speed: '2–4 weeks',
    best: ['Growth & expansion', 'Real estate purchase', 'Equipment acquisition', 'Debt refinancing'],
  },
  {
    icon: '📈',
    name: 'Term Loans',
    slug: 'term-loans',
    tagline: 'Fixed payments · Fast approval · Same-day funding',
    desc: 'A lump sum of capital with fixed monthly payments over a set term. Perfect for large one-time investments where predictability matters — expansion, hiring, renovation, or seizing a time-sensitive opportunity.',
    amount: '$25K – $2M',
    rate: 'Starting at 7.9% APR',
    term: '3 – 60 months',
    speed: 'Same day – 48hr',
    best: ['Business expansion', 'Hiring & payroll', 'Renovations', 'Inventory purchase'],
  },
  {
    icon: '💳',
    name: 'Lines of Credit',
    slug: 'lines-of-credit',
    tagline: 'Revolving · Pay only on usage · Always available',
    desc: 'A revolving credit facility you draw from as needed and repay — like a financial safety net always on standby. Pay interest only on what you use, not the full limit.',
    amount: 'Up to $1M',
    rate: 'Starting at 8.5% APR',
    term: '6 – 48 months',
    speed: '24 – 72 hours',
    best: ['Cash flow management', 'Seasonal businesses', 'Emergency expenses', 'Ongoing operations'],
  },
  {
    icon: '⚙️',
    name: 'Equipment Financing',
    slug: 'equipment-financing',
    tagline: '100% financing · Asset as collateral · 1–7 year terms',
    desc: 'Finance up to 100% of equipment purchase price. The asset serves as collateral — making qualification easier and rates more competitive. Keep your cash liquid while getting the tools your business needs.',
    amount: 'Up to $5M',
    rate: 'Starting at 5.9% APR',
    term: '1 – 7 years',
    speed: '24 – 48 hours',
    best: ['Machinery & tools', 'Vehicles & fleets', 'Medical devices', 'Technology & IT'],
  },
  {
    icon: '📋',
    name: 'Invoice Financing',
    slug: 'invoice-financing',
    tagline: 'Advance up to 90% · No new debt · 24-hour funding',
    desc: 'Unlock the cash trapped in unpaid invoices. Stop waiting 30–90 days to get paid — advance up to 90% of outstanding invoice value immediately and improve cash flow without taking on traditional debt.',
    amount: 'Up to 90% of invoices',
    rate: '1–5% factoring fee',
    term: 'Invoice term based',
    speed: '24 hours',
    best: ['B2B businesses', 'Staffing agencies', 'Contractors', 'Wholesale distributors'],
  },
  {
    icon: '⚡',
    name: 'Working Capital',
    slug: 'working-capital',
    tagline: 'Same-day funding · Revenue-based · 500+ credit OK',
    desc: 'Fast, flexible capital to keep your business running and growing. Repay based on daily revenue — no fixed monthly payment. Built for businesses needing immediate access to cash with minimal documentation.',
    amount: '$5K – $750K',
    rate: '1.1–1.5 factor rate',
    term: '3 – 18 months',
    speed: 'Same day',
    best: ['Retail & restaurants', 'Emergency capital', 'Seasonal inventory', 'Fast growth needs'],
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
              <span className="text-xs font-semibold text-white">6 funding products · 50+ lender partners</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-5">
              Every funding product.<br />
              <span className="text-blue-400">Matched to the right lender.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              One application. Our engine matches your profile to the lenders and brokers in our network who specialize in exactly what you need — so you get the best available offer, not just the first one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">
                Get Matched Now →
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">
                Browse Products
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-white border-b border-slate-200 py-6 px-5">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: '6+', label: 'Funding Products' },
              { val: '50+', label: 'Lender Partners' },
              { val: '$500M+', label: 'Capital Matched' },
              { val: '24hr', label: 'Avg. Funding Time' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-2xl text-blue-600">{s.val}</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <section id="services" className="py-20 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Choose your product — or let us <span className="text-blue-600">match you</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Not sure which is right? Apply once and our engine recommends the best fit based on your profile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {SERVICES.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/8 transition-all hover:-translate-y-1"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{s.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold mb-3">{s.tagline}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: 'Amount', val: s.amount },
                      { label: 'Speed', val: s.speed },
                      { label: 'Rate', val: s.rate },
                      { label: 'Term', val: s.term },
                    ].map(m => (
                      <div key={m.label} className="bg-slate-50 rounded-lg px-3 py-2">
                        <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                        <div className="text-xs font-bold text-slate-700 mt-0.5">{m.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-400">Best for: {s.best[0]}</span>
                    <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-block">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-display font-bold text-xl text-white mb-2">Not sure which product is right for you?</div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  Apply once and our matching engine analyzes your profile — revenue, time in business, credit, and use of funds — to recommend the right product and connect you to the best lender for it.
                </p>
              </div>
              <Link href="/apply" className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all whitespace-nowrap hover:shadow-lg">
                Let Us Match You →
              </Link>
            </div>
          </div>
        </section>

        {/* How matching works */}
        <section className="py-16 bg-white px-5">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
              <span className="w-5 h-px bg-blue-600" />Our Process<span className="w-5 h-px bg-blue-600" />
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-10">
              How we match you to the right product
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'You apply once', desc: 'Fill out a 2-minute form. Tell us about your business, revenue, and what you need. No hard credit pull.' },
                { num: '02', title: 'We analyze & route', desc: 'Our engine matches your profile to the products and lenders in our network best suited to approve and fund you.' },
                { num: '03', title: 'You choose & get funded', desc: 'Review competing offers side by side. Pick the best terms. Funds deposit in as little as 24 hours.' },
              ].map(step => (
                <div key={step.num} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                  <div className="font-display font-extrabold text-3xl text-blue-600/20 mb-3">{step.num}</div>
                  <div className="font-display font-bold text-base text-slate-900 mb-2">{step.title}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">
              Find your funding product today.
            </h2>
            <p className="text-blue-200 mb-7">One application. Matched to the right lender. Funded in as little as 24 hours.</p>
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
