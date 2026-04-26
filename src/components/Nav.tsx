'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const INDUSTRIES = [
  { name: 'Restaurant & Food Service', slug: 'restaurant', icon: '🍕' },
  { name: 'Construction & Contractors', slug: 'construction', icon: '🏗️' },
  { name: 'Healthcare & Medical', slug: 'healthcare', icon: '🏥' },
  { name: 'Retail & E-commerce', slug: 'retail', icon: '🛍️' },
  { name: 'Transportation & Trucking', slug: 'transportation', icon: '🚚' },
  { name: 'Technology & SaaS', slug: 'technology', icon: '💻' },
  { name: 'Franchise Businesses', slug: 'franchise', icon: '🍔' },
  { name: 'Real Estate', slug: 'real-estate', icon: '🏢' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
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
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
              <path d="M2 14V8C2 4.686 4.686 2 8 2C11.314 2 14 4.686 14 8V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="11" width="3.5" height="3" rx="0.5" fill="white"/>
              <rect x="10.5" y="11" width="3.5" height="3" rx="0.5" fill="white"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-none">
              Gateway <span className="text-blue-600">Capital</span>
            </div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-slate-400 uppercase mt-1 leading-none">
              Business Funding
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <Link href="/#products" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Products
          </Link>

          {/* Industries dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Industries
              <svg
                width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M3 5l4 4 4-4"/>
              </svg>
            </button>

            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 overflow-hidden z-50">
                <div className="p-2">
                  <Link
                    href="/industries"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group mb-1"
                    onClick={() => setIndustriesOpen(false)}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm flex-shrink-0">🏭</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">All Industries</div>
                      <div className="text-xs text-slate-400">View every industry we serve</div>
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 my-2" />
                  {INDUSTRIES.map(ind => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      <span className="text-base w-6 text-center flex-shrink-0">{ind.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{ind.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

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
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1 shadow-lg max-h-[80vh] overflow-y-auto">
          <Link href="/#products" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/industries" className="text-sm font-bold text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>All Industries</Link>
          <div className="pl-3 flex flex-col gap-0.5">
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-sm text-slate-600 py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <span>{ind.icon}</span>{ind.name}
              </Link>
            ))}
          </div>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="/#why-us" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>Why Gateway</Link>
          <div className="pt-2 border-t border-slate-100 mt-1">
            <Link href="/apply" className="block bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors" onClick={() => setMenuOpen(false)}>
              Apply Now — It&apos;s Free →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
