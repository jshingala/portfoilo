'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Mail, GraduationCap, MapPin, Globe, ExternalLink, Briefcase, Award } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function InteractiveName({ name }: { name: string }) {
  return (
    <span className="inline-flex">
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default"
          style={{ color: "rgb(161,161,170)" }}
          whileHover={{
            y: -8,
            color: "rgb(228,228,231)",
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

const experience = [
  {
    company: "Advanced Integration & Controls",
    role: "Artificial Intelligence Intern",
    period: "May 2025 – Dec 2025",
    location: "Sacramento, CA",
    bullets: [
      "Utilized Azure AI Search for document retrieval from company data sources.",
      "Employed Azure AI to generate accurate answers based on retrieved documents, enhancing information reliability.",
      "Leveraged Azure AI Studio for secure deployment of AI systems with seamless business integration.",
    ],
  },
  {
    company: "Sentrisight LLC",
    role: "Software Engineer",
    period: "Sep 2024 – Jun 2025",
    location: "Sacramento, CA",
    bullets: [
      "Deployed a reliable and scalable website using AWS Lightsail, enhancing hosting infrastructure.",
      "Utilized Amazon S3 for efficient storage of static assets and media files.",
      "Developed a Flask API achieving 99% accuracy metrics with RESTful endpoints for frontend/database communication.",
      "Built a responsive UI with React.js and Tailwind CSS for an engaging user experience.",
    ],
  },
  {
    company: "Goldfield Scale Solution",
    role: "Embedded Engineer",
    period: "Aug 2021 – Dec 2021",
    location: "Mumbai, India",
    bullets: [
      "Engineered embedded systems for 3 high-precision weighing scale models using C++.",
      "Improved product accuracy by 15% and reduced calibration time by 30%.",
    ],
  },
]

const certifications = [
  "NVIDIA-Certified Associate: Generative AI LLMs",
  "NVIDIA-Certified Associate: AI Infrastructure and Operations",
]

const honors = [
  "Dean's Honor List",
  "Best Sportsperson",
  "NCA-AIIO Bootcamp – AI Infra & Ops Associate",
  "NCA GENL BootCamp",
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section id="home" className="min-h-screen flex bg-[#0a0a0a] relative overflow-hidden pt-16">
        <Spotlight size={500} springOptions={{ bounce: 0, damping: 30 }} />

        <div className="flex-1 flex flex-col justify-center px-12 md:px-20 lg:px-28 relative z-10 gap-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">
              AI / GPU Engineer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-50 leading-[1.05] select-none">
              <InteractiveName name="Jenil" /><br />
              <InteractiveName name="Shingala" />
            </h1>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="flex flex-col gap-3">
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Generative AI · Agentic AI · LLMOps · MLOps<br />
              CUDA Kernel Programming · GPU Computing · Azure AI
            </p>

            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <GraduationCap size={15} className="text-zinc-500 shrink-0" />
              <span>B.S. Computer Science, <span className="text-zinc-300">CSU Sacramento</span></span>
            </div>

            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <MapPin size={15} className="text-zinc-500 shrink-0" />
              <span>Sacramento, CA</span>
            </div>

            <a
              href="mailto:jenilshingala2002@gmail.com"
              className="flex items-center gap-3 text-zinc-400 text-sm hover:text-zinc-200 transition-colors duration-200 group w-fit"
            >
              <Mail size={15} className="text-zinc-500 shrink-0 group-hover:text-zinc-300 transition-colors" />
              jenilshingala2002@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/jenilshingala-39685a219"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 text-sm hover:text-zinc-200 transition-colors duration-200 group w-fit"
            >
              <Globe size={15} className="text-zinc-500 shrink-0 group-hover:text-zinc-300 transition-colors" />
              linkedin.com/in/jenilshingala-39685a219
            </a>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="flex gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-50 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors duration-200"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors duration-200"
            >
              Learn more
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

      {/* ── About ── */}
      <section id="about" className="bg-[#0a0a0a] px-12 md:px-20 lg:px-28 py-28 border-t border-zinc-800/50">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-mono">About</p>
          <p className="text-zinc-300 text-lg leading-8 mb-10">
            I am a Computer Science student at California State University, Sacramento with a 3.8 GPA,
            specializing in AI, GPU computing, and machine learning. I have hands-on experience building
            production AI systems with Azure, deploying scalable web infrastructure on AWS, and engineering
            embedded systems in C++. I hold two NVIDIA certifications in Generative AI and AI Infrastructure,
            and I am graduating in Fall 2025.
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-xs font-mono hover:border-zinc-500 hover:text-zinc-200 transition-colors duration-200"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Experience ── */}
      <section id="projects" className="bg-[#0a0a0a] px-12 md:px-20 lg:px-28 py-28 border-t border-zinc-800/50">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-10 font-mono">Experience</p>
        <div className="flex flex-col gap-10 max-w-3xl">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="text-zinc-100 font-medium">{job.company}</h3>
                  <p className="text-zinc-400 text-sm flex items-center gap-1.5 mt-0.5">
                    <Briefcase size={12} className="text-zinc-600" />
                    {job.role}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-zinc-500 text-xs font-mono">{job.period}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{job.location}</p>
                </div>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 pl-1">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-zinc-500 text-sm leading-relaxed flex gap-2">
                    <span className="text-zinc-700 mt-1.5 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Certifications & Honors ── */}
      <section className="bg-[#0a0a0a] px-12 md:px-20 lg:px-28 py-28 border-t border-zinc-800/50">
        <div className="grid md:grid-cols-2 gap-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-mono">Certifications</p>
            <ul className="flex flex-col gap-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-zinc-400 text-sm">
                  <Award size={14} className="text-zinc-600 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-mono">Honors & Awards</p>
            <ul className="flex flex-col gap-3">
              {honors.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-zinc-400 text-sm">
                  <span className="text-zinc-700 mt-1 shrink-0">—</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-[#0a0a0a] px-12 md:px-20 lg:px-28 py-28 border-t border-zinc-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-mono">Contact</p>
          <h2 className="text-3xl font-semibold text-zinc-50 mb-3 tracking-tight">Let&apos;s work together.</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Open to full-time roles in AI engineering, GPU computing, and ML infrastructure. Feel free to reach out.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:jenilshingala2002@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-50 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors duration-200 w-fit"
            >
              <Mail size={14} />
              jenilshingala2002@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jenilshingala-39685a219"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-zinc-100 transition-colors duration-200 w-fit"
            >
              <Globe size={14} />
              LinkedIn
              <ExternalLink size={12} className="text-zinc-600" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
