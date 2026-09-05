# Landing-page redesign

Review branch: `codex/landers-redesign`

Worktree: `/Users/Okan_1/Git-Projects/gpautos-landers`

The branch starts from the existing checkout, including its unfinished landing-page work. The original checkout is unchanged. No PR has been opened and nothing has been deployed.

## Preview

Run `npm run build` followed by `npm run start -- --port 3100` in this worktree. For editing, use `npm run dev -- --port 3100` instead.

- [Homepage](http://localhost:3100/)
- [Advertising landing page](http://localhost:3100/ads)
- [Appointment request](http://localhost:3100/afspraak)
- [Example service page](http://localhost:3100/diensten/diagnose-storing)
- [Example brand page](http://localhost:3100/audi-specialist)
- [Example regional page](http://localhost:3100/regio/winterswijk)
- [Knowledge base](http://localhost:3100/kennisbank)

## Design

Warm off-white and charcoal surfaces, restrained red accents, larger typography, and existing workshop imagery. The homepage introduces an interactive service selector. Shared page components carry the design through all four services, four brand pages and nine regional pages. The knowledge base, article pages, privacy page and booking flow use the same navigation and footer.

The advertising page has a short callback form and minimal navigation. The appointment page collects a preferred date and the details needed to discuss the work. Both forms clearly explain that the workshop confirms the appointment personally.

## Functional changes

- Visible, keyboard-focused success states and inline retryable errors.
- Optional service selection, explicit field labels and native required-field validation.
- A phone navigation menu with focus containment and Escape-to-close.
- Website and advertising enquiries receive distinct attribution; ad query parameters are retained in submissions.
- Appointment dates are submitted as calendar dates instead of UTC instants. The email formats them in the workshop's Amsterdam timezone.
- Development sessions do not load live advertising conversion scripts.
- Existing page URLs, canonical metadata, noindex on the ad route and FAQ structured data are preserved.

## Verification

- Production build completed; all 32 generated routes/assets built successfully.
- ESLint and TypeScript passed.
- All 24 content pages returned HTTP 200 with one main landmark and one H1, valid JSON-LD, expected canonical metadata and working local anchors.
- Browser checks covered desktop, tablet, ordinary phones and narrow phones, plus service selection and mobile keyboard navigation.
- Callback validation, server failure/retry, success confirmation, service preselection and date selection were exercised through a local mock endpoint. No test emails were sent.
- The requested date was verified in the outgoing payload after the timezone correction.

Email delivery through the live SMTP account was not exercised.
