import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gateway-capital-logo-transparent.png"
                alt="Gateway Capital"
                className="h-10 w-auto object-contain brightness-0 invert"
                style={{ maxWidth: '200px' }}
              />
            </Link>
            <p className="text-sm text-blue-200/60 leading-relaxed max-w-xs">
              Your gateway to business funding. We connect small businesses to the right capital — fast, transparent, and on your terms.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Funding Products</h4>
            <ul className="space-y-2.5">
              {['SBA Loans', 'Term Loans', 'Lines of Credit', 'Equipment Financing', 'Invoice Financing', 'Merchant Cash Advance'].map(p => (
                <li key={p}>
                  <Link href="/apply" className="text-sm text-blue-200/60 hover:text-white transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Get Funded</h4>
            <p className="text-sm text-blue-200/60 mb-5 leading-relaxed">
              Apply in 2 minutes. No hard credit pull. Decision within 24 hours.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all hover:shadow-lg"
              style={{ background: '#1B3F7A' }}
            >
              Start Application →
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200/40">
            © {new Date().getFullYear()} Gateway Capital. All rights reserved.
          </p>
          <p className="text-xs text-blue-200/40 text-center md:text-right max-w-lg">
            Gateway Capital is a lending marketplace. All loans subject to credit approval. Terms and conditions apply. Not available in all states.
          </p>
        </div>
      </div>
    </footer>
  )
}
