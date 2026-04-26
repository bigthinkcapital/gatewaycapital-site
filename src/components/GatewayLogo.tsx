/**
 * GatewayLogo — shared brand component
 *
 * Exports:
 *   <LogoMark size={n} />            — mark only, no circle bg, transparent
 *   <LogoHorizontal dark={bool} />   — mark + wordmark (nav / footer)
 */

/* ─────────────────────────────────────────────────────────────────────────
   LOGO MARK — G with open door, rising bars, perspective road
   Matches provided brand asset exactly. Transparent background.
   ───────────────────────────────────────────────────────────────────────── */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bold G letterform */}
      <path fill="#1e3369" d="
        M 408 72
        C 370 32  314 10  250 10
        C 112 10   28 112   28 252
        C  28 392  112 492  250 492
        C 328 492  390 458  428 406
        L 428 252
        L 252 252
        L 252 306
        L 374 306
        L 374 390
        C 344 416  300 438  250 438
        C 144 438   84 356   84 252
        C  84 148  144  64  250  64
        C 300  64  344  84  374 116
        Z
      "/>

      {/* White interior — creates hollow G opening */}
      <ellipse cx="210" cy="252" rx="112" ry="152" fill="white"/>

      {/* Crossbar + right wall */}
      <rect x="252" y="252" width="176" height="54" fill="#1e3369"/>
      <rect x="374" y="252" width="54"  height="188" fill="#1e3369"/>

      {/* Bottom-right serif curl */}
      <path fill="#1e3369" d="M 374 440 C 380 456 390 468 408 472 L 428 472 C 406 466 392 450 386 434 Z"/>

      {/* Door frame */}
      <rect x="172" y="138" width="17" height="228" rx="2" fill="#3a5a8e"/>
      <rect x="289" y="138" width="17" height="228" rx="2" fill="#3a5a8e"/>
      <rect x="172" y="132" width="134" height="17"  rx="2" fill="#3a5a8e"/>

      {/* White light gap (open doorway) */}
      <rect x="261" y="149" width="28" height="208" fill="white"/>

      {/* Open door panel swinging left */}
      <path d="M 189 149 L 258 144 L 258 352 L 189 360 Z" fill="#2b4878"/>
      {/* Panel edge highlight */}
      <rect x="254" y="144" width="9" height="208" rx="1" fill="#c0d4e8" opacity="0.75"/>
      {/* Door knob */}
      <circle cx="202" cy="252" r="5" fill="#162a55"/>

      {/* Rising bar columns */}
      <rect x="290" y="296" width="18" height="60"  rx="1.5" fill="#5c7aa8"/>
      <rect x="292" y="296" width="4"  height="60"  fill="white" opacity="0.22"/>

      <rect x="313" y="268" width="18" height="88"  rx="1.5" fill="#6d8fbc"/>
      <rect x="315" y="268" width="4"  height="88"  fill="white" opacity="0.22"/>

      <rect x="336" y="240" width="18" height="116" rx="1.5" fill="#7ea3cc"/>
      <rect x="338" y="240" width="4"  height="116" fill="white" opacity="0.28"/>

      <rect x="359" y="258" width="18" height="98"  rx="1.5" fill="#6d8fbc"/>
      <rect x="361" y="258" width="4"  height="98"  fill="white" opacity="0.22"/>

      <rect x="382" y="274" width="14" height="82"  rx="1.5" fill="#5c7aa8"/>
      <rect x="384" y="274" width="4"  height="82"  fill="white" opacity="0.2"/>

      {/* Perspective road sweeping lower-left */}
      <path d="
        M 192 360
        C 175 396  130 428   62 452
        C  40 460   18 466   10 470
        L  40 484
        C  58 477   86 469  126 456
        C 206 428  264 394  282 360
        Z
      " fill="#3a5a8e" opacity="0.88"/>

      <path d="
        M 215 360
        C 200 392  160 420  102 440
        L 120 448
        C 184 426  230 396  248 360
        Z
      " fill="#90aec8" opacity="0.58"/>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   HORIZONTAL LOCKUP — mark + wordmark
   dark=false  → navy/blue text (nav, white bg)
   dark=true   → white/light text (footer, dark bg)
   ───────────────────────────────────────────────────────────────────────── */
interface LogoHorizontalProps {
  dark?: boolean
  size?: number
}

export function LogoHorizontal({ dark = false, size = 44 }: LogoHorizontalProps) {
  const primary = dark ? '#ffffff' : '#1e3369'
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
          style={{ fontSize: '1.15rem', color: primary, fontFamily: 'var(--font-sora, ui-sans-serif)' }}
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
