'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const PROFILES = [
  { icon: '🏗️', text: 'Construction businesses qualify for up to', amount: '$250,000' },
  { icon: '🍕', text: 'Restaurant owners typically qualify for up to', amount: '$85,000' },
  { icon: '🏥', text: 'Healthcare practices often qualify for up to', amount: '$500,000' },
  { icon: '🛍️', text: 'Retail businesses with 2+ years qualify for up to', amount: '$150,000' },
  { icon: '⚙️', text: 'Manufacturers with strong revenue qualify for up to', amount: '$1,200,000' },
  { icon: '🚚', text: 'Owner-operators & truckers qualify for up to', amount: '$75,000' },
  { icon: '💻', text: 'Tech companies & agencies qualify for up to', amount: '$300,000' },
  { icon: '🌱', text: 'Established businesses (5+ yrs) qualify for up to', amount: '$2,000,000' },
]

const WINDOW_SECS = 600

export default function SmartBar() {
  const [profileIdx, setProfileIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [secs, setSecs] = useState(420)
  const lastScrollY = useRef(0)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    try {
      const stored = sessionStorage.getItem('gc_cd')
      const ts = sessionStorage.getItem('gc_cd_ts')
      if (stored && ts) {
        const elapsed = Math.floor((Date.now() - parseInt(ts)) / 1000)
        const remaining = parseInt(stored) - elapsed
        setSecs(remaining > 0 ? remaining : WINDOW_SECS)
      } else {
        setSecs(Math.floor(Math.random() * 360) + 120)
      }
    } catch { /* sessionStorage not available */ }
  }, [])

  // Rotate profiles every 3.5s
  useEffect(() => {
    const id = setInterval(() => setProfileIdx(i => (i + 1) % PROFILES.length), 3500)
    return () => clearInterval(id)
  }, [])

  // Countdown ticker
  useEffect(() => {
    const id = setInterval(() => {
      setSecs(s => {
        const next = s <= 0 ? WINDOW_SECS : s - 1
        try {
          sessionStorage.setItem('gc_cd', String(next))
          sessionStorage.setItem('gc_cd_ts', String(Date.now()))
        } catch { /* ignore */ }
        return next
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastScrollY.current && y > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const mins = Math.floor(secs / 60).toString().padStart(2, '0')
  const seconds = (secs % 60).toString().padStart(2, '0')
  const profile = PROFILES[profileIdx]
  const urgent = secs < 60

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-9 flex items-stretch transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Left — pre-qual message */}
      <div className="flex-1 bg-slate-900 flex items-center justify-center gap-2 px-4 overflow-hidden min-w-0">
        <span className="text-base flex-shrink-0">{profile.icon}</span>
        <span className="text-slate-400 text-xs truncate hidden sm:block">{profile.text}</span>
        <span className="text-yellow-400 text-xs font-bold flex-shrink-0">{profile.amount}</span>
        <Link
          href="/apply"
          className="text-white text-xs font-semibold border-b border-white/30 hover:border-white transition-colors ml-1 flex-shrink-0 hidden md:inline"
        >
          Check Yours →
        </Link>
      </div>

      {/* Right — countdown */}
      <div className={`flex-shrink-0 flex items-center gap-2 px-4 text-xs transition-colors ${urgent ? 'bg-amber-500' : 'bg-blue-600'}`}>
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse ${urgent ? 'bg-white' : 'bg-blue-300'}`} />
        <span className="text-white/70 hidden lg:inline whitespace-nowrap">Apply in</span>
        <span className="font-bold text-white font-mono tracking-wide">{mins}:{seconds}</span>
        <span className="text-white/70 whitespace-nowrap hidden sm:inline">for same-day decision</span>
      </div>
    </div>
  )
}
