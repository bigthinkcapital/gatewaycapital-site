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
  const [secs, setSecs] = useState(WINDOW_SECS * 0.7)
  const lastScrollY = useRef(0)

  useEffect(() => {
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
    } catch {}
  }, [])

  useEffect(() => {
    const id = setInterval(() => setProfileIdx(i => (i + 1) % PROFILES.length), 3500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setSecs(s => {
        const next = s <= 0 ? WINDOW_SECS : s - 1
        try { sessionStorage.setItem('gc_cd', String(next)); sessionStorage.setItem('gc_cd_ts', String(Date.now())) } catch {}
        return next
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastScrollY.current || y < 80)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  const profile = PROFILES[profileIdx]
  const urgent = secs < 60

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex h-9 text-xs font-medium transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex-1 bg-slate-900 flex items-center justify-center gap-2 px-3 overflow-hidden min-w-0">
        <span className="shrink-0">{profile.icon}</span>
        <span className="text-slate-400 truncate hidden sm:inline">{profile.text}</span>
        <span className="text-yellow-400 font-bold shrink-0">{profile.amount}</span>
        <Link href="/apply" className="shrink-0 text-white border-b border-white/30 hover:border-white ml-1 transition-colors hidden sm:inline">
          Check Yours →
        </Link>
      </div>
      <div className={`shrink-0 flex items-center gap-2 px-4 transition-colors ${urgent ? 'bg-amber-500' : 'bg-blue-600'}`}>
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${urgent ? 'bg-white' : 'bg-blue-300'}`} />
        <span className="text-white/80 hidden sm:inline whitespace-nowrap">Apply in</span>
        <span className="font-bold text-white font-mono tracking-tight">{m}:{s}</span>
        <span className="text-white/80 whitespace-nowrap hidden sm:inline">for same-day decision</span>
      </div>
    </div>
  )
}
