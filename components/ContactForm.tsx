"use client"
import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <label className="block">
        <span className="text-sm text-slate-700">Your email</span>
        <input required name="email" type="email" className="mt-1 block w-full rounded-md border px-3 py-2" />
      </label>
      <label className="block mt-3">
        <span className="text-sm text-slate-700">Message</span>
        <textarea required name="message" rows={5} className="mt-1 block w-full rounded-md border px-3 py-2" />
      </label>
      <div className="mt-4">
        <button className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md">Send</button>
      </div>
      {sent && <p className="mt-3 text-sm text-green-600">Thanks — your message is ready to be sent via your email client.</p>}
    </form>
  )
}
