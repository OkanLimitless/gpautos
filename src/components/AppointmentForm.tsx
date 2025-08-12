'use client'

import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css"
import toast from 'react-hot-toast'

// Register Dutch locale
registerLocale('nl', nl)

interface AppointmentFormProps {
  variant?: 'dark' | 'light'
}

export default function AppointmentForm({ variant = 'dark' }: AppointmentFormProps) {
  const isLight = variant === 'light'

  const containerClasses = isLight
    ? 'space-y-6 bg-white p-8 rounded-lg border border-zinc-200'
    : 'space-y-6 bg-zinc-800 p-8 rounded-lg'

  const labelClasses = isLight
    ? 'block text-sm font-medium text-zinc-700'
    : 'block text-sm font-medium text-gray-200'

  const inputClasses = isLight
    ? 'mt-1 block w-full rounded-md bg-white border-zinc-300 text-zinc-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
    : 'mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-white shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm'

  const textareaClasses = inputClasses

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    kenteken: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate) {
      toast.error('Selecteer een datum voor de afspraak')
      return
    }

    if (!formData.kenteken) {
      toast.error('Vul uw kenteken in')
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
          source: 'ads-landing',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Er is iets misgegaan')
      }

      toast.success('Bedankt! We nemen zo spoedig mogelijk contact met u op.')

      // Reset form
      setFormData({
        kenteken: '',
        name: '',
        email: '',
        phone: '',
        description: ''
      })
      setSelectedDate(null)
    } catch (error) {
      console.error('Error submitting appointment:', error)
      toast.error(error instanceof Error ? error.message : 'Er is iets misgegaan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={containerClasses} id="afspraak">
      <div>
        <label className={labelClasses}>
          Kenteken
        </label>
        <input
          type="text"
          required
          placeholder="AA-11-BB"
          className={inputClasses}
          value={formData.kenteken}
          onChange={(e) => setFormData({...formData, kenteken: e.target.value.toUpperCase()})}
        />
      </div>

      <div>
        <label className={labelClasses}>
          Gewenste Datum
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          locale="nl"
          dateFormat="P"
          minDate={new Date()}
          className={inputClasses}
          placeholderText="Selecteer een datum"
        />
      </div>

      <div>
        <label className={labelClasses}>
          Naam
        </label>
        <input
          type="text"
          required
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className={labelClasses}>
          E-mail
        </label>
        <input
          type="email"
          required
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className={labelClasses}>
          Telefoonnummer
        </label>
        <input
          type="tel"
          required
          className={inputClasses}
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <label className={labelClasses}>
          Omschrijving van de werkzaamheden
        </label>
        <textarea
          required
          rows={4}
          className={textareaClasses}
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <div className={isLight ? 'text-xs text-zinc-500' : 'text-xs text-gray-300'}>
        Door te verzenden gaat u akkoord met onze privacyvoorwaarden.
      </div>

      <button
        type="submit"
        className="w-full btn btn-primary"
        disabled={loading}
      >
        {loading ? 'Even geduld...' : 'Afspraak Aanvragen'}
      </button>
    </form>
  )
} 