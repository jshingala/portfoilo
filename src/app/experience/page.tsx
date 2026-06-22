'use client'

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

function Bold({ children }: { children: string }) {
  const parts = children.split(/(\*\*[^*]+\*\*)/)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**")
          ? <strong key={i} style={{ color: "rgb(57,255,20)", fontWeight: 700 }}>{p.slice(2, -2)}</strong>
          : <span key={i}>{p}</span>
      )}
    </>
  )
}

const experience = [
  {
    company: "Advanced Integration & Controls",
    role: "AI Software Engineer Intern (Project Lead)",
    period: "May 2025 – Dec 2025",
    location: "Sacramento, CA",
    bullets: [
      "Deployed a production **agentic RAG** system on **Microsoft Teams** for a water/wastewater SCADA firm; built a document ingestion + **Azure AI Search** vector pipeline used by engineers daily, raising productivity by **87%**.",
      "Built **API-connected automations** (Bill of Materials, PCN, Monday tools) across **5+ data sources**, including an **MCP integration** to Monday.com and **Power Automate** flows.",
      "Prototyped a **voice-to-documentation** tool for field engineers — speech converted to structured technical docs aligned with company standards.",
      "Built an **LLM evaluation framework** with **15+ automated checks** + human-in-the-loop review, keeping output accurate for non-technical staff.",
    ],
    tags: ["Python", "Azure AI Search", "Agentic RAG", "LLMs", "MCP", "Power Automate", "LLMOps"],
  },
  {
    company: "SentrySight LLC",
    role: "Software Engineer",
    period: "Sep 2024 – May 2025",
    location: "Sacramento, CA",
    bullets: [
      "Deployed a **full-stack AI app** with a React frontend + **AWS backend (RDS, LightSail)**, serving real-time **computer vision** inference at **<50ms latency**.",
      "Built a two-model **deep-learning pipeline** (**YOLOv8** + transfer-learned **CNN**), achieving **91% CNN accuracy** and **94% face-recognition accuracy** across a 500+ person database.",
      "Reduced false positives by **87%** with dual-model agreement logic; owned full lifecycle from design through **CI/CD deployment**.",
      "Applied **generative AI** across 1,000+ production queries, cutting report generation from **3 hours to 4 minutes**.",
      "Built a **QA framework** with **15+ automated checks** + human-in-the-loop review to prevent quality drift before release.",
    ],
    tags: ["React.js", "AWS", "YOLOv8", "CNN", "Flask", "REST APIs", "CI/CD", "Python", "Computer Vision"],
  },
  {
    company: "Goldfield Weighting Solution",
    role: "Embedded Engineer Intern",
    period: "Aug 2021 – Dec 2021",
    location: "Mumbai, India",
    bullets: [
      "Wrote **C++ firmware** for industrial weighing systems; built automated test routines verifying hardware readings against known references.",
      "Applied **OOP design patterns** across the firmware stack for reusability; integrated firmware with physical scale hardware in a team of 4 engineers.",
    ],
    tags: ["C++", "Embedded Systems", "Firmware", "OOP"],
  },
]

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 md:px-20 lg:px-28 pt-28 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase"
          style={{ color: "rgb(57,255,20)" }}>
          Technical Experience
        </h1>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgb(57,255,20), transparent)" }} />

        <div className="flex flex-col">
          {experience.map((job, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="relative flex items-start mb-14"
              >
                <div className="w-1/2 pr-12 flex justify-end">
                  {isLeft && (
                    <div className="w-full max-w-md rounded-xl p-6 border transition-all duration-300"
                      style={{ background: "rgba(0,20,0,0.6)", borderColor: "rgba(57,255,20,0.25)", boxShadow: "0 0 20px rgba(57,255,20,0.05)" }}>
                      <ExperienceCard job={job} align="right" />
                    </div>
                  )}
                </div>

                <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10 w-4 h-4 rounded-full shrink-0"
                  style={{ background: "rgb(57,255,20)", boxShadow: "0 0 10px rgb(57,255,20), 0 0 20px rgba(57,255,20,0.5)" }} />

                <div className="w-1/2 pl-12 flex justify-start">
                  {!isLeft && (
                    <div className="w-full max-w-md rounded-xl p-6 border transition-all duration-300"
                      style={{ background: "rgba(0,20,0,0.6)", borderColor: "rgba(57,255,20,0.25)", boxShadow: "0 0 20px rgba(57,255,20,0.05)" }}>
                      <ExperienceCard job={job} align="left" />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

function ExperienceCard({ job, align }: { job: typeof experience[0]; align: "left" | "right" }) {
  const right = align === "right"
  return (
    <>
      <h2 className={`font-bold text-xl tracking-wide mb-1 ${right ? "text-right" : ""}`}
        style={{ color: "rgb(57,255,20)" }}>
        {job.company}
      </h2>

      <p className={`text-zinc-300 text-base font-semibold mb-1 ${right ? "text-right" : ""}`}>
        {job.role}
      </p>

      <div className={`flex items-center gap-1.5 mb-4 ${right ? "justify-end" : ""}`}>
        <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">{job.period}</p>
        <span className="text-zinc-700 text-xs">·</span>
        <MapPin size={11} className="text-zinc-600" />
        <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">{job.location}</p>
      </div>

      <ul className="flex flex-col gap-2.5 mb-4">
        {job.bullets.map((b, j) => (
          <li key={j} className={`text-zinc-400 text-sm leading-relaxed ${right ? "text-right" : ""}`}>
            <Bold>{b}</Bold>
          </li>
        ))}
      </ul>

      <div className={`flex flex-wrap gap-1.5 ${right ? "justify-end" : ""}`}>
        {job.tags.map((tag) => (
          <span key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wider uppercase"
            style={{ border: "1px solid rgba(57,255,20,0.3)", color: "rgb(57,255,20)", background: "rgba(57,255,20,0.05)" }}>
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}
