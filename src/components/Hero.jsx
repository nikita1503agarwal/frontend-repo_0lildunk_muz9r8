import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0B10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0B10]/40 via-[#0B0B10]/50 to-[#0B0B10]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
            <span>Futuristic • Clean • Aesthetic</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Crafting immersive web experiences
          </h1>
          <p className="mt-4 text-white/70 text-base md:text-lg">
            I design and build interfaces that feel like tomorrow — sleek, performant, and delightfully interactive.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
