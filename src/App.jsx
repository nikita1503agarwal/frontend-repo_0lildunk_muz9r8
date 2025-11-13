import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-[#0B0B10] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="opacity-80">Built with love • Futuristic, clean, aesthetic</p>
        </div>
      </footer>
    </div>
  )
}

export default App
