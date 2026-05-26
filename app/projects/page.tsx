import type { Metadata } from 'next'
import { projects } from '@/data'
import { ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Enterprise AI engineering projects — RAG systems, AI agents, cloud migrations, and analytics platforms.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <div className="section-label mb-3">Case Studies</div>
          <h1 className="font-display font-extrabold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Enterprise AI Projects
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Production-grade AI systems and cloud platforms built for real business impact at enterprise scale.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((p, i) => (
            <div key={p.id} id={p.id} className="scroll-mt-28">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Left — metadata */}
                <div className="lg:col-span-2">
                  <div className="sticky top-28">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                      style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                      {p.category.includes('AI') ? '⬡' : p.category.includes('Cloud') ? '◈' : p.category.includes('Data') ? '⬢' : '⟨⟩'}
                    </div>
                    <span className="tag mb-3 inline-block">{p.category}</span>
                    <h2 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{p.title}</h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{p.summary}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — case study */}
                <div className="lg:col-span-3 flex flex-col gap-5">
                  {/* Screenshot placeholder */}
                  <div className="w-full h-48 rounded-xl flex items-center justify-center text-sm"
                    style={{ background: `linear-gradient(135deg, ${p.color}08, rgba(255,255,255,0.02))`, border: `1px solid ${p.color}20`, color: 'var(--text-tertiary)' }}>
                    <div className="text-center">
                      <div className="text-3xl mb-2 opacity-30">{p.category.includes('AI') ? '⬡' : p.category.includes('Cloud') ? '◈' : '⬢'}</div>
                      Architecture Diagram / Screenshot Placeholder
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Problem</div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Solution</div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.solution}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>Architecture</div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.architecture}</p>
                  </div>

                  <div className="p-4 rounded-xl" style={{ background: `${p.color}08`, border: `1px solid ${p.color}20` }}>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: p.color }}>Business Impact</div>
                    <div className="grid grid-cols-2 gap-2">
                      {p.impact.map(imp => (
                        <div key={imp} className="flex items-start gap-2">
                          <span className="text-lg leading-none" style={{ color: p.color }}>→</span>
                          <span className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {i < projects.length - 1 && <div className="mt-16 h-px" style={{ background: 'var(--border)' }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
