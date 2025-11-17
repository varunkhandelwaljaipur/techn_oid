export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center relative">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-4 glitch-text">
            TECHNOID
        </h1>
        <p className="text-xl md:text-2xl text-[#00f3ff] font-orbitron tracking-[0.5em]">
            CYBERPUNK 2025
        </p>
        
        <button className="mt-12 px-8 py-3 border-2 border-[#ffee00] text-[#ffee00] font-orbitron font-bold hover:bg-[#ffee00] hover:text-black transition-all uppercase">
            Initialize Protocol
        </button>
      </div>
    </section>
  );
}