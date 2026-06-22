import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Chatbot } from "@/components/ui/chatbot";
import { Providers } from "@/components/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-zinc-50">
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
