'use client'

import { motion } from "framer-motion"

const links = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 md:px-20 h-16 border-b border-zinc-800/60 bg-[#0a0a0a]/80 backdrop-blur-md"
    >
      <span className="text-sm font-semibold tracking-tight text-zinc-50">JS</span>

      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors duration-200 cursor-pointer font-mono"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
