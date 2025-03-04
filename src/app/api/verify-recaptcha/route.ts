import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA token is missing' },
        { status: 400 }
      );
    }

    // Verify the token with Google's reCAPTCHA API
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: 'POST' }
    );

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('reCAPTCHA verification failed:', data);
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
} 