import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/navBar";
import Footer from "@/components/sections/footer";
import SmoothScroll from "@/components/SmoothScroll";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  title: "Technoid 2025",
  description: "Cyberpunk Edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className="font-rajdhani bg-cyber-black antialiased">
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}