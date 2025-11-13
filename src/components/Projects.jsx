import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Nebula UI Kit',
    desc: 'A modular design system inspired by sci‑fi interfaces with dynamic motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Quantum Commerce',
    desc: 'Next‑gen storefront with 3D product previews and realtime personalization.',
    tags: ['Next.js', 'Stripe', '3D'],
  },
  {
    title: 'Aurora Docs',
    desc: 'Minimal docs engine with beautiful typography and command‑palette search.',
    tags: ['Documentation', 'Search', 'MDX'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0B0B10] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
          <p className="text-white/60 mt-2">A peek into the kinds of experiences I love to craft.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-white/70 border border-white/10 rounded-full px-2 py-1">{t}</span>
                ))}
              </div>
              <button className="mt-5 inline-flex items-center text-sm text-white/80 group-hover:text-white transition">Explore →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
