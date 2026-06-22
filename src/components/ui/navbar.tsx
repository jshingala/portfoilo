'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects",   href: "/projects" },
  { label: "Contact",    href: "/contact" },
]

const neon    = "rgb(57,255,20)"
const neonDim = "rgba(57,255,20,0.45)"
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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EXPO }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 h-[60px]"
        style={{
          background: "rgba(8,8,8,0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {/* Brand */}
        <a href="/" className="text-xl font-bold tracking-tight"
          style={{ color: neon, textShadow: "0 0 16px rgba(57,255,20,0.35)", letterSpacing: "-0.01em" }}>
          JS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(link => {
            const active = isActive(link.href, pathname)
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm pb-0.5 transition-colors duration-200"
                style={{
                  color: active ? neon : "rgba(255,255,255,0.45)",
                  fontWeight: active ? 600 : 400,
                  letterSpacing: "0.01em",
                }}
                onMouseOver={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.85)" }}
                onMouseOut={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.45)" }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ color: "rgba(255,255,255,0.6)" }}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.14 }}>
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span key="menu"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.14 }}>
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8,    filter: "blur(8px)" }}
            transition={{ duration: 0.2, ease: EXPO }}
            className="fixed top-[60px] inset-x-0 z-40 md:hidden flex flex-col items-start px-6 py-6 gap-5"
            style={{
              background: "rgba(8,8,8,0.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {links.map((link, i) => {
              const active = isActive(link.href, pathname)
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base"
                  style={{
                    color: active ? neon : "rgba(255,255,255,0.5)",
                    fontWeight: active ? 600 : 400,
                  }}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.045, duration: 0.28, ease: EXPO }}
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
