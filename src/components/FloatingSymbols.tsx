'use client'
import { useEffect, useRef } from 'react'

const SYMBOLS = ['$', '%', '$', '💰', '📈', '$', '%', '💵', '$', '📊', '$', '%', '💲', '$', '📈', '💰', '$', '%']

export default function FloatingSymbols() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Inject keyframe animation into document head once
    const styleId = 'float-symbols-style'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        @keyframes floatSymbol {
          0%   { transform: translateY(0) rotate(-8deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(8deg); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    }

    // Create and append symbol elements
    const elements: HTMLSpanElement[] = []

    SYMBOLS.forEach((char, i) => {
      const el = document.createElement('span')
      el.textContent = char
      el.style.cssText = `
        position: absolute;
        left: ${(i / SYMBOLS.length) * 100 + Math.random() * 4}%;
        bottom: -40px;
        font-size: ${Math.random() * 16 + 14}px;
        font-weight: 700;
        color: #1e3369;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        animation: floatSymbol ${Math.random() * 10 + 12}s ${Math.random() * 15}s infinite linear;
      `
      container.appendChild(el)
      elements.push(el)
    })

    return () => {
      elements.forEach(el => el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
