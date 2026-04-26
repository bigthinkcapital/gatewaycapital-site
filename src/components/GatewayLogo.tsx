/**
 * GatewayLogo — shared brand components
 *
 * Exports:
 *   <LogoMark size={n} />            — mark only, transparent bg (nav, footer standalone)
 *   <LogoHorizontal dark={bool} />   — mark + wordmark (nav light, footer dark)
 */

/* ─────────────────────────────────────────────────────────────────────────
   COLOR PALETTE (matching the uploaded brand mark)
   ───────────────────────────────────────────────────────────────────────── */
const NAVY   = '#1e3a6e'   // main G body
const MID    = '#4a6fa5'   // door panel, bar midtones
const LIGHT  = '#8aa4c8'   // lighter bar accents, road highlight
const WHITE  = '#ffffff'
const ROAD_STRIPE = '#b0bfd4' // road center stripe

/* ─────────────────────────────────────────────────────────────────────────
   MARK — transparent background, scales cleanly at any size
   ───────────────────────────────────────────────────────────────────────── */
export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── OUTER G ARC (full serif G shape) ──────────────────────────── */}
      {/*
          The G is drawn as a single filled path:
          - Starts at the top-right of the C-opening (before the crossbar)
          - Sweeps counter-clockwise around the full outer arc
          - Returns clockwise along the inner arc
          - Ends with the horizontal crossbar shelf on the right

          ViewBox 200×200, center ~(100,105)
      */}
      <path
        d={`
          M 158 46
          C 141 28, 120 18, 96 18
          C 48 18, 10 56, 10 104
          C 10 152, 48 190, 96 190
          C 124 190, 148 177, 162 156
          L 162 100
          L 108 100
          L 108 118
          L 142 118
          L 142 148
          C 128 162, 114 168, 96 168
          C 61 168, 34 142, 34 104
          C 34 66, 61 40, 96 40
          C 114 40, 128 47, 140 60
          Z
        `}
        fill={NAVY}
      />

      {/* ── DOOR FRAME inside the G opening ───────────────────────────── */}
      {/* Left door post */}
      <rect x="72" y="68" width="10" height="72" rx="2" fill={MID} />
      {/* Right door post */}
      <rect x="118" y="68" width="10" height="72" rx="2" fill={MID} />
      {/* Top lintel */}
      <rect x="72" y="65" width="56" height="10" rx="2" fill={MID} />
      {/* Door opening gap (white light) */}
      <rect x="82" y="75" width="36" height="65" rx="1" fill={WHITE} opacity="0.12" />

      {/* ── OPEN DOOR PANEL (swung open to the left, foreshortened) ───── */}
      <path
        d={`M 82 75 L 68 80 L 68 138 L 82 140 Z`}
        fill={MID}
        opacity="0.9"
      />
      {/* Door knob */}
      <circle cx="76" cy="110" r="3" fill={NAVY} opacity="0.7" />

      {/* ── RISING BAR BUILDINGS (through doorway, perspective) ─────────── */}
      {/* Bar 1 — shortest left */}
      <rect x="92"  y="96"  width="12" height="44" rx="1.5" fill={MID}   opacity="0.85" />
      {/* Bar 2 — tallest center */}
      <rect x="107" y="82"  width="13" height="58" rx="1.5" fill={LIGHT} opacity="0.95" />
      {/* Bar 3 — medium right */}
      <rect x="123" y="90"  width="11" height="50" rx="1.5" fill={MID}   opacity="0.80" />
      {/* Bar 4 — shortest far right */}
      <rect x="137" y="98"  width="9"  height="42" rx="1.5" fill={LIGHT} opacity="0.65" />

      {/* Subtle light streak on tallest bar */}
      <rect x="108" y="83" width="4" height="56" rx="1" fill={WHITE} opacity="0.25" />

      {/* ── CURVED ROAD PATH flowing out from base of G ──────────────── */}
      {/* Road outer edge */}
      <path
        d={`M 38 185 Q 75 165, 95 148 Q 115 132, 118 140`}
        stroke={NAVY}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Road inner lighter band */}
      <path
        d={`M 44 183 Q 78 164, 97 149 Q 112 136, 114 140`}
        stroke={ROAD_STRIPE}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Road highlight stripe */}
      <path
        d={`M 50 181 Q 82 163, 100 151 Q 110 140, 112 141`}
        stroke={WHITE}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Road left edge sweep */}
      <path
        d={`M 30 188 Q 68 170, 90 154 Q 106 143, 108 146`}
        stroke={NAVY}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HORIZONTAL LOCKUP — mark + wordmark
   dark=false  → navy/blue text (nav on white bg)
   dark=true   → white text (footer on dark bg)
   ───────────────────────────────────────────────────────────────────────── */
interface LogoHorizontalProps {
  dark?: boolean
  size?: number
}

export function LogoHorizontal({ dark = false, size = 44 }: LogoHorizontalProps) {
  const primary = dark ? WHITE  : NAVY
  const accent  = dark ? '#93c5fd' : '#2563eb'
  const sub     = dark ? '#94a3b8' : '#64748b'

  return (
    <span className="flex items-center gap-3">
      <span className="flex-shrink-0">
        <LogoMark size={size} />
      </span>
      <span className="leading-none select-none">
        <span
          className="block font-extrabold tracking-tight leading-none"
          style={{ fontSize: '1.15rem', color: primary }}
        >
          Gateway{' '}
          <span style={{ color: accent }}>Capital</span>
        </span>
        <span
          className="block font-semibold uppercase mt-1 leading-none"
          style={{ fontSize: '0.52rem', letterSpacing: '0.16em', color: sub }}
        >
          Your Gateway to Business Funding
        </span>
      </span>
    </span>
  )
}
