import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Business Funding by Industry | Gateway Capital',
  description:
    'Gateway Capital matches businesses across every industry to the right lenders and brokers. Restaurant, construction, healthcare, retail, transportation, tech, franchise, and more. Apply in 2 minutes.',
  keywords: [
    'business loans by industry', 'industry specific business funding',
    'restaurant business loans', 'construction business loans',
    'healthcare business loans', 'retail business loans',
    'transportation trucking loans', 'tech startup business loans',
  ],
  openGraph: {
    title: 'Business Funding by Industry | Gateway Capital',
    description: 'Matched to the right lenders for your industry. Apply in 2 minutes.',
    type: 'website',
  },
}

const INDUSTRIES = [
  {
    icon: '🍕',
    name: 'Restaurant & Food Service',
    slug: 'restaurant',
    desc: 'Equipment financing, working capital, and expansion loans for restaurants, cafes, bars, and food trucks.',
    products: ['Equipment Financing', 'Working Capital', 'SBA Loans'],
    avgFunding: '$85,000',
  },
  {
    icon: '🏗️',
    name: 'Construction & Contractors',
    slug: 'construction',
    desc: 'Project-based capital, equipment financing, and lines of credit for general contractors and subcontractors.',
    products: ['Equipment Financing', 'Lines of Credit', 'Term Loans'],
    avgFunding: '$250,000',
  },
  {
    icon: '🏥',
    name: 'Healthcare & Medical',
    slug: 'healthcare',
    desc: 'Practice acquisition loans, equipment financing, and working capital for medical, dental, and wellness practices.',
    products: ['SBA Loans', 'Equipment Financing', 'Practice Acquisition'],
    avgFunding: '$500,000',
  },
  {
    icon: '🛍️',
    name: 'Retail & E-commerce',
    slug: 'retail',
    desc: 'Inventory financing, working capital, and expansion funding for brick-and-mortar and online retailers.',
    products: ['Inventory Financing', 'MCA', 'Term Loans'],
    avgFunding: '$150,000',
  },
  {
    icon: '🚚',
    name: 'Transportation & Trucking',
    slug: 'transportation',
    desc: 'Commercial vehicle financing, fleet expansion, and working capital for truckers and logistics companies.',
    products: ['Equipment Financing', 'Lines of Credit', 'Term Loans'],
    avgFunding: '$200,000',
  },
  {
    icon: '💻',
    name: 'Technology & SaaS',
    slug: 'technology',
    desc: 'Revenue-based financing, working capital, and growth capital for software companies and tech startups.',
    products: ['Revenue-Based Financing', 'Term Loans', 'Lines of Credit'],
    avgFunding: '$300,000',
  },
  {
    icon: '🍔',
    name: 'Franchise Businesses',
    slug: 'franchise',
    desc: 'SBA-backed franchise financing, multi-unit expansion loans, and working capital for franchisees.',
    products: ['SBA Loans', 'Equipment Financing', 'Term Loans'],
    avgFunding: '$450,000',
  },
  {
    icon: '🏢',
    name: 'Real Estate',
    slug: 'real-estate',
    desc: 'Bridge loans, fix-and-flip financing, and commercial real estate loans for investors and developers.',
    products: ['Bridge Loans', 'Commercial RE', 'Fix & Flip'],
    avgFunding: '$750,000',
  },
]

const OTHER_INDUSTRIES = [
  'Auto Repair & Dealerships', 'Beauty & Salons', 'Childcare & Education',
  'Dental Practices', 'Fitness & Gyms', 'Hospitality & Hotels',
  'Legal & Professional Services', 'Manufacturing', 'Non-Profits',
  'Pharmacy', 'Veterinary Practices', 'Wholesale & Distribution',
]

export default function IndustriesPage() {
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
              <span className="text-xs font-semibold text-white">Matched funding for every industry</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-5">
              Funding matched to{' '}
              <span className="text-blue-400">your industry</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Every industry has unique funding needs — different loan types, different lenders, different terms. Our matching engine connects you to specialists who understand your business, not just your credit score.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-600/30">
                Get Matched Now →
              </Link>
              <Link href="#industries" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">
                Browse Industries
              </Link>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <div className="bg-white border-b border-slate-200 py-6 px-5">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: '20+', label: 'Industries Served' },
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

        {/* Industry grid */}
        <section id="industries" className="py-20 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Top Industries<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
                Specialized funding for{' '}
                <span className="text-blue-600">every sector</span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Click your industry to see exactly which products and lenders are available for your business type.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {INDUSTRIES.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/8 transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{ind.icon}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{ind.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {ind.products.map(p => (
                      <span key={p} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{p}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <div className="text-xs text-slate-400">Avg. funding</div>
                      <div className="text-sm font-bold text-blue-600">{ind.avgFunding}</div>
                    </div>
                    <span className="text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Other industries */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">We also serve</h3>
              <p className="text-sm text-slate-500 mb-6">Our network covers virtually every business sector. If you don&apos;t see your industry listed, we can still match you.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {OTHER_INDUSTRIES.map(ind => (
                  <span key={ind} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">
                    {ind}
                  </span>
                ))}
              </div>
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all">
                Get Matched Regardless of Industry →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">
              Ready to get matched to the right lender?
            </h2>
            <p className="text-blue-200 mb-7">One application routes to every relevant lender in our network who specializes in your industry.</p>
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
