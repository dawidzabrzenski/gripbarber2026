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
      className={`isolate fixed top-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-black  border-white/10" : "bg-black/0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 h-24 md:h-28 flex items-center justify-between text-white">
        <a href="#" className="h-full flex items-center">
          <img
            src="/img/logo.svg"
            alt="GRIP Barber Academy"
            className="h-[40%] md:h-[60%]"
          />
        </a>

        <nav className="hidden md:flex gap-12 md:text-xs lg:text-base tracking-widest uppercase">
          <a href="#about" className="nav-underline">
            O nas
          </a>
          <a className="nav-underline" href="#courses">
            Kursy
          </a>
          <a className="nav-underline" href="#team">
            Nasz zespół
          </a>
          <a className="nav-underline" href="#gallery">
            Galeria
          </a>
          <a className="nav-underline" href="#contact">
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
        <div className="md:hidden bg-black text-white ">
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
