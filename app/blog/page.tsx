import type { Metadata } from 'next'
import { blogPosts } from '@/data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'AI engineering insights, cloud architecture patterns, and enterprise automation strategies.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-label mb-3">Writing</div>
          <h1 className="font-display font-extrabold text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            AI Engineering Insights
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Deep dives into AI systems, cloud architecture, and enterprise engineering from real production experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <article key={post.slug}
              className="card-glass group cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="tag">{post.category}</span>
                <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{post.readTime} read</span>
              </div>
              <h2 className="font-display font-bold text-base mb-3 group-hover:text-cyan-300 transition-colors leading-snug" style={{ color: 'var(--text-primary)' }}>
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="text-xs flex items-center gap-1" style={{ color: 'var(--accent)' }}>
                  Read More <ArrowRight size={11} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
