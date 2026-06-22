'use client'

import { motion } from "framer-motion"

const links = [
  { label: "Portfolio", href: "/" },
  { label: "About Me", href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Me", href: "/contact" },
]

const neonGreen = "rgb(57,255,20)"
const neonGreenDim = "rgba(57,255,20,0.6)"

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 md:px-20 h-16 border-b bg-[#0a0a0a]/80 backdrop-blur-md"
      style={{ borderColor: "rgba(57,255,20,0.15)" }}
    >
      <span
        className="text-2xl font-bold uppercase tracking-widest"
        style={{ color: neonGreen, textShadow: "0 0 10px rgba(57,255,20,0.5)" }}
      >
        JS
      </span>

      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
            style={{ color: neonGreenDim }}
            onMouseOver={e => {
              e.currentTarget.style.color = neonGreen
              e.currentTarget.style.textShadow = "0 0 10px rgba(57,255,20,0.5)"
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = neonGreenDim
              e.currentTarget.style.textShadow = "none"
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
