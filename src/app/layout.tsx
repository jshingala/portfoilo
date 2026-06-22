import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Chatbot } from "@/components/ui/chatbot";
import "./globals.css";

const excletusSans = Expletus_Sans({
  variable: "--font-expletus-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jenil Shingala Portfolio",
  description: "CS graduate & software engineer",
  icons: {
    icon: '/favicon.png',
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
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
