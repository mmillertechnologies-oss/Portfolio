'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message { role: 'user' | 'assistant'; content: string }

const SUGGESTED = [
  'What AI projects have you built?',
  'What cloud platforms do you use?',
  'Are you available for consulting?',
  'What is your experience with RAG?',
]

export function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm an AI assistant trained on this portfolio. Ask me anything about my experience, projects, or skills." }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const send = async (text?: string) => {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    const newMessages: Message[] = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      if (!res.ok) throw new Error('Failed')
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let reply = ''
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])
      while (reader) {
        const { done, value } = await reader.read()
        if (done) break
        reply += decoder.decode(value)
        setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: reply }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }])
    } finally { setLoading(false) }
  }

  return (
    <>
      <button onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ background: 'var(--accent)', boxShadow: '0 0 20px var(--accent-glow)' }}>
        {open ? <X size={18} className="text-black" /> : <MessageCircle size={18} className="text-black" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: '#0d0d1a', border: '1px solid rgba(110,231,247,0.2)', boxShadow: '0 0 40px rgba(110,231,247,0.1)' }}>
          <div className="p-4 border-b flex items-center gap-2" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(110,231,247,0.15)' }}>
              <Bot size={14} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Portfolio AI</div>
              <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Ask me anything</div>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <div className="h-72 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: m.role === 'assistant' ? 'rgba(110,231,247,0.15)' : 'rgba(167,139,250,0.15)' }}>
                  {m.role === 'assistant' ? <Bot size={12} style={{ color: 'var(--accent)' }} /> : <User size={12} style={{ color: '#a78bfa' }} />}
                </div>
                <div className="max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed"
                  style={{ background: m.role === 'assistant' ? 'rgba(255,255,255,0.04)' : 'rgba(167,139,250,0.15)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {m.content || (loading && i === messages.length - 1 ? <Loader2 size={12} className="animate-spin" /> : '')}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-col gap-1">
              {SUGGESTED.map(s => (
                <button key={s} onClick={() => send(s)} className="text-left text-xs px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                  style={{ background: 'rgba(110,231,247,0.06)', color: 'var(--accent)', border: '1px solid rgba(110,231,247,0.12)' }}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t flex gap-2" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about my experience..."
              className="flex-1 text-xs px-3 py-2 rounded-lg outline-none"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-primary)' }} />
            <button onClick={() => send()} disabled={loading || !input.trim()}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ background: input.trim() ? 'var(--accent)' : 'rgba(255,255,255,0.05)', color: input.trim() ? '#080810' : 'var(--text-tertiary)' }}>
              {loading ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
