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

const SERVICES = [
  { name: 'SBA Loans', slug: 'sba-loans', icon: '🏛️' },
  { name: 'Term Loans', slug: 'term-loans', icon: '📈' },
  { name: 'Lines of Credit', slug: 'lines-of-credit', icon: '💳' },
  { name: 'Equipment Financing', slug: 'equipment-financing', icon: '⚙️' },
  { name: 'Invoice Financing', slug: 'invoice-financing', icon: '📋' },
  { name: 'Working Capital', slug: 'working-capital', icon: '⚡' },
]

type DropdownKey = 'services' | 'industries' | null

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggle = (key: DropdownKey) =>
    setActiveDropdown(prev => (prev === key ? null : key))

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
      style={{ top: '36px' }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Simple navy circle mark with G */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity group-hover:opacity-90"
            style={{ backgroundColor: '#1e3a6e' }}
          >
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                fontSize: '22px',
                color: 'white',
                lineHeight: 1,
                letterSpacing: '-1px',
              }}
            >
              G
            </span>
          </div>
          <div className="leading-none">
            <div
              className="font-extrabold tracking-tight leading-none"
              style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: '#1e3a6e' }}
            >
              Gateway <span style={{ color: '#2563eb' }}>Capital</span>
            </div>
            <div
              className="uppercase font-semibold leading-none mt-1"
              style={{ fontSize: '0.55rem', letterSpacing: '0.17em', color: '#64748b' }}
            >
              Your Gateway to Business Funding
            </div>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-6">

          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => toggle('services')}
              className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Services
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}>
                <path d="M3 5l4 4 4-4"/>
              </svg>
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 overflow-hidden z-50">
                <div className="p-2">
                  <Link href="/services"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group mb-1"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: '#1e3a6e' }}>💼</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">All Services</div>
                      <div className="text-xs text-slate-400">View every funding product</div>
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 my-2" />
                  {SERVICES.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-base w-6 text-center flex-shrink-0">{s.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div className="relative">
            <button
              onClick={() => toggle('industries')}
              className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Industries
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className={`transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`}>
                <path d="M3 5l4 4 4-4"/>
              </svg>
            </button>
            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 overflow-hidden z-50">
                <div className="p-2">
                  <Link href="/industries"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group mb-1"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: '#1e3a6e' }}>🏭</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">All Industries</div>
                      <div className="text-xs text-slate-400">View every industry we serve</div>
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 my-2" />
                  {INDUSTRIES.map(ind => (
                    <Link key={ind.slug} href={`/industries/${ind.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      onClick={() => setActiveDropdown(null)}
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

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <Link
            href="/apply"
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: '#1e3a6e' }}
          >
            Apply Now →
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4l12 12M16 4L4 16"/></svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h14M3 10h14M3 14h14"/></svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 flex flex-col gap-1 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3 py-1 mt-1">Services</div>
          <Link href="/services" className="text-sm font-bold text-slate-700 py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>All Services</Link>
          <div className="pl-3 flex flex-col gap-0.5">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-slate-600 py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <span>{s.icon}</span>{s.name}
              </Link>
            ))}
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 px-3 py-1 mt-2">Industries</div>
          <Link href="/industries" className="text-sm font-bold text-slate-700 py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>All Industries</Link>
          <div className="pl-3 flex flex-col gap-0.5">
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-sm text-slate-600 py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <span>{ind.icon}</span>{ind.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-slate-100 mt-2 pt-2 flex flex-col gap-1">
            <Link href="/#how-it-works" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>How It Works</Link>
            <Link href="/#why-us" className="text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50" onClick={() => setMenuOpen(false)}>Why Gateway</Link>
          </div>
          <div className="pt-2 border-t border-slate-100 mt-1">
            <Link
              href="/apply"
              className="block text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
              style={{ backgroundColor: '#1e3a6e' }}
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
