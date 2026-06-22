'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Mail, GraduationCap, MapPin } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[#0a0a0a] relative overflow-hidden pt-16">
      <Spotlight size={500} springOptions={{ bounce: 0, damping: 30 }} />

      {/* Left — intro text */}
      <div className="flex-1 flex flex-col justify-center px-12 md:px-20 lg:px-28 relative z-10 gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">
            Software Engineer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-50 leading-[1.05]">
            Jenil<br />Shingala
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex flex-col gap-3.5"
        >
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <GraduationCap size={15} className="text-zinc-500 shrink-0" />
            <span>
              B.S. Computer Science,{" "}
              <span className="text-zinc-300">CSU Sacramento</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <MapPin size={15} className="text-zinc-500 shrink-0" />
            <span>Sacramento, CA</span>
          </div>

          <a
            href="mailto:jenilshingala1002@gmail.com"
            className="flex items-center gap-3 text-zinc-400 text-sm hover:text-zinc-200 transition-colors duration-200 cursor-pointer group w-fit"
          >
            <Mail size={15} className="text-zinc-500 shrink-0 group-hover:text-zinc-300 transition-colors" />
            <span>jenilshingala1002@gmail.com</span>
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="flex gap-3 mt-2"
        >
          <a
            href="mailto:jenilshingala1002@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-50 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
          >
            Get in touch
          </a>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors duration-200 cursor-pointer">
            View work
          </button>
        </motion.div>
      </div>

      {/* Right — 3D scene */}
      <div className="flex-1 relative hidden md:block">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </main>
  )
}
