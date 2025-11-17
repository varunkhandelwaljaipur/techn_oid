"use client";

import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen text-center">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto border border-[#00f3ff] p-10 bg-[#0a0a0a] shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          <h2 className="text-4xl font-orbitron text-[#ff00ff] mb-6">SYSTEM_OVERRIDE</h2>
          <p className="text-xl text-gray-300">
            Welcome to <span className="text-[#ffee00]">Technoid 2025</span>. 
            The barrier between Human and Machine has dissolved. 
            Join us in the digital frontier.
          </p>
        </div>
      </section>

      {/* PLACEHOLDERS FOR OTHER SECTIONS */}
      <section className="h-[50vh] flex items-center justify-center bg-black">
        <h2 className="text-3xl font-orbitron text-gray-600">events_loading...</h2>
      </section>
    </main>
  );
}