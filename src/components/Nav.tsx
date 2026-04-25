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
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
      style={{ top: '36px' }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 14V8C2 4.686 4.686 2 8 2C11.314 2 14 4.686 14 8V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="11" width="3.5" height="3" rx="0.5" fill="white"/>
              <rect x="10.5" y="11" width="3.5" height="3" rx="0.5" fill="white"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-display font-extrabold text-[15px] text-slate-900 tracking-tight leading-none">
              Gateway <span className="text-blue-600">Capital</span>
            </div>
            <div className="text-[8px] font-semibold tracking-[0.18em] text-slate-400 uppercase mt-0.5 leading-none">
              Business Funding
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#products" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Funding Products
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            How It Works
          </Link>
          <Link href="/#why-us" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Why Gateway
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/apply"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
          >
            Apply Now →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16"/>
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h14M3 10h14M3 14h14"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1 shadow-lg">
          <Link href="/#products" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
            Funding Products
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
            How It Works
          </Link>
          <Link href="/#why-us" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
            Why Gateway
          </Link>
          <div className="pt-2 border-t border-slate-100 mt-1">
            <Link
              href="/apply"
              className="block bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now — It&apos;s Free →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
