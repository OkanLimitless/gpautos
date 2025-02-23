'use client'

import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { nl } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css"
import toast from 'react-hot-toast'

// Register Dutch locale
registerLocale('nl', nl)

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [formData, setFormData] = useState({
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

    // Here we'll add the API call to save the appointment
    toast.success('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-800 p-8 rounded-lg" id="afspraak">
      <div>
        <label className="block text-sm font-medium text-gray-200">
          Gewenste Datum
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          locale="nl"
          dateFormat="P"
          minDate={new Date()}
          className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-white shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
          placeholderText="Selecteer een datum"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">
          Naam
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-white shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">
          E-mail
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-white shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">
          Telefoonnummer
        </label>
        <input
          type="tel"
          required
          className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-white shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">
          Omschrijving van de werkzaamheden
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-white shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <button
        type="submit"
        className="w-full btn btn-primary"
      >
        Afspraak Aanvragen
      </button>
    </form>
  )
} 