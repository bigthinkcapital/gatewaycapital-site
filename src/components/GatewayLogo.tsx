/**
 * GatewayLogo — shared brand component
 * Uses the actual Gateway Capital brand PNG uploaded to public/
 */
import Image from 'next/image'

const LOGO_SRC = '/file_00000000fb3871f5a0a97b25fe769035.png'

/* ─────────────────────────────────────────────────────────────────────────
   LOGO MARK — just the mark image, no wordmark
   ───────────────────────────────────────────────────────────────────────── */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Gateway Capital"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
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
        <Image
          src={LOGO_SRC}
          alt="Gateway Capital logo"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
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
