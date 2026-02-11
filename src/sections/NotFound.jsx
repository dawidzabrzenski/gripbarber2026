import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 – Strona nie znaleziona | Grip Barber Academy";
  }, []);

  return (
    <main className="min-h-screen bg-[#171A1B] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <img
          src="/img/logo.svg"
          alt="GRIP Barber Academy"
          className="h-[100px] mx-auto mb-20"
        />

        <div className="text-[120px] font-light text-gold/20 leading-none mb-6">
          404
        </div>

        <h1 className="text-3xl tracking-widest text-gold mb-6 uppercase">
          Strona nie istnieje
        </h1>

        <p className="text-slate-400 mb-10 leading-relaxed">
          Strona, której szukasz, mogła zostać przeniesiona lub nie istnieje.
        </p>

        <Link
          to="/"
          className="inline-block px-10 py-3 bg-gold text-black tracking-widest text-xs uppercase hover:bg-[#b18f52] transition"
        >
          Powrót na stronę główną
        </Link>
      </div>
    </main>
  );
}
