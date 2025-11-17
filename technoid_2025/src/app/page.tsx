"use client";

import Hero from "@/components/sections/hero";
import Event3DCarousel from "@/components/Event3DCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* --- HERO --- */}
      <Hero />

      {/* --- ABOUT STUB --- */}
      <section className="py-24 px-6 text-center bg-cyber-black">
        <div className="max-w-4xl mx-auto border border-neon-cyan/50 p-10 bg-cyber-gray/50 shadow-[0_0_30px_rgba(0,243,255,0.15)]">
          <h2 className="text-4xl font-orbitron text-neon-pink mb-6 glitch-text">
            SYSTEM_OVERRIDE
          </h2>
          <p className="text-xl text-gray-300 font-rajdhani leading-relaxed">
            Welcome to <span className="text-neon-yellow">Technoid 2025</span>. 
            The barrier between Human and Machine has dissolved. 
            Hosted by the Department of Computer Science at St. Xavier's College Jaipur. 
            Join us in the digital frontier.
          </p>
        </div>
      </section>

      {/* --- CAROUSEL SECTION --- */}
      <section className="py-24 relative border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="text-center mb-10">
           <h2 className="text-5xl font-orbitron text-white">
             EVENT <span className="text-neon-pink">LOGS</span>
           </h2>
           <p className="text-neon-cyan mt-2 font-orbitron">/// ACCESSING DATABASE...</p>
        </div>
        
        <Event3DCarousel />
        
        <div className="text-center mt-12">
           <Button asChild>
             <Link href="/events">
               View Full Schedule
             </Link>
           </Button>
        </div>
      </section>
    </main>
  );
}
