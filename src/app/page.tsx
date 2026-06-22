'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Mail, GraduationCap, MapPin, Globe, Award } from "lucide-react"

function InteractiveName({ name, color = "rgb(161,161,170)", hoverColor = "rgb(228,228,231)" }: { name: string; color?: string; hoverColor?: string }) {
  return (
    <span className="inline-flex">
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default"
          style={{ color }}
          whileHover={{
            y: -8,
            color: hoverColor,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  )
}

const skills = [
  "PyTorch", "Triton", "CUDA", "Python", "C++", "Java", "JavaScript",
  "TensorFlow", "Keras", "Azure AI", "AWS", "Docker", "Flask", "React.js",
  "Linux Kernel", "LLMOps", "MLOps",
]

const certifications = [
  "NVIDIA-Certified Associate: Generative AI LLMs",
  "NVIDIA-Certified Associate: AI Infrastructure and Operations",
]

const honors = [
  "Dean's Honor List — CSU Sacramento",
  "Best Sportsperson Award",
  "NCA-AIIO Bootcamp — AI Infrastructure & Ops Associate",
  "NCA GENL BootCamp — Generative AI",
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="home" className="min-h-screen flex bg-[#0a0a0a] relative overflow-hidden pt-16">
        <Spotlight size={500} springOptions={{ bounce: 0, damping: 30 }} />

        <div className="flex-1 flex flex-col justify-center items-center text-center px-12 md:px-20 lg:px-28 relative z-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">
              AI / GPU Engineer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] select-none">
              <InteractiveName name="Jenil" /><br />
              <InteractiveName
                name="Shingala"
                color="rgb(57,255,20)"
                hoverColor="rgb(180,255,150)"
              />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Generative AI · Agentic AI · LLMOps · MLOps<br />
              CUDA Kernel Programming · GPU Computing · Azure AI
            </p>

            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <GraduationCap size={15} className="text-zinc-500 shrink-0" />
              <span>B.S. Computer Science, <span className="text-zinc-300">CSU Sacramento</span></span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <MapPin size={15} className="text-zinc-500 shrink-0" />
              <span>Sacramento, CA</span>
            </div>

            <a href="mailto:jenilshingala2002@gmail.com"
              className="flex items-center gap-2 text-zinc-400 text-sm hover:text-zinc-200 transition-colors duration-200">
              <Mail size={15} className="text-zinc-500 shrink-0" />
              jenilshingala2002@gmail.com
            </a>

            <a href="https://www.linkedin.com/in/jenil-shingala-39685a219/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 text-sm hover:text-zinc-200 transition-colors duration-200">
              <Globe size={15} className="text-zinc-500 shrink-0" />
              linkedin.com/in/jenil-shingala-39685a219
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3 mt-2"
          >
            <a href="mailto:jenilshingala2002@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
              style={{ background: "rgb(57,255,20)", color: "#0a0a0a" }}
              onMouseOver={e => (e.currentTarget.style.background = "rgb(40,200,10)")}
              onMouseOut={e => (e.currentTarget.style.background = "rgb(57,255,20)")}
            >
              Get in touch
            </a>
            <a href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-colors duration-200 text-zinc-300 hover:text-zinc-100"
              style={{ borderColor: "rgba(57,255,20,0.4)" }}
            >
              About Me
            </a>
          </motion.div>
        </div>

        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* ── About Me ── */}
      <section id="about" className="bg-[#0a0a0a] px-12 md:px-20 lg:px-28 py-24 border-t"
        style={{ borderColor: "rgba(57,255,20,0.1)" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-10"
            style={{ color: "rgb(57,255,20)" }}>
            About Me
          </h2>

          <p className="text-zinc-300 text-lg leading-8 mb-12">
            I am a Computer Science student at California State University, Sacramento with a{" "}
            <span style={{ color: "rgb(57,255,20)", fontWeight: 700 }}>3.8 GPA</span>, specializing in{" "}
            <span style={{ color: "rgb(57,255,20)", fontWeight: 700 }}>AI, GPU computing, and machine learning</span>.
            I have hands-on experience building production AI systems with Azure, deploying scalable web
            infrastructure on AWS, and engineering embedded systems in C++. I hold two{" "}
            <span style={{ color: "rgb(57,255,20)", fontWeight: 700 }}>NVIDIA certifications</span> in
            Generative AI and AI Infrastructure, and I am graduating in{" "}
            <span style={{ color: "rgb(57,255,20)", fontWeight: 700 }}>Fall 2025</span>.
          </p>

          {/* Skills */}
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">Skills</p>
          <div className="flex flex-wrap gap-2 mb-16">
            {skills.map((s) => (
              <span key={s}
                className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-colors duration-200 cursor-default"
                style={{ border: "1px solid rgba(57,255,20,0.3)", color: "rgb(57,255,20)", background: "rgba(57,255,20,0.05)" }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(57,255,20,0.15)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(57,255,20,0.7)"
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(57,255,20,0.05)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(57,255,20,0.3)"
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Certifications & Honors */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 font-mono">Certifications</p>
              <ul className="flex flex-col gap-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed">
                    <Award size={14} className="mt-0.5 shrink-0" style={{ color: "rgb(57,255,20)" }} />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 font-mono">Honors & Awards</p>
              <ul className="flex flex-col gap-3">
                {honors.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "rgb(57,255,20)" }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </>
  )
}
