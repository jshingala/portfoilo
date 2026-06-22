'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
  { label: "Portfolio",    href: "/" },
  { label: "About Me",     href: "/#about" },
  { label: "Experience",   href: "/experience" },
  { label: "Projects",     href: "/projects" },
  { label: "Contact Me",   href: "/contact" },
]

const neon    = "rgb(57,255,20)"
const neonDim = "rgba(57,255,20,0.55)"
const EXPO    = [0.16, 1, 0.3, 1] as const

function isActive(href: string, pathname: string) {
  if (href === "/#about") return pathname === "/"
  if (href === "/")       return pathname === "/"
  return pathname.startsWith(href)
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EXPO }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-20 h-16 border-b bg-[#0a0a0a]/80 backdrop-blur-md"
        style={{ borderColor: "rgba(57,255,20,0.15)" }}
      >
        <span className="text-2xl font-bold uppercase tracking-widest"
          style={{ color: neon, textShadow: "0 0 10px rgba(57,255,20,0.5)" }}>
          JS
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = isActive(link.href, pathname)
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer pb-1"
                style={{ color: active ? neon : neonDim }}
                onMouseOver={e => { if (!active) e.currentTarget.style.color = neon }}
                onMouseOut={e => { if (!active) e.currentTarget.style.color = neonDim }}
              >
                {link.label}
                {/* Animated underline slides between active links */}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px rounded-full"
                    style={{ background: neon, boxShadow: "0 0 6px rgba(57,255,20,0.8)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg"
          style={{ color: neon }}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="menu"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0,   filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10,    filter: 'blur(6px)' }}
            transition={{ duration: 0.22, ease: EXPO }}
            className="fixed top-16 inset-x-0 z-40 md:hidden flex flex-col items-center gap-6 py-8 border-b backdrop-blur-md"
            style={{ background: "rgba(10,10,10,0.97)", borderColor: "rgba(57,255,20,0.15)" }}
          >
            {links.map((link, i) => {
              const active = isActive(link.href, pathname)
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-bold uppercase tracking-widest"
                  style={{ color: active ? neon : neonDim }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: EXPO }}
                >
                  {link.label}
                </motion.a>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
