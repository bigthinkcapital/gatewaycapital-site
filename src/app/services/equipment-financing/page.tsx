import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'Equipment Financing for Businesses | Gateway Capital',
  description: 'Get matched to equipment financing lenders offering up to 100% financing on business equipment. New and used accepted. Same-day to 72-hour funding. Apply in 2 minutes. No hard credit pull.',
  keywords: ['equipment financing', 'equipment loans', 'business equipment financing', 'equipment leasing', 'commercial equipment loan', 'Section 179 financing'],
  alternates: { canonical: 'https://gatewaycapitalfunding.com/services/equipment-financing' },
  openGraph: { title: 'Equipment Financing for Businesses | Gateway Capital', description: 'Up to 100% financing on new and used equipment. 24–72 hour funding. Get matched free.', type: 'website' },
}

const HOW_IT_HELPS = [
  {
    q: 'How can equipment financing help your business grow?',
    a: 'Equipment is often the limiting factor on business growth — you need the machine before you can take the contract. Equipment financing lets you acquire revenue-generating assets immediately without depleting working capital. The equipment pays for itself through the revenue it generates, while your cash stays available for operations and opportunities.',
  },
  {
    q: 'How can equipment financing help preserve your working capital?',
    a: 'Paying cash for a $200,000 piece of equipment can cripple your working capital and create dangerous vulnerability. Equipment financing spreads that cost over months or years with predictable payments, keeping your cash liquid for payroll, materials, marketing, and unexpected costs. It\'s a capital allocation decision as much as a financing one.',
  },
  {
    q: 'How can equipment financing help a business with lower credit?',
    a: 'Because the equipment itself serves as collateral, lenders face lower risk and are more willing to approve borrowers who wouldn\'t qualify for unsecured financing. This makes equipment financing one of the most accessible forms of business credit — credit scores as low as 550 can qualify with the right equipment and business profile.',
  },
  {
    q: 'How can equipment financing help with tax planning?',
    a: 'Section 179 of the IRS tax code allows businesses to deduct the full purchase price of financed equipment in the year it\'s placed in service — up to $1,160,000. This means you can finance equipment, take the full deduction immediately, and significantly reduce your tax liability. Consult your accountant to maximize this benefit alongside your financing.',
  },
]

const FAQS = [
  { q: 'What is the difference between equipment financing and equipment leasing?', a: 'Equipment financing (a loan) means you own the equipment from day one and build equity as you pay. Equipment leasing means the lender owns the equipment and you pay to use it — typically with a buyout option at the end. Financing is better if you want ownership; leasing is better for equipment you\'ll upgrade frequently.' },
  { q: 'Can I finance used equipment?', a: 'Yes. Most equipment financing lenders in our network fund used equipment, typically up to 10–15 years old depending on the asset type. Used equipment often means lower loan amounts but the same ownership benefits.' },
  { q: 'How much can I borrow for equipment financing?', a: 'Most lenders finance up to 100% of the equipment\'s purchase price or fair market value. Some require a 10–20% down payment for lower credit scores or older equipment. Amounts range from $5,000 to $5M+ depending on the asset.' },
  { q: 'What equipment qualifies for financing?', a: 'Almost any revenue-generating business equipment qualifies — vehicles, machinery, technology, medical devices, restaurant equipment, construction equipment, agricultural tools, and more. The lender evaluates the equipment\'s resale value as part of underwriting.' },
  { q: 'How fast does equipment financing fund?', a: 'For straightforward applications with an invoice or quote, approval and funding typically happen in 24–72 hours. The lender may pay the vendor directly or reimburse you after purchase.' },
  { q: 'What is Section 179 and how does it apply to equipment financing?', a: 'Section 179 allows businesses to deduct the full cost of qualifying financed equipment in the year it\'s placed in service (up to $1.16M). This means you can finance equipment and still take the full tax deduction, effectively reducing the net cost significantly.' },
]

export default function EquipmentFinancingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FinancialProduct', name: 'Equipment Financing', description: 'Business equipment financing up to $5M. New and used equipment accepted. 24–72 hour funding.', provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' } }) }} />
      <SmartBar /><Nav /><MobileCTA />
      <main className="pt-[100px]">

        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300">Home</Link><span>›</span>
              <Link href="/services" className="hover:text-slate-300">Services</Link><span>›</span>
              <span className="text-slate-300">Equipment Financing</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span>⚙️</span><span className="text-xs font-semibold text-white">Finance equipment up to 100% · Keep cash liquid</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">Equipment financing — the asset pays for itself.</h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">Equipment financing lets you acquire the machinery, vehicles, or technology your business needs without a large cash outlay. The equipment itself serves as collateral, making approval easier and rates more competitive than unsecured loans.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">Get My Equipment Financing →</Link>
                  <Link href="#how-it-helps" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">How It Helps You</Link>
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Equipment Financing — At a Glance</div>
                <div className="space-y-3 mb-5">
                  {[['Amount','Up to $5,000,000'],['Funding Speed','24–72 hours'],['Rate','From 1.75%/month'],['Min. Credit Score','550+'],['Min. Time in Business','1 year']].map(([label,val]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/8">
                      <span className="text-xs text-slate-400">{label}</span><span className="text-sm font-bold text-white">{val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group">
                  <div><div className="text-sm font-bold text-white">Get Matched to Equipment Lenders</div><div className="text-xs text-blue-200">Free · No hard credit pull</div></div>
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
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">What can equipment financing do for your business?</h2>
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
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get My Equipment Financing Offers →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Equipment we finance</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🚚', title: 'Commercial Vehicles', desc: 'Trucks, vans, trailers, and specialty vehicles for transportation and logistics.' },
                { icon: '🏗️', title: 'Construction Equipment', desc: 'Excavators, cranes, bulldozers, lifts, and heavy machinery.' },
                { icon: '🍕', title: 'Restaurant Equipment', desc: 'Ovens, refrigeration, POS systems, and commercial kitchen equipment.' },
                { icon: '🏥', title: 'Medical Equipment', desc: 'MRI machines, dental chairs, diagnostic equipment, and surgical tools.' },
                { icon: '🖨️', title: 'Technology & Printing', desc: 'Servers, workstations, CNC machines, and large-format printers.' },
                { icon: '🌾', title: 'Agricultural Equipment', desc: 'Tractors, harvesters, irrigation systems, and farming machinery.' },
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
              <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-4">Equipment financing qualifications</h2>
              <ul className="space-y-2.5">
                {['550+ personal credit score','1+ year in business','Equipment invoice or quote','Business bank account','New or used equipment accepted'].map(q => (
                  <li key={q} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-xs flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="font-bold text-base text-slate-900 mb-3">Have an equipment quote ready?</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Apply in 2 minutes with a vendor invoice or quote and we match you to equipment lenders who specialize in your asset type and industry.</p>
              <Link href="/apply" className="block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl text-center transition-all">Get My Equipment Financing — Free →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10"><h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Equipment financing — frequently asked questions</h2></div>
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
                { href: '/services/sba-loans', icon: '🏛️', name: 'SBA Loans', sub: 'Up to $5M · Lowest rates' },
                { href: '/services/term-loans', icon: '📈', name: 'Term Loans', sub: '$25K–$2M · Same day' },
                { href: '/services/lines-of-credit', icon: '💳', name: 'Lines of Credit', sub: 'Up to $1M · Revolving' },
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
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">Ready to finance your equipment?</h2>
            <p className="text-blue-200 mb-7">Apply free in 2 minutes. No hard credit pull. Matched to equipment lenders who specialize in your asset type.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">Apply Free — Get My Equipment Offers →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
