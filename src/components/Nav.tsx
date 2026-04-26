'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// Logo mark — G letterform with open door inside, matching the actual Gateway Capital logo
function GatewayMark({ size = 36, onDark = false }: { size?: number; onDark?: boolean }) {
  const blue = onDark ? '#FFFFFF' : '#5B9BD5'
  const darkBlue = onDark ? 'rgba(255,255,255,0.7)' : '#4A86C1'
  const door = onDark ? 'rgba(255,255,255,0.85)' : '#FFFFFF'
  const doorFrame = onDark ? 'rgba(255,255,255,0.4)' : '#4A86C1'

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer G arc — the thick C/G shape */}
      <path
        d="M85 50 C85 69.33 69.33 85 50 85 C30.67 85 15 69.33 15 50 C15 30.67 30.67 15 50 15 C63.5 15 75.2 22.5 81.5 33.5"
        stroke={blue}
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      {/* G crossbar — horizontal bar going right then down */}
      <path
        d="M81.5 50 L57 50 L57 65"
        stroke={blue}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Open door inside the G */}
      {/* Door frame */}
      <rect x="34" y="34" width="22" height="32" rx="1" fill={doorFrame} opacity="0.25" />
      {/* Door panel — slightly open */}
      <path
        d="M34 66 L34 34 L53 36 L53 66 Z"
        fill={blue}
        opacity="0.9"
      />
      {/* Door opening / light gap */}
      <path
        d="M34 34 L34 66"
        stroke={door}
        strokeWidth="2"
        fill="none"
      />
      {/* Door knob */}
      <circle cx="50" cy="51" r="2.5" fill={door} opacity="0.9" />
      {/* Light beam from door */}
      <path
        d="M34 50 L22 56 M34 46 L24 44 M34 54 L23 58"
        stroke={blue}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  )
}

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
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
      style={{ top: '36px' }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <GatewayMark size={40} />
          {/* Vertical divider — matching the logo */}
          <div className="w-px h-9 bg-slate-200" />
          <div className="leading-none">
            <div
              className="font-extrabold tracking-tight leading-none"
              style={{
                fontSize: '17px',
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: '#5B9BD5',
                letterSpacing: '0.08em',
              }}
            >
              GATEWAY
            </div>
            <div
              className="leading-none mt-0.5"
              style={{
                fontSize: '11px',
                fontFamily: '"Arial", sans-serif',
                fontWeight: '700',
                color: '#4A5568',
                letterSpacing: '0.22em',
              }}
            >
              CAPITAL
            </div>
            <div
              className="leading-none mt-0.5"
              style={{
                fontSize: '7px',
                fontFamily: '"Arial", sans-serif',
                fontWeight: '500',
                color: '#5B9BD5',
                letterSpacing: '0.15em',
              }}
            >
              YOUR GATEWAY TO BUSINESS FUNDING
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
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
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: '#5B9BD5' }}
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
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h14M3 10h14M3 14h14" />
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
              className="block text-white text-sm font-semibold px-5 py-3 rounded-lg text-center transition-colors"
              style={{ background: '#5B9BD5' }}
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
