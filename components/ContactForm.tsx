'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    const data = await res.json()
    setStatus(data.message)
    if (res.ok) setForm({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" required className="w-full border rounded-lg px-4 py-2" value={form.name} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required className="w-full border rounded-lg px-4 py-2" value={form.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" required rows={5} className="w-full border rounded-lg px-4 py-2" value={form.message} onChange={handleChange} />
      <button type="submit" className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition">{status || 'Send'}</button>
    </form>
  )
}
