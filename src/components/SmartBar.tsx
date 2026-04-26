'use client'
import { useState, useEffect, useRef } from 'react'

const PROFILES = [
  { industry: 'Restaurant Owner', amount: '$85,000', time: '24 hrs' },
  { industry: 'HVAC Contractor', amount: '$210,000', time: '48 hrs' },
  { industry: 'Medical Practice', amount: '$450,000', time: '3 days' },
  { industry: 'Retail Store', amount: '$55,000', time: '24 hrs' },
  { industry: 'Trucking Company', amount: '$175,000', time: '48 hrs' },
  { industry: 'Dental Office', amount: '$320,000', time: '3 days' },
  { industry: 'Franchise Owner', amount: '$500,000', time: '5 days' },
  { industry: 'E-commerce Brand', amount: '$95,000', time: '24 hrs' },
]

const TOTAL_SECONDS = 10 * 60 // 10-minute window

export default function SmartBar() {
  const [visible, setVisible] = useState(true)
  const [profileIdx, setProfileIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const [seconds, setSeconds] = useState(TOTAL_SECONDS)
  const [urgent, setUrgent] = useState(false)
  const lastScroll = useRef(0)

  // Hide bar on scroll down
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setVisible(current < lastScroll.current || current < 10)
      lastScroll.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Rotate profiles every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setProfileIdx(i => (i + 1) % PROFILES.length)
        setFading(false)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => {
        if (s <= 0) return TOTAL_SECONDS // reset
        const next = s - 1
        setUrgent(next < 60)
        return next
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  const profile = PROFILES[profileIdx]

  return (
    <div
      className="fixed left-0 right-0 z-50 h-9 flex items-center justify-between px-4 transition-transform duration-300"
      style={{
        top: 0,
        backgroundColor: '#1e3a6e',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      {/* Left — rotating pre-qual profile */}
      <div
        className="flex items-center gap-2 text-xs font-medium transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        <span className="text-white/70">Just pre-qualified:</span>
        <span className="text-white font-semibold">{profile.industry}</span>
        <span className="text-white/50 hidden sm:inline">·</span>
        <span className="text-emerald-300 font-bold hidden sm:inline">{profile.amount}</span>
        <span className="text-white/50 hidden sm:inline">·</span>
        <span className="text-white/60 hidden sm:inline">funded in {profile.time}</span>
      </div>

      {/* Right — countdown */}
      <div className="flex items-center gap-2">
        <span className="text-white/60 text-xs hidden sm:inline">Offers expire in</span>
        <span
          className="text-xs font-bold tabular-nums px-2 py-0.5 rounded"
          style={{
            backgroundColor: urgent ? '#ef4444' : 'rgba(255,255,255,0.15)',
            color: urgent ? 'white' : '#fbbf24',
            transition: 'background-color 0.5s',
          }}
        >
          {timeStr}
        </span>
        <a
          href="/apply"
          className="hidden sm:inline text-xs font-bold px-3 py-1 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#2563eb', color: 'white' }}
        >
          Apply Free →
        </a>
      </div>
    </div>
  )
}
