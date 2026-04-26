/**
 * GatewayLogo — shared brand component
 *
 * Exports:
 *   <LogoMark size={n} />           — mark only, on transparent bg (nav, favicon)
 *   <LogoHorizontal dark={bool} />  — mark + wordmark (nav light, footer dark)
 */

/* ─────────────────────────────────────────────────────────────────────────
   COLOURS
   ───────────────────────────────────────────────────────────────────────── */
const NAVY   = '#1e3a6e'
const STEEL  = '#6b8cba'   // mid-tone for bars / road highlight
const LIGHT  = '#a8bdd4'   // lighter road fill, door frame edge

/* ─────────────────────────────────────────────────────────────────────────
   MARK  (500 × 500 viewBox, transparent background)
   The mark is:
     • A thick serif G curving left → top → right, tail swings down-right as J
     • Open door in the centre-left of the G interior — panel swings left
     • 5 rising columns / buildings through the open doorway
     • Two curved road stripes sweeping in from the bottom-centre
   ───────────────────────────────────────────────────────────────────────── */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── G / J letterform ─────────────────────────────────────────────
          Strategy: draw filled G then cut the inner void so the strokes
          read as thick navy letter outlines.
          The G opens to the right (standard). The bottom-right serif
          curves down like a J.
      ─────────────────────────────────────────────────────────────────── */}

      {/* Outer G filled navy */}
      <path
        d="
          M390 80
          C360 40 310 18 250 18
          C140 18 52 106 52 220
          C52 334 140 422 250 422
          C310 422 362 398 395 358
          L395 242 L248 242 L248 294 L338 294
          L338 346
          C318 366 286 378 250 378
          C164 378 98 312 98 220
          C98 128 164 62 250 62
          C290 62 324 76 348 102
          Z
        "
        fill={NAVY}
      />

      {/* Inner G void — makes it a letterform not a solid shape.
          Slightly smaller path creates the stroke thickness. */}
      <path
        d="
          M390 80
          C362 48 314 26 250 26
          C148 26 68 108 68 220
          C68 332 148 414 250 414
          C308 414 358 392 390 354
          L390 258 L256 258 L256 302 L336 302
          L336 348
          C314 372 284 386 250 386
          C160 386 90 314 90 220
          C90 126 160 54 250 54
          C292 54 328 70 354 98
          Z
        "
        fill="white"
      />

      {/* Re-fill the G body in navy (the ring between outer and inner paths) */}
      {/* We use a compound approach: big navy filled G minus white inner = ring */}
      {/* The white path above cuts the centre — now add back the horizontal bar */}
      <rect x="248" y="242" width="147" height="52" rx="4" fill={NAVY} />
      <rect x="248" y="258" width="143" height="36" rx="3" fill="white" />
      <rect x="338" y="258" width="52" height="88" rx="4" fill={NAVY} />
      <rect x="338" y="272" width="40" height="74" rx="3" fill="white" />

      {/* ── J tail serif at bottom-right ────────────────────────────── */}
      {/* The J is the bottom-right of the G that curves down */}
      <path
        d="M338 330 C338 370 318 410 274 430 C258 437 240 440 220 436
           C220 436 210 434 200 428"
        stroke={NAVY} strokeWidth="50" strokeLinecap="round" fill="none"
      />
      <path
        d="M338 330 C338 370 318 410 274 430 C258 437 240 440 220 436
           C220 436 210 434 200 428"
        stroke="white" strokeWidth="34" strokeLinecap="round" fill="none"
      />

      {/* ── Open door ────────────────────────────────────────────────────
          Door frame sits in the interior of the G, centred slightly left.
          Left post, right post (door frame edge), lintel.
          Door panel swings left (foreshortened rectangle).
      ─────────────────────────────────────────────────────────────────── */}

      {/* Door frame — left post */}
      <rect x="148" y="148" width="22" height="200" rx="4" fill={NAVY} />
      {/* Door frame — right post (thin, is the door edge/jamb) */}
      <rect x="228" y="148" width="16" height="200" rx="4" fill={STEEL} />
      {/* Door frame — top lintel */}
      <rect x="148" y="148" width="100" height="22" rx="4" fill={NAVY} />

      {/* Door panel (open, swings left — foreshortened) */}
      <rect x="150" y="170" width="72" height="174" rx="3" fill={STEEL} opacity="0.85" />
      {/* Door panel inner bevel / highlight */}
      <rect x="156" y="177" width="58" height="160" rx="2" fill={LIGHT} opacity="0.45" />
      {/* Doorknob */}
      <circle cx="210" cy="262" r="9" fill={NAVY} />
      <circle cx="210" cy="262" r="5" fill={LIGHT} />

      {/* ── Rising bar columns (5) through the open doorway ─────────────
          Columns get taller toward centre, creating a city-skyline / chart feel.
          They're positioned to the right of the door, visible through the opening.
          Each column has a lighter left face for depth.
      ─────────────────────────────────────────────────────────────────── */}

      {/* Col 1 — shortest left */}
      <rect x="248" y="268" width="24" height="80"  rx="2" fill={STEEL}  opacity="0.75" />
      <rect x="248" y="268" width="8"  height="80"  rx="2" fill={LIGHT}  opacity="0.5"  />

      {/* Col 2 */}
      <rect x="278" y="240" width="24" height="108" rx="2" fill={STEEL}  opacity="0.85" />
      <rect x="278" y="240" width="8"  height="108" rx="2" fill={LIGHT}  opacity="0.5"  />

      {/* Col 3 — tallest centre */}
      <rect x="308" y="210" width="26" height="138" rx="2" fill={NAVY}   opacity="0.9"  />
      <rect x="308" y="210" width="9"  height="138" rx="2" fill={STEEL}  opacity="0.6"  />

      {/* Col 4 */}
      <rect x="340" y="232" width="24" height="116" rx="2" fill={STEEL}  opacity="0.8"  />
      <rect x="340" y="232" width="8"  height="116" rx="2" fill={LIGHT}  opacity="0.45" />

      {/* Col 5 — shortest right */}
      <rect x="370" y="258" width="22" height="90"  rx="2" fill={STEEL}  opacity="0.7"  />
      <rect x="370" y="258" width="7"  height="90"  rx="2" fill={LIGHT}  opacity="0.4"  />

      {/* ── Curved road / path sweeping in ──────────────────────────────
          Two curves representing a perspective road leading through the door.
          Outer curve (navy), inner highlight stripe (light steel).
      ─────────────────────────────────────────────────────────────────── */}

      {/* Road outer edge — left curve */}
      <path
        d="M148 348 Q172 390 130 460 Q112 490 90 495"
        stroke={NAVY} strokeWidth="14" strokeLinecap="round" fill="none"
      />
      {/* Road outer edge — right curve */}
      <path
        d="M244 348 Q260 392 290 445 Q310 478 340 490"
        stroke={NAVY} strokeWidth="14" strokeLinecap="round" fill="none"
      />
      {/* Road inner highlight left */}
      <path
        d="M160 355 Q182 394 148 458 Q132 486 114 494"
        stroke={LIGHT} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.7"
      />
      {/* Road inner highlight right */}
      <path
        d="M232 352 Q246 394 272 444 Q292 475 316 488"
        stroke={LIGHT} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.7"
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

export function LogoHorizontal({ dark = false, size = 44 }: LogoHorizontalProps) {
  const primary = dark ? '#ffffff' : NAVY
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
          style={{ fontSize: '1.2rem', color: primary }}
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
   FAVICON EXPORT  (kept for reference, actual file is public/favicon.svg)
   ───────────────────────────────────────────────────────────────────────── */
export function LogoFavicon() {
  return <LogoMark size={32} />
}
