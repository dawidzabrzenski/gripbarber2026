import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black backdrop-blur border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between text-white">
        <span className="text-sm tracking-widest uppercase">
          Grip Barber Academy
        </span>

        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
          <a className="hover:text-[#c8a35d]" href="#about">
            O nas
          </a>
          <a className="hover:text-[#c8a35d]" href="#courses">
            Kursy
          </a>
          <a className="hover:text-[#c8a35d]" href="#team">
            Nasz zespół
          </a>
          <a className="hover:text-[#c8a35d]" href="#gallery">
            Galeria
          </a>
          <a className="hover:text-[#c8a35d]" href="#contact">
            Kontakt
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden uppercase tracking-widest text-xs"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 text-white border-t border-white/10">
          <nav className="flex flex-col items-center py-8 gap-6 text-sm tracking-widest uppercase">
            <a href="#about" onClick={() => setOpen(false)}>
              O nas
            </a>
            <a href="#courses" onClick={() => setOpen(false)}>
              Kursy
            </a>
            <a href="#team" onClick={() => setOpen(false)}>
              Nasz zespół
            </a>
            <a href="#gallery" onClick={() => setOpen(false)}>
              Galeria
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
