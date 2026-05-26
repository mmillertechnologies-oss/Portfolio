'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/certifications', label: 'Certs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{ background: scrolled ? 'rgba(8,8,16,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
            <Zap size={14} className="text-black" />
          </div>
          <span className="font-display font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
            AI.Engineer
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-150 font-medium ${pathname === l.href ? 'text-cyan-300' : 'text-gray-400 hover:text-white'}`}
              style={{ background: pathname === l.href ? 'rgba(110,231,247,0.08)' : 'transparent' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-3 btn-primary text-xs py-2">
            Hire Me
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-lg" style={{ color: 'var(--text-secondary)' }} onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t" style={{ borderColor: 'var(--border)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm border-b" style={{ color: pathname === l.href ? 'var(--accent)' : 'var(--text-secondary)', borderColor: 'var(--border)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
