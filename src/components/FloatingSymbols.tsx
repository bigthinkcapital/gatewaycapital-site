'use client'
import { useEffect, useState } from 'react'

interface Symbol {
  id: number
  char: string
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
}

const CHARS = ['$', '%', '💰', '📈', '$', '$', '%', '💵', '📊', '$', '💲', '%']

export default function FloatingSymbols() {
  const [symbols, setSymbols] = useState<Symbol[]>([])

  useEffect(() => {
    const generated: Symbol[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      char: CHARS[i % CHARS.length],
      x: Math.random() * 100,
      size: Math.random() * 18 + 12,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.12 + 0.04,
    }))
    setSymbols(generated)
  }, [])

  if (symbols.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(110%) rotate(-10deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-10%) rotate(10deg); opacity: 0; }
        }
      `}</style>
      {symbols.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            bottom: '-5%',
            fontSize: `${s.size}px`,
            opacity: s.opacity,
            animation: `floatUp ${s.duration}s ${s.delay}s infinite linear`,
            color: '#1e3a6e',
            fontWeight: 700,
            userSelect: 'none',
          }}
        >
          {s.char}
        </div>
      ))}
    </div>
  )
}
