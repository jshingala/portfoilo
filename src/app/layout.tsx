import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jenil Shingala — Portfolio",
  description: "CS graduate & software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoFlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
