'use client'
import { useState } from 'react'
import { Mail, Linkedin, Github, Calendar, Send, CheckCircle } from 'lucide-react'
import { personal } from '@/data'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 500)
  }

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label mb-3">Contact</div>
          <h1 className="font-display font-extrabold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Let's Build Together
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Available for senior AI engineering roles, cloud architecture consulting, and enterprise AI engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="p-12 rounded-2xl text-center" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <CheckCircle className="mx-auto mb-4" size={40} style={{ color: '#10b981' }} />
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Message Received</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>I'll respond within 24 hours. Looking forward to connecting.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Your Name', placeholder: 'Jane Smith', required: true },
                    { key: 'email', label: 'Email Address', placeholder: 'jane@company.com', required: true },
                    { key: 'company', label: 'Company', placeholder: 'Acme Corp', required: false },
                    { key: 'role', label: 'Role / Position', placeholder: 'CTO, Hiring Manager...', required: false },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-xs mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
                        {field.label} {field.required && <span style={{ color: 'var(--accent)' }}>*</span>}
                      </label>
                      <input
                        type={field.key === 'email' ? 'email' : 'text'}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
                    Message <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <textarea required rows={5} placeholder="Tell me about the role, project, or opportunity..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
                </div>
                <button type="submit" className="btn-primary self-start">
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href={personal.calendly} target="_blank" rel="noopener noreferrer"
              className="card-glass flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(110,231,247,0.1)', border: '1px solid rgba(110,231,247,0.2)' }}>
                <Calendar size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>Book a Call</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>30-min intro call via Calendly</div>
              </div>
            </a>

            {[
              { href: `mailto:${personal.email}`, icon: Mail, label: 'Email', sub: personal.email, color: '#6ee7f7' },
              { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn', sub: 'Connect with me', color: '#0a66c2' },
              { href: personal.github, icon: Github, label: 'GitHub', sub: 'View my code', color: '#888' },
            ].map(({ href, icon: Icon, label, sub, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card-glass flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>{label}</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{sub}</div>
                </div>
              </a>
            ))}

            <div className="p-5 rounded-xl mt-2" style={{ background: 'rgba(110,231,247,0.04)', border: '1px solid rgba(110,231,247,0.15)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: 'var(--accent)' }}>Currently Available For</div>
              {['Senior AI Engineer roles', 'Cloud / Solutions Architect', 'AI consulting engagements', 'Enterprise AI projects'].map(item => (
                <div key={item} className="flex items-center gap-2 py-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
