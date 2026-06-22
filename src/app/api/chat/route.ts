import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a helpful assistant on Jenil Shingala's portfolio website. Answer questions about Jenil concisely and professionally. Keep responses under 120 words. Be friendly and enthusiastic about his work.

About Jenil Shingala:
- Computer Science student at CSU Sacramento, 3.8 GPA, graduating Fall 2025
- Specializes in AI, GPU Computing, Machine Learning, LLMOps, MLOps
- Skills: PyTorch, Triton, CUDA, cuDNN, cuDF, cuML, NCCL, Python, C++, Java, JavaScript, TensorFlow, Keras, HPC, DGX, A100, RIVA, Omniverse, Kubernetes, Slurm, Azure AI, AWS, Docker, Flask, React.js, Linux Kernel
- NVIDIA Certified: Generative AI LLMs & AI Infrastructure and Operations
- Contact: jenilshingala2002@gmail.com | +1 (916) 908-7006 | linkedin.com/in/jenil-shingala-39685a219

Experience:
1. AI Software Engineer Intern @ Advanced Integration & Controls (May–Dec 2025, Sacramento CA)
   - Deployed production agentic RAG on Microsoft Teams for a water/wastewater SCADA firm — 87% productivity gain
   - Built API automations across 5+ data sources with MCP + Power Automate
   - Built LLM evaluation framework with 15+ automated checks

2. Software Engineer @ SentrySight LLC (Sep 2024–May 2025, Sacramento CA)
   - Full-stack AI app: React + AWS (RDS, Lightsail), real-time CV inference <50ms
   - YOLOv8 + CNN pipeline: 91% CNN accuracy, 94% face recognition across 500+ people
   - Cut report generation from 3 hours to 4 minutes with generative AI

3. Embedded Engineer Intern @ Goldfield Weighting Solution (Aug–Dec 2021, Mumbai India)
   - C++ firmware for industrial weighing systems

Key Projects:
- FlashAttention in Triton from scratch: 250× memory reduction vs naive attention at seq 8192
- Automated Package Dimensioning on Raspberry Pi with Intel RealSense (±0.5cm, <3s)
- SentrySight AI Weapon Detection (React + Flask + AWS)
- Ticker Skimmer stock predictor (LSTM + NLP + Gradio)
- Network Intrusion Detection (97% accuracy with CNN/FCNN)

Honors: Dean's Honor List CSU Sacramento, Best Sportsperson Award, NVIDIA DLI bootcamp certifications`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const apiKey = process.env.HUGGINGFACE_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Hugging Face API key not configured. Add HUGGINGFACE_API_KEY to .env.local' },
        { status: 500 }
      )
    }

    const response = await fetch(
      'https://api-inference.huggingface.co/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistralai/Mistral-7B-Instruct-v0.2',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: err }, { status: response.status })
    }

    const data = await response.json()
    const reply =
      data.choices?.[0]?.message?.content?.trim() ??
      "Sorry, I couldn't generate a response right now."

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
