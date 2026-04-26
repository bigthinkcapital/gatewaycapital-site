import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Merchant Cash Advance (MCA) | Gateway Capital',
  description: 'Get matched to MCA lenders for same-day business funding. Revenue-based capital from $5K to $750K — repay as a percentage of daily sales. Bad credit OK. Apply in 2 minutes.',
  keywords: ['merchant cash advance', 'MCA loan', 'revenue based financing', 'same day business funding', 'bad credit business loan', 'MCA lender'],
  alternates: { canonical: 'https://gatewaycapitalfunding.com/services/merchant-cash-advance' },
  openGraph: { title: 'Merchant Cash Advance | Gateway Capital', description: '$5K–$750K. Same-day funding. Revenue-based repayment. Bad credit OK. Get matched free.', type: 'website' },
}

const HOW_IT_HELPS = [
  {
    q: 'How can a merchant cash advance help your business get funded fast?',
    a: 'An MCA is the fastest form of business financing available — same-day approval and funding is common for businesses with strong card or bank volume. Unlike bank loans that require weeks of paperwork, MCAs underwrite primarily on your daily sales data. This makes them ideal when you need capital immediately and can\'t wait for a traditional approval process.',
  },
  {
    q: 'How can a merchant cash advance help a business with lower credit?',
    a: 'Because MCAs qualify based on revenue rather than credit score, they\'re one of the most accessible forms of business financing. Businesses with scores as low as 500, tax liens, or previous banking issues can often qualify if they have consistent card or bank volume. The lender is betting on your future sales, not your credit history.',
  },
  {
    q: 'How can a merchant cash advance help manage cash flow during a slow period?',
    a: 'One of the most valuable features of an MCA is flexible repayment. When business is slow, your daily repayment percentage means smaller absolute payments. When business picks up, you repay more — but you have more cash to handle it. This natural alignment between repayment and revenue makes MCAs one of the most cash-flow-friendly products available.',
  },
  {
    q: 'How can a merchant cash advance help a seasonal business?',
    a: 'Seasonal businesses that peak in certain months are well-suited for MCAs. You can draw capital ahead of your peak season, stock inventory, staff up, and launch marketing — then repay through higher daily sales during your busy period. The flexible repayment structure means you\'re not crushed by fixed payments in your slow months.',
  },
]

const FAQS = [
  { q: 'What is a merchant cash advance and how does it work?', a: 'An MCA provides a lump sum of capital in exchange for a percentage of your future daily credit card or bank revenue (called a "holdback"). The lender takes a small percentage of each day\'s revenue until the advance plus a factor rate fee is fully repaid. There\'s no fixed monthly payment — repayment flexes with your sales.' },
  { q: 'What is a factor rate and how is it different from an interest rate?', a: 'A factor rate is expressed as a multiplier (e.g., 1.3x). If you receive $100,000 at a 1.3 factor rate, you repay $130,000 total. Unlike APR, factor rates don\'t compound — the total cost is fixed at the start. Factor rates typically range from 1.1x to 1.5x depending on your revenue, time in business, and credit profile.' },
  { q: 'How fast does an MCA fund?', a: 'Same-day funding is standard for MCAs. After submitting your application and bank statements, approval can come within hours and funds the same business day.' },
  { q: 'Can I get a merchant cash advance with bad credit?', a: 'Yes. MCAs are one of the most accessible forms of financing for businesses with challenged credit. Most MCA lenders require a minimum score of 500 and focus primarily on your daily revenue and bank activity rather than your credit history.' },
  { q: 'What is the holdback percentage?', a: 'The holdback is the percentage of daily revenue used to repay the advance — typically 10–20%. For a business doing $5,000/day in sales with a 15% holdback, the daily repayment would be $750.' },
  { q: 'Is a merchant cash advance a good idea for my business?', a: 'MCAs are best for businesses that need capital fast, have consistent revenue, and can\'t qualify for or don\'t want to wait for traditional financing. They carry higher costs than term loans or SBA loans, so they\'re not ideal for long-term capital needs. We always show you every option so you can make the most informed decision.' },
]

export default function MerchantCashAdvancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FinancialProduct', name: 'Merchant Cash Advance', description: 'Same-day business funding from $5K to $750K. Revenue-based repayment. Bad credit OK.', provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' } }) }} />
      <SmartBar /><Nav /><MobileCTA />
      <main className="pt-[100px]">

        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-slate-300">Services</Link><span>›</span>
              <span className="text-slate-300">Merchant Cash Advance</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span>⚡</span><span className="text-xs font-semibold text-white">Same-day capital · Flexible revenue-based repayment</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">Merchant cash advance — same-day funding, flexible repayment.</h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">An MCA gives you capital today based on your future credit card and bank sales. You repay automatically as a small percentage of daily revenue — payments flex with your business, lower when you&apos;re slow and higher when you&apos;re busy.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">Get My MCA Offers →</Link>
                  <Link href="#how-it-helps" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">How It Helps You</Link>
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Merchant Cash Advance — At a Glance</div>
                <div className="space-y-3 mb-5">
                  {[['Amount','$5,000 – $750,000'],['Funding Speed','Same day'],['Rate','1.1x – 1.5x factor rate'],['Min. Credit Score','500+'],['Min. Time in Business','3 months']].map(([label,val]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-xs text-slate-400">{label}</span><span className="text-sm font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group">
                  <div><div className="text-sm font-bold text-white">Get Matched to MCA Lenders</div><div className="text-xs text-blue-200">Free · No hard credit pull</div></div>
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
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">What can a merchant cash advance do for your business?</h2>
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
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get Funded Today →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">What businesses use merchant cash advances for</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🍕', title: 'Restaurants & Retail', desc: 'High card volume businesses with consistent daily sales are ideal MCA candidates.' },
                { icon: '🚨', title: 'Emergency Capital', desc: 'Equipment breakdowns, urgent repairs, or immediate opportunities that can\'t wait.' },
                { icon: '📦', title: 'Inventory Restocking', desc: 'Replenish inventory fast when you\'ve run out during a demand spike.' },
                { icon: '🏗️', title: 'Bridge Financing', desc: 'Bridge a gap while a slower approval (SBA, bank loan) is in process.' },
                { icon: '📢', title: 'Marketing Push', desc: 'Fund a time-sensitive campaign or promotion quickly without delay.' },
                { icon: '🔄', title: 'Working Capital', desc: 'Cover immediate operating expenses — payroll, rent, utilities — right now.' },
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
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">MCA qualifications</h2>
              <p className="text-sm text-slate-500 mb-5">MCAs have the most flexible qualification criteria of any business financing product.</p>
              <ul className="space-y-2.5">
                {['500+ personal credit score','3+ months in business','$10K+ monthly card or bank revenue','Active business bank account','No active bankruptcies'].map(q => (
                  <li key={q} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-xs flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-bold text-base text-slate-900 mb-3">Need funding today?</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Apply in 2 minutes, get matched to MCA lenders within hours, and receive funding the same business day. No hard credit pull to check your options.</p>
              <div className="space-y-2 mb-5">
                {['No hard credit pull to start','Same-day approval common','Flexible repayment tied to your revenue','Low credit scores accepted'].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />{b}
                  </div>
                ))}
              </div>
              <Link href="/apply" className="block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl text-center transition-all">Get My MCA Offers — Free →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Merchant cash advance — frequently asked questions</h2></div>
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
                { href: '/services/term-loans', icon: '📈', name: 'Term Loans', sub: '$25K–$2M · Lower rates' },
                { href: '/services/lines-of-credit', icon: '💳', name: 'Lines of Credit', sub: 'Up to $1M · Revolving' },
                { href: '/services/invoice-financing', icon: '📋', name: 'Invoice Financing', sub: 'Up to 90% · 24hr funding' },
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
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to get funded today?</h2>
            <p className="text-blue-200 mb-7">Apply free in 2 minutes. No hard credit pull. Same-day funding available for qualifying businesses.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get My MCA Offers →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
