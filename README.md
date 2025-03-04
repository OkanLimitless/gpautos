# GP Auto's Website

A modern website for GP Auto's, featuring a responsive design, appointment booking system, and service information.

## Features

- Responsive design for all devices
- Interactive slideshow hero section
- Service showcase
- Online appointment booking system
- Contact information and opening hours
- Privacy policy page

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- Nodemailer for email functionality

## Deployment on Vercel

This project is configured for seamless deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the following environment variables in the Vercel dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Your Gmail app password
   - `EMAIL_RECIPIENT`: Email address to receive appointment notifications

### Important Notes

- The `.env.local` file is excluded from Git to keep credentials secure
- All necessary dependencies are specified in `package.json`
- The `vercel.json` file contains configuration for optimal deployment

## Local Development

If you need to run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Image Credits

All images used in this project are from Unsplash and are free to use. 