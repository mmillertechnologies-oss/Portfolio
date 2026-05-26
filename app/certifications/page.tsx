import type { Metadata } from 'next'
import { certifications } from '@/data'
import { CheckCircle, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Cloud and AI certifications — Azure, AWS, and certification roadmap.',
}

const statusIcon = { active: CheckCircle, 'in-progress': Clock, planned: Target }
const statusColor = { active: '#10b981', 'in-progress': '#f59e0b', planned: '#6888a8' }
const statusLabel = { active: 'Active', 'in-progress': 'In Progress', planned: 'Planned' }

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label mb-3">Credentials</div>
          <h1 className="font-display font-extrabold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Certifications & Roadmap
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Industry-recognized certifications validating cloud architecture and AI engineering expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map(cert => {
            const Icon = statusIcon[cert.status]
            const color = statusColor[cert.status]
            return (
              <div key={cert.name} className="card-glass relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: cert.status === 'active' ? cert.color : 'var(--border)' }} />
                <div className="flex items-start justify-between mb-4">
                  <div className="font-display font-extrabold text-2xl" style={{ color: cert.status === 'active' ? cert.color : 'var(--text-tertiary)' }}>
                    {cert.name}
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs"
                    style={{ background: `${color}15`, color }}>
                    <Icon size={11} />
                    {statusLabel[cert.status]}
                  </div>
                </div>
                <div className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{cert.full}</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{cert.vendor} · {cert.year}</div>
              </div>
            )
          })}
        </div>

        {/* Why certs matter */}
        <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
          <div className="section-label mb-4">Continuing Education</div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Cloud Mastery', desc: 'AZ-104 → AZ-305 pathway to Azure Solutions Architect Expert, the gold standard for enterprise cloud roles.' },
              { title: 'AI Specialization', desc: 'AWS ML Specialty and Azure AI Engineer certifications to formalize deep AI engineering expertise.' },
              { title: 'Security Focus', desc: 'Security+ and CISSP planned to round out enterprise architecture credibility with governance expertise.' },
            ].map(item => (
              <div key={item.title}>
                <h3 className="font-display font-semibold text-sm mb-2" style={{ color: 'var(--accent)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
