export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 pt-24 pb-8">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top */}
        <div className="grid gap-20 lg:grid-cols-2 items-center mb-20">
          {/* Logo */}
          <div>
            <img
              src="/img/logo.svg"
              alt="GRIP Barber Academy"
              className="h-24"
            />
          </div>

          {/* Social */}
          <div className="text-right">
            <h3 className="text-sm tracking-widest uppercase text-[#c8a35d]">
              Zaobserwuj nas
            </h3>
            <div className="mt-4 ml-auto w-24 h-px bg-[#c8a35d]" />

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex justify-end items-center gap-4">
                {/* SVG ICON */}
                <img src="/img/icon-tiktok.svg" alt="" className="h-5 w-5" />
                <a
                  href="https://www.tiktok.com/gripbarber"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c8a35d] transition"
                >
                  www.tiktok.com/gripbarber
                </a>
              </li>

              <li className="flex justify-end items-center gap-4">
                <img src="/img/icon-facebook.svg" alt="" className="h-5 w-5" />
                <a
                  href="https://www.facebook.com/gripbarber"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c8a35d] transition"
                >
                  www.facebook.com/gripbarber
                </a>
              </li>

              <li className="flex justify-end items-center gap-4">
                <img src="/img/icon-instagram.svg" alt="" className="h-5 w-5" />
                <a
                  href="https://www.instagram.com/gripbarber"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c8a35d] transition"
                >
                  www.instagram.com/gripbarber
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-6 text-center text-xs tracking-widest text-slate-400">
          GRIP | Copyright {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
