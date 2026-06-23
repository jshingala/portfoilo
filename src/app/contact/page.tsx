'use client'

import { motion } from "framer-motion"
import { MapPin, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const EXPO = [0.16, 1, 0.3, 1] as const

const contacts = [
  {
    logo: "/icon-calendly.png",
    label: "Schedule a Call",
    value: "30-min intro · Calendly",
    href: "https://calendly.com/jenilshingala2002/30min",
    primary: true,
  },
  {
    logo: "/icon-email.jpg",
    label: "Email",
    value: "jenilshingala2002@gmail.com",
    href: "mailto:jenilshingala2002@gmail.com",
    primary: false,
  },
  {
    logo: "/icon-phone.jpg",
    label: "Phone",
    value: "+1 (916) 908-7006",
    href: "tel:+19169087006",
    primary: false,
  },
  {
    logo: "/icon-linkedin.png",
    label: "LinkedIn",
    value: "jenil-shingala-39685a219",
    href: "https://www.linkedin.com/in/jenil-shingala-39685a219/",
    primary: false,
  },
  {
    logo: "/icon-github.png",
    label: "GitHub",
    value: "github.com/jshingala",
    href: "https://github.com/jshingala",
    primary: false,
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:px-10 md:px-20 lg:px-28 pt-20 pb-16">
      <div className="w-full max-w-2xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: EXPO }}
          className="mb-3"
        >
          <span className="font-mono text-[11px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(57,255,20,0.55)" }}>
            Available Now
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: EXPO, delay: 0.04 }}
          className="font-bold leading-[0.95] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "rgb(248,248,248)" }}
        >
          Let&apos;s{" "}
          <span style={{ color: "rgb(57,255,20)", textShadow: "0 0 80px rgba(57,255,20,0.2)" }}>
            Talk.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EXPO, delay: 0.1 }}
          className="text-zinc-500 leading-relaxed mb-12 max-w-md"
          style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)" }}
        >
          Open to full-time roles in AI engineering, GPU computing, and ML infrastructure.
          Book a quick call or reach out directly.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {contacts.map((c) => {
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") || c.href.startsWith("tel:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EXPO } },
                }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200"
                style={
                  c.primary
                    ? { background: "rgb(57,255,20)", boxShadow: "0 0 32px rgba(57,255,20,0.25)" }
                    : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(57,255,20,0.15)" }
                }
                onMouseOver={e => {
                  if (!c.primary) {
                    e.currentTarget.style.background = "rgba(57,255,20,0.06)"
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.4)"
                  } else {
                    e.currentTarget.style.boxShadow = "0 0 48px rgba(57,255,20,0.45)"
                  }
                }}
                onMouseOut={e => {
                  if (!c.primary) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.15)"
                  } else {
                    e.currentTarget.style.boxShadow = "0 0 32px rgba(57,255,20,0.25)"
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                    style={
                      c.primary
                        ? { background: "rgba(0,0,0,0.15)" }
                        : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(57,255,20,0.15)" }
                    }>
                    <Image src={c.logo} alt={c.label} width={40} height={40} className="w-full h-full object-contain p-1.5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase mb-0.5"
                      style={{ color: c.primary ? "rgba(0,0,0,0.55)" : "rgba(57,255,20,0.45)" }}>
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold"
                      style={{ color: c.primary ? "#0a0a0a" : "rgb(220,220,220)" }}>
                      {c.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  style={{ color: c.primary ? "rgba(0,0,0,0.4)" : "rgba(57,255,20,0.35)" }}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Location footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-center gap-2 mt-10"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <MapPin size={12} />
          <span className="font-mono text-[11px] tracking-widest uppercase">Sacramento, CA · Open to remote & relocation</span>
        </motion.div>

      </div>
    </div>
  )
}
