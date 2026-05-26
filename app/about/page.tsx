import type { Metadata } from 'next'
import Link from 'next/link'
import { personal, experience, stats } from '@/data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Senior AI Engineer and Cloud Architect with deep expertise in enterprise AI systems and cloud infrastructure.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">

          {/* Bio */}
          <div className="lg:col-span-3">
            <div className="section-label mb-3">About</div>
            <h1 className="font-display font-extrabold text-4xl mb-8" style={{ color: 'var(--text-primary)' }}>
              Senior AI Engineer &<br />
              <span className="text-gradient">Cloud Architect</span>
            </h1>

            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>I'm a Senior AI Engineer and Cloud Architect with 5+ years of experience designing and deploying intelligent systems at enterprise scale. My work sits at the intersection of AI engineering, cloud infrastructure, and business strategy — I don't just build technology, I build systems that create measurable business value.</p>
              <p>My expertise spans the full AI engineering stack: from RAG architectures and LLM orchestration with LangChain, to enterprise cloud migrations on Azure and AWS, to analytics platforms that give executives real-time visibility into their operations. I've delivered $2M+ in documented cost savings and efficiency gains across multiple enterprise engagements.</p>
              <p>What distinguishes my approach is architectural thinking. Before writing a line of code, I understand the business problem, the scalability requirements, the security constraints, and the maintenance burden. The best AI systems are the ones that run reliably at 2am without anyone watching.</p>
              <p>I'm currently open to Senior AI Engineer, Cloud Architect, and Solutions Architect roles at companies serious about building intelligent systems — not just experimenting with AI. I thrive in environments where engineering is taken seriously and impact is measured in business outcomes.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Let's Talk <ArrowRight size={14} /></Link>
              <a href={personal.resumeUrl} className="btn-ghost">Download Resume</a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            {/* Photo placeholder */}
            <div className="w-full aspect-square rounded-2xl mb-8 flex items-center justify-center text-sm"
              style={{ background: 'linear-gradient(135deg, rgba(110,231,247,0.08), rgba(167,139,250,0.08))', border: '1px solid rgba(110,231,247,0.15)', color: 'var(--text-tertiary)' }}>
              <div className="text-center">
                <div className="text-5xl mb-3 opacity-20">◉</div>
                Professional Headshot
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {stats.map(s => (
                <div key={s.label} className="p-4 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                  <div className="font-display font-extrabold text-xl mb-1" style={{ color: 'var(--accent)' }}>{s.value}</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
              {[
                { label: 'Location', value: personal.location },
                { label: 'Status', value: 'Open to Opportunities' },
                { label: 'Focus', value: 'AI Engineering · Cloud Architecture' },
                { label: 'Preferred', value: 'Remote / Hybrid' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2.5 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20">
          <div className="section-label mb-8 text-center">Engineering Philosophy</div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Systems Thinking', desc: 'I design systems that are reliable, observable, and maintainable — not just impressive demos. Production AI requires architectural rigor.' },
              { title: 'Business-First', desc: 'Technology serves business outcomes. Every project I take on has clear success metrics tied to revenue, cost, or efficiency before the first commit.' },
              { title: 'Continuous Learning', desc: 'AI moves fast. I stay ahead through daily learning, hands-on experimentation, and building real systems with cutting-edge tools.' },
            ].map(item => (
              <div key={item.title} className="card-glass">
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: 'var(--accent)' }} />
                <h3 className="font-display font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
