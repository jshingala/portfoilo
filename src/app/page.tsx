'use client'

import { useRef, useEffect, type CSSProperties } from "react"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, GraduationCap, MapPin, Globe, Award, ExternalLink, Phone } from "lucide-react"

/* ── Interactive Name ─────────────────────────────────────── */
function InteractiveName({ name, color = "rgb(161,161,170)", hoverColor = "rgb(228,228,231)" }: {
  name: string; color?: string; hoverColor?: string
}) {
  return (
    <span className="inline-flex">
      {name.split("").map((char, i) => (
        <span
          key={i}
          className="interactive-char"
          style={{ '--char-color': color, '--char-hover-color': hoverColor } as CSSProperties}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  )
}

/* ── Story beats ──────────────────────────────────────────── */
const beats = [
  {
    num: "00", tag: "Portfolio",
    title: "AI / GPU Engineer.",
    sub: "Building intelligence from the silicon up — production AI systems, GPU kernels, and full-stack deployment. Here's what I do.",
    big: true,
  },
  {
    num: "01", tag: "Agentic AI",
    title: "I build AI that works for engineers.",
    sub: "Production agentic RAG on Microsoft Teams — raising team productivity 87% for water/wastewater SCADA clients.",
    big: false,
  },
  {
    num: "02", tag: "GPU Kernels",
    title: "I write compute from first principles.",
    sub: "FlashAttention in Triton from scratch — 250× memory reduction vs naive attention at sequence length 8192.",
    big: false,
  },
  {
    num: "03", tag: "Full-Stack AI",
    title: "I ship end-to-end.",
    sub: "React frontends, AWS backends, real-time computer vision inference at less than 50ms latency.",
    big: false,
  },
  {
    num: "04", tag: "Systems",
    title: "I go down to the metal.",
    sub: "C++ firmware, embedded Linux, Raspberry Pi hardware — from hardware boundary to production deployment.",
    big: false,
  },
]

function Beat({ beat, i, total, prog }: {
  beat: typeof beats[0]; i: number; total: number; prog: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const seg = 1 / total
  const s = i * seg
  const opacity = useTransform(prog, [s, s + seg * 0.3, s + seg * 0.75, s + seg], [0, 1, 1, 0])
  const y = useTransform(prog, [s, s + seg * 0.3], [50, 0])

  if (beat.big) {
    return (
      <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center px-5 sm:px-10 md:px-20 lg:px-28">
        <div className="max-w-2xl">
          <p className="text-xs font-mono tracking-[0.4em] uppercase mb-6" style={{ color: "rgba(57,255,20,0.4)" }}>
            {beat.num} / {beat.tag}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-8"
            style={{ color: "rgb(57,255,20)", textShadow: "0 0 60px rgba(57,255,20,0.25)" }}>
            {beat.title}
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-lg">{beat.sub}</p>
          <div className="mt-10 flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "rgba(57,255,20,0.4)" }} />
            <p className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "rgba(57,255,20,0.4)" }}>
              Scroll to explore
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center px-5 sm:px-10 md:px-20 lg:px-28">
      <div className="max-w-lg">
        <p className="text-xs font-mono tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(57,255,20,0.5)" }}>
          {beat.num} / {beat.tag}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-zinc-50 mb-6 tracking-tight">
          {beat.title}
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed">{beat.sub}</p>
      </div>
    </motion.div>
  )
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={ref} style={{ height: `${beats.length * 100}vh`, position: "relative", zIndex: 10 }}>
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none">
        {/* Vertical progress line */}
        <div className="absolute right-10 top-[20%] bottom-[20%] w-px hidden md:block"
          style={{ background: "rgba(57,255,20,0.12)" }}>
          <motion.div style={{ height: lineH, width: "100%", background: "rgb(57,255,20)",
            boxShadow: "0 0 8px rgba(57,255,20,0.6)" }} />
        </div>
        {beats.map((beat, i) => (
          <Beat key={i} beat={beat} i={i} total={beats.length} prog={scrollYProgress} />
        ))}
      </div>
    </div>
  )
}

/* ── About data ───────────────────────────────────────────── */
const skills = [
  "PyTorch", "Triton", "CUDA", "cuDNN", "cuDF", "cuML", "NCCL",
  "Python", "C++", "Java", "JavaScript",
  "TensorFlow", "Keras", "Leaky ReLU",
  "HPC", "DGX", "A100", "RIVA", "Omniverse", "NVIDIA DLI",
  "Kubernetes", "Slurm",
  "Azure AI", "AWS", "Docker", "Flask", "React.js",
  "Linux Kernel", "LLMOps", "MLOps",
]
const certifications = [
  {
    name: "NVIDIA-Certified Associate: Generative AI LLMs",
    link: "https://www.credly.com/badges/cffa007f-1701-47cb-9f94-dcb607888db1/linked_in?t=tgwk81",
  },
  {
    name: "NVIDIA-Certified Associate: AI Infrastructure and Operations",
    link: "https://www.credly.com/badges/d1957df0-66d2-49ed-9052-f6221c705a68/linked_in?t=tghd7z",
  },
]
const honors = [
  "Dean's Honor List — CSU Sacramento",
  "Best Sportsperson Award",
  "NCA-AIIO Bootcamp — AI Infrastructure & Ops Associate",
  "NCA GENL BootCamp — Generative AI",
]

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] })

  // Map full-screen cursor onto Spline canvas so robot tracks from anywhere on the page.
  // Throttled to one dispatch per animation frame to prevent Spline runtime stack overflow.
  useEffect(() => {
    let lastX = window.innerWidth * 0.75
    let lastY = window.innerHeight * 0.5
    let rafId: number | null = null

    const flushToCanvas = () => {
      rafId = null
      const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
      if (!canvas) return
      canvas.dispatchEvent(new PointerEvent('pointermove', { bubbles: false, clientX: lastX, clientY: lastY, pointerType: 'mouse', pointerId: 1 }))
      canvas.dispatchEvent(new MouseEvent('mousemove', { bubbles: false, clientX: lastX, clientY: lastY }))
    }

    const schedule = (x: number, y: number) => {
      lastX = x
      lastY = y
      if (rafId === null) rafId = requestAnimationFrame(flushToCanvas)
    }

    const onMouseMove = (e: MouseEvent) => schedule(e.clientX, e.clientY)
    const onScroll = () => schedule(lastX, lastY)

    window.addEventListener('mousemove', onMouseMove, true)
    window.addEventListener('scroll', onScroll, true)
    return () => {
      window.removeEventListener('mousemove', onMouseMove, true)
      window.removeEventListener('scroll', onScroll, true)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  const heroOpacity = useTransform(heroP, [0, 0.6], [1, 0])
  const heroY = useTransform(heroP, [0, 0.6], [0, -40])

  return (
    <div className="bg-[#0a0a0a]">

      {/* Fixed Spline robot — pointer-events:none so browser skips hit-testing on WebGL canvas */}
      <div className="fixed inset-0 w-full h-screen hidden md:block pointer-events-none"
        style={{ zIndex: 1, transform: 'translateX(20%)' }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} id="home" className="relative h-screen flex items-center overflow-hidden pt-16 pointer-events-none"
        style={{ zIndex: 10 }}>
        {/* Dark gradient so text stays readable over full-screen robot */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)", zIndex: 0 }} />
        <Spotlight size={500} springOptions={{ bounce: 0, damping: 30 }} />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}
          className="w-full md:w-1/2 flex flex-col justify-center px-5 sm:px-10 md:px-20 lg:px-28 gap-5 relative z-10 pointer-events-auto">

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-base md:text-lg uppercase tracking-[0.2em] text-zinc-400 mb-5 font-mono font-bold">AI / GPU Engineer</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] select-none">
              <InteractiveName name="Jenil" /><br />
              <InteractiveName name="Shingala" color="rgb(57,255,20)" hoverColor="rgb(180,255,150)" />
            </h1>
            {/* CSS animation — runs on compositor thread, zero JS cost */}
            <p className="text-2xl md:text-3xl font-semibold tracking-widest mt-3 animate-neon-cycle">
              Portfolio
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3">
            <p className="text-base text-zinc-400 leading-relaxed">
              Generative AI · Agentic AI · LLMOps · MLOps<br />
              CUDA Kernel Programming · GPU Computing · Azure AI
            </p>
            <div className="flex items-start gap-2.5 text-zinc-300 text-base">
              <GraduationCap size={16} className="text-zinc-500 shrink-0 mt-0.5" />
              <span>
                Bachelor's of Science in Computer Science<br />
                <span className="text-zinc-200">California State University, Sacramento</span>
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-300 text-base">
              <MapPin size={16} className="text-zinc-500 shrink-0" />
              Sacramento, CA
            </div>
            <a href="mailto:jenilshingala2002@gmail.com"
              className="flex items-center gap-2.5 text-zinc-300 text-base hover:text-zinc-100 transition-colors w-fit">
              <Mail size={16} className="text-zinc-500 shrink-0" />jenilshingala2002@gmail.com
            </a>
            <a href="tel:+19169087006"
              className="flex items-center gap-2.5 text-zinc-300 text-base hover:text-zinc-100 transition-colors w-fit">
              <Phone size={16} className="text-zinc-500 shrink-0" />+1 (916) 908-7006
            </a>
            <a href="https://www.linkedin.com/in/jenil-shingala-39685a219/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 text-base hover:text-zinc-100 transition-colors w-fit">
              <Globe size={16} className="text-zinc-500 shrink-0" />linkedin.com/in/jenil-shingala-39685a219
            </a>

            {/* NVIDIA Certification badges */}
            <div className="pt-3 mt-1 border-t flex flex-col gap-2.5" style={{ borderColor: "rgba(57,255,20,0.12)" }}>
              <p className="text-xs font-mono tracking-[0.25em] uppercase" style={{ color: "rgba(57,255,20,0.5)" }}>
                NVIDIA Certified
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://www.credly.com/badges/cffa007f-1701-47cb-9f94-dcb607888db1/linked_in?t=tgwk81"
                  target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg w-fit transition-all duration-200"
                  style={{ border: "1px solid rgba(57,255,20,0.3)", background: "rgba(57,255,20,0.04)" }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = "rgba(57,255,20,0.1)"
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.65)"
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(57,255,20,0.15)"
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = "rgba(57,255,20,0.04)"
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.3)"
                    e.currentTarget.style.boxShadow = "none"
                  }}>
                  <Award size={15} style={{ color: "rgb(57,255,20)" }} />
                  <span className="text-sm font-semibold tracking-wide" style={{ color: "rgb(57,255,20)" }}>
                    Generative AI LLMs
                  </span>
                  <ExternalLink size={12} className="opacity-50" style={{ color: "rgb(57,255,20)" }} />
                </a>
                <a href="https://www.credly.com/badges/d1957df0-66d2-49ed-9052-f6221c705a68/linked_in?t=tghd7z"
                  target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg w-fit transition-all duration-200"
                  style={{ border: "1px solid rgba(57,255,20,0.3)", background: "rgba(57,255,20,0.04)" }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = "rgba(57,255,20,0.1)"
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.65)"
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(57,255,20,0.15)"
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = "rgba(57,255,20,0.04)"
                    e.currentTarget.style.borderColor = "rgba(57,255,20,0.3)"
                    e.currentTarget.style.boxShadow = "none"
                  }}>
                  <Award size={15} style={{ color: "rgb(57,255,20)" }} />
                  <span className="text-sm font-semibold tracking-wide" style={{ color: "rgb(57,255,20)" }}>
                    AI Infrastructure & Operations
                  </span>
                  <ExternalLink size={12} className="opacity-50" style={{ color: "rgb(57,255,20)" }} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-3">
            <a href="mailto:jenilshingala2002@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: "rgb(57,255,20)", color: "#0a0a0a" }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = "0 0 24px rgba(57,255,20,0.5)")}
              onMouseOut={e => (e.currentTarget.style.boxShadow = "none")}>
              Get in touch
            </a>
            <a href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors duration-200"
              style={{ borderColor: "rgba(57,255,20,0.4)" }}>
              About Me
            </a>
          </motion.div>

          {/* Scroll hint — inner bounce is a CSS animation (compositor thread) */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            className="mt-2 flex flex-col items-start gap-1">
            <div className="animate-scroll-bounce">
              <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(57,255,20,0.7), transparent)" }} />
            </div>
            <p className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "rgba(57,255,20,0.35)" }}>Scroll</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Story ── */}
      <StorySection />

      {/* ── About Me ── */}
      <section id="about" className="relative bg-[#0a0a0a] px-5 sm:px-10 md:px-20 lg:px-28 py-24 border-t"
        style={{ borderColor: "rgba(57,255,20,0.1)", zIndex: 10 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-10"
            style={{ color: "rgb(57,255,20)" }}>About Me</h2>

          <p className="text-zinc-300 text-lg leading-8 mb-12">
            I am a Computer Science student at California State University, Sacramento with a{" "}
            <strong style={{ color: "rgb(57,255,20)" }}>Major GPA : 3.8</strong>, specializing in{" "}
            <strong style={{ color: "rgb(57,255,20)" }}>AI, GPU computing, and machine learning</strong>.
            Hands-on experience building production AI systems with Azure, deploying scalable web
            infrastructure on AWS, and engineering embedded systems in C++. I hold two{" "}
            <strong style={{ color: "rgb(57,255,20)" }}>NVIDIA certifications</strong> in Generative AI
            and AI Infrastructure, graduating <strong style={{ color: "rgb(57,255,20)" }}>Fall 2025</strong>.
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">Skills</p>
          <div className="flex flex-wrap gap-2 mb-16">
            {skills.map(s => (
              <span key={s}
                className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase cursor-default transition-all duration-200"
                style={{ border: "1px solid rgba(57,255,20,0.3)", color: "rgb(57,255,20)", background: "rgba(57,255,20,0.05)" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "rgba(57,255,20,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(57,255,20,0.7)" }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "rgba(57,255,20,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(57,255,20,0.3)" }}>
                {s}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 font-mono">Certifications</p>
              <ul className="flex flex-col gap-3">
                {certifications.map(c => (
                  <li key={c.name} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <Award size={14} className="mt-0.5 shrink-0" style={{ color: "rgb(57,255,20)" }} />
                    <a href={c.link} target="_blank" rel="noopener noreferrer"
                      className="font-bold transition-colors duration-200"
                      style={{ color: "rgb(57,255,20)" }}
                      onMouseOver={e => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseOut={e => (e.currentTarget.style.textDecoration = "none")}>
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 font-mono">Honors & Awards</p>
              <ul className="flex flex-col gap-3">
                {honors.map(h => (
                  <li key={h} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "rgb(57,255,20)" }} />{h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
