'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4 18V10C4 6.686 6.686 4 10 4C13.314 4 16 6.686 16 10V18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <rect x="4" y="14" width="4" height="4" rx="0.5" fill="white"/>
              <rect x="12" y="14" width="4" height="4" rx="0.5" fill="white"/>
              <line x1="7" y1="10" x2="13" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <span className="font-display font-extrabold text-[15px] text-blue-950 tracking-tight leading-none block">
              Gateway <span className="text-blue-600">Capital</span>
            </span>
            <span className="text-[8px] font-medium tracking-widest text-slate-400 uppercase leading-none block mt-0.5">
              Business Funding
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#products" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Funding Products</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">How It Works</Link>
          <Link href="/#why-us" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Why Gateway</Link>
        </div>

        <div className="hidden md:block">
          <Link href="/apply" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5">
            Apply Now →
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l12 12M16 4L4 16"/></svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h14M3 10h14M3 14h14"/></svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-3">
          <Link href="/#products" className="text-sm font-medium text-slate-600 py-2" onClick={() => setMenuOpen(false)}>Funding Products</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 py-2" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/#why-us" className="text-sm font-medium text-slate-600 py-2" onClick={() => setMenuOpen(false)}>Why Gateway</Link>
          <Link href="/apply" className="bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-lg text-center mt-1" onClick={() => setMenuOpen(false)}>
            Apply Now — It&apos;s Free →
          </Link>
        </div>
      )}
    </nav>
  )
}
