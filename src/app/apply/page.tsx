import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import ApplyForm from '@/components/ApplyForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply for Business Funding | Gateway Capital',
  description: 'Apply for business funding in 2 minutes. No hard credit pull. Access SBA loans, term loans, lines of credit, equipment financing up to $5M. Decisions within 24 hours.',
}

export default function ApplyPage() {
  return (
    <>
      <SmartBar />
      <Nav />
      <main className="pt-9 min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-blue-600 pt-20 pb-12 px-5 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-4">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-white">Specialists reviewing applications now</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
              Apply for Business Funding
            </h1>
            <p className="text-blue-200 text-base">2 minutes · No hard credit pull · Decision within 24 hours</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 py-12 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <ApplyForm />
          </div>

          <div className="flex flex-col gap-5 lg:sticky lg:top-28">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-display font-bold text-sm text-slate-800 mb-4">Why businesses choose us</h3>
              <ul className="space-y-3">
                {[
                  'No hard credit pull to start',
                  'Decisions within 24 hours',
                  'Multiple lenders compared — best terms',
                  'Dedicated specialist on every application',
                  '256-bit bank-level encryption',
                  'Zero obligation to accept any offer',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-5 h-5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-xs flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="font-display font-bold text-sm text-blue-900 mb-3">Products available</h3>
              <ul className="space-y-2">
                {['SBA Loans — Up to $5M', 'Term Loans — Same day', 'Lines of Credit — Revolving', 'Equipment Financing — 100%', 'Invoice Financing — 24hr', 'Merchant Cash Advance'].map(p => (
                  <li key={p} className="text-xs text-blue-700 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />{p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
              <div className="text-yellow-400 text-lg mb-1">★★★★★</div>
              <div className="font-display font-bold text-2xl text-slate-900">4.8</div>
              <div className="text-xs text-slate-400 mt-0.5">3,200+ verified reviews</div>
              <Link href="/" className="mt-4 block text-xs text-blue-600 font-semibold hover:underline">← Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
