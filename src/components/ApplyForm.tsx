'use client'
import { useState } from 'react'
import Link from 'next/link'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  fundingAmount: string
  monthlyRevenue: string
}

const FUNDING_AMOUNTS = [
  '$5,000 – $25,000',
  '$25,000 – $100,000',
  '$100,000 – $500,000',
  '$500,000 – $1,000,000',
  '$1,000,000 – $5,000,000',
]

const REVENUE_RANGES = [
  'Under $10,000/mo',
  '$10,000 – $30,000/mo',
  '$30,000 – $100,000/mo',
  '$100,000 – $500,000/mo',
  '$500,000+/mo',
]

const STEPS = [
  { id: 1, label: 'Business' },
  { id: 2, label: 'Revenue' },
  { id: 3, label: 'Contact' },
]

export default function ApplyForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    companyName: '', fundingAmount: '', monthlyRevenue: '',
  })

  const set = (key: keyof FormData, value: string) =>
    setForm(f => ({ ...f, [key]: value }))

  const nextStep = () => {
    setError('')
    if (step === 1 && !form.companyName.trim()) { setError('Please enter your company name.'); return }
    if (step === 1 && !form.fundingAmount) { setError('Please select a funding amount.'); return }
    if (step === 2 && !form.monthlyRevenue) { setError('Please select your monthly revenue.'); return }
    setStep(s => s + 1)
  }

  const submit = async () => {
    setError('')
    if (!form.firstName.trim()) { setError('Please enter your first name.'); return }
    if (!form.lastName.trim()) { setError('Please enter your last name.'); return }
    if (!form.email.includes('@')) { setError('Please enter a valid email address.'); return }
    if (form.phone.length < 7) { setError('Please enter a valid phone number.'); return }

    setSubmitting(true)
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            submittedAt: new Date().toISOString(),
            source: 'Gateway Capital Website',
            url: typeof window !== 'undefined' ? window.location.href : '',
          }),
        })
      }
      setSubmitted(true)
    } catch (e) {
      console.error('Webhook error:', e)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🎉</div>
        <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-3">You&apos;re all set!</h2>
        <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-md mx-auto">
          Your application has been received. A dedicated funding specialist will contact you within hours — often sooner.
        </p>
        <Link href="/" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
        <h2 className="font-display font-extrabold text-xl text-white mb-1">Your Application</h2>
        <p className="text-blue-200 text-sm">2 minutes · Secure · No hard credit pull</p>
      </div>

      <div className="flex border-b border-slate-200">
        {STEPS.map((s, i) => (
          <div key={s.id} className={`flex-1 py-3 px-4 text-center text-xs font-bold tracking-wide uppercase border-b-2 transition-all ${
            step === s.id ? 'border-blue-600 text-blue-600' :
            step > s.id ? 'border-emerald-500 text-emerald-600' :
            'border-transparent text-slate-400'
          }`}>
            {step > s.id ? `✓ ${s.label}` : `${i + 1}. ${s.label}`}
          </div>
        ))}
      </div>

      <div className="p-8">
        <div className="h-1 bg-slate-100 rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        {step === 1 && (
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-1">Tell us about your business</h3>
            <p className="text-sm text-slate-500 mb-6">Basic info to get matched with the right funding.</p>
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">Company Name <span className="text-red-500">*</span></label>
              <input type="text" value={form.companyName} onChange={e => set('companyName', e.target.value)} placeholder="Acme Corp LLC"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
            </div>
            <p className="text-sm font-semibold text-slate-700 mb-3">How much funding are you looking for? <span className="text-red-500">*</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FUNDING_AMOUNTS.map(amt => (
                <button key={amt} onClick={() => set('fundingAmount', amt)}
                  className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    form.fundingAmount === amt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-blue-200 hover:bg-slate-50'
                  }`}>
                  {form.fundingAmount === amt ? '✓ ' : ''}{amt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-1">Your monthly revenue</h3>
            <p className="text-sm text-slate-500 mb-6">This helps us match you to the right lenders and terms.</p>
            <div className="grid grid-cols-1 gap-2 mb-5">
              {REVENUE_RANGES.map(rev => (
                <button key={rev} onClick={() => set('monthlyRevenue', rev)}
                  className={`text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                    form.monthlyRevenue === rev ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-blue-200 hover:bg-slate-50'
                  }`}>
                  <span>{rev}</span>
                  {form.monthlyRevenue === rev && <span className="text-blue-600 font-bold">✓</span>}
                </button>
              ))}
            </div>
            {form.fundingAmount && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Funding goal:</span> {form.fundingAmount}
                <button onClick={() => setStep(1)} className="ml-3 text-blue-600 text-xs font-semibold hover:underline">Edit</button>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-1">Your contact information</h3>
            <p className="text-sm text-slate-500 mb-6">A specialist will reach out within minutes during business hours.</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">First Name <span className="text-red-500">*</span></label>
                <input type="text" value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Brian"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                <input type="text" value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
            </div>
            <div className="space-y-4 mb-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="brian@yourcompany.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="(555) 000-0000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-sm text-slate-600 mb-4">
              <div><span className="font-semibold text-slate-800">Company:</span> {form.companyName}</div>
              <div><span className="font-semibold text-slate-800">Funding needed:</span> {form.fundingAmount}</div>
              <div><span className="font-semibold text-slate-800">Monthly revenue:</span> {form.monthlyRevenue}</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              By submitting you agree to our Terms of Service and Privacy Policy. Soft credit pull only for pre-qualification.
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium">{error}</div>
        )}

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button onClick={() => { setStep(s => s - 1); setError('') }} className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
              ← Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25">
              Continue →
            </button>
          ) : (
            <button onClick={submit} disabled={submitting}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3 rounded-xl transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2">
              {submitting ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
              ) : '✓ Submit Application'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
