'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const PROFILES = [
  { icon: '🤖', text: 'AI found the right equipment lender for a construction company in', amount: '< 30 seconds' },
  { icon: '🧠', text: 'Our AI matched a restaurant owner to their perfect SBA lender —', amount: 'funded in 48hrs' },
  { icon: '⚡', text: 'AI identified the right working capital provider for a retailer in', amount: 'seconds' },
  { icon: '🎯', text: 'A healthcare practice was matched to a specialist lender —', amount: '$500K funded' },
  { icon: '🤖', text: 'AI matched a trucking company to the right fleet lender in', amount: '< 60 seconds' },
  { icon: '🧠', text: 'Our AI found the right invoice factor for a staffing agency —', amount: 'same day' },
  { icon: '⚡', text: 'A tech company was matched to the right revenue-based lender in', amount: 'minutes' },
  { icon: '🎯', text: 'AI precision-matched a franchise owner to their SBA lender —', amount: '$450K funded' },
]

const WINDOW_SECS = 600

export default function SmartBar() {
  const [profileIdx, setProfileIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const [secs, setSecs] = useState(420)
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
        try {
          sessionStorage.setItem('gc_cd', String(next))
          sessionStorage.setItem('gc_cd_ts', String(Date.now()))
        } catch {}
        return next
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastScrollY.current && y > 100) setVisible(false)
      else setVisible(true)
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
    <div className={`fixed top-0 left-0 right-0 z-50 h-9 flex items-stretch transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Left — AI match flash */}
      <div className="flex-1 bg-slate-900 flex items-center justify-center gap-2 px-4 overflow-hidden min-w-0">
        <span className="text-base flex-shrink-0">{profile.icon}</span>
        <span className="text-slate-400 text-xs truncate hidden sm:block">{profile.text}</span>
        <span className="text-yellow-400 text-xs font-bold flex-shrink-0">{profile.amount}</span>
        <Link href="/apply" className="text-white text-xs font-semibold border-b border-white/30 hover:border-white transition-colors ml-1 flex-shrink-0 hidden md:inline">
          Get Your Match →
        </Link>
      </div>

      {/* Right — countdown */}
      <div className={`flex-shrink-0 flex items-center gap-2 px-4 text-xs transition-colors ${urgent ? 'bg-amber-500' : 'bg-blue-600'}`}>
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse ${urgent ? 'bg-white' : 'bg-blue-300'}`} />
        <span className="text-white/70 hidden lg:inline whitespace-nowrap">AI matching in</span>
        <span className="font-bold text-white font-mono tracking-wide">{mins}:{seconds}</span>
        <span className="text-white/70 whitespace-nowrap hidden sm:inline">— apply now</span>
      </div>
    </div>
  )
}
