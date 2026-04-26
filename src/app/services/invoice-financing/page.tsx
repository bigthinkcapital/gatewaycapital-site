import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Invoice Financing & Factoring for Businesses | Gateway Capital',
  description: 'Get matched to invoice financing lenders who advance up to 90% of outstanding invoices same day. No new debt. Stop waiting 30–90 days to get paid. Apply in 2 minutes. No hard credit pull.',
  keywords: ['invoice financing', 'invoice factoring', 'accounts receivable financing', 'invoice advance', 'B2B invoice funding', 'factoring company'],
  alternates: { canonical: 'https://gatewaycapitalfunding.com/services/invoice-financing' },
  openGraph: { title: 'Invoice Financing & Factoring | Gateway Capital', description: 'Advance up to 90% of outstanding invoices same day. Stop waiting 90 days to get paid. Apply free.', type: 'website' },
}

const HOW_IT_HELPS = [
  {
    q: 'How can invoice financing help your business cash flow?',
    a: 'Invoice financing eliminates the cash flow gap between delivering services and getting paid. Instead of waiting 30–90 days for clients to pay, you receive up to 90% of the invoice value within 24 hours. The remaining balance — minus the lender\'s fee — arrives when your client pays. Your cash flow becomes predictable and immediate.',
  },
  {
    q: 'How can invoice financing help a growing business scale?',
    a: 'Growth is expensive — you need to hire, buy materials, and invest before clients pay. Invoice financing converts your outstanding work into immediate capital, letting you fund your next job with the revenue from your last one. This is how successful service businesses scale without taking on traditional debt.',
  },
  {
    q: 'How can invoice financing help when clients pay slowly?',
    a: 'Even if your clients are creditworthy, slow payment cycles can kill your operations. Invoice financing lets you extend generous net terms to clients while getting paid immediately yourself. You get the best of both worlds — competitive client terms and immediate cash flow.',
  },
  {
    q: 'How can invoice financing help a business avoid traditional debt?',
    a: 'Invoice financing is technically not a loan — it\'s an advance against money already owed to you. It doesn\'t add traditional debt to your balance sheet, doesn\'t typically require personal guarantees, and qualifies based on your clients\' creditworthiness rather than just yours. This makes it accessible to businesses that don\'t qualify for traditional financing.',
  },
]

const FAQS = [
  { q: 'What is the difference between invoice financing and invoice factoring?', a: 'Invoice financing uses your invoices as collateral for an advance — you remain responsible for collecting from clients. Invoice factoring means selling the invoice to a factor who collects directly from your client. We offer both structures depending on your preference and client relationships.' },
  { q: 'Does invoice financing notify my clients?', a: 'It depends on the structure. Disclosed factoring (where the factor collects from your client) does notify clients. Confidential invoice financing does not — you collect as normal. We match you to lenders who offer either structure.' },
  { q: 'What types of invoices qualify for financing?', a: 'Qualifying invoices are typically B2B invoices to creditworthy businesses or government entities, completed and undisputed, on net-30 to net-90 terms. Invoices to consumers (B2C) generally don\'t qualify.' },
  { q: 'How is invoice financing different from a business loan?', a: 'Invoice financing isn\'t a loan — it\'s an advance against money already owed to your business. It requires a different credit profile than a loan, doesn\'t add traditional debt, and qualifies based on your clients\' creditworthiness rather than yours alone.' },
  { q: 'What percentage of my invoices can I advance?', a: 'Most invoice financing lenders advance 80–90% of the invoice value upfront. The remaining balance, minus the lender\'s fee (typically 1–3% per month outstanding), is paid when your client settles.' },
  { q: 'Can a new business use invoice financing?', a: 'Yes — invoice financing is one of the most accessible forms of funding for newer businesses. Since it qualifies based on your clients\' creditworthiness rather than your history, companies as young as 3 months old with strong B2B clients can qualify.' },
]

export default function InvoiceFinancingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FinancialProduct', name: 'Invoice Financing', description: 'Advance up to 90% of outstanding B2B invoices within 24 hours. Stop waiting 30–90 days to get paid.', provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' } }) }} />
      <SmartBar /><Nav /><MobileCTA />
      <main className="pt-[100px]">

        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-slate-300">Services</Link><span>›</span>
              <span className="text-slate-300">Invoice Financing</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span>📋</span><span className="text-xs font-semibold text-white">Get paid today · Stop waiting 90 days</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">Invoice financing — stop waiting to get paid.</h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">If your business invoices other businesses, you&apos;re likely sitting on thousands in outstanding receivables waiting 30, 60, or 90 days for payment. Invoice financing advances you up to 90% of that value today — no new debt, no fixed monthly payments.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">Advance My Invoices →</Link>
                  <Link href="#how-it-helps" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">How It Helps You</Link>
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Invoice Financing — At a Glance</div>
                <div className="space-y-3 mb-5">
                  {[['Amount','Up to 90% of invoice value'],['Funding Speed','24 hours'],['Rate','1–3% per month'],['Min. Credit Score','500+'],['Min. Time in Business','3 months']].map(([label,val]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-xs text-slate-400">{label}</span><span className="text-sm font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group">
                  <div><div className="text-sm font-bold text-white">Get Matched to Invoice Lenders</div><div className="text-xs text-blue-200">Free · No hard credit pull</div></div>
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
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">What can invoice financing do for your business?</h2>
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
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Advance My Invoices Today →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Which businesses use invoice financing?</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🏗️', title: 'Construction & Contractors', desc: 'Wait less for GC payments while funding your next project.' },
                { icon: '🚚', title: 'Trucking & Freight', desc: 'Factor freight invoices and cover fuel, maintenance, and driver pay immediately.' },
                { icon: '💻', title: 'Staffing & Agencies', desc: 'Fund payroll weekly while clients pay on net-30 or net-60 terms.' },
                { icon: '🏥', title: 'Healthcare & Medical', desc: 'Bridge insurance reimbursement delays with invoice advances on submitted claims.' },
                { icon: '⚙️', title: 'Manufacturing', desc: 'Finance production runs against purchase orders from creditworthy buyers.' },
                { icon: '🛡️', title: 'Professional Services', desc: 'Law firms, consultants, and agencies converting work-in-progress to immediate cash.' },
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
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">Invoice financing qualifications</h2>
              <ul className="space-y-2.5">
                {['B2B invoices (invoicing other businesses)','Creditworthy clients (established companies, government)','500+ personal credit score','3+ months in business','No outstanding invoice disputes'].map(q => (
                  <li key={q} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-xs flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-bold text-base text-slate-900 mb-3">Have outstanding invoices right now?</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Apply in 2 minutes with a sample invoice and we match you to lenders based on your client profile. Qualification is based primarily on your clients&apos; creditworthiness — not just yours.</p>
              <Link href="/apply" className="block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl text-center transition-all">Advance My Invoices — Free →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Invoice financing — frequently asked questions</h2></div>
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
                { href: '/services/lines-of-credit', icon: '💳', name: 'Lines of Credit', sub: 'Up to $1M · Revolving' },
                { href: '/services/merchant-cash-advance', icon: '⚡', name: 'Merchant Cash Advance', sub: 'Up to $750K · Same day' },
                { href: '/services/term-loans', icon: '📈', name: 'Term Loans', sub: '$25K–$2M · Same day' },
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
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to stop waiting to get paid?</h2>
            <p className="text-blue-200 mb-7">Apply free in 2 minutes. No hard credit pull. Matched to invoice financing specialists in our network.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">Advance My Invoices — Free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
