/**
 * GatewayLogo — shared brand component
 *
 * Exports:
 *   <LogoMark size={n} />          — circular mark only (nav, favicon fallback)
 *   <LogoHorizontal dark={bool} />  — mark + wordmark side by side (nav, footer light/dark)
 *   <LogoFavicon />                 — square 32×32 mark for <head> inline usage
 */

/* ─────────────────────────────────────────────────────────────────────────
   MARK — navy circle with G / door / bars / path
   ───────────────────────────────────────────────────────────────────────── */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Navy background circle */}
      <circle cx="50" cy="50" r="50" fill="#1e3a6e" />

      {/* ── G letterform outer arc (white) ── */}
      <path
        d="M76 23
           C70 17 62 14 52 14
           C32 14 16 30 16 50
           C16 70 32 86 52 86
           C64 86 75 79 79 69
           L79 48 L50 48 L50 58 L68 58
           L68 68
           C64 73 58 76 52 76
           C38 76 27 64 27 50
           C27 36 38 24 52 24
           C60 24 66 27 71 33
           Z"
        fill="white"
      />

      {/* ── Cut inner G void (navy) ── */}
      <path
        d="M76 23
           C72 19 65 16 57 16
           C40 16 23 30 23 50
           C23 69 38 84 57 84
           C67 84 75 79 78 72
           L78 54 L54 54 L54 62 L68 62
           L68 67
           C64 72 61 74 57 74
           C43 74 33 63 33 50
           C33 37 43 26 57 26
           C63 26 68 28 72 33
           Z"
        fill="#1e3a6e"
      />

      {/* ── Door frame ── */}
      {/* Left post */}
      <rect x="34" y="37" width="4.5" height="30" rx="1" fill="#7ea8d8" />
      {/* Right post */}
      <rect x="55" y="37" width="4.5" height="30" rx="1" fill="#7ea8d8" />
      {/* Top lintel */}
      <rect x="34" y="36" width="26" height="4" rx="1" fill="#7ea8d8" />

      {/* ── Open door panel (swung left) ── */}
      <rect x="35" y="40" width="12" height="25" rx="1" fill="#a8c4e0" opacity="0.85" />
      {/* Knob */}
      <circle cx="45.5" cy="54" r="1.4" fill="#1e3a6e" />

      {/* ── Rising bar columns (through doorway) ── */}
      <rect x="54" y="56" width="4" height="11" rx="0.8" fill="white" opacity="0.9" />
      <rect x="60" y="50" width="4" height="17" rx="0.8" fill="white" />
      <rect x="66" y="53" width="4" height="14" rx="0.8" fill="white" opacity="0.85" />

      {/* ── Perspective path curving in from bottom ── */}
      <path d="M41 68 Q48 72 49 80" stroke="#7ea8d8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M52 68 Q50 72 49 80" stroke="#7ea8d8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HORIZONTAL LOCKUP — mark + wordmark
   dark=false  → navy text on white (nav default)
   dark=true   → white text on dark bg (footer)
   ───────────────────────────────────────────────────────────────────────── */
interface LogoHorizontalProps {
  dark?: boolean
  size?: number  // mark diameter, defaults 44
}

export function LogoHorizontal({ dark = false, size = 44 }: LogoHorizontalProps) {
  const primary = dark ? '#ffffff' : '#1e3a6e'
  const accent  = dark ? '#93c5fd' : '#2563eb'
  const sub     = dark ? '#94a3b8' : '#64748b'

  return (
    <span className="flex items-center gap-3">
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
          style={{ fontSize: '0.55rem', letterSpacing: '0.17em', color: sub }}
        >
          Your Gateway to Business Funding
        </span>
      </span>
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FAVICON — 32×32 square, no circle bg (browser adds its own)
   Used as inline SVG in <head> via next/head or as favicon.svg
   ───────────────────────────────────────────────────────────────────────── */
export function LogoFavicon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#1e3a6e" />
      {/* Simplified G at small size */}
      <path
        d="M24 7.5
           C21.5 5.5 18.5 4.5 15.5 4.5
           C9.5 4.5 5 9 5 15.5
           C5 22 9.5 26.5 15.5 26.5
           C19.5 26.5 23 24.5 24.5 21.5
           L24.5 14.5 L14.5 14.5 L14.5 18 L20.5 18
           L20.5 21
           C19 22.5 17.5 23 15.5 23
           C11.5 23 8.5 20 8.5 15.5
           C8.5 11 11.5 8 15.5 8
           C17.5 8 19.5 8.8 21 10
           Z"
        fill="white"
      />
      {/* Cut void */}
      <path
        d="M24 7.5
           C22 6 19.5 5 17 5
           C11.5 5 7 9.5 7 15.5
           C7 21.5 11.5 26 17 26
           C20 26 22.5 24.5 23.8 22
           L23.8 16 L15.5 16 L15.5 19 L20.5 19
           L20.5 21
           C19.5 22 18.5 22.5 17 22.5
           C13 22.5 10.5 19.5 10.5 15.5
           C10.5 11.5 13 8.5 17 8.5
           C19 8.5 20.5 9.2 21.8 10.5
           Z"
        fill="#1e3a6e"
      />
      {/* Mini door + bar hint */}
      <rect x="13" y="12" width="1.5" height="9"  rx="0.4" fill="#7ea8d8" />
      <rect x="18.5" y="12" width="1.5" height="9" rx="0.4" fill="#7ea8d8" />
      <rect x="13" y="11.5" width="7.5" height="1.5" rx="0.4" fill="#7ea8d8" />
      <rect x="19.5" y="17" width="1.5" height="4" rx="0.3" fill="white" opacity="0.9" />
      <rect x="21.5" y="15" width="1.5" height="6" rx="0.3" fill="white" />
    </svg>
  )
}
