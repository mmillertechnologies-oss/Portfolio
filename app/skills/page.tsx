import type { Metadata } from 'next'
import { skills } from '@/data'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills across AI engineering, cloud architecture, development, and enterprise systems.',
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label mb-3">Technical Skills</div>
          <h1 className="font-display font-extrabold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Engineering Capabilities
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Deep expertise across AI engineering, cloud architecture, and enterprise systems — built through real production deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className="card-glass">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: `${data.color}15`, border: `1px solid ${data.color}30`, color: data.color }}>
                  {data.icon}
                </div>
                <h2 className="font-display font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{category}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {data.items.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span className="text-xs font-medium" style={{ color: data.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${data.color}80, ${data.color})` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className="mt-16">
          <div className="section-label mb-6 text-center">Technologies</div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Azure OpenAI', 'LangChain', 'Pinecone', 'Python', 'TypeScript', 'Next.js', 'FastAPI', 'Azure', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Power BI', 'Salesforce', 'GPT-4', 'Claude API', 'RAG', 'AI Agents', 'Vector DBs', 'CI/CD', 'PowerShell', 'Node.js', 'React', 'SQL'].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-secondary)', cursor: 'default' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
