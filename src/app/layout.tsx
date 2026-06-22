import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Chatbot } from "@/components/ui/chatbot";
import { Providers } from "@/components/providers";
import "./globals.css";

const excletusSans = Expletus_Sans({
  variable: "--font-expletus-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jenil Shingala — AI / GPU Engineer",
  description:
    "Portfolio of Jenil Shingala — AI / GPU Engineer specializing in agentic AI, CUDA kernel programming, LLMOps, and full-stack ML deployment.",
  openGraph: {
    title: "Jenil Shingala — AI / GPU Engineer",
    description:
      "Agentic AI · GPU Kernels · CUDA · LLMOps · Full-Stack AI · NVIDIA Certified",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenil Shingala — AI / GPU Engineer",
    description: "Agentic AI · GPU Kernels · CUDA · LLMOps · Full-Stack AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${excletusSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-50">
        {/* Skip to main content — visible on keyboard focus (WCAG 2.4.1) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
