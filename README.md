# GP Auto's Website

A modern website for GP Auto's, featuring a responsive design, appointment booking system, and service information.

## Features

- Responsive design for all devices
- Interactive slideshow hero section
- Service showcase
- Online appointment booking system with reCAPTCHA protection
- Contact information and opening hours
- Privacy policy page

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- Nodemailer for email functionality
- Google reCAPTCHA v2 for form protection

## Deployment on Vercel

This project is configured for seamless deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the following environment variables in the Vercel dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Your Gmail app password
   - `EMAIL_RECIPIENT`: Email address to receive appointment notifications
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA site key
   - `RECAPTCHA_SECRET_KEY`: Your Google reCAPTCHA secret key

### Important Notes

- The `.env.local` file is excluded from Git to keep credentials secure
- All necessary dependencies are specified in `package.json`
- The `vercel.json` file contains configuration for optimal deployment

## Local Development

If you need to run the project locally:

1. Copy `.env.example` to `.env.local` and fill in your credentials:
```bash
cp .env.example .env.local
```

2. Install dependencies and run the development server:
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Setting up reCAPTCHA

To set up reCAPTCHA for the appointment form:

1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Register a new site with reCAPTCHA v2 (checkbox)
3. Add your domain(s) to the list of allowed domains
4. Copy the Site Key and Secret Key
5. Add these keys to your environment variables:
   - For local development: add to `.env.local`
   - For production: add to Vercel environment variables

## Image Credits

All images used in this project are from Unsplash and are free to use. 