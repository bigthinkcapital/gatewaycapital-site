import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Business Term Loans | Gateway Capital',
  description: 'Get matched to business term loan lenders offering same-day to 5-day funding. $25K to $2M with fixed rates and predictable payments. Apply in 2 minutes. No hard credit pull.',
  keywords: ['business term loan', 'small business term loan', 'fixed rate business loan', 'business loan same day', 'term loan lender'],
  alternates: { canonical: 'https://gatewaycapitalfunding.com/services/term-loans' },
  openGraph: { title: 'Business Term Loans | Gateway Capital', description: '$25K–$2M · Same-day to 5 days · Fixed rates. Get matched free.', type: 'website' },
}

const HOW_IT_HELPS = [
  { q: 'How can a term loan help your business expand?', a: 'A term loan gives you the full capital upfront — ideal when making a large, defined investment like opening a new location, renovating a space, or launching a product line. Fixed monthly payments make it easy to plan around, and you\'re not paying interest on money you haven\'t drawn yet.' },
  { q: 'How can a term loan help with hiring and team growth?', a: 'Growing your team is one of the highest-ROI investments a business can make — but salaries, benefits, and training create a cash flow gap before new hires produce. A term loan bridges that gap, letting you hire at the pace your business demands without straining working capital.' },
  { q: 'How can a term loan help a business recover from a slow period?', a: 'Term loans are a clean way to stabilize operations after a difficult quarter — seasonal slowdown, supply chain disruption, or unexpected costs. The fixed structure gives you certainty about repayment, and the lump sum injection covers payroll, inventory, and operating costs while you recover.' },
  { q: 'How can a term loan help fund a marketing campaign?', a: 'Scaling paid acquisition or launching a brand campaign takes capital before it produces returns. A term loan lets you front the spend and repay over months as revenue follows — matching the investment timeline to the return timeline.' },
]

const FAQS = [
  { q: 'What is a business term loan and how does it work?', a: 'A business term loan provides a lump sum you repay over a fixed period with regular scheduled payments — usually monthly. Terms range from 3 months to 10 years depending on the lender and size.' },
  { q: 'How fast can I get a business term loan?', a: 'Alternative lenders in our network can fund same day to 5 business days. Bank term loans take longer — 1–4 weeks. We match you to the fastest lender that fits your needs.' },
  { q: 'What credit score do I need for a business term loan?', a: 'Most term loan lenders require a minimum personal credit score of 550–600, though better scores unlock lower rates. Some alternative lenders use revenue and cash flow as the primary criteria.' },
  { q: 'Are business term loan rates fixed or variable?', a: 'Most alternative lender term loans offer fixed rates — your monthly payment never changes. Bank term loans may be variable or fixed. We surface both and explain the difference clearly.' },
  { q: 'Can I pay off a term loan early?', a: 'Many lenders allow early payoff, though some charge a prepayment penalty. We flag any prepayment terms before you choose an offer.' },
  { q: 'What can I use a business term loan for?', a: 'Term loans are flexible — expansion, hiring, marketing, equipment, inventory, renovation, debt refinancing, and more. Most lenders have no restrictions on business use of funds.' },
]

export default function TermLoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FinancialProduct', name: 'Business Term Loans', description: 'Fixed-rate business term loans from $25K to $2M. Same-day to 5-day funding.', provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' } }) }} />
      <SmartBar /><Nav /><MobileCTA />
      <main className="pt-[100px]">
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-slate-300">Services</Link><span>›</span>
              <span className="text-slate-300">Term Loans</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span>📈</span><span className="text-xs font-semibold text-white">Fixed capital · Predictable monthly payments</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">Business term loans — straightforward capital, fast.</h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">A term loan gives you a lump sum of capital upfront with fixed monthly payments over a set period. It&apos;s the most straightforward form of business financing — and our network delivers competing offers fast.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">Get My Term Loan Offers →</Link>
                  <Link href="#how-it-helps" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">How It Helps You</Link>
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Term Loans — At a Glance</div>
                <div className="space-y-3 mb-5">
                  {[['Amount','$25,000 – $2,000,000'],['Funding Speed','Same day – 5 days'],['Rate','From 7% APR'],['Min. Credit Score','550+'],['Min. Time in Business','1 year']].map(([label,val]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-xs text-slate-400">{label}</span><span className="text-sm font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group">
                  <div><div className="text-sm font-bold text-white">Get Matched to Term Loan Lenders</div><div className="text-xs text-blue-200">Free · No hard credit pull</div></div>
                  <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white text-sm group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-helps" className="py-20 bg-white px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3"><span className="w-5 h-px bg-blue-600" />How It Helps Your Business<span className="w-5 h-px bg-blue-600" /></div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">What can a business term loan do for you?</h2>
            </div>
            <div className="space-y-5">
              {HOW_IT_HELPS.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-3">{item.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — See Your Term Loan Offers →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">What businesses use term loans for</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏗️', title: 'Expansion & New Locations', desc: 'Fund a second location, new market entry, or franchise expansion.' },
                { icon: '👥', title: 'Hiring & Payroll', desc: 'Bring on new team members and cover the ramp-up period before they generate revenue.' },
                { icon: '📢', title: 'Marketing & Advertising', desc: 'Fund paid acquisition campaigns, brand launches, or agency retainers.' },
                { icon: '🔨', title: 'Renovation & Buildout', desc: 'Finance leasehold improvements, office buildouts, or facility upgrades.' },
                { icon: '📦', title: 'Inventory', desc: 'Stock up ahead of peak seasons or large purchase orders.' },
                { icon: '🔄', title: 'Debt Refinancing', desc: 'Replace expensive short-term debt with a lower-rate, longer-term loan.' },
              ].map(u => (
                <div key={u.title} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="text-2xl mb-3">{u.icon}</div>
                  <div className="font-bold text-sm text-slate-900 mb-1">{u.title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{u.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Term loans — frequently asked questions</h2></div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-100 hover:shadow-sm transition-all">
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50 px-5">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-6">Other funding products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{href:'/services/sba-loans',icon:'🏛️',name:'SBA Loans',sub:'Up to $5M · Lowest rates'},
                {href:'/services/lines-of-credit',icon:'💳',name:'Lines of Credit',sub:'Up to $1M · Revolving'},
                {href:'/services/equipment-financing',icon:'⚙️',name:'Equipment Financing',sub:'Up to $5M · 100% financing'}].map(r => (
                <Link key={r.href} href={r.href} className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <div className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.sub}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to get a business term loan?</h2>
            <p className="text-blue-200 mb-7">Apply free in 2 minutes. No hard credit pull. Matched to term loan lenders who compete for your business.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get My Offers →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
