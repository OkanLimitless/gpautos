import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { kenteken, name, email, phone, description, date, ...rest } = body as Record<string, any>

    if (!kenteken || !name || !email || !phone || !description || !date) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    // Format the date
    const appointmentDate = new Date(date)
    const formattedDate = appointmentDate.toLocaleDateString('nl-NL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Optional marketing attribution
    const attributionEntries = Object.entries(rest).filter(([_, v]) => typeof v === 'string' && v)
    const attributionHtml = attributionEntries.length
      ? `
        <hr />
        <p><strong>Attributie (optioneel):</strong></p>
        <ul>
          ${attributionEntries.map(([k, v]) => `<li><strong>${k}:</strong> ${String(v)}</li>`).join('')}
        </ul>
      `
      : ''

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'okangalatasaray001@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'okangalatasaray001@gmail.com',
      to: process.env.EMAIL_RECIPIENT || 'okangalatasaray001@gmail.com',
      subject: `Nieuwe afspraak aanvraag - ${kenteken}`,
      html: `
        <h1>Nieuwe afspraak aanvraag</h1>
        <p><strong>Kenteken:</strong> ${kenteken}</p>
        <p><strong>Datum:</strong> ${formattedDate}</p>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Omschrijving:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
        ${attributionHtml}
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het versturen van de afspraak' },
      { status: 500 }
    )
  }
} 