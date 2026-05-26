import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { AIChat } from '@/components/ui/AIChat'

export const metadata: Metadata = {
  title: {
    default: 'AI Engineer & Cloud Architect | Portfolio',
    template: '%s | AI Engineer Portfolio',
  },
  description: 'Senior AI Engineer and Cloud Architect specializing in enterprise AI systems, automation, and cloud architecture. Building intelligent systems at scale.',
  keywords: ['AI Engineer', 'Cloud Architect', 'Solutions Architect', 'Enterprise AI', 'Azure', 'AWS', 'Automation Engineer', 'LangChain', 'RAG', 'AI Consultant'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'AI Engineer & Cloud Architect | Portfolio',
    description: 'Senior AI Engineer building intelligent enterprise systems at scale.',
    siteName: 'AI Engineer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineer & Cloud Architect',
    description: 'Senior AI Engineer building intelligent enterprise systems at scale.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="noise">
        <div className="fixed inset-0 grid-bg opacity-50 pointer-events-none z-0" />
        <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.06) 0%, transparent 70%)' }} />
        <div className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
        <AIChat />
      </body>
    </html>
  )
}
