'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const STORIES = [
  { icon: '🚚', text: 'A trucking company in Texas just received', amount: '$500,000' },
  { icon: '🏗️', text: 'A construction contractor in Florida was funded', amount: '$250,000' },
  { icon: '🍕', text: 'A restaurant group in New York secured', amount: '$85,000' },
  { icon: '🏥', text: 'A healthcare practice in California received', amount: '$400,000' },
  { icon: '🛒', text: 'An e-commerce brand in Georgia got funded', amount: '$120,000' },
  { icon: '⚙️', text: 'A manufacturer in Ohio was approved for', amount: '$750,000' },
  { icon: '🔨', text: 'A roofing contractor in Arizona secured', amount: '$95,000' },
  { icon: '💊', text: 'A pharmacy in Illinois received', amount: '$300,000' },
  { icon: '🚛', text: 'A logistics company in Tennessee was funded', amount: '$1,200,000' },
  { icon: '🍔', text: 'A franchise owner in Nevada received', amount: '$180,000' },
]

export default function SmartBar() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % STORIES.length), 3800)
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

  const story = STORIES[idx]

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-9 flex items-center justify-center gap-2 px-4 bg-slate-900 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <span className="text-base flex-shrink-0">{story.icon}</span>
      <span className="text-slate-400 text-xs truncate hidden sm:inline">{story.text}</span>
      <span className="text-yellow-400 text-xs font-bold flex-shrink-0">{story.amount}</span>
      <span className="text-slate-600 hidden sm:inline text-xs">·</span>
      <Link
        href="/apply"
        className="text-blue-400 text-xs font-semibold hover:text-blue-300 transition-colors flex-shrink-0 hidden sm:inline"
      >
        Apply Now →
      </Link>
    </div>
  )
}
