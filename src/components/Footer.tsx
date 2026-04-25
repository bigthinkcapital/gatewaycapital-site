import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 18V10C4 6.686 6.686 4 10 4C13.314 4 16 6.686 16 10V18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <rect x="4" y="14" width="4" height="4" rx="0.5" fill="white"/>
                  <rect x="12" y="14" width="4" height="4" rx="0.5" fill="white"/>
                  <line x1="7" y1="10" x2="13" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-[15px] tracking-tight">Gateway <span className="text-blue-400">Capital</span></span>
            </div>
            <p className="text-sm text-blue-200/60 leading-relaxed max-w-xs">
              Your gateway to business funding. We connect small businesses to the right capital — fast, transparent, and on your terms.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Funding Products</h4>
            <ul className="space-y-2.5">
              {['SBA Loans', 'Term Loans', 'Lines of Credit', 'Equipment Financing', 'Invoice Financing', 'Merchant Cash Advance'].map(p => (
                <li key={p}><Link href="/apply" className="text-sm text-blue-200/60 hover:text-white transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Get Funded</h4>
            <p className="text-sm text-blue-200/60 mb-5 leading-relaxed">Apply in 2 minutes. No hard credit pull. Decision within 24 hours.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/30">
              Start Application →
            </Link>
          </div>
        </div>
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200/40">© {new Date().getFullYear()} Gateway Capital. All rights reserved.</p>
          <p className="text-xs text-blue-200/40 text-center md:text-right max-w-lg">
            Gateway Capital is a lending marketplace. All loans subject to credit approval. Terms and conditions apply. Not available in all states.
          </p>
        </div>
      </div>
    </footer>
  )
}
