'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Loader2, MessageCircle } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

const neon = 'rgb(57,255,20)'
const neonDim = 'rgba(57,255,20,0.15)'

const SUGGESTIONS = [
  "Is Jenil open to full-time roles?",
  "What are his strongest skills?",
  "Walk me through his biggest project.",
  "How do I schedule an interview?",
]

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi, I'm Seshat — Jenil Shingala's career agent. I'm here to help you evaluate him for your team. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  async function send(text?: string) {
    const content = (text ?? input).trim()
    if (!content || loading) return

    const userMsg: Message = { role: 'user', content }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages([...next, { role: 'assistant', content: data.reply ?? data.error }])
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
        style={{
          background: open ? '#0a0a0a' : neon,
          border: `2px solid ${neon}`,
          boxShadow: `0 0 20px rgba(57,255,20,0.4)`,
          color: open ? neon : '#0a0a0a',
        }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: '#0d0d0d',
              border: `1px solid rgba(57,255,20,0.25)`,
              boxShadow: `0 0 40px rgba(57,255,20,0.08), 0 20px 60px rgba(0,0,0,0.6)`,
              height: '480px',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b shrink-0"
              style={{ borderColor: 'rgba(57,255,20,0.15)', background: 'rgba(57,255,20,0.04)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: neonDim, border: `1px solid rgba(57,255,20,0.3)` }}>
                <Bot size={16} style={{ color: neon }} />
              </div>
              <div>
                <p className="text-sm font-bold tracking-wider uppercase" style={{ color: neon }}>Seshat</p>
                <p className="text-[10px] font-mono" style={{ color: 'rgba(57,255,20,0.45)' }}>Jenil&apos;s Career Agent · Powered by Mistral</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: neon }} />
                <span className="text-[10px] font-mono" style={{ color: 'rgba(57,255,20,0.5)' }}>online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(57,255,20,0.2) transparent' }}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mr-2 mt-0.5"
                      style={{ background: neonDim, border: `1px solid rgba(57,255,20,0.25)` }}>
                      <Bot size={11} style={{ color: neon }} />
                    </div>
                  )}
                  <div
                    className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={
                      m.role === 'user'
                        ? { background: neon, color: '#0a0a0a', fontWeight: 600, borderBottomRightRadius: '4px' }
                        : { background: 'rgba(255,255,255,0.04)', color: '#d4d4d8', border: '1px solid rgba(255,255,255,0.08)', borderBottomLeftRadius: '4px' }
                    }
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: neonDim, border: '1px solid rgba(57,255,20,0.25)' }}>
                    <Bot size={11} style={{ color: neon }} />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-[4px] flex items-center gap-1.5"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {[0, 0.15, 0.3].map(d => (
                      <motion.span key={d} className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'rgba(57,255,20,0.6)' }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d }} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Suggestions (show only at start) */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-col gap-1.5 mt-1">
                  {SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => send(s)}
                      className="text-left px-3 py-2 rounded-xl text-xs transition-all duration-200"
                      style={{ border: '1px solid rgba(57,255,20,0.2)', color: 'rgba(57,255,20,0.8)', background: 'rgba(57,255,20,0.03)' }}
                      onMouseOver={e => { e.currentTarget.style.background = 'rgba(57,255,20,0.08)'; e.currentTarget.style.borderColor = 'rgba(57,255,20,0.5)' }}
                      onMouseOut={e => { e.currentTarget.style.background = 'rgba(57,255,20,0.03)'; e.currentTarget.style.borderColor = 'rgba(57,255,20,0.2)' }}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t shrink-0"
              style={{ borderColor: 'rgba(57,255,20,0.12)', background: 'rgba(0,0,0,0.3)' }}>
              <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ border: '1px solid rgba(57,255,20,0.25)', background: 'rgba(57,255,20,0.04)' }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                  placeholder="Ask Seshat about Jenil..."
                  className="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || loading}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                  style={{ background: input.trim() && !loading ? neon : 'transparent', color: input.trim() && !loading ? '#0a0a0a' : neon }}
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
