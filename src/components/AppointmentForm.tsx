'use client'

import { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css"
import toast from 'react-hot-toast'

// Register Dutch locale
registerLocale('nl', nl)

interface AppointmentFormProps {
  variant?: 'dark' | 'light'
  minDateOffsetDays?: number
  autoFocusNext?: boolean
}

export default function AppointmentForm({ variant = 'dark', minDateOffsetDays = 0, autoFocusNext = false }: AppointmentFormProps) {
  const isLight = variant === 'light'

  const containerClasses = isLight
    ? 'space-y-6 bg-white p-8 rounded-xl border border-zinc-200 shadow-sm'
    : 'space-y-6 bg-zinc-800 p-8 rounded-lg'

  const sectionTitleClasses = isLight
    ? 'text-sm font-semibold text-zinc-900 tracking-wide'
    : 'text-sm font-semibold text-white tracking-wide'

  const labelClasses = isLight
    ? 'block text-xs font-medium text-zinc-600 mb-1 uppercase tracking-wide'
    : 'block text-xs font-medium text-gray-300 mb-1 uppercase tracking-wide'

  const inputBase = 'mt-1 block w-full rounded-lg shadow-sm sm:text-sm transition-colors'
  const inputClasses = isLight
    ? `${inputBase} bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/30`
    : `${inputBase} bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/30`

  const textareaClasses = inputClasses

  const hintClasses = isLight ? 'text-xs text-zinc-500 mt-1' : 'text-xs text-gray-300 mt-1'

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})
  const [formData, setFormData] = useState({
    kenteken: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  // Marketing attribution capture (for Ads)
  const [marketing, setMarketing] = useState<{ [key: string]: string | undefined }>({})

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const attribution: { [key: string]: string | undefined } = {
        source: 'ads-landing',
        utmSource: params.get('utm_source') || undefined,
        utmMedium: params.get('utm_medium') || undefined,
        utmCampaign: params.get('utm_campaign') || undefined,
        utmTerm: params.get('utm_term') || undefined,
        utmContent: params.get('utm_content') || undefined,
        gclid: params.get('gclid') || undefined,
      }
      setMarketing(attribution)
    } catch {
      // ignore
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string | undefined } = {}
    if (!formData.kenteken) newErrors.kenteken = 'Vul uw kenteken in'
    if (!selectedDate) newErrors.date = 'Selecteer een datum'
    if (!formData.name) newErrors.name = 'Vul uw naam in'
    if (!formData.phone) newErrors.phone = 'Vul uw telefoonnummer in'
    if (!formData.email) newErrors.email = 'Vul uw e‑mail in'
    if (!formData.description) newErrors.description = 'Beschrijf de werkzaamheden'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      toast.error('Controleer de invoer en probeer opnieuw')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          kenteken: formData.kenteken,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description: formData.description,
          date: selectedDate,
          ...marketing,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Er is iets misgegaan')
      }

      toast.success('Bedankt! We nemen zo spoedig mogelijk contact met u op.')

      // Analytics hook for GTM if present
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        ;(window as any).dataLayer.push({ event: 'lead_submit', form: 'ads_landing' })
      }
      // Google Ads conversion
      if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
        ;(window as any).gtag_report_conversion()
      }

      // Reset form
      setFormData({
        kenteken: '',
        name: '',
        email: '',
        phone: '',
        description: ''
      })
      setSelectedDate(null)
      setErrors({})
    } catch (error) {
      console.error('Error submitting appointment:', error)
      toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={containerClasses} id="afspraak">
      {/* Details section */}
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Kenteken</label>
            <input
              type="text"
              required
              placeholder="AA-11-BB"
              className={inputClasses}
              value={formData.kenteken}
              onChange={(e) => {
                const val = e.target.value.toUpperCase()
                setFormData({...formData, kenteken: val})
                if (autoFocusNext && val.replace(/[^A-Z0-9]/g, '').length >= 6) {
                  const dateEl = document.querySelector('input[name="date"]') as HTMLInputElement | null
                  if (dateEl) dateEl.focus()
                }
              }}
              autoFocus
            />
            <p className={hintClasses}>Voer uw kenteken in zonder streepjes</p>
            {errors.kenteken && <p className="text-xs text-red-600 mt-1">{errors.kenteken}</p>}
          </div>
          <div>
            <label className={labelClasses}>Gewenste datum</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              locale="nl"
              dateFormat="P"
              minDate={new Date(Date.now() + minDateOffsetDays * 24 * 60 * 60 * 1000)}
              className={inputClasses}
              placeholderText="Selecteer een datum"
              name="date"
            />
            {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Naam</label>
            <input
              type="text"
              required
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Uw volledige naam"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className={labelClasses}>Telefoonnummer</label>
            <input
              type="tel"
              required
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => {
                let v = e.target.value.replace(/\s+/g, '')
                if (v.startsWith('31') && !v.startsWith('+31')) v = '+31' + v.slice(2)
                setFormData({...formData, phone: v})
              }}
              placeholder="06 12345678"
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className={labelClasses}>E‑mail</label>
          <input
            type="email"
            required
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="uw.email@voorbeeld.nl"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClasses}>Omschrijving van de werkzaamheden</label>
          <textarea
            required
            rows={4}
            className={textareaClasses}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Beschrijf kort wat er aan uw auto gedaan moet worden"
          />
          {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
        </div>
      </div>

      <div className={isLight ? 'text-xs text-zinc-500' : 'text-xs text-gray-300'}>
        Wij reageren doorgaans binnen 1 werkdag. Door te verzenden gaat u akkoord met onze{' '}
        <LinkPlaceholder href="/privacyverklaring" className={isLight ? 'text-primary' : 'text-primary'}>
          privacyverklaring
        </LinkPlaceholder>.
      </div>

      <button
        type="submit"
        className="w-full btn btn-primary py-3"
        disabled={loading}
      >
        {loading ? 'Even geduld...' : 'Afspraak Aanvragen'}
      </button>
    </form>
  )
}

// Lightweight anchor shim to avoid importing next/link here
function LinkPlaceholder({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) {
  return <a href={href} className={className}>{children}</a>
} 