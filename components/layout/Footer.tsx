import Link from 'next/link'
import { Github, Linkedin, Mail, Zap } from 'lucide-react'
import { personal } from '@/data'

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: 'var(--accent)' }}>
              <Zap size={12} className="text-black" />
            </div>
            <span className="font-display font-bold text-sm" style={{ color: 'var(--text-secondary)' }}>
              AI.Engineer Portfolio
            </span>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            Built with Next.js 15 · TypeScript · Deployed on Vercel
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: personal.github, icon: Github },
              { href: personal.linkedin, icon: Linkedin },
              { href: `mailto:${personal.email}`, icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
