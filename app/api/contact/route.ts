import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, message } = body
  if (!name || !email || !message) return NextResponse.json({ message: 'Missing fields' }, { status: 400 })

  // TODO: plug your email service (Resend, Nodemailer, etc.)
  console.log('Contact form', { name, email, message })
  return NextResponse.json({ message: 'Message sent!' }, { status: 200 })
}
