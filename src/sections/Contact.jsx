import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#161a19] text-white py-24 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Kontakt" />

        <div className="grid gap-20 lg:grid-cols-2 items-start">
          <form className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-gold text-black w-10 h-10 flex items-center justify-center">
                  👤
                </span>
                <input
                  type="text"
                  placeholder="Imię"
                  className="w-full bg-transparent border-b border-slate-500 pl-14 pb-2 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-gold text-black w-10 h-10 flex items-center justify-center">
                  ✉️
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-slate-500 pl-14 pb-2 text-sm focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            <div className="relative max-w-sm">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-gold text-black w-10 h-10 flex items-center justify-center">
                ☎️
              </span>
              <input
                type="tel"
                placeholder="Nr telefonu"
                className="w-full bg-transparent border-b border-slate-500 pl-14 pb-2 text-sm focus:outline-none focus:border-gold"
              />
            </div>

            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-gold" />
              <textarea
                rows={6}
                placeholder="Wiadomość"
                className="relative w-full bg-white text-slate-800 p-6 resize-none focus:outline-none"
              />
            </div>

            <div>
              <Button type="submit">Wyślij</Button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full bg-gold" />
            <div className="relative w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5959.518399752153!2d17.02225412707804!3d51.096119017667675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3afd17ac5e3%3A0x16a032b98494b544!2sGrip%20Barber%20Shop%20%26%20Academy!5e0!3m2!1spl!2spl!4v1769784117777!5m2!1spl!2spl"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
