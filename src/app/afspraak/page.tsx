'use client'

import { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css"
import toast from 'react-hot-toast'
import Layout from '@/components/Layout'
import ReCAPTCHA from "react-google-recaptcha"
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

// Register Dutch locale
registerLocale('nl', nl)

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    kenteken: '',
    chassisnummer: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    date: null as Date | null
  })
  const [submitted, setSubmitted] = useState(false)

  const handleNextFromStep1 = () => {
    const { kenteken, chassisnummer } = formData
    if (!kenteken.trim() || !chassisnummer.trim()) {
      toast.error('Vul zowel kenteken als chassisnummer in')
      return
    }
    setStep(2)
  }

  const handleNextFromStep2 = () => {
    const { date, description } = formData
    if (!date || !description.trim()) {
      toast.error('Selecteer een datum en vul de omschrijving in')
      return
    }
    setStep(3)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.date) {
      toast.error('Selecteer een datum voor de afspraak')
      return
    }

    if (!captchaValue) {
      toast.error('Bevestig dat u geen robot bent')
      return
    }

    try {
      setLoading(true)
      
      // First verify the reCAPTCHA token
      const recaptchaResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: captchaValue }),
      })
      
      const recaptchaData = await recaptchaResponse.json()
      
      if (!recaptchaResponse.ok || !recaptchaData.success) {
        throw new Error('reCAPTCHA verificatie mislukt. Probeer het opnieuw.')
      }
      
      // If reCAPTCHA verification is successful, submit the form
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Er is iets misgegaan')
      }
      
      setSubmitted(true)
      toast.success('Bedankt voor uw aanvraag!')
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan')
    } finally {
      setLoading(false)
    }
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  return (
    <Layout>
      <div className="pt-28 min-h-screen white-section">
        <div className="container py-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-text-dark text-center mb-8 tracking-tight">Maak een Afspraak</h1>

            {/* Stepper */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2" />
                <div className="relative flex justify-between">
                  {[1,2,3].map((s, idx) => {
                    const isCompleted = step > s
                    const isCurrent = step === s
                    return (
                      <div key={s} className="flex flex-col items-center w-1/3">
                        <div className={`z-10 flex items-center justify-center h-10 w-10 rounded-full border ${isCurrent ? 'bg-primary text-white border-primary' : isCompleted ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-300'}`}>
                          {isCompleted ? (
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                          ) : (
                            <span className="font-semibold">{s}</span>
                          )}
                        </div>
                        <span className={`mt-2 text-xs font-semibold uppercase ${isCurrent ? 'text-gray-900' : 'text-gray-500'}`}>
                          {s === 1 ? 'Kenteken' : s === 2 ? 'Details' : 'Bevestiging'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white text-gray-900 p-6 md:p-8 rounded-xl border border-gray-200 shadow-lg">
              <AnimatePresence mode="wait">
                {!submitted && step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="space-y-6">
                    <div>
                      <label htmlFor="kenteken" className="block text-sm font-semibold text-gray-700 uppercase mb-2">Kenteken</label>
                      <input id="kenteken" type="text" required placeholder="AA11BB" className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" value={formData.kenteken} onChange={(e) => setFormData({...formData, kenteken: e.target.value.toUpperCase()})} />
                      <p className="mt-2 text-xs text-gray-500">Voer uw kenteken in zonder streepjes</p>
                    </div>
                    <div>
                      <label htmlFor="vin" className="block text-sm font-semibold text-gray-700 uppercase mb-2">Chassisnummer</label>
                      <input id="vin" type="text" placeholder="17 tekens" className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" value={formData.chassisnummer} onChange={(e) => setFormData({...formData, chassisnummer: e.target.value.toUpperCase()})} />
                      <p className="mt-2 text-xs text-gray-500">Vul hier het volledige chassisnummer van uw voertuig in</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <button type="button" onClick={handleNextFromStep1} className="md:col-start-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-6 py-3">Volgende</button>
                    </div>
                  </motion.div>
                )}

                {!submitted && step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="space-y-6">
                    <div>
                      <label htmlFor="datum" className="block text-sm font-semibold text-gray-700 uppercase mb-2">Gewenste Datum</label>
                      <DatePicker selected={formData.date} onChange={(date) => setFormData({...formData, date})} locale="nl" dateFormat="P" minDate={new Date()} className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" placeholderText="Selecteer een datum" />
                    </div>
                    <div>
                      <label htmlFor="omschrijving" className="block text-sm font-semibold text-gray-700 uppercase mb-2">Omschrijving van de werkzaamheden</label>
                      <textarea id="omschrijving" required rows={4} className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Beschrijf hier wat er aan uw auto gedaan moet worden" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <button type="button" onClick={() => setStep(1)} className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg px-6 py-3">Terug</button>
                      <button type="button" onClick={handleNextFromStep2} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-6 py-3">Volgende</button>
                    </div>
                  </motion.div>
                )}

                {!submitted && step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="space-y-6">
                    {/* Mini summary */}
                    <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div><span className="text-gray-500">Kenteken:</span> <span className="font-medium text-gray-900">{formData.kenteken || '-'}</span></div>
                        <div><span className="text-gray-500">Chassisnummer:</span> <span className="font-medium text-gray-900">{formData.chassisnummer || '-'}</span></div>
                        <div><span className="text-gray-500">Datum:</span> <span className="font-medium text-gray-900">{formData.date ? formData.date.toLocaleDateString('nl-NL') : '-'}</span></div>
                        <div className="md:col-span-2"><span className="text-gray-500">Omschrijving:</span> <span className="font-medium text-gray-900">{formData.description || '-'}</span></div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 uppercase mb-2">Naam</label>
                      <input id="naam" type="text" required placeholder="Uw volledige naam" className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 uppercase mb-2">E-mail</label>
                      <input id="email" type="email" required placeholder="uw.email@voorbeeld.nl" className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="tel" className="block text-sm font-semibold text-gray-700 uppercase mb-2">Telefoonnummer</label>
                      <input id="tel" type="tel" required placeholder="06 12345678" className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-primary py-3 px-4 placeholder:text-gray-400" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-center mb-4">
                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} onChange={handleCaptchaChange} theme="light" />
                      </div>
                      <div className="text-center text-xs text-gray-500 mb-6">
                        Door op versturen te klikken gaat u akkoord met onze{' '}
                        <Link href="/privacyverklaring" className="text-primary hover:underline">privacyverklaring</Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <button type="button" onClick={() => setStep(2)} className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg px-6 py-3" disabled={loading}>Terug</button>
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-6 py-3" disabled={loading}>{loading ? 'Even geduld...' : 'Versturen'}</button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitted && (
                  <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="text-center space-y-4">
                    <div className="mx-auto h-14 w-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Bedankt! Uw aanvraag is ontvangen.</h2>
                    <p className="text-gray-600">We nemen zo spoedig mogelijk contact met u op.</p>
                    <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-left">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div><span className="text-gray-500">Kenteken:</span> <span className="font-medium text-gray-900">{formData.kenteken || '-'}</span></div>
                        <div><span className="text-gray-500">Datum:</span> <span className="font-medium text-gray-900">{formData.date ? formData.date.toLocaleDateString('nl-NL') : '-'}</span></div>
                        <div className="md:col-span-2"><span className="text-gray-500">Omschrijving:</span> <span className="font-medium text-gray-900">{formData.description || '-'}</span></div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href="/" className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg px-6 py-3">Terug naar homepage</Link>
                      <a href="tel:+31615530641" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-6 py-3">Bel ons nu</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-primary hover:text-red-400 transition-colors">Terug naar de homepagina</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 