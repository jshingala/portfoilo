'use client'

import { motion } from "framer-motion"
import { Globe, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "FlashAttention Using Triton GPU Kernel",
    period: "Apr 2026 – Present",
    github: "https://github.com/jshingala/FlashAttention",
    live: null,
    tags: ["Triton", "CUDA", "PyTorch", "GPU Computing"],
    bullets: [
      "Implemented FlashAttention as a fused Triton kernel from first principles using the online-softmax (streaming) recurrence. The full N×N attention matrix is never materialized.",
      "Verified numerically correct against PyTorch (matches softmax(QKᵀ/√d)·V to fp16 tolerance).",
      "At sequence length 8192, peak memory ~17 MB vs ~4.3 GB for naive attention, a ~250× reduction.",
      "Benchmarked against naive attention and PyTorch's scaled_dot_product_attention using CUDA-event timing and peak-memory profiling.",
    ],
  },
  {
    title: "Automated Package Dimensioning & DIM Weight System",
    period: "Nov 2025 – Present",
    github: null,
    live: null,
    tags: ["Raspberry Pi", "Intel RealSense", "Embedded Linux", "Google Cloud"],
    bullets: [
      "Built a fully automated touchless package measurement station on Raspberry Pi 5 using Intel RealSense D415 depth camera. ±0.5 cm accuracy in under 3 seconds.",
      "Implements DIM weight formula (L×W×H / 5000) and picks higher of actual vs. DIM weight, exactly how FedEx and DHL bill.",
      "Deployed at a live warehouse dispatch counter. Zero manual input required after package placement.",
    ],
  },
  {
    title: "SentrySight LLC: AI Powered Weapon Detection",
    period: "Aug 2024 – May 2025",
    github: "https://github.com/jshingala/SentrySight",
    live: null,
    tags: ["React.js", "Flask", "AWS", "Tailwind CSS"],
    bullets: [
      "Deployed on AWS Lightsail with S3 for static assets; AWS RDS for database management.",
      "Developed a Flask API with 99% accuracy metrics and RESTful endpoints for frontend/database communication.",
      "Built a responsive UI using React.js and Tailwind CSS.",
    ],
  },
  {
    title: "Ticker Skimmer: JIT-Optimized Stock Predictor",
    period: "Feb 2025 – Mar 2025",
    github: "https://github.com/jshingala/TicSKIM",
    live: null,
    tags: ["NLP", "LSTM", "PyTorch", "Gradio"],
    bullets: [
      "Engineered a JIT engine that automatically identifies and optimizes frequent code execution paths.",
      "Used NLP to analyze Reddit sentiment; implemented bidirectional LSTM (5-day time steps) for stock predictions.",
      "Built a Gradio web interface for real-time data scraping and visualization.",
    ],
  },
  {
    title: "AI Hackathon: Weapon Detection & Face Recognition",
    period: "Nov 2024 – Dec 2024",
    github: "https://github.com/ZanoTJ/FaceRecognizer",
    live: null,
    tags: ["YOLOv8", "OpenCV", "CNN", "Inception v3"],
    bullets: [
      "Real-time face detection using YOLOv8, achieving 94% accuracy in varied lighting with less than 50ms latency.",
      "Custom CNN face recognition via transfer learning from Inception v3, achieving 91% accuracy across 500+ individuals.",
      "Integrated safety alarm triggers reducing false positive rates by 87%.",
    ],
  },
  {
    title: "Pizza Ordering Mobile Application",
    period: "Aug 2024 – Dec 2024",
    github: "https://github.com/jshingala/PizzaApp",
    live: null,
    tags: ["Android Studio", "Firebase", "Node.js", "REST APIs"],
    bullets: [
      "Native Android app with Firebase backend, real-time order number generation, and secure payment processing.",
      "Automated email confirmation system built with Node.js.",
    ],
  },
  {
    title: "Network Intrusion Detection System",
    period: "Sep 2024 – Oct 2024",
    github: "https://github.com/KOPULEGAM/Network_Intrustion_System",
    live: null,
    tags: ["Machine Learning", "Keras", "CNN", "FCNN"],
    bullets: [
      "FCNNs and CNNs on a large-scale cybersecurity dataset, best model achieved 97% accuracy.",
      "Used Keras Tuner for hyperparameter optimization; evaluated with precision, recall, F1-score, and confusion matrix.",
    ],
  },
  {
    title: "Stock Market Predictor",
    period: "Oct 2024 – Nov 2024",
    github: null,
    live: null,
    tags: ["TensorFlow", "RNN", "CNN", "Python"],
    bullets: [
      "Implemented and evaluated FCNN, CNN, RNN, achieving 92% prediction accuracy.",
      "Tested neuron configs, activation functions, and optimizers; EarlyStopping reduced training time by 35%.",
    ],
  },
  {
    title: "Review Star Predictor (0.37 RMSE)",
    period: "Aug 2024 – Sep 2024",
    github: "https://github.com/KOPULEGAM/Yelp_Dataset",
    live: null,
    tags: ["TensorFlow", "NLP", "TF-IDF", "Pandas"],
    bullets: [
      "Predicted Yelp business ratings by cleaning 8 GB of data with Pandas and encoding reviews using TF-IDF.",
    ],
  },
  {
    title: "Producer-Consumer Synchronization Model",
    period: "Jun 2024 – Aug 2024",
    github: null,
    live: null,
    tags: ["C", "Multithreading", "Semaphores", "Mutex"],
    bullets: [
      "Multi-threaded producer-consumer with two bounded buffers; mutex locks prevent race conditions.",
    ],
  },
  {
    title: "Client-Server Chat Application",
    period: "Mar 2024 – May 2024",
    github: null,
    live: null,
    tags: ["Python", "Socket Programming", "Threading"],
    bullets: [
      "Multi-user chat server supporting 10 concurrent users via Python socket programming and threading.",
    ],
  },
  {
    title: "Role-Based Access Systems",
    period: "Mar 2024 – Aug 2024",
    github: null,
    live: null,
    tags: ["Linux", "Unix", "Bash"],
    bullets: [
      "Implemented RBAC for file/folder permissions with a custom Bash script to automate user creation.",
    ],
  },
  {
    title: "Hand Gesture Media Controller",
    period: "Jan 2021 – Jun 2021",
    github: null,
    live: null,
    tags: ["C++", "Arduino"],
    bullets: [
      "Real-time gesture interpretation for media control using hand movements, achieving approximately 95% recognition accuracy.",
    ],
  },
]

export default function Projects() {
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
          Projects
        </h1>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgb(57,255,20), transparent)" }} />

        <div className="flex flex-col">
          {projects.map((project, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="relative flex items-start mb-10"
              >
                {/* Left side */}
                <div className="w-1/2 pr-12 flex justify-end">
                  {isLeft && (
                    <div className="w-full max-w-md rounded-xl p-5 border transition-all duration-300"
                      style={{
                        background: "rgba(0,20,0,0.6)",
                        borderColor: "rgba(57,255,20,0.25)",
                        boxShadow: "0 0 20px rgba(57,255,20,0.05)"
                      }}>
                      <CardContent project={project} align="right" />
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 top-5 -translate-x-1/2 z-10 w-4 h-4 rounded-full shrink-0"
                  style={{
                    background: "rgb(57,255,20)",
                    boxShadow: "0 0 10px rgb(57,255,20), 0 0 20px rgba(57,255,20,0.5)"
                  }} />

                {/* Right side */}
                <div className="w-1/2 pl-12 flex justify-start">
                  {!isLeft && (
                    <div className="w-full max-w-md rounded-xl p-5 border transition-all duration-300"
                      style={{
                        background: "rgba(0,20,0,0.6)",
                        borderColor: "rgba(57,255,20,0.25)",
                        boxShadow: "0 0 20px rgba(57,255,20,0.05)"
                      }}>
                      <CardContent project={project} align="left" />
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

function CardContent({ project, align }: { project: typeof projects[0]; align: "left" | "right" }) {
  return (
    <>
      <h2 className="font-bold text-lg leading-snug mb-1 tracking-wide"
        style={{ color: "rgb(57,255,20)" }}>
        {project.title}
      </h2>
      <p className="text-zinc-500 text-sm font-mono mb-3 tracking-widest uppercase">{project.period}</p>

      <ul className="flex flex-col gap-2 mb-4">
        {project.bullets.map((b, j) => (
          <li key={j} className={`text-zinc-300 text-base leading-relaxed ${align === "right" ? "text-right" : ""}`}>
            {b}
          </li>
        ))}
      </ul>

      <div className={`flex flex-wrap gap-1.5 mb-3 ${align === "right" ? "justify-end" : ""}`}>
        {project.tags.map((tag) => (
          <span key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wider uppercase"
            style={{
              border: "1px solid rgba(57,255,20,0.3)",
              color: "rgb(57,255,20)",
              background: "rgba(57,255,20,0.05)"
            }}>
            {tag}
          </span>
        ))}
      </div>

      <div className={`flex gap-4 ${align === "right" ? "justify-end" : ""}`}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm tracking-wider uppercase transition-colors duration-200"
            style={{ color: "rgba(57,255,20,0.7)" }}
            onMouseOver={e => (e.currentTarget.style.color = "rgb(57,255,20)")}
            onMouseOut={e => (e.currentTarget.style.color = "rgba(57,255,20,0.7)")}>
            <Globe size={13} /> GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm tracking-wider uppercase transition-colors duration-200"
            style={{ color: "rgba(57,255,20,0.7)" }}>
            <ExternalLink size={13} /> Live
          </a>
        )}
      </div>
    </>
  )
}
