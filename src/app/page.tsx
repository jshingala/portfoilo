'use client'

import { useRef, useEffect } from "react"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Award, ExternalLink, ArrowUpRight } from "lucide-react"

const EXPO = [0.16, 1, 0.3, 1] as const

/* ── Story beats ──────────────────────────────────────────── */
const beats = [
  {
    idx: "01", label: "Agentic AI",
    headline: "AI that works\nfor engineers.",
    body: "Production agentic RAG on Microsoft Teams. 87% productivity gain for water/wastewater SCADA clients.",
    green: false,
  },
  {
    idx: "02", label: "GPU Kernels",
    headline: "Compute from\nfirst principles.",
    body: "FlashAttention in Triton from scratch. 250× memory reduction vs naive attention at 8,192 token sequence length.",
    green: true,
  },
  {
    idx: "03", label: "Full-Stack AI",
    headline: "End-to-end,\nalways shipped.",
    body: "React frontends, AWS backends, real-time computer vision inference at sub-50ms latency.",
    green: false,
  },
  {
    idx: "04", label: "Systems",
    headline: "Down to\nthe metal.",
    body: "C++ firmware, embedded Linux, Raspberry Pi hardware. From hardware boundary to production deployment.",
    green: false,
  },
]

function Beat({ b, i, total, prog }: {
  b: typeof beats[0]; i: number; total: number
  prog: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const seg = 1 / total
  const s = i * seg
  const opacity = useTransform(prog, [s, s + seg * 0.2, s + seg * 0.8, s + seg], [0, 1, 1, 0])
  const y = useTransform(prog, [s, s + seg * 0.28], [64, 0])
  return (
    <motion.div style={{ opacity, y }}
      className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-20 lg:px-28 pointer-events-none">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-[11px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(57,255,20,0.45)" }}>{b.idx}</span>
          <span className="font-mono text-[11px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(57,255,20,0.25)" }}>·</span>
          <span className="font-mono text-[11px] tracking-[0.4em] uppercase"
            style={{ color: "rgba(57,255,20,0.45)" }}>{b.label}</span>
        </div>
        <h2
          className="font-bold leading-[1.06] tracking-[-0.025em] mb-6 whitespace-pre-line"
          style={{
            fontSize: "clamp(2.6rem, 6vw, 5.2rem)",
            color: b.green ? "rgb(57,255,20)" : "rgb(248,248,248)",
          }}>
          {b.headline}
        </h2>
        <p className="text-zinc-500 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.45vw, 1.15rem)" }}>
          {b.body}
        </p>
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
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute right-8 md:right-14 top-[12%] bottom-[12%] w-px hidden md:block"
          style={{ background: "rgba(255,255,255,0.04)" }}>
          <motion.div className="w-full" style={{ height: lineH, background: "rgba(57,255,20,0.45)" }} />
        </div>
        {beats.map((b, i) => (
          <Beat key={i} b={b} i={i} total={beats.length} prog={scrollYProgress} />
        ))}
      </div>
    </div>
  )
}

/* ── Skills + data ────────────────────────────────────────── */
const skills = [
  "Agentic AI", "RAG",
  "PyTorch", "Triton", "CUDA", "cuDNN", "NCCL",
  "Python", "C++", "JavaScript",
  "TensorFlow", "HPC", "A100",
  "Kubernetes", "Docker",
  "Azure AI", "AWS", "Flask", "React.js",
  "Linux", "LLMOps", "MLOps",
]
const certs = [
  { name: "Generative AI LLMs",           href: "https://www.credly.com/badges/cffa007f-1701-47cb-9f94-dcb607888db1/linked_in?t=tgwk81" },
  { name: "AI Infrastructure & Operations", href: "https://www.credly.com/badges/d1957df0-66d2-49ed-9052-f6221c705a68/linked_in?t=tghd7z" },
]
const honors = [
  "Dean's Honor List, CSU Sacramento",
  "NCA-AIIO Bootcamp, AI Infrastructure & Ops",
  "NCA GENL Bootcamp, Generative AI",
  "Best Sportsperson Award",
]

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroOpacity = useTransform(heroP, [0, 0.6], [1, 0])
  const heroY       = useTransform(heroP, [0, 0.6], [0, -48])

  useEffect(() => {
    let lx = window.innerWidth * 0.72
    let ly = window.innerHeight * 0.5
    let canvas: HTMLCanvasElement | null = null
    let animId: number

    const tick = () => {
      // Cache canvas lookup — querySelector every frame is expensive
      if (!canvas) canvas = document.querySelector('canvas')
      if (canvas) {
        canvas.dispatchEvent(new PointerEvent('pointermove', { bubbles: false, clientX: lx, clientY: ly, pointerType: 'mouse', pointerId: 1 }))
        canvas.dispatchEvent(new MouseEvent('mousemove', { bubbles: false, clientX: lx, clientY: ly }))
      }
      animId = requestAnimationFrame(tick)
    }

    // Only track coordinates here — dispatching happens in the rAF loop so the
    // robot keeps looking at the cursor even when the user is just scrolling.
    const onMouseMove = (e: MouseEvent) => { lx = e.clientX; ly = e.clientY }
    window.addEventListener('mousemove', onMouseMove, true)
    animId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, true)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div>

      {/* Fixed robot — shifted right so it fills the right half */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="hidden md:block absolute inset-0" style={{ transform: "translateX(16%)" }}>
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} id="home"
        className="relative h-screen flex items-center overflow-hidden"
        style={{ zIndex: 10 }}>

        {/* Gradient — extra darkening on text side only; global veil in layout handles the rest */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1, background: "linear-gradient(100deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.45) 40%, rgba(8,8,8,0.1) 65%, transparent 80%)" }} />

        <Spotlight size={520} springOptions={{ bounce: 0, damping: 28 }} />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY, zIndex: 2 }}
          className="relative flex flex-col w-full md:w-[54%] px-6 sm:px-10 md:px-16 lg:px-24 gap-7 pt-16 pointer-events-auto"
        >
          {/* Role label */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.38, ease: EXPO }}
          >
            <span className="font-mono text-xs tracking-[0.35em] uppercase"
              style={{ color: "rgb(57,255,20)" }}>
              AI / GPU Engineer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: EXPO, delay: 0.04 }}
            className="font-bold leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3.8rem, 10vw, 9rem)" }}
          >
            <span className="text-white">Jenil</span>
            <br />
            <span style={{ color: "rgb(57,255,20)", textShadow: "0 0 120px rgba(57,255,20,0.18)" }}>
              Shingala
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: EXPO, delay: 0.12 }}
            className="text-zinc-500 leading-relaxed max-w-[28ch]"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
          >
            Building intelligence from the silicon up: GPU kernels, agentic AI, full-stack deployment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EXPO, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="mailto:jenilshingala2002@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ background: "rgb(57,255,20)", color: "#080808" }}
              whileHover={{ scale: 1.035, boxShadow: "0 0 36px rgba(57,255,20,0.45)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Get in touch
              <ArrowUpRight size={14} />
            </motion.a>
            <motion.a
              href="/experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              whileHover={{ scale: 1.025, borderColor: "rgba(57,255,20,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              View Work
            </motion.a>
          </motion.div>

          {/* NVIDIA badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.32 }}
            className="flex flex-wrap gap-2"
          >
            {certs.map(c => (
              <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] tracking-wide transition-all duration-200"
                style={{ border: "1px solid rgba(57,255,20,0.18)", color: "rgba(57,255,20,0.55)", background: "rgba(57,255,20,0.03)" }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = "rgba(57,255,20,0.5)"
                  e.currentTarget.style.color = "rgb(57,255,20)"
                  e.currentTarget.style.background = "rgba(57,255,20,0.08)"
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = "rgba(57,255,20,0.18)"
                  e.currentTarget.style.color = "rgba(57,255,20,0.55)"
                  e.currentTarget.style.background = "rgba(57,255,20,0.03)"
                }}
              >
                <Award size={9} />
                NVIDIA · {c.name}
                <ExternalLink size={9} className="opacity-40" />
              </a>
            ))}
          </motion.div>

          {/* Location + scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.32 }}
            className="flex items-end justify-between"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.18)" }}>
              <MapPin size={10} />
              Sacramento, CA
            </div>
            <div className="flex flex-col items-center gap-1.5 animate-scroll-bounce">
              <div className="w-px h-7"
                style={{ background: "linear-gradient(to bottom, rgba(57,255,20,0.5), transparent)" }} />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(57,255,20,0.25)" }}>Scroll</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Story ── */}
      <StorySection />

      {/* ── About ── */}
      <section id="about"
        className="relative px-6 sm:px-10 md:px-16 lg:px-24 py-28"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-mono text-[11px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(57,255,20,0.55)" }}>About</span>
          </motion.div>

          <motion.h2
            className="font-bold tracking-tight leading-[1.07] mb-8"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.6rem)", color: "rgb(248,248,248)" }}
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EXPO, delay: 0.04 }}
          >
            CS @ CSU Sacramento.{" "}
            <span style={{ color: "rgb(57,255,20)" }}>Major GPA 3.8.</span>
            <br />NVIDIA Certified.
          </motion.h2>

          <motion.p
            className="text-zinc-500 leading-[1.9] max-w-2xl mb-16"
            style={{ fontSize: "clamp(0.95rem, 1.35vw, 1.1rem)" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EXPO, delay: 0.1 }}
          >
            Specializing in AI, GPU computing, and machine learning. Hands-on experience building
            production AI systems with Azure, deploying scalable infrastructure on AWS, and
            engineering embedded systems in C++. Graduating{" "}
            <span className="text-zinc-300 font-medium">Fall 2025</span>.
          </motion.p>

          <p className="font-mono text-[11px] tracking-[0.35em] uppercase mb-5"
            style={{ color: "rgba(255,255,255,0.16)" }}>Technical Stack</p>

          <motion.div
            className="flex flex-wrap gap-2 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.022 } },
            }}
          >
            {skills.map(s => (
              <motion.span
                key={s}
                variants={{
                  hidden:   { opacity: 0, scale: 0.82, y: 9 },
                  visible:  { opacity: 1, scale: 1,    y: 0, transition: { duration: 0.3, ease: EXPO } },
                }}
                className="px-3 py-1.5 rounded-lg font-mono text-[12px] tracking-wide uppercase cursor-default"
                style={{
                  border: "1px solid rgba(57,255,20,0.16)",
                  color: "rgba(57,255,20,0.65)",
                  background: "rgba(57,255,20,0.03)",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(57,255,20,0.1)"
                  el.style.borderColor = "rgba(57,255,20,0.55)"
                  el.style.color = "rgb(57,255,20)"
                }}
                onMouseOut={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "rgba(57,255,20,0.03)"
                  el.style.borderColor = "rgba(57,255,20,0.16)"
                  el.style.color = "rgba(57,255,20,0.65)"
                }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EXPO }}
            >
              <p className="font-mono text-[11px] tracking-[0.35em] uppercase mb-6"
                style={{ color: "rgba(255,255,255,0.16)" }}>Certifications</p>
              <ul className="flex flex-col gap-4">
                {certs.map(c => (
                  <li key={c.name}>
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-3 text-sm leading-relaxed transition-colors duration-200"
                      style={{ color: "rgba(57,255,20,0.65)" }}
                      onMouseOver={e => (e.currentTarget.style.color = "rgb(57,255,20)")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(57,255,20,0.65)")}
                    >
                      <Award size={14} className="mt-0.5 shrink-0" />
                      <span className="font-medium">NVIDIA Certified · {c.name}</span>
                      <ExternalLink size={11} className="mt-0.5 shrink-0 opacity-40" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EXPO, delay: 0.08 }}
            >
              <p className="font-mono text-[11px] tracking-[0.35em] uppercase mb-6"
                style={{ color: "rgba(255,255,255,0.16)" }}>Honors</p>
              <ul className="flex flex-col gap-3.5">
                {honors.map(h => (
                  <li key={h} className="flex items-start gap-3 text-zinc-500 text-sm leading-relaxed">
                    <span className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full"
                      style={{ background: "rgba(57,255,20,0.5)" }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
