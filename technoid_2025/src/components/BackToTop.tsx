"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="w-12 h-12 bg-cyber-gray/50 border border-neon-cyan text-neon-cyan flex items-center justify-center transition-all hover:bg-neon-cyan hover:text-black"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
