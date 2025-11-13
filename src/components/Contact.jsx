import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder action: simulate send
    await new Promise(r => setTimeout(r, 800))
    setStatus('Sent! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative bg-[#0B0B10] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Let’s build something</h2>
        <p className="text-white/70 mt-2">Tell me about your idea, timeline, and goals.</p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Your name" required />
          <input type="email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Email" required />
          <textarea rows={5} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Project details" required />
          <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">Send message</button>
          {status && <p className="text-white/70 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
