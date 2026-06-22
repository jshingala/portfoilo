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
  title: "Jenil Shingala | AI / GPU Engineer",
  description:
    "Portfolio of Jenil Shingala, AI / GPU Engineer specializing in agentic AI, CUDA kernel programming, LLMOps, and full-stack ML deployment.",
  openGraph: {
    title: "Jenil Shingala | AI / GPU Engineer",
    description:
      "Agentic AI · GPU Kernels · CUDA · LLMOps · Full-Stack AI · NVIDIA Certified",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenil Shingala | AI / GPU Engineer",
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
      <head>
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-[#080808] text-zinc-50">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Fixed video background — behind all pages */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          {/* Global dark veil — ensures text is readable on every page */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.58)" }} />
        </div>

        {/* All content sits above the video at z-index 1 */}
        <Providers>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main id="main-content" style={{ flex: 1 }}>
              {children}
            </main>
            <Chatbot />
          </div>
        </Providers>
      </body>
    </html>
  );
}
