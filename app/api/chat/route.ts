import { OpenAI } from 'openai'
import { NextRequest } from 'next/server'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `You are an AI assistant for a senior AI Engineer and Cloud Architect's portfolio website. Answer questions about their experience, projects, and skills in a professional, concise way.

Key facts:
- Senior AI Engineer with 5+ years building enterprise AI systems
- Expertise: Azure, AWS, Python, LangChain, RAG, AI Agents, Next.js, TypeScript
- Certifications: AZ-900, AI-900, AWS Solutions Architect Associate
- Projects: Enterprise chatbot (500+ users), RAG search (1M+ docs), AI lead gen system, Power BI analytics platform, cloud migration (200+ workloads)
- Impact: $2M+ cost savings delivered, 40% avg efficiency gains
- Available for AI engineering roles, consulting, and enterprise projects
- Located in Raleigh, NC — open to remote

Keep responses under 3 sentences. Be confident and specific. Encourage reaching out for roles.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      stream: true,
      max_tokens: 200,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages.slice(-6)],
    })
    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || ''
          if (text) controller.enqueue(encoder.encode(text))
        }
        controller.close()
      }
    })
    return new Response(readable, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
  } catch (error) {
    return new Response('Error processing request', { status: 500 })
  }
}
