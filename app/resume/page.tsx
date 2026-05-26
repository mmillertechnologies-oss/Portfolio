import type { Metadata } from 'next'
import { personal, experience, skills, certifications } from '@/data'
import { Download } from 'lucide-react'

export const metadata: Metadata = { title: 'Resume', description: 'AI Engineer and Cloud Architect resume.' }

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="section-label mb-2">Resume</div>
            <h1 className="font-display font-extrabold text-3xl" style={{ color: 'var(--text-primary)' }}>
              AI Engineer & Cloud Architect
            </h1>
          </div>
          <a href={personal.resumeUrl} className="btn-primary">
            <Download size={14} /> Download PDF
          </a>
        </div>

        <div className="p-10 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
          {/* Header */}
          <div className="border-b pb-8 mb-8" style={{ borderColor: 'var(--border)' }}>
            <h2 className="font-display font-extrabold text-2xl mb-1" style={{ color: 'var(--text-primary)' }}>{personal.name}</h2>
            <div className="text-sm mb-3" style={{ color: 'var(--accent)' }}>{personal.title}</div>
            <div className="flex flex-wrap gap-4 text-xs" style={{ color: 'var(--text-tertiary)' }}>
              <span>{personal.email}</span>
              <span>{personal.location}</span>
              <span>linkedin.com/in/yourusername</span>
              <span>github.com/yourusername</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-tertiary)' }}>Summary</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Senior AI Engineer and Cloud Architect with 5+ years designing enterprise-grade AI systems, cloud infrastructure, and intelligent automation. Delivered $2M+ in measurable cost savings. Expert in Azure, AWS, LangChain, RAG architectures, and Python. Available for senior AI engineering and architecture roles.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--text-tertiary)' }}>Experience</h3>
            <div className="flex flex-col gap-6">
              {experience.map(e => (
                <div key={e.role}>
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{e.role}</div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{e.company}</div>
                    </div>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{e.period}</span>
                  </div>
                  <p className="text-xs leading-relaxed mt-2 mb-2" style={{ color: 'var(--text-secondary)' }}>{e.description}</p>
                  <ul className="text-xs space-y-1">
                    {e.highlights.map(h => <li key={h} style={{ color: 'var(--text-tertiary)' }}>• {h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-tertiary)' }}>Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
              {Object.entries(skills).map(([cat, data]) => (
                <div key={cat}>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{cat}</div>
                  <div>{data.items.map(s => s.name).join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-tertiary)' }}>Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.filter(c => c.status === 'active').map(c => (
                <span key={c.name} className="text-xs px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                  {c.name} — {c.full}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
