import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`isolate fixed top-0 w-full z-[70] transition-colors duration-300
        ${scrolled ? "bg-black" : "bg-black/0"}
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
            {open ? "Zamknij ✕" : "Menu"}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 w-full z-[60] md:hidden transform transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)]
        ${open ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="bg-black text-white pt-28 pb-12 shadow-2xl relative">
          <nav className="flex flex-col items-center gap-8 text-sm tracking-[0.2em] uppercase">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="nav-underline"
            >
              O nas
            </a>
            <a
              href="#courses"
              onClick={() => setOpen(false)}
              className="nav-underline"
            >
              Kursy
            </a>
            <a
              href="#team"
              onClick={() => setOpen(false)}
              className="nav-underline"
            >
              Nasz zespół
            </a>
            <a
              href="#gallery"
              onClick={() => setOpen(false)}
              className="nav-underline"
            >
              Galeria
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="nav-underline"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
