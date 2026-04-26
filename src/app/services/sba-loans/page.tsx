import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'SBA Loans for Small Businesses | Gateway Capital',
  description: 'Get matched to SBA-approved lenders for the lowest rates on small business loans. SBA 7(a) and 504 loans up to $5M. Apply in 2 minutes. No hard credit pull. Gateway Capital.',
  keywords: ['SBA loans', 'SBA 7a loan', 'SBA 504 loan', 'small business administration loan', 'SBA loan lender', 'government backed business loan'],
  alternates: { canonical: 'https://gatewaycapitalfunding.com/services/sba-loans' },
  openGraph: { title: 'SBA Loans for Small Businesses | Gateway Capital', description: 'Matched to SBA-approved lenders. Up to $5M. Lowest rates available. Apply free.', type: 'website' },
}

const HOW_IT_HELPS = [
  { q: 'How can an SBA loan help your business grow?', a: 'An SBA loan gives your business access to large amounts of capital at the lowest interest rates available — often 2–3% lower than conventional business loans. With repayment terms up to 25 years for real estate and 10 years for working capital, your monthly payments stay manageable even on large loan amounts. This means you can invest aggressively in growth without straining cash flow.' },
  { q: 'How can an SBA loan help you buy commercial real estate or equipment?', a: 'SBA 504 loans are purpose-built for major fixed asset purchases — commercial real estate, heavy equipment, and large machinery. They offer below-market fixed interest rates and allow you to put as little as 10% down, preserving your working capital while acquiring the assets your business needs to scale.' },
  { q: 'How can an SBA loan help a business that has been declined elsewhere?', a: "Because the SBA guarantees a portion of the loan (up to 85%), lenders face lower risk and are more willing to approve businesses that wouldn't qualify for conventional financing. If you've been declined by traditional banks, an SBA loan is often the next best path — especially with 2+ years of history and solid revenue." },
  { q: 'How can an SBA loan help with debt consolidation?', a: 'SBA 7(a) loans can be used to consolidate multiple high-interest business debts into a single low-rate payment. If you\'re carrying expensive merchant cash advances or short-term loans, refinancing through an SBA loan can significantly reduce your monthly obligations and total interest paid over time.' },
]

const FAQS = [
  { q: 'What is the difference between SBA 7(a) and SBA 504 loans?', a: 'SBA 7(a) loans are the most flexible — usable for working capital, equipment, real estate, or business acquisition, up to $5M. SBA 504 loans are specifically for major fixed assets (real estate and large equipment), offer fixed rates, and often require less money down.' },
  { q: 'How long does it take to get an SBA loan?', a: 'The typical timeline is 2–4 weeks from application to funding, though SBA Express loans can close in under 36 hours. We manage the entire process and keep you updated at every step.' },
  { q: 'What credit score do I need for an SBA loan?', a: 'Most SBA lenders look for a personal credit score of 650 or higher, though some programs accept scores as low as 620 with compensating factors like strong revenue or collateral.' },
  { q: 'Can I get an SBA loan with no collateral?', a: 'SBA loans under $25,000 require no collateral. For larger amounts, lenders take available collateral but won\'t decline a loan solely for lack of it if you otherwise qualify.' },
  { q: 'Can a startup get an SBA loan?', a: 'SBA loans are generally available to businesses with 2+ years of history. New businesses may qualify for SBA Microloans (up to $50K) or 7(a) loans with strong personal financials and a solid business plan.' },
  { q: 'What are current SBA loan interest rates?', a: 'SBA loan rates are tied to the Prime Rate and typically range from 6.5% to 10% APR — well below conventional business loan rates. The SBA sets maximum rate limits to protect borrowers.' },
]

export default function SBALoansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FinancialProduct', name: 'SBA Loans', description: 'Government-backed SBA 7(a) and 504 loans for small businesses. Up to $5M with the lowest rates available.', provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' } }) }} />
      <SmartBar /><Nav /><MobileCTA />
      <main className="pt-[100px]">

        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-slate-300">Services</Link><span>›</span>
              <span className="text-slate-300">SBA Loans</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span>🏛️</span><span className="text-xs font-semibold text-white">Government-backed financing · Lowest rates available</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">SBA loans — the best rates in small business financing.</h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">The U.S. Small Business Administration backs these loans, which means lenders take on less risk and pass the savings to you in the form of lower rates and longer terms. We match you to SBA-approved lenders who move fast.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">Get My SBA Offers →</Link>
                  <Link href="#how-it-helps" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">How It Helps You</Link>
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">SBA Loans — At a Glance</div>
                <div className="space-y-3 mb-5">
                  {[['Amount','Up to $5,000,000'],['Funding Speed','2–4 weeks'],['Rate','From 6.5% APR'],['Min. Credit Score','650+'],['Min. Time in Business','2 years']].map(([label,val]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-xs text-slate-400">{label}</span><span className="text-sm font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group">
                  <div><div className="text-sm font-bold text-white">Get Matched to SBA Lenders</div><div className="text-xs text-blue-200">Free · No hard credit pull</div></div>
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
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">What can an SBA loan do for your business?</h2>
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
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — See Your SBA Offers →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">What businesses use SBA loans for</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏗️', title: 'Business Expansion', desc: 'Open a new location, hire staff, or enter a new market with long-term low-rate capital.' },
                { icon: '🏢', title: 'Commercial Real Estate', desc: 'Purchase or refinance owner-occupied commercial property with SBA 504 terms.' },
                { icon: '⚙️', title: 'Equipment Purchase', desc: 'Finance heavy equipment, vehicles, or machinery with 10-year terms and low rates.' },
                { icon: '🔄', title: 'Debt Refinancing', desc: 'Consolidate high-cost short-term debt into a single affordable SBA payment.' },
                { icon: '💼', title: 'Business Acquisition', desc: 'Buy an existing business or franchise with SBA financing up to $5M.' },
                { icon: '🔨', title: 'Renovation & Buildout', desc: 'Renovate your facility or upgrade to meet code and compliance requirements.' },
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
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3"><span className="w-5 h-px bg-blue-600" />Do You Qualify?</div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">SBA loan qualifications</h2>
              <ul className="space-y-2.5">
                {['650+ personal credit score','2+ years in business','$100K+ annual revenue','US-based for-profit business','No recent bankruptcies or tax liens','Owner equity investment in business'].map(q => (
                  <li key={q} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-xs flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-bold text-base text-slate-900 mb-3">Not sure if you qualify?</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Apply in 2 minutes and we match you to SBA lenders based on your actual profile. You might qualify for more than you think.</p>
              <Link href="/apply" className="block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl text-center transition-all">Check My SBA Options — Free →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">SBA loan — frequently asked questions</h2></div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-100 hover:shadow-sm transition-all">
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-6">Other funding products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{href:'/services/term-loans',icon:'📈',name:'Term Loans',sub:'$25K–$2M · Same day'},
                {href:'/services/equipment-financing',icon:'⚙️',name:'Equipment Financing',sub:'Up to $5M · 100% financing'},
                {href:'/services/lines-of-credit',icon:'💳',name:'Lines of Credit',sub:'Up to $1M · Revolving'}].map(r => (
                <Link key={r.href} href={r.href} className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
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
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to get matched to SBA lenders?</h2>
            <p className="text-blue-200 mb-7">Apply free in 2 minutes. No hard credit pull. Matched to SBA-approved lenders in our network.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get My SBA Offers →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
