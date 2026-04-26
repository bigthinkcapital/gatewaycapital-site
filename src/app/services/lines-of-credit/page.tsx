import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Business Lines of Credit | Gateway Capital',
  description: 'Get matched to business line of credit lenders with same-day decisions. Up to $1M revolving credit — draw what you need, pay only for what you use. Apply in 2 minutes. No hard credit pull.',
  keywords: ['business line of credit', 'revolving credit line', 'small business credit line', 'unsecured line of credit', 'business credit facility'],
  alternates: { canonical: 'https://gatewaycapitalfunding.com/services/lines-of-credit' },
  openGraph: { title: 'Business Lines of Credit | Gateway Capital', description: 'Up to $1M revolving credit. Draw when needed, pay only for what you use. Get matched free.', type: 'website' },
}

const HOW_IT_HELPS = [
  {
    q: 'How can a business line of credit help you manage cash flow?',
    a: 'Cash flow gaps are the most common challenge in business — revenue comes in lumps while expenses are constant. A line of credit lets you draw funds to cover payroll, rent, or supplier invoices during slow periods and repay as revenue arrives. You only pay interest on what you draw, making it far cheaper than a term loan for short-term needs.',
  },
  {
    q: 'How can a line of credit help a seasonal business?',
    a: 'Seasonal businesses — retailers, landscapers, tourism operators — need capital in the months before revenue peaks. A line of credit lets you draw funds to stock inventory, hire seasonal staff, and ramp operations, then repay the balance when peak season revenue hits. It\'s purpose-built for this cash flow pattern.',
  },
  {
    q: 'How can a line of credit help you take advantage of opportunities?',
    a: 'Business opportunities don\'t wait for bank approval. A pre-approved line of credit means you can move on a bulk inventory deal, a strategic hire, or a vendor discount without delays. Having it in place before you need it is the key — that\'s why we recommend businesses establish a line of credit even when cash flow is healthy.',
  },
  {
    q: 'How can a line of credit help with unexpected expenses?',
    a: 'Equipment breaks, a key client churns, a lawsuit arrives — unexpected costs can derail a business without access to flexible capital. A line of credit acts as a shock absorber, letting you handle the unexpected without disrupting operations or taking on expensive emergency financing.',
  },
]

const FAQS = [
  { q: 'What is the difference between a business line of credit and a term loan?', a: 'A term loan gives you a lump sum upfront that you repay over a fixed schedule — ideal for large defined investments. A line of credit gives you revolving access to capital — draw what you need, repay it, draw again. You only pay interest on what\'s drawn. Lines of credit are better for ongoing or unpredictable capital needs.' },
  { q: 'Is a business line of credit secured or unsecured?', a: 'Both options exist. Unsecured lines require no collateral and are faster to obtain, but typically have lower limits and higher rates. Secured lines use business assets as collateral and offer higher limits and lower rates. We match you to both and let you compare.' },
  { q: 'How quickly can I access funds from a line of credit?', a: 'Once approved, most business lines of credit allow same-day or next-day fund access via ACH transfer. The initial approval process takes 24–48 hours after application.' },
  { q: 'What happens if I don\'t use my line of credit?', a: 'You pay nothing if you don\'t draw. Some lenders charge a small maintenance or inactivity fee — we flag these before you commit. Maintaining an undrawn line is a common best practice for business financial resilience.' },
  { q: 'Can a new business get a line of credit?', a: 'Some lenders in our network offer lines to businesses with as little as 6 months of operating history and strong monthly revenue. The credit limit may be lower initially and can increase over time.' },
  { q: 'What is a revolving line of credit?', a: 'Revolving means as you repay what you\'ve drawn, that credit becomes available again — like a business credit card. This is different from a non-revolving credit facility, where repayments don\'t restore your available balance.' },
]

export default function LinesOfCreditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FinancialProduct', name: 'Business Line of Credit', description: 'Revolving business line of credit up to $1M. Draw what you need, pay only for what you use.', provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' } }) }} />
      <SmartBar /><Nav /><MobileCTA />
      <main className="pt-[100px]">

        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-slate-300">Services</Link><span>›</span>
              <span className="text-slate-300">Lines of Credit</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span>💳</span><span className="text-xs font-semibold text-white">Revolving credit · Draw what you need · Pay only for what you use</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">A business line of credit — your financial safety net.</h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">A line of credit gives you ongoing access to capital you draw when you need it and repay over time. Unlike a term loan, you only pay interest on the amount you&apos;ve drawn — making it the most flexible form of business financing available.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">Get My Line of Credit →</Link>
                  <Link href="#how-it-helps" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">How It Helps You</Link>
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Lines of Credit — At a Glance</div>
                <div className="space-y-3 mb-5">
                  {[['Amount','Up to $1,000,000'],['Funding Speed','24–48 hours'],['Rate','From 8% APR'],['Min. Credit Score','550+'],['Min. Time in Business','6 months']].map(([label,val]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-xs text-slate-400">{label}</span><span className="text-sm font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group">
                  <div><div className="text-sm font-bold text-white">Get Matched to Line of Credit Lenders</div><div className="text-xs text-blue-200">Free · No hard credit pull</div></div>
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
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">What can a business line of credit do for you?</h2>
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
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — See Your Line of Credit Offers →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">What businesses use lines of credit for</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '💰', title: 'Cash Flow Management', desc: 'Bridge gaps between receivables and payables without disrupting operations.' },
                { icon: '📦', title: 'Inventory Purchases', desc: 'Stock up before peak seasons and repay as inventory sells.' },
                { icon: '👥', title: 'Payroll Coverage', desc: 'Never miss payroll during slow periods or collection delays.' },
                { icon: '🚨', title: 'Emergency Expenses', desc: 'Handle unexpected costs — equipment repairs, legal fees, urgent needs.' },
                { icon: '⚡', title: 'Opportunity Capital', desc: 'Move fast on vendor deals, acquisitions, or growth opportunities.' },
                { icon: '🔄', title: 'Ongoing Operations', desc: 'Cover recurring business expenses during revenue gaps.' },
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
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">Line of credit qualifications</h2>
              <ul className="space-y-2.5">
                {['550+ personal credit score','6+ months in business','$10K+ monthly revenue','Active business bank account','No active bankruptcies'].map(q => (
                  <li key={q} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-xs flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-bold text-base text-slate-900 mb-3">Not sure if you qualify?</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Apply in 2 minutes and we match you to line of credit lenders based on your actual profile. You might qualify for more than you think.</p>
              <Link href="/apply" className="block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl text-center transition-all">Check My Options — Free →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Lines of credit — frequently asked questions</h2></div>
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
              {[
                { href: '/services/term-loans', icon: '📈', name: 'Term Loans', sub: '$25K–$2M · Same day' },
                { href: '/services/invoice-financing', icon: '📋', name: 'Invoice Financing', sub: 'Up to 90% · 24hr funding' },
                { href: '/services/merchant-cash-advance', icon: '⚡', name: 'Merchant Cash Advance', sub: 'Up to $750K · Same day' },
              ].map(r => (
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
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to open a business line of credit?</h2>
            <p className="text-blue-200 mb-7">Apply free in 2 minutes. No hard credit pull. Matched to lenders who compete for your business.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get My Offers →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
