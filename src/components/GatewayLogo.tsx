/**
 * GatewayLogo — shared brand component
 * Faithful recreation of the Gateway Capital mark:
 *   - Serif G letterform in navy, open on the right with a crossbar shelf
 *   - Open door panel (left side, swung open) inside the G
 *   - Rising bar chart columns (center-right) through the doorway
 *   - Curved road/path sweeping in from the bottom
 *   - No circular/square background — mark sits on whatever bg is behind it
 *
 * Exports:
 *   <LogoMark size={n} />                    — mark only, square, transparent bg
 *   <LogoHorizontal dark={bool} size={n} />  — mark + wordmark lockup
 */

/* ─────────────────────────────────────────────────────────────────────────
   Colour palette
   ───────────────────────────────────────────────────────────────────────── */
const NAVY   = '#1e3a6e'
const MID    = '#4a6fa5'   // door panel, road highlight
const LIGHT  = '#8aa4c8'   // bar columns, road fill
const WHITE  = '#ffffff'

/* ─────────────────────────────────────────────────────────────────────────
   MARK — transparent background, square viewBox 0 0 200 200
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
      {/* ══════════════════════════════════════════════════════
          OUTER G LETTERFORM — thick serif strokes, navy
          Top arc curves from upper-right down and around.
          Bottom closes with the serif foot + crossbar shelf.
          ══════════════════════════════════════════════════════ */}

      {/* Top stroke — thick arc, open right */}
      <path
        d={`
          M 155 32
          C 138 18, 112 12, 90 14
          C 50 18, 18 52, 18 96
          C 18 142, 50 176, 90 180
          C 118 182, 144 170, 158 150
          L 158 108
          L 108 108
          L 108 124
          L 142 124
          L 142 148
          C 130 160, 114 165, 96 164
          C 62 163, 38 136, 38 98
          C 38 60, 62 34, 96 32
          C 112 31, 126 36, 138 46
          Z
        `}
        fill={NAVY}
      />

      {/* Serif foot — bottom right of G crossbar */}
      <rect x="104" y="152" width="56" height="18" rx="3" fill={NAVY} />
      {/* Serif cap — top right where arc terminates */}
      <rect x="128" y="14" width="32" height="18" rx="3" fill={NAVY} />

      {/* ══════════════════════════════════════════════════════
          DOOR FRAME — sits inside the G opening
          ══════════════════════════════════════════════════════ */}
      {/* Left door post */}
      <rect x="62"  y="58" width="10" height="88" rx="2" fill={MID} />
      {/* Right door post */}
      <rect x="106" y="58" width="10" height="88" rx="2" fill={MID} />
      {/* Top lintel */}
      <rect x="62"  y="56" width="54" height="10" rx="2" fill={MID} />

      {/* ══════════════════════════════════════════════════════
          OPEN DOOR PANEL — swung to the left
          ══════════════════════════════════════════════════════ */}
      <rect x="63" y="66" width="30" height="75" rx="2" fill={MID} opacity="0.85" />
      {/* Door knob */}
      <circle cx="88" cy="106" r="3.5" fill={WHITE} />

      {/* ══════════════════════════════════════════════════════
          RISING BAR COLUMNS — through the doorway, mid-right
          4 columns, shortest left to tallest right then dip
          ══════════════════════════════════════════════════════ */}
      <rect x="100" y="108" width="11" height="38" rx="1.5" fill={LIGHT} opacity="0.8" />
      <rect x="114" y="92"  width="11" height="54" rx="1.5" fill={LIGHT} />
      <rect x="128" y="78"  width="11" height="68" rx="1.5" fill={LIGHT} opacity="0.9" />
      <rect x="142" y="88"  width="11" height="58" rx="1.5" fill={LIGHT} opacity="0.75" />

      {/* ══════════════════════════════════════════════════════
          CURVED ROAD — sweeping perspective path at bottom
          ══════════════════════════════════════════════════════ */}
      {/* Road body — wide at bottom, narrows toward door */}
      <path
        d="M 22 190 Q 60 165, 78 148 Q 86 140, 86 148 L 90 148 Q 90 136, 98 130 L 98 146 Q 106 136, 108 148 L 114 148 Q 106 140, 120 155 Q 148 172, 178 190 Z"
        fill={LIGHT}
        opacity="0.7"
      />
      {/* Road highlight stripe */}
      <path
        d="M 58 190 Q 76 168, 84 148 L 90 148 Q 84 166, 72 190 Z"
        fill={WHITE}
        opacity="0.55"
      />
      {/* Road edge curves */}
      <path
        d="M 22 192 Q 68 162, 84 144"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 178 192 Q 130 162, 112 144"
        stroke={NAVY}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HORIZONTAL LOCKUP
   ───────────────────────────────────────────────────────────────────────── */
interface LogoHorizontalProps {
  dark?: boolean
  size?: number
}

export function LogoHorizontal({ dark = false, size = 46 }: LogoHorizontalProps) {
  const primary = dark ? '#ffffff' : NAVY
  const accent  = dark ? '#93c5fd' : '#2563eb'
  const sub     = dark ? '#94a3b8' : '#64748b'

  return (
    <span className="flex items-center gap-3 group">
      <span className="flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
        <LogoMark size={size} />
      </span>
      <span className="leading-none select-none">
        <span
          className="block font-extrabold tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-sora, ui-serif)', fontSize: '1.2rem', color: primary }}
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
