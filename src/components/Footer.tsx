import Link from 'next/link'

function GatewayMarkSmall({ onDark = false }: { onDark?: boolean }) {
  const blue = onDark ? '#FFFFFF' : '#5B9BD5'
  const door = onDark ? 'rgba(255,255,255,0.85)' : '#FFFFFF'

  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M85 50 C85 69.33 69.33 85 50 85 C30.67 85 15 69.33 15 50 C15 30.67 30.67 15 50 15 C63.5 15 75.2 22.5 81.5 33.5"
        stroke={blue}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M81.5 50 L57 50 L57 65"
        stroke={blue}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M34 66 L34 34 L53 36 L53 66 Z" fill={blue} opacity="0.9" />
      <path d="M34 34 L34 66" stroke={door} strokeWidth="2" fill="none" />
      <circle cx="50" cy="51" r="2.5" fill={door} opacity="0.9" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <GatewayMarkSmall onDark />
              <div className="w-px h-8 bg-blue-800" />
              <div className="leading-none">
                <div style={{ fontSize: '15px', fontFamily: 'Georgia, serif', fontWeight: '700', color: '#93C5FD', letterSpacing: '0.08em' }}>
                  GATEWAY
                </div>
                <div style={{ fontSize: '9px', fontFamily: 'Arial, sans-serif', fontWeight: '700', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.2em', marginTop: '2px' }}>
                  CAPITAL
                </div>
              </div>
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
              style={{ background: '#5B9BD5' }}
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
