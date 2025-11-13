import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0B0B10] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              I’m a front‑end engineer and designer focused on crafting interfaces that feel alive.
              My work blends performance, accessibility, and cinematic motion to create cohesive,
              futuristic experiences.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["Motion Design","Design Systems","3D on the Web","Creative Coding"].map((s)=> (
                <div key={s} className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="text-white font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li>• 5+ years building delightful UIs</li>
              <li>• Shipped for startups and brands</li>
              <li>• Obsessed with micro‑interactions</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
