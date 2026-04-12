'use client'

import { useEffect, useState } from 'react'
import type { ReactNode, FormEvent } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'

// Register Dutch locale
registerLocale('nl', nl)

interface AppointmentFormProps {
  variant?: 'dark' | 'light' | 'home'
  minDateOffsetDays?: number
  autoFocusNext?: boolean
}

export default function AppointmentForm({
  variant = 'dark',
  minDateOffsetDays = 0,
  autoFocusNext = false,
}: AppointmentFormProps) {
  const isLight = variant === 'light'
  const isHome = variant === 'home'

  const containerClasses = isHome
    ? 'space-y-5'
    : isLight
      ? 'space-y-5 bg-white p-8 rounded-xl border border-gray-200 shadow-sm'
      : 'space-y-5 bg-gray-800 p-8 rounded-xl'

  const labelClasses = 'mb-1.5 block text-sm font-medium text-gray-700'

  const inputBase = 'mt-1 block w-full rounded-xl shadow-sm text-sm transition-colors'
  const inputClasses = `${inputBase} border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 focus:bg-white`

  const textareaClasses = inputClasses

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})
  const [formData, setFormData] = useState({
    kenteken: '',
    name: '',
    email: '',
    phone: '',
    description: '',
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string | undefined } = {}
    if (!formData.kenteken) newErrors.kenteken = 'Vul uw kenteken in'
    if (!selectedDate) newErrors.date = 'Selecteer een datum'
    if (!formData.name) newErrors.name = 'Vul uw naam in'
    if (!formData.phone) newErrors.phone = 'Vul uw telefoonnummer in'
    if (!formData.email) newErrors.email = 'Vul uw e-mail in'
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

      setFormData({
        kenteken: '',
        name: '',
        email: '',
        phone: '',
        description: '',
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
      <div className="space-y-4">
        <div>
          <label htmlFor="appointment-kenteken" className={labelClasses}>
            Kenteken
          </label>
          <input
            id="appointment-kenteken"
            type="text"
            required
            autoFocus={variant !== 'home'}
            placeholder="Bijv. AB-12-CD"
            className={inputClasses}
            value={formData.kenteken}
            onChange={(e) => {
              const val = e.target.value.toUpperCase()
              setFormData({ ...formData, kenteken: val })
              if (autoFocusNext && val.replace(/[^A-Z0-9]/g, '').length >= 6) {
                const dateEl = document.querySelector('input[name="date"]') as HTMLInputElement | null
                if (dateEl) dateEl.focus()
              }
            }}
          />
          {errors.kenteken && <p className="mt-1 text-xs text-red-600">{errors.kenteken}</p>}
        </div>

        <div>
          <label htmlFor="appointment-date" className={labelClasses}>
            Gewenste datum
          </label>
          <div className="home-datepicker-wrap">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              locale="nl"
              dateFormat="P"
              minDate={new Date(Date.now() + minDateOffsetDays * 24 * 60 * 60 * 1000)}
              id="appointment-date"
              className={inputClasses}
              placeholderText="Kies een datum"
              name="date"
            />
          </div>
          {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="appointment-name" className={labelClasses}>
              Naam
            </label>
            <input
              id="appointment-name"
              type="text"
              required
              className={inputClasses}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Uw naam"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="appointment-phone" className={labelClasses}>
              Telefoon
            </label>
            <input
              id="appointment-phone"
              type="tel"
              required
              className={inputClasses}
              value={formData.phone}
              onChange={(e) => {
                let v = e.target.value.replace(/\s+/g, '')
                if (v.startsWith('31') && !v.startsWith('+31')) v = `+31${v.slice(2)}`
                setFormData({ ...formData, phone: v })
              }}
              placeholder="06 12345678"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="appointment-email" className={labelClasses}>
            E-mailadres
          </label>
          <input
            id="appointment-email"
            type="email"
            required
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="uw.email@voorbeeld.nl"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="appointment-description" className={labelClasses}>
            Klacht of werkzaamheden
          </label>
          <textarea
            id="appointment-description"
            required
            rows={3}
            className={textareaClasses}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Omschrijf kort de klacht of gewenste werkzaamheden"
          />
          {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
        </div>
      </div>

      <p className="text-xs text-gray-400">
        Door te verzenden gaat u akkoord met onze{' '}
        <a href="/privacyverklaring" className="text-red-600 hover:text-red-700">
          privacyverklaring
        </a>
        .
      </p>

      <button type="submit" className="btn-primary w-full justify-center" disabled={loading}>
        {loading ? 'Even geduld...' : 'Afspraak aanvragen'}
      </button>
    </form>
  )
}
