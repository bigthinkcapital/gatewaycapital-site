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

/* ── Inline SVG logo mark ──────────────────────────────────────────────── */
function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Navy circle background */}
      <circle cx="50" cy="50" r="50" fill="#1e3a6e" />

      {/* ── Bold G letterform (open on right, thick strokes) ── */}
      {/* Outer arc — left half of G */}
      <path
        d="M72 22 C72 22 30 14 18 50 C6 86 38 86 50 84 C62 82 74 74 74 74 L74 52 L54 52 L54 60 L66 60 L66 70 C66 70 58 76 48 75 C34 73 26 62 28 50 C30 37 42 28 56 28 C62 28 68 31 72 35 Z"
        fill="white"
      />

      {/* Cut out center to make it a G not a C — inner white void */}
      <path
        d="M72 22 C68 18 62 15 54 15 C34 15 18 32 18 50 C18 68 34 85 54 85 C66 85 76 77 76 77 L76 50 L52 50 L52 60 L66 60 L66 70 C62 74 58 76 52 76 C36 76 27 64 27 50 C27 36 38 24 54 24 C61 24 67 27 71 32 Z"
        fill="#1e3a6e"
      />

      {/* ── Door frame inside G ── */}
      {/* Left door post */}
      <rect x="35" y="38" width="5" height="32" rx="1" fill="#7ea8d8" />
      {/* Right door post */}
      <rect x="55" y="38" width="5" height="32" rx="1" fill="#7ea8d8" />
      {/* Door top lintel */}
      <rect x="35" y="37" width="25" height="4" rx="1" fill="#7ea8d8" />

      {/* ── Open door panel (swung open to the left) ── */}
      <rect x="36" y="41" width="13" height="27" rx="1" fill="#a8c4e0" opacity="0.85" />
      {/* Door knob */}
      <circle cx="47" cy="56" r="1.5" fill="#1e3a6e" />

      {/* ── Rising bar chart columns (inside doorway, perspective) ── */}
      <rect x="53" y="57" width="4" height="13" rx="0.5" fill="white" opacity="0.9" />
      <rect x="59" y="51" width="4" height="19" rx="0.5" fill="white" />
      <rect x="65" y="54" width="4" height="16" rx="0.5" fill="white" opacity="0.85" />

      {/* ── Perspective path / road curving in ── */}
      <path
        d="M42 70 Q50 72 50 82"
        stroke="#7ea8d8"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M53 70 Q50 73 50 82"
        stroke="#7ea8d8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

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

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
            <LogoMark size={44} />
          </div>
          <div className="leading-none">
            <div className="font-display font-extrabold text-xl tracking-tight leading-none" style={{ color: '#1e3a6e' }}>
              Gateway <span style={{ color: '#2563eb' }}>Capital</span>
            </div>
            <div className="text-[9px] font-semibold tracking-[0.18em] text-slate-400 uppercase mt-1 leading-none">
              Your Gateway to Business Funding
            </div>
          </div>
        </Link>

        {/* Desktop links */}
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
                  <Link href="/services" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group mb-1" onClick={() => setActiveDropdown(null)}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: '#1e3a6e' }}>💼</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">All Services</div>
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
                  <Link href="/industries" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group mb-1" onClick={() => setActiveDropdown(null)}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: '#1e3a6e' }}>🏭</div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">All Industries</div>
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

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/apply" className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: '#1e3a6e' }}>
            Apply Now →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4l12 12M16 4L4 16"/></svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h14M3 10h14M3 14h14"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
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
            <Link href="/apply" className="block text-white text-sm font-semibold px-5 py-3 rounded-lg text-center transition-colors" style={{ backgroundColor: '#1e3a6e' }} onClick={() => setMenuOpen(false)}>
              Apply Now — It&apos;s Free →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
