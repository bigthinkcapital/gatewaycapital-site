'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileCTA() {
  const pathname = usePathname()
  if (pathname === '/apply') return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 px-4 py-3 flex items-center gap-3">
      <div className="flex-1">
        <p className="text-xs font-semibold text-slate-800">Ready to get funded?</p>
        <p className="text-xs text-slate-400">2 min · No credit pull</p>
      </div>
      <Link href="/apply" className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg whitespace-nowrap hover:bg-blue-700 transition-colors">
        Apply Now →
      </Link>
    </div>
  )
}
