'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

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
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-20 h-16 border-b bg-[#0a0a0a]/80 backdrop-blur-md"
        style={{ borderColor: "rgba(57,255,20,0.15)" }}
      >
        <span
          className="text-2xl font-bold uppercase tracking-widest"
          style={{ color: neonGreen, textShadow: "0 0 10px rgba(57,255,20,0.5)" }}
        >
          JS
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
          style={{ color: neonGreen }}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden flex flex-col items-center gap-6 py-8 border-b backdrop-blur-md"
            style={{ background: "rgba(10,10,10,0.97)", borderColor: "rgba(57,255,20,0.15)" }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold uppercase tracking-widest transition-colors"
                style={{ color: neonGreenDim }}
                onMouseOver={e => (e.currentTarget.style.color = neonGreen)}
                onMouseOut={e => (e.currentTarget.style.color = neonGreenDim)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
