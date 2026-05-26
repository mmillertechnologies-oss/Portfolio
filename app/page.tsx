import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Download, ExternalLink, Zap, Shield, Cloud, Brain } from 'lucide-react'
import { personal, stats, projects, skills, experience } from '@/data'

export default function HomePage() {
  const featured = projects.filter(p => p.featured)

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.3) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
              style={{ background: 'rgba(110,231,247,0.08)', border: '1px solid rgba(110,231,247,0.2)', color: 'var(--accent)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to AI Engineering & Architecture Roles
            </div>

            <h1 className="font-display font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-primary)' }}>
              AI Engineer &{' '}
              <span className="text-gradient">Cloud Architect</span>
              <br />Building Intelligent
              <br />Enterprise Systems
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              {personal.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-16">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight size={14} />
              </Link>
              <a href={personal.resumeUrl} className="btn-ghost">
                <Download size={14} /> Resume
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={14} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(s => (
                <div key={s.label} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                  <div className="font-display font-extrabold text-2xl mb-1" style={{ color: 'var(--accent)' }}>{s.value}</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label mb-3">Featured Work</div>
              <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--text-primary)' }}>
                Enterprise AI Projects
              </h2>
            </div>
            <Link href="/projects" className="btn-ghost hidden md:flex">
              All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.slice(0, 4).map((p, i) => (
              <Link key={p.id} href={`/projects#${p.id}`}
                className="card-glass group block"
                style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    {p.category.includes('AI') ? '⬡' : p.category.includes('Cloud') ? '◈' : p.category.includes('Data') ? '⬢' : '⟨⟩'}
                  </div>
                  <span className="tag">{p.category}</span>
                </div>
                <h3 className="font-display font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{p.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.slice(0, 4).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-medium flex items-center gap-1" style={{ color: p.color }}>
                  {p.impact[0]} <ExternalLink size={10} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE AREAS ── */}
      <section className="py-24 border-y" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Core Expertise</div>
            <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--text-primary)' }}>
              What I Build
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'AI & LLM Systems', desc: 'RAG pipelines, AI agents, LLM orchestration, vector databases, and production AI infrastructure.', color: '#6ee7f7' },
              { icon: Cloud, title: 'Cloud Architecture', desc: 'Azure & AWS infrastructure, cloud migrations, IaC with Terraform, and DevOps automation.', color: '#a78bfa' },
              { icon: Zap, title: 'Automation Engineering', desc: 'End-to-end workflow automation, AI-powered pipelines, and enterprise process optimization.', color: '#f59e0b' },
              { icon: Shield, title: 'Enterprise Systems', desc: 'Power BI analytics, Salesforce integration, data engineering, and secure enterprise platforms.', color: '#10b981' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="card-glass text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="section-label mb-3 text-center">Career</div>
            <h2 className="font-display font-bold text-3xl text-center mb-14" style={{ color: 'var(--text-primary)' }}>Experience</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'var(--border)' }} />
              <div className="flex flex-col gap-10">
                {experience.map((e, i) => (
                  <div key={e.role} className="pl-12 relative">
                    <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--accent)', color: 'var(--accent)', top: '4px' }}>
                      {i + 1}
                    </div>
                    <div className="text-xs mb-1" style={{ color: 'var(--accent)' }}>{e.period}</div>
                    <h3 className="font-display font-bold text-base" style={{ color: 'var(--text-primary)' }}>{e.role}</h3>
                    <div className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>{e.company}</div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>{e.description}</p>
                    <ul className="text-xs space-y-1">
                      {e.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2" style={{ color: 'var(--text-tertiary)' }}>
                          <span style={{ color: 'var(--accent)' }}>→</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto p-12 rounded-2xl relative overflow-hidden"
            style={{ background: 'rgba(110,231,247,0.04)', border: '1px solid rgba(110,231,247,0.2)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(110,231,247,0.1) 0%, transparent 60%)' }} />
            <h2 className="font-display font-extrabold text-3xl mb-4 relative" style={{ color: 'var(--text-primary)' }}>
              Let's Build Something<br />
              <span className="text-gradient">Intelligent Together</span>
            </h2>
            <p className="text-sm mb-8 relative" style={{ color: 'var(--text-secondary)' }}>
              Available for senior AI engineering roles, cloud architecture consulting, and enterprise AI projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 relative">
              <Link href="/contact" className="btn-primary">Get In Touch <ArrowRight size={14} /></Link>
              <a href={personal.calendly} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
