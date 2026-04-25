'use client'
import { useCountUp } from '@/lib/useCountUp'

function Stat({ target, suffix, prefix, label, decimals = 0 }: {
  target: number; suffix?: string; prefix?: string; label: string; decimals?: number
}) {
  const { value, ref } = useCountUp(target, 1800, decimals)
  return (
    <div ref={ref} className="text-center px-6 border-r border-slate-200 last:border-none">
      <div className="font-display font-extrabold text-4xl text-slate-900 tracking-tight mb-1">
        <span className="text-blue-600">
          {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()}
        </span>{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          <Stat prefix="$" target={500} suffix="M+" label="Capital Deployed" />
          <Stat target={3200} suffix="+" label="Businesses Funded" />
          <Stat target={24} suffix="hr" label="Avg. Funding Time" />
          <Stat target={4.8} suffix="★" label="Trustpilot Rating" decimals={1} />
        </div>
      </div>
    </section>
  )
}
