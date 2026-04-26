import Link from 'next/link'
import { LogoHorizontal } from '@/components/GatewayLogo'

const SERVICES = [
  { name: 'SBA Loans', slug: 'sba-loans' },
  { name: 'Term Loans', slug: 'term-loans' },
  { name: 'Lines of Credit', slug: 'lines-of-credit' },
  { name: 'Equipment Financing', slug: 'equipment-financing' },
  { name: 'Invoice Financing', slug: 'invoice-financing' },
  { name: 'Working Capital', slug: 'working-capital' },
]

const INDUSTRIES = [
  { name: 'Restaurant', slug: 'restaurant' },
  { name: 'Construction', slug: 'construction' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Retail', slug: 'retail' },
  { name: 'Transportation', slug: 'transportation' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Franchise', slug: 'franchise' },
  { name: 'Real Estate', slug: 'real-estate' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block mb-4">
              <LogoHorizontal dark size={40} />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-4">
              One application. Multiple lenders compete for your business. You pick the best offer.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Lenders reviewing applications now</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Funding Products</div>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Industries</div>
            <ul className="space-y-2.5">
              {INDUSTRIES.map(i => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Get Funded</div>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#1e3a6e' }}
            >
              Apply Now — Free →
            </Link>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              No hard credit pull · 2-minute application · Funded in as little as 24 hours
            </p>
            <div className="mt-6 space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Contact</div>
              <a href="mailto:info@gatewaycapitalfunding.com" className="text-sm text-slate-400 hover:text-white transition-colors block">
                info@gatewaycapitalfunding.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Gateway Capital. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Disclosures'].map(item => (
              <Link key={item} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-slate-700 leading-relaxed mt-5">
          Gateway Capital is a lending marketplace. We connect businesses with third-party lenders and brokers. We are not a direct lender for all products. Loan approval, terms, and rates are determined by individual lenders based on creditworthiness and other factors. Not all applicants will qualify.
        </p>
      </div>
    </footer>
  )
}
