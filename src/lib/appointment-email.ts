import { business } from './site-data'

export type AppointmentEmailInput = {
  requestType: 'callback' | 'appointment'
  kenteken: string
  phone: string
  name?: string
  email?: string
  workType?: string
  description?: string
  /** ISO date string from the date picker, appointment requests only. */
  date?: string | null
  /** utm_*, gclid and the page the form was sent from. */
  attribution?: Record<string, string>
}

const INK = '#171C20'
const RED = '#C81E1E'
const MUTED = '#6B7074'
const LINE = '#E4E2DD'
const PAPER = '#FAF9F6'

const ATTRIBUTION_LABELS: Record<string, string> = {
  source: 'Bron',
  landingPage: 'Pagina',
  utmSource: 'utm_source',
  utmMedium: 'utm_medium',
  utmCampaign: 'utm_campaign',
  utmTerm: 'utm_term',
  utmContent: 'utm_content',
  gclid: 'gclid',
}

/** Everything the visitor typed ends up in HTML, so it is escaped and length-capped. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function clean(value: unknown, max = 200) {
  return typeof value === 'string' ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : ''
}

function formatDate(date: string | null | undefined) {
  if (!date) return ''
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return ''
  // Pinned to Dutch time: the picker sends local midnight, which is the previous day in UTC.
  return parsed.toLocaleDateString('nl-NL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Amsterdam',
  })
}

function formatNow() {
  return new Date().toLocaleString('nl-NL', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Amsterdam',
  })
}

function row(label: string, valueHtml: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-top:1px solid ${LINE};width:130px;vertical-align:top;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${MUTED};">${label}</td>
      <td style="padding:14px 0;border-top:1px solid ${LINE};vertical-align:top;font-size:16px;line-height:1.5;color:${INK};">${valueHtml}</td>
    </tr>`
}

function button(href: string, label: string, primary: boolean) {
  const style = primary
    ? `background:${RED};color:#ffffff;border:1px solid ${RED};`
    : `background:#ffffff;color:${INK};border:1px solid #ADAEA9;`
  return `<a href="${escapeHtml(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:13px 22px;border-radius:4px;font-size:15px;font-weight:600;text-decoration:none;${style}">${escapeHtml(label)}</a>`
}

export function buildAppointmentEmail(input: AppointmentEmailInput) {
  const isCallback = input.requestType === 'callback'
  const kenteken = clean(input.kenteken, 20).toUpperCase()
  const phone = clean(input.phone, 40)
  const name = clean(input.name) && clean(input.name) !== 'Niet opgegeven' ? clean(input.name) : ''
  const email = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(clean(input.email)) ? clean(input.email) : ''
  const workType = clean(input.workType, 60)
  const description = clean(input.description, 2000)
  const date = formatDate(input.date)

  const title = isCallback ? 'Nieuw terugbelverzoek' : 'Nieuwe afspraakaanvraag'
  const nextStep = isCallback
    ? 'Bel de klant terug om de werkzaamheden en een datum af te spreken.'
    : 'Bevestig de gewenste datum bij de klant, of stel een andere datum voor.'

  const subject = [`${isCallback ? 'Terugbelverzoek' : 'Afspraakaanvraag'} – ${kenteken}`, workType, !isCallback ? date : '']
    .filter(Boolean)
    .join(' · ')
    .replace(/[\r\n]+/g, ' ')

  const attribution = Object.entries(input.attribution ?? {})
    .map(([key, value]) => [ATTRIBUTION_LABELS[key] ?? clean(key, 40), clean(value, 200)] as const)
    .filter(([, value]) => value)

  const rows = [
    workType ? row('Werkzaamheden', escapeHtml(workType)) : '',
    !isCallback && date ? row('Gewenste datum', escapeHtml(date)) : '',
    row('Telefoon', `<a href="tel:${escapeHtml(phone.replace(/[^\d+]/g, ''))}" style="color:${INK};font-weight:600;">${escapeHtml(phone)}</a>`),
    name ? row('Naam', escapeHtml(name)) : '',
    email ? row('E-mail', `<a href="mailto:${escapeHtml(email)}" style="color:${INK};">${escapeHtml(email)}</a>`) : '',
    description ? row('Omschrijving', escapeHtml(description).replace(/\n/g, '<br>')) : '',
  ].join('')

  const attributionHtml = attribution.length
    ? `<p style="margin:24px 0 0;font-size:12px;line-height:1.7;color:${MUTED};">${attribution
        .map(([label, value]) => `${escapeHtml(label)}: ${escapeHtml(value)}`)
        .join(' &nbsp;·&nbsp; ')}</p>`
    : ''

  const html = `<!doctype html>
<html lang="nl">
<body style="margin:0;padding:0;background:#EDEBE6;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(title)} voor ${escapeHtml(kenteken)}. ${escapeHtml(nextStep)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EDEBE6;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${PAPER};border-radius:6px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
        <tr><td style="background:${INK};padding:22px 28px;">
          <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#B0B4B5;">${escapeHtml(business.name)} · website</div>
          <div style="margin-top:8px;font-size:24px;font-weight:700;letter-spacing:-.01em;color:#ffffff;">${escapeHtml(title)}</div>
        </td></tr>
        <tr><td style="padding:28px 28px 8px;">
          <div style="display:inline-block;padding:8px 18px;background:#F7D117;border:2px solid ${INK};border-radius:4px;font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:26px;font-weight:700;letter-spacing:.08em;color:${INK};">${escapeHtml(kenteken)}</div>
          <p style="margin:18px 0 0;font-size:15px;line-height:1.5;color:${INK};"><strong>Volgende stap:</strong> ${escapeHtml(nextStep)}</p>
        </td></tr>
        <tr><td style="padding:12px 28px 4px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}
            <tr><td colspan="2" style="border-top:1px solid ${LINE};font-size:0;line-height:0;height:1px;">&nbsp;</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 28px 28px;">
          ${button(`tel:${phone.replace(/[^\d+]/g, '')}`, `Bel ${name || phone}`, true)}${email ? button(`mailto:${email}`, 'Stuur e-mail', false) : ''}
          ${attributionHtml}
          <p style="margin:${attribution.length ? '8px' : '24px'} 0 0;font-size:12px;color:${MUTED};">Ontvangen op ${escapeHtml(formatNow())} via ${escapeHtml(business.name)} website</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  const text = [
    title.toUpperCase(),
    '',
    `Kenteken: ${kenteken}`,
    workType && `Werkzaamheden: ${workType}`,
    !isCallback && date && `Gewenste datum: ${date}`,
    `Telefoon: ${phone}`,
    name && `Naam: ${name}`,
    email && `E-mail: ${email}`,
    description && `Omschrijving:\n${description}`,
    '',
    `Volgende stap: ${nextStep}`,
    attribution.length ? `\n${attribution.map(([k, v]) => `${k}: ${v}`).join(' | ')}` : '',
    `Ontvangen op ${formatNow()}`,
  ]
    .filter((line) => line !== false && line !== undefined && line !== null)
    .join('\n')

  return { subject, html, text, replyTo: email || undefined }
}
