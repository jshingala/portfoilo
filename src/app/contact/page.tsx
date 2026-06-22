'use client'

import { motion } from "framer-motion"
import { Mail, Globe, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-12 md:px-20 lg:px-28 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase mb-4"
          style={{ color: "rgb(57,255,20)" }}>
          Contact Me
        </h1>

        <p className="text-zinc-500 text-sm leading-relaxed mb-12 tracking-wide">
          Open to full-time roles in AI engineering, GPU computing, and ML infrastructure.<br />
          Feel free to reach out anytime.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:jenilshingala2002@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-200 w-fit"
            style={{ background: "rgb(57,255,20)", color: "#0a0a0a" }}
            onMouseOver={e => {
              e.currentTarget.style.background = "rgb(40,200,10)"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(57,255,20,0.4)"
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "rgb(57,255,20)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <Mail size={16} />
            jenilshingala2002@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/jenil-shingala-39685a219/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold tracking-wider transition-all duration-200 w-fit text-zinc-300 hover:text-zinc-100"
            style={{ border: "1px solid rgba(57,255,20,0.4)" }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = "rgba(57,255,20,0.8)"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(57,255,20,0.1)"
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = "rgba(57,255,20,0.4)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <Globe size={16} />
            LinkedIn
          </a>

          <div className="flex items-center gap-2 text-zinc-600 text-sm mt-4">
            <MapPin size={13} />
            <span>Sacramento, CA</span>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
