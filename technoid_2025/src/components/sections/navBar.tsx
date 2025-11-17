import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#00f3ff]/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-orbitron font-bold text-[#00f3ff]">TECHNOID_25</div>
        <div className="hidden md:flex gap-8 font-orbitron text-sm">
            <Link href="/" className="hover:text-[#ffee00] transition-colors">HOME</Link>
            <Link href="/events" className="hover:text-[#ffee00] transition-colors">EVENTS</Link>
            <Link href="/gallery" className="hover:text-[#ffee00] transition-colors">GALLERY</Link>
            <Link href="/sponsors" className="hover:text-[#ffee00] transition-colors">SPONSORS</Link>
            <Link href="/contact" className="hover:text-[#ffee00] transition-colors">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}