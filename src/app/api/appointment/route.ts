import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { buildAppointmentEmail } from '@/lib/appointment-email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { kenteken, name, email, phone, description, workType, date, requestType, ...rest } = body as Record<string, any>
    const isCallbackRequest = requestType === 'callback'

    if (!kenteken || !phone || (!isCallbackRequest && (!name || !email || !description || !date))) {
      return NextResponse.json(
        { error: isCallbackRequest ? 'Kenteken en telefoonnummer zijn verplicht' : 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    const attribution = Object.fromEntries(
      Object.entries(rest).filter(([, value]) => typeof value === 'string' && value)
    ) as Record<string, string>

    const message = buildAppointmentEmail({
      requestType: isCallbackRequest ? 'callback' : 'appointment',
      kenteken,
      phone,
      name,
      email,
      workType,
      description,
      date,
      attribution,
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'okangalatasaray001@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    })

    await transporter.sendMail({
      from: `"GP Auto's website" <${process.env.EMAIL_USER || 'okangalatasaray001@gmail.com'}>`,
      to: process.env.EMAIL_RECIPIENT || 'okangalatasaray001@gmail.com',
      replyTo: message.replyTo,
      subject: message.subject,
      text: message.text,
      html: message.html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het versturen van de afspraak' },
      { status: 500 }
    )
  }
}
