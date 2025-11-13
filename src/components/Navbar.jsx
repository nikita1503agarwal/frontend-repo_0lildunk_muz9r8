import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 animate-pulse" />
          <span className="text-white font-semibold tracking-wide">Flames • Porto</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <button onClick={() => scrollToId('about')} className="hover:text-white">About</button>
          <button onClick={() => scrollToId('projects')} className="hover:text-white">Projects</button>
          <button onClick={() => scrollToId('contact')} className="hover:text-white">Contact</button>
          <div className="h-6 w-px bg-white/10" />
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={18} /></a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact')}} className="hover:text-white"><Mail size={18} /></a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-white/90 bg-black/60 backdrop-blur-md">
          <button onClick={() => scrollToId('about')} className="block w-full text-left py-2">About</button>
          <button onClick={() => scrollToId('projects')} className="block w-full text-left py-2">Projects</button>
          <button onClick={() => scrollToId('contact')} className="block w-full text-left py-2">Contact</button>
        </div>
      )}
    </header>
  )
}
