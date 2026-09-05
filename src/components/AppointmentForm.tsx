'use client'

import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import { format } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import { ArrowUpRight, Check } from './Icons'
import { business } from '@/lib/site-data'

registerLocale('nl', nl)
const WORK_TYPES = ['Onderhoud', 'Diagnose', 'Remmen', 'Coderen'] as const
const EMPTY_FORM = {
  kenteken: '',
  name: '',
  email: '',
  phone: '',
  description: '',
}

interface AppointmentFormProps {
  variant?: 'dark' | 'light' | 'home' | 'embedded'
  minDateOffsetDays?: number
  formId?: string | null
}

export default function AppointmentForm({
  variant = 'embedded',
  minDateOffsetDays = 1,
  formId = 'afspraak',
}: AppointmentFormProps) {
  const callback = variant === 'home'
  const prefix = useId()
  const id = (field: string) => `${prefix}-${field}`
  const [form, setForm] = useState(EMPTY_FORM)
  const [workType, setWorkType] = useState('')
  const [date, setDate] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [dateError, setDateError] = useState('')
  const [marketing, setMarketing] = useState<Record<string, string>>({})
  const successHeading = useRef<HTMLHeadingElement>(null)
  const [minDate] = useState(() => {
    const earliest = new Date()
    earliest.setDate(earliest.getDate() + minDateOffsetDays)
    earliest.setHours(0, 0, 0, 0)
    return earliest
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const source =
      window.location.pathname === '/ads'
        ? 'ads-landing'
        : callback
          ? 'homepage-callback'
          : 'appointment-page'
    const data: Record<string, string> = {
      source,
      landingPage: window.location.pathname,
    }
    for (const [query, key] of [
      ['utm_source', 'utmSource'],
      ['utm_medium', 'utmMedium'],
      ['utm_campaign', 'utmCampaign'],
      ['utm_term', 'utmTerm'],
      ['utm_content', 'utmContent'],
      ['gclid', 'gclid'],
    ]) {
      const value = params.get(query)
      if (value) data[key] = value
    }
    setMarketing(data)
    const service = params.get('dienst')
    if (WORK_TYPES.some((type) => type === service)) setWorkType(service!)
  }, [callback])

  useEffect(() => {
    if (submitted) successHeading.current?.focus()
  }, [submitted])
  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }))
  const label = 'mb-2 block font-semibold text-[var(--text)]'
  const input =
    'block w-full min-h-[48px] border border-[var(--border)] bg-white px-3 py-3 text-[var(--text)] placeholder:text-[#808577] focus:border-[var(--accent)]'

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (loading) return
    setError('')
    setDateError('')
    if (!callback && (!date || date < minDate)) {
      setDateError('Kies een datum vanaf morgen, of bel ons om te overleggen.')
      document.getElementById(id('date'))?.focus()
      return
    }
    if (
      !form.kenteken.trim() ||
      !form.phone.trim() ||
      (!callback && (!form.name.trim() || !form.description.trim()))
    ) {
      setError(
        'Vul de verplichte velden in. Alleen spaties zijn niet voldoende.'
      )
      return
    }
    setLoading(true)
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          kenteken: form.kenteken.trim(),
          phone: form.phone.trim(),
          name: form.name.trim() || 'Niet opgegeven',
          description: [
            callback ? 'Terugbelverzoek' : '',
            workType ? `Werksoort: ${workType}` : '',
            form.description.trim(),
          ]
            .filter(Boolean)
            .join('\n'),
          // A requested day is a calendar date, not a timezone-dependent instant.
          date: date ? format(date, 'yyyy-MM-dd') : null,
          requestType: callback ? 'callback' : 'appointment',
          ...marketing,
        }),
      })
      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(
          data?.error ||
            'Verzenden is niet gelukt. Probeer het opnieuw of bel ons.'
        )
      }
      setSubmitted(true)
      const analytics = window as Window & {
        dataLayer?: Record<string, string>[]
        gtag_report_conversion?: () => void
      }
      analytics.dataLayer?.push({
        event: 'lead_submit',
        form:
          marketing.source === 'ads-landing'
            ? 'ads_landing'
            : callback
              ? 'homepage_callback'
              : 'appointment_page',
        source: marketing.source,
      })
      analytics.gtag_report_conversion?.()
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : 'Geen verbinding. Probeer het opnieuw of bel ons.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted)
    return (
      <div id={formId ?? undefined} className="form-success" role="status">
        <span className="success-check">
          <Check />
        </span>
        <h3 ref={successHeading} tabIndex={-1}>
          Bedankt, we hebben uw {callback ? 'terugbelverzoek' : 'aanvraag'}{' '}
          ontvangen.
        </h3>
        <p>
          Wij nemen contact met u op om de werkzaamheden en een geschikt moment
          te bespreken. Uw afspraak is definitief zodra we die persoonlijk
          hebben bevestigd.
        </p>
        <button
          className="text-link"
          onClick={() => {
            setSubmitted(false)
            setForm(EMPTY_FORM)
            setDate(null)
            setWorkType('')
          }}
        >
          Nog een aanvraag doen <ArrowUpRight />
        </button>
      </div>
    )

  return (
    <form
      id={formId ?? undefined}
      onSubmit={submit}
      className="appointment-form space-y-5"
      aria-busy={loading}
    >
      <fieldset disabled={loading} className="space-y-5">
        <legend className="sr-only">
          {callback ? 'Uw terugbelverzoek' : 'Uw afspraakaanvraag'}
        </legend>
        <fieldset>
          <legend className={label}>Waar kunnen we u mee helpen?</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {WORK_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                className={`work-type border px-2 ${workType === type ? 'border-[var(--accent)] bg-[var(--accent)] text-white' : 'border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--accent)]'}`}
                aria-pressed={workType === type}
                onClick={() => setWorkType(workType === type ? '' : type)}
              >
                {type}
              </button>
            ))}
          </div>
        </fieldset>
        <div>
          <label className={label} htmlFor={id('kenteken')}>
            Uw kenteken{' '}
            <span className="font-normal text-[var(--text-secondary)]">
              (verplicht)
            </span>
          </label>
          <div className="license-plate flex overflow-hidden border focus-within:ring-2 focus-within:ring-[var(--accent)]">
            <div
              aria-hidden="true"
              className="flex w-10 shrink-0 flex-col items-center justify-center bg-[#274c9a] text-white"
            >
              <span className="text-[10px] text-[#ffe373]">✦</span>
              <span className="text-[10px] font-semibold">NL</span>
            </div>
            <input
              id={id('kenteken')}
              name="kenteken"
              required
              maxLength={15}
              autoCapitalize="characters"
              autoComplete="off"
              spellCheck={false}
              placeholder="AB-12-CD"
              value={form.kenteken}
              onChange={(e) => update('kenteken', e.target.value.toUpperCase())}
              className="min-h-[54px] w-full min-w-0 border-0 px-4 py-3 uppercase"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor={id('phone')}>
              Telefoonnummer{' '}
              <span className="font-normal text-[var(--text-secondary)]">
                (verplicht)
              </span>
            </label>
            <input
              id={id('phone')}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              maxLength={30}
              minLength={7}
              title="Vul een telefoonnummer in met minstens 7 tekens."
              placeholder="06 12345678"
              className={input}
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
            />
          </div>
          <div>
            <label className={label} htmlFor={id('name')}>
              Uw naam{' '}
              <span className="font-normal text-[var(--text-secondary)]">
                ({callback ? 'optioneel' : 'verplicht'})
              </span>
            </label>
            <input
              id={id('name')}
              name="name"
              autoComplete="name"
              required={!callback}
              maxLength={100}
              placeholder="Voor- en achternaam"
              className={input}
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
            />
          </div>
        </div>
        {!callback && (
          <>
            <div>
              <label className={label} htmlFor={id('email')}>
                E-mailadres{' '}
                <span className="font-normal text-[var(--text-secondary)]">
                  (verplicht)
                </span>
              </label>
              <input
                id={id('email')}
                name="email"
                autoComplete="email"
                type="email"
                required
                maxLength={254}
                className={input}
                placeholder="naam@voorbeeld.nl"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor={id('date')}>
                Gewenste datum{' '}
                <span className="font-normal text-[var(--text-secondary)]">
                  (verplicht)
                </span>
              </label>
              <DatePicker
                id={id('date')}
                name="date"
                selected={date}
                onChange={(value: Date | null) => {
                  setDate(value)
                  setDateError('')
                }}
                locale="nl"
                dateFormat="dd-MM-yyyy"
                minDate={minDate}
                placeholderText="Kies een datum"
                className={input}
                autoComplete="off"
                ariaInvalid={dateError ? 'true' : undefined}
                ariaDescribedBy={id('date-help')}
              />
              {dateError && (
                <p className="mt-2 text-xs text-[var(--accent)]" role="alert">
                  {dateError}
                </p>
              )}
              <p
                id={id('date-help')}
                className="mt-2 text-[10px] text-[var(--text-secondary)]"
              >
                Een voorkeur, geen bevestigde reservering. Wij stemmen de
                planning met u af.
              </p>
            </div>
          </>
        )}
        <div>
          <label className={label} htmlFor={id('description')}>
            {callback ? 'Uw vraag of klacht' : 'Wat wilt u laten doen?'}{' '}
            <span className="font-normal text-[var(--text-secondary)]">
              ({callback ? 'optioneel' : 'verplicht'})
            </span>
          </label>
          <textarea
            id={id('description')}
            name="description"
            rows={3}
            required={!callback}
            maxLength={3000}
            className={input}
            placeholder="Bijv. een onderhoudsbeurt of een lampje op het dashboard"
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
          />
        </div>
      </fieldset>
      {error && (
        <div role="alert" className="form-error">
          {error}{' '}
          <a className="underline" href={`tel:${business.phone}`}>
            Bel {business.phoneDisplay}
          </a>
        </div>
      )}
      <button
        className="btn-primary w-full justify-between"
        type="submit"
        disabled={loading}
      >
        {loading
          ? 'Bezig met versturen…'
          : callback
            ? 'Bel mij terug'
            : 'Verstuur mijn aanvraag'}
        <ArrowUpRight />
      </button>
      <p className="text-center text-[10px] leading-5 text-[var(--text-secondary)]">
        Wij gebruiken uw gegevens om contact op te nemen.{' '}
        <a href="/privacyverklaring" className="underline underline-offset-2">
          Privacyverklaring
        </a>
      </p>
    </form>
  )
}
