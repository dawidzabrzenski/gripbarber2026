import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 pt-24 pb-10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 md:grid-cols-3 items-start  mb-20">
          <div className="flex justify-center md:justify-start">
            <img
              src="/img/logo.svg"
              alt="GRIP Barber Academy"
              className="h-24"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-sm tracking-[0.25em] uppercase text-gold">
              Kontakt
            </h3>

            <div className="mt-4 w-24 h-px bg-gold" />

            <div className="mt-10 grid grid-cols-1 gap-8">
              <div className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gold " strokeWidth={1.5} />
                  <div className="text-xs tracking-[0.2em] uppercase text-slate-400">
                    Telefon
                  </div>
                </div>
                <a
                  href="tel:+48696035439"
                  title="Zadzwoń"
                  className="text-sm hover:text-gold transition"
                >
                  696 035 439
                </a>
              </div>

              <div className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gold " strokeWidth={1.5} />
                  <div className="text-xs tracking-[0.2em] uppercase text-slate-400">
                    Email
                  </div>
                </div>
                <a
                  href="mailto:gripbarbershopwroclaw@gmail.com?subject=Zapytanie%20ze%20strony"
                  className="text-sm hover:text-gold transition"
                  title="Napisz maila"
                >
                  gripbarbershopwroclaw@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center gap-2 group">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold " strokeWidth={1.5} />
                  <div className="text-xs tracking-[0.2em] uppercase text-slate-400">
                    Adres
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Gwiaździsta+18+Wrocław"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Otwórz w Google Maps"
                  className="text-sm text-slate-600 leading-relaxed hover:text-gold transition"
                >
                  Gwiaździsta 18/8, 53-413, Wrocław
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-sm tracking-[0.25em] uppercase text-gold">
                Zaobserwuj nas
              </h3>

              <div className="mt-4 w-24 h-px bg-gold" />

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-4 justify-center">
                  <img src="/img/icon-tiktok.svg" className="h-5 w-5" />
                  <a
                    href="https://www.tiktok.com/@gripbarbershop_ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                  >
                    TikTok
                  </a>
                </li>

                <li className="flex items-center gap-4 justify-center">
                  <img src="/img/icon-facebook.svg" className="h-5 w-5" />
                  <a
                    href="https://www.facebook.com/people/Grip-Barber-Shop-Academy/61550476376724/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                  >
                    Facebook
                  </a>
                </li>

                <li className="flex items-center gap-4 justify-center">
                  <img src="/img/icon-instagram.svg" className="h-5 w-5" />
                  <a
                    href="https://www.instagram.com/gripbarbershop_academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                  >
                    Instagram
                  </a>
                </li>

                <li className="flex items-center gap-4 justify-center">
                  <img src="/img/icon-booksy.svg" className="h-5 w-5" />
                  <a
                    href="https://booksy.com/pl-pl/206460_grip-barber-shop-academy-ul-gwiazdzista-18_barber-shop_13750_wroclaw#ba_s=seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                  >
                    Booksy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 text-center text-xs tracking-widest text-slate-400">
          GRIP Barber Academy © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
